# Quantum Speedup Map

The visualization plots 210 problems with quantum algorithms and links to independent problem and algorithm pages. The catalogue also retains the total-Boolean-function complexity theorem as a searchable page. Search accepts problem names and algorithm names. An algorithm match selects its associated problem in a plot; page search opens either type of page.

Both plots support fullscreen, search and reset. Oracle based, Gate based and Other models can be selected independently; the selection applies to both plots and remains available in fullscreen. Entries covering multiple resource models appear under each applicable selection. Point size and label size reflect editorial importance: 32 high-priority entries, 31 medium-priority entries and 147 peripheral entries in the plots. Eight of the high-priority entries use larger, persistent labels, including Grover search, Shor factoring and decoded quantum interferometry. Peripheral points show their labels when selected. The two plots share the selected problem and its complexity comparison, evidence, hardware discussion and source links.

The three-dimensional strength axis uses the catalogue’s four speedup categories. Two boundary planes separate polynomial speedup from the stronger categories, and exponential/subexponential-to-polynomial speedup from the lower categories. Offsets within each category separate overlapping points. The exponential-to-subexponential region uses a narrower interval to reflect its single plotted entry.

The quantum/classical plot uses an ordered, compressed scale for asymptotic growth. Each entry has one point for its principal comparison or the established regime with the strongest quantum advantage. The displayed quantum and classical bounds refer to the same parameter setting. The parameter line identifies that setting briefly. Both sides of the equal-complexity diagonal are shown. Only entries without a matched complexity comparison remain below the main plane.

The comparisons are recorded in `data/cost_geometry_early.json` and `data/cost_geometry_late.json`. These files preserve the formulas, resource model, selected parameters and internal rationale for each placement. The build requires a record for every plotted entry. The axes compress polynomial degrees above two; bounds stated only as polynomial use the `poly(N)` position, and exponential bounds with unspecified constants use the exponential class position. Hardware assessments and their sources remain in `data/hardware_assessments.json`.

Download the [v1.0.0 offline map](https://github.com/kkzky/Quantum-Speedup-Map/releases/download/v1.0.0/quantum-speedup-map-v1.0.0.html), open the locally built `quantum-speedup-map.html`, or serve the website source from the repository root:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

From the repository root, rebuild all data and pages with:

```sh
python -m pip install -r requirements.txt
python scripts/build_all.py
```

Then run `python scripts/package_release.py` to prepare the downloadable files in `dist/` and the deployable website in `_site/`. See [Publishing releases](../docs/releasing.md).

Problem links use `#entry/<slug>`, algorithm links use `#algorithm/<slug>`, and merged applications use `#entry/<slug>/<application>`. These routes also work in the standalone file.

The build combines `sources/catalogue-preview.tex` with the research records in `data/additions/`, exports the JSON and SQLite databases, and renders mathematical expressions as native MathML. `visualization/catalogue-preview.json` mirrors the full catalogue used by the pages.

The website source lives in `site/`. `scripts/build_site.py` reads `VERSION`, updates asset hashes and the release link, and writes the standalone HTML. Production deployment follows published stable Releases. The previous `visualization/demo/` and `quantum-speedup-demo.html` addresses redirect to the corresponding formal entry points, preserving query parameters and page anchors.

Editorial priority and resource-model assignments are stored in `data/visualization_settings.json`.

The most accessible hardware category is labeled NISQ, reflecting its predominance of noisy circuits, analog devices and photonic demonstrations.
