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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Tight quadratic polynomial speedup in the oracle search-space ratio, entirely from Grover search and amplitude amplification. For a unique witness among <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow></math></span> candidates, the exponent changes from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> without power saving.",
    "gainText": "Tight quadratic polynomial speedup in the oracle search-space ratio, entirely from Grover search and amplitude amplification. For a unique witness among $2^n$ candidates, the exponent changes from $n$ to $n/2$ without power saving.",
    "parameter": "N: search-space size; one marked item",
    "parameterHtml": "N: search-space size; one marked item",
    "model": "Boolean-oracle queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$O(\\sqrt N)$",
      "classical": "$\\Theta(N)$",
      "parameter": "N: search-space size; one marked item",
      "model": "Boolean-oracle queries",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries, Dürr–Høyer minimum finding.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries, linear scanning.",
    "gain": "Tight quadratic polynomial speedup in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi></mrow></math></span>, obtained through repeated amplitude amplification.",
    "gainText": "Tight quadratic polynomial speedup in $N$, obtained through repeated amplitude amplification.",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\Theta(\\sqrt N)$ queries, D\\\"urr--H{\\o}yer minimum finding.",
      "classical": "$\\Theta(N)$ queries, linear scanning.",
      "parameter": "N: objective domain size",
      "model": "Value-oracle queries",
      "note": "Worst-case bounded-error query comparison."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>T</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>T</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic in the size of a specified search tree, through a quantum walk. Fixed-domain, fixed-arity instances also admit the displayed subexponential classical bound, whose exponent has no power saving.",
    "gainText": "Nearly quadratic in the size of a specified search tree, through a quantum walk. Fixed-domain, fixed-arity instances also admit the displayed subexponential classical bound, whose exponent has no power saving.",
    "parameter": "T: backtracking-tree size; depth polylogarithmic in T",
    "parameterHtml": "T: backtracking-tree size; depth polylogarithmic in T",
    "model": "Tree-oracle queries",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt T)$",
      "classical": "$O(T)$",
      "parameter": "T: backtracking-tree size; depth polylogarithmic in T",
      "model": "Tree-oracle queries",
      "note": "The principal exponentially large tree regime has polylogarithmic depth; both detection and witness recovery suppress that overhead."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>Q</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>Q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic polynomial speedup in the work of the selected classical tree-search procedure, based on quantum tree search and subtree estimation.",
    "gainText": "Nearly quadratic polynomial speedup in the work of the selected classical tree-search procedure, based on quantum tree search and subtree estimation.",
    "parameter": "Q: explored classical nodes; depth polylogarithmic in Q",
    "parameterHtml": "Q: explored classical nodes; depth polylogarithmic in Q",
    "model": "Branch-and-bound oracle queries",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt Q)$",
      "classical": "$O(Q)$",
      "parameter": "Q: explored classical nodes; depth polylogarithmic in Q",
      "model": "Branch-and-bound oracle queries",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.1433</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: variables; 3-SAT with polynomially many clauses",
    "parameterHtml": "n: variables; 3-SAT with polynomially many clauses",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.09320401,
    "costC": 2.89,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.09320401,
          2.89
        ]
      ],
      "quantum": "$O^*(1.1433^n)$",
      "classical": "$\\operatorname{poly}(n,m)2^{O(n\\log\\log n/\\sqrt{\\log n})}$",
      "parameter": "n: variables; 3-SAT with polynomially many clauses",
      "model": "Quantum gates / classical bit operations",
      "note": "The current classical subexponential algorithm is faster than this quantum upper bound."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic polynomial improvement in inverse additive precision in the sampling-oracle model, from amplitude estimation. Relative-error improvement also depends on the feasible density <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math></span>.",
    "gainText": "Quadratic polynomial improvement in inverse additive precision in the sampling-oracle model, from amplitude estimation. Relative-error improvement also depends on the feasible density $a$.",
    "parameter": "1/ε: inverse additive error; fixed bounded failure probability",
    "parameterHtml": "1/ε: inverse additive error; fixed bounded failure probability",
    "model": "Coherent counting queries / classical sampling queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 1,
    "costC": 2,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2
        ]
      ],
      "quantum": "$O(1/\\varepsilon)$",
      "classical": "$\\Theta(1/\\varepsilon^2)$",
      "parameter": "1/ε: inverse additive error; fixed bounded failure probability",
      "model": "Coherent counting queries / classical sampling queries",
      "note": "Coordinates use inverse precision as the common size parameter."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedups through smaller exponential constants. The common subset dynamic program uses minimum finding and amplitude amplification; bounded-degree travelling salesman uses quantum backtracking in the specified graph and memory regimes.",
    "gainText": "Polynomial speedups through smaller exponential constants. The common subset dynamic program uses minimum finding and amplitude amplification; bounded-degree travelling salesman uses quantum backtracking in the specified graph and memory regimes.",
    "parameter": "n: vertices; general travelling salesman / feedback arc set",
    "parameterHtml": "n: vertices; general travelling salesman / feedback arc set",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.68910322,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.68910322,
          3.9
        ]
      ],
      "quantum": "$O^*(1.728^n)$",
      "classical": "$O^*(2^n)$",
      "parameter": "n: vertices; general travelling salesman / feedback arc set",
      "model": "Quantum running time / classical running time",
      "note": "General travelling salesman and feedback arc set. The separate bounded-degree TSP algorithms have additional input promises."
    }
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
    "gain": "Polynomial speedups through smaller exponential constants in the eligible large-family or implicit-family comparisons, from amplitude amplification and minimum finding. The stated linear-family regimes have stronger subexponential classical algorithms.",
    "gainText": "Polynomial speedups through smaller exponential constants in the eligible large-family or implicit-family comparisons, from amplitude amplification and minimum finding. The stated linear-family regimes have stronger subexponential classical algorithms.",
    "parameter": "n: universe size; explicit general set families with polynomial m≥n",
    "parameterHtml": "n: universe size; explicit general set families with polynomial m≥n",
    "model": "Quantum time with coherent memory / classical subset-enumeration time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.68860219,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.68860219,
          3.9
        ]
      ],
      "quantum": "$O^*(1.7274^n)$",
      "classical": "$O^*(2^n)$",
      "parameter": "n: universe size; explicit general set families with polynomial m≥n",
      "model": "Quantum time with coherent memory / classical subset-enumeration time",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>log</mi><mi>n</mi></mrow></msup><msup><mn>2.660</mn><mi>n</mi></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant for fixed demand in the general lattice comparison, using quantum search. Linear-incidence instances have a subexponential classical comparator.",
    "gainText": "Polynomial speedup through a smaller exponential constant for fixed demand in the general lattice comparison, using quantum search. Linear-incidence instances have a subexponential classical comparator.",
    "parameter": "n: universe size; demand D=2; polynomially many sets",
    "parameterHtml": "n: universe size; demand D=2; polynomially many sets",
    "model": "QRAM time / classical RAM time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 4.31142625,
    "costC": 4.4849625,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          4.31142625,
          4.4849625
        ]
      ],
      "quantum": "$\\operatorname{poly}(m,n)^{\\log n}2.660^n$",
      "classical": "$O(m3^n)$",
      "parameter": "n: universe size; demand D=2; polynomially many sets",
      "model": "QRAM time / classical RAM time",
      "note": "The principal nontrivial repeated-demand case retains the quasipolynomial prefactor; incidence is unrestricted."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7956</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Gaspers–Li graph-coloring algorithm.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant for unrestricted chromatic number, based on amplitude amplification. Fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span> decision has the displayed subexponential classical comparator.",
    "gainText": "Polynomial speedup through a smaller exponential constant for unrestricted chromatic number, based on amplitude amplification. Fixed-$q$ decision has the displayed subexponential classical comparator.",
    "parameter": "n: vertices; computing the chromatic number",
    "parameterHtml": "n: vertices; computing the chromatic number",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.744466,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.744466,
          3.9
        ]
      ],
      "quantum": "$O^*(1.7956^n)$, Gaspers--Li graph-coloring algorithm.",
      "classical": "$O^*(2^n)$",
      "parameter": "n: vertices; computing the chromatic number",
      "model": "Quantum running time / classical running time",
      "note": "Exact chromatic number, where the number of colors is part of the problem; fixed-q colorability has a distinct classical bound."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant in terminal count in the general comparison, using amplitude amplification. Sparse unit-weight regimes also have the stated classical vertex-parameter bounds.",
    "gainText": "Polynomial speedup through a smaller exponential constant in terminal count in the general comparison, using amplitude amplification. Sparse unit-weight regimes also have the stated classical vertex-parameter bounds.",
    "parameter": "k: terminals; bounded integer edge weights",
    "parameterHtml": "k: terminals; bounded integer edge weights",
    "model": "Quantum gates / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.75758296,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.75758296,
          3.9
        ]
      ],
      "quantum": "$O^*(1.812^k)$",
      "classical": "$O^*(2^k)$",
      "parameter": "k: terminals; bounded integer edge weights",
      "model": "Quantum gates / classical running time",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2.946</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, quantum bandwidth dynamic programming.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>4.383</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Cygan–Pilipczuk exact bandwidth algorithm.",
    "gain": "Polynomial speedup from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>4.383</mn><mi>n</mi></msup></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2.946</mn><mi>n</mi></msup></mrow></math></span>; quantum minimum finding and variable-time amplitude amplification are the principal acceleration tools.",
    "gainText": "Polynomial speedup from $4.383^n$ to $2.946^n$; quantum minimum finding and variable-time amplitude amplification are the principal acceleration tools.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 4.45875743,
    "costC": 5.03191868,
    "papers": [
      {
        "title": "Quantum Speedups for Exponential-Time Dynamic Programming Algorithms",
        "url": "https://arxiv.org/pdf/1807.05209"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          4.45875743,
          5.03191868
        ]
      ],
      "quantum": "$O^*(2.946^n)$, quantum bandwidth dynamic programming.",
      "classical": "$O^*(4.383^n)$, Cygan--Pilipczuk exact bandwidth algorithm.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
    }
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
    "gain": "Polynomial speedups through smaller exponential constants in both displayed memory regimes. The quantum constructions combine structural enumeration with amplitude amplification and minimum finding.",
    "gainText": "Polynomial speedups through smaller exponential constants in both displayed memory regimes. The quantum constructions combine structural enumeration with amplitude amplification and minimum finding.",
    "parameter": "n: vertices; exponential-memory treewidth algorithms",
    "parameterHtml": "n: vertices; exponential-memory treewidth algorithms",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.5210555,
    "costC": 3.69468618,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.5210555,
          3.69468618
        ]
      ],
      "quantum": "$O^*(1.538^n)$",
      "classical": "$O^*(1.7347^n)$",
      "parameter": "n: vertices; exponential-memory treewidth algorithms",
      "model": "Quantum running time / classical running time",
      "note": "Comparison permits exponential coherent/classical memory. The polynomial-space classical variant is separately stated in the entry."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, quantum vertex-ordering dynamic programming.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.89</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Kitsunai et al. directed-pathwidth algorithm applied to an undirected graph.",
    "gain": "Polynomial speedup through a smaller exponential constant relative to the <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>1.89</mn><mi>n</mi></msup></mrow></math></span> classical bound. The quantum acceleration comes from recursive minimum finding and amplitude amplification.",
    "gainText": "Polynomial speedup through a smaller exponential constant relative to the $1.89^n$ classical bound. The quantum acceleration comes from recursive minimum finding and amplitude amplification.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.76155842,
    "costC": 3.81838623,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.76155842,
          3.81838623
        ]
      ],
      "quantum": "$O^*(1.817^n)$, quantum vertex-ordering dynamic programming.",
      "classical": "$O^*(1.89^n)$, Kitsunai et al. directed-pathwidth algorithm applied to an undirected graph.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for all three problems, quantum vertex-ordering dynamic programming.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "The common unrestricted vertex-count comparison is <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> versus <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, a polynomial speedup obtained from amplitude amplification and quantum minimum finding. Small-fill interval completion uses the stated parameterized comparator.",
    "gainText": "The common unrestricted vertex-count comparison is $O^*(2^n)$ versus $O^*(1.817^n)$, a polynomial speedup obtained from amplitude amplification and quantum minimum finding. Small-fill interval completion uses the stated parameterized comparator.",
    "parameter": "n: vertices; general instances of the merged ordering problems",
    "parameterHtml": "n: vertices; general instances of the merged ordering problems",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.76155842,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.76155842,
          3.9
        ]
      ],
      "quantum": "$O^*(1.817^n)$ for all three problems, quantum vertex-ordering dynamic programming.",
      "classical": "$O^*(2^n)$",
      "parameter": "n: vertices; general instances of the merged ordering problems",
      "model": "Quantum running time / classical running time",
      "note": "General vertex-ordering problems, parameterized by vertex count; the fill-parameter algorithm is an additional structured regime."
    }
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
    "parameter": "n: number of input integers; polynomial input bit lengths",
    "parameterHtml": "n: number of input integers; polynomial input bit lengths",
    "model": "Quantum time with coherent memory / classical word operations",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.18571429,
    "costC": 3.39,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.18571429,
          3.39
        ]
      ],
      "quantum": "$O^*(2^{2n/7})$",
      "classical": "$O(2^{0.49n})$",
      "parameter": "n: number of input integers; polynomial input bit lengths",
      "model": "Quantum time with coherent memory / classical word operations",
      "note": "Leading exponential rates; polynomial factors are suppressed."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "The fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi></mrow></math></span>, dense, large-coefficient comparison improves the exponential constant from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span>, a polynomial speedup based on Grover search and amplitude amplification. Small capacities and bounded row support select the stated stronger classical bounds.",
    "gainText": "The fixed-$d$, dense, large-coefficient comparison improves the exponential constant from $1/2$ to $1/3$, a polynomial speedup based on Grover search and amplitude amplification. Small capacities and bounded row support select the stated stronger classical bounds.",
    "parameter": "n: variables; fixed constraint count, dense binary coefficients and large capacity",
    "parameterHtml": "n: variables; fixed constraint count, dense binary coefficients and large capacity",
    "model": "Quantum coherent-memory time / classical RAM time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.23333333,
    "costC": 3.4,
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.23333333,
          3.4
        ]
      ],
      "quantum": "$O^*(2^{n/3})$",
      "classical": "$O^*(2^{n/2})$",
      "parameter": "n: variables; fixed constraint count, dense binary coefficients and large capacity",
      "model": "Quantum coherent-memory time / classical RAM time",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>5</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>E</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: graph vertices",
    "parameterHtml": "n: graph vertices",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.1,
    "costC": 2.89,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.1,
          2.89
        ]
      ],
      "quantum": "$O^*(2^{n/5})$",
      "classical": "$\\operatorname{poly}(n+|E|)2^{O(n\\log\\log n/\\sqrt{\\log n})}$",
      "parameter": "n: graph vertices",
      "model": "Quantum gates / classical bit operations",
      "note": "The general current classical bound is subexponential."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x02212;</mo><mi>&#x003F5;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for some constant <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003F5;</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math></span>, Gaspers–Li domatic-number algorithm.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, inclusion–exclusion over dominating sets.",
    "gain": "Polynomial speedup through a smaller exponential constant for unrestricted domatic number, based on amplitude amplification. Fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span> decision has the subexponential classical comparison above.",
    "gainText": "Polynomial speedup through a smaller exponential constant for unrestricted domatic number, based on amplitude amplification. Fixed-$q$ decision has the subexponential classical comparison above.",
    "parameter": "n: graph vertices; fixed algorithmic ε>0",
    "parameterHtml": "n: graph vertices; fixed algorithmic ε&gt;0",
    "model": "Quantum time / classical time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.9,
          3.9
        ]
      ],
      "quantum": "$O^*((2-\\epsilon)^n)$ for some constant $\\epsilon>0$, Gaspers--Li domatic-number algorithm.",
      "classical": "$O^*(2^n)$, inclusion--exclusion over dominating sets.",
      "parameter": "n: graph vertices; fixed algorithmic ε>0",
      "model": "Quantum time / classical time",
      "note": "Both algorithms occupy the exponential class; the quantum base 2−ε is smaller, but its numerical constant is unspecified."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.8554</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Gaspers–Li biclique covering, packing and partition algorithms.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, inclusion–exclusion over the biclique family.",
    "gain": "Polynomial speedup through a smaller exponential constant for the general family problems with unrestricted part count, using amplitude amplification. Fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span> covering has the subexponential classical bound.",
    "gainText": "Polynomial speedup through a smaller exponential constant for the general family problems with unrestricted part count, using amplitude amplification. Fixed-$q$ covering has the subexponential classical bound.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.79173025,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.79173025,
          3.9
        ]
      ],
      "quantum": "$O^*(1.8554^n)$, Gaspers--Li biclique covering, packing and partition algorithms.",
      "classical": "$O^*(2^n)$, inclusion--exclusion over the biclique family.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.8934</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Gaspers–Li maximal-induced-matching framework.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, inclusion–exclusion and subset transforms.",
    "gain": "Polynomial speedup through a smaller exponential constant for unrestricted part count, arising from amplitude amplification. A fixed part count has the stronger subexponential classical comparator.",
    "gainText": "Polynomial speedup through a smaller exponential constant for unrestricted part count, arising from amplitude amplification. A fixed part count has the stronger subexponential classical comparator.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.82097923,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.82097923,
          3.9
        ]
      ],
      "quantum": "$O^*(1.8934^n)$, Gaspers--Li maximal-induced-matching framework.",
      "classical": "$O^*(2^n)$, inclusion--exclusion and subset transforms.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.9629</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Gaspers–Li induced-forest covering algorithm.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, inclusion–exclusion over induced forests.",
    "gain": "Polynomial speedup from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>1.9629</mn><mi>n</mi></msup></mrow></math></span>, based on amplitude amplification.",
    "gainText": "Polynomial speedup from $2^n$ to $1.9629^n$, based on amplitude amplification.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.87298668,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Algorithms for Graph Coloring and Other Partitioning, Covering, and Packing Problems",
        "url": "https://arxiv.org/pdf/2311.08042"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.87298668,
          3.9
        ]
      ],
      "quantum": "$O^*(1.9629^n)$, Gaspers--Li induced-forest covering algorithm.",
      "classical": "$O^*(2^n)$, inclusion--exclusion over induced forests.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.9149</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for cluster or triangle-free graphs, Gaspers–Li partition framework.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, inclusion–exclusion and subset transforms.",
    "gain": "Polynomial speedups through smaller exponential constants for unrestricted part count, from amplitude amplification. Fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span> decision has the subexponential classical comparison above.",
    "gainText": "Polynomial speedups through smaller exponential constants for unrestricted part count, from amplitude amplification. Fixed-$q$ decision has the subexponential classical comparison above.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
    "model": "Quantum running time / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.83726905,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.83726905,
          3.9
        ]
      ],
      "quantum": "$O^*(1.9149^n)$ for cluster or triangle-free graphs, Gaspers--Li partition framework.",
      "classical": "$O^*(2^n)$, inclusion--exclusion and subset transforms.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, quantum vertex-ordering dynamic programming.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7347</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, potential-maximal-clique dynamic programming.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
    "model": "Quantum running time / classical running time",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.76155842,
    "costC": 3.69468618,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.76155842,
          3.69468618
        ]
      ],
      "quantum": "$O^*(1.817^n)$, quantum vertex-ordering dynamic programming.",
      "classical": "$O^*(1.7347^n)$, potential-maximal-clique dynamic programming.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "The recorded classical algorithm is faster than this quantum algorithm, so the point lies on the classical-faster side."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Subexponential to polynomial in the strongest comparison: throughout <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><mi>&#x003C9;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, the quantum cost is polynomial in the oracle address length <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02113;</mi></mrow></math></span>, while the classical cost is superpolynomial. At larger depths within the stated lower-bound range, both costs become superpolynomial and the general bounds describe an intermediate improvement. Fixed depth gives a polynomial query advantage.",
    "gainText": "Subexponential to polynomial in the strongest comparison: throughout $h=\\omega(1)$ and $h=O(\\log n)$, the quantum cost is polynomial in the oracle address length $\\ell$, while the classical cost is superpolynomial. At larger depths within the stated lower-bound range, both costs become superpolynomial and the general bounds describe an intermediate improvement. Fixed depth gives a polynomial query advantage.",
    "parameter": "n: branching parameter; depth h=⌊log₂n⌋",
    "parameterHtml": "n: branching parameter; depth h=⌊log₂n⌋",
    "model": "Oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 2.45,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2.45
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$n^{\\Theta(\\log n)}$",
      "parameter": "n: branching parameter; depth h=⌊log₂n⌋",
      "model": "Oracle queries",
      "note": "The principal recursive-Fourier-sampling separation has polynomial quantum and quasipolynomial randomized query complexity."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "hidden-string length n",
    "parameterHtml": "hidden-string length n",
    "model": "wildcard-equality queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\Theta(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "hidden-string length n",
      "model": "wildcard-equality queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "k defective items in a universe of size n=k^2",
    "parameterHtml": "k defective items in a universe of size n=k^2",
    "model": "subset-intersection queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Algorithms for Learning Symmetric Juntas via the Adversary Bound",
        "url": "https://arxiv.org/abs/1311.6777"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\Theta(\\sqrt k)$",
      "classical": "$\\Theta(k\\log k)$",
      "parameter": "k defective items in a universe of size n=k^2",
      "model": "subset-intersection queries",
      "note": "Principal sparse-defective regime; logarithms remain in the classical formula."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>k</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Threshold k; gap d=Theta(sqrt(k))",
    "parameterHtml": "Threshold k; gap d=Theta(sqrt(k))",
    "model": "subset-intersection queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.25,
    "costC": 1,
    "papers": [
      {
        "title": "Efficient Quantum Algorithms for (Gapped) Group Testing and Junta Testing",
        "url": "https://arxiv.org/abs/1507.03126"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.25,
          1
        ]
      ],
      "quantum": "$O(k^{1/4})$",
      "classical": "$\\widetilde\\Theta(k)$",
      "parameter": "Threshold k; gap d=Theta(sqrt(k))",
      "model": "subset-intersection queries",
      "note": "The gap at the classical saturation threshold realizes the fourth-power comparison."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>k</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Junta size k; n>=2k and fixed distance epsilon",
    "parameterHtml": "Junta size k; n&gt;=2k and fixed distance epsilon",
    "model": "Membership queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\Theta(\\sqrt k)$",
      "classical": "$O(k\\log k)$",
      "parameter": "Junta size k; n>=2k and fixed distance epsilon",
      "model": "Membership queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Boolean dimension n; fixed junta size and learning accuracy",
    "parameterHtml": "Boolean dimension n; fixed junta size and learning accuracy",
    "model": "Total labeled examples, with quantum examples in the first quantum stage",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 0.18,
    "papers": [
      {
        "title": "Quantum Algorithms for Learning and Testing Juntas",
        "url": "https://arxiv.org/abs/0707.3479"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          0.18
        ]
      ],
      "quantum": "$O(1)$",
      "classical": "$O(\\log n)$",
      "parameter": "Boolean dimension n; fixed junta size and learning accuracy",
      "model": "Total labeled examples, with quantum examples in the first quantum stage",
      "note": "The dimension-independent quantum-example regime; the classical examples recover relevant-coordinate information."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Dimension n; polynomial DNF size and fixed accuracy/confidence",
    "parameterHtml": "Dimension n; polynomial DNF size and fixed accuracy/confidence",
    "model": "Example-only learning time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.45,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.45
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$n^{O(\\log n)}$",
      "parameter": "Dimension n; polynomial DNF size and fixed accuracy/confidence",
      "model": "Example-only learning time",
      "note": "Principal polynomial-size concept class; unspecified degrees use the polynomial/quasipolynomial class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Dimension n; one Fourier character (k=1)",
    "parameterHtml": "Dimension n; one Fourier character (k=1)",
    "model": "Uniform quantum examples versus classical labeled samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 1,
    "papers": [
      {
        "title": "Nearly Optimal Quantum Sample Complexity of Learning Fourier-Sparse Boolean Functions",
        "url": "https://arxiv.org/abs/2610.17648"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          1
        ]
      ],
      "quantum": "$O(1)$",
      "classical": "$\\Theta(n)$",
      "parameter": "Dimension n; one Fourier character (k=1)",
      "model": "Uniform quantum examples versus classical labeled samples",
      "note": "The constant-sparsity parity case gives the strongest dimension dependence and is admitted by the exact learner."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Dimension n; polynomial-size trees and fixed accuracy",
    "parameterHtml": "Dimension n; polynomial-size trees and fixed accuracy",
    "model": "Example-only learning time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.45,
    "papers": [
      {
        "title": "Efficient Quantum Agnostic Improper Learning of Decision Trees",
        "url": "https://proceedings.mlr.press/v238/chatterjee24a/chatterjee24a.pdf"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.45
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$n^{O(\\log n)}$",
      "parameter": "Dimension n; polynomial-size trees and fixed accuracy",
      "model": "Example-only learning time",
      "note": "Principal polynomial-size tree class; unknown degrees use class positions."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "inverse distance 1/epsilon",
    "parameterHtml": "inverse distance 1/epsilon",
    "model": "Boolean membership queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Improved quantum test for linearity of a Boolean function",
        "url": "https://arxiv.org/abs/1306.6195"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$O(\\varepsilon^{-1/2})$",
      "classical": "$\\Theta(\\varepsilon^{-1})$",
      "parameter": "inverse distance 1/epsilon",
      "model": "Boolean membership queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Inverse distance 1/epsilon",
    "parameterHtml": "Inverse distance 1/epsilon",
    "model": "Boolean membership queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Quantum algorithms to check Resiliency, Symmetry and Linearity of a Boolean function",
        "url": "https://eprint.iacr.org/2013/232.pdf"
      },
      {
        "title": "Testing classical properties from quantum data",
        "url": "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.34/LIPIcs.ITCS.2026.34.html"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$O(\\varepsilon^{-1/2})$",
      "classical": "$O(\\varepsilon^{-1})$",
      "parameter": "Inverse distance 1/epsilon",
      "model": "Boolean membership queries",
      "note": "The current membership-query comparison depends on inverse distance; both algorithms test the same symmetry property."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Boolean dimension n; fixed testing distance",
    "parameterHtml": "Boolean dimension n; fixed testing distance",
    "model": "Membership queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.25,
    "costC": 0.5,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.25,
          0.5
        ]
      ],
      "quantum": "$\\widetilde O(n^{1/4})$",
      "classical": "$\\widetilde O(\\sqrt n)$",
      "parameter": "Boolean dimension n; fixed testing distance",
      "model": "Membership queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Boolean dimension n; fixed distance epsilon",
    "parameterHtml": "Boolean dimension n; fixed distance epsilon",
    "model": "Passive labeled examples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 3.9,
    "papers": [
      {
        "title": "Testing classical properties from quantum data",
        "url": "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.34/LIPIcs.ITCS.2026.34.html"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$O(1)$",
      "classical": "$\\widetilde O(2^n)$",
      "parameter": "Boolean dimension n; fixed distance epsilon",
      "model": "Passive labeled examples",
      "note": "Classical full-domain acquisition supplies the comparison upper bound; the entry retains its exponential classical-example lower bound."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>k</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "The copy-only advantage is logarithmic in the favorable support regime. With the supplied reflection oracle, the strongest regime has polynomial query advantage; both models remain explicit above.",
    "gainText": "The copy-only advantage is logarithmic in the favorable support regime. With the supplied reflection oracle, the strongest regime has polynomial query advantage; both models remain explicit above.",
    "parameter": "Support size k; one missing universe element; reflection access",
    "parameterHtml": "Support size k; one missing universe element; reflection access",
    "model": "Quantum state-preparation/reflection queries versus independent classical samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Coupon Collector",
        "url": "https://arxiv.org/abs/2002.07688"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\Theta(\\sqrt k)$",
      "classical": "$\\Theta(k\\log k)$",
      "parameter": "Support size k; one missing universe element; reflection access",
      "model": "Quantum state-preparation/reflection queries versus independent classical samples",
      "note": "The n-k=1 reflection-access regime attains the largest polynomial saving; the copy-only comparison remains in the problem entry."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Exact-half junta size k; universe size n=2k",
    "parameterHtml": "Exact-half junta size k; universe size n=2k",
    "model": "Membership queries",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.25,
          1
        ]
      ],
      "quantum": "$\\Theta(k^{1/4})$",
      "classical": "$\\Omega(k)$",
      "parameter": "Exact-half junta size k; universe size n=2k",
      "model": "Membership queries",
      "note": "The classical point is the information lower bound in the same exact-half family."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Distribution domain size N; fixed testing distance",
    "parameterHtml": "Distribution domain size N; fixed testing distance",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.33333333,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.33333333,
          0.5
        ]
      ],
      "quantum": "$O(N^{1/3})$",
      "classical": "$\\Theta(\\sqrt N)$",
      "parameter": "Distribution domain size N; fixed testing distance",
      "model": "coherent sampler queries versus independent samples",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Distribution support bound N; fixed testing distance",
    "parameterHtml": "Distribution support bound N; fixed testing distance",
    "model": "purified preparation queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 0.66666667,
    "papers": [
      {
        "title": "Succinct quantum testers for closeness and k-wise uniformity of probability distributions",
        "url": "https://arxiv.org/abs/2304.12916"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          0.66666667
        ]
      ],
      "quantum": "$O(\\sqrt N)$",
      "classical": "$\\Theta(N^{2/3})$",
      "parameter": "Distribution support bound N; fixed testing distance",
      "model": "purified preparation queries versus independent samples",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "inverse distance 1/epsilon",
    "parameterHtml": "inverse distance 1/epsilon",
    "model": "purified preparation queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.0,
    "costC": 2.0,
    "papers": [
      {
        "title": "Succinct quantum testers for closeness and k-wise uniformity of probability distributions",
        "url": "https://arxiv.org/abs/2304.12916"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.0,
          2.0
        ]
      ],
      "quantum": "$O(1/\\varepsilon)$",
      "classical": "$\\Theta(1/\\varepsilon^2)$",
      "parameter": "inverse distance 1/epsilon",
      "model": "purified preparation queries versus independent samples",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Alphabet sizes n and m=2; fixed testing distance",
    "parameterHtml": "Alphabet sizes n and m=2; fixed testing distance",
    "model": "purified preparation queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 0.66666667,
    "papers": [
      {
        "title": "Distributional property testing in a quantum world",
        "url": "https://arxiv.org/abs/1902.00814"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          0.66666667
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\Theta(n^{2/3})$",
      "parameter": "Alphabet sizes n and m=2; fixed testing distance",
      "model": "purified preparation queries versus independent samples",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Dimension n; pairwise uniformity (k=2), fixed distance",
    "parameterHtml": "Dimension n; pairwise uniformity (k=2), fixed distance",
    "model": "purified preparation queries versus classical samples",
    "evidence": 0.5,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$O(n^2)$",
      "parameter": "Dimension n; pairwise uniformity (k=2), fixed distance",
      "model": "purified preparation queries versus classical samples",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002F;</mo><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Distribution support bound N; fixed additive accuracy",
    "parameterHtml": "Distribution support bound N; fixed additive accuracy",
    "model": "purified sample preparation versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt N)$",
      "classical": "$\\Theta(N/\\log N)$",
      "parameter": "Distribution support bound N; fixed additive accuracy",
      "model": "purified sample preparation versus independent samples",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>m</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002F;</mo><mi>log</mi><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "inverse minimum nonzero mass m; fixed accuracy epsilon",
    "parameterHtml": "inverse minimum nonzero mass m; fixed accuracy epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Quantum Query Complexity of Entropy Estimation",
        "url": "https://arxiv.org/abs/1710.06025"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt m/\\varepsilon^{3/2})$",
      "classical": "$\\Theta(m/\\log m)$",
      "parameter": "inverse minimum nonzero mass m; fixed accuracy epsilon",
      "model": "coherent sampler queries versus independent samples",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>t</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x0002F;</mo><mi>log</mi><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "future sample count t; fixed accuracy epsilon",
    "parameterHtml": "future sample count t; fixed accuracy epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Quantum Query Complexity of Entropy Estimation",
        "url": "https://arxiv.org/abs/1710.06025"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt t/\\varepsilon^{3/2})$",
      "classical": "$\\Theta(t/\\log t)$",
      "parameter": "future sample count t; fixed accuracy epsilon",
      "model": "coherent sampler queries versus independent samples",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "domain size N; fixed separation epsilon",
    "parameterHtml": "domain size N; fixed separation epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.33333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "Quantum algorithms for testing properties of distributions",
        "url": "https://arxiv.org/abs/0907.3920"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.33333333,
          0.5
        ]
      ],
      "quantum": "$O(N^{1/3})$",
      "classical": "$\\Theta(\\sqrt N)$",
      "parameter": "domain size N; fixed separation epsilon",
      "model": "coherent sampler queries versus independent samples",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial: a factor <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msqrt><mi>n</mi></msqrt></mrow></math></span> for matrix input and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msqrt><mrow><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi></mrow></msqrt></mrow></math></span> for array input. The quantum improvement comes from amplitude amplification and minimum finding inside Borůvka phases.",
    "gainText": "Polynomial: a factor $\\sqrt n$ for matrix input and $\\sqrt{m/n}$ for array input. The quantum improvement comes from amplitude amplification and minimum finding inside Borůvka phases.",
    "parameter": "n: graph vertices; adjacency-matrix input",
    "parameterHtml": "n: graph vertices; adjacency-matrix input",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2
        ]
      ],
      "quantum": "$\\Theta(n^{3/2})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: graph vertices; adjacency-matrix input",
      "model": "Adjacency-matrix queries",
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial: <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span> in the matrix model and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>m</mi><mo>&#x02192;</mo><mi>n</mi></mrow></math></span> in the array comparison. Quantum search accelerates structured graph exploration.",
    "gainText": "Polynomial: $n^2\\to n^{3/2}$ in the matrix model and $n+m\\to n$ in the array comparison. Quantum search accelerates structured graph exploration.",
    "parameter": "n: graph vertices; adjacency-matrix input",
    "parameterHtml": "n: graph vertices; adjacency-matrix input",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2
        ]
      ],
      "quantum": "$\\Theta(n^{3/2})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: graph vertices; adjacency-matrix input",
      "model": "Adjacency-matrix queries",
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial, from Grover search and quantum minimum finding. The dense matrix improvement is a factor <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msqrt><mi>n</mi></msqrt></mrow></math></span>.",
    "gainText": "Polynomial, from Grover search and quantum minimum finding. The dense matrix improvement is a factor $\\sqrt n$.",
    "parameter": "n: graph vertices; adjacency-matrix input",
    "parameterHtml": "n: graph vertices; adjacency-matrix input",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2
        ]
      ],
      "quantum": "$\\Theta(n^{3/2})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: graph vertices; adjacency-matrix input",
      "model": "Adjacency-matrix queries",
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial oracle speedup, originating in amplitude amplification and minimum finding. The explicit sparse-graph comparison uses the smaller of the two stated classical time bounds.",
    "gainText": "Polynomial oracle speedup, originating in amplitude amplification and minimum finding. The explicit sparse-graph comparison uses the smaller of the two stated classical time bounds.",
    "parameter": "n: graph vertices; adjacency-matrix input",
    "parameterHtml": "n: graph vertices; adjacency-matrix input",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^{3/2})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: graph vertices; adjacency-matrix input",
      "model": "Adjacency-matrix queries",
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: vertices; dense bipartite graphs, m=Θ(n²)",
    "parameterHtml": "n: vertices; dense bipartite graphs, m=Θ(n²)",
    "model": "Quantum time with coherent adjacency access / classical time",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2,
    "costC": 2,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^2)$",
      "classical": "$n^{2+o(1)}$",
      "parameter": "n: vertices; dense bipartite graphs, m=Θ(n²)",
      "model": "Quantum time with coherent adjacency access / classical time",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>13</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: vertices; dense unit-capacity networks, m=Θ(n²), U=1",
    "parameterHtml": "n: vertices; dense unit-capacity networks, m=Θ(n²), U=1",
    "model": "Quantum coherent-graph time / classical RAM time",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.03076923,
    "costC": 2,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.03076923,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^{13/6})$",
      "classical": "$n^{2+o(1)}$",
      "parameter": "n: vertices; dense unit-capacity networks, m=Θ(n²), U=1",
      "model": "Quantum coherent-graph time / classical RAM time",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial query improvement, <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>. The mechanism combines quantum walks and combinatorial preprocessing.",
    "gainText": "Polynomial query improvement, $n^2\\to\\widetilde O(n^{5/4})$. The mechanism combines quantum walks and combinatorial preprocessing.",
    "parameter": "n: graph vertices",
    "parameterHtml": "n: graph vertices",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.25,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^{5/4})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: graph vertices",
      "model": "Adjacency-matrix queries",
      "note": "Query comparison; arithmetic-time triangle algorithms are distinct."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial: <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>11</mn><mo>&#x0002F;</mo><mn>17</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> in the worst case. The algorithms use quantum search, quantum walks and graph structure.",
    "gainText": "Polynomial: $n\\to\\widetilde O(n^{11/17})$ in the worst case. The algorithms use quantum search, quantum walks and graph structure.",
    "parameter": "n: vertices; bounded independence number",
    "parameterHtml": "n: vertices; bounded independence number",
    "model": "Vertex-mark queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "n: vertices; bounded independence number",
      "model": "Vertex-mark queries",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Ambainis–Childs–Liu bipartiteness testing.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Goldreich–Ron random-walk testing.",
    "gain": "Polynomial: <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msqrt><mi>n</mi></msqrt><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, through collision-finding quantum walks.",
    "gainText": "Polynomial: $\\sqrt n\\to\\widetilde O(n^{1/3})$, through collision-finding quantum walks.",
    "parameter": "n: graph vertices; fixed degree and testing distance",
    "parameterHtml": "n: graph vertices; fixed degree and testing distance",
    "model": "Bounded-degree graph queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.33333333,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.33333333,
          0.5
        ]
      ],
      "quantum": "$\\widetilde O(n^{1/3})$, Ambainis--Childs--Liu bipartiteness testing.",
      "classical": "$\\widetilde\\Theta(\\sqrt n)$, Goldreich--Ron random-walk testing.",
      "parameter": "n: graph vertices; fixed degree and testing distance",
      "model": "Bounded-degree graph queries",
      "note": "The input model fixes degree and distance; polylogarithmic factors are suppressed."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, and quadratic improvement in the walk-time dependence <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003A6;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003A6;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></span>. The mechanism is quantum fast-forwarding and amplitude estimation.",
    "gainText": "Polynomial in $n$, and quadratic improvement in the walk-time dependence $\\Phi^{-2}\\to\\Phi^{-1}$. The mechanism is quantum fast-forwarding and amplitude estimation.",
    "parameter": "n: vertices; constant expansion threshold",
    "parameterHtml": "n: vertices; constant expansion threshold",
    "model": "Graph-oracle operations",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.33333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "Expansion Testing Using Quantum Fast-Forwarding and Seed Sets",
        "url": "https://arxiv.org/pdf/1907.02369"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.33333333,
          0.5
        ]
      ],
      "quantum": "$\\widetilde O(n^{1/3})$",
      "classical": "$\\widetilde O(\\sqrt n)$",
      "parameter": "n: vertices; constant expansion threshold",
      "model": "Graph-oracle operations",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries, quantum-walk and span-program formula evaluation.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mi>c</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for balanced binary trees, randomized alpha–beta pruning, where <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>c</mi><mo>&#x0003D;</mo><msub><mi>log</mi><mn>2</mn></msub><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msqrt><mrow><mn>33</mn></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02248;</mo><mn>0.753</mn></mrow></math></span>.",
    "gain": "Polynomial: <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>N</mi><mrow><mn>0.753</mn><mi>&#x02026;</mi></mrow></msup><mo>&#x02192;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span> on balanced binary trees. The mechanism is a quantum walk or span-program reflection algorithm.",
    "gainText": "Polynomial: $N^{0.753\\ldots}\\to N^{1/2}$ on balanced binary trees. The mechanism is a quantum walk or span-program reflection algorithm.",
    "parameter": "N: leaves of a balanced binary AND–OR formula",
    "parameterHtml": "N: leaves of a balanced binary AND–OR formula",
    "model": "Leaf-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 0.75372489,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          0.75372489
        ]
      ],
      "quantum": "$O(\\sqrt N)$ queries, quantum-walk and span-program formula evaluation.",
      "classical": "$\\Theta(N^c)$ for balanced binary trees, randomized alpha--beta pruning, where $c=\\log_2((1+\\sqrt{33})/4)\\approx0.753$.",
      "parameter": "N: leaves of a balanced binary AND–OR formula",
      "model": "Leaf-oracle queries",
      "note": "Balanced binary formulas give the matched classical bound."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial: <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><msup><mi>n</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></span>, using quantum walks and randomized algebraic checks.",
    "gainText": "Polynomial: $n^2\\to n^{5/3}$, using quantum walks and randomized algebraic checks.",
    "parameter": "n: square matrix dimension",
    "parameterHtml": "n: square matrix dimension",
    "model": "Matrix-entry queries and field arithmetic",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.66666667,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.66666667,
          2
        ]
      ],
      "quantum": "$O(n^{5/3})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: square matrix dimension",
      "model": "Matrix-entry queries and field arithmetic",
      "note": "Matching input-entry query model."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>17</mn><mo>&#x0002F;</mo><mn>12</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial query improvement: <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>17</mn><mo>&#x0002F;</mo><mn>12</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>. The method combines reductions, quantum search and quantum walks.",
    "gainText": "Polynomial query improvement: $n^2\\to\\widetilde O(n^{17/12})$. The method combines reductions, quantum search and quantum walks.",
    "parameter": "n: square matrix dimension",
    "parameterHtml": "n: square matrix dimension",
    "model": "Boolean matrix-entry queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.41666667,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.41666667,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^{17/12})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: square matrix dimension",
      "model": "Boolean matrix-entry queries",
      "note": "Query comparison; arithmetic-time product algorithms are separate."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial oracle speedup, including <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span> for the unrestricted path-length regime. The mechanism is a span program and quantum reflections.",
    "gainText": "Polynomial oracle speedup, including $n^2\\to n^{3/2}$ for the unrestricted path-length regime. The mechanism is a span program and quantum reflections.",
    "parameter": "n: vertices; constant promised path length; adjacency-matrix queries",
    "parameterHtml": "n: vertices; constant promised path length; adjacency-matrix queries",
    "model": "Adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 2,
    "papers": [
      {
        "title": "Span Programs and Quantum Algorithms for $st$-Connectivity and Claw Detection",
        "url": "https://arxiv.org/pdf/1203.2603"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: vertices; constant promised path length; adjacency-matrix queries",
      "model": "Adjacency-matrix queries",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial oracle improvement; for bounded weight ratio and dense graphs it is <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>.",
    "gainText": "Polynomial oracle improvement; for bounded weight ratio and dense graphs it is $n^2\\to\\widetilde O(n^{3/2})$.",
    "parameter": "n: vertices; constant minimum-cut value; adjacency-matrix queries",
    "parameterHtml": "n: vertices; constant minimum-cut value; adjacency-matrix queries",
    "model": "Adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum Complexity of Minimum Cut",
        "url": "https://arxiv.org/pdf/2011.09823"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^{3/2})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: vertices; constant minimum-cut value; adjacency-matrix queries",
      "model": "Adjacency-matrix queries",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates per sample, depth-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>p</mi></mrow></math></span> QAOA; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>K</mi></mrow></math></span> objective evaluations with <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>S</mi></mrow></math></span> shots each.",
    "C": "Polynomial time with ratio <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.87856</mn></mrow></math></span>, Goemans–Williamson; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> for exact sparse unweighted MaxCut.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(p(m+n))$ gates per sample, depth-$p$ QAOA; $O(KSp(m+n))$ for $K$ objective evaluations with $S$ shots each.",
      "classical": "Polynomial time with ratio $0.87856$, Goemans--Williamson; $\\operatorname{poly}(n)2^{O(n/\\sqrt{\\log n})}$ for exact sparse unweighted MaxCut.",
      "parameter": "",
      "model": "",
      "note": "QAOA supplies per-sample and optimization-loop costs, but no general depth/iteration/shot bound attaining the same approximation guarantee as the classical algorithm."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "N=n+m: input size; p=1 and bounded occurrence",
    "parameterHtml": "N=n+m: input size; p=1 and bounded occurrence",
    "model": "Quantum gates / classical running time for the stated expected approximation guarantee",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.4
        ]
      ],
      "quantum": "$O(N)$",
      "classical": "$\\operatorname{poly}(N)$",
      "parameter": "N=n+m: input size; p=1 and bounded occurrence",
      "model": "Quantum gates / classical running time for the stated expected approximation guarantee",
      "note": "The matched algorithms are polynomial. The classical degree is unspecified, so both markers use the polynomial-class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mi>&#x02308;</mi><mi>log</mi><mi>&#x003B4;</mi><mo>&#x0002F;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo><mi>&#x02309;</mi></mrow></math></span> evolution time to success probability <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x02212;</mo><mi>&#x003B4;</mi></mrow></math></span>, Rydberg adiabatic and variational optimization.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for exact unit-disk independent set, geometric separators and dynamic programming.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
    "evidence": 0.5,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$t\\lceil\\log\\delta/\\log(1-p)\\rceil$ evolution time to success probability $1-\\delta$, Rydberg adiabatic and variational optimization.",
      "classical": "$2^{O(\\sqrt n)}\\operatorname{poly}(n)$ for exact unit-disk independent set, geometric separators and dynamic programming.",
      "parameter": "",
      "model": "",
      "note": "Quantum time is expressed through evolution time t and measured success probability p; neither is bounded as a function of input size for the same exact-output target as the classical separator algorithm."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates per sample, depth-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>p</mi></mrow></math></span> QAOA for the SK Hamiltonian.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></math></span> arithmetic operations for an <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B5;</mi><mi>n</mi></mrow></math></span>-near optimum, Montanari&#x27;s incremental approximate message passing.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(pn^2)$ gates per sample, depth-$p$ QAOA for the SK Hamiltonian.",
      "classical": "$C(\\varepsilon)n^2$ arithmetic operations for an $\\varepsilon n$-near optimum, Montanari\\textquotesingle s incremental approximate message passing.",
      "parameter": "",
      "model": "",
      "note": "The p-dependent QAOA cost is per sample; the catalogue does not specify p and repetition/optimization costs attaining the classical εn-near-optimum guarantee."
    }
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
    "parameter": "N=(1−c_cl)n: effective search exponent; fixed density promise; dense objective",
    "parameterHtml": "N=(1−c_cl)n: effective search exponent; fixed density promise; dense objective",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.4,
          3.9
        ]
      ],
      "quantum": "$2^{(1-c_{\\rm cl})n/2+o(n)}$",
      "classical": "$2^{(1-c_{\\rm cl})n+o(n)}$",
      "parameter": "N=(1−c_cl)n: effective search exponent; fixed density promise; dense objective",
      "model": "Quantum gates / classical bit operations",
      "note": "The fixed-promise conditioning-and-search comparison uses N=(1−c_cl)n. Dense representation keeps the encoding-based counting bound from improving the paired exponential bound."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement for the stated sampling model, including <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></span> and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span>. Quantum amplitude estimation and quantum walks supply these factors.",
    "gainText": "Polynomial improvement for the stated sampling model, including $\\varepsilon^{-2}\\to\\varepsilon^{-1}$ and $\\delta^{-1}\\to\\delta^{-1/2}$. Quantum amplitude estimation and quantum walks supply these factors.",
    "parameter": "1/ε: inverse relative error; fixed state-space and spectral-gap factors",
    "parameterHtml": "1/ε: inverse relative error; fixed state-space and spectral-gap factors",
    "model": "Coherent walk operations / classical transition operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 2,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2
        ]
      ],
      "quantum": "$\\widetilde O(\\varepsilon^{-1})$",
      "classical": "$\\widetilde O(\\varepsilon^{-2})$",
      "parameter": "1/ε: inverse relative error; fixed state-space and spectral-gap factors",
      "model": "Coherent walk operations / classical transition operations",
      "note": "Principal comparison in the stated regime."
    }
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
    "parameter": "h: welded-tree height",
    "parameterHtml": "h: welded-tree height",
    "model": "Oracle queries; quantum gates are polynomial in h",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "Exponential Algorithmic Speedup by a Quantum Walk",
        "url": "https://arxiv.org/pdf/quant-ph/0209131"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(h)$",
      "classical": "$2^{\\Omega(h)}$",
      "parameter": "h: welded-tree height",
      "model": "Oracle queries; quantum gates are polynomial in h",
      "note": "Unspecified polynomial degree and exponential constant use their complexity-class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic improvement in inverse spectral gap for the specified chain sequence, from quantum-walk phase detection and state transformations. An exponentially small gap gives an improvement in the exponential constant of that chain-based bound.",
    "gainText": "Quadratic improvement in inverse spectral gap for the specified chain sequence, from quantum-walk phase detection and state transformations. An exponentially small gap gives an improvement in the exponential constant of that chain-based bound.",
    "parameter": "1/δ: inverse spectral gap; fixed cooling-schedule length",
    "parameterHtml": "1/δ: inverse spectral gap; fixed cooling-schedule length",
    "model": "Coherent walk steps / classical transition steps",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\delta^{-1/2})$",
      "classical": "$\\widetilde O(\\delta^{-1})$",
      "parameter": "1/δ: inverse spectral gap; fixed cooling-schedule length",
      "model": "Coherent walk steps / classical transition steps",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, quantum minimum finding for min-plus products and repeated squaring.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2.998</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> expected time, Alman–Vassilevska Williams Las Vegas APSP.",
    "gain": "Polynomial for arbitrary real weights: approximately a factor <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>0.498</mn></mrow></msup></mrow></math></span> between the displayed upper bounds, with quantum logarithmic factors suppressed. The mechanism is minimum finding.",
    "gainText": "Polynomial for arbitrary real weights: approximately a factor $n^{0.498}$ between the displayed upper bounds, with quantum logarithmic factors suppressed. The mechanism is minimum finding.",
    "parameter": "n: graph vertices",
    "parameterHtml": "n: graph vertices",
    "model": "Quantum gates / classical arithmetic operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.08,
    "costC": 2.13315544,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.08,
          2.13315544
        ]
      ],
      "quantum": "$\\widetilde O(n^{5/2})$, quantum minimum finding for min-plus products and repeated squaring.",
      "classical": "$O(n^{2.998})$ expected time, Alman--Vassilevska Williams Las Vegas APSP.",
      "parameter": "n: graph vertices",
      "model": "Quantum gates / classical arithmetic operations",
      "note": "Leading polynomial powers in the recorded APSP algorithms; polylogarithms are suppressed."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Candidate exponential-to-polynomial advantage for the explicit random-instance approximation target; a superpolynomial query separation for the folded oracle family. The mechanism is decoded Fourier interference.",
    "gainText": "Candidate exponential-to-polynomial advantage for the explicit random-instance approximation target; a superpolynomial query separation for the folded oracle family. The mechanism is decoded Fourier interference.",
    "parameter": "p: field size; balanced explicit OPI, fixed n/p and the DQI score target",
    "parameterHtml": "p: field size; balanced explicit OPI, fixed n/p and the DQI score target",
    "model": "Quantum gates / classical operations for the same DQI score target",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(p)$",
      "classical": "$\\exp(O(p))$",
      "parameter": "p: field size; balanced explicit OPI, fixed n/p and the DQI score target",
      "model": "Quantum gates / classical operations for the same DQI score target",
      "note": "The principal explicit random-instance comparison uses interpolation repetition; unspecified degrees and rates use complexity-class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mi>k</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates, one-hot QAOA with a parity-ring mixer; polynomial-size qudit QAOA with a Grover mixer.",
    "C": "Polynomial time, Frieze–Jerrum approximation and the Local Vector algorithm; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mi>k</mi><mrow><mi>&#x003C9;</mi><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></span> for exact integer-weighted 2-CSP.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(KSpk(m+n))$ gates, one-hot QAOA with a parity-ring mixer; polynomial-size qudit QAOA with a Grover mixer.",
      "classical": "Polynomial time, Frieze--Jerrum approximation and the Local Vector algorithm; $\\operatorname{poly}(n,m,W)k^{\\omega n/3}$ for exact integer-weighted 2-CSP.",
      "parameter": "",
      "model": "",
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates, the quantum alternating operator ansatz with an <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>X</mi><mi>Y</mi></mrow></math></span> parity-ring mixer.",
    "C": "Polynomial time with ratio <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0.8776</mn></mrow></math></span>, Austrin–Benabbas–Georgiou; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>&#x003C9;</mi><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup></mrow></math></span> for exact weighted 2-CSP.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(KSp(m+n))$ gates, the quantum alternating operator ansatz with an $XY$ parity-ring mixer.",
      "classical": "Polynomial time with ratio $0.8776$, Austrin--Benabbas--Georgiou; $\\operatorname{poly}(n,m,W)2^{\\omega n/3}$ for exact weighted 2-CSP.",
      "parameter": "",
      "model": "",
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates for hardware-efficient VQE and F-VQE; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002B;</mo><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for QAOA.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>N</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002C;</mo><mi>q</mi><mo>&#x0002C;</mo><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>&#x003C9;</mi><mi>N</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>L</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>, enumeration, weighted 2-CSP and exact threshold counting.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(KSpN)$ gates for hardware-efficient VQE and F-VQE; $O(KSp(N+q))$ for QAOA.",
      "classical": "$\\min\\{O^*(2^N),\\operatorname{poly}(N,q,W)2^{\\omega N/3},\\operatorname{poly}(L)2^{O(L/\\sqrt{\\log L})}\\}$, enumeration, weighted 2-CSP and exact threshold counting.",
      "parameter": "",
      "model": "",
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><mi>S</mi><mi>p</mi><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates for dense covariance, the quantum alternating operator ansatz with paired parity mixers.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>3</mn><mrow><mi>&#x003C9;</mi><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>L</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>, enumeration, weighted 2-CSP and exact threshold counting.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(KSpn^2)$ gates for dense covariance, the quantum alternating operator ansatz with paired parity mixers.",
      "classical": "$\\min\\{O^*(3^n),\\operatorname{poly}(n,W)3^{\\omega n/3},\\operatorname{poly}(L)2^{O(L/\\sqrt{\\log L})}\\}$, enumeration, weighted 2-CSP and exact threshold counting.",
      "parameter": "",
      "model": "",
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>I</mi><mi>K</mi><mi>S</mi><mi>p</mi><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates, variational quantum local search on <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi></mrow></math></span>-vertex subproblems.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>&#x003C9;</mi><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> exact global optimization, weighted 2-CSP; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>&#x003C9;</mi><mi>b</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> per exact local subproblem.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(IKSpb^2)$ gates, variational quantum local search on $b$-vertex subproblems.",
      "classical": "$O^*(2^{\\omega n/3})$ exact global optimization, weighted 2-CSP; $O^*(2^{\\omega b/3})$ per exact local subproblem.",
      "parameter": "",
      "model": "",
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n input items",
    "parameterHtml": "n input items",
    "model": "indexed queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1.0,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1.0
        ]
      ],
      "quantum": "$\\Theta(n^{2/3})$",
      "classical": "$\\Theta(n)$",
      "parameter": "n input items",
      "model": "indexed queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n items; k=2; sufficiently large group",
    "parameterHtml": "n items; k=2; sufficiently large group",
    "model": "indexed queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1
        ]
      ],
      "quantum": "$O(n^{2/3})$",
      "classical": "$\\Theta(n)$",
      "parameter": "n items; k=2; sufficiently large group",
      "model": "indexed queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.18,
          0.18
        ]
      ],
      "quantum": "$\\ln n/\\pi+o(\\log n)$",
      "classical": "$\\lceil\\log_2(n+1)\\rceil$",
      "parameter": "n ordered positions",
      "model": "exact comparison queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mi>log</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Inverse rank tolerance 1/epsilon; n >= epsilon^(-2)",
    "parameterHtml": "Inverse rank tolerance 1/epsilon; n &gt;= epsilon^(-2)",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2
        ]
      ],
      "quantum": "$O(\\varepsilon^{-1}\\log(1/\\varepsilon)\\log\\log(1/\\varepsilon))$",
      "classical": "$\\Theta(\\varepsilon^{-2})$",
      "parameter": "Inverse rank tolerance 1/epsilon; n >= epsilon^(-2)",
      "model": "input queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Combined string length n+m; both text and pattern lengths remain in the formulas",
    "parameterHtml": "Combined string length n+m; both text and pattern lengths remain in the formulas",
    "model": "character queries and random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "String Matching in tilde O(sqrt(n)+sqrt(m)) Quantum Time",
        "url": "https://arxiv.org/abs/quant-ph/0011049"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n+\\sqrt m)$",
      "classical": "$\\Theta(n+m)$",
      "parameter": "Combined string length n+m; both text and pattern lengths remain in the formulas",
      "model": "character queries and random-access time",
      "note": "The sum of square roots has order sqrt(n+m), uniformly over both lengths, up to logarithmic factors."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>b</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>b</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to subexponential in the strongest stated regime; the general parameter dependence is retained above.",
    "gainText": "Exponential to subexponential in the strongest stated regime; the general parameter dependence is retained above.",
    "parameter": "$b=\\log_2 n$; d=1 and m=Theta(n), random arrays",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi><mo>&#x0003D;</mo><msub><mi>log</mi><mn>2</mn></msub><mi>n</mi></mrow></math></span>; d=1 and m=Theta(n), random arrays",
    "model": "random-input oracle time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.7,
    "costC": 3.4,
    "papers": [
      {
        "title": "Quantum pattern matching fast on average",
        "url": "https://arxiv.org/abs/1408.1816"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.7,
          3.4
        ]
      ],
      "quantum": "$2^{O(\\sqrt b)}$",
      "classical": "$\\widetilde\\Theta(2^{b/2})$",
      "parameter": "$b=\\log_2 n$; d=1 and m=Theta(n), random arrays",
      "model": "random-input oracle time",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "character queries and random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1.0,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(n^{2/3})$",
      "classical": "$O(n)$",
      "parameter": "string length n",
      "model": "character queries and random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$n^{1/2+o(1)}$",
      "classical": "$\\Theta(n)$",
      "parameter": "string length n",
      "model": "random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\widetilde O(n)$",
      "parameter": "string length n",
      "model": "random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2110.09696"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$n^{1/2+o(1)}$",
      "classical": "$O(n)$",
      "parameter": "string length n",
      "model": "random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "Quantum Meets Fine-grained Complexity: Sublinear Time Quantum Algorithms for String Problems",
        "url": "https://arxiv.org/abs/2010.12122"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "string length n",
      "model": "random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Permutation length n; constant positive Ulam distance",
    "parameterHtml": "Permutation length n; constant positive Ulam distance",
    "model": "random-access time; fixed approximation error",
    "evidence": 0.5,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\widetilde\\Theta(n)$",
      "parameter": "Permutation length n; constant positive Ulam distance",
      "model": "random-access time; fixed approximation error",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n; fixed edit or mismatch threshold k",
    "parameterHtml": "String length n; fixed edit or mismatch threshold k",
    "model": "Character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for Bounded Edit Distance and Lempel-Ziv Factorization",
        "url": "https://arxiv.org/abs/2311.01793"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "String length n; fixed edit or mismatch threshold k",
      "model": "Character queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n; fixed edit or mismatch threshold k",
    "parameterHtml": "String length n; fixed edit or mismatch threshold k",
    "model": "Character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal-Time Quantum Algorithms for Approximate Pattern Matching",
        "url": "https://arxiv.org/abs/2410.06808"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widehat O(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "String length n; fixed edit or mismatch threshold k",
      "model": "Character queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n; fixed edit or mismatch threshold k",
    "parameterHtml": "String length n; fixed edit or mismatch threshold k",
    "model": "Character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal-Time Quantum Algorithms for Approximate Pattern Matching",
        "url": "https://arxiv.org/abs/2410.06808"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widehat O(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "String length n; fixed edit or mismatch threshold k",
      "model": "Character queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n; polylogarithmically many LZ77 phrases",
    "parameterHtml": "String length n; polylogarithmically many LZ77 phrases",
    "model": "random-access time and character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithms for Bounded Edit Distance and Lempel-Ziv Factorization",
        "url": "https://arxiv.org/abs/2311.01793"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$O(n)$",
      "parameter": "String length n; polylogarithmically many LZ77 phrases",
      "model": "random-access time and character queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n; polylogarithmically many BWT runs",
    "parameterHtml": "String length n; polylogarithmically many BWT runs",
    "model": "random-access time and character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Compressibility-Aware Quantum Algorithms on Strings",
        "url": "https://arxiv.org/abs/2302.07235"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\widetilde O(n)$",
      "parameter": "String length n; polylogarithmically many BWT runs",
      "model": "random-access time and character queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n encoded runs; optimal match spans Theta(n) runs; N=poly(n)",
    "parameterHtml": "n encoded runs; optimal match spans Theta(n) runs; N=poly(n)",
    "model": "run queries; word costs include log N",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithm for Finding the Longest Common Substring between Run-Length Encoded Strings",
        "url": "https://arxiv.org/abs/2411.02421"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(n^{1/2+o(1)})$",
      "classical": "$O(n)$",
      "parameter": "n encoded runs; optimal match spans Theta(n) runs; N=poly(n)",
      "model": "run queries; word costs include log N",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "word length n; fixed language in the nontrivial star-free class",
    "parameterHtml": "word length n; fixed language in the nontrivial star-free class",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "A Quantum Query Complexity Trichotomy for Regular Languages",
        "url": "https://arxiv.org/abs/1812.04219"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$O(n)$",
      "parameter": "word length n; fixed language in the nontrivial star-free class",
      "model": "character queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Word length n; fixed permitted height h",
    "parameterHtml": "Word length n; fixed permitted height h",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Query Complexity of Dyck Languages with Bounded Height",
        "url": "https://arxiv.org/abs/1912.02176"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "Word length n; fixed permitted height h",
      "model": "character queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "string length n; fixed k",
    "parameterHtml": "string length n; fixed k",
    "model": "character queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1.0,
    "papers": [
      {
        "title": "Quantum divide and conquer",
        "url": "https://arxiv.org/abs/2210.06419"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1.0
        ]
      ],
      "quantum": "$O(n^{2/3}\\log^{k-1}n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "string length n; fixed k",
      "model": "character queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><msup><mi>log</mi><mrow><mi>k</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msup><mi>n</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>log</mi><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>k</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "sequence length n; fixed k",
    "parameterHtml": "sequence length n; fixed k",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
    "papers": [
      {
        "title": "On the quantum time complexity of divide and conquer",
        "url": "https://arxiv.org/abs/2311.16401"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$O(\\sqrt n\\log^{k+1}n(\\log\\log n)^{k-1})$",
      "classical": "$O(n)$",
      "parameter": "sequence length n; fixed k",
      "model": "random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "string length n",
    "parameterHtml": "string length n",
    "model": "random-access time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1.0,
    "papers": [
      {
        "title": "On the quantum time complexity of divide and conquer",
        "url": "https://arxiv.org/abs/2311.16401"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(n^{2/3})$",
      "classical": "$O(n)$",
      "parameter": "string length n",
      "model": "random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "matrix side length n; word-sized entries",
    "parameterHtml": "matrix side length n; word-sized entries",
    "model": "random-access time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.0,
    "costC": 2.13333333,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.0,
          2.13333333
        ]
      ],
      "quantum": "$O(n^2\\log n)$",
      "classical": "$n^3/2^{\\Omega(\\sqrt{\\log n})}$",
      "parameter": "matrix side length n; word-sized entries",
      "model": "random-access time",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "point count n; fixed dimension d",
    "parameterHtml": "point count n; fixed dimension d",
    "model": "randomized word-RAM with coordinate access",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1.0,
    "papers": [
      {
        "title": "On the Quantum Complexity of Closest Pair and Related Problems",
        "url": "https://arxiv.org/abs/1911.01973"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(n^{2/3})$",
      "classical": "$O(n)$",
      "parameter": "point count n; fixed dimension d",
      "model": "randomized word-RAM with coordinate access",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n points; fixed dimension and approximation factor",
    "parameterHtml": "n points; fixed dimension and approximation factor",
    "model": "Random-access geometric computation time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1,
    "papers": [
      {
        "title": "On the Quantum Complexity of Closest Pair and Related Problems",
        "url": "https://arxiv.org/abs/1911.01973"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1
        ]
      ],
      "quantum": "$\\widetilde O(n^{2/3})$",
      "classical": "$\\widetilde O(n)$",
      "parameter": "n points; fixed dimension and approximation factor",
      "model": "Random-access geometric computation time",
      "note": "Principal approximate bichromatic closest-pair comparison from the entry."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "vertex count n",
    "parameterHtml": "vertex count n",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2.0,
    "papers": [
      {
        "title": "Quantum query complexity of minor-closed graph properties",
        "url": "https://arxiv.org/abs/1011.1443"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2.0
        ]
      ],
      "quantum": "$\\Theta(n^{3/2})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "vertex count n",
      "model": "adjacency-matrix queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "vertex count n",
    "parameterHtml": "vertex count n",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2.0,
    "papers": [
      {
        "title": "Time and Space Efficient Quantum Algorithms for Detecting Cycles and Testing Bipartiteness",
        "url": "https://arxiv.org/abs/1610.00581"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2.0
        ]
      ],
      "quantum": "$\\widetilde O(n^{3/2})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "vertex count n",
      "model": "adjacency-matrix queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>35</mn><mo>&#x0002F;</mo><mn>27</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n host vertices; triangle pattern H=K_3",
    "parameterHtml": "n host vertices; triangle pattern H=K_3",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.2962963,
    "costC": 2,
    "papers": [
      {
        "title": "A learning graph based quantum query algorithm for finding constant-size subgraphs",
        "url": "https://arxiv.org/abs/1109.5135"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.2962963,
          2
        ]
      ],
      "quantum": "$O(n^{35/27})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n host vertices; triangle pattern H=K_3",
      "model": "adjacency-matrix queries",
      "note": "Triangle specialization of the stated learning-graph theorem: k=3,m=3,d=2,t=1/27."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mrow><mn>5</mn><mo>&#x0002F;</mo><mn>7</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "m edges; triangles (k=3), bounded maximum degree",
    "parameterHtml": "m edges; triangles (k=3), bounded maximum degree",
    "model": "edge-list queries under the stated degree promise",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.71428571,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Algorithms on Edge Lists: Hiding, Shuffling, and Cycle Finding",
        "url": "https://arxiv.org/abs/2412.17786"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.71428571,
          1
        ]
      ],
      "quantum": "$O(m^{5/7})$",
      "classical": "$\\Theta(m)$",
      "parameter": "m edges; triangles (k=3), bounded maximum degree",
      "model": "edge-list queries under the stated degree promise",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n vertices; bounded diameter D",
    "parameterHtml": "n vertices; bounded diameter D",
    "model": "CONGEST communication rounds",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Sublinear-Time Quantum Computation of the Diameter in CONGEST Networks",
        "url": "https://arxiv.org/abs/1804.02917"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\widetilde\\Theta(n)$",
      "parameter": "n vertices; bounded diameter D",
      "model": "CONGEST communication rounds",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n-by-n matrices; constant output sparsity ell",
    "parameterHtml": "n-by-n matrices; constant output sparsity ell",
    "model": "Input-entry queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 2,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n)$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n-by-n matrices; constant output sparsity ell",
      "model": "Input-entry queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n vertices; dense graphs m=Theta(n^2); constant sampling error",
    "parameterHtml": "n vertices; dense graphs m=Theta(n^2); constant sampling error",
    "model": "weighted adjacency-list queries and coherent-RAM time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.5,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum Speedup for Sampling Random Spanning Trees",
        "url": "https://arxiv.org/abs/2504.15603"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.5,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^{3/2})$",
      "classical": "$\\widetilde O(n^2)$",
      "parameter": "n vertices; dense graphs m=Theta(n^2); constant sampling error",
      "model": "weighted adjacency-list queries and coherent-RAM time",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "vertex count n; fixed degree and distance",
    "parameterHtml": "vertex count n; fixed degree and distance",
    "model": "neighbor queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.33333333,
    "costC": 0.5,
    "papers": [
      {
        "title": "(Quantum) complexity of testing signed graph clusterability",
        "url": "https://arxiv.org/abs/2311.10480"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.33333333,
          0.5
        ]
      ],
      "quantum": "$\\widetilde O(n^{1/3})$",
      "classical": "$\\widetilde\\Theta(\\sqrt n)$",
      "parameter": "vertex count n; fixed degree and distance",
      "model": "neighbor queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>7</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n vertices; fixed source-pattern parameter k=3",
    "parameterHtml": "n vertices; fixed source-pattern parameter k=3",
    "model": "outgoing-neighbor queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.42857143,
    "costC": 0.66666667,
    "papers": [
      {
        "title": "Quantum property testing in sparse directed graphs",
        "url": "https://arxiv.org/abs/2410.05001"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.42857143,
          0.66666667
        ]
      ],
      "quantum": "$O(n^{3/7})$",
      "classical": "$O(n^{2/3})$",
      "parameter": "n vertices; fixed source-pattern parameter k=3",
      "model": "outgoing-neighbor queries",
      "note": "A nontrivial fixed-pattern comparison; the best limiting exponent over unbounded constant k is not an attained case."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n vertices; one-edge directed path (k=1)",
    "parameterHtml": "n vertices; one-edge directed path (k=1)",
    "model": "adjacency-matrix queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 2,
    "papers": [
      {
        "title": "Quantum algorithms for path and cycle containment problems",
        "url": "https://arxiv.org/abs/2605.09017"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n vertices; one-edge directed path (k=1)",
      "model": "adjacency-matrix queries",
      "note": "The largest polynomial saving in the admitted path family is attained by its one-edge case."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "m edges; sparse graph with n=Theta(m) vertices",
    "parameterHtml": "m edges; sparse graph with n=Theta(m) vertices",
    "model": "Induced-subgraph edge-existence queries",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.75,
          1
        ]
      ],
      "quantum": "$\\widetilde O(m^{3/4})$",
      "classical": "$\\widetilde O(m)$",
      "parameter": "m edges; sparse graph with n=Theta(m) vertices",
      "model": "Induced-subgraph edge-existence queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "n vertices; constant maximum degree and m=Theta(n)",
    "parameterHtml": "n vertices; constant maximum degree and m=Theta(n)",
    "model": "Induced-edge-parity queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.18,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum algorithms for learning a hidden graph and beyond",
        "url": "https://arxiv.org/abs/2011.08611"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.18,
          1
        ]
      ],
      "quantum": "$O(\\log n)$",
      "classical": "$\\Omega(n\\log n)$",
      "parameter": "n vertices; constant maximum degree and m=Theta(n)",
      "model": "Induced-edge-parity queries",
      "note": "A bounded-degree graph family supplies both the quantum upper bound and its matched classical information lower bound."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "A quadratic speedup for <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mo>&#x02265;</mo><mn>3</mn></mrow></math></span>, and factor <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msqrt><mrow><mi>N</mi><mo>&#x0002F;</mo><mi>log</mi><mi>N</mi></mrow></msqrt></mrow></math></span> in two dimensions.",
    "gainText": "A quadratic speedup for $d\\geq3$, and factor $\\sqrt{N/\\log N}$ in two dimensions.",
    "parameter": "N lattice vertices; fixed dimension d>=3",
    "parameterHtml": "N lattice vertices; fixed dimension d&gt;=3",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$O(\\sqrt N)$",
      "classical": "$\\Theta(N)$",
      "parameter": "N lattice vertices; fixed dimension d>=3",
      "model": "Local movement and oracle steps",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>c</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in the input bit length, through Fourier sampling.",
    "gainText": "Subexponential to polynomial in the input bit length, through Fourier sampling.",
    "parameter": "n=ceil(log₂ N): integer bit length",
    "parameterHtml": "n=ceil(log₂ N): integer bit length",
    "model": "Quantum gates / heuristic classical bit operations",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2,
    "costC": 2.63333333,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2,
          2.63333333
        ]
      ],
      "quantum": "$\\widetilde O(n^2)$",
      "classical": "$\\exp((c+o(1))n^{1/3}(\\log n)^{2/3})$",
      "parameter": "n=ceil(log₂ N): integer bit length",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "The classical L_N[1/3,c] exponent is plotted at power 1/3; its (log n)^(2/3) factor remains in the displayed formula."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>c</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial for large prime fields; quasi-polynomial to polynomial in the stated small-characteristic families. The quantum mechanism is abelian Fourier sampling.",
    "gainText": "Subexponential to polynomial for large prime fields; quasi-polynomial to polynomial in the stated small-characteristic families. The quantum mechanism is abelian Fourier sampling.",
    "parameter": "n=ceil(log₂ q): field-size bit length; general large prime fields",
    "parameterHtml": "n=ceil(log₂ q): field-size bit length; general large prime fields",
    "model": "Quantum gates / heuristic classical bit operations",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.13333333,
    "costC": 2.63333333,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.13333333,
          2.63333333
        ]
      ],
      "quantum": "$O(n^3)$",
      "classical": "$\\exp((c+o(1))n^{1/3}(\\log n)^{2/3})$",
      "parameter": "n=ceil(log₂ q): field-size bit length; general large prime fields",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "The classical L_q[1/3,c] regime uses the same bit-length variable."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>3</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> logical qubits, Shor&#x27;s discrete-logarithm algorithm.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> expected time, the Akshima et al. index-calculus algorithm.",
    "gain": "Subexponential to polynomial for explicit prime-field curves, through Fourier sampling. The generic-group comparison is exponential to polynomial.",
    "gainText": "Subexponential to polynomial for explicit prime-field curves, through Fourier sampling. The generic-group comparison is exponential to polynomial.",
    "parameter": "n: group-order bit length",
    "parameterHtml": "n: group-order bit length",
    "model": "Quantum gates / expected classical operations",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.13333333,
    "costC": 2.89,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.13333333,
          2.89
        ]
      ],
      "quantum": "$\\widetilde O(n^3)$ gates and $O(n)$ logical qubits, Shor's discrete-logarithm algorithm.",
      "classical": "$2^{O(n/(\\log n)^{1/4})}$ expected time, the Akshima et al. index-calculus algorithm.",
      "parameter": "n: group-order bit length",
      "model": "Quantum gates / expected classical operations",
      "note": "The classical bound is near-linear subexponential in n; the exact logarithmic correction remains in the formula."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>R</mi></mrow></math></span> relative to generic order-search algorithms. Fourier sampling extracts global periodic information from the group operation.",
    "gainText": "Exponential to polynomial in $\\log R$ relative to generic order-search algorithms. Fourier sampling extracts global periodic information from the group operation.",
    "parameter": "n=log₂R: bit length of the order bound",
    "parameterHtml": "n=log₂R: bit length of the order bound",
    "model": "Black-box group operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n=log₂R: bit length of the order bound",
      "model": "Black-box group operations",
      "note": "The unspecified quantum polynomial degree uses the polynomial-class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>d</mi></mrow></math></span>, through Fourier sampling of a periodic function over the reals.",
    "gainText": "Subexponential to polynomial in $\\log d$, through Fourier sampling of a periodic function over the reals.",
    "parameter": "n: discriminant bit length; polynomial output precision",
    "parameterHtml": "n: discriminant bit length; polynomial output precision",
    "model": "Quantum gates / heuristic classical bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.7,
    "papers": [
      {
        "title": "Polynomial-Time Quantum Algorithms for Pell's Equation and the Principal Ideal Problem",
        "url": "https://www.cse.psu.edu/~sjh26/pell.pdf"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.7
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\exp(O(\\sqrt{n\\log n}))$",
      "parameter": "n: discriminant bit length; polynomial output precision",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "The unspecified polynomial degree uses the polynomial-class position; the classical leading exponent power is one half."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in the matched quadratic-field regime. Quantum Fourier methods supply the hidden-lattice information needed for the generator.",
    "gainText": "Subexponential to polynomial in the matched quadratic-field regime. Quantum Fourier methods supply the hidden-lattice information needed for the generator.",
    "parameter": "n: discriminant bit length; quadratic fields",
    "parameterHtml": "n: discriminant bit length; quadratic fields",
    "model": "Quantum gates / heuristic classical bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.7,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.7
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\exp(O(\\sqrt{n\\log n}))$",
      "parameter": "n: discriminant bit length; quadratic fields",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in the quadratic-field regime, through hidden-lattice Fourier methods.",
    "gainText": "Subexponential to polynomial in the quadratic-field regime, through hidden-lattice Fourier methods.",
    "parameter": "n: discriminant bit length; imaginary quadratic fields; GRH for the quantum bound",
    "parameterHtml": "n: discriminant bit length; imaginary quadratic fields; GRH for the quantum bound",
    "model": "Quantum gates / heuristic classical bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.7,
    "papers": [
      {
        "title": "Efficient Quantum Algorithms for Computing Class Groups and Solving the Principal Ideal Problem in Arbitrary Degree Number Fields",
        "url": "https://fangsong.info/files/pubs/BS_SODA16.pdf"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.7
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\exp(O(\\sqrt{n\\log n}))$",
      "parameter": "n: discriminant bit length; imaginary quadratic fields; GRH for the quantum bound",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>N</mi></mrow></math></span> for generic actions with <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mi>t</mi></msup><msup><mi>p</mi><mi>k</mi></msup><mi>G</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007B;</mo><mn>0</mn><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span> and fixed <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>p</mi><mo>&#x0002C;</mo><mi>t</mi><mo>&#x0002C;</mo><mi>k</mi></mrow></math></span>. General abelian hidden shifts give exponential-to-subexponential improvement, with power saving in the exponent. These comparisons use the action-oracle model; explicit isogeny costs include arithmetic evaluation.",
    "gainText": "Exponential to polynomial in $\\log N$ for generic actions with $2^tp^kG=\\{0\\}$ and fixed $p,t,k$. General abelian hidden shifts give exponential-to-subexponential improvement, with power saving in the exponent. These comparisons use the action-oracle model; explicit isogeny costs include arithmetic evaluation.",
    "parameter": "n=log₂|G|; generic actions with 2ᵗpᵏG=0 and fixed p,t,k",
    "parameterHtml": "n=log₂|G|; generic actions with 2ᵗpᵏG=0 and fixed p,t,k",
    "model": "Group-action oracle operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n=log₂|G|; generic actions with 2ᵗpᵏG={0} and fixed p,t,k",
      "model": "Group-action oracle operations",
      "note": "This is the strongest action-oracle regime identified in the manuscript, not the generic hidden-shift case."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>p</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> time, Biasse–Jao–Sankar supersingular isogeny search.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>p</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> time and memory, Wesolowski supersingular isogeny algorithm.",
    "gain": "Polynomial speedup through a smaller exponential constant in the input bit length <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>p</mi></mrow></math></span>, from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></math></span>. Amplitude amplification is an essential quantum component.",
    "gainText": "Polynomial speedup through a smaller exponential constant in the input bit length $\\log p$, from $1/3$ to $1/4$. Amplitude amplification is an essential quantum component.",
    "parameter": "p: underlying field cardinality",
    "parameterHtml": "p: underlying field cardinality",
    "model": "Quantum / classical isogeny arithmetic time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.25,
    "costC": 0.33333333,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.25,
          0.33333333
        ]
      ],
      "quantum": "$p^{1/4+o(1)}$ time, Biasse--Jao--Sankar supersingular isogeny search.",
      "classical": "$p^{1/3+o(1)}$ time and memory, Wesolowski supersingular isogeny algorithm.",
      "parameter": "p: underlying field cardinality",
      "model": "Quantum / classical isogeny arithmetic time",
      "note": "Both bounds use field cardinality p, with o(1) in the powers retained."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n=⌈log₂p⌉: field-size bit length; SIDH key recovery",
    "parameterHtml": "n=⌈log₂p⌉: field-size bit length; SIDH key recovery",
    "model": "Quantum isogeny-query bound / classical key-recovery time",
    "evidence": 0,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.06666667,
    "costC": 2.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.06666667,
          2.4
        ]
      ],
      "quantum": "$\\widetilde O(2^{n/6})$",
      "classical": "$\\operatorname{poly}(n)$",
      "parameter": "n=⌈log₂p⌉: field-size bit length; SIDH key recovery",
      "model": "Quantum isogeny-query bound / classical key-recovery time",
      "note": "The classical attack is polylogarithmic in p and faster than the historical quantum bound."
    }
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
    "gain": "Polynomial speedups through smaller exponential constants in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>. Enumeration gives a quadratic improvement in tree size through quantum backtracking; quantum walks and amplification accelerate sieve subroutines.",
    "gainText": "Polynomial speedups through smaller exponential constants in $n$. Enumeration gives a quadratic improvement in tree size through quantum backtracking; quantum walks and amplification accelerate sieve subroutines.",
    "parameter": "n: lattice dimension; worst-case time guarantees",
    "parameterHtml": "n: lattice dimension; worst-case time guarantees",
    "model": "Quantum / classical lattice algorithm time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.147,
    "costC": 3.309,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.147,
          3.309
        ]
      ],
      "quantum": "$2^{0.247n+o(n)}$",
      "classical": "$2^{0.409n+o(n)}$",
      "parameter": "n: lattice dimension; worst-case time guarantees",
      "model": "Quantum / classical lattice algorithm time",
      "note": "The principal rigorous comparison uses the matched rigorous classical theorem."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.1235</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> time, Ducas reduction with the Hhan–Kim–Kim–Laarhoven SVP subroutine.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2045</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> time, the same reduction with classical superlattice SVP.",
    "gain": "Polynomial speedup through a smaller exponential constant in the lattice rank. The quantitative comparison follows from the matched classical and quantum shortest-vector algorithms.",
    "gainText": "Polynomial speedup through a smaller exponential constant in the lattice rank. The quantitative comparison follows from the matched classical and quantum shortest-vector algorithms.",
    "parameter": "n: lattice dimension",
    "parameterHtml": "n: lattice dimension",
    "model": "Quantum / classical running time",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.0235,
          3.1045
        ]
      ],
      "quantum": "$2^{0.1235n+o(n)}$ time, Ducas reduction with the Hhan--Kim--Kim--Laarhoven SVP subroutine.",
      "classical": "$2^{0.2045n+o(n)}$ time, the same reduction with classical superlattice SVP.",
      "parameter": "n: lattice dimension",
      "model": "Quantum / classical running time",
      "note": "Matched reduction and rigorous SVP subroutine."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Subexponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, through Fourier interference in the quantum examples. The availability of coherent examples is part of the input model.",
    "gainText": "Subexponential to polynomial in $n$, through Fourier interference in the quantum examples. The availability of coherent examples is part of the input model.",
    "parameter": "n: secret length; constant noise and bounded failure probability",
    "parameterHtml": "n: secret length; constant noise and bounded failure probability",
    "model": "Quantum processing time / classical LPN processing time",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 1,
    "costC": 2.89,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          2.89
        ]
      ],
      "quantum": "$O(n\\log n)$",
      "classical": "$2^{O(n/\\log n)}$",
      "parameter": "n: secret length; constant noise and bounded failure probability",
      "model": "Quantum processing time / classical LPN processing time",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>T</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>T</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic acceleration in enumeration-tree size. The total-runtime comparison with the best classical solver depends on <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>T</mi></mrow></math></span>, basis quality and the target-distance promise.",
    "gainText": "Quadratic acceleration in enumeration-tree size. The total-runtime comparison with the best classical solver depends on $T$, basis quality and the target-distance promise.",
    "parameter": "T: enumeration-tree size; n=O(log T); T≤2ⁿ; unrestricted-distance CVP",
    "parameterHtml": "T: enumeration-tree size; n=O(log T); T≤2ⁿ; unrestricted-distance CVP",
    "model": "Quantum / classical lattice running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt T)$",
      "classical": "$O(T)$",
      "parameter": "T: enumeration-tree size; n=O(log T); T≤2ⁿ; unrestricted-distance CVP",
      "model": "Quantum / classical lattice running time",
      "note": "Use the enumeration regime where the tree is at most the general classical exact bound; dimension overhead is polylogarithmic in T."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: lattice dimension; q: period; the same decoding-radius promise",
    "parameterHtml": "n: lattice dimension; q: period; the same decoding-radius promise",
    "model": "Quantum gates / classical running time",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,\\log q)$",
      "classical": "$\\operatorname{poly}(n,\\log q)$",
      "parameter": "n: lattice dimension; q: period; the same decoding-radius promise",
      "model": "Quantum gates / classical running time",
      "note": "Both unspecified polynomial degrees use the polynomial-class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2563</mn><mi>&#x003B2;</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B2;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> per heuristic SVP call, quantum sieving in lattice-reduction attacks.",
    "C": "The minimum of optimized primal, dual, hybrid, BKW and applicable bounded-error algorithms; heuristic sieving costs <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2925</mn><mi>&#x003B2;</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B2;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> per SVP call.",
    "gain": "Polynomial speedup through a smaller exponential constant for the matched lattice-reduction subroutines. In the bounded-error regimes, the subexponential classical algorithms enter the minimum for the complete attack.",
    "gainText": "Polynomial speedup through a smaller exponential constant for the matched lattice-reduction subroutines. In the bounded-error regimes, the subexponential classical algorithms enter the minimum for the complete attack.",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$2^{0.2563\\beta+o(\\beta)}$ per heuristic SVP call, quantum sieving in lattice-reduction attacks.",
      "classical": "The minimum of optimized primal, dual, hybrid, BKW and applicable bounded-error algorithms; heuristic sieving costs $2^{0.2925\\beta+o(\\beta)}$ per SVP call.",
      "parameter": "",
      "model": "",
      "note": "The quantum headline gives a block-SVP subroutine cost; the classical headline minimizes several complete attacks. A comparable optimized total attack cost requires modulus, noise, sample/secret distributions and attack parameters not supplied by one formula in this entry."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "Polynomial modulus q; wide matrices m≥Cn³",
    "parameterHtml": "Polynomial modulus q; wide matrices m≥Cn³",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,m,q)$",
      "classical": "$\\operatorname{poly}(m,\\log q)$",
      "parameter": "Polynomial modulus q; wide matrices m≥Cn³",
      "model": "Quantum gates / classical bit operations",
      "note": "Both matched algorithms are polynomial in this principal wide-matrix regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.05869</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> quantum-walk ISD",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> optimized BJMM / May–Ozerov information-set decoding",
    "gain": "Polynomial speedup for dense random codes: quadratic acceleration of Prange and further reductions in the exponential constant from quantum walks. Sparse parity checks have the stated subexponential classical comparator.",
    "gainText": "Polynomial speedup for dense random codes: quadratic acceleration of Prange and further reductions in the exponential constant from quantum walks. Sparse parity checks have the stated subexponential classical comparator.",
    "parameter": "n: dense random-code length; Gilbert–Varshamov weight",
    "parameterHtml": "n: dense random-code length; Gilbert–Varshamov weight",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.9,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.9,
          3.9
        ]
      ],
      "quantum": "$2^{0.05869n+o(n)}$ quantum-walk ISD",
      "classical": "$2^{O(n)}$ optimized BJMM / May–Ozerov information-set decoding",
      "parameter": "n: dense random-code length; Gilbert–Varshamov weight",
      "model": "Quantum gates / classical bit operations",
      "note": "The stated quantum exponent is the worst over rates in the Kachigar–Tillich comparison. The matched optimized classical rate is not specified numerically, so both markers use the exponential-class position."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">I</mi><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">D</mi></mrow></msub><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial speedup from quadratic acceleration of exhaustive weight search or a specified ISD success probability, giving a smaller exponential constant in the dense-code comparison.",
    "gainText": "Polynomial speedup from quadratic acceleration of exhaustive weight search or a specified ISD success probability, giving a smaller exponential constant in the dense-code comparison.",
    "parameter": "k: code dimension; dense generators; exact minimum distance",
    "parameterHtml": "k: code dimension; dense generators; exact minimum distance",
    "model": "Quantum weight evaluations / classical weight evaluations or bit operations",
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.9,
          3.9
        ]
      ],
      "quantum": "$O(2^{k/2})$",
      "classical": "$\\min\\{O(2^k),T_{\\rm ISD}\\}$",
      "parameter": "k: code dimension; dense generators; exact minimum distance",
      "model": "Quantum weight evaluations / classical weight evaluations or bit operations",
      "note": "The quantum exhaustive bound is explicit, but optimized classical ISD has an unspecified rate in the source. Both markers therefore use the exponential-class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.2156</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.283</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>. Both amplitude amplification and quantum walks contribute to the algorithms.",
    "gainText": "Polynomial speedup through a smaller exponential constant in $n$. Both amplitude amplification and quantum walks contribute to the algorithms.",
    "parameter": "n: random subset-sum items; cryptographic density; quantum update heuristic",
    "parameterHtml": "n: random subset-sum items; cryptographic density; quantum update heuristic",
    "model": "Heuristic quantum / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.1156,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.1156,
          3.183
        ]
      ],
      "quantum": "$\\widetilde O(2^{0.2156n})$",
      "classical": "$\\widetilde O(2^{0.283n})$",
      "parameter": "n: random subset-sum items; cryptographic density; quantum update heuristic",
      "model": "Heuristic quantum / classical running time",
      "note": "Strongest reported quantum rate under the stated additional update heuristic."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>0.462</mn><mo>&#x0002B;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.6943</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant for the dense promised regime, using amplitude amplification and algebraic preprocessing. Sparse explicit systems have subexponential classical bounds.",
    "gainText": "Polynomial speedup through a smaller exponential constant for the dense promised regime, using amplitude amplification and algebraic preprocessing. Sparse explicit systems have subexponential classical bounds.",
    "parameter": "n: variables; dense m=n, 0.17-strong semiregular systems; fixed arbitrarily small ε>0",
    "parameterHtml": "n: variables; dense m=n, 0.17-strong semiregular systems; fixed arbitrarily small ε&gt;0",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.362,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.362,
          3.5943
        ]
      ],
      "quantum": "$O(2^{(0.462+\\varepsilon)n})$",
      "classical": "$O(2^{0.6943n})$",
      "parameter": "n: variables; dense m=n, 0.17-strong semiregular systems; fixed arbitrarily small ε>0",
      "model": "Quantum gates / classical bit operations",
      "note": "The limiting quantum exponent is plotted; the arbitrarily small positive slack remains in the displayed bound."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup of degree <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> relative to the classical birthday query count. The BHT construction combines a stored table with Grover search. In output length <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, the exponent changes from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span> without power saving.",
    "gainText": "Polynomial speedup of degree $3/2$ relative to the classical birthday query count. The BHT construction combines a stored table with Grover search. In output length $n$, the exponent changes from $1/2$ to $1/3$ without power saving.",
    "parameter": "n: hash-output bits; optimized quantum table size 2ⁿᐟ³",
    "parameterHtml": "n: hash-output bits; optimized quantum table size 2ⁿᐟ³",
    "model": "Hash-oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.23333333,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.23333333,
          3.4
        ]
      ],
      "quantum": "$O(2^{n/3})$",
      "classical": "$\\Theta(2^{n/2})$",
      "parameter": "n: hash-output bits; optimized quantum table size 2ⁿᐟ³",
      "model": "Hash-oracle queries",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "A polynomial speedup of degree <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> in the balanced query comparison and a quadratic search improvement in the highly unbalanced regime. Double encryption improves the exponential constant from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>k</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span> through the balanced claw-finding reduction.",
    "gainText": "A polynomial speedup of degree $3/2$ in the balanced query comparison and a quadratic search improvement in the highly unbalanced regime. Double encryption improves the exponential constant from $k$ to $2k/3$ through the balanced claw-finding reduction.",
    "parameter": "N: each list size; balanced claw finding",
    "parameterHtml": "N: each list size; balanced claw finding",
    "model": "Function-evaluation queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.66666667,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1
        ]
      ],
      "quantum": "$O(N^{2/3})$",
      "classical": "$\\Theta(N)$",
      "parameter": "N: each list size; balanced claw finding",
      "model": "Function-evaluation queries",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>7</mn><mi>n</mi><mo>&#x0002F;</mo><mn>24</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedups through smaller exponential constants in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> for fixed <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span>. Amplitude amplification and quantum walks both appear in the merging constructions.",
    "gainText": "Polynomial speedups through smaller exponential constants in $n$ for fixed $k$. Amplitude amplification and quantum walks both appear in the merging constructions.",
    "parameter": "n: XOR width; four prescribed lists of size 2ⁿᐟ⁴; one solution",
    "parameterHtml": "n: XOR width; four prescribed lists of size 2ⁿᐟ⁴; one solution",
    "model": "Quantum / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.19166667,
    "costC": 3.4,
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.19166667,
          3.4
        ]
      ],
      "quantum": "$\\widetilde O(2^{7n/24})$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n: XOR width; four prescribed lists of size 2ⁿᐟ⁴; one solution",
      "model": "Quantum / classical running time",
      "note": "The established prescribed-list comparison gives the strongest displayed relative exponent improvement among the concrete regimes."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, from Simon period finding. This uses the XOR period created by the Even–Mansour construction and its coherent chosen-plaintext access.",
    "gainText": "Exponential to polynomial in $n$, from Simon period finding. This uses the XOR period created by the Even–Mansour construction and its coherent chosen-plaintext access.",
    "parameter": "n: block bits; generic Q2 access; classical total work optimized over data",
    "parameterHtml": "n: block bits; generic Q2 access; classical total work optimized over data",
    "model": "Coherent quantum queries / total classical query and permutation work",
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          3.4
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$\\widetilde\\Theta(2^{n/2})$",
      "parameter": "n: block bits; generic Q2 access; classical total work optimized over data",
      "model": "Coherent quantum queries / total classical query and permutation work",
      "note": "Principal comparison in the stated regime."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic improvement of offline work at fixed data volume in the generic Q1 model, combining Grover search with offline Simon tests. Optimizing total time over <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>D</mi></mrow></math></span> gives <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> quantum versus <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> classical work, a polynomial speedup of degree <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span>.",
    "gainText": "Quadratic improvement of offline work at fixed data volume in the generic Q1 model, combining Grover search with offline Simon tests. Optimizing total time over $D$ gives $\\widetilde O(2^{n/3})$ quantum versus $\\widetilde O(2^{n/2})$ classical work, a polynomial speedup of degree $3/2$.",
    "parameter": "n: block bits; generic Q1 access; total work optimized over data",
    "parameterHtml": "n: block bits; generic Q1 access; total work optimized over data",
    "model": "Offline quantum / classical work with the same classical data",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.23333333,
    "costC": 3.4,
    "papers": [
      {
        "title": "Quantum Attacks Without Superposition Queries: The Offline Simon's Algorithm",
        "url": "https://arxiv.org/pdf/2002.12439"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.23333333,
          3.4
        ]
      ],
      "quantum": "$\\widetilde O(2^{n/3})$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n: block bits; generic Q1 access; total work optimized over data",
      "model": "Offline quantum / classical work with the same classical data",
      "note": "Each total-work optimum includes data acquisition: quantum D=2^(n/3), classical D=2^(n/2)."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>p</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> differential tests and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x003B5;</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> coherent bias-estimation evaluations, amplitude amplification and estimation.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>p</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> differential trials, <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> bias-estimation samples and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>s</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> exhaustive subkey checks.",
    "gain": "Quadratic improvements in the specified sampling and search components, from amplitude amplification or estimation. The exponent of a complete attack depends on the selected characteristic and key-recovery strategy.",
    "gainText": "Quadratic improvements in the specified sampling and search components, from amplitude amplification or estimation. The exponent of a complete attack depends on the selected characteristic and key-recovery strategy.",
    "parameter": "Size parameter1/p for differential trials, or1/ε² for bias estimation",
    "parameterHtml": "Size parameter1/p for differential trials, or1/ε² for bias estimation",
    "model": "Coherent tests / classical samples",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$O(p^{-1/2})$ differential tests and $O(|\\varepsilon|^{-1})$ coherent bias-estimation evaluations, amplitude amplification and estimation.",
      "classical": "$\\Theta(p^{-1})$ differential trials, $\\Theta(\\varepsilon^{-2})$ bias-estimation samples and $O(2^s)$ exhaustive subkey checks.",
      "parameter": "Size parameter1/p for differential trials, or1/ε² for bias estimation",
      "model": "Coherent tests / classical samples",
      "note": "Each comparison has the same square-root relation; the original p and ε formulas are retained."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Subexponential to polynomial in the strongest comparison. The quantum tradeoff reaches polynomial time throughout <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi><mo>&#x0003D;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, extending below the smallest reported classical polynomial-time vector-count threshold. The general bounds also describe intermediate improvements when both algorithms have superpolynomial time; their degree depends on the input density <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi></mrow></math></span>.",
    "gainText": "Subexponential to polynomial in the strongest comparison. The quantum tradeoff reaches polynomial time throughout $m=\\Omega(n^2)$, extending below the smallest reported classical polynomial-time vector-count threshold. The general bounds also describe intermediate improvements when both algorithms have superpolynomial time; their degree depends on the input density $m/n$.",
    "parameter": "m=cn² with fixed 0<c<c⋆≈0.1022; n: vector dimension",
    "parameterHtml": "m=cn² with fixed 0&lt;c&lt;c⋆≈0.1022; n: vector dimension",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.89,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.89
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$2^{O(n/\\log n)}$",
      "parameter": "m=cn² with fixed 0<c<c⋆≈0.1022; n: vector dimension",
      "model": "Quantum gates / classical bit operations",
      "note": "This is the strongest polynomial-quantum regime below the smallest reported classical polynomial-time vector-count threshold."
    }
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
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n: logarithm of the group cardinality; stated black-box family",
    "parameterHtml": "n: logarithm of the group cardinality; stated black-box family",
    "model": "generic group operations and polynomial-cost reversible implementations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$O(2^{n/2})$",
      "parameter": "n: logarithm of the group cardinality; stated black-box family",
      "model": "generic group operations and polynomial-cost reversible implementations",
      "note": "Unspecified polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n: logarithm of the group cardinality; stated black-box family",
    "parameterHtml": "n: logarithm of the group cardinality; stated black-box family",
    "model": "black-box group time",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "An Efficient Quantum Algorithm for some Instances of the Group Isomorphism Problem",
        "url": "https://arxiv.org/abs/1001.0608"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$2^{n+o(n)}$",
      "parameter": "n: logarithm of the group cardinality; stated black-box family",
      "model": "black-box group time",
      "note": "Unspecified polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>k</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "number k of generators",
    "parameterHtml": "number k of generators",
    "model": "group-operation queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.66666667,
    "costC": 1.0,
    "papers": [
      {
        "title": "Quantum Complexity of Testing Group Commutativity",
        "url": "https://arxiv.org/abs/quant-ph/0506265"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.66666667,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(k^{2/3})$",
      "classical": "$\\Theta(k)$",
      "parameter": "number k of generators",
      "model": "group-operation queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n: logarithm of the ring cardinality; stated black-box family",
    "parameterHtml": "n: logarithm of the ring cardinality; stated black-box family",
    "model": "generic ring operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n: logarithm of the ring cardinality; stated black-box family",
      "model": "generic ring operations",
      "note": "Unspecified polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n: logarithm of the ring cardinality; stated black-box family",
    "parameterHtml": "n: logarithm of the ring cardinality; stated black-box family",
    "model": "ring operations with coordinate construction",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
    "papers": [
      {
        "title": "Efficient quantum processing of ideals in finite rings",
        "url": "https://arxiv.org/abs/0908.0022"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n: logarithm of the ring cardinality; stated black-box family",
      "model": "ring operations with coordinate construction",
      "note": "Unspecified polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>k</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "k ideal generators; m=1 and alpha=1",
    "parameterHtml": "k ideal generators; m=1 and alpha=1",
    "model": "ring and evaluation queries",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum Query Complexity of Multilinear Identity Testing",
        "url": "https://arxiv.org/abs/0807.1412"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$O(\\sqrt k)$",
      "classical": "$O(k)$",
      "parameter": "k ideal generators; m=1 and alpha=1",
      "model": "ring and evaluation queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n: logarithm of the semigroup cardinality; stated black-box family",
    "parameterHtml": "n: logarithm of the semigroup cardinality; stated black-box family",
    "model": "generic semigroup operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
    "papers": [
      {
        "title": "Quantum computation of discrete logarithms in semigroups",
        "url": "https://arxiv.org/abs/1310.6238"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n: logarithm of the semigroup cardinality; stated black-box family",
      "model": "generic semigroup operations",
      "note": "Unspecified polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Semigroup cardinality N; two commuting generators (k=2)",
    "parameterHtml": "Semigroup cardinality N; two commuting generators (k=2)",
    "model": "semigroup queries",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.25,
    "costC": 1,
    "papers": [
      {
        "title": "Quantum computation of discrete logarithms in semigroups",
        "url": "https://arxiv.org/abs/1310.6238"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.25,
          1
        ]
      ],
      "quantum": "$\\widetilde O(N^{1/4})$",
      "classical": "$O(N)$",
      "parameter": "Semigroup cardinality N; two commuting generators (k=2)",
      "model": "semigroup queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n=log_2 |G|; full-size orbit r=Theta(|G|)",
    "parameterHtml": "n=log_2 |G|; full-size orbit r=Theta(|G|)",
    "model": "group-action operations in the covered platforms",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
    "papers": [
      {
        "title": "Efficient quantum algorithms for some instances of the semidirect discrete logarithm problem",
        "url": "https://arxiv.org/abs/2312.14028"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$O(2^{n/2})$",
      "parameter": "n=log_2 |G|; full-size orbit r=Theta(|G|)",
      "model": "group-action operations in the covered platforms",
      "note": "The generic group-action comparator is used in the largest-orbit regime; polynomial degree is unspecified."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Polynomial degree n; fixed finite field",
    "parameterHtml": "Polynomial degree n; fixed finite field",
    "model": "bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.33333333,
    "costC": 1.5,
    "papers": [
      {
        "title": "Toward an Optimal Quantum Algorithm for Polynomial Factorization over Finite Fields",
        "url": "https://arxiv.org/abs/1807.09675"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.33333333,
          1.5
        ]
      ],
      "quantum": "$n^{4/3+o(1)}$",
      "classical": "$n^{3/2+o(1)}$",
      "parameter": "Polynomial degree n; fixed finite field",
      "model": "bit operations",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02308;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mn>2</mn><mi>&#x02309;</mi></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Univariate polynomial degree d; field size is sufficiently large for the stated success bound",
    "parameterHtml": "Univariate polynomial degree d; field size is sufficiently large for the stated success bound",
    "model": "Polynomial-evaluation queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.0,
    "costC": 1.0,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\lceil(d+1)/2\\rceil$",
      "classical": "$d+1$",
      "parameter": "Univariate polynomial degree d; field size is sufficiently large for the stated success bound",
      "model": "Polynomial-evaluation queries",
      "note": "Both exact interpolation costs are linear in degree; the query gain is a constant factor."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Field bit length n=log_2 q",
    "parameterHtml": "Field bit length n=log_2 q",
    "model": "gate/time comparison with character evaluation",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum Algorithms for some Hidden Shift Problems",
        "url": "https://arxiv.org/abs/quant-ph/0211140"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^n)$",
      "parameter": "Field bit length n=log_2 q",
      "model": "gate/time comparison with character evaluation",
      "note": "Unspecified polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n hidden-shift bits; dual-oracle formulation",
    "parameterHtml": "n hidden-shift bits; dual-oracle formulation",
    "model": "function-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.05,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum algorithms for highly non-linear Boolean functions",
        "url": "https://arxiv.org/abs/0811.3208"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$O(1)$",
      "classical": "$2^{\\Theta(n)}$",
      "parameter": "n hidden-shift bits; dual-oracle formulation",
      "model": "function-oracle queries",
      "note": "The quantum model supplies the known bent function and its dual; classical exponential constants are unspecified."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Hidden-shift length n",
    "parameterHtml": "Hidden-shift length n",
    "model": "Oracle queries with known-function computation free",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.05,
    "costC": 1.0,
    "papers": [
      {
        "title": "Easy and hard functions for the Boolean hidden shift problem",
        "url": "https://arxiv.org/abs/1304.4642"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          1.0
        ]
      ],
      "quantum": "$2$",
      "classical": "$\\Theta(n)$",
      "parameter": "Hidden-shift length n",
      "model": "Oracle queries with known-function computation free",
      "note": "Two quantum oracle calls versus linear classical queries; computation over the known function is free on both sides."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "n=log_2 N; M>N^epsilon for fixed epsilon>0",
    "parameterHtml": "n=log_2 N; M&gt;N^epsilon for fixed epsilon&gt;0",
    "model": "hidden-shift queries and efficient quantum gates",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
    "papers": [
      {
        "title": "Quantum algorithm for a generalized hidden shift problem",
        "url": "https://arxiv.org/abs/quant-ph/0507190"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n=log_2 N; M>N^epsilon for fixed epsilon>0",
      "model": "hidden-shift queries and efficient quantum gates",
      "note": "Unspecified polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Group encoding length n=log_2 |G|; stated group family",
    "parameterHtml": "Group encoding length n=log_2 |G|; stated group family",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "From optimal measurement to efficient quantum algorithms for the hidden subgroup problem over semidirect product groups",
        "url": "https://arxiv.org/abs/quant-ph/0504083"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$2^{O(n)}$",
      "parameter": "Group encoding length n=log_2 |G|; stated group family",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "Polynomial degree and generic exponential constants are unspecified class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Group encoding length n=log_2 |G|; stated group family",
    "parameterHtml": "Group encoding length n=log_2 |G|; stated group family",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "An efficient quantum algorithm for the hidden subgroup problem in nil-2 groups",
        "url": "https://arxiv.org/abs/0707.1260"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$O(2^n)$",
      "parameter": "Group encoding length n=log_2 |G|; stated group family",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "Polynomial degree and generic exponential constants are unspecified class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Group encoding length n=log_2 |G|",
    "parameterHtml": "Group encoding length n=log_2 |G|",
    "model": "Coset-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1,
    "costC": 3.9,
    "papers": [
      {
        "title": "The Hidden Subgroup Problem and Quantum Computation Using Group Representations",
        "url": "https://www.cs.tau.ac.il/~amnon/Papers/HRT.siam02.pdf"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          3.9
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$2^{\\Theta(n)}$",
      "parameter": "Group encoding length n=log_2 |G|",
      "model": "Coset-oracle queries",
      "note": "Known classical positive-exponential lower and exponential upper bounds define the exponential class."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Field bit length b=log_2 q; fixed dimension and characteristic",
    "parameterHtml": "Field bit length b=log_2 q; fixed dimension and characteristic",
    "model": "The matched resource in the problem statement",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "Hidden Symmetry Subgroup Problems",
        "url": "https://arxiv.org/abs/1107.2189"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(b)$",
      "classical": "$2^{O(b)}$",
      "parameter": "Field bit length b=log_2 q; fixed dimension and characteristic",
      "model": "The matched resource in the problem statement",
      "note": "Principal growing-field family; unspecified polynomial degree and exponential constant use class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>b</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Field bit length b=log_2 q; fixed degree and variable count",
    "parameterHtml": "Field bit length b=log_2 q; fixed degree and variable count",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(b)$",
      "classical": "$\\Omega(2^{b/2})$",
      "parameter": "Field bit length b=log_2 q; fixed degree and variable count",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "Classical coordinate is the stated collision lower bound; quantum polynomial degree is unspecified."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>q</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>g</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>; exponential genus dependence",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Growing genus and large characteristic",
    "parameterHtml": "Growing genus and large characteristic",
    "model": "Bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum computation of zeta functions of curves",
        "url": "https://arxiv.org/abs/math/0411623"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(g,\\log q)$",
      "classical": "$(\\log q)^{O_g(1)}$; exponential genus dependence",
      "parameter": "Growing genus and large characteristic",
      "model": "Bit operations",
      "note": "Principal large-genus/large-characteristic comparison; the classical position denotes the stated exponential class, not a specified exponential coefficient."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>7</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Random-function range N; triple collisions (ell=3)",
    "parameterHtml": "Random-function range N; triple collisions (ell=3)",
    "model": "random-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.42857143,
    "costC": 0.66666667,
    "papers": [
      {
        "title": "Improved Quantum Multicollision-Finding Algorithm; On Finding Quantum Multi-collisions",
        "url": "https://arxiv.org/abs/1811.08097"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.42857143,
          0.66666667
        ]
      ],
      "quantum": "$\\Theta(N^{3/7})$",
      "classical": "$\\Theta(N^{2/3})$",
      "parameter": "Random-function range N; triple collisions (ell=3)",
      "model": "random-oracle queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "half-block length n",
    "parameterHtml": "half-block length n",
    "model": "chosen-plaintext oracle queries; coherent on the quantum side",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.0,
    "costC": 3.4,
    "papers": [
      {
        "title": "Using Simon's Algorithm to Attack Symmetric-Key Cryptographic Primitives",
        "url": "https://arxiv.org/abs/1603.07856"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.0,
          3.4
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$\\Theta(2^{n/2})$",
      "parameter": "half-block length n",
      "model": "chosen-plaintext oracle queries; coherent on the quantum side",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Block bit length n; fixed message length",
    "parameterHtml": "Block bit length n; fixed message length",
    "model": "chosen-message tag queries",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.4,
    "papers": [
      {
        "title": "Using Simon's Algorithm to Attack Symmetric-Key Cryptographic Primitives",
        "url": "https://arxiv.org/abs/1603.07856"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$O(2^{n/2})$",
      "parameter": "Block bit length n; fixed message length",
      "model": "chosen-message tag queries",
      "note": "Unspecified quantum polynomial degree uses the polynomial class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Field bit length b=log_2 q; fixed dimension d",
    "parameterHtml": "Field bit length b=log_2 q; fixed dimension d",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "Quantum algorithms for hidden nonlinear structures",
        "url": "https://arxiv.org/abs/0705.2784"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(b)$",
      "classical": "$2^{O(b)}$",
      "parameter": "Field bit length b=log_2 q; fixed dimension d",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "Principal growing-field family; unspecified polynomial/exponential constants use class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003BB;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries",
    "gain": "Subexponential-or-exponential classical oracle complexity to polynomial quantum queries and gates.",
    "gainText": "Subexponential-or-exponential classical oracle complexity to polynomial quantum queries and gates.",
    "parameter": "Security parameter lambda; n=Theta(lambda); fixed code-family constants",
    "parameterHtml": "Security parameter lambda; n=Theta(lambda); fixed code-family constants",
    "model": "Random-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2,
    "costC": 3.9,
    "papers": [
      {
        "title": "Verifiable Quantum Advantage without Structure",
        "url": "https://arxiv.org/abs/2204.02063v3"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2,
          3.9
        ]
      ],
      "quantum": "$O(\\lambda^2)$ queries",
      "classical": "$O(n2^n)$ queries",
      "parameter": "Security parameter lambda; n=Theta(lambda); fixed code-family constants",
      "model": "Random-oracle queries",
      "note": "The quantum query bound is n*lambda; the classical point uses random-codeword search, while the entry retains its subexponential classical-query lower bound."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003BB;</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>&#x003BB;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial quantum proving versus superpolynomial classical attacks under the selected cryptographic assumption.",
    "gainText": "Polynomial quantum proving versus superpolynomial classical attacks under the selected cryptographic assumption.",
    "parameter": "lambda-bit modulus; factoring-based protocol",
    "parameterHtml": "lambda-bit modulus; factoring-based protocol",
    "model": "Prover/attack running time at the protocol success target",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.63333333,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.63333333
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\lambda)$",
      "classical": "$\\exp(O(\\lambda^{1/3}(\\log\\lambda)^{2/3}))$",
      "parameter": "lambda-bit modulus; factoring-based protocol",
      "model": "Prover/attack running time at the protocol success target",
      "note": "Principal explicit cryptographic instantiation; unknown polynomial degree uses its class position."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential known classical preprocessing to polynomial quantum learning.",
    "gainText": "Subexponential known classical preprocessing to polynomial quantum learning.",
    "parameter": "Prime-field bit length n; fixed learning accuracy",
    "parameterHtml": "Prime-field bit length n; fixed learning accuracy",
    "model": "Learning time",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.63333333,
    "papers": [
      {
        "title": "A rigorous and robust quantum speed-up in supervised machine learning",
        "url": "https://arxiv.org/abs/2010.02174"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.63333333
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\exp(O(n^{1/3}(\\log n)^{2/3}))$",
      "parameter": "Prime-field bit length n; fixed learning accuracy",
      "model": "Learning time",
      "note": "Unspecified polynomial degree uses its class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries, quantum sampling and local descent.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries, randomized sampling and local descent.",
    "gain": "Polynomial speedup in the domain size <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi><mo>&#x0003D;</mo><msup><mn>2</mn><mi>n</mi></msup></mrow></math></span>, with a smaller exponential constant in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>. Minimum finding and amplitude amplification are algorithmic components.",
    "gainText": "Polynomial speedup in the domain size $N=2^n$, with a smaller exponential constant in $n$. Minimum finding and amplitude amplification are algorithmic components.",
    "parameter": "n: Boolean-hypercube dimension",
    "parameterHtml": "n: Boolean-hypercube dimension",
    "model": "Value-oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.23333333,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.23333333,
          3.4
        ]
      ],
      "quantum": "$\\Theta(2^{n/3}n^{1/6})$ queries, quantum sampling and local descent.",
      "classical": "$\\Theta(2^{n/2}n^{1/2})$ queries, randomized sampling and local descent.",
      "parameter": "n: Boolean-hypercube dimension",
      "model": "Value-oracle queries",
      "note": "The polynomial prefactors n^(1/6),n^(1/2) remain in the formulas. Equivalently, with N=2^n vertices, the powers are1/3 and1/2."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial query complexity in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span> for adjacency-list testing of <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi mathvariant=\"script\">P</mi><mi>k</mi></msub></mrow></math></span>. Full permutation symmetry and adjacency-matrix graph symmetry impose the stated polynomial limits.",
    "gainText": "Exponential to polynomial query complexity in $k$ for adjacency-list testing of $\\mathcal P_k$. Full permutation symmetry and adjacency-matrix graph symmetry impose the stated polynomial limits.",
    "parameter": "k: tree-depth parameter; fixed testing distance; adjacency-list family Pₖ",
    "parameterHtml": "k: tree-depth parameter; fixed testing distance; adjacency-list family Pₖ",
    "model": "Neighbor-oracle queries",
    "evidence": 1,
    "hardware": 2,
    "hardwareLabel": "Demanding coherent access",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(k)$",
      "classical": "$\\exp(\\Omega(k))$",
      "parameter": "k: tree-depth parameter; fixed testing distance; adjacency-list family Pₖ",
      "model": "Neighbor-oracle queries",
      "note": "The strongest algorithmic regime is adjacency-list graph-property testing; unknown degrees and rates use complexity-class positions."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "N=2^n: Boolean oracle domain size",
    "parameterHtml": "N=2^n: Boolean oracle domain size",
    "model": "Boolean-oracle queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 1,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          1
        ]
      ],
      "quantum": "$\\Theta(N)$",
      "classical": "$\\Theta(N)$",
      "parameter": "N=2^n: Boolean oracle domain size",
      "model": "Boolean-oracle queries",
      "note": "Parity and exact counting both have linear query complexity; the parity factor1/2 is not an asymptotic speedup."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: variables; fixed-width CNF with polynomially many clauses",
    "parameterHtml": "n: variables; fixed-width CNF with polynomially many clauses",
    "model": "Quantum / classical bit-operation time",
    "evidence": 0.75,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 2.89,
    "costC": 2.89,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.89,
          2.89
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,m)2^{O_k(n\\log\\log n/\\sqrt{\\log n})}$",
      "classical": "$\\operatorname{poly}(n,m)2^{O_k(n\\log\\log n/\\sqrt{\\log n})}$",
      "parameter": "n: variables; fixed-width CNF with polynomially many clauses",
      "model": "Quantum / classical bit-operation time",
      "note": "The same current subexponential classical solver can run on either model."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: qubits; initialized inverse-polynomial-gap path; inverse-polynomial sampling error",
    "parameterHtml": "n: qubits; initialized inverse-polynomial-gap path; inverse-polynomial sampling error",
    "model": "Quantum evolution/simulation time / classical sampling time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.4,
    "papers": [
      {
        "title": "Complexity of Stoquastic Frustration-Free Hamiltonians",
        "url": "https://arxiv.org/pdf/0806.1746"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\operatorname{poly}(n)$",
      "parameter": "n: qubits; initialized inverse-polynomial-gap path; inverse-polynomial sampling error",
      "model": "Quantum evolution/simulation time / classical sampling time",
      "note": "Both polynomial degrees are unspecified and use the polynomial-class position."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates, energy filtering and amplitude amplification at inverse-polynomial precision.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> arithmetic operations, randomized sparse-matrix Lanczos.",
    "gain": "Polynomial speedup through a smaller exponential constant for the generic noncommuting comparison. Guided-state preparation is polynomial when its overlap, gap and block encoding have polynomial costs.",
    "gainText": "Polynomial speedup through a smaller exponential constant for the generic noncommuting comparison. Guided-state preparation is polynomial when its overlap, gap and block encoding have polynomial costs.",
    "parameter": "n: qubits; inverse-polynomial energy precision",
    "parameterHtml": "n: qubits; inverse-polynomial energy precision",
    "model": "Quantum gates / classical arithmetic operations",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 3.4,
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          3.4,
          3.9
        ]
      ],
      "quantum": "$O^*(2^{n/2})$ gates, energy filtering and amplitude amplification at inverse-polynomial precision.",
      "classical": "$O^*(2^n)$ arithmetic operations, randomized sparse-matrix Lanczos.",
      "parameter": "n: qubits; inverse-polynomial energy precision",
      "model": "Quantum gates / classical arithmetic operations",
      "note": "Matched energy-optimization task at the entry’s precision promise."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> circuit samples or <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>K</mi><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> coherent oracle uses for <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>K</mi></mrow></math></span> objective evaluations, sampling or amplitude estimation.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> expected time per exact sample, Gheorghiu–Gupte counting-based simulation of linear-size circuits.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "",
    "parameterHtml": "",
    "model": "",
    "evidence": 0,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(K\\delta^{-2})$ circuit samples or $O(K\\delta^{-1})$ coherent oracle uses for $K$ objective evaluations, sampling or amplitude estimation.",
      "classical": "$2^{O(n/\\sqrt{\\log n})}\\operatorname{poly}(n)$ expected time per exact sample, Gheorghiu--Gupte counting-based simulation of linear-size circuits.",
      "parameter": "",
      "model": "",
      "note": "Both displayed costs concern objective evaluation or circuit sampling; the number K of evaluations needed for global optimization is unspecified, so they do not give a comparable total bound for the stated global-optimization problem."
    }
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
    "parameter": "N: unstructured search domain",
    "parameterHtml": "N: unstructured search domain",
    "model": "Normalized quantum evolution time / classical cost queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 0.5,
    "costC": 1,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\Theta(\\sqrt N)$",
      "classical": "$\\Theta(N)$",
      "parameter": "N: unstructured search domain",
      "model": "Normalized quantum evolution time / classical cost queries",
      "note": "The locally adiabatic search instance gives a matched comparison. General paths retain their separate gap-dependent cost."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
    "parameterHtml": "Size/width n; polynomial description length; generic high-width approximation regime",
    "model": "Gate/time complexity for the specified normalized additive approximation",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\min\\{\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Principal complete approximation regime, with polynomial accuracy overhead. The generic high-width circuit is polynomial-sized and its path encoding is at least quadratic; the displayed minimum preserves the recorded simulator alternatives."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
    "parameterHtml": "Size/width n; polynomial description length; generic high-width approximation regime",
    "model": "Gate/time complexity for the specified normalized additive approximation",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\min\\{\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Principal complete approximation regime, with polynomial accuracy overhead. The generic high-width circuit is polynomial-sized and its path encoding is at least quadratic; the displayed minimum preserves the recorded simulator alternatives."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
    "parameterHtml": "Size/width n; polynomial description length; generic high-width approximation regime",
    "model": "Gate/time complexity for the specified normalized additive approximation",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\min\\{\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Principal complete approximation regime, with polynomial accuracy overhead. The generic high-width circuit is polynomial-sized and its path encoding is at least quadratic; the displayed minimum preserves the recorded simulator alternatives."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
    "parameterHtml": "Size/width n; polynomial description length; generic high-width approximation regime",
    "model": "Gate/time complexity for the specified normalized additive approximation",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\min\\{\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Principal complete approximation regime, with polynomial accuracy overhead. The generic high-width circuit is polynomial-sized and its path encoding is at least quadratic; the displayed minimum preserves the recorded simulator alternatives."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
    "parameterHtml": "Size/width n; polynomial description length; generic high-width approximation regime",
    "model": "Gate/time complexity for the specified normalized additive approximation",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\min\\{\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Principal complete approximation regime, with polynomial accuracy overhead. The generic high-width circuit is polynomial-sized and its path encoding is at least quadratic; the displayed minimum preserves the recorded simulator alternatives."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "Encoded input size N; fluxon labels; fixed approximation accuracy",
    "parameterHtml": "Encoded input size N; fluxon labels; fixed approximation accuracy",
    "model": "Time for the same additive approximation",
    "evidence": 0,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 2.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          2.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(N)$",
      "classical": "$\\operatorname{poly}(N)$",
      "parameter": "Encoded input size N; fluxon labels; fixed approximation accuracy",
      "model": "Time for the same additive approximation",
      "note": "Both methods use the same polynomial class; no degree is invented."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
    "parameterHtml": "Size/width n; polynomial description length; generic high-width approximation regime",
    "model": "Gate/time complexity for the specified normalized additive approximation",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\min\\{\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Size/width n; polynomial description length; generic high-width approximation regime",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Principal complete approximation regime, with polynomial accuracy overhead. The generic high-width circuit is polynomial-sized and its path encoding is at least quadratic; the displayed minimum preserves the recorded simulator alternatives."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></math></span>",
    "gain": "Exponential to polynomial for exact worst-case decision; constant-error randomized testing has constant query complexity.",
    "gainText": "Exponential to polynomial for exact worst-case decision; constant-error randomized testing has constant query complexity.",
    "parameter": "Oracle address length n",
    "parameterHtml": "Oracle address length n",
    "model": "Exact Boolean-oracle queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 0.05,
    "costC": 3.9,
    "papers": [
      {
        "title": "Rapid solution of problems by quantum computation",
        "url": "https://doi.org/10.1098/rspa.1992.0167"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$1$",
      "classical": "$2^{n-1}+1$",
      "parameter": "Oracle address length n",
      "model": "Exact Boolean-oracle queries",
      "note": "Both costs use exact decision with the Deutsch-Jozsa promise."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "oracle address length n",
    "parameterHtml": "oracle address length n",
    "model": "bounded-error phase-function queries",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 0.05,
    "costC": 3.4,
    "papers": [
      {
        "title": "Forrelation: A Problem that Optimally Separates Quantum from Classical Computing",
        "url": "https://arxiv.org/abs/1411.5729"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$O(1)$",
      "classical": "$\\widetilde\\Theta(2^{n/2})$",
      "parameter": "oracle address length n",
      "model": "bounded-error phase-function queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Oracle address length n",
    "parameterHtml": "Oracle address length n",
    "model": "Oracle queries for approximate Fourier sampling",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 0.05,
    "costC": 3.9,
    "papers": [
      {
        "title": "Complexity-Theoretic Foundations of Quantum Supremacy Experiments",
        "url": "https://arxiv.org/abs/1612.05903"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$1$",
      "classical": "$\\Theta(2^n)$",
      "parameter": "Oracle address length n",
      "model": "Oracle queries for approximate Fourier sampling",
      "note": "One quantum query versus linear-in-truth-table-size classical queries at the same fixed total-variation accuracy."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi><mo>&#x02212;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "oracle string length N",
    "parameterHtml": "oracle string length N",
    "model": "bit queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 1.0,
    "costC": 1.0,
    "papers": [
      {
        "title": "Quantum Oracle Interrogation: Getting all information for almost half the price",
        "url": "https://arxiv.org/abs/quant-ph/9805006"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$N/2+O(\\sqrt N)$",
      "classical": "$N-O(1)$",
      "parameter": "oracle string length N",
      "model": "bit queries",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Oracle string length N; M=N candidate strings",
    "parameterHtml": "Oracle string length N; M=N candidate strings",
    "model": "Bit queries",
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1
        ]
      ],
      "quantum": "$\\Theta(\\sqrt N)$",
      "classical": "$\\Theta(N)$",
      "parameter": "Oracle string length N; M=N candidate strings",
      "model": "Bit queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Boolean dimension n; fixed distance epsilon",
    "parameterHtml": "Boolean dimension n; fixed distance epsilon",
    "model": "Function-oracle queries",
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          1,
          3.4
        ]
      ],
      "quantum": "$O(n\\log n)$",
      "classical": "$\\widetilde\\Theta(2^{n/2})$",
      "parameter": "Boolean dimension n; fixed distance epsilon",
      "model": "Function-oracle queries",
      "note": "Principal comparison at the displayed parameter setting."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Oracle domain size n; fixed testing distance",
    "parameterHtml": "Oracle domain size n; fixed testing distance",
    "model": "Function-oracle queries",
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          0.25
        ]
      ],
      "quantum": "$O(1)$",
      "classical": "$\\Omega(n^{1/4}/\\log n)$",
      "parameter": "Oracle domain size n; fixed testing distance",
      "model": "Function-oracle queries",
      "note": "The displayed classical coordinate is the stated lower bound; the quantum count is the constant-query tester."
    }
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mi>k</mi></mrow></msup><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x02212;</mo><mn>2</mn><msqrt><mi>n</mi></msqrt></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Dimension n; lambda(n)=2^(-n/2+sqrt(n)); fixed confidence exponent k",
    "parameterHtml": "Dimension n; lambda(n)=2^(-n/2+sqrt(n)); fixed confidence exponent k",
    "model": "Quantum-example learning and classical membership-query learning at the stated advantage",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "Unconditional Quantum PAC Learning Advantage in the Large Error Regime",
        "url": "https://arxiv.org/abs/2610.23268"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$O(n^{3k}2^{n-2\\sqrt n})$",
      "parameter": "Dimension n; lambda(n)=2^(-n/2+sqrt(n)); fixed confidence exponent k",
      "model": "Quantum-example learning and classical membership-query learning at the stated advantage",
      "note": "The chosen constructive lambda lies near the lower allowed end and gives the largest leading exponential truth-table comparator; the polynomial degree is unspecified."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n-qubit high-width computation; polynomial gate count and security parameter",
    "parameterHtml": "n-qubit high-width computation; polynomial gate count and security parameter",
    "model": "Honest-prover running time at the same protocol acceptance probability",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2.4,
    "costC": 3.9,
    "papers": [
      {
        "title": "Classical Verification of Quantum Computations",
        "url": "https://arxiv.org/abs/1804.01082"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.4,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\operatorname{poly}(n)2^{O(n)}$",
      "parameter": "n-qubit high-width computation; polynomial gate count and security parameter",
      "model": "Honest-prover running time at the same protocol acceptance probability",
      "note": "Worst-case honest-prover computation, rather than the classical verifier runtime; the simulator alternatives in the entry remain applicable."
    }
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
    "Q": "Polynomially many cryptographic rounds for entropy certification; the circuit-based protocol executes challenged quantum circuits.",
    "C": "A classical device can retain every output, giving zero entropy conditional on its own side information. The circuit-based protocol instead specifies a time-limited adversary.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "Input parameters and promises in the problem statement",
    "parameterHtml": "Input parameters and promises in the problem statement",
    "model": "Certified randomness and cryptographic protocol resources",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "Polynomially many cryptographic rounds for entropy certification; the circuit-based protocol executes challenged quantum circuits.",
      "classical": "A classical device can retain every output, giving zero entropy conditional on its own side information. The circuit-based protocol instead specifies a time-limited adversary.",
      "parameter": "Input parameters and promises in the problem statement",
      "model": "Certified randomness and cryptographic protocol resources",
      "note": "The separation concerns certified entropy against side information and protocol success, rather than two finite running times for the same classical output guarantee."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Ideal sampling compares polynomial quantum cost with the best applicable exponential or subexponential generic classical simulator.",
    "gainText": "Ideal sampling compares polynomial quantum cost with the best applicable exponential or subexponential generic classical simulator.",
    "parameter": "n qubits; ideal circuits, g=Theta(n^2), w=Theta(n), s>=Omega(n^2)",
    "parameterHtml": "n qubits; ideal circuits, g=Theta(n^2), w=Theta(n), s&gt;=Omega(n^2)",
    "model": "Operations per sample from the specified circuit distribution",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 2,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2,
          3.9
        ]
      ],
      "quantum": "$O(n^2)$",
      "classical": "$\\min\\{O(n^2 2^n),\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "n qubits; ideal circuits, g=Theta(n^2), w=Theta(n), s>=Omega(n^2)",
      "model": "Operations per sample from the specified circuit distribution",
      "note": "Principal ideal high-width regime. Quadratic circuit size prevents a linear-size Boolean encoding from being assumed; classical exponential constants remain unspecified."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>4</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002B;</mo><msup><mi>n</mi><mn>4</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Ideal sampling compares polynomial optical resources with exponential classical bounds, keeping photon and mode counts independent.",
    "gainText": "Ideal sampling compares polynomial optical resources with exponential classical bounds, keeping photon and mode counts independent.",
    "parameter": "n photons; ideal interferometer with m=Theta(n^2) modes",
    "parameterHtml": "n photons; ideal interferometer with m=Theta(n^2) modes",
    "model": "Optical-element implementation cost versus classical sampling operations",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 2.2,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.2,
          3.9
        ]
      ],
      "quantum": "$O(n^4)$",
      "classical": "$O(n2^n+n^4)$",
      "parameter": "n photons; ideal interferometer with m=Theta(n^2) modes",
      "model": "Optical-element implementation cost versus classical sampling operations",
      "note": "The collision-aware Haar-average expression has the same leading exponential rate in this mode regime. This cost setting does not impose a separate hardness claim."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mn>4</mn></msup><msup><mn>2</mn><mrow><mi>N</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "General ideal instances compare polynomial optical resources with exponential hafnian-based sampling time; structure and loss determine the comparator.",
    "gainText": "General ideal instances compare polynomial optical resources with exponential hafnian-based sampling time; structure and loss determine the comparator.",
    "parameter": "N detected photons; ideal general instance with m=Theta(N) modes",
    "parameterHtml": "N detected photons; ideal general instance with m=Theta(N) modes",
    "model": "Optical-element implementation cost versus classical sampling operations",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 2,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2,
          3.4
        ]
      ],
      "quantum": "$O(N^2)$",
      "classical": "$O(N^4 2^{N/2})$",
      "parameter": "N detected photons; ideal general instance with m=Theta(N) modes",
      "model": "Optical-element implementation cost versus classical sampling operations",
      "note": "Principal ideal sampling comparison with the stated numerical cutoff; polynomial subclasses are separate regimes."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial quantum sampling versus the best applicable exponential or subexponential classical simulator.",
    "gainText": "Polynomial quantum sampling versus the best applicable exponential or subexponential classical simulator.",
    "parameter": "n qubits; ideal circuits, g=Theta(n^2), w=Theta(n), s>=Omega(n^2)",
    "parameterHtml": "n qubits; ideal circuits, g=Theta(n^2), w=Theta(n), s&gt;=Omega(n^2)",
    "model": "Operations per sample from the specified circuit distribution",
    "evidence": 0.75,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2,
          3.9
        ]
      ],
      "quantum": "$O(n^2)$",
      "classical": "$\\min\\{O(n^2 2^n),\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "n qubits; ideal circuits, g=Theta(n^2), w=Theta(n), s>=Omega(n^2)",
      "model": "Operations per sample from the specified circuit distribution",
      "note": "Principal ideal high-width regime. Quadratic circuit size prevents a linear-size Boolean encoding from being assumed; classical exponential constants remain unspecified."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial quantum gates versus the best applicable exponential or subexponential generic classical trace computation.",
    "gainText": "Polynomial quantum gates versus the best applicable exponential or subexponential generic classical trace computation.",
    "parameter": "n qubits; g=Theta(n^2), linear width, fixed accuracy and failure probability",
    "parameterHtml": "n qubits; g=Theta(n^2), linear width, fixed accuracy and failure probability",
    "model": "Gate/time cost for the same normalized-trace accuracy",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 2,
    "costC": 3.9,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2,
          3.9
        ]
      ],
      "quantum": "$O(n^2)$",
      "classical": "$\\min\\{O(n^2 2^n),\\operatorname{poly}(n)2^{O(n)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "n qubits; g=Theta(n^2), linear width, fixed accuracy and failure probability",
      "model": "Gate/time cost for the same normalized-trace accuracy",
      "note": "Principal high-width trace-estimation regime; the classical simulator minimum is retained."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;lower&#x000A0;bound;&#x000A0;</mtext><mo>polylog</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;upper&#x000A0;bound</mtext></mrow></math></span>",
    "gain": "Constant quantum depth versus logarithmic classical depth; this is a parallel-computation separation.",
    "gainText": "Constant quantum depth versus logarithmic classical depth; this is a parallel-computation separation.",
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.05,
          0.18
        ]
      ],
      "quantum": "$O(1)$",
      "classical": "$\\Omega(\\log n)\\text{ lower bound; }\\operatorname{polylog}(n)\\text{ upper bound}$",
      "parameter": "$n$ is the grid vertex count.",
      "model": "Bounded-fan-in circuit depth",
      "note": "The classical logarithmic band contains its logarithmic depth lower bound and polylogarithmic upper bound; quantum depth is constant."
    }
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
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> reduction in communication, conventionally called an exponential separation in message length.",
    "gainText": "$\\Theta(\\sqrt n/\\log n)$ reduction in communication, conventionally called an exponential separation in message length.",
    "parameter": "$n$ is each party's input length.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> is each party&#x27;s input length.",
    "model": "Private-coin simultaneous messages",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
    "costQ": 0.18,
    "costC": 0.5,
    "papers": [
      {
        "title": "Quantum fingerprinting",
        "url": "https://arxiv.org/abs/quant-ph/0102001"
      }
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.18,
          0.5
        ]
      ],
      "quantum": "$\\Theta(\\log n)$",
      "classical": "$\\Theta(\\sqrt n)$",
      "parameter": "$n$ is each party's input length.",
      "model": "Private-coin simultaneous messages",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02308;</mi><msub><mi>log</mi><mn>2</mn></msub><mi>n</mi><mi>&#x02309;</mi></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> communication reduction against the public-coin classical optimum.",
    "gainText": "$\\Theta(\\sqrt n/\\log n)$ communication reduction against the public-coin classical optimum.",
    "parameter": "$n$ is the input length and matching vertex count.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> is the input length and matching vertex count.",
    "model": "One-way communication",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    ],
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.18,
          0.5
        ]
      ],
      "quantum": "$\\lceil\\log_2n\\rceil$",
      "classical": "$\\Theta(\\sqrt n)$",
      "parameter": "$n$ is the input length and matching vertex count.",
      "model": "One-way communication",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "gain": "A tight quadratic communication improvement arising from quantum search.",
    "gainText": "A tight quadratic communication improvement arising from quantum search.",
    "parameter": "$n$ is the universe size.",
    "parameterHtml": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> is the universe size.",
    "model": "Two-party bounded-error communication",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\Theta(\\sqrt n)$",
      "classical": "$\\Theta(n)$",
      "parameter": "$n$ is the universe size.",
      "model": "Two-party bounded-error communication",
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
    }
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential classical queries to polynomial quantum queries.",
    "gainText": "Exponential classical queries to polynomial quantum queries.",
    "parameter": "n = ceil(log_2 |G|); fixed bounded error delta",
    "parameterHtml": "n = ceil(log_2 |G|); fixed bounded error delta",
    "model": "Coset-oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": 2.0,
    "costC": 3.4,
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
    "costComparison": {
      "kind": "point",
      "points": [
        [
          2.0,
          3.4
        ]
      ],
      "quantum": "$O(n^2+\\log(1/\\delta))$",
      "classical": "$O(n2^{n/2})$",
      "parameter": "n = ceil(log_2 |G|); fixed bounded error delta",
      "model": "Coset-oracle queries",
      "note": "At fixed bounded error, subgroup identification uses quadratic quantum queries versus the exponential generic classical search bound."
    }
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
    "parameter": "Input parameters and promises in the problem statement",
    "parameterHtml": "Input parameters and promises in the problem statement",
    "model": "Exact distributed leader election rounds",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$O(n)$",
      "classical": "Exact bounded-time leader election is impossible on general anonymous classical networks even with known n. Symmetric executions on symmetric topologies keep processors indistinguishable.",
      "parameter": "Input parameters and promises in the problem statement",
      "model": "Exact distributed leader election rounds",
      "note": "Exact classical leader election is impossible on the specified anonymous networks; there is no finite classical running-time coordinate."
    }
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
    "parameter": "Input parameters and promises in the problem statement",
    "parameterHtml": "Input parameters and promises in the problem statement",
    "model": "Nonlocal-game success probability",
    "evidence": 1,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "unavailable",
      "points": [],
      "quantum": "$1$",
      "classical": "$8/9$",
      "parameter": "Input parameters and promises in the problem statement",
      "model": "Nonlocal-game success probability",
      "note": "The comparison is success probability 1 versus 8/9 with arbitrary local computation, rather than a running-time separation."
    }
  }
];
window.SAMPLE_DATA = window.CATALOGUE_POINTS;
