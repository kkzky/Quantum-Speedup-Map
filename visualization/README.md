# Quantum Speedup Map

The visualization plots 210 problems with quantum algorithms and links to independent problem and algorithm pages. The catalogue also retains the total-Boolean-function complexity theorem as a searchable page. Search accepts problem names and algorithm names. An algorithm match selects its associated problem in a plot; page search opens either type of page.

Both plots support fullscreen, search and reset. Oracle based, Gate based and Other models can be selected independently; the selection applies to both plots and remains available in fullscreen. Entries covering multiple resource models appear under each applicable selection. Point size and label size reflect editorial importance: 32 high-priority entries, 31 medium-priority entries and 147 peripheral entries in the plots. Eight of the high-priority entries use larger, persistent labels, including Grover search, Shor factoring and decoded quantum interferometry. Peripheral points show their labels when selected. The two plots share the selected problem and its complexity comparison, evidence, hardware discussion and source links.

The three-dimensional strength axis uses the catalogue’s four speedup categories. Two boundary planes separate polynomial speedup from the stronger categories, and exponential/subexponential-to-polynomial speedup from the lower categories. Offsets within each category separate overlapping points. The exponential-to-subexponential region uses a narrower interval to reflect its single plotted entry.

The quantum/classical plot uses an ordered, compressed scale for asymptotic growth. Its two boundary contours follow the polynomial, subexponential and exponential growth regions. Fixed growth rates use circles; parameter families use curves with diamond handles; unspecified degrees and multiparameter envelopes use regions with square handles. A handle identifies its curve or region, rather than a numerical estimate. Hovering or selecting highlights the full shape, and the comparison panel explains its parameters and assumptions. Both sides of the equal-complexity diagonal are shown. Only entries without a matched complexity comparison remain below the main plane.

The per-entry geometry is recorded in `data/cost_geometry_early.json` and `data/cost_geometry_late.json`. These files preserve the formulas, resource model, parameter dependence and reason for every placement. The build requires a record for every plotted entry. The axes compress polynomial degrees above two; unknown polynomial degrees span the polynomial band, and unknown exponential coefficients span the exponential band. Class envelopes describe the stated level of knowledge, not finite bounds on an unknown coefficient. Hardware assessments and their sources remain in `data/hardware_assessments.json`.

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

Editorial priority and resource-model assignments are stored in `data/visualization_settings.json`.

The most accessible hardware category is labeled NISQ, reflecting its predominance of noisy circuits, analog devices and photonic demonstrations.
