window.CATALOGUE_POINTS = [
  {
    "slug": "search",
    "name": "Unstructured search",
    "shortName": "Grover search",
    "featured": true,
    "entryNumber": 1,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt N)$",
    "parameter": "N: oracle domain size",
    "parameterHtml": "N: oracle domain size",
    "model": "Boolean-oracle queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "A Fast Quantum Mechanical Algorithm for Database Search",
        "url": "https://arxiv.org/pdf/quant-ph/9605043"
      },
      {
        "title": "Quantum Amplitude Amplification and Estimation",
        "url": "https://arxiv.org/pdf/quant-ph/0005055"
      },
      {
        "title": "Tight Bounds on Quantum Searching",
        "url": "https://arxiv.org/pdf/quant-ph/9605034"
      },
      {
        "title": "Strengths and Weaknesses of Quantum Computing",
        "url": "https://arxiv.org/pdf/quant-ph/9701001"
      },
      {
        "title": "Applying Grover's Algorithm to AES: Quantum Resource Estimates",
        "url": "https://arxiv.org/pdf/1512.04965"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "black-box-discrete-minimization",
    "name": "Black-box discrete minimization",
    "shortName": "Black-box discrete minimization",
    "featured": false,
    "entryNumber": 2,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt N)$",
    "parameter": "N: objective domain size",
    "parameterHtml": "N: objective domain size",
    "model": "Value-oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "A Quantum Algorithm for Finding the Minimum",
        "url": "https://arxiv.org/pdf/quant-ph/9607014"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "constraint-satisfaction-by-backtracking",
    "name": "Constraint satisfaction by backtracking",
    "shortName": "Constraint satisfaction by backtracking",
    "featured": false,
    "entryNumber": 3,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>T</mi><mi>D</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>T</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic in the size of a specified search tree, through a quantum walk. Fixed-domain, fixed-arity instances also admit the displayed subexponential classical bound, whose exponent has no power saving.",
    "gainText": "Nearly quadratic in the size of a specified search tree, through a quantum walk. Fixed-domain, fixed-arity instances also admit the displayed subexponential classical bound, whose exponent has no power saving.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Walk Speedup of Backtracking Algorithms",
        "url": "https://arxiv.org/pdf/1509.02374"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "discrete-optimization-by-branch-and-bound",
    "name": "Discrete optimization by branch and bound",
    "shortName": "Discrete optimization by branch and bound",
    "featured": false,
    "entryNumber": 4,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>Q</mi></msqrt><mspace width=\"0.167em\" /><mi>D</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>Q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic polynomial speedup in the work of the selected classical tree-search procedure, based on quantum tree search and subtree estimation.",
    "gainText": "Nearly quadratic polynomial speedup in the work of the selected classical tree-search procedure, based on quantum tree search and subtree estimation.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in branching, bounding and heuristic-oracle queries; quantum gate complexity additionally includes their reversible implementation costs.",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Speedup of Branch-and-Bound Algorithms",
        "url": "https://arxiv.org/pdf/1906.10375"
      },
      {
        "title": "Universal Quantum Speedup for Branch-and-Bound, Branch-and-Cut, and Tree-Search Algorithms",
        "url": "https://arxiv.org/pdf/2210.03210"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "fixed-width-boolean-satisfiability",
    "name": "Fixed-width Boolean satisfiability",
    "shortName": "Fixed-width Boolean satisfiability",
    "featured": false,
    "entryNumber": 5,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002F;</mo><mi>k</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mi>m</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mn>2</mn><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "The comparison uses quantum gate complexity and classical bit complexity on explicit formula inputs.",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "On Quantum Versions of Record-Breaking Algorithms for SAT",
        "url": "https://www.cs.utep.edu/vladik/2005/tr05-26.pdf"
      },
      {
        "title": "A Probabilistic Algorithm for $k$-SAT and Constraint Satisfaction Problems",
        "url": "https://www.eecs.harvard.edu/~michaelm/CS223/schoning99.pdf"
      },
      {
        "title": "PPSZ Is Better Than You Think",
        "url": "https://theoretics.episciences.org/13222/pdf"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "approximate-counting-of-feasible-assignments",
    "name": "Approximate counting of feasible assignments",
    "shortName": "Approximate counting of feasible assignments",
    "featured": false,
    "entryNumber": 6,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003F5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><msup><mi>&#x003F5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic polynomial improvement in inverse additive precision in the sampling-oracle model, from amplitude estimation. Relative-error improvement also depends on the feasible density <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math></span>.",
    "gainText": "Quadratic polynomial improvement in inverse additive precision in the sampling-oracle model, from amplitude estimation. Relative-error improvement also depends on the feasible density $a$.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Amplitude Amplification and Estimation",
        "url": "https://arxiv.org/pdf/quant-ph/0005055"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "travelling-salesman",
    "name": "Travelling salesman",
    "shortName": "Travelling salesman",
    "featured": false,
    "entryNumber": 7,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.728</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2109</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.2109n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.6891032175013816,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Speedups for Exponential-Time Dynamic Programming Algorithms",
        "url": "https://arxiv.org/pdf/1807.05209"
      },
      {
        "title": "Quantum Speedup of the Traveling-Salesman Problem for Bounded-Degree Graphs",
        "url": "https://arxiv.org/pdf/1612.06203"
      },
      {
        "title": "Path Decompositions of Sparse Graphs via Gaussian Sweeps and Faster Exponential Algorithms",
        "url": "https://serggasp.github.io/pathwidth-site/papers/sparse-pathwidth/14-apps-connectivity.html"
      }
    ],
    "strengthOrder": 1.2672613389746434
  },
  {
    "slug": "set-cover-set-packing-and-set-partition",
    "name": "Set cover, set packing and set partition",
    "shortName": "Set cover, set packing and set partition",
    "featured": false,
    "entryNumber": 8,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7274</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2114</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.2114n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.6886021947351413,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Speedups for Exponential-Time Dynamic Programming Algorithms",
        "url": "https://arxiv.org/pdf/1807.05209"
      },
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      },
      {
        "title": "A $2^{o(n)}$ Time Algorithm for 3-SAT",
        "url": "https://github.com/anthropics/formal-math/tree/main/eth"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.268066468336242
  },
  {
    "slug": "set-multicover-with-repeated-sets",
    "name": "Set multicover with repeated sets",
    "shortName": "Set multicover with repeated sets",
    "featured": false,
    "entryNumber": 9,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>log</mi><mi>n</mi></mrow></msup><msubsup><mi>T</mi><mi>D</mi><mi>n</mi></msubsup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00028;</mo><mi>D</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant for fixed demand in the general lattice comparison, using quantum search. Linear-incidence instances have a subexponential classical comparator.",
    "gainText": "Polynomial speedup through a smaller exponential constant for fixed demand in the general lattice comparison, using quantum search. Linear-incidence instances have a subexponential classical comparator.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Speedups for Dynamic Programming on $n$-Dimensional Lattice Graphs",
        "url": "https://arxiv.org/pdf/2104.14384"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "chromatic-number",
    "name": "Chromatic number",
    "shortName": "Chromatic number",
    "featured": false,
    "entryNumber": 10,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7956</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.1555</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.1555n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.7444660013660953,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.1841802966398844
  },
  {
    "slug": "minimum-steiner-tree",
    "name": "Minimum Steiner tree",
    "shortName": "Minimum Steiner tree",
    "featured": false,
    "entryNumber": 11,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.812</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>&#x003B4;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mi>k</mi></msup><msup><mi>n</mi><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant in terminal count in the general comparison, using amplitude amplification. Sparse unit-weight regimes also have the stated classical vertex-parameter bounds.",
    "gainText": "Polynomial speedup through a smaller exponential constant in terminal count in the general comparison, using amplitude amplification. Sparse unit-weight regimes also have the stated classical vertex-parameter bounds.",
    "parameter": "",
    "parameterHtml": "",
    "model": "The quantum bound uses QRAM time, while classical bounds count RAM operations with the stated weight-arithmetic costs.",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Speedup for the Minimum Steiner Tree Problem",
        "url": "https://arxiv.org/pdf/1904.03581"
      },
      {
        "title": "Path Decompositions of Sparse Graphs via Gaussian Sweeps and Faster Exponential Algorithms",
        "url": "https://serggasp.github.io/pathwidth-site/papers/sparse-pathwidth/14-apps-connectivity.html"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "graph-bandwidth",
    "name": "Graph bandwidth",
    "shortName": "Graph bandwidth",
    "featured": false,
    "entryNumber": 12,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2.946</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>4.383</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.5732</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.5732n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 4.458757430373762,
    "costC": 5.031918678862567,
    "papers": [
      {
        "title": "Quantum Speedups for Exponential-Time Dynamic Programming Algorithms",
        "url": "https://arxiv.org/pdf/1807.05209"
      }
    ],
    "strengthOrder": 1.3677039398948503
  },
  {
    "slug": "exact-treewidth",
    "name": "Exact treewidth",
    "shortName": "Exact treewidth",
    "featured": false,
    "entryNumber": 13,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.538</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7347</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.1736</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.1736n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.5210555032997393,
    "costC": 3.694686183878358,
    "papers": [
      {
        "title": "Quantum Speedups for Treewidth",
        "url": "https://arxiv.org/pdf/2202.08186"
      },
      {
        "title": "Large Induced Subgraphs via Triangulations and CMSO",
        "url": "https://arxiv.org/pdf/1309.1559"
      }
    ],
    "strengthOrder": 1.2795735319244395
  },
  {
    "slug": "pathwidth-and-vertex-separation",
    "name": "Pathwidth and vertex separation",
    "shortName": "Pathwidth and vertex separation",
    "featured": false,
    "entryNumber": 14,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.89</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.05683</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.05683n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.7615584195720286,
    "costC": 3.818386234446348,
    "papers": [
      {
        "title": "Quantum Speedups for Exponential-Time Dynamic Programming Algorithms",
        "url": "https://arxiv.org/pdf/1807.05209"
      },
      {
        "title": "Computing Directed Pathwidth in $O(1.89^n)$ Time",
        "url": "https://doi.org/10.1007/s00453-015-0015-9"
      }
    ],
    "strengthOrder": 1.0659593285647977
  },
  {
    "slug": "minimum-linear-arrangement",
    "name": "Minimum linear arrangement",
    "shortName": "Minimum linear arrangement",
    "featured": false,
    "entryNumber": 15,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.1384</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.1384n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.7615584195720286,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Speedups for Exponential-Time Dynamic Programming Algorithms",
        "url": "https://arxiv.org/pdf/1807.05209"
      },
      {
        "title": "A Note on Exact Algorithms for Vertex Ordering Problems on Graphs",
        "url": "https://doi.org/10.1007/s00224-011-9312-0"
      },
      {
        "title": "A Subexponential Parameterized Algorithm for Interval Completion",
        "url": "https://arxiv.org/pdf/1402.3473"
      }
    ],
    "strengthOrder": 1.160687397723698
  },
  {
    "slug": "worst-case-subset-sum",
    "name": "Worst-case subset sum",
    "shortName": "Worst-case subset sum",
    "featured": false,
    "entryNumber": 18,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi><mo>&#x0002F;</mo><mn>7</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.49</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.49</mn><mi>n</mi></mrow></msup></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi><mo>&#x0002F;</mo><mn>7</mn></mrow></msup></mrow></math></span>. The fastest quantum result uses quantum walks; the <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></span> algorithm uses amplitude amplification.",
    "gainText": "Polynomial speedup from $2^{0.49n}$ to $2^{2n/7}$. The fastest quantum result uses quantum walks; the $2^{n/3}$ algorithm uses amplitude amplification.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Improved Quantum Algorithms for Subset Sum and $k$-SUM",
        "url": "https://arxiv.org/pdf/2608.07309"
      },
      {
        "title": "The Quantum Query Complexity of 0-1 Knapsack and Associated Claw Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0212048"
      },
      {
        "title": "Subset Sum in Time $O(2^{0.49n})$",
        "url": "https://github.com/openai/math/tree/main/preprints/Subset-Sum-in-Time-2-power-0-49n-October-4-2026"
      },
      {
        "title": "A Low-Space Algorithm for Worst-Case Subset Sum",
        "url": "https://github.com/openai/math/tree/main/preprints/A-Low-Space-Algorithm-for-Worst-Case-Subset-Sum-September-26-2026"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "knapsack-and-binary-integer-programming",
    "name": "Knapsack and binary integer programming",
    "shortName": "Knapsack and binary integer programming",
    "featured": false,
    "entryNumber": 19,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>n</mi><mi>d</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.9,
    "costC": 3.9,
    "papers": [
      {
        "title": "The Quantum Query Complexity of 0-1 Knapsack and Associated Claw Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0212048"
      },
      {
        "title": "A Quantum Algorithm for Solving 0-1 Knapsack Problems",
        "url": "https://www.nature.com/articles/s41534-025-01097-8"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ]
  },
  {
    "slug": "independent-set-clique-and-vertex-cover",
    "name": "Independent set, clique and vertex cover",
    "shortName": "Independent set, clique and vertex cover",
    "featured": false,
    "entryNumber": 20,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>5</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.1488</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>E</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "The comparison uses quantum gate complexity and classical bit complexity on explicit graph inputs.",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Complexity Bounds for Independent Set Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0510084"
      },
      {
        "title": "Exact Algorithms for Maximum Independent Set",
        "url": "https://arxiv.org/pdf/1312.6260"
      },
      {
        "title": "A $2^{o(n)}$ Time Algorithm for 3-SAT",
        "url": "https://github.com/anthropics/formal-math/tree/main/eth"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "domatic-number",
    "name": "Domatic number",
    "shortName": "Domatic number",
    "featured": false,
    "entryNumber": 21,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x02212;</mo><mi>&#x003F5;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant for unrestricted domatic number, based on amplitude amplification. Fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span> decision has the subexponential classical comparison above.",
    "gainText": "Polynomial speedup through a smaller exponential constant for unrestricted domatic number, based on amplitude amplification. Fixed-$q$ decision has the subexponential classical comparison above.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      },
      {
        "title": "A $2^{o(n)}$ Time Algorithm for 3-SAT",
        "url": "https://github.com/anthropics/formal-math/tree/main/eth"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "covering-by-maximal-induced-bicliques",
    "name": "Covering by maximal induced bicliques",
    "shortName": "Covering by maximal induced bicliques",
    "featured": false,
    "entryNumber": 24,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.8554</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.1083</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.1083n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.7917302465801184,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.1214153650558647
  },
  {
    "slug": "packing-maximal-induced-matchings",
    "name": "Packing maximal induced matchings",
    "shortName": "Packing maximal induced matchings",
    "featured": false,
    "entryNumber": 25,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.8934</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.07902</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.07902n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.8209792272356293,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      },
      {
        "title": "A $2^{o(n)}$ Time Algorithm for 3-SAT",
        "url": "https://github.com/anthropics/formal-math/tree/main/eth"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.0858008198529685
  },
  {
    "slug": "vertex-arboricity",
    "name": "Vertex arboricity",
    "shortName": "Vertex arboricity",
    "featured": false,
    "entryNumber": 26,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.9629</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.02701</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.02701n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.8729866765336136,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      }
    ],
    "strengthOrder": 1.02776330253835
  },
  {
    "slug": "partition-into-hereditary-graph-classes",
    "name": "Partition into hereditary graph classes",
    "shortName": "Partition into hereditary graph classes",
    "featured": false,
    "entryNumber": 27,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.9149</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.06273</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.06273n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.837269053627492,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.06692949706354
  },
  {
    "slug": "minimum-fill-in",
    "name": "Minimum fill-in",
    "shortName": "Minimum fill-in",
    "featured": false,
    "entryNumber": 28,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7347</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.694686183878358,
    "costC": 3.694686183878358,
    "papers": [
      {
        "title": "Quantum Speedups for Exponential-Time Dynamic Programming Algorithms",
        "url": "https://arxiv.org/pdf/1807.05209"
      },
      {
        "title": "Large Induced Subgraphs via Triangulations and CMSO",
        "url": "https://arxiv.org/pdf/1309.1559"
      }
    ],
    "strength": 0
  },
  {
    "slug": "recursive-fourier-sampling",
    "name": "Recursive Fourier sampling",
    "shortName": "Recursive Fourier sampling",
    "featured": false,
    "entryNumber": 102,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>h</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mi>h</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in the strongest comparison: throughout <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><mi>&#x003C9;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, the quantum cost is polynomial in the oracle address length <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02113;</mi></mrow></math></span>, while the classical cost is superpolynomial. At larger depths within the stated lower-bound range, both costs become superpolynomial and the general bounds describe an intermediate improvement. Fixed depth gives a polynomial query advantage.",
    "gainText": "Subexponential to polynomial in the strongest comparison: throughout $h=\\omega(1)$ and $h=O(\\log n)$, the quantum cost is polynomial in the oracle address length $\\ell$, while the classical cost is superpolynomial. At larger depths within the stated lower-bound range, both costs become superpolynomial and the general bounds describe an intermediate improvement. Fixed depth gives a polynomial query advantage.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in oracle queries, including queries to the functions $g_v$.",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Complexity Theory",
        "url": "https://doi.org/10.1137/S0097539796300921"
      },
      {
        "title": "Upper and Lower Bounds for Recursive Fourier Sampling",
        "url": "https://citeseerx.ist.psu.edu/document?doi=ee55b07d326ac3cb422fa755aae4484ab3b2ad2d&repid=rep1&type=pdf"
      },
      {
        "title": "Quantum Lower Bound for Recursive Fourier Sampling",
        "url": "https://arxiv.org/pdf/quant-ph/0209060"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-q10",
    "name": "Search with wildcards",
    "shortName": "Search with wildcards",
    "featured": false,
    "entryNumber": 203,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt n)$",
    "parameter": "hidden-string length n",
    "parameterHtml": "hidden-string length n",
    "model": "wildcard-equality queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum algorithms for search with wildcards and combinatorial group testing",
        "url": "https://arxiv.org/abs/1210.1148"
      },
      {
        "title": "Quantum Algorithms for Learning Symmetric Juntas via the Adversary Bound",
        "url": "https://arxiv.org/abs/1311.6777"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-q11",
    "name": "Combinatorial group testing",
    "shortName": "Combinatorial group testing",
    "featured": false,
    "entryNumber": 204,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>k</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>k</mi></msqrt><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt k(1+\\log(n/k)))$",
    "parameter": "universe size n and defect count k",
    "parameterHtml": "universe size n and defect count k",
    "model": "subset-intersection queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for Learning Symmetric Juntas via the Adversary Bound",
        "url": "https://arxiv.org/abs/1311.6777"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q12",
    "name": "Gapped group testing",
    "shortName": "Gapped group testing",
    "featured": false,
    "entryNumber": 205,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>d</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>k</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>d</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Up to a fourth-power relation in the appropriate gap regime",
    "gainText": "Up to a fourth-power relation in the appropriate gap regime",
    "parameter": "size threshold k and promise gap d",
    "parameterHtml": "size threshold k and promise gap d",
    "model": "subset-intersection queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Efficient Quantum Algorithms for (Gapped) Group Testing and Junta Testing",
        "url": "https://arxiv.org/abs/1507.03126"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q13",
    "name": "Junta testing",
    "shortName": "Junta testing",
    "featured": false,
    "entryNumber": 206,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002C;</mo><msqrt><mrow><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>&#x003B5;</mi><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>&#x003B5;</mi></mrow></msqrt><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002C;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo>&#x0002B;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic in junta size at constant distance; general error dependence is shown",
    "gainText": "Nearly quadratic in junta size at constant distance; general error dependence is shown",
    "parameter": "Boolean dimension n>=2k, junta size k, and distance 0<epsilon<=1/8",
    "parameterHtml": "Boolean dimension n&gt;=2k, junta size k, and distance 0&lt;epsilon&lt;=1/8",
    "model": "membership queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Optimal Quantum Junta Testing",
        "url": "https://arxiv.org/abs/2609.37926"
      },
      {
        "title": "Quantum Algorithms for Learning and Testing Juntas",
        "url": "https://arxiv.org/abs/0707.3479"
      },
      {
        "title": "Quantum Algorithm for Distribution-Free Junta Testing",
        "url": "https://arxiv.org/abs/1903.08462"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q15",
    "name": "Learning juntas from quantum examples",
    "shortName": "Learning juntas from quantum examples",
    "featured": false,
    "entryNumber": 207,
    "importance": "peripheral",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>n</mi><mo>&#x0002B;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for Learning and Testing Juntas",
        "url": "https://arxiv.org/abs/0707.3479"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q16",
    "name": "Learning DNF from quantum examples",
    "shortName": "Learning DNF from quantum examples",
    "featured": false,
    "entryNumber": 208,
    "importance": "peripheral",
    "resourceModels": [
      "gate",
      "other"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>s</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Quasipolynomial to polynomial when s is polynomial in n",
    "gainText": "Quasipolynomial to polynomial when s is polynomial in n",
    "parameter": "input dimension n, DNF size s, accuracy epsilon",
    "parameterHtml": "input dimension n, DNF size s, accuracy epsilon",
    "model": "example-only learning time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Learning DNF over the Uniform Distribution Using a Quantum Example Oracle",
        "url": "https://epubs.siam.org/doi/10.1137/S0097539795293123"
      },
      {
        "title": "Learning DNFs under product distributions via mu-biased quantum Fourier sampling",
        "url": "https://arxiv.org/abs/1802.05690"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-q18",
    "name": "Exact learning of Fourier-sparse Boolean functions",
    "shortName": "Exact learning of Fourier-sparse Boolean functions",
    "featured": false,
    "entryNumber": 209,
    "importance": "peripheral",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n)$",
    "parameter": "dimension n and Fourier sparsity k",
    "parameterHtml": "dimension n and Fourier sparsity k",
    "model": "uniform quantum examples versus classical labeled samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Nearly Optimal Quantum Sample Complexity of Learning Fourier-Sparse Boolean Functions",
        "url": "https://arxiv.org/abs/2610.17648"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q19",
    "name": "Agnostic learning of decision trees",
    "shortName": "Agnostic learning of decision trees",
    "featured": false,
    "entryNumber": 210,
    "importance": "peripheral",
    "resourceModels": [
      "gate",
      "other"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>t</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mi>log</mi><mi>t</mi></mrow></msup><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quasipolynomial to polynomial for polynomial t",
    "gainText": "Quasipolynomial to polynomial for polynomial t",
    "parameter": "input dimension n and tree size t",
    "parameterHtml": "input dimension n and tree size t",
    "model": "uniform-example agnostic learning time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Efficient Quantum Agnostic Improper Learning of Decision Trees",
        "url": "https://proceedings.mlr.press/v238/chatterjee24a/chatterjee24a.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-q20",
    "name": "Linearity testing of Boolean functions",
    "shortName": "Linearity testing of Boolean functions",
    "featured": false,
    "entryNumber": 211,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(\\varepsilon^{-1/2})$",
    "parameter": "inverse distance 1/epsilon",
    "parameterHtml": "inverse distance 1/epsilon",
    "model": "Boolean membership queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Improved quantum test for linearity of a Boolean function",
        "url": "https://arxiv.org/abs/1306.6195"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-q21",
    "name": "Symmetry testing of Boolean functions",
    "shortName": "Symmetry testing of Boolean functions",
    "featured": false,
    "entryNumber": 212,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>O</mi><mi>&#x003B5;</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(n^{1/4})$",
    "parameter": "Boolean dimension n; fixed distance epsilon",
    "parameterHtml": "Boolean dimension n; fixed distance epsilon",
    "model": "passive example complexity",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 0.25,
    "papers": [
      {
        "title": "Quantum algorithms to check Resiliency, Symmetry and Linearity of a Boolean function",
        "url": "https://eprint.iacr.org/2013/232.pdf"
      },
      {
        "title": "Testing classical properties from quantum data",
        "url": "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.34/LIPIcs.ITCS.2026.34.html"
      }
    ]
  },
  {
    "slug": "prior-q22",
    "name": "Monotonicity testing of Boolean functions",
    "shortName": "Monotonicity testing of Boolean functions",
    "featured": false,
    "entryNumber": 213,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "other"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo>&#x0002C;</mo><mi>n</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial at constant distance",
    "gainText": "Subexponential to polynomial at constant distance",
    "parameter": "Boolean dimension n and distance epsilon",
    "parameterHtml": "Boolean dimension n and distance epsilon",
    "model": "passive quantum examples versus classical labeled samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithm for Monotonicity Testing",
        "url": "https://theoryofcomputing.org/articles/v011a016/v011a016.pdf"
      },
      {
        "title": "Testing classical properties from quantum data",
        "url": "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.34/LIPIcs.ITCS.2026.34.html"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-q25",
    "name": "Triangle-freeness of Boolean functions from examples",
    "shortName": "Triangle-freeness of Boolean functions from examples",
    "featured": false,
    "entryNumber": 214,
    "importance": "peripheral",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>O</mi><mi>&#x003B5;</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$2^{\\Omega(n)}$",
    "parameter": "Boolean dimension n; fixed distance epsilon",
    "parameterHtml": "Boolean dimension n; fixed distance epsilon",
    "model": "passive example complexity",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 3.2333333333333334,
    "papers": [
      {
        "title": "Testing classical properties from quantum data",
        "url": "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.34/LIPIcs.ITCS.2026.34.html"
      }
    ]
  },
  {
    "slug": "prior-q29",
    "name": "Quantum coupon collection",
    "shortName": "Quantum coupon collection",
    "featured": false,
    "entryNumber": 216,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>k</mi><mo>&#x0002C;</mo><mi>n</mi><mo>&#x02212;</mo><mi>k</mi><mo stretchy=\"false\">&#x0007D;</mo><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>k</mi><mo>&#x0002F;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>k</mi><mo>&#x0002C;</mo><mi>n</mi><mo>&#x02212;</mo><mi>k</mi><mo stretchy=\"false\">&#x0007D;</mo><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\log k/\\log(\\min\\{k,n-k\\}+1))$",
    "parameter": "universe size n and unknown support size k<n",
    "parameterHtml": "universe size n and unknown support size k&lt;n",
    "model": "copies of a uniform subset state versus uniform samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Coupon Collector",
        "url": "https://arxiv.org/abs/2002.07688"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q32",
    "name": "Learning symmetric juntas",
    "shortName": "Learning symmetric juntas",
    "featured": false,
    "entryNumber": 219,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>k</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>k</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(k^{3/4}\\log(n/k))$",
    "parameter": "hidden support size k<=n/2",
    "parameterHtml": "hidden support size k&lt;=n/2",
    "model": "membership queries to the exact-half predicate",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.25,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Algorithms for Learning Symmetric Juntas via the Adversary Bound",
        "url": "https://arxiv.org/abs/1311.6777"
      }
    ],
    "strengthOrder": 4.0
  },
  {
    "slug": "prior-q34",
    "name": "Identity and uniformity testing of finite distributions",
    "shortName": "Identity and uniformity testing of finite distributions",
    "featured": false,
    "entryNumber": 220,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(N^{1/6})$",
    "parameter": "domain size N; fixed distance epsilon",
    "parameterHtml": "domain size N; fixed distance epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.3333333333333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "Quantum algorithms for testing properties of distributions",
        "url": "https://arxiv.org/abs/0907.3920"
      },
      {
        "title": "New Results on Quantum Property Testing",
        "url": "https://arxiv.org/abs/1005.0523"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-q36",
    "name": "ℓ_1-closeness testing of finite distributions",
    "shortName": "ℓ_1-closeness testing of finite distributions",
    "featured": false,
    "entryNumber": 221,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>max</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>N</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><msqrt><mi>N</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial in domain size and inverse error",
    "gainText": "Polynomial in domain size and inverse error",
    "parameter": "domain size N and distance epsilon",
    "parameterHtml": "domain size N and distance epsilon",
    "model": "purified preparation queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Succinct quantum testers for closeness and k-wise uniformity of probability distributions",
        "url": "https://arxiv.org/abs/2304.12916"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q37",
    "name": "ℓ_2-closeness testing of finite distributions",
    "shortName": "ℓ_2-closeness testing of finite distributions",
    "featured": false,
    "entryNumber": 222,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(\\varepsilon^{-1})$",
    "parameter": "inverse distance 1/epsilon",
    "parameterHtml": "inverse distance 1/epsilon",
    "model": "purified preparation queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 2,
    "papers": [
      {
        "title": "Succinct quantum testers for closeness and k-wise uniformity of probability distributions",
        "url": "https://arxiv.org/abs/2304.12916"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-q38",
    "name": "Independence testing of a finite joint distribution",
    "shortName": "Independence testing of a finite joint distribution",
    "featured": false,
    "entryNumber": 223,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>m</mi></mrow></msqrt><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>max</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><msqrt><mrow><mi>n</mi><mi>m</mi></mrow></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Parameter-dependent polynomial improvement",
    "gainText": "Parameter-dependent polynomial improvement",
    "parameter": "alphabet sizes n>=m and distance epsilon",
    "parameterHtml": "alphabet sizes n&gt;=m and distance epsilon",
    "model": "purified preparation queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Distributional property testing in a quantum world",
        "url": "https://arxiv.org/abs/1902.00814"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q39",
    "name": "k-wise uniformity testing",
    "shortName": "k-wise uniformity testing",
    "featured": false,
    "entryNumber": 224,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mi>k</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mi>k</mi></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mi>k</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mtext>&#x000A0;relative&#x000A0;to&#x000A0;the&#x000A0;cited&#x000A0;classical&#x000A0;upper&#x000A0;bound</mtext></mrow></math></span>",
    "gainText": "$n^{k/2}/\\varepsilon\\text{ relative to the cited classical upper bound}$",
    "parameter": "dimension n and fixed k; distance epsilon",
    "parameterHtml": "dimension n and fixed k; distance epsilon",
    "model": "purified preparation queries versus classical samples",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Succinct quantum testers for closeness and k-wise uniformity of probability distributions",
        "url": "https://arxiv.org/abs/2304.12916"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q40",
    "name": "Shannon entropy of a finite distribution",
    "shortName": "Shannon entropy of a finite distribution",
    "featured": false,
    "entryNumber": 225,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B5;</mi><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><msup><mi>log</mi><mn>2</mn></msup><mi>N</mi><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic dependence on support size at constant error",
    "gainText": "Nearly quadratic dependence on support size at constant error",
    "parameter": "support bound N and additive accuracy epsilon",
    "parameterHtml": "support bound N and additive accuracy epsilon",
    "model": "purified sample preparation versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Near optimal quantum algorithm for estimating Shannon entropy",
        "url": "https://arxiv.org/abs/2509.07452"
      },
      {
        "title": "Quantum Query Complexity of Entropy Estimation",
        "url": "https://arxiv.org/abs/1710.06025"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q41",
    "name": "Support-size estimation",
    "shortName": "Support-size estimation",
    "featured": false,
    "entryNumber": 226,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>m</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002F;</mo><mi>log</mi><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>m</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt m)$",
    "parameter": "inverse minimum nonzero mass m; fixed accuracy epsilon",
    "parameterHtml": "inverse minimum nonzero mass m; fixed accuracy epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Query Complexity of Entropy Estimation",
        "url": "https://arxiv.org/abs/1710.06025"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-q42",
    "name": "Support-coverage estimation",
    "shortName": "Support-coverage estimation",
    "featured": false,
    "entryNumber": 227,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>t</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x0002F;</mo><mi>log</mi><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>t</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt t)$",
    "parameter": "future sample count t; fixed accuracy epsilon",
    "parameterHtml": "future sample count t; fixed accuracy epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Query Complexity of Entropy Estimation",
        "url": "https://arxiv.org/abs/1710.06025"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-q43",
    "name": "Disjoint-support testing of finite distributions",
    "shortName": "Disjoint-support testing of finite distributions",
    "featured": false,
    "entryNumber": 228,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(N^{1/6})$",
    "parameter": "domain size N; fixed separation epsilon",
    "parameterHtml": "domain size N; fixed separation epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.3333333333333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "Quantum algorithms for testing properties of distributions",
        "url": "https://arxiv.org/abs/0907.3920"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "mst",
    "name": "Minimum spanning tree",
    "shortName": "Minimum spanning tree",
    "featured": false,
    "entryNumber": 31,
    "importance": "high",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(N^{1/2})$",
    "parameter": "N: graph vertices",
    "parameterHtml": "N: graph vertices",
    "model": "Adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum Query Complexity of Some Graph Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0401091"
      },
      {
        "title": "A Randomized Linear-Time Algorithm to Find Minimum Spanning Trees",
        "url": "https://doi.org/10.1145/201019.201022"
      }
    ],
    "strengthOrder": 1.3333333333333333
  },
  {
    "slug": "undirected-graph-connectivity",
    "name": "Undirected graph connectivity",
    "shortName": "Undirected graph connectivity",
    "featured": false,
    "entryNumber": 32,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(N^{1/2})$",
    "parameter": "N: graph vertices",
    "parameterHtml": "N: graph vertices",
    "model": "Adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum Query Complexity of Some Graph Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0401091"
      }
    ],
    "strengthOrder": 1.3333333333333333
  },
  {
    "slug": "strong-connectivity-of-directed-graphs",
    "name": "Strong connectivity of directed graphs",
    "shortName": "Strong connectivity of directed graphs",
    "featured": false,
    "entryNumber": 33,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(N^{1/2})$",
    "parameter": "N: graph vertices",
    "parameterHtml": "N: graph vertices",
    "model": "Adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum Query Complexity of Some Graph Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0401091"
      },
      {
        "title": "Depth-First Search and Linear Graph Algorithms",
        "url": "https://doi.org/10.1137/0201010"
      }
    ],
    "strengthOrder": 1.3333333333333333
  },
  {
    "slug": "single-source-shortest-paths",
    "name": "Single-source shortest paths",
    "shortName": "Single-source shortest paths",
    "featured": false,
    "entryNumber": 34,
    "importance": "high",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msup><mi>log</mi><mn>2</mn></msup><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>log</mi><mn>2</mn></msup><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(N^{1/2}/\\log^2 N)$",
    "parameter": "N: graph vertices",
    "parameterHtml": "N: graph vertices",
    "model": "Adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum Query Complexity of Some Graph Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0401091"
      },
      {
        "title": "Breaking the Sorting Barrier for Directed Single-Source Shortest Paths",
        "url": "https://arxiv.org/pdf/2504.17033"
      }
    ],
    "strengthOrder": 1.3333333333333333
  },
  {
    "slug": "maximum-cardinality-matching",
    "name": "Maximum-cardinality matching",
    "shortName": "Maximum-cardinality matching",
    "featured": false,
    "entryNumber": 35,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msqrt><mrow><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "The comparison uses quantum time with coherent adjacency-array access and classical RAM or field-arithmetic time on explicit graphs.",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for Matching and Network Flows",
        "url": "https://arxiv.org/pdf/quant-ph/0508205"
      },
      {
        "title": "Maximum Flow and Minimum-Cost Flow in Almost-Linear Time",
        "url": "https://arxiv.org/pdf/2203.00671"
      },
      {
        "title": "An Upper Bound of $9/4$ for the Matrix Multiplication Exponent",
        "url": "https://github.com/openai/math/blob/main/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf"
      },
      {
        "title": "Zuiddam, extension to every field (2026)",
        "url": "https://github.com/jzuiddam/omega-nine-quarters-all-fields"
      }
    ],
    "strength": 0
  },
  {
    "slug": "integral-maximum-flow",
    "name": "Integral maximum flow",
    "shortName": "Integral maximum flow",
    "featured": false,
    "entryNumber": 36,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>n</mi><mrow><mn>7</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><msqrt><mi>m</mi></msqrt><mspace width=\"0.167em\" /><msup><mi>U</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><mi>m</mi><msqrt><mrow><mi>n</mi><mi>U</mi></mrow></msqrt><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts quantum time with coherent residual-graph access and classical RAM time for polynomially bounded integral capacities.",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for Matching and Network Flows",
        "url": "https://arxiv.org/pdf/quant-ph/0508205"
      },
      {
        "title": "Maximum Flow and Minimum-Cost Flow in Almost-Linear Time",
        "url": "https://arxiv.org/pdf/2203.00671"
      },
      {
        "title": "A Deterministic Almost-Linear Time Algorithm for Minimum-Cost Flow",
        "url": "https://arxiv.org/pdf/2309.16629"
      }
    ],
    "strength": 0
  },
  {
    "slug": "unweighted-triangle-finding",
    "name": "Unweighted triangle finding",
    "shortName": "Unweighted triangle finding",
    "featured": false,
    "entryNumber": 37,
    "importance": "high",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(N^{3/4})$",
    "parameter": "N: graph vertices",
    "parameterHtml": "N: graph vertices",
    "model": "Adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.25,
    "costC": 2,
    "papers": [
      {
        "title": "Improved Quantum Algorithm for Triangle Finding via Combinatorial Arguments",
        "url": "https://arxiv.org/pdf/1407.0085"
      },
      {
        "title": "An Upper Bound of $9/4$ for the Matrix Multiplication Exponent",
        "url": "https://github.com/openai/math/blob/main/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.6
  },
  {
    "slug": "graph-collision",
    "name": "Graph collision",
    "shortName": "Graph collision",
    "featured": false,
    "entryNumber": 38,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>11</mn><mo>&#x0002F;</mo><mn>17</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>6</mn><mo>&#x0002F;</mo><mn>17</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(N^{6/17})$",
    "parameter": "N: graph vertices",
    "parameterHtml": "N: graph vertices",
    "model": "Vertex-mark queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6470588235294118,
    "costC": 1,
    "papers": [
      {
        "title": "Breaking the Quantum Barriers for Graph Collision",
        "url": "https://arxiv.org/pdf/2611.05356"
      },
      {
        "title": "Span Programs for Functions with Constant-Sized 1-Certificates",
        "url": "https://arxiv.org/pdf/1105.4024"
      }
    ],
    "strengthOrder": 1.5454545454545454
  },
  {
    "slug": "testing-bipartiteness-in-bounded-degree-graphs",
    "name": "Testing bipartiteness in bounded-degree graphs",
    "shortName": "Testing bipartiteness in bounded-degree graphs",
    "featured": false,
    "entryNumber": 39,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(N^{1/6})$",
    "parameter": "N: graph vertices; fixed degree and distance parameters",
    "parameterHtml": "N: graph vertices; fixed degree and distance parameters",
    "model": "Bounded-degree graph queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.3333333333333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "Quantum Property Testing for Bounded-Degree Graphs",
        "url": "https://arxiv.org/pdf/1012.3174"
      },
      {
        "title": "A Sublinear Bipartiteness Tester for Bounded Degree Graphs",
        "url": "https://doi.org/10.1007/s004930050059"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "testing-graph-expansion",
    "name": "Testing graph expansion",
    "shortName": "Testing graph expansion",
    "featured": false,
    "entryNumber": 40,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><mi>&#x003A6;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003A6;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, and quadratic improvement in the walk-time dependence <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003A6;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003A6;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></span>. The mechanism is quantum fast-forwarding and amplitude estimation.",
    "gainText": "Polynomial in $n$, and quadratic improvement in the walk-time dependence $\\Phi^{-2}\\to\\Phi^{-1}$. The mechanism is quantum fast-forwarding and amplitude estimation.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts neighbor queries and quantum or classical operations implementing the prescribed random-walk tester.",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Expansion Testing Using Quantum Fast-Forwarding and Seed Sets",
        "url": "https://arxiv.org/pdf/1907.02369"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "formula",
    "name": "AND–OR formula and game-tree evaluation",
    "shortName": "AND–OR formula and game-tree evaluation",
    "featured": false,
    "entryNumber": 41,
    "importance": "high",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>0.753</mn><mi>&#x02026;</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>N</mi><mrow><mn>0.253</mn><mi>&#x02026;</mi></mrow></msup></mrow></math></span>",
    "gainText": "$N^{0.253\\ldots}$",
    "parameter": "N: leaves of a balanced AND–OR formula",
    "parameterHtml": "N: leaves of a balanced AND–OR formula",
    "model": "Leaf-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 0.753,
    "papers": [
      {
        "title": "Span-Program-Based Quantum Algorithm for Evaluating Formulas",
        "url": "https://theoryofcomputing.org/articles/v008a013/"
      },
      {
        "title": "Reflections for Quantum Query Algorithms",
        "url": "https://arxiv.org/pdf/1005.1601"
      }
    ],
    "strengthOrder": 1.506
  },
  {
    "slug": "matrix-product-verification-over-a-field",
    "name": "Matrix-product verification over a field",
    "shortName": "Matrix-product verification over a field",
    "featured": false,
    "entryNumber": 42,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(N^{1/3})$",
    "parameter": "N: matrix dimension",
    "parameterHtml": "N: matrix dimension",
    "model": "Matrix-entry queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.6666666666666667,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum Verification of Matrix Products",
        "url": "https://arxiv.org/pdf/quant-ph/0409035"
      },
      {
        "title": "Checking Matrix Identities",
        "url": "https://www.math.uwaterloo.ca/~anayak/papers/Nayak08.pdf"
      }
    ],
    "strengthOrder": 1.2
  },
  {
    "slug": "boolean-matrix-product-verification",
    "name": "Boolean matrix-product verification",
    "shortName": "Boolean matrix-product verification",
    "featured": false,
    "entryNumber": 43,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>17</mn><mo>&#x0002F;</mo><mn>12</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>7</mn><mo>&#x0002F;</mo><mn>12</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(N^{7/12})$",
    "parameter": "N: matrix dimension",
    "parameterHtml": "N: matrix dimension",
    "model": "Boolean matrix-entry queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.4166666666666667,
    "costC": 2,
    "papers": [
      {
        "title": "Improved Quantum Query Bounds for Boolean Matrix Product Verification",
        "url": "https://arxiv.org/pdf/2609.40180"
      },
      {
        "title": "Quantum Verification of Matrix Products",
        "url": "https://arxiv.org/pdf/quant-ph/0409035"
      }
    ],
    "strengthOrder": 1.4117647058823528
  },
  {
    "slug": "promised-short-path-st-connectivity",
    "name": "Promised short-path s–t connectivity",
    "shortName": "Promised short-path s–t connectivity",
    "featured": false,
    "entryNumber": 44,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msqrt><mi>d</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial oracle speedup, including <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span> for the unrestricted path-length regime. The mechanism is a span program and quantum reflections.",
    "gainText": "Polynomial oracle speedup, including $n^2\\to n^{3/2}$ for the unrestricted path-length regime. The mechanism is a span program and quantum reflections.",
    "parameter": "",
    "parameterHtml": "",
    "model": "The comparison counts adjacency-matrix queries and the quantum working space used between queries.",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Span Programs and Quantum Algorithms for $st$-Connectivity and Claw Detection",
        "url": "https://arxiv.org/pdf/1203.2603"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "global-minimum-cut",
    "name": "Global minimum cut",
    "shortName": "Global minimum cut",
    "featured": false,
    "entryNumber": 46,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msqrt><mi>&#x003C4;</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial oracle improvement; for bounded weight ratio and dense graphs it is <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>.",
    "gainText": "Polynomial oracle improvement; for bounded weight ratio and dense graphs it is $n^2\\to\\widetilde O(n^{3/2})$.",
    "parameter": "",
    "parameterHtml": "",
    "model": "The quantum comparison counts weighted adjacency queries and running time; classical bounds refer to explicit weighted graphs.",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Complexity of Minimum Cut",
        "url": "https://arxiv.org/pdf/2011.09823"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "maxcut-approximation-with-qaoa",
    "name": "MaxCut approximation with QAOA",
    "shortName": "QAOA (MaxCut)",
    "featured": true,
    "entryNumber": 49,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.87856</mn></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses quantum gate and sample counts, classical arithmetic time for approximation, and classical bit complexity for exact finite-precision instances.",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Quantum Approximate Optimization Algorithm",
        "url": "https://arxiv.org/pdf/1411.4028"
      },
      {
        "title": "Improved Approximation Algorithms for Maximum Cut and Satisfiability Problems Using Semidefinite Programming",
        "url": "https://math.mit.edu/~goemans/PAPERS/maxcut-jacm.pdf"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      },
      {
        "title": "Subexponential-Time Sampling of Quantum Circuits from Exact Counting",
        "url": "https://drive.google.com/file/d/1RzhP9ZMy1xkC22oqKmMHEOh7gG1cwkfA/view"
      },
      {
        "title": "Quantum Approximate Optimization of Non-Planar Graph Problems on a Planar Superconducting Processor",
        "url": "https://arxiv.org/pdf/2004.04197"
      }
    ],
    "strength": 0
  },
  {
    "slug": "bounded-occurrence-max-e3lin2",
    "name": "Bounded-occurrence Max-E3LIN2",
    "shortName": "Bounded-occurrence Max-E3LIN2",
    "featured": false,
    "entryNumber": 50,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>D</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts quantum gates for QAOA, classical arithmetic time for approximation, and bit operations for exact bounded-degree instances.",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Quantum Approximate Optimization Algorithm Applied to a Bounded Occurrence Constraint Problem",
        "url": "https://arxiv.org/pdf/1412.6062"
      },
      {
        "title": "Beating the Random Assignment on Constraint Satisfaction Problems of Bounded Degree",
        "url": "https://arxiv.org/pdf/1505.03424"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "maximum-independent-set-in-rydberg-geometric-graphs",
    "name": "Maximum independent set in Rydberg geometric graphs",
    "shortName": "Maximum independent set in Rydberg geometric graphs",
    "featured": false,
    "entryNumber": 51,
    "importance": "high",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mi>&#x02308;</mi><mi>log</mi><mi>&#x003B4;</mi><mo>&#x0002F;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo><mi>&#x02309;</mi></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Optimization of Maximum Independent Set Using Rydberg Atom Arrays",
        "url": "https://arxiv.org/pdf/2202.09372"
      },
      {
        "title": "A Framework for ETH-Tight Algorithms and Lower Bounds in Geometric Intersection Graphs",
        "url": "https://arxiv.org/pdf/1803.10633"
      }
    ],
    "strength": 0
  },
  {
    "slug": "sherringtonkirkpatrick-spin-glass-optimization",
    "name": "Sherrington–Kirkpatrick spin-glass optimization",
    "shortName": "Sherrington–Kirkpatrick spin-glass optimization",
    "featured": false,
    "entryNumber": 52,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "The Quantum Approximate Optimization Algorithm and the Sherrington–Kirkpatrick Model at Infinite Size",
        "url": "https://arxiv.org/pdf/1910.08187"
      },
      {
        "title": "Optimization of the Sherrington–Kirkpatrick Hamiltonian",
        "url": "https://arxiv.org/pdf/1812.10897"
      },
      {
        "title": "Generalized Short Path Algorithms",
        "url": "https://arxiv.org/pdf/2410.23270"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "exact-bounded-locality-spin-optimization-by-short-paths",
    "name": "Exact bounded-locality spin optimization by short paths",
    "shortName": "Exact bounded-locality spin optimization by short paths",
    "featured": false,
    "entryNumber": 53,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msub><mi>c</mi><mrow><mi mathvariant=\"normal\">c</mi><mi mathvariant=\"normal\">l</mi></mrow></msub><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msub><mi>c</mi><mrow><mi mathvariant=\"normal\">c</mi><mi mathvariant=\"normal\">l</mi></mrow></msub><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity compares quantum gate time with classical bit time for explicitly represented fixed-arity objective functions.",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Mind the Gap: Achieving a Super-Grover Quantum Speedup by Jumping to the End",
        "url": "https://arxiv.org/pdf/2212.01513"
      },
      {
        "title": "Generalized Short Path Algorithms",
        "url": "https://arxiv.org/pdf/2410.23270"
      },
      {
        "title": "Dequantizing Short-Path Quantum Algorithms",
        "url": "https://arxiv.org/pdf/2604.12131"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "partition-functions-and-approximate-combinatorial-counting",
    "name": "Partition functions and approximate combinatorial counting",
    "shortName": "Partition functions and approximate combinatorial counting",
    "featured": false,
    "entryNumber": 54,
    "importance": "high",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x0007C;</mo><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B5;</mi><msqrt><mi>&#x003B4;</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement for the stated sampling model, including <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></span> and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span>. Quantum amplitude estimation and quantum walks supply these factors.",
    "gainText": "Polynomial improvement for the stated sampling model, including $\\varepsilon^{-2}\\to\\varepsilon^{-1}$ and $\\delta^{-1}\\to\\delta^{-1/2}$. Quantum amplitude estimation and quantum walks supply these factors.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts coherent or classical Markov-chain steps and energy evaluations, with arithmetic costs restored for numerical output.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Sublinear-Time Quantum Algorithm for Approximating Partition Functions",
        "url": "https://arxiv.org/pdf/2207.08643"
      },
      {
        "title": "Quantum Speedup of Monte Carlo Methods",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4614442/"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "traversing-a-randomly-welded-pair-of-trees",
    "name": "Traversing a randomly welded pair of trees",
    "shortName": "Traversing a randomly welded pair of trees",
    "featured": false,
    "entryNumber": 55,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential to polynomial, through continuous-time quantum transport and interference.",
    "gainText": "Exponential to polynomial, through continuous-time quantum transport and interference.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts neighbor-oracle queries and quantum gates in the random-label oracle model.",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Exponential Algorithmic Speedup by a Quantum Walk",
        "url": "https://arxiv.org/pdf/quant-ph/0209131"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "gibbs-sampling-and-quantum-simulated-annealing",
    "name": "Gibbs sampling and quantum simulated annealing",
    "shortName": "Gibbs sampling and quantum simulated annealing",
    "featured": false,
    "entryNumber": 56,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><msqrt><mi>&#x003B4;</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic improvement in inverse spectral gap for the specified chain sequence, from quantum-walk phase detection and state transformations. An exponentially small gap gives an improvement in the exponential constant of that chain-based bound.",
    "gainText": "Quadratic improvement in inverse spectral gap for the specified chain sequence, from quantum-walk phase detection and state transformations. An exponentially small gap gives an improvement in the exponential constant of that chain-based bound.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Simulations of Classical Annealing Processes",
        "url": "https://arxiv.org/pdf/0804.1571"
      },
      {
        "title": "Speedup via Quantum Sampling",
        "url": "https://arxiv.org/pdf/0804.4259"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "all-pairs-shortest-paths",
    "name": "All-pairs shortest paths",
    "shortName": "All-pairs shortest paths",
    "featured": false,
    "entryNumber": 59,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2.998</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial for arbitrary real weights: approximately a factor <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>0.498</mn></mrow></msup></mrow></math></span> between the displayed upper bounds, with quantum logarithmic factors suppressed. The mechanism is minimum finding.",
    "gainText": "Polynomial for arbitrary real weights: approximately a factor $n^{0.498}$ between the displayed upper bounds, with quantum logarithmic factors suppressed. The mechanism is minimum finding.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for Shortest Paths Problems in Structured Instances",
        "url": "https://arxiv.org/pdf/1410.6220"
      },
      {
        "title": "Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs",
        "url": "https://arxiv.org/pdf/2610.06783"
      },
      {
        "title": "Rectangular Matrix Multiplication from Polynomial Products",
        "url": "https://arxiv.org/pdf/2610.10494v2"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "optimal-polynomial-intersection-by-decoded-quantum-interferometry",
    "name": "Optimal polynomial intersection by decoded quantum interferometry",
    "shortName": "DQI",
    "featured": true,
    "entryNumber": 60,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>n</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Candidate exponential-to-polynomial advantage for the explicit random-instance approximation target; a superpolynomial query separation for the folded oracle family. The mechanism is decoded Fourier interference.",
    "gainText": "Candidate exponential-to-polynomial advantage for the explicit random-instance approximation target; a superpolynomial query separation for the folded oracle family. The mechanism is decoded Fourier interference.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Optimization by Decoded Quantum Interferometry",
        "url": "https://arxiv.org/pdf/2408.08292"
      },
      {
        "title": "Worst-Case Quantum Algorithm for Optimal Polynomial Intersection Beyond Decoded Quantum Interferometry",
        "url": "https://arxiv.org/pdf/2607.14650"
      },
      {
        "title": "A Provable Quantum Advantage for Approximate Optimization via Decoded Quantum Interferometry",
        "url": "https://arxiv.org/pdf/2610.02145"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "maximum-k-cut-with-variational-quantum-circuits",
    "name": "Maximum k-cut with variational quantum circuits",
    "shortName": "Maximum k-cut with variational quantum circuits",
    "featured": false,
    "entryNumber": 103,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mi>k</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mi>k</mi><mrow><mi>&#x003C9;</mi><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts quantum gates and measurement samples, classical arithmetic for approximation, and bit operations for exact finite-precision optimization.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "From the Quantum Approximate Optimization Algorithm to a Quantum Alternating Operator Ansatz",
        "url": "https://arxiv.org/abs/1709.03489"
      },
      {
        "title": "Efficient Encoding of the Weighted MAX $k$-CUT on a Quantum Computer Using QAOA",
        "url": "https://arxiv.org/abs/2009.01095"
      },
      {
        "title": "Provable Classical and Quantum Local Algorithms for Max-$k$-Cut and Quantum Advantage at Moderate Girth",
        "url": "https://arxiv.org/abs/2609.39042"
      },
      {
        "title": "Hermite Brings a Laptop: Analyzing Frieze–Jerrum Rounding Yields Improved Approximations for Clustering Problems",
        "url": "https://arxiv.org/abs/2609.35453"
      },
      {
        "title": "Optimal 2-Constraint Satisfaction via Sum-Product Algorithms",
        "url": "https://www.cs.helsinki.fi/u/mkhkoivi/publications/ipl-2005.pdf"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "maximum-bisection-with-constraint-preserving-qaoa",
    "name": "Maximum bisection with constraint-preserving QAOA",
    "shortName": "Maximum bisection with constraint-preserving QAOA",
    "featured": false,
    "entryNumber": 104,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.8776</mn></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts quantum gates and samples, classical arithmetic for approximation, and bit operations for exact optimization.",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "From the Quantum Approximate Optimization Algorithm to a Quantum Alternating Operator Ansatz",
        "url": "https://arxiv.org/abs/1709.03489"
      },
      {
        "title": "Better Balance by Being Biased: A 0.8776-Approximation for Max Bisection",
        "url": "https://arxiv.org/abs/1205.0458"
      },
      {
        "title": "Optimal 2-Constraint Satisfaction via Sum-Product Algorithms",
        "url": "https://www.cs.helsinki.fi/u/mkhkoivi/publications/ipl-2005.pdf"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "job-shop-scheduling-with-delivery-and-changeover-costs",
    "name": "Job-shop scheduling with delivery and changeover costs",
    "shortName": "Job-shop scheduling with delivery and changeover costs",
    "featured": false,
    "entryNumber": 105,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>N</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002C;</mo><mi>q</mi><mo>&#x0002C;</mo><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>&#x003C9;</mi><mi>N</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>L</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts quantum gates and measurement samples and classical bit operations for the time-indexed binary formulation.",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Case Study of Variational Quantum Algorithms for a Job Shop Scheduling Problem",
        "url": "https://arxiv.org/abs/2109.03745"
      },
      {
        "title": "Filtering Variational Quantum Algorithms for Combinatorial Optimization",
        "url": "https://arxiv.org/abs/2106.10055"
      },
      {
        "title": "Optimal 2-Constraint Satisfaction via Sum-Product Algorithms",
        "url": "https://www.cs.helsinki.fi/u/mkhkoivi/publications/ipl-2005.pdf"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "discrete-portfolio-rebalancing-with-constrained-mixers",
    "name": "Discrete portfolio rebalancing with constrained mixers",
    "shortName": "Discrete portfolio rebalancing with constrained mixers",
    "featured": false,
    "entryNumber": 106,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>3</mn><mrow><mi>&#x003C9;</mi><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>L</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts circuit gates and samples, with classical bit complexity depending on the coefficient precision.",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Portfolio Rebalancing Experiments Using the Quantum Alternating Operator Ansatz",
        "url": "https://arxiv.org/abs/1911.05296"
      },
      {
        "title": "Optimal 2-Constraint Satisfaction via Sum-Product Algorithms",
        "url": "https://www.cs.helsinki.fi/u/mkhkoivi/publications/ipl-2005.pdf"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "two-community-modularity-maximization-by-variational-local-search",
    "name": "Two-community modularity maximization by variational local search",
    "shortName": "Two-community modularity maximization by variational local search",
    "featured": false,
    "entryNumber": 107,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>I</mi><mi>K</mi><mi>S</mi><mi>p</mi><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>&#x003C9;</mi><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts quantum gates and samples for each local subproblem and classical graph-processing and bit-operation costs for the complete search.",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Network Community Detection on Small Quantum Computers",
        "url": "https://arxiv.org/abs/1810.12484"
      },
      {
        "title": "A New Algorithm for Optimal Constraint Satisfaction and Its Implications",
        "url": "https://people.csail.mit.edu/rrw/2-csp-final.pdf"
      },
      {
        "title": "Optimal 2-Constraint Satisfaction via Sum-Product Algorithms",
        "url": "https://www.cs.helsinki.fi/u/mkhkoivi/publications/ipl-2005.pdf"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "prior-g01",
    "name": "Element distinctness and k-distinctness",
    "shortName": "Element distinctness",
    "featured": true,
    "entryNumber": 108,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></span>",
    "gainText": "$n^{1/3}$",
    "parameter": "n input items",
    "parameterHtml": "n input items",
    "model": "indexed queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum walk algorithm for element distinctness",
        "url": "https://arxiv.org/abs/quant-ph/0311001"
      },
      {
        "title": "Learning-Graph-Based Quantum Algorithm for k-distinctness",
        "url": "https://arxiv.org/abs/1205.1534"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g03",
    "name": "k-sum",
    "shortName": "k-sum",
    "featured": false,
    "entryNumber": 110,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mi>k</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$n^{1/(k+1)}$",
    "parameter": "n items; constant k; sufficiently large group",
    "parameterHtml": "n items; constant k; sufficiently large group",
    "model": "indexed queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum algorithms for subset finding",
        "url": "https://arxiv.org/abs/quant-ph/0311038"
      },
      {
        "title": "Adversary lower bound for the k-sum problem",
        "url": "https://arxiv.org/abs/1206.6528"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g04",
    "name": "Ordered search",
    "shortName": "Ordered search",
    "featured": false,
    "entryNumber": 111,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>ln</mi><mi>n</mi><mo>&#x0002F;</mo><mi>&#x003C0;</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02308;</mi><msub><mi>log</mi><mn>2</mn></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mi>&#x02309;</mi></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n ordered positions",
    "parameterHtml": "n ordered positions",
    "model": "exact comparison queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.18,
    "costC": 0.18,
    "papers": [
      {
        "title": "Optimal Quantum Algorithms for Ordered Search",
        "url": "https://arxiv.org/abs/2609.34293"
      }
    ],
    "strength": 0
  },
  {
    "slug": "prior-g05",
    "name": "Approximate median",
    "shortName": "Approximate median",
    "featured": false,
    "entryNumber": 112,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\varepsilon^{-1})$",
    "parameter": "inverse rank tolerance; n sufficiently large",
    "parameterHtml": "inverse rank tolerance; n sufficiently large",
    "model": "input queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 2,
    "papers": [
      {
        "title": "The quantum query complexity of approximating the median and related statistics",
        "url": "https://arxiv.org/abs/quant-ph/9804066"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g06",
    "name": "Exact string matching",
    "shortName": "Exact string matching",
    "featured": false,
    "entryNumber": 113,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002B;</mo><msqrt><mi>m</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>m</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt{n+m})$",
    "parameter": "text length n and pattern length m",
    "parameterHtml": "text length n and pattern length m",
    "model": "character queries and random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "String Matching in tilde O(sqrt(n)+sqrt(m)) Quantum Time",
        "url": "https://arxiv.org/abs/quant-ph/0011049"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g07",
    "name": "Average-case multidimensional pattern matching",
    "shortName": "Average-case multidimensional pattern matching",
    "featured": false,
    "entryNumber": 114,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "exp_to_subexp",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>m</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>d</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>d</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msqrt><mrow><mi>log</mi><mi>m</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>m</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mi>d</mi></msup><mo>&#x0002B;</mo><msup><mi>n</mi><mrow><mi>d</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Strongest regime: exponential to subexponential in log n when m is comparable to n",
    "gainText": "Strongest regime: exponential to subexponential in log n when m is comparable to n",
    "parameter": "side lengths n,m and dimension d",
    "parameterHtml": "side lengths n,m and dimension d",
    "model": "random-input oracle time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum pattern matching fast on average",
        "url": "https://arxiv.org/abs/1408.1816"
      }
    ],
    "strength": 3.1
  },
  {
    "slug": "prior-g08",
    "name": "Longest common substring",
    "shortName": "Longest common substring",
    "featured": false,
    "entryNumber": 115,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n^{1/3})$",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "character queries and random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g09",
    "name": "Lexicographically minimal cyclic rotation",
    "shortName": "Lexicographically minimal cyclic rotation",
    "featured": false,
    "entryNumber": 116,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x02212;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$n^{1/2-o(1)}$",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g10",
    "name": "Longest square substring",
    "shortName": "Longest square substring",
    "featured": false,
    "entryNumber": 117,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n^{1/2})$",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g12",
    "name": "Longest Lyndon substring",
    "shortName": "Longest Lyndon substring",
    "featured": false,
    "entryNumber": 118,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x02212;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$n^{1/2-o(1)}$",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g14",
    "name": "Longest palindromic substring",
    "shortName": "Longest palindromic substring",
    "featured": false,
    "entryNumber": 119,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt n)$",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Meets Fine-grained Complexity: Sublinear Time Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2010.12122"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g15",
    "name": "Approximate Ulam distance",
    "shortName": "Approximate Ulam distance",
    "featured": false,
    "entryNumber": 120,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>u</mi><mo>&#x0002B;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><mi>u</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde O(1+\\sqrt n/u)$",
    "parameter": "permutation length n and Ulam distance u",
    "parameterHtml": "permutation length n and Ulam distance u",
    "model": "random-access time; fixed approximation error",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Meets Fine-grained Complexity: Sublinear Time Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2010.12122"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g16",
    "name": "Bounded edit distance",
    "shortName": "Bounded edit distance",
    "featured": false,
    "entryNumber": 121,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt{n/k})$",
    "parameter": "length bound n and distance threshold 1<=k<=n",
    "parameterHtml": "length bound n and distance threshold 1&lt;=k&lt;=n",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for Bounded Edit Distance and Lempel-Ziv Factorization",
        "url": "https://arxiv.org/abs/2311.01793"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g17",
    "name": "Pattern matching with mismatches",
    "shortName": "Pattern matching with mismatches",
    "featured": false,
    "entryNumber": 122,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widehat\\Omega(\\sqrt{n/k})$",
    "parameter": "text length n, pattern length m, threshold k",
    "parameterHtml": "text length n, pattern length m, threshold k",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Near-Optimal-Time Quantum Algorithms for Approximate Pattern Matching",
        "url": "https://arxiv.org/abs/2410.06808"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g18",
    "name": "Pattern matching with edits",
    "shortName": "Pattern matching with edits",
    "featured": false,
    "entryNumber": 123,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widehat\\Omega(\\sqrt{n/k})$",
    "parameter": "text length n, pattern length m, threshold k",
    "parameterHtml": "text length n, pattern length m, threshold k",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Near-Optimal-Time Quantum Algorithms for Approximate Pattern Matching",
        "url": "https://arxiv.org/abs/2410.06808"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g19",
    "name": "Lempel–Ziv factorization",
    "shortName": "Lempel–Ziv factorization",
    "featured": false,
    "entryNumber": 124,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>z</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mo>&#x0002F;</mo><mi>z</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt{n/z})$",
    "parameter": "length n and number z of LZ77 phrases",
    "parameterHtml": "length n and number z of LZ77 phrases",
    "model": "random-access time and character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for Bounded Edit Distance and Lempel-Ziv Factorization",
        "url": "https://arxiv.org/abs/2311.01793"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g20",
    "name": "Run-length Burrows–Wheeler transform",
    "shortName": "Run-length Burrows–Wheeler transform",
    "featured": false,
    "entryNumber": 125,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>r</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mo>&#x0002F;</mo><mi>r</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt{n/r})$",
    "parameter": "length n and BWT run count r",
    "parameterHtml": "length n and BWT run count r",
    "model": "random-access time and character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Compressibility-Aware Quantum Algorithms on Strings",
        "url": "https://arxiv.org/abs/2302.07235"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g22",
    "name": "Longest common substring of run-length encoded strings",
    "shortName": "Longest common substring of run-length encoded strings",
    "featured": false,
    "entryNumber": 126,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>d</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "O(n)",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>d</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn><mo>&#x02212;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde O(n^{1/3}d^{1/6-o(1)})$",
    "parameter": "encoded run count n and matched run count d",
    "parameterHtml": "encoded run count n and matched run count d",
    "model": "run queries; word costs include log N",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithm for Finding the Longest Common Substring between Run-Length Encoded Strings",
        "url": "https://arxiv.org/abs/2411.02421"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g23",
    "name": "Star-free regular-language membership",
    "shortName": "Star-free regular-language membership",
    "featured": false,
    "entryNumber": 127,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt n)$",
    "parameter": "word length n; fixed language in the nontrivial star-free class",
    "parameterHtml": "word length n; fixed language in the nontrivial star-free class",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "A Quantum Query Complexity Trichotomy for Regular Languages",
        "url": "https://arxiv.org/abs/1812.04219"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g24",
    "name": "Bounded-height Dyck language",
    "shortName": "Bounded-height Dyck language",
    "featured": false,
    "entryNumber": 128,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>n</mi><mo>&#x0002C;</mo><msqrt><mi>n</mi></msqrt><msup><mi>log</mi><mrow><mi>h</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mi>n</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>max</mo><mo stretchy=\"false\">&#x0007B;</mo><mn>1</mn><mo>&#x0002C;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><msup><mi>log</mi><mrow><mi>h</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mi>n</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(\\max\\{1,\\sqrt n/\\log^{h/2}n\\})$",
    "parameter": "length n and height h",
    "parameterHtml": "length n and height h",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Query Complexity of Dyck Languages with Bounded Height",
        "url": "https://arxiv.org/abs/1912.02176"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g25",
    "name": "Common subsequence of length k",
    "shortName": "Common subsequence of length k",
    "featured": false,
    "entryNumber": 129,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>log</mi><mrow><mi>k</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>log</mi><mrow><mi>k</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(n^{1/3}/\\log^{k-1}n)$",
    "parameter": "string length n; fixed k",
    "parameterHtml": "string length n; fixed k",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum divide and conquer",
        "url": "https://arxiv.org/abs/2210.06419"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g26",
    "name": "Increasing subsequence of length k",
    "shortName": "Increasing subsequence of length k",
    "featured": false,
    "entryNumber": 130,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt n)$",
    "parameter": "sequence length n; fixed k",
    "parameterHtml": "sequence length n; fixed k",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "On the quantum time complexity of divide and conquer",
        "url": "https://arxiv.org/abs/2311.16401"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-g27",
    "name": "Longest substring with distinct characters",
    "shortName": "Longest substring with distinct characters",
    "featured": false,
    "entryNumber": 131,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n^{1/3})$",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "On the quantum time complexity of divide and conquer",
        "url": "https://arxiv.org/abs/2311.16401"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g31",
    "name": "Maximum-sum submatrix",
    "shortName": "Maximum-sum submatrix",
    "featured": false,
    "entryNumber": 132,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>3</mn></msup><mo>&#x0002F;</mo><msup><mn>2</mn><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$n^{1-o(1)}$",
    "parameter": "matrix side length n; word-sized entries",
    "parameterHtml": "matrix side length n; word-sized entries",
    "model": "random-access time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2,
    "costC": 2.1333333333333333,
    "papers": [
      {
        "title": "On the quantum time complexity of divide and conquer",
        "url": "https://arxiv.org/abs/2311.16401"
      },
      {
        "title": "Faster All-Pairs Shortest Paths via Circuit Complexity",
        "url": "https://arxiv.org/abs/1312.6680"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g32",
    "name": "Euclidean closest pair",
    "shortName": "Euclidean closest pair",
    "featured": false,
    "entryNumber": 133,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n^{1/3})$",
    "parameter": "point count n; fixed dimension d",
    "parameterHtml": "point count n; fixed dimension d",
    "model": "randomized word-RAM with coordinate access",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "On the Quantum Complexity of Closest Pair and Related Problems",
        "url": "https://arxiv.org/abs/1911.01973"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g33",
    "name": "Bichromatic closest pair",
    "shortName": "Bichromatic closest pair",
    "featured": false,
    "entryNumber": 134,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003BE;</mi><mrow><mo>&#x02212;</mo><mi>d</mi></mrow></msup><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n^{1/3})$",
    "parameter": "n points; fixed dimension d and error xi",
    "parameterHtml": "n points; fixed dimension d and error xi",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "On the Quantum Complexity of Closest Pair and Related Problems",
        "url": "https://arxiv.org/abs/1911.01973"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g35",
    "name": "Planarity",
    "shortName": "Planarity",
    "featured": false,
    "entryNumber": 136,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span>",
    "gainText": "$n^{1/2}$",
    "parameter": "vertex count n",
    "parameterHtml": "vertex count n",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum query complexity of minor-closed graph properties",
        "url": "https://arxiv.org/abs/1011.1443"
      }
    ],
    "strengthOrder": 1.3333333333333333
  },
  {
    "slug": "prior-g36",
    "name": "Cycle detection",
    "shortName": "Cycle detection",
    "featured": false,
    "entryNumber": 137,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt n)$",
    "parameter": "vertex count n",
    "parameterHtml": "vertex count n",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Time and Space Efficient Quantum Algorithms for Detecting Cycles and Testing Bipartiteness",
        "url": "https://arxiv.org/abs/1610.00581"
      }
    ],
    "strengthOrder": 1.3333333333333333
  },
  {
    "slug": "prior-g37",
    "name": "Fixed-subgraph containment",
    "shortName": "Fixed-subgraph containment",
    "featured": false,
    "entryNumber": 138,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002F;</mo><mi>k</mi><mo>&#x02212;</mo><mi>t</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mi>k</mi><mo>&#x0002B;</mo><mi>t</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(n^{2/k+t})$",
    "parameter": "n host vertices; fixed pattern parameters k,m,d and t as defined",
    "parameterHtml": "n host vertices; fixed pattern parameters k,m,d and t as defined",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A learning graph based quantum query algorithm for finding constant-size subgraphs",
        "url": "https://arxiv.org/abs/1109.5135"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g38",
    "name": "Cycle finding from an edge list",
    "shortName": "Cycle finding from an edge list",
    "featured": false,
    "entryNumber": 139,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>m</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>k</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></msup><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "O(m)",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>k</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></msup><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$m^{1/4+1/(2^{k+2}-4)-o(1)}$",
    "parameter": "m edges and fixed cycle parameter k",
    "parameterHtml": "m edges and fixed cycle parameter k",
    "model": "edge-list queries under the stated degree promise",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms on Edge Lists: Hiding, Shuffling, and Cycle Finding",
        "url": "https://arxiv.org/abs/2412.17786"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g42",
    "name": "Distributed graph diameter",
    "shortName": "Distributed graph diameter",
    "featured": false,
    "entryNumber": 140,
    "importance": "peripheral",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>D</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mo>&#x0002F;</mo><mi>D</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(\\sqrt{n/D})$",
    "parameter": "n vertices and network diameter D",
    "parameterHtml": "n vertices and network diameter D",
    "model": "CONGEST communication rounds",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Sublinear-Time Quantum Computation of the Diameter in CONGEST Networks",
        "url": "https://arxiv.org/abs/1804.02917"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g43",
    "name": "Boolean matrix multiplication",
    "shortName": "Boolean matrix multiplication",
    "featured": false,
    "entryNumber": 141,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msqrt><mrow><mi>&#x02113;</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>&#x02113;</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Theta(n/\\sqrt{\\ell+1})$",
    "parameter": "matrix dimension n and number ell of nonzero product entries",
    "parameterHtml": "matrix dimension n and number ell of nonzero product entries",
    "model": "input-entry queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Time-Efficient Output-Sensitive Quantum Algorithm for Boolean Matrix Multiplication",
        "url": "https://arxiv.org/abs/1201.6174"
      },
      {
        "title": "Improving Quantum Query Complexity of Boolean Matrix Multiplication Using Graph Collision",
        "url": "https://arxiv.org/abs/1112.5855"
      },
      {
        "title": "Output-Sparse Matrix Multiplication Using Compressed Sensing",
        "url": "https://arxiv.org/abs/2508.10250"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g44",
    "name": "Random spanning-tree sampling",
    "shortName": "Random spanning-tree sampling",
    "featured": false,
    "entryNumber": 142,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>m</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Theta(\\sqrt{m/n})$",
    "parameter": "n vertices and m edges; constant sampling error",
    "parameterHtml": "n vertices and m edges; constant sampling error",
    "model": "weighted adjacency-list queries and coherent-RAM time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Speedup for Sampling Random Spanning Trees",
        "url": "https://arxiv.org/abs/2504.15603"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g45",
    "name": "Signed graph clusterability testing",
    "shortName": "Signed graph clusterability testing",
    "featured": false,
    "entryNumber": 143,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n^{1/6})$",
    "parameter": "vertex count n; fixed degree and distance",
    "parameterHtml": "vertex count n; fixed degree and distance",
    "model": "neighbor queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.3333333333333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "(Quantum) complexity of testing signed graph clusterability",
        "url": "https://arxiv.org/abs/2311.10480"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-g46",
    "name": "Directed subgraph-freeness testing",
    "shortName": "Directed subgraph-freeness testing",
    "featured": false,
    "entryNumber": 144,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>k</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>k</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$n^{1/2-1/k+1/(2(2^k-1))}$",
    "parameter": "n vertices; fixed k-source star pattern",
    "parameterHtml": "n vertices; fixed k-source star pattern",
    "model": "outgoing-neighbor queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum property testing in sparse directed graphs",
        "url": "https://arxiv.org/abs/2410.05001"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-g47",
    "name": "Directed fixed-length path containment",
    "shortName": "Directed fixed-length path containment",
    "featured": false,
    "entryNumber": 145,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x02212;</mo><msub><mi>&#x003B1;</mi><mi>k</mi></msub></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><msub><mi>&#x003B1;</mi><mi>k</mi></msub></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(n^{1/2+\\alpha_k})$",
    "parameter": "n vertices and fixed path length k",
    "parameterHtml": "n vertices and fixed path length k",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum algorithms for path and cycle containment problems",
        "url": "https://arxiv.org/abs/2605.09017"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-q30",
    "name": "Learning a graph with edge-existence queries",
    "shortName": "Learning a graph with edge-existence queries",
    "featured": false,
    "entryNumber": 217,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(m^{1/4})$",
    "parameter": "m edges; promised sparse matching or cycle family",
    "parameterHtml": "m edges; promised sparse matching or cycle family",
    "model": "induced-subgraph edge-existence queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.75,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum algorithms for learning a hidden graph and beyond",
        "url": "https://arxiv.org/abs/2011.08611"
      }
    ],
    "strengthOrder": 1.3333333333333333
  },
  {
    "slug": "prior-q31",
    "name": "Learning a graph with edge-parity queries",
    "shortName": "Learning a graph with edge-parity queries",
    "featured": false,
    "entryNumber": 218,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>m</mi></msqrt><mi>log</mi><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo>&#x0002F;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial query separation; stronger for structured graph families",
    "gainText": "Polynomial query separation; stronger for structured graph families",
    "parameter": "n vertices and m unknown edges",
    "parameterHtml": "n vertices and m unknown edges",
    "model": "induced-edge-parity queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum algorithms for learning a hidden graph and beyond",
        "url": "https://arxiv.org/abs/2011.08611"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "spatial-lattice-search",
    "name": "Spatial search on a lattice",
    "shortName": "Spatial search on a lattice",
    "featured": false,
    "entryNumber": 194,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>N</mi><mi>log</mi><mi>N</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>N</mi><mo>&#x0002F;</mo><mi>log</mi><mi>N</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(\\sqrt{N/\\log N})$",
    "parameter": "$N$ vertices; displayed case $d=2$.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi></mrow></math></span> vertices; displayed case <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mo>&#x0003D;</mo><mn>2</mn></mrow></math></span>.",
    "model": "Local movement and oracle steps",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Faster quantum walk algorithm for the two dimensional spatial search",
        "url": "https://arxiv.org/abs/0801.0497"
      },
      {
        "title": "Quantum Search of Spatial Regions",
        "url": "https://toc.ilab.sztaki.hu/articles/v001a004/index.html"
      },
      {
        "title": "Electrostatic Limits on Quantum Spatial Search",
        "url": "https://arxiv.org/abs/2610.23560"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "factoring",
    "name": "Integer factorization",
    "shortName": "Shor factoring",
    "featured": true,
    "entryNumber": 61,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>c</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\exp(\\Theta(N^{1/3}(\\log N)^{2/3}))$",
    "parameter": "N: integer bit length",
    "parameterHtml": "N: integer bit length",
    "model": "Quantum gates / heuristic GNFS time",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.06,
    "costC": 2.648,
    "papers": [
      {
        "title": "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
        "url": "https://arxiv.org/pdf/quant-ph/9508027"
      },
      {
        "title": "An Efficient Quantum Factoring Algorithm",
        "url": "https://arxiv.org/pdf/2308.06572"
      },
      {
        "title": "Unconditional Correctness of Recent Quantum Algorithms for Factoring and Computing Discrete Logarithms",
        "url": "https://www.cambridge.org/core/journals/forum-of-mathematics-pi/article/unconditional-correctness-of-recent-quantum-algorithms-for-factoring-and-computing-discrete-logarithms/3077F5BD48D1F62000B1ED800EB86308"
      },
      {
        "title": "How to Factor 2048 Bit RSA Integers with Less Than a Million Noisy Qubits",
        "url": "https://arxiv.org/pdf/2505.15917"
      },
      {
        "title": "Deterministic Factoring in Time $N^{o(1)}$",
        "url": "https://hexagonmath.org/2610.00600v1"
      }
    ],
    "strength": 2.8258332367585934
  },
  {
    "slug": "discrete-logarithms-in-finite-fields",
    "name": "Discrete logarithms in finite fields",
    "shortName": "Discrete logarithms in finite fields",
    "featured": false,
    "entryNumber": 62,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>3</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>L</mi><mi>q</mi></msub><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn><mo>&#x0002C;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>64</mn><mo>&#x0002F;</mo><mn>9</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">]</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial for large prime fields; quasi-polynomial to polynomial in the stated small-characteristic families. The quantum mechanism is abelian Fourier sampling.",
    "gainText": "Subexponential to polynomial for large prime fields; quasi-polynomial to polynomial in the stated small-characteristic families. The quantum mechanism is abelian Fourier sampling.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
        "url": "https://arxiv.org/pdf/quant-ph/9508027"
      },
      {
        "title": "A Heuristic Quasi-Polynomial Algorithm for Discrete Logarithm in Finite Fields of Small Characteristic",
        "url": "https://arxiv.org/pdf/1306.4244"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "elliptic-curve-discrete-logarithm",
    "name": "Elliptic-curve discrete logarithm",
    "shortName": "Elliptic-curve discrete logarithm",
    "featured": false,
    "entryNumber": 63,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>3</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Subexponential to polynomial for explicit prime-field curves, through Fourier sampling. The generic-group comparison is exponential to polynomial.",
    "gainText": "Subexponential to polynomial for explicit prime-field curves, through Fourier sampling. The generic-group comparison is exponential to polynomial.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
        "url": "https://arxiv.org/pdf/quant-ph/9508027"
      },
      {
        "title": "Quantum Resource Estimates for Computing Elliptic Curve Discrete Logarithms",
        "url": "https://arxiv.org/pdf/1706.06752"
      },
      {
        "title": "A Subexponential Time Algorithm for Elliptic Curve Discrete Logarithm",
        "url": "https://github.com/bochum-crypto/subexponential-ecdl/blob/main/subexponential-ecdl.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "order-finding-in-a-black-box-cyclic-group",
    "name": "Order finding in a black-box cyclic group",
    "shortName": "Order finding in a black-box cyclic group",
    "featured": false,
    "entryNumber": 64,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>R</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>R</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>R</mi></mrow></math></span> relative to generic order-search algorithms. Fourier sampling extracts global periodic information from the group operation.",
    "gainText": "Exponential to polynomial in $\\log R$ relative to generic order-search algorithms. Fourier sampling extracts global periodic information from the group operation.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in group-oracle operations together with quantum gates and classical bit operations polynomial in the encoding length.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
        "url": "https://arxiv.org/pdf/quant-ph/9508027"
      },
      {
        "title": "Quantum Algorithms for Solvable Groups",
        "url": "https://arxiv.org/pdf/quant-ph/0011023"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "pell-s-equation-and-the-real-quadratic-regulator",
    "name": "Pell's equation and the real quadratic regulator",
    "shortName": "Pell's equation and the real quadratic regulator",
    "featured": false,
    "entryNumber": 65,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>d</mi><mo>&#x0002C;</mo><mtext>precision</mtext><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>L</mi><mi>d</mi></msub><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>d</mi></mrow></math></span>, through Fourier sampling of a periodic function over the reals.",
    "gainText": "Subexponential to polynomial in $\\log d$, through Fourier sampling of a periodic function over the reals.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in quantum gates and classical bit operations, including the required output precision.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Polynomial-Time Quantum Algorithms for Pell's Equation and the Principal Ideal Problem",
        "url": "https://www.cse.psu.edu/~sjh26/pell.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "the-principal-ideal-problem",
    "name": "The principal ideal problem",
    "shortName": "The principal ideal problem",
    "featured": false,
    "entryNumber": 66,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "Polynomial time in the input parameters, Hallgren and Biasse–Song principal-ideal algorithms.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>L</mi><mrow><mo stretchy=\"false\">&#x0007C;</mo><msub><mi>&#x00394;</mi><mi>K</mi></msub><mo stretchy=\"false\">&#x0007C;</mo></mrow></msub><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in the matched quadratic-field regime. Quantum Fourier methods supply the hidden-lattice information needed for the generator.",
    "gainText": "Subexponential to polynomial in the matched quadratic-field regime. Quantum Fourier methods supply the hidden-lattice information needed for the generator.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in quantum gates and classical bit operations on the number-field and ideal encodings, with compact output.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Polynomial-Time Quantum Algorithms for Pell's Equation and the Principal Ideal Problem",
        "url": "https://www.cse.psu.edu/~sjh26/pell.pdf"
      },
      {
        "title": "Efficient Quantum Algorithms for Computing Class Groups and Solving the Principal Ideal Problem in Arbitrary Degree Number Fields",
        "url": "https://fangsong.info/files/pubs/BS_SODA16.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "computing-ideal-class-groups",
    "name": "Computing ideal class groups",
    "shortName": "Computing ideal class groups",
    "featured": false,
    "entryNumber": 67,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "Polynomial time under GRH, Biasse–Song class-group computation.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>L</mi><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x00394;</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></msub><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in the quadratic-field regime, through hidden-lattice Fourier methods.",
    "gainText": "Subexponential to polynomial in the quadratic-field regime, through hidden-lattice Fourier methods.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in quantum gates and classical bit operations on explicit number-field and ideal representations.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Efficient Quantum Algorithms for Computing Class Groups and Solving the Principal Ideal Problem in Arbitrary Degree Number Fields",
        "url": "https://fangsong.info/files/pubs/BS_SODA16.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "vectorization-for-commutative-isogeny-actions",
    "name": "Vectorization for commutative isogeny actions",
    "shortName": "Vectorization for commutative isogeny actions",
    "featured": false,
    "entryNumber": 68,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><msup><mn>2</mn><mi>t</mi></msup><msup><mi>p</mi><mi>k</mi></msup><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>N</mi></mrow></math></span> for generic actions with <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mi>t</mi></msup><msup><mi>p</mi><mi>k</mi></msup><mi>G</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007B;</mo><mn>0</mn><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span> and fixed <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>p</mi><mo>&#x0002C;</mo><mi>t</mi><mo>&#x0002C;</mo><mi>k</mi></mrow></math></span>. General abelian hidden shifts give exponential-to-subexponential improvement, with power saving in the exponent. These comparisons use the action-oracle model; explicit isogeny costs include arithmetic evaluation.",
    "gainText": "Exponential to polynomial in $\\log N$ for generic actions with $2^tp^kG=\\{0\\}$ and fixed $p,t,k$. General abelian hidden shifts give exponential-to-subexponential improvement, with power saving in the exponent. These comparisons use the action-oracle model; explicit isogeny costs include arithmetic evaluation.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Two Remarks on the Vectorization Problem",
        "url": "https://eprint.iacr.org/2022/1366"
      },
      {
        "title": "Another Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem",
        "url": "https://arxiv.org/pdf/1112.3333"
      },
      {
        "title": "A Subexponential Time Algorithm for the Dihedral Hidden Subgroup Problem with Polynomial Space",
        "url": "https://arxiv.org/pdf/quant-ph/0406151"
      },
      {
        "title": "Constructing Elliptic Curve Isogenies in Quantum Subexponential Time",
        "url": "https://arxiv.org/pdf/1012.4019"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "supersingular-isogeny-path-finding",
    "name": "Supersingular isogeny path finding",
    "shortName": "Supersingular isogeny path finding",
    "featured": false,
    "entryNumber": 69,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>p</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>p</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant in the input bit length <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>p</mi></mrow></math></span>, from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></math></span>. Amplitude amplification is an essential quantum component.",
    "gainText": "Polynomial speedup through a smaller exponential constant in the input bit length $\\log p$, from $1/3$ to $1/4$. Amplitude amplification is an essential quantum component.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in field-operation-scale time, with polynomial-bit arithmetic translated into quantum gates and classical bit operations.",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Quantum Algorithm for Computing Isogenies Between Supersingular Elliptic Curves",
        "url": "https://cacr.uwaterloo.ca/techreports/2014/cacr2014-24.pdf"
      },
      {
        "title": "The Supersingular Isogeny Problem in Time and Memory $p^{1/3+o(1)}$",
        "url": "https://eprint.iacr.org/2026/1486"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "sidh-secret-isogeny-recovery",
    "name": "SIDH secret-isogeny recovery",
    "shortName": "SIDH secret-isogeny recovery",
    "featured": false,
    "entryNumber": 70,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>p</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "The comparison uses quantum isogeny-oracle calls and the resulting gate cost, and classical bit complexity on the full SIDH public key.",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Claw Finding Algorithms Using Quantum Walk",
        "url": "https://arxiv.org/pdf/0708.2584"
      },
      {
        "title": "An Efficient Key Recovery Attack on SIDH",
        "url": "https://eprint.iacr.org/2022/975"
      },
      {
        "title": "Breaking SIDH in Polynomial Time",
        "url": "https://www.math.u-bordeaux.fr/~damienrobert/pro/publications/articles/breaking_sidh.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "the-euclidean-shortest-vector-problem",
    "name": "The Euclidean shortest vector problem",
    "shortName": "The Euclidean shortest vector problem",
    "featured": false,
    "entryNumber": 71,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.247</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.409</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.162</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.162n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.147,
    "costC": 3.3089999999999997,
    "papers": [
      {
        "title": "Superlattice Methods for the Shortest Vector Problem and Discrete Gaussian Sampling",
        "url": "https://eprint.iacr.org/2026/2761"
      },
      {
        "title": "Finding Many Collisions via Reusable Quantum Walks: Application to Lattice Sieving",
        "url": "https://arxiv.org/pdf/2205.14023"
      },
      {
        "title": "Quantum Lattice Enumeration and Tweaking Discrete Pruning",
        "url": "https://eprint.iacr.org/2018/546"
      },
      {
        "title": "Improved Classical and Quantum Algorithms for the Shortest Vector Problem via Bounded Distance Decoding",
        "url": "https://ir.cwi.nl/pub/35122/35122.pdf"
      }
    ],
    "strengthOrder": 1.6558704453441295
  },
  {
    "slug": "isomorphism-to-the-standard-integer-lattice",
    "name": "Isomorphism to the standard integer lattice",
    "shortName": "Isomorphism to the standard integer lattice",
    "featured": false,
    "entryNumber": 72,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.1235</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2045</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.081</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.081n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.0235,
    "costC": 3.1045,
    "papers": [
      {
        "title": "Improved Classical and Quantum Algorithms for the Shortest Vector Problem via Bounded Distance Decoding",
        "url": "https://ir.cwi.nl/pub/35122/35122.pdf"
      },
      {
        "title": "Superlattice Methods for the Shortest Vector Problem and Discrete Gaussian Sampling",
        "url": "https://eprint.iacr.org/2026/2761"
      }
    ],
    "strengthOrder": 1.6558704453441295
  },
  {
    "slug": "learning-parity-with-noisy-quantum-examples",
    "name": "Learning parity with noisy quantum examples",
    "shortName": "Learning parity with noisy quantum examples",
    "featured": false,
    "entryNumber": 73,
    "importance": "normal",
    "resourceModels": [
      "gate",
      "other"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Subexponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, through Fourier interference in the quantum examples. The availability of coherent examples is part of the input model.",
    "gainText": "Subexponential to polynomial in $n$, through Fourier interference in the quantum examples. The availability of coherent examples is part of the input model.",
    "parameter": "",
    "parameterHtml": "",
    "model": "The comparison measures quantum example queries and elementary gates, and classical sample complexity and bit-operation time for measured examples.",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Learning Robust Against Noise",
        "url": "https://arxiv.org/pdf/1407.5088"
      },
      {
        "title": "Demonstration of Quantum Advantage in Machine Learning",
        "url": "https://arxiv.org/pdf/1512.06069"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "the-euclidean-closest-vector-problem",
    "name": "The Euclidean closest vector problem",
    "shortName": "The Euclidean closest vector problem",
    "featured": false,
    "entryNumber": 74,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>T</mi></msqrt><mspace width=\"0.167em\" /><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Quadratic acceleration in enumeration-tree size. The total-runtime comparison with the best classical solver depends on <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>T</mi></mrow></math></span>, basis quality and the target-distance promise.",
    "gainText": "Quadratic acceleration in enumeration-tree size. The total-runtime comparison with the best classical solver depends on $T$, basis quality and the target-distance promise.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Lattice Enumeration and Tweaking Discrete Pruning",
        "url": "https://eprint.iacr.org/2018/546"
      },
      {
        "title": "Solving the Closest Vector Problem in $2^n$ Time—The Discrete Gaussian Strikes Again!",
        "url": "https://arxiv.org/pdf/1504.01995"
      },
      {
        "title": "Finding a Shortest Vector and More in $2^{n/2+o(n)}$ Time Using $q$-ary Coset Difference Tree",
        "url": "https://arxiv.org/pdf/2609.02764"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "bounded-distance-decoding-on-periodic-lattices",
    "name": "Bounded distance decoding on periodic lattices",
    "shortName": "Bounded distance decoding on periodic lattices",
    "featured": false,
    "entryNumber": 75,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "Deterministic polynomial time in the same radius regime, Ducas–van Woerden decoding as developed by Allen et al.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in quantum gates and classical bit operations, polynomial in the lattice encoding and $\\log q$.",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "An Efficient Quantum Algorithm for Lattice Problems Achieving Subexponential Approximation Factor",
        "url": "https://arxiv.org/pdf/2201.13450"
      },
      {
        "title": "Quantum and Classical Algorithms for Bounded Distance Decoding",
        "url": "https://arxiv.org/pdf/2203.05019"
      }
    ],
    "strength": 0
  },
  {
    "slug": "learning-with-errors-with-classical-samples",
    "name": "Learning with errors with classical samples",
    "shortName": "Learning with errors with classical samples",
    "featured": false,
    "entryNumber": 76,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2563</mn><mi>&#x003B2;</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B2;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2925</mn><mi>&#x003B2;</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B2;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant for the matched lattice-reduction subroutines. In the bounded-error regimes, the subexponential classical algorithms enter the minimum for the complete attack.",
    "gainText": "Polynomial speedup through a smaller exponential constant for the matched lattice-reduction subroutines. In the bounded-error regimes, the subexponential classical algorithms enter the minimum for the complete attack.",
    "parameter": "",
    "parameterHtml": "",
    "model": "The comparison uses classical bit-operation time and quantum gate time with the specified coherent-memory model; the samples themselves are classical.",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Finding Many Collisions via Reusable Quantum Walks: Application to Lattice Sieving",
        "url": "https://arxiv.org/pdf/2205.14023"
      },
      {
        "title": "On the Asymptotic Complexity of Solving LWE",
        "url": "https://eprint.iacr.org/2015/1222"
      },
      {
        "title": "Provably Subexponential Algorithms for Bounded-Error LWE with Few Samples",
        "url": "https://arxiv.org/pdf/2610.13043"
      },
      {
        "title": "Provable Subexponential Algorithms for Module-SIS and Module-LWE",
        "url": "https://eprint.iacr.org/2026/2420"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "short-integer-solutions-with-a-wide-public-matrix",
    "name": "Short integer solutions with a wide public matrix",
    "shortName": "Short integer solutions with a wide public matrix",
    "featured": false,
    "entryNumber": 77,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in quantum gates and classical bit operations on the explicit public matrix, including its dimensions and modulus length.",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for Variants of Average-Case Lattice Problems via Filtering",
        "url": "https://arxiv.org/pdf/2108.11015"
      },
      {
        "title": "No Exponential Quantum Speedup for $\\mathrm{SIS}_\\infty$ Anymore",
        "url": "https://arxiv.org/pdf/2510.07515"
      }
    ],
    "strength": 0
  },
  {
    "slug": "binary-syndrome-decoding",
    "name": "Binary syndrome decoding",
    "shortName": "Binary syndrome decoding",
    "featured": false,
    "entryNumber": 78,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msqrt><mrow><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mi>n</mi><mi>w</mi></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo><mo>&#x0002F;</mo><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mrow><mi>n</mi><mo>&#x02212;</mo><mi>k</mi></mrow><mrow><mi>w</mi></mrow></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo></mrow></msqrt></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>p</mi></mrow></math></span>",
    "gain": "Polynomial speedup for dense random codes: quadratic acceleration of Prange and further reductions in the exponential constant from quantum walks. Sparse parity checks have the stated subexponential classical comparator.",
    "gainText": "Polynomial speedup for dense random codes: quadratic acceleration of Prange and further reductions in the exponential constant from quantum walks. Sparse parity checks have the stated subexponential classical comparator.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in quantum gate time and classical bit-operation time, with coherent list-access costs specified for quantum walks.",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Information Set Decoding Algorithms",
        "url": "https://arxiv.org/pdf/1703.00263"
      },
      {
        "title": "Improved Quantum Information Set Decoding",
        "url": "https://arxiv.org/pdf/1808.00714"
      },
      {
        "title": "An Optimized Quantum Implementation of ISD on Scalable Quantum Resources",
        "url": "https://arxiv.org/pdf/2112.06157"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "minimum-weight-nonzero-codewords",
    "name": "Minimum-weight nonzero codewords",
    "shortName": "Minimum-weight nonzero codewords",
    "featured": false,
    "entryNumber": 79,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>k</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0</mn><mi>k</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0k}$",
    "parameter": "k: the size parameter in the stated comparison",
    "parameterHtml": "k: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.9,
    "costC": 3.9,
    "papers": [
      {
        "title": "A Quantum Algorithm for Finding the Minimum",
        "url": "https://arxiv.org/pdf/quant-ph/9607014"
      },
      {
        "title": "Quantum Information Set Decoding Algorithms",
        "url": "https://arxiv.org/pdf/1703.00263"
      },
      {
        "title": "Improved Quantum Information Set Decoding",
        "url": "https://arxiv.org/pdf/1808.00714"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ]
  },
  {
    "slug": "random-subset-sum-at-cryptographic-density",
    "name": "Random subset sum at cryptographic density",
    "shortName": "Random subset sum at cryptographic density",
    "featured": false,
    "entryNumber": 80,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.2182</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.283</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.0648</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0.0648n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.1182,
    "costC": 3.183,
    "papers": [
      {
        "title": "Improved Classical and Quantum Algorithms for Subset-Sum",
        "url": "https://arxiv.org/pdf/2002.05276"
      },
      {
        "title": "Subset Sum in Time $2^{0.49n}$",
        "url": "https://github.com/openai/math/tree/main/preprints/Subset-Sum-in-Time-2-power-0-49n-October-4-2026"
      }
    ],
    "strengthOrder": 1.2969752520623279
  },
  {
    "slug": "boolean-multivariate-quadratic-equations",
    "name": "Boolean multivariate quadratic equations",
    "shortName": "Boolean multivariate quadratic equations",
    "featured": false,
    "entryNumber": 81,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.6943</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mo>&#x02212;</mo><mn>0.3057</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{-0.3057n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.5943,
    "costC": 3.5943,
    "papers": [
      {
        "title": "Solving Binary MQ with Grover's Algorithm",
        "url": "https://cryptojedi.org/papers/mqgrover-20171130.pdf"
      },
      {
        "title": "Fast Quantum Algorithm for Solving Multivariate Quadratic Equations",
        "url": "https://arxiv.org/pdf/1712.07211"
      },
      {
        "title": "Improved Algorithms for Solving Polynomial Systems over GF(2) by Multiple Parity-Counting",
        "url": "https://arxiv.org/pdf/2005.04800"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "collision",
    "name": "Hash collisions",
    "shortName": "Collision finding",
    "featured": true,
    "entryNumber": 84,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(N^{1/6})$",
    "parameter": "N: random-function range size",
    "parameterHtml": "N: random-function range size",
    "model": "Hash-oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.3333333333333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "Quantum Algorithm for the Collision Problem",
        "url": "https://arxiv.org/pdf/quant-ph/9705002"
      },
      {
        "title": "Quantum Lower Bounds for the Collision and the Element Distinctness Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0112086"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "claw",
    "name": "Claw finding and double-encryption key recovery",
    "shortName": "Claw finding and double-encryption key recovery",
    "featured": false,
    "entryNumber": 85,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(N^{1/3})$",
    "parameter": "N: each function domain in the balanced case",
    "parameterHtml": "N: each function domain in the balanced case",
    "model": "Function-evaluation queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "Claw Finding Algorithms Using Quantum Walk",
        "url": "https://arxiv.org/pdf/0708.2584"
      },
      {
        "title": "Quantum Attacks Against Iterated Block Ciphers",
        "url": "https://arxiv.org/pdf/1410.1434"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "generalized-birthday-search-random-k-xor",
    "name": "Generalized birthday search: random k-XOR",
    "shortName": "Generalized birthday search: random k-XOR",
    "featured": false,
    "entryNumber": 87,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>&#x0230A;</mi><msub><mi>log</mi><mn>2</mn></msub><mi>k</mi><mi>&#x0230B;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>&#x0230A;</mi><msub><mi>log</mi><mn>2</mn></msub><mi>k</mi><mi>&#x0230B;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.9,
    "costC": 3.9,
    "papers": [
      {
        "title": "A Generalized Birthday Problem",
        "url": "https://www.iacr.org/archive/crypto2002/24420288/24420288.pdf"
      },
      {
        "title": "Optimal Merging in Quantum $k$-XOR and $k$-SUM Algorithms",
        "url": "https://eprint.iacr.org/2019/501"
      },
      {
        "title": "Improved Quantum Algorithms for the $k$-XOR Problem",
        "url": "https://ir.cwi.nl/pub/31603/31603.pdf"
      }
    ]
  },
  {
    "slug": "even",
    "name": "Even–Mansour recovery with quantum queries",
    "shortName": "Even–Mansour recovery with quantum queries",
    "featured": false,
    "entryNumber": 88,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>N</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>N</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde O(2^{N/2}/N)$",
    "parameter": "N: block length in bits",
    "parameterHtml": "N: block length in bits",
    "model": "Coherent encryption / balanced classical queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 3.4,
    "papers": [
      {
        "title": "Breaking Symmetric Cryptosystems Using Quantum Period Finding",
        "url": "https://arxiv.org/pdf/1602.05973"
      },
      {
        "title": "Quantum Attacks Without Superposition Queries: The Offline Simon's Algorithm",
        "url": "https://arxiv.org/pdf/2002.12439"
      }
    ]
  },
  {
    "slug": "evenmansour-recovery-with-classical-queries",
    "name": "Even–Mansour recovery with classical queries",
    "shortName": "Even–Mansour recovery with classical queries",
    "featured": false,
    "entryNumber": 89,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002F;</mo><mi>D</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002F;</mo><mi>D</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.9,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Attacks Without Superposition Queries: The Offline Simon's Algorithm",
        "url": "https://arxiv.org/pdf/2002.12439"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ]
  },
  {
    "slug": "differential-and-linear-cryptanalysis",
    "name": "Differential and linear cryptanalysis",
    "shortName": "Differential and linear cryptanalysis",
    "featured": false,
    "entryNumber": 90,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>p</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>p</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic improvements in the specified sampling and search components, from amplitude amplification or estimation. The exponent of a complete attack depends on the selected characteristic and key-recovery strategy.",
    "gainText": "Quadratic improvements in the specified sampling and search components, from amplitude amplification or estimation. The exponent of a complete attack depends on the selected characteristic and key-recovery strategy.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in classical samples or oracle calls and coherent quantum evaluations for the statistical primitives, and in gate or bit complexity for complete key recovery.",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Differential and Linear Cryptanalysis",
        "url": "https://arxiv.org/pdf/1510.05836"
      },
      {
        "title": "Quantum Amplitude Amplification and Estimation",
        "url": "https://arxiv.org/pdf/quant-ph/0005055"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "vector-subset-sum-over-f3",
    "name": "Vector subset sum over F3",
    "shortName": "Vector subset sum over F3",
    "featured": false,
    "entryNumber": 101,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>&#x003BA;</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>&#x02308;</mi><msup><mi>n</mi><mn>2</mn></msup><mo>&#x0002F;</mo><mi>m</mi><mi>&#x02309;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Subexponential to polynomial in the strongest comparison. The quantum tradeoff reaches polynomial time throughout <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi><mo>&#x0003D;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, extending below the smallest reported classical polynomial-time vector-count threshold. The general bounds also describe intermediate improvements when both algorithms have superpolynomial time; their degree depends on the input density <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi></mrow></math></span>.",
    "gainText": "Subexponential to polynomial in the strongest comparison. The quantum tradeoff reaches polynomial time throughout $m=\\Omega(n^2)$, extending below the smallest reported classical polynomial-time vector-count threshold. The general bounds also describe intermediate improvements when both algorithms have superpolynomial time; their degree depends on the input density $m/n$.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in quantum gates and classical bit operations on the explicit input.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Exponential Quantum Speedup for $\\mathbb F_3^n$-Subset-Sum? Or, Rigorous Classical Algorithms for Binary-Error LWE",
        "url": "https://arxiv.org/html/2609.40321v1"
      },
      {
        "title": "Quantum Algorithms for Variants of Average-Case Lattice Problems via Filtering",
        "url": "https://arxiv.org/abs/2108.11015"
      },
      {
        "title": "No Exponential Quantum Speedup for SIS$^\\infty$ Anymore",
        "url": "https://arxiv.org/html/2510.07515v3"
      },
      {
        "title": "A Generalized Birthday Problem",
        "url": "https://people.eecs.berkeley.edu/~daw/papers/genbday.html"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a01",
    "name": "Finite abelian-group decomposition",
    "shortName": "Finite abelian-group decomposition",
    "featured": false,
    "entryNumber": 146,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in the generic representation",
    "gainText": "Exponential to polynomial in the generic representation",
    "parameter": "n=log_2|G|, with comparable encoding length",
    "parameterHtml": "n=log_2|G|, with comparable encoding length",
    "model": "generic group operations and polynomial-cost reversible implementations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Decomposing Finite Abelian Groups; Improved Quantum Algorithms for Black-Box Abelian Group Decomposition",
        "url": "https://arxiv.org/abs/2609.36480"
      },
      {
        "title": "Structure computation and discrete logarithms in finite abelian p-groups",
        "url": "https://arxiv.org/abs/0809.3413"
      },
      {
        "title": "Decomposing finite abelian groups",
        "url": "https://arxiv.org/abs/cs/0101004"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a02",
    "name": "Isomorphism of coprime abelian-by-cyclic groups",
    "shortName": "Isomorphism of coprime abelian-by-cyclic groups",
    "featured": false,
    "entryNumber": 147,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential to polynomial in log N",
    "gainText": "Exponential to polynomial in log N",
    "parameter": "group order N; logarithmic input encoding",
    "parameterHtml": "group order N; logarithmic input encoding",
    "model": "black-box group time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "An Efficient Quantum Algorithm for some Instances of the Group Isomorphism Problem",
        "url": "https://arxiv.org/abs/1001.0608"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a04",
    "name": "Group commutativity",
    "shortName": "Group commutativity",
    "featured": false,
    "entryNumber": 148,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>k</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x003A9;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>k</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Omega(k^{1/3})$",
    "parameter": "number k of generators",
    "parameterHtml": "number k of generators",
    "model": "group-operation queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.6666666666666666,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Complexity of Testing Group Commutativity",
        "url": "https://arxiv.org/abs/quant-ph/0506265"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "prior-a05",
    "name": "Basis representation of a finite black-box ring",
    "shortName": "Basis representation of a finite black-box ring",
    "featured": false,
    "entryNumber": 149,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in log |R|",
    "gainText": "Exponential to polynomial in log |R|",
    "parameter": "ring cardinality |R|",
    "parameterHtml": "ring cardinality |R|",
    "model": "generic ring operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "The Complexity of Black-Box Ring Problems",
        "url": "https://doi.org/10.1007/11809678_15"
      },
      {
        "title": "Structure computation and discrete logarithms in finite abelian p-groups",
        "url": "https://arxiv.org/abs/0809.3413"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a06",
    "name": "Ideal operations in finite rings",
    "shortName": "Ideal operations in finite rings",
    "featured": false,
    "entryNumber": 150,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Strongest regime: generic black-box input",
    "gainText": "Strongest regime: generic black-box input",
    "parameter": "ring cardinality |R|; black-box representation",
    "parameterHtml": "ring cardinality |R|; black-box representation",
    "model": "ring operations with coordinate construction",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Efficient quantum processing of ideals in finite rings",
        "url": "https://arxiv.org/abs/0908.0022"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a07",
    "name": "Multilinear identity testing over a finite ring",
    "shortName": "Multilinear identity testing over a finite ring",
    "featured": false,
    "entryNumber": 151,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>&#x003B1;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>m</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msup><mi>k</mi><mrow><mi>m</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>4</mn><mi>m</mi></msup><mi>m</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial in k for fixed m and alpha",
    "gainText": "Polynomial in k for fixed m and alpha",
    "parameter": "k ideal generators; m variables; alpha satisfying the theorem",
    "parameterHtml": "k ideal generators; m variables; alpha satisfying the theorem",
    "model": "ring and evaluation queries",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Query Complexity of Multilinear Identity Testing",
        "url": "https://arxiv.org/abs/0807.1412"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-a08",
    "name": "Discrete logarithms in finite semigroups",
    "shortName": "Discrete logarithms in finite semigroups",
    "featured": false,
    "entryNumber": 152,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>S</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>S</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in log |S|",
    "gainText": "Exponential to polynomial in log |S|",
    "parameter": "semigroup cardinality |S|",
    "parameterHtml": "semigroup cardinality |S|",
    "model": "generic semigroup operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum computation of discrete logarithms in semigroups",
        "url": "https://arxiv.org/abs/1310.6238"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a09",
    "name": "Constructive membership in a commutative semigroup",
    "shortName": "Constructive membership in a commutative semigroup",
    "featured": false,
    "entryNumber": 153,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "O(kN)",
    "gain": "Polynomial query improvement over generic closure enumeration",
    "gainText": "Polynomial query improvement over generic closure enumeration",
    "parameter": "semigroup size N and fixed generator count k",
    "parameterHtml": "semigroup size N and fixed generator count k",
    "model": "semigroup queries",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum computation of discrete logarithms in semigroups",
        "url": "https://arxiv.org/abs/1310.6238"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-a10",
    "name": "Semidirect discrete logarithm",
    "shortName": "Semidirect discrete logarithm",
    "featured": false,
    "entryNumber": 154,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>r</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial when r is exponential in the encoding length",
    "gainText": "Exponential to polynomial when r is exponential in the encoding length",
    "parameter": "group size and orbit period r",
    "parameterHtml": "group size and orbit period r",
    "model": "group-action operations in the covered platforms",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Efficient quantum algorithms for some instances of the semidirect discrete logarithm problem",
        "url": "https://arxiv.org/abs/2312.14028"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a11",
    "name": "Polynomial factorization over a finite field",
    "shortName": "Polynomial factorization over a finite field",
    "featured": false,
    "entryNumber": 155,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mi>log</mi><mrow><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mi>log</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mi>q</mi><mo>&#x0002B;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mi>log</mi><mrow><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial degree saving in the applicable field-size regime",
    "gainText": "Polynomial degree saving in the applicable field-size regime",
    "parameter": "degree n and field size q",
    "parameterHtml": "degree n and field size q",
    "model": "bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.3333333333333333,
    "costC": 1.5,
    "papers": [
      {
        "title": "Toward an Optimal Quantum Algorithm for Polynomial Factorization over Finite Fields",
        "url": "https://arxiv.org/abs/1807.09675"
      }
    ],
    "strengthOrder": 1.125
  },
  {
    "slug": "prior-a12",
    "name": "Polynomial interpolation over finite fields",
    "shortName": "Polynomial interpolation over finite fields",
    "featured": false,
    "entryNumber": 156,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02308;</mi><mfrac><mrow><mi>d</mi></mrow><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>d</mi></mrow></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>d</mi></mrow><mrow><mi>d</mi></mrow></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo><mi>&#x02309;</mi></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>d</mi></mrow><mrow><mi>d</mi></mrow></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo></mrow></math></span>",
    "gain": "(n+d)/d",
    "gainText": "(n+d)/d",
    "parameter": "variable count n and total degree d; q sufficiently large",
    "parameterHtml": "variable count n and total degree d; q sufficiently large",
    "model": "evaluation queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Optimal quantum algorithm for polynomial interpolation",
        "url": "https://arxiv.org/abs/1509.09271"
      },
      {
        "title": "Quantum algorithm for multivariate polynomial interpolation",
        "url": "https://arxiv.org/abs/1701.03990"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-a15",
    "name": "Shifted multiplicative characters",
    "shortName": "Shifted multiplicative characters",
    "featured": false,
    "entryNumber": 158,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial relative to shift enumeration",
    "gainText": "Exponential to polynomial relative to shift enumeration",
    "parameter": "field size q",
    "parameterHtml": "field size q",
    "model": "gate/time comparison with character evaluation",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Algorithms for some Hidden Shift Problems",
        "url": "https://arxiv.org/abs/quant-ph/0211140"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a16",
    "name": "Hidden shifts of bent Boolean functions",
    "shortName": "Hidden shifts of bent Boolean functions",
    "featured": false,
    "entryNumber": 159,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "O(n)",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential to polynomial query separation",
    "gainText": "Exponential to polynomial query separation",
    "parameter": "n-bit domain; hard bent-function oracle families",
    "parameterHtml": "n-bit domain; hard bent-function oracle families",
    "model": "function-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum algorithms for highly non-linear Boolean functions",
        "url": "https://arxiv.org/abs/0811.3208"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a17",
    "name": "Random Boolean hidden shift",
    "shortName": "Random Boolean hidden shift",
    "featured": false,
    "entryNumber": 160,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "O(1)",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(n)$",
    "parameter": "hidden shift length n",
    "parameterHtml": "hidden shift length n",
    "model": "queries; known-function computation is free",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.05,
    "costC": 1,
    "papers": [
      {
        "title": "Easy and hard functions for the Boolean hidden shift problem",
        "url": "https://arxiv.org/abs/1304.4642"
      }
    ]
  },
  {
    "slug": "prior-a18",
    "name": "Generalized hidden shift",
    "shortName": "Generalized hidden shift",
    "featured": false,
    "entryNumber": 161,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in log N",
    "gainText": "Exponential to polynomial in log N",
    "parameter": "cyclic-group size N; M>N^epsilon",
    "parameterHtml": "cyclic-group size N; M&gt;N^epsilon",
    "model": "hidden-shift queries and efficient quantum gates",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum algorithm for a generalized hidden shift problem",
        "url": "https://arxiv.org/abs/quant-ph/0507190"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a19",
    "name": "Hidden subgroups of selected semidirect-product groups",
    "shortName": "Hidden subgroups of selected semidirect-product groups",
    "featured": false,
    "entryNumber": 162,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "From optimal measurement to efficient quantum algorithms for the hidden subgroup problem over semidirect product groups",
        "url": "https://arxiv.org/abs/quant-ph/0504083"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a20",
    "name": "Hidden subgroups of nilpotency-class-two groups",
    "shortName": "Hidden subgroups of nilpotency-class-two groups",
    "featured": false,
    "entryNumber": 163,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential to polynomial",
    "gainText": "Exponential to polynomial",
    "parameter": "group size |G|; hardest oracle subfamilies",
    "parameterHtml": "group size |G|; hardest oracle subfamilies",
    "model": "coset-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "An efficient quantum algorithm for the hidden subgroup problem in nil-2 groups",
        "url": "https://arxiv.org/abs/0707.1260"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a21",
    "name": "Normal hidden subgroup",
    "shortName": "Normal hidden subgroup",
    "featured": false,
    "entryNumber": 164,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential to polynomial in log |G|",
    "gainText": "Exponential to polynomial in log |G|",
    "parameter": "group cardinality |G|; hard abelian subfamilies",
    "parameterHtml": "group cardinality |G|; hard abelian subfamilies",
    "model": "coset-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "The Hidden Subgroup Problem and Quantum Computation Using Group Representations",
        "url": "https://www.cs.tau.ac.il/~amnon/Papers/HRT.siam02.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a22",
    "name": "Hidden quadratic level sets",
    "shortName": "Hidden quadratic level sets",
    "featured": false,
    "entryNumber": 165,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>q</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Hidden Symmetry Subgroup Problems",
        "url": "https://arxiv.org/abs/1107.2189"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a23",
    "name": "Hidden quadratic and cubic polynomial graphs",
    "shortName": "Hidden quadratic and cubic polynomial graphs",
    "featured": false,
    "entryNumber": 166,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>q</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in log q",
    "gainText": "Exponential to polynomial in log q",
    "parameter": "field size q; fixed degree and number of variables",
    "parameterHtml": "field size q; fixed degree and number of variables",
    "model": "hidden-label oracle queries and efficient quantum time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Efficient Quantum Algorithm for Hidden Quadratic and Cubic Polynomial Function Graphs",
        "url": "https://arxiv.org/abs/quant-ph/0703195"
      },
      {
        "title": "Efficient Quantum Algorithm for Identifying Hidden Polynomials",
        "url": "https://arxiv.org/abs/0706.1219"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a24",
    "name": "Zeta functions of curves over finite fields",
    "shortName": "Zeta functions of curves over finite fields",
    "featured": false,
    "entryNumber": 167,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>q</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>g</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum computation of zeta functions of curves",
        "url": "https://arxiv.org/abs/math/0411623"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a39",
    "name": "Multicollisions in a random function",
    "shortName": "Multicollisions in a random function",
    "featured": false,
    "entryNumber": 176,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>&#x02113;</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>&#x02113;</mi></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>&#x02113;</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>&#x02113;</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>N</mi><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>&#x02113;</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>&#x02113;</mi><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>&#x02113;</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>&#x02113;</mi></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gainText": "$N^{(\\ell-1)/\\ell-(2^{\\ell-1}-1)/(2^\\ell-1)}$",
    "parameter": "range size N; fixed collision multiplicity ell",
    "parameterHtml": "range size N; fixed collision multiplicity ell",
    "model": "random-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Improved Quantum Multicollision-Finding Algorithm; On Finding Quantum Multi-collisions",
        "url": "https://arxiv.org/abs/1811.08097"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-a40",
    "name": "Distinguishing three-round Feistel networks",
    "shortName": "Distinguishing three-round Feistel networks",
    "featured": false,
    "entryNumber": 177,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "O(n)",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><mi>n</mi></mrow></math></span>",
    "gainText": "$2^{n/2}/n$",
    "parameter": "half-block length n",
    "parameterHtml": "half-block length n",
    "model": "chosen-plaintext oracle queries; coherent on the quantum side",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 3.4,
    "papers": [
      {
        "title": "Using Simon's Algorithm to Attack Symmetric-Key Cryptographic Primitives",
        "url": "https://arxiv.org/abs/1603.07856"
      }
    ]
  },
  {
    "slug": "prior-a41",
    "name": "CBC-MAC forgery under superposition access",
    "shortName": "CBC-MAC forgery under superposition access",
    "featured": false,
    "entryNumber": 178,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in the superposition-query attack model",
    "gainText": "Exponential to polynomial in the superposition-query attack model",
    "parameter": "block length n; fixed message length",
    "parameterHtml": "block length n; fixed message length",
    "model": "chosen-message tag queries",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Using Simon's Algorithm to Attack Symmetric-Key Cryptographic Primitives",
        "url": "https://arxiv.org/abs/1603.07856"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a42",
    "name": "Hidden radius over a finite field",
    "shortName": "Hidden radius over a finite field",
    "featured": false,
    "entryNumber": 179,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>q</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Resource model stated in the problem",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum algorithms for hidden nonlinear structures",
        "url": "https://arxiv.org/abs/0705.2784"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "yz-codeword-hash-search",
    "name": "Codeword search with random hash constraints",
    "shortName": "Codeword search with random hash constraints",
    "featured": false,
    "entryNumber": 180,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><msup><mi>&#x003BB;</mi><mi>c</mi></msup></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><msup><mi>&#x003BB;</mi><mi>c</mi></msup></mrow></msup><mo>&#x0002F;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$2^{\\lambda^c}/\\operatorname{poly}(\\lambda)$",
    "parameter": "$\\lambda$ is the security parameter; $c\\in(0,1)$ is fixed by the code family.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003BB;</mi></mrow></math></span> is the security parameter; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>c</mi><mo>&#x02208;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>0</mn><mo>&#x0002C;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> is fixed by the code family.",
    "model": "Random-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Verifiable Quantum Advantage without Structure",
        "url": "https://arxiv.org/abs/2204.02063v3"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "trapdoor-claw-proof-quantumness",
    "name": "Interactive proofs of quantumness",
    "shortName": "Interactive proofs of quantumness",
    "featured": false,
    "entryNumber": 181,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>p</mi><mi>x</mi></msub><mo>&#x0002B;</mo><mn>4</mn><msub><mi>p</mi><mrow><mi mathvariant=\"normal\">C</mi><mi mathvariant=\"normal\">H</mi><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">H</mi></mrow></msub><mo>&#x02212;</mo><mn>4</mn><mo>&#x02264;</mo><mo>negl</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial quantum proving versus superpolynomial classical attacks under the selected cryptographic assumption.",
    "gainText": "Polynomial quantum proving versus superpolynomial classical attacks under the selected cryptographic assumption.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses gates, communication, and security parameter $\\lambda$.",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Cryptographic Test of Quantumness and Certifiable Randomness from a Single Quantum Device",
        "url": "https://arxiv.org/abs/1804.00640"
      },
      {
        "title": "Classically verifiable quantum advantage from a computational Bell test",
        "url": "https://www.nature.com/articles/s41567-022-01643-7"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "discrete-logarithm-concept-learning",
    "name": "Learning discrete-logarithm interval concepts",
    "shortName": "Learning discrete-logarithm interval concepts",
    "featured": false,
    "entryNumber": 193,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002F;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential known classical preprocessing to polynomial quantum learning.",
    "gainText": "Subexponential known classical preprocessing to polynomial quantum learning.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses gates and training/inference time; $n=\\lceil\\log_2p\\rceil$.",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A rigorous and robust quantum speed-up in supervised machine learning",
        "url": "https://arxiv.org/abs/2010.02174"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "local",
    "name": "Local minima on the Boolean hypercube",
    "shortName": "Local minima on the Boolean hypercube",
    "featured": false,
    "entryNumber": 91,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(N^{1/6}(\\log N)^{1/3})$",
    "parameter": "N: vertices of the Boolean hypercube",
    "parameterHtml": "N: vertices of the Boolean hypercube",
    "model": "Value-oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.41,
    "costC": 0.61,
    "papers": [
      {
        "title": "(Almost) Tight Bounds for Randomized and Quantum Local Search on Hypercubes and Grids",
        "url": "https://arxiv.org/pdf/quant-ph/0504085"
      },
      {
        "title": "Lower Bounds for Local Search by Quantum Arguments",
        "url": "https://arxiv.org/pdf/quant-ph/0307149"
      }
    ],
    "strengthOrder": 1.5
  },
  {
    "slug": "symmetric-promise-problems-and-graph-properties",
    "name": "Symmetric promise problems and graph properties",
    "shortName": "Symmetric promise problems and graph properties",
    "featured": false,
    "entryNumber": 93,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial query complexity in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span> for adjacency-list testing of <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi mathvariant=\"script\">P</mi><mi>k</mi></msub></mrow></math></span>. Full permutation symmetry and adjacency-matrix graph symmetry impose the stated polynomial limits.",
    "gainText": "Exponential to polynomial query complexity in $k$ for adjacency-list testing of $\\mathcal P_k$. Full permutation symmetry and adjacency-matrix graph symmetry impose the stated polynomial limits.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in the corresponding input-symbol, adjacency-matrix, or neighbor-oracle queries.",
    "evidence": 1,
    "hardware": 2,
    "hardwareLabel": "Demanding coherent access",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Note on the Quantum Query Complexity of Permutation Symmetric Functions",
        "url": "https://doi.org/10.4230/LIPIcs.ITCS.2019.19"
      },
      {
        "title": "Symmetries, Graph Properties, and Quantum Speedups",
        "url": "https://doi.org/10.1137/23M1573975"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "exact-counting-and-parity-of-feasible-solutions",
    "name": "Exact counting and parity of feasible solutions",
    "shortName": "Exact counting and parity of feasible solutions",
    "featured": false,
    "entryNumber": 94,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02308;</mi><mi>N</mi><mo>&#x0002F;</mo><mn>2</mn><mi>&#x02309;</mi></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in predicate-oracle queries for the oracle formulation and in classical bit operations for explicitly encoded formulas.",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Lower Bounds by Polynomials",
        "url": "https://arxiv.org/pdf/quant-ph/9802049"
      },
      {
        "title": "The Exponential Time Hypothesis is False",
        "url": "https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026"
      }
    ],
    "strength": 0
  },
  {
    "slug": "fine-grained-complexity-of-satisfiability-and-string-problems",
    "name": "Fine-grained complexity of satisfiability and string problems",
    "shortName": "Fine-grained complexity of satisfiability and string problems",
    "featured": false,
    "entryNumber": 96,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mi>m</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mn>2</mn><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in running time on the explicit representation, using quantum gates and classical bit or word operations as specified by each reduction.",
    "evidence": 0.75,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Framework of Quantum Strong Exponential-Time Hypotheses",
        "url": "https://doi.org/10.4230/LIPIcs.STACS.2021.19"
      },
      {
        "title": "OpenAI (2026)",
        "url": "https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026"
      },
      {
        "title": "ETH is Dead, Long Live SH",
        "url": "https://arxiv.org/abs/2611.02650"
      }
    ],
    "strength": 0
  },
  {
    "slug": "stoquastic-frustration-free-constraint-satisfaction",
    "name": "Stoquastic frustration-free constraint satisfaction",
    "shortName": "Stoquastic frustration-free constraint satisfaction",
    "featured": false,
    "entryNumber": 97,
    "importance": "peripheral",
    "resourceModels": [
      "gate",
      "other"
    ],
    "strengthCategory": "none",
    "Q": "Polynomial evolution time for a suitably gapped, initialized path, stoquastic frustration-free adiabatic evolution.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in classical running time and quantum evolution time or simulation gates, with the path and spectral-gap promises specified below.",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Complexity of Stoquastic Frustration-Free Hamiltonians",
        "url": "https://arxiv.org/pdf/0806.1746"
      }
    ],
    "strength": 0
  },
  {
    "slug": "local-hamiltonian-ground-energy-optimization",
    "name": "Local Hamiltonian ground-energy optimization",
    "shortName": "Local Hamiltonian ground-energy optimization",
    "featured": false,
    "entryNumber": 98,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0</mn><mi>n</mi></mrow></msup></mrow></math></span>",
    "gainText": "$2^{0n}$",
    "parameter": "n: the size parameter in the stated comparison",
    "parameterHtml": "n: the size parameter in the stated comparison",
    "model": "Running time, with the entry’s input and memory assumptions",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.9,
    "costC": 3.9,
    "papers": [
      {
        "title": "Near-optimal Ground State Preparation",
        "url": "https://arxiv.org/pdf/2002.12508"
      },
      {
        "title": "Estimating the Largest Eigenvalue by the Power and Lanczos Algorithms with a Random Start",
        "url": "https://doi.org/10.1137/0613066"
      },
      {
        "title": "The Complexity of the Local Hamiltonian Problem",
        "url": "https://arxiv.org/pdf/quant-ph/0406180"
      },
      {
        "title": "OpenAI (2026)",
        "url": "https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026"
      }
    ]
  },
  {
    "slug": "global-optimization-of-variational-circuit-parameters",
    "name": "Global optimization of variational-circuit parameters",
    "shortName": "Global optimization of variational-circuit parameters",
    "featured": false,
    "entryNumber": 99,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in circuit samples or coherent evaluation-oracle queries for objective evaluation, together with the classical or quantum time for the outer optimization.",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Training Variational Quantum Algorithms Is NP-Hard",
        "url": "https://arxiv.org/pdf/2101.07267"
      },
      {
        "title": "Quantum Amplitude Amplification and Estimation",
        "url": "https://arxiv.org/pdf/quant-ph/0005055"
      },
      {
        "title": "Subexponential-Time Sampling of Quantum Circuits from Exact Counting",
        "url": "https://drive.google.com/file/d/1RzhP9ZMy1xkC22oqKmMHEOh7gG1cwkfA/view"
      }
    ],
    "strength": 0
  },
  {
    "slug": "adiabatic-optimization-spectral-gap-costs-and-oracle-bounds",
    "name": "Adiabatic optimization: spectral-gap costs and oracle bounds",
    "shortName": "Adiabatic optimization: spectral-gap costs and oracle bounds",
    "featured": false,
    "entryNumber": 100,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Tight square-root oracle improvement for unstructured search; the general-path runtime depends on the gap and derivatives. The search schedule realizes the adiabatic form of Grover&#x27;s improvement.",
    "gainText": "Tight square-root oracle improvement for unstructured search; the general-path runtime depends on the gap and derivatives. The search schedule realizes the adiabatic form of Grover's improvement.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity is measured in continuous evolution time with a fixed oracle energy scale; digital realizations additionally count Hamiltonian-simulation gates, and the classical comparison counts cost-oracle queries.",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Search by Local Adiabatic Evolution",
        "url": "https://arxiv.org/pdf/quant-ph/0107015"
      },
      {
        "title": "Bounds for the Adiabatic Approximation with Applications to Quantum Computation",
        "url": "https://arxiv.org/pdf/quant-ph/0603175"
      },
      {
        "title": "How to Make the Quantum Adiabatic Algorithm Fail",
        "url": "https://arxiv.org/pdf/quant-ph/0512159"
      }
    ],
    "strength": 1.98
  },
  {
    "slug": "prior-a31",
    "name": "Jones polynomial approximation",
    "shortName": "Jones polynomial approximation",
    "featured": false,
    "entryNumber": 168,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "gainText": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "parameter": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "parameterHtml": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "model": "gate/time complexity at the stated normalization and precision",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Polynomial Quantum Algorithm for Approximating the Jones Polynomial",
        "url": "https://arxiv.org/abs/quant-ph/0511096"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      },
      {
        "title": "Estimating Jones polynomials is a complete problem for one clean qubit",
        "url": "https://arxiv.org/abs/0707.2831"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a33",
    "name": "HOMFLY polynomial approximation",
    "shortName": "HOMFLY polynomial approximation",
    "featured": false,
    "entryNumber": 170,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "gainText": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "parameter": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "parameterHtml": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "model": "gate/time complexity at the stated normalization and precision",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "The Jones polynomial: quantum algorithms and applications in quantum complexity theory; Estimating Jones and HOMFLY polynomials with One Clean Qubit",
        "url": "https://arxiv.org/abs/0807.4688"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a34",
    "name": "Additive approximation of the planar Tutte polynomial",
    "shortName": "Additive approximation of the planar Tutte polynomial",
    "featured": false,
    "entryNumber": 171,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "gainText": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "parameter": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "parameterHtml": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "model": "gate/time complexity at the stated normalization and precision",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Polynomial Quantum algorithms for additive approximations of the Potts model and other points of the Tutte plane",
        "url": "https://arxiv.org/abs/quant-ph/0702008"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a35",
    "name": "Turaev–Viro invariant",
    "shortName": "Turaev–Viro invariant",
    "featured": false,
    "entryNumber": 172,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "gainText": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "parameter": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "parameterHtml": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "model": "gate/time complexity at the stated normalization and precision",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Approximating Turaev-Viro 3-manifold invariants is universal for quantum computation",
        "url": "https://arxiv.org/abs/1003.0923"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a36",
    "name": "Witten–Reshetikhin–Turaev invariant",
    "shortName": "Witten–Reshetikhin–Turaev invariant",
    "featured": false,
    "entryNumber": 173,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "gainText": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "parameter": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "parameterHtml": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "model": "gate/time complexity at the stated normalization and precision",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Efficient quantum processing of 3-manifold topological invariants",
        "url": "https://arxiv.org/abs/quant-ph/0703037"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-a37",
    "name": "Link invariants from quantum doubles of finite groups",
    "shortName": "Link invariants from quantum doubles of finite groups",
    "featured": false,
    "entryNumber": 174,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "braid strands n, length m, group G, accuracy epsilon; fluxon labels",
    "parameterHtml": "braid strands n, length m, group G, accuracy epsilon; fluxon labels",
    "model": "gates/time for additive approximation",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Fourier Transforms and the Complexity of Link Invariants for Quantum Doubles of Finite Groups",
        "url": "https://arxiv.org/abs/1210.1550"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 0
  },
  {
    "slug": "prior-a38",
    "name": "Quadratically signed weight enumerators",
    "shortName": "Quadratically signed weight enumerators",
    "featured": false,
    "entryNumber": 175,
    "importance": "peripheral",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "gainText": "Classical cost depends on width and encoding size; quantum polynomial time in the covered regime",
    "parameter": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "parameterHtml": "finite input length L, implemented qubits q and gates g, width w, encoding size s, additive error epsilon",
    "model": "gate/time complexity at the stated normalization and precision",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum Computation and Quadratically Signed Weight Enumerators",
        "url": "https://arxiv.org/abs/quant-ph/9909094"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "prior-q01",
    "name": "Deutsch–Jozsa promise problem",
    "shortName": "Deutsch–Jozsa promise problem",
    "featured": false,
    "entryNumber": 198,
    "importance": "normal",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "1",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mtext>&#x000A0;for&#x000A0;exact&#x000A0;decision</mtext></mrow></math></span>",
    "gainText": "$2^{\\Theta(n)}\\text{ for exact decision}$",
    "parameter": "n input bits; exact decision",
    "parameterHtml": "n input bits; exact decision",
    "model": "worst-case exact function queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": 0.05,
    "costC": 3.9,
    "papers": [
      {
        "title": "Rapid solution of problems by quantum computation",
        "url": "https://doi.org/10.1098/rspa.1992.0167"
      }
    ]
  },
  {
    "slug": "prior-q04",
    "name": "Forrelation",
    "shortName": "Forrelation",
    "featured": false,
    "entryNumber": 199,
    "importance": "high",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "O(1)",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\widetilde\\Theta(2^{n/2})$",
    "parameter": "oracle address length n",
    "parameterHtml": "oracle address length n",
    "model": "bounded-error phase-function queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": 0.05,
    "costC": 3.4,
    "papers": [
      {
        "title": "Forrelation: A Problem that Optimally Separates Quantum from Classical Computing",
        "url": "https://arxiv.org/abs/1411.5729"
      }
    ]
  },
  {
    "slug": "prior-q05",
    "name": "Fourier sampling of a Boolean function",
    "shortName": "Fourier sampling of a Boolean function",
    "featured": false,
    "entryNumber": 200,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "1",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(2^n)$",
    "parameter": "oracle address length n",
    "parameterHtml": "oracle address length n",
    "model": "queries for approximate sampling",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": 0.05,
    "costC": 3.9,
    "papers": [
      {
        "title": "Complexity-Theoretic Foundations of Quantum Supremacy Experiments",
        "url": "https://arxiv.org/abs/1612.05903"
      }
    ]
  },
  {
    "slug": "prior-q08",
    "name": "Full oracle interrogation",
    "shortName": "Full oracle interrogation",
    "featured": false,
    "entryNumber": 201,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "oracle string length N",
    "parameterHtml": "oracle string length N",
    "model": "bit queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Oracle Interrogation: Getting all information for almost half the price",
        "url": "https://arxiv.org/abs/quant-ph/9805006"
      }
    ],
    "strength": 0
  },
  {
    "slug": "prior-q09",
    "name": "Oracle identification",
    "shortName": "Oracle identification",
    "featured": false,
    "entryNumber": 202,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>M</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>M</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>M</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt M)$",
    "parameter": "concept count M<=N; larger-M formula retained in the entry",
    "parameterHtml": "concept count M&lt;=N; larger-M formula retained in the entry",
    "model": "bit queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "An optimal quantum algorithm for the oracle identification problem",
        "url": "https://arxiv.org/abs/1311.7685"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "prior-q26",
    "name": "Boolean-function isomorphism under coordinate permutations",
    "shortName": "Boolean-function isomorphism under coordinate permutations",
    "featured": false,
    "entryNumber": 215,
    "importance": "peripheral",
    "resourceModels": [
      "oracle",
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$2^{n/2}/\\operatorname{poly}(n)$",
    "parameter": "Boolean dimension n; fixed distance epsilon",
    "parameterHtml": "Boolean dimension n; fixed distance epsilon",
    "model": "function-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 3.4,
    "papers": [
      {
        "title": "Sequential measurements, disturbance and property testing",
        "url": "https://arxiv.org/abs/1607.03236"
      }
    ]
  },
  {
    "slug": "prior-q45",
    "name": "Testing one-to-one periodicity",
    "shortName": "Testing one-to-one periodicity",
    "featured": false,
    "entryNumber": 229,
    "importance": "peripheral",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>O</mi><mi>&#x003B5;</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in the oracle address length log n",
    "gainText": "Exponential to polynomial in the oracle address length log n",
    "parameter": "domain size n; fixed distance epsilon",
    "parameterHtml": "domain size n; fixed distance epsilon",
    "model": "function-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 0.25,
    "papers": [
      {
        "title": "New Results on Quantum Property Testing",
        "url": "https://arxiv.org/abs/1005.0523"
      }
    ]
  },
  {
    "slug": "prior-q46",
    "name": "PAC learning in the large-error regime",
    "shortName": "PAC learning in the large-error regime",
    "featured": false,
    "entryNumber": 230,
    "importance": "peripheral",
    "resourceModels": [
      "gate",
      "other"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mo>&#x0002F;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Superpolynomial separation; exponential or subexponential regimes depend on lambda",
    "gainText": "Superpolynomial separation; exponential or subexponential regimes depend on lambda",
    "parameter": "dimension n; constructive inverse-superpolynomial lambda; fixed confidence parameter k",
    "parameterHtml": "dimension n; constructive inverse-superpolynomial lambda; fixed confidence parameter k",
    "model": "quantum-example learning versus classical membership queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Unconditional Quantum PAC Learning Advantage in the Large Error Regime",
        "url": "https://arxiv.org/abs/2610.23268"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "classical-verification-bqp",
    "name": "Classical verification of quantum computation",
    "shortName": "Classical verification of quantum computation",
    "featured": false,
    "entryNumber": 182,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>T</mi><mo>&#x0002C;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>T</mi><mo>&#x0002C;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses gates, verifier time, and classical communication.",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Classical Verification of Quantum Computations",
        "url": "https://arxiv.org/abs/1804.01082"
      }
    ],
    "strength": 0
  },
  {
    "slug": "certified-randomness",
    "name": "Certified randomness from an untrusted quantum device",
    "shortName": "Certified randomness from an untrusted quantum device",
    "featured": false,
    "entryNumber": 183,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>71</mn><mrow><mo>&#x0002C;</mo></mrow><mn>313</mn></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1.1</mn><mo>&#x000D7;</mo><msup><mn>10</mn><mrow><mn>18</mn></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts prover gates, communication, verification, and certified entropy.",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "A Cryptographic Test of Quantumness and Certifiable Randomness from a Single Quantum Device",
        "url": "https://arxiv.org/abs/1804.00640"
      },
      {
        "title": "Certified randomness using a trapped-ion quantum processor",
        "url": "https://arxiv.org/abs/2503.20498"
      }
    ],
    "strength": 0
  },
  {
    "slug": "random-circuit-sampling",
    "name": "Random circuit sampling",
    "shortName": "Random circuit sampling",
    "featured": true,
    "entryNumber": 184,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Ideal sampling compares polynomial quantum cost with the best applicable exponential or subexponential generic classical simulator.",
    "gainText": "Ideal sampling compares polynomial quantum cost with the best applicable exponential or subexponential generic classical simulator.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses gates and classical sampling time.",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "On the complexity and verification of quantum random circuit sampling",
        "url": "https://arxiv.org/abs/1803.04402"
      },
      {
        "title": "Quantum supremacy using a programmable superconducting processor",
        "url": "https://www.nature.com/articles/s41586-019-1666-5"
      },
      {
        "title": "Simulating quantum computation by contracting tensor networks",
        "url": "https://arxiv.org/abs/quant-ph/0511069"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      },
      {
        "title": "A polynomial-time classical algorithm for noisy random circuit sampling",
        "url": "https://arxiv.org/abs/2211.03999"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "fock-boson-sampling",
    "name": "Fock-state boson sampling",
    "shortName": "Boson sampling",
    "featured": true,
    "entryNumber": 185,
    "importance": "high",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002B;</mo><mi>m</mi><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Ideal sampling compares polynomial optical resources with exponential classical bounds, keeping photon and mode counts independent.",
    "gainText": "Ideal sampling compares polynomial optical resources with exponential classical bounds, keeping photon and mode counts independent.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses optical operations and classical arithmetic time at specified precision.",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "The Computational Complexity of Linear Optics",
        "url": "https://arxiv.org/abs/1011.3245"
      },
      {
        "title": "The Classical Complexity of Boson Sampling",
        "url": "https://arxiv.org/abs/1706.01260"
      },
      {
        "title": "Faster classical Boson Sampling",
        "url": "https://arxiv.org/abs/2005.04214"
      },
      {
        "title": "Boson sampling is fragile to loss",
        "url": "https://arxiv.org/abs/2611.01434"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "gaussian-boson-sampling",
    "name": "Gaussian boson sampling",
    "shortName": "Gaussian boson sampling",
    "featured": false,
    "entryNumber": 186,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><msup><mi>N</mi><mn>3</mn></msup><msup><mn>2</mn><mrow><mi>N</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "General ideal instances compare polynomial optical resources with exponential hafnian-based sampling time; structure and loss determine the comparator.",
    "gainText": "General ideal instances compare polynomial optical resources with exponential hafnian-based sampling time; structure and loss determine the comparator.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses optical operations and classical sampling time.",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Gaussian Boson Sampling",
        "url": "https://arxiv.org/abs/1612.01199"
      },
      {
        "title": "Quadratic speedup for simulating Gaussian boson sampling",
        "url": "https://arxiv.org/abs/2010.15595"
      },
      {
        "title": "The Complexity of Bipartite Gaussian Boson Sampling",
        "url": "https://arxiv.org/abs/2110.06964"
      },
      {
        "title": "Simulating Gaussian boson sampling on graphs in polynomial time",
        "url": "https://arxiv.org/abs/2511.16558v3"
      },
      {
        "title": "Boson sampling is fragile to loss",
        "url": "https://arxiv.org/abs/2611.01434"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "iqp-sampling",
    "name": "Sampling commuting quantum circuits",
    "shortName": "Sampling commuting quantum circuits",
    "featured": false,
    "entryNumber": 187,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial quantum sampling versus the best applicable exponential or subexponential classical simulator.",
    "gainText": "Polynomial quantum sampling versus the best applicable exponential or subexponential classical simulator.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses gates and classical sampling time.",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Average-case complexity versus approximate simulation of commuting quantum computations",
        "url": "https://arxiv.org/abs/1504.07999"
      },
      {
        "title": "Classical simulation of commuting quantum computations implies collapse of the polynomial hierarchy",
        "url": "https://arxiv.org/abs/1005.1407"
      },
      {
        "title": "Simulating quantum computation by contracting tensor networks",
        "url": "https://arxiv.org/abs/quant-ph/0511069"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "dqc1-trace-estimation",
    "name": "Normalized trace estimation for a quantum circuit",
    "shortName": "Normalized trace estimation for a quantum circuit",
    "featured": false,
    "entryNumber": 188,
    "importance": "normal",
    "resourceModels": [
      "gate"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>n</mi></msup><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial quantum gates versus the best applicable exponential or subexponential generic classical trace computation.",
    "gainText": "Polynomial quantum gates versus the best applicable exponential or subexponential generic classical trace computation.",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses gates and classical time; the problem characterizes DQC1.",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "On the Power of One Bit of Quantum Information",
        "url": "https://arxiv.org/abs/quant-ph/9802037"
      },
      {
        "title": "Computation with Unitaries and One Pure Qubit",
        "url": "https://arxiv.org/abs/quant-ph/0608132"
      },
      {
        "title": "Simulating quantum computation by contracting tensor networks",
        "url": "https://arxiv.org/abs/quant-ph/0511069"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "two-dimensional-hidden-linear-function",
    "name": "Two-dimensional hidden linear function",
    "shortName": "Two-dimensional hidden linear function",
    "featured": false,
    "entryNumber": 189,
    "importance": "normal",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "O(1)",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(\\log n)$",
    "parameter": "$n$ is the grid vertex count.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> is the grid vertex count.",
    "model": "Bounded-fan-in circuit depth",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 0.18,
    "papers": [
      {
        "title": "Quantum advantage with shallow circuits",
        "url": "https://arxiv.org/abs/1704.00690"
      },
      {
        "title": "Quantum advantage with noisy shallow circuits",
        "url": "https://arxiv.org/abs/1904.01502"
      }
    ]
  },
  {
    "slug": "equality-quantum-fingerprinting",
    "name": "Equality in simultaneous-message communication",
    "shortName": "Equality in simultaneous-message communication",
    "featured": false,
    "entryNumber": 190,
    "importance": "normal",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt n/\\log n)$",
    "parameter": "$n$ is each party's input length.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> is each party&#x27;s input length.",
    "model": "Private-coin simultaneous messages",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": 0.18,
    "costC": 0.5,
    "papers": [
      {
        "title": "Quantum fingerprinting",
        "url": "https://arxiv.org/abs/quant-ph/0102001"
      }
    ]
  },
  {
    "slug": "hidden-matching-communication",
    "name": "Hidden matching in one-way communication",
    "shortName": "Hidden matching in one-way communication",
    "featured": false,
    "entryNumber": 191,
    "importance": "normal",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt n/\\log n)$",
    "parameter": "$n$ is the input length and matching vertex count.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> is the input length and matching vertex count.",
    "model": "One-way communication",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": 0.18,
    "costC": 0.5,
    "papers": [
      {
        "title": "Exponential Separation of Quantum and Classical One-Way Communication Complexity",
        "url": "https://webee.technion.ac.il/people/zivby/papers/qcc/qcc.journal.pdf"
      },
      {
        "title": "Experimental demonstration of quantum advantage for one-way communication complexity surpassing best-known classical protocol",
        "url": "https://www.nature.com/articles/s41467-019-12139-z"
      }
    ]
  },
  {
    "slug": "set-disjointness-communication",
    "name": "Set disjointness in two-party communication",
    "shortName": "Set disjointness in two-party communication",
    "featured": false,
    "entryNumber": 192,
    "importance": "normal",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Theta(\\sqrt n)$",
    "parameter": "$n$ is the universe size.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> is the universe size.",
    "model": "Two-party bounded-error communication",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Search of Spatial Regions",
        "url": "https://toc.ilab.sztaki.hu/articles/v001a004/index.html"
      },
      {
        "title": "Quantum communication complexity of symmetric predicates",
        "url": "https://arxiv.org/abs/quant-ph/0204025"
      }
    ],
    "strengthOrder": 2.0
  },
  {
    "slug": "general-hsp-query-identification",
    "name": "Hidden subgroup identification in a general finite group",
    "shortName": "Hidden subgroup identification in a general finite group",
    "featured": false,
    "entryNumber": 195,
    "importance": "normal",
    "resourceModels": [
      "oracle"
    ],
    "strengthCategory": "to_polynomial",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gainText": "$\\Omega(2^{n/2}/n^2)$",
    "parameter": "$n=\\lceil\\log_2|G|\\rceil$; fixed bounded error.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi><mo>&#x0003D;</mo><mi>&#x02308;</mi><msub><mi>log</mi><mn>2</mn></msub><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x02309;</mi></mrow></math></span>; fixed bounded error.",
    "model": "Oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "The quantum query complexity of the hidden subgroup problem is polynomial",
        "url": "https://arxiv.org/abs/quant-ph/0401083"
      },
      {
        "title": "Deterministic Algorithms for the Hidden Subgroup Problem",
        "url": "https://arxiv.org/abs/2104.14436"
      },
      {
        "title": "Deterministic Algorithms for the Hidden Subgroup Problem",
        "url": "https://arxiv.org/abs/2110.00827"
      }
    ],
    "strength": 3.65
  },
  {
    "slug": "anonymous-leader-election",
    "name": "Exact leader election in anonymous networks",
    "shortName": "Exact leader election in anonymous networks",
    "featured": false,
    "entryNumber": 196,
    "importance": "peripheral",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "Exact bounded-time leader election is impossible on general anonymous classical networks even with known n. Symmetric executions on symmetric topologies keep processors indistinguishable.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity counts rounds and transmitted bits or qubits.",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Exact Quantum Algorithms for the Leader Election Problem",
        "url": "https://arxiv.org/abs/0712.4213"
      },
      {
        "title": "Computing on Anonymous Quantum Network",
        "url": "https://arxiv.org/abs/1001.5307"
      }
    ],
    "strength": 0
  },
  {
    "slug": "magic-square-game",
    "name": "Mermin–Peres magic-square game",
    "shortName": "Mermin–Peres magic-square game",
    "featured": false,
    "entryNumber": 197,
    "importance": "peripheral",
    "resourceModels": [
      "other"
    ],
    "strengthCategory": "none",
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>8</mn><mo>&#x0002F;</mo><mn>9</mn></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "Complexity uses winning probability and shared entanglement.",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "Small demonstrations",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Experimental Demonstration of Quantum Pseudotelepathy",
        "url": "https://arxiv.org/abs/2206.12042"
      },
      {
        "title": "Beating one bit of communication with and without quantum pseudo-telepathy",
        "url": "https://www.nature.com/articles/s41534-024-00874-1"
      }
    ],
    "strength": 0
  }
];
window.SAMPLE_DATA = window.CATALOGUE_POINTS;
