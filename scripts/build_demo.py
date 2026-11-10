"""Bundle the browser demo into one offline HTML file."""
from pathlib import Path
import hashlib
import re
from build_entry_pages import build as build_entry_pages

root = Path(__file__).resolve().parents[1]
demo = root / 'visualization/demo'
build_entry_pages()
html = (demo / 'index.html').read_text(encoding='utf-8')
assets = ['style.css', 'sample-data.js', 'entry-pages.js', 'scene3d.js', 'cost2d.js', 'app.js']
for name in assets:
    version = hashlib.sha256((demo / name).read_bytes()).hexdigest()[:10]
    html = re.sub(r'(["\x27])'+re.escape(name)+r'(?:\?[^"\x27]*)?\1',
                  lambda m: m[1]+name+'?v='+version+m[1], html)
(demo / 'index.html').write_text(html, encoding='utf-8')
html = re.sub(r'<link rel="stylesheet" href="style.css\?v=[^"]+">',
              lambda m: '<style>' + (demo / 'style.css').read_text(encoding='utf-8') + '</style>', html)
for name in ['sample-data.js', 'entry-pages.js', 'scene3d.js', 'cost2d.js', 'app.js']:
    script = (demo / name).read_text(encoding='utf-8').replace('</script', '<\\/script')
    html = re.sub(r'<script src="'+re.escape(name)+r'\?v=[^"]+"></script>',
                  lambda m: '<script>' + script + '</script>', html)
output = root / 'visualization/quantum-speedup-demo.html'
output.write_text(html, encoding='utf-8')
print(output.name)
