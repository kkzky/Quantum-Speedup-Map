"""Package a committed release and assemble the GitHub Pages deployment directory."""
from datetime import date
from pathlib import Path
import html
import json
import os
import re
import shutil
import subprocess
import zipfile


ROOT = Path(__file__).resolve().parents[1]
SITE_FILES = (
    'index.html', 'style.css', 'sample-data.js', 'entry-pages.js',
    'scene3d.js', 'cost2d.js', 'app.js',
)


def git(*arguments):
    return subprocess.check_output(['git', *arguments], cwd=ROOT)


def text_bytes(path):
    return path.read_text(encoding='utf-8').replace('\r\n', '\n').replace('\r', '\n').encode('utf-8')


def output_directory(name):
    if name not in {'dist', '_site'}:
        raise ValueError('Unsupported output directory')
    target = ROOT / name
    if target.is_symlink() or target.resolve() != ROOT / name:
        raise ValueError(f'Output directory must resolve directly inside the repository: {name}')
    if target.exists() and not target.is_dir():
        raise ValueError(f'Output path is not a directory: {name}')
    return target


def redirect(target):
    return (
        '<!doctype html>\n<html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        '<title>Quantum Speedup Map</title></head><body>'
        '<a href="' + html.escape(target, quote=True) + '">Open Quantum Speedup Map</a>'
        '<script>location.replace(' + json.dumps(target)
        + '+location.search+location.hash);</script></body></html>\n'
    ).encode('utf-8')


def main():
    version = (ROOT / 'VERSION').read_text(encoding='utf-8').strip()
    if not re.fullmatch(r'\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?', version):
        raise ValueError('VERSION must contain a semantic version')
    tag = 'v' + version
    if os.environ.get('RELEASE_TAG', tag) != tag:
        raise ValueError('Release tag does not match VERSION')

    citation = (ROOT / 'CITATION.cff').read_text(encoding='utf-8')
    citation_version = re.search(r'^version:\s*["\']?([^"\'\s]+)', citation, re.M)
    released = re.search(r'^date-released:\s*["\']?(\d{4}-\d{2}-\d{2})', citation, re.M)
    if not citation_version or citation_version[1] != version or not released:
        raise ValueError('CITATION.cff must match VERSION and include date-released')
    release_date = date.fromisoformat(released[1])
    commit = git('rev-parse', 'HEAD').decode('ascii').strip()
    if not re.fullmatch(r'[0-9a-f]{40,64}', commit):
        raise ValueError('Could not resolve the release commit')

    # The release checkout defines the JSON dataset; local untracked records are excluded.
    data_files = sorted(
        ROOT / name.decode('utf-8')
        for name in git('ls-files', '-z', '--', 'data').split(b'\0')
        if name and name.endswith(b'.json')
    )
    if not data_files:
        raise ValueError('No committed JSON dataset found')
    offline = ROOT / 'visualization/quantum-speedup-map.html'
    database = ROOT / 'data/quantum_speedups.sqlite'
    required = [ROOT / 'site' / name for name in SITE_FILES]
    required += [offline, database, ROOT / 'LICENSE', ROOT / 'CITATION.cff', ROOT / 'VERSION']
    required += [ROOT / 'docs/releases' / (tag + '.md')]
    required += data_files
    for source in required:
        if not source.is_file() or source.is_symlink() or not source.resolve().is_relative_to(ROOT):
            raise ValueError(f'Missing or invalid release input: {source.relative_to(ROOT)}')
    for source in [ROOT / 'site/index.html', offline]:
        if f'<meta name="application-version" content="{version}">' not in source.read_text(encoding='utf-8'):
            raise ValueError('Build the website for the current VERSION before packaging')

    # Validate every input and both resolved targets before replacing generated outputs.
    dist, deployed = output_directory('dist'), output_directory('_site')
    for target in [dist, deployed]:
        if target.exists():
            shutil.rmtree(target)
        target.mkdir()

    names = {
        'offline': f'quantum-speedup-map-{tag}.html',
        'data': f'quantum-speedup-map-data-{tag}.zip',
        'database': f'quantum-speedups-{tag}.sqlite',
    }
    manifest = {
        'version': version, 'tag': tag, 'commit': commit,
        'date_released': release_date.isoformat(),
        'release_url': 'https://github.com/kkzky/Quantum-Speedup-Map/releases/tag/' + tag,
        'website': 'https://kkzky.github.io/Quantum-Speedup-Map/',
        'assets': names,
    }
    manifest_bytes = (json.dumps(manifest, ensure_ascii=False, indent=2) + '\n').encode('utf-8')
    (dist / names['offline']).write_bytes(text_bytes(offline))
    shutil.copyfile(database, dist / names['database'])

    archive_entries = {source.relative_to(ROOT).as_posix(): text_bytes(source) for source in data_files}
    for name in ['LICENSE', 'CITATION.cff', 'VERSION']:
        archive_entries[name] = text_bytes(ROOT / name)
    archive_entries['release.json'] = manifest_bytes
    timestamp = (max(1980, release_date.year), release_date.month, release_date.day, 0, 0, 0)
    with zipfile.ZipFile(dist / names['data'], 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name, contents in sorted(archive_entries.items()):
            info = zipfile.ZipInfo(name, date_time=timestamp)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.create_system = 3
            info.external_attr = 0o100644 << 16
            archive.writestr(info, contents, compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)

    for name in SITE_FILES:
        shutil.copyfile(ROOT / 'site' / name, deployed / name)
    for name in ['CITATION.cff', 'VERSION']:
        (deployed / name).write_bytes(text_bytes(ROOT / name))
    (deployed / '.nojekyll').write_bytes(b'')
    (deployed / 'version.json').write_bytes(manifest_bytes)
    (deployed / 'quantum-speedup-map.html').write_bytes(text_bytes(offline))
    aliases = {
        'visualization/demo/index.html': '../../',
        'site/index.html': '../',
        'visualization/quantum-speedup-demo.html': '../quantum-speedup-map.html',
        'visualization/quantum-speedup-map.html': '../quantum-speedup-map.html',
    }
    for name, target in aliases.items():
        destination = deployed / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(redirect(target))

    for name in names.values():
        print('dist/' + name)
    print('_site/')


if __name__ == '__main__':
    main()
