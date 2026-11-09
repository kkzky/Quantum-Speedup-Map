# Asymptotic visualization demo

Open `quantum-speedup-demo.html` in a browser, or serve the editable source:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory visualization/demo
```

Install the build dependencies with `python -m pip install -r scripts/requirements-demo.txt`, then rebuild with `python scripts/build_demo.py`. The build renders the eight complete entries from `data/entries` as HTML and native MathML, and bundles them into the standalone file. Entry links use `#entry/<slug>` and work offline.

Use commas or parentheses for separators in interface text.
