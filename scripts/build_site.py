"""Version the website assets and create the standalone offline map."""
from pathlib import Path
import hashlib
import re
from build_entry_pages import build as build_entry_pages

root = Path(__file__).resolve().parents[1]
site = root / 'site'
version = (root / 'VERSION').read_text(encoding='utf-8').strip()
if not re.fullmatch(r'\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?', version):
    raise ValueError('VERSION must contain a semantic version')
build_entry_pages()
html = (site / 'index.html').read_text(encoding='utf-8')
html = re.sub(r'(<meta name="application-version" content=")[^"]+(">)',
              lambda m: m[1] + version + m[2], html)
html = re.sub(r'<a id="releaseVersion"[^>]*>[^<]*</a>',
              lambda m: '<a id="releaseVersion" href="https://github.com/kkzky/Quantum-Speedup-Map/releases/tag/v' + version + '" target="_blank" rel="noreferrer">v' + version + '</a>', html)
assets = ['style.css', 'sample-data.js', 'entry-pages.js', 'scene3d.js', 'cost2d.js', 'app.js']
for name in assets:
    asset_version = hashlib.sha256((site / name).read_bytes()).hexdigest()[:10]
    html = re.sub(r'(["\x27])'+re.escape(name)+r'(?:\?[^"\x27]*)?\1',
                  lambda m: m[1]+name+'?v='+asset_version+m[1], html)
(site / 'index.html').write_text(html, encoding='utf-8')
html = re.sub(r'<link rel="stylesheet" href="style.css\?v=[^"]+">',
              lambda m: '<style>' + (site / 'style.css').read_text(encoding='utf-8') + '</style>', html)
for name in ['sample-data.js', 'entry-pages.js', 'scene3d.js', 'cost2d.js', 'app.js']:
    script = (site / name).read_text(encoding='utf-8').replace('</script', '<\\/script')
    html = re.sub(r'<script src="'+re.escape(name)+r'\?v=[^"]+"></script>',
                  lambda m: '<script>' + script + '</script>', html)
output = root / 'visualization/quantum-speedup-map.html'
output.write_text(html, encoding='utf-8')
print(output.name)
