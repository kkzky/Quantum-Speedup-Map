"""Bundle the browser demo into one offline HTML file."""
from pathlib import Path

root = Path(__file__).resolve().parents[1]
demo = root / 'visualization/demo'
html = (demo / 'index.html').read_text(encoding='utf-8')
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>' + (demo / 'style.css').read_text(encoding='utf-8') + '</style>')
for name in ['sample-data.js', 'scene3d.js', 'app.js']:
    script = (demo / name).read_text(encoding='utf-8').replace('</script', '<\\/script')
    html = html.replace(f'<script src="{name}"></script>', '<script>' + script + '</script>')
output = root / 'visualization/quantum-speedup-demo.html'
output.write_text(html, encoding='utf-8')
print(output.name)
