# Quantum Speedup Map

The visualization includes every problem in `data/full_catalogue.json` and links to independent problem and algorithm pages. Search accepts problem names and algorithm names. An algorithm match selects its associated problem in a plot; page search opens either type of page.

Both plots support fullscreen, search and reset. Point size and label size reflect editorial importance. Peripheral points show their labels when selected. The two plots share the selected problem and its complexity comparison, evidence, hardware discussion and source links.

The quantum/classical plot uses an ordered, compressed scale for asymptotic growth. The displayed formulas retain their parameters and resource model. Comparisons without a single plotted growth rate appear in the Unspecified complexity strip. Unknown hardware requirements have a separate gray position in the three-dimensional plot.

Open `quantum-speedup-demo.html` directly for the standalone version, or serve the editable source:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory visualization/demo
```

From the repository root, rebuild all data and pages with:

```sh
python -m pip install -r requirements.txt
python scripts/build_all.py
```

Problem links use `#entry/<slug>`, algorithm links use `#algorithm/<slug>`, and merged applications use `#entry/<slug>/<application>`. These routes also work in the standalone file.

The build combines `sources/catalogue-preview.tex` with the research records in `data/additions/`, exports the JSON and SQLite databases, and renders mathematical expressions as native MathML. `visualization/catalogue-preview.json` mirrors the full catalogue used by the pages.
