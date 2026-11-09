# Asymptotic visualization demo

Open `quantum-speedup-demo.html` in a browser, or serve the editable source:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory visualization/demo
```

Install the build dependencies with `python -m pip install -r scripts/requirements-demo.txt`, then rebuild with `python scripts/build_demo.py`. The build reads `sources/catalogue-preview.tex`, exports the problem and algorithm records to `visualization/catalogue-preview.json`, and renders their complete pages as HTML and native MathML. The eight chart examples link into these pages.

Problem links use `#entry/<slug>`, algorithm links use `#algorithm/<slug>`, and merged applications link to `#entry/<slug>/<application>`. These links also work in the standalone offline file. The preview dataset keeps independent algorithm records, their literature, their problem applications, and the catalogue's reciprocal links. The main database remains the preceding snapshot while this demo is under review.

Use commas or parentheses for separators in interface text.
