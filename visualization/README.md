# Continuous-coordinate demo

Open `quantum-speedup-demo.html` in a browser. It is self-contained and works offline. The editable source is in `demo/`; a local server can also serve that directory:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory visualization/demo
```

The eight sample problems have linked 3D and 2D views. Titles identify problems throughout the interface. Internal catalogue identifiers remain in the underlying research database.

## Complexity and strength

At a displayed reference size, each cost is represented by `u(T) = log2(log2(T))`. The 2D horizontal coordinate is quantum cost, descending from left to right; the vertical coordinate is classical cost, descending from top to bottom. Strength is `u(T_C) - u(T_Q)`. Consequently, `T_C -> sqrt(T_C)` has strength 1 and `T_C -> T_C^(1/3)` has strength `log2(3)`. Exponential-to-polynomial comparisons vary continuously with the reference size.

Point color and the 2D background use the identical function of strength. For positive strength s, red saturation is `(1 - exp(-s/3.5))^0.88`; nonpositive strength is white. The exponent and scale set the visual contrast. Their choice does not alter positions or rankings.

Each detail panel identifies the meaning of N, the input-access model and the selected parameter regime. Changing N evaluates the displayed expressions, suppressing the stated constants and lower-order factors. Cross-problem positions describe normalized complexity growth at each problem's natural parameter. They are not benchmark runtimes on a shared machine.

## Evidence and hardware

Evidence retains the catalogue's anchors: 0 for unestablished, 0.5 for partial, 0.75 for conditional and 1 for rigorous oracle comparisons. The seven oracle examples share the last anchor; factoring occupies the conditional anchor.

Hardware uses `log10(Q × G)`, a continuous illustrative logical-resource volume. Q is modeled active logical storage, including coherent tables where applicable. G is modeled coherent work. Query costs are converted using the user's selected gate cost per query; factoring uses its displayed gate model directly. The formulas and chosen workspace coefficients are exposed in the interface and in `demo/app.js`. These coefficients are demo assumptions for exploring the visualization. Architecture-specific physical resources can later replace them with independently sourced estimates.

The complexity formulas and literature are drawn from the database. The bundled sample retains the original citation URLs; the factoring panel also links the concrete RSA-2048 resource estimate. The demo source displays eight problems without their catalogue numbers.

## Interaction

- Drag the 3D view to rotate; scroll to zoom; reset restores both plots.
- Click a point or a problem title to select it in both plots.
- Change the reference size to recompute both plots and their shared colors.
- Change the oracle cost to update hardware estimates.
- Scroll or drag the 2D view to inspect the polynomial region; double-click restores its full range.

The implementation uses native canvas and browser JavaScript, with no external runtime dependencies.
