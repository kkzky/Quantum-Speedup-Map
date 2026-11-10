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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>N</mi><mo>&#x0002F;</mo><mi>M</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002F;</mo><mi>M</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Tight quadratic polynomial speedup in the oracle search-space ratio, entirely from Grover search and amplitude amplification. For a unique witness among <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow></math></span> candidates, the exponent changes from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> without power saving.",
    "gainText": "Tight quadratic polynomial speedup in the oracle search-space ratio, entirely from Grover search and amplitude amplification. For a unique witness among $2^n$ candidates, the exponent changes from $n$ to $n/2$ without power saving.",
    "parameter": "N: search domain; M: marked elements. The size parameter for the promised-density comparison is N/M.",
    "parameterHtml": "N: search domain; M: marked elements. The size parameter for the promised-density comparison is N/M.",
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
      "quantum": "$O(\\sqrt{N/M})$",
      "classical": "$\\Theta(N/M)$",
      "parameter": "N: search domain; M: marked elements. The size parameter for the promised-density comparison is N/M.",
      "model": "Boolean-oracle queries",
      "note": "The worst case uses M=1; replacing N by N/M gives the same square-root relation for every promised marked fraction.",
      "noteHtml": "The worst case uses M=1; replacing N by N/M gives the same square-root relation for every promised marked fraction."
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
      "note": "Worst-case bounded-error query comparison.",
      "noteHtml": "Worst-case bounded-error query comparison."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>T</mi><mi>D</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mtext>(detection)</mtext><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>T</mi></msqrt><msup><mi>D</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mi>log</mi><mi>D</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mtext>(witness)</mtext></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>T</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic in the size of a specified search tree, through a quantum walk. Fixed-domain, fixed-arity instances also admit the displayed subexponential classical bound, whose exponent has no power saving.",
    "gainText": "Nearly quadratic in the size of a specified search tree, through a quantum walk. Fixed-domain, fixed-arity instances also admit the displayed subexponential classical bound, whose exponent has no power saving.",
    "parameter": "T: classical tree size; D: depth, 1≤D≤T",
    "parameterHtml": "T: classical tree size; D: depth, 1≤D≤T",
    "model": "Tree-oracle queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1
        ],
        [
          0.65,
          1
        ],
        [
          0.875,
          1
        ],
        [
          1.25,
          1
        ],
        [
          1.625,
          1
        ],
        [
          2.0,
          1
        ]
      ],
      "quantum": "$O(\\sqrt{TD})\\ \\text{(detection)};\\ O(\\sqrt T D^{3/2}\\log D)\\ \\text{(witness)}$",
      "classical": "$O(T)$",
      "parameter": "T: classical tree size; D: depth, 1≤D≤T",
      "model": "Tree-oracle queries",
      "note": "The segment covers detection O(√(TD)) and witness O(√T D^(3/2) log D) as depth varies; it compares the same supplied tree. Explicit-input SAT algorithms are a different resource comparison.",
      "noteHtml": "The segment covers detection O(√(TD)) and witness O(√T D^(3/2) log D) as depth varies; it compares the same supplied tree. Explicit-input SAT algorithms are a different resource comparison."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>Q</mi></msqrt><mi>D</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>Q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Nearly quadratic polynomial speedup in the work of the selected classical tree-search procedure, based on quantum tree search and subtree estimation.",
    "gainText": "Nearly quadratic polynomial speedup in the work of the selected classical tree-search procedure, based on quantum tree search and subtree estimation.",
    "parameter": "Q: visited classical branch-and-bound nodes; D≤Q: depth",
    "parameterHtml": "Q: visited classical branch-and-bound nodes; D≤Q: depth",
    "model": "Branch-and-bound oracle queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1
        ],
        [
          0.75,
          1
        ],
        [
          1.0,
          1
        ],
        [
          1.25,
          1
        ],
        [
          1.5,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt Q D)$",
      "classical": "$O(Q)$",
      "parameter": "Q: visited classical branch-and-bound nodes; D≤Q: depth",
      "model": "Branch-and-bound oracle queries",
      "note": "The curve retains the depth dependence: D=Q^d, 0≤d≤1, is a coordinate parameterization of the full stated family.",
      "noteHtml": "The curve retains the depth dependence: D=Q^d, 0≤d≤1, is a coordinate parameterization of the full stated family."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002F;</mo><mi>k</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, quantum Schöning; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.1433</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for 3-SAT, amplified PPSZ.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mi>m</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mn>2</mn><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>, exact counting by Boolean tensor contraction.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: variables; m: clauses; fixed clause width k",
    "parameterHtml": "n: variables; m: clauses; fixed clause width k",
    "model": "Quantum gates / classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          3.09320401,
          2.86
        ],
        [
          3.4,
          2.86
        ],
        [
          3.4,
          2.9
        ],
        [
          3.09320401,
          2.9
        ]
      ],
      "quantum": "$O^*((2-2/k)^{n/2})$, quantum Sch\\\"oning; $O^*(1.1433^n)$ for 3-SAT, amplified PPSZ.",
      "classical": "$(n+m)^{O_k(1)}2^{O_k(n\\log\\log n/\\sqrt{\\log n})}$, exact counting by Boolean tensor contraction.",
      "parameter": "n: variables; m: clauses; fixed clause width k",
      "model": "Quantum gates / classical bit operations",
      "note": "The quantum range covers amplified 3-SAT and the fixed-k Schöning bounds. The classical band is the near-linear subexponential class 2^{O_k(n log log n/√log n)}; polynomial input-length factors remain in the formula.",
      "noteHtml": "The quantum range covers amplified 3-SAT and the fixed-k Schöning bounds. The classical band is the near-linear subexponential class 2^O_k(n log log n/√log n); polynomial input-length factors remain in the formula."
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
      "note": "Coordinates use inverse precision as the common size parameter.",
      "noteHtml": "Coordinates use inverse precision as the common size parameter."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.728</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for both problems, quantum subset dynamic programming; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.110</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.301</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for degree-three and degree-four travelling salesman, quantum backtracking.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for travelling salesman, Held–Karp; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for feedback arc set, subset dynamic programming.",
    "gain": "Polynomial speedups through smaller exponential constants. The common subset dynamic program uses minimum finding and amplitude amplification; bounded-degree travelling salesman uses quantum backtracking in the specified graph and memory regimes.",
    "gainText": "Polynomial speedups through smaller exponential constants. The common subset dynamic program uses minimum finding and amplitude amplification; bounded-degree travelling salesman uses quantum backtracking in the specified graph and memory regimes.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
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
      "quantum": "$O^*(1.728^n)$ for both problems, quantum subset dynamic programming; $O^*(1.110^n)$ and $O^*(1.301^n)$ for degree-three and degree-four travelling salesman, quantum backtracking.",
      "classical": "$O(n^2 2^n)$ for travelling salesman, Held--Karp; $O^*(2^n)$ for feedback arc set, subset dynamic programming.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "General travelling salesman and feedback arc set. The separate bounded-degree TSP algorithms have additional input promises.",
      "noteHtml": "General travelling salesman and feedback arc set. The separate bounded-degree TSP algorithms have additional input promises."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7274</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for explicit set cover, quantum dynamic programming; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>c</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for eligible families with <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>c</mi><mo>&#x0003C;</mo><mn>2</mn></mrow></math></span>, Gaspers–Li covering, packing and partition algorithms.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, inclusion–exclusion; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002C;</mo><msup><mn>2</mn><mi>m</mi></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for explicit set cover, subset methods or family enumeration.",
    "gain": "Polynomial speedups through smaller exponential constants in the eligible large-family or implicit-family comparisons, from amplitude amplification and minimum finding. The stated linear-family regimes have stronger subexponential classical algorithms.",
    "gainText": "Polynomial speedups through smaller exponential constants in the eligible large-family or implicit-family comparisons, from amplitude amplification and minimum finding. The stated linear-family regimes have stronger subexponential classical algorithms.",
    "parameter": "n: ground-set size; m: explicit family size; c<2: family-generation parameter",
    "parameterHtml": "n: ground-set size; m: explicit family size; c&lt;2: family-generation parameter",
    "model": "Quantum time with coherent memory / classical subset-enumeration time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "region",
      "points": [
        [
          3.4,
          3.9
        ],
        [
          3.9,
          3.9
        ],
        [
          3.68860219,
          2.9
        ],
        [
          3.4,
          2.9
        ]
      ],
      "quantum": "$O^*(1.7274^n)$ for explicit set cover, quantum dynamic programming; $O^*((2+c)^{n/2})$ for eligible families with $c<2$, Gaspers--Li covering, packing and partition algorithms.",
      "classical": "$O^*(2^n)$, inclusion--exclusion; $O^*(\\min\\{2^n,2^m\\})$ for explicit set cover, subset methods or family enumeration.",
      "parameter": "n: ground-set size; m: explicit family size; c<2: family-generation parameter",
      "model": "Quantum time with coherent memory / classical subset-enumeration time",
      "note": "Categorical envelope over the family-size tradeoff and eligible covering/packing/partition classes; explicit cover compares against min(2^n,2^m). The formulas specify the parameter dependence.",
      "noteHtml": "Categorical envelope over the family-size tradeoff and eligible covering/packing/partition classes; explicit cover compares against min(2^n,2^m). The formulas specify the parameter dependence."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>log</mi><mi>n</mi></mrow></msup><msubsup><mi>T</mi><mi>D</mi><mi>n</mi></msubsup></mrow></math></span>, quantum lattice dynamic programming.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00028;</mo><mi>D</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, demand-vector dynamic programming.",
    "gain": "Polynomial speedup through a smaller exponential constant for fixed demand in the general lattice comparison, using quantum search. Linear-incidence instances have a subexponential classical comparator.",
    "gainText": "Polynomial speedup through a smaller exponential constant for fixed demand in the general lattice comparison, using quantum search. Linear-incidence instances have a subexponential classical comparator.",
    "parameter": "n: universe size; m: sets; D≥1: fixed demand; T_D<D+1",
    "parameterHtml": "n: universe size; m: sets; D≥1: fixed demand; T_D&lt;D+1",
    "model": "QRAM time / classical RAM time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          2.9,
          3.9
        ],
        [
          3.9,
          3.9
        ],
        [
          5.2,
          5.2
        ],
        [
          2.9,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(m,n)^{\\log n}T_D^n$, quantum lattice dynamic programming.",
      "classical": "$O(m(D+1)^n)$, demand-vector dynamic programming.",
      "parameter": "n: universe size; m: sets; D≥1: fixed demand; T_D<D+1",
      "model": "QRAM time / classical RAM time",
      "note": "Varying fixed demand changes both exponential bases. The extent represents those bases schematically, including T_2<2.660, T_3<3.529 and T_4<4.421. The quasipolynomial prefactor remains explicit; bounded-incidence instances also admit the stated stronger classical bound.",
      "noteHtml": "Varying fixed demand changes both exponential bases. The extent represents those bases schematically, including T_2&lt;2.660, T_3&lt;3.529 and T_4&lt;4.421. The quasipolynomial prefactor remains explicit; bounded-incidence instances also admit the stated stronger classical bound."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, inclusion–exclusion over independent sets; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>E</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><msub><mi>O</mi><mi>q</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> for fixed <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span>-colorability, Boolean tensor contraction.",
    "gain": "Polynomial speedup through a smaller exponential constant for unrestricted chromatic number, based on amplitude amplification. Fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span> decision has the displayed subexponential classical comparator.",
    "gainText": "Polynomial speedup through a smaller exponential constant for unrestricted chromatic number, based on amplitude amplification. Fixed-$q$ decision has the displayed subexponential classical comparator.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
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
      "classical": "$O^*(2^n)$, inclusion--exclusion over independent sets; $\\operatorname{poly}(n+|E|)2^{O_q(n\\log\\log n/\\sqrt{\\log n})}$ for fixed $q$-colorability, Boolean tensor contraction.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Exact chromatic number, where the number of colors is part of the problem; fixed-q colorability has a distinct classical bound.",
      "noteHtml": "Exact chromatic number, where the number of colors is part of the problem; fixed-q colorability has a distinct classical bound."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>&#x003B4;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mi>k</mi></msup><msup><mi>n</mi><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mtext>&#x000A0;</mtext><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mtext>when&#x000A0;applicable</mtext><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial speedup through a smaller exponential constant in terminal count in the general comparison, using amplitude amplification. Sparse unit-weight regimes also have the stated classical vertex-parameter bounds.",
    "gainText": "Polynomial speedup through a smaller exponential constant in terminal count in the general comparison, using amplitude amplification. Sparse unit-weight regimes also have the stated classical vertex-parameter bounds.",
    "parameter": "k: terminals; n: graph vertices; δ>0: classical tradeoff parameter",
    "parameterHtml": "k: terminals; n: graph vertices; δ&gt;0: classical tradeoff parameter",
    "model": "Quantum gates / classical running time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          3.75758296,
          3.9
        ],
        [
          3.75758296,
          5.2
        ]
      ],
      "quantum": "$O^*(1.812^k)$",
      "classical": "$\\min\\{(2+\\delta)^k n^{f(1/\\delta)},\\ O^*(2^k)\\ \\text{when applicable}\\}$",
      "parameter": "k: terminals; n: graph vertices; δ>0: classical tradeoff parameter",
      "model": "Quantum gates / classical running time",
      "note": "The quantum k-exponent is known. Classical bases are 2+δ with δ>0; the endpoint 2 denotes bounded integer weights or the infimum exponential rate. The upper end spans unspecified exponential constants schematically, not a bound on δ. Polynomial factors in n remain in the formulas.",
      "noteHtml": "The quantum k-exponent is known. Classical bases are 2+δ with δ&gt;0; the endpoint 2 denotes bounded integer weights or the infimum exponential rate. The upper end spans unspecified exponential constants schematically, not a bound on δ. Polynomial factors in n remain in the formulas."
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
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed.",
      "noteHtml": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.538</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> with exponential QRAM, quantum treewidth dynamic programming.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.7347</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> with exponential space, potential-maximal-clique dynamic programming; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2.6151</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> with polynomial space, Fomin–Villanger.",
    "gain": "Polynomial speedups through smaller exponential constants in both displayed memory regimes. The quantum constructions combine structural enumeration with amplitude amplification and minimum finding.",
    "gainText": "Polynomial speedups through smaller exponential constants in both displayed memory regimes. The quantum constructions combine structural enumeration with amplitude amplification and minimum finding.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
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
      "quantum": "$O^*(1.538^n)$ with exponential QRAM, quantum treewidth dynamic programming.",
      "classical": "$O^*(1.7347^n)$ with exponential space, potential-maximal-clique dynamic programming; $O^*(2.6151^n)$ with polynomial space, Fomin--Villanger.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "Comparison permits exponential coherent/classical memory. The polynomial-space classical variant is separately stated in the entry.",
      "noteHtml": "Comparison permits exponential coherent/classical memory. The polynomial-space classical variant is separately stated in the entry."
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
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed.",
      "noteHtml": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for all three problems, subset dynamic programming; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>k</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>k</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mi>n</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> for interval completion with fill parameter <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span>.",
    "gain": "The common unrestricted vertex-count comparison is <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> versus <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.817</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, a polynomial speedup obtained from amplitude amplification and quantum minimum finding. Small-fill interval completion uses the stated parameterized comparator.",
    "gainText": "The common unrestricted vertex-count comparison is $O^*(2^n)$ versus $O^*(1.817^n)$, a polynomial speedup obtained from amplitude amplification and quantum minimum finding. Small-fill interval completion uses the stated parameterized comparator.",
    "parameter": "n: number of vertices or ground-set elements",
    "parameterHtml": "n: number of vertices or ground-set elements",
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
      "classical": "$O^*(2^n)$ for all three problems, subset dynamic programming; $k^{O(\\sqrt k)}n^{O(1)}$ for interval completion with fill parameter $k$.",
      "parameter": "n: number of vertices or ground-set elements",
      "model": "Quantum running time / classical running time",
      "note": "General vertex-ordering problems, parameterized by vertex count; the fill-parameter algorithm is an additional structured regime.",
      "noteHtml": "General vertex-ordering problems, parameterized by vertex count; the fill-parameter algorithm is an additional structured regime."
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
      "note": "Leading exponential rates; polynomial factors are suppressed.",
      "noteHtml": "Leading exponential rates; polynomial factors are suppressed."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>n</mi><mi>d</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>W</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007D;</mo><mtext>&#x000A0;</mtext><mtext>for&#x000A0;knapsack;&#x000A0;fixed&#x000A0;</mtext><mi>d</mi><mtext>&#x000A0;for&#x000A0;the&#x000A0;MITM&#x000A0;bound</mtext></mrow></math></span>",
    "gain": "The fixed-<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi></mrow></math></span>, dense, large-coefficient comparison improves the exponential constant from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span>, a polynomial speedup based on Grover search and amplitude amplification. Small capacities and bounded row support select the stated stronger classical bounds.",
    "gainText": "The fixed-$d$, dense, large-coefficient comparison improves the exponential constant from $1/2$ to $1/3$, a polynomial speedup based on Grover search and amplitude amplification. Small capacities and bounded row support select the stated stronger classical bounds.",
    "parameter": "n: items/variables; fixed d: constraint count; W: knapsack capacity",
    "parameterHtml": "n: items/variables; fixed d: constraint count; W: knapsack capacity",
    "model": "Quantum coherent-memory time / classical RAM time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "region",
      "points": [
        [
          3.23333333,
          1
        ],
        [
          3.23333333,
          3.4
        ]
      ],
      "quantum": "$\\widetilde O(2^{n/3}n^d)$",
      "classical": "$\\min\\{O^*(2^{n/2}),O(nW)\\}\\ \\text{for knapsack; fixed }d\\text{ for the MITM bound}$",
      "parameter": "n: items/variables; fixed d: constraint count; W: knapsack capacity",
      "model": "Quantum coherent-memory time / classical RAM time",
      "note": "The matched fixed-d theorem includes knapsack and gives the quantum leading rate1/3. Varying W changes the classical minimum from polynomial capacity dynamic programming through subexponential to2^(n/2). The general quantum formula retains n^d; growing-d behavior is not assigned a false classical exponent. Sparse-row encodings use the entry’s stronger classical bound.",
      "noteHtml": "The matched fixed-d theorem includes knapsack and gives the quantum leading rate1/3. Varying W changes the classical minimum from polynomial capacity dynamic programming through subexponential to2^(n/2). The general quantum formula retains n^d; growing-d behavior is not assigned a false classical exponent. Sparse-row encodings use the entry’s stronger classical bound."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>5</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>O</mi><mo>&#x0002A;</mo></msup><mo stretchy=\"false\">&#x00028;</mo><msup><mn>1.1488</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Dörn&#x27;s amplified branching algorithm.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>E</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>, Boolean tensor contraction with cardinality constraints.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: graph vertices",
    "parameterHtml": "n: graph vertices",
    "model": "Quantum gates / classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          3.1,
          2.86
        ],
        [
          3.1,
          2.86
        ],
        [
          3.1,
          2.9
        ],
        [
          3.1,
          2.9
        ]
      ],
      "quantum": "$O^*(2^{n/5})=O^*(1.1488^n)$, D\\\"orn's amplified branching algorithm.",
      "classical": "$\\operatorname{poly}(n+|E|)2^{O(n\\log\\log n/\\sqrt{\\log n})}$, Boolean tensor contraction with cardinality constraints.",
      "parameter": "n: graph vertices",
      "model": "Quantum gates / classical bit operations",
      "note": "The quantum branching algorithm remains exponential; the recorded classical optimum is near-linear subexponential.",
      "noteHtml": "The quantum branching algorithm remains exponential; the recorded classical optimum is near-linear subexponential."
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
    "parameter": "n: vertices; ε>0: algorithmic constant",
    "parameterHtml": "n: vertices; ε&gt;0: algorithmic constant",
    "model": "Quantum time / classical time",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          2.9,
          3.9
        ],
        [
          3.9,
          3.9
        ]
      ],
      "quantum": "$O^*((2-\\epsilon)^n)$ for some constant $\\epsilon>0$, Gaspers--Li domatic-number algorithm.",
      "classical": "$O^*(2^n)$, inclusion--exclusion over dominating sets.",
      "parameter": "n: vertices; ε>0: algorithmic constant",
      "model": "Quantum time / classical time",
      "note": "The quantum base 2−ε is proved below 2, but its numerical value is unspecified; the segment denotes that exponential-rate interval.",
      "noteHtml": "The quantum base 2−ε is proved below 2, but its numerical value is unspecified; the segment denotes that exponential-rate interval."
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
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed.",
      "noteHtml": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
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
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed.",
      "noteHtml": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
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
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed.",
      "noteHtml": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
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
      "note": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed.",
      "noteHtml": "Leading exponential bases of the recorded quantum and classical algorithms; polynomial input-size factors are suppressed."
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
      "note": "The recorded classical algorithm is faster than this quantum algorithm, so the point lies on the classical-faster side.",
      "noteHtml": "The recorded classical algorithm is faster than this quantum algorithm, so the point lies on the classical-faster side."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>h</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mi>h</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in the strongest comparison: throughout <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><mi>&#x003C9;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003D;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, the quantum cost is polynomial in the oracle address length <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x02113;</mi></mrow></math></span>, while the classical cost is superpolynomial. At larger depths within the stated lower-bound range, both costs become superpolynomial and the general bounds describe an intermediate improvement. Fixed depth gives a polynomial query advantage.",
    "gainText": "Subexponential to polynomial in the strongest comparison: throughout $h=\\omega(1)$ and $h=O(\\log n)$, the quantum cost is polynomial in the oracle address length $\\ell$, while the classical cost is superpolynomial. At larger depths within the stated lower-bound range, both costs become superpolynomial and the general bounds describe an intermediate improvement. Fixed depth gives a polynomial query advantage.",
    "parameter": "ℓ=nh+O(log h): oracle address length; n≥6; depth h≥1",
    "parameterHtml": "ℓ=nh+O(log h): oracle address length; n≥6; depth h≥1",
    "model": "Oracle queries",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          0.05,
          2.4
        ],
        [
          2.4,
          2.5
        ],
        [
          2.9,
          2.9
        ],
        [
          5.2,
          5.2
        ],
        [
          2.9,
          5.2
        ]
      ],
      "quantum": "$O(2^h)$",
      "classical": "$O(n^h)$",
      "parameter": "ℓ=nh+O(log h): oracle address length; n≥6; depth h≥1",
      "model": "Oracle queries",
      "note": "Envelope over the complete n,h family: constant depth gives constant quantum and polynomial classical queries; logarithmic depth yields polynomial versus quasipolynomial regimes; larger depths give subexponential/exponential regimes. The chart does not select one depth.",
      "noteHtml": "Envelope over the complete n,h family: constant depth gives constant quantum and polynomial classical queries; logarithmic depth yields polynomial versus quasipolynomial regimes; larger depths give subexponential/exponential regimes. The chart does not select one depth."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(k,1+log(n/k)); defect count k and universe size n",
    "parameterHtml": "Scale max(k,1+log(n/k)); defect count k and universe size n",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.05,
          1.0
        ],
        [
          0.025,
          1.05
        ],
        [
          0.05,
          1.1
        ],
        [
          0.075,
          1.15
        ],
        [
          0.1,
          1.2
        ],
        [
          0.125,
          1.25
        ],
        [
          0.15,
          1.3
        ],
        [
          0.175,
          1.35
        ],
        [
          0.2,
          1.4
        ],
        [
          0.225,
          1.45
        ],
        [
          0.25,
          1.5
        ],
        [
          0.275,
          1.55
        ],
        [
          0.3,
          1.6
        ],
        [
          0.325,
          1.65
        ],
        [
          0.35,
          1.7
        ],
        [
          0.375,
          1.75
        ],
        [
          0.4,
          1.8
        ],
        [
          0.425,
          1.85
        ],
        [
          0.45,
          1.9
        ],
        [
          0.475,
          1.95
        ],
        [
          0.5,
          2.0
        ],
        [
          0.5,
          1.95
        ],
        [
          0.5,
          1.9
        ],
        [
          0.5,
          1.85
        ],
        [
          0.5,
          1.8
        ],
        [
          0.5,
          1.75
        ],
        [
          0.5,
          1.7
        ],
        [
          0.5,
          1.65
        ],
        [
          0.5,
          1.6
        ],
        [
          0.5,
          1.55
        ],
        [
          0.5,
          1.5
        ],
        [
          0.5,
          1.45
        ],
        [
          0.5,
          1.4
        ],
        [
          0.5,
          1.35
        ],
        [
          0.5,
          1.3
        ],
        [
          0.5,
          1.25
        ],
        [
          0.5,
          1.2
        ],
        [
          0.5,
          1.15
        ],
        [
          0.5,
          1.1
        ],
        [
          0.5,
          1.05
        ],
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\Theta(\\sqrt k)$",
      "classical": "$\\Theta(k\\log(n/k)+k)$",
      "parameter": "Scale max(k,1+log(n/k)); defect count k and universe size n",
      "model": "subset-intersection queries",
      "note": "The curve varies defect count and the information per defect. This retains the logarithmic universe-size factor even when it dominates the defect count.",
      "noteHtml": "The curve varies defect count and the information per defect. This retains the logarithmic universe-size factor even when it dominates the defect count."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>d</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>k</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>d</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Threshold k and gap 1 <= d <= k",
    "parameterHtml": "Threshold k and gap 1 &lt;= d &lt;= k",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          0.0625,
          0.25
        ],
        [
          0.125,
          0.5
        ],
        [
          0.1875,
          0.75
        ],
        [
          0.25,
          1.0
        ],
        [
          0.3125,
          1.0
        ],
        [
          0.375,
          1.0
        ],
        [
          0.4375,
          1.0
        ],
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$O(\\sqrt{1+k/d})$",
      "classical": "$\\widetilde\\Theta(\\min\\{k,1+(k/d)^2\\})$",
      "parameter": "Threshold k and gap 1 <= d <= k",
      "model": "subset-intersection queries",
      "note": "The ratio k/d ranges from bounded to order k. The classical bound saturates at k while the quantum power reaches one half.",
      "noteHtml": "The ratio k/d ranges from bounded to order k. The classical bound saturates at k while the quantum power reaches one half."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002C;</mo><msqrt><mrow><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>&#x003B5;</mi><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>&#x003B5;</mi></mrow></msqrt><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002C;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo>&#x0002B;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Boolean dimension n >= 2k, junta size k and distance 0 < epsilon <= 1/8",
    "parameterHtml": "Boolean dimension n &gt;= 2k, junta size k and distance 0 &lt; epsilon &lt;= 1/8",
    "model": "Membership queries",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          3.4,
          0.05
        ],
        [
          3.4,
          3.9
        ],
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$\\Theta(\\min\\{2^{n/2},\\sqrt{\\log(2+\\varepsilon 2^k)/\\varepsilon}\\})$",
      "classical": "$O(\\min\\{2^n,k\\log k+k/\\varepsilon\\})$",
      "parameter": "Boolean dimension n >= 2k, junta size k and distance 0 < epsilon <= 1/8",
      "model": "Membership queries",
      "note": "Envelope over junta size and distance, including the truth-table caps at 2^(n/2) quantum and 2^n classical queries. The minimum expressions specify the correlated attainable regimes.",
      "noteHtml": "Envelope over junta size and distance, including the truth-table caps at 2^(n/2) quantum and 2^n classical queries. The minimum expressions specify the correlated attainable regimes."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo>&#x0002B;</mo><msup><mn>2</mn><mi>k</mi></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>n</mi><mo>&#x0002B;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(n,2^k,1/epsilon); input dimension n, junta size k and accuracy epsilon",
    "parameterHtml": "Scale max(n,2^k,1/epsilon); input dimension n, junta size k and accuracy epsilon",
    "model": "Total labeled examples, with quantum examples in the first quantum stage",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          1.0,
          0.05
        ],
        [
          1.0,
          2.0
        ],
        [
          0.05,
          2.0
        ]
      ],
      "quantum": "$O(k\\log k/\\varepsilon+2^k\\log(1/\\varepsilon))$",
      "classical": "$O((k\\log n+2^k)/\\varepsilon)$",
      "parameter": "Scale max(n,2^k,1/epsilon); input dimension n, junta size k and accuracy epsilon",
      "model": "Total labeled examples, with quantum examples in the first quantum stage",
      "note": "Envelope for total example count when dimension, inverse accuracy and truth-table size vary; the quantum method includes its classical-example stage.",
      "noteHtml": "Envelope for total example count when dimension, inverse accuracy and truth-table size vary; the quantum method includes its classical-example stage."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>s</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo>&#x0002C;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common scale max(n,s,1/epsilon); dimension n, concept size s, accuracy epsilon and confidence",
    "parameterHtml": "Common scale max(n,s,1/epsilon); dimension n, concept size s, accuracy epsilon and confidence",
    "model": "Example-only learning time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          2.5
        ],
        [
          0.05,
          2.5
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,s,1/\\varepsilon,\\log(1/\\delta))$",
      "classical": "$n^{O(\\log(s/\\varepsilon))}\\operatorname{poly}(\\log(1/\\delta))$",
      "parameter": "Common scale max(n,s,1/epsilon); dimension n, concept size s, accuracy epsilon and confidence",
      "model": "Example-only learning time",
      "note": "Polynomial quantum degrees are unspecified. The classical region ranges from polynomial to quasipolynomial as concept size and dimension vary; stronger membership-query access is not used in this comparison.",
      "noteHtml": "Polynomial quantum degrees are unspecified. The classical region ranges from polynomial to quasipolynomial as concept size and dimension vary; stronger membership-query access is not used in this comparison."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(n,k); dimension n and Fourier sparsity k",
    "parameterHtml": "Scale max(n,k); dimension n and Fourier sparsity k",
    "model": "Uniform quantum examples versus classical labeled samples",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1.0,
          1.0
        ],
        [
          1.0,
          1.05
        ],
        [
          1.0,
          1.1
        ],
        [
          1.0,
          1.15
        ],
        [
          1.0,
          1.2
        ],
        [
          1.0,
          1.25
        ],
        [
          1.0,
          1.3
        ],
        [
          1.0,
          1.35
        ],
        [
          1.0,
          1.4
        ],
        [
          1.0,
          1.45
        ],
        [
          1.0,
          1.5
        ],
        [
          1.0,
          1.55
        ],
        [
          1.0,
          1.6
        ],
        [
          1.0,
          1.65
        ],
        [
          1.0,
          1.7
        ],
        [
          1.0,
          1.75
        ],
        [
          1.0,
          1.8
        ],
        [
          1.0,
          1.85
        ],
        [
          1.0,
          1.9
        ],
        [
          1.0,
          1.95
        ],
        [
          1.0,
          2.0
        ],
        [
          0.95,
          1.95
        ],
        [
          0.9,
          1.9
        ],
        [
          0.85,
          1.85
        ],
        [
          0.8,
          1.8
        ],
        [
          0.75,
          1.75
        ],
        [
          0.7,
          1.7
        ],
        [
          0.65,
          1.65
        ],
        [
          0.6,
          1.6
        ],
        [
          0.55,
          1.55
        ],
        [
          0.5,
          1.5
        ],
        [
          0.45,
          1.45
        ],
        [
          0.4,
          1.4
        ],
        [
          0.35,
          1.35
        ],
        [
          0.3,
          1.3
        ],
        [
          0.25,
          1.25
        ],
        [
          0.2,
          1.2
        ],
        [
          0.15,
          1.15
        ],
        [
          0.1,
          1.1
        ],
        [
          0.05,
          1.05
        ],
        [
          0.05,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(k)$",
      "classical": "$\\Theta(nk)$",
      "parameter": "Scale max(n,k); dimension n and Fourier sparsity k",
      "model": "Uniform quantum examples versus classical labeled samples",
      "note": "The curve retains independent growth of dimension and Fourier sparsity; polylogarithmic factors are in the quantum formula.",
      "noteHtml": "The curve retains independent growth of dimension and Fourier sparsity; polylogarithmic factors are in the quantum formula."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>t</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mi>log</mi><mi>t</mi></mrow></msup><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common scale max(n,t,1/epsilon); dimension n, concept size t, accuracy epsilon and confidence",
    "parameterHtml": "Common scale max(n,t,1/epsilon); dimension n, concept size t, accuracy epsilon and confidence",
    "model": "Example-only learning time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          2.5
        ],
        [
          0.05,
          2.5
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,t,1/\\varepsilon)$",
      "classical": "$\\operatorname{poly}(n^{\\log t},1/\\varepsilon)$",
      "parameter": "Common scale max(n,t,1/epsilon); dimension n, concept size t, accuracy epsilon and confidence",
      "model": "Example-only learning time",
      "note": "Polynomial quantum degrees are unspecified. The classical region ranges from polynomial to quasipolynomial as concept size and dimension vary; stronger membership-query access is not used in this comparison.",
      "noteHtml": "Polynomial quantum degrees are unspecified. The classical region ranges from polynomial to quasipolynomial as concept size and dimension vary; stronger membership-query access is not used in this comparison."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "The current membership-query comparison depends on inverse distance; both algorithms test the same symmetry property.",
      "noteHtml": "The current membership-query comparison depends on inverse distance; both algorithms test the same symmetry property."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo>&#x0002F;</mo><msqrt><mi>&#x003B5;</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Scale max(n,1/epsilon); Boolean dimension n and distance epsilon",
    "parameterHtml": "Scale max(n,1/epsilon); Boolean dimension n and distance epsilon",
    "model": "Membership queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          2.0
        ],
        [
          0.5125,
          2.00493827
        ],
        [
          0.525,
          2.0097561
        ],
        [
          0.5375,
          2.01445783
        ],
        [
          0.55,
          2.01904762
        ],
        [
          0.5625,
          2.02352941
        ],
        [
          0.575,
          2.02790698
        ],
        [
          0.5875,
          2.03218391
        ],
        [
          0.6,
          2.03636364
        ],
        [
          0.6125,
          2.04044944
        ],
        [
          0.625,
          2.04444444
        ],
        [
          0.6375,
          2.04835165
        ],
        [
          0.65,
          2.05217391
        ],
        [
          0.6625,
          2.05591398
        ],
        [
          0.675,
          2.05957447
        ],
        [
          0.6875,
          2.06315789
        ],
        [
          0.7,
          2.06666667
        ],
        [
          0.7125,
          2.07010309
        ],
        [
          0.725,
          2.07346939
        ],
        [
          0.7375,
          2.07676768
        ],
        [
          0.75,
          2.08
        ],
        [
          0.725,
          2.06666667
        ],
        [
          0.7,
          2.05217391
        ],
        [
          0.675,
          2.03636364
        ],
        [
          0.65,
          2.01904762
        ],
        [
          0.625,
          2.0
        ],
        [
          0.6,
          1.9
        ],
        [
          0.575,
          1.8
        ],
        [
          0.55,
          1.7
        ],
        [
          0.525,
          1.6
        ],
        [
          0.5,
          1.5
        ],
        [
          0.475,
          1.4
        ],
        [
          0.45,
          1.3
        ],
        [
          0.425,
          1.2
        ],
        [
          0.4,
          1.1
        ],
        [
          0.375,
          1.0
        ],
        [
          0.35,
          0.9
        ],
        [
          0.325,
          0.8
        ],
        [
          0.3,
          0.7
        ],
        [
          0.275,
          0.6
        ],
        [
          0.25,
          0.5
        ]
      ],
      "quantum": "$\\widetilde O(n^{1/4}/\\sqrt\\varepsilon)$",
      "classical": "$\\widetilde O(\\sqrt n/\\varepsilon^2)$",
      "parameter": "Scale max(n,1/epsilon); Boolean dimension n and distance epsilon",
      "model": "Membership queries",
      "note": "Relative growth of dimension and inverse distance gives the curve. These are the current membership-query bounds, with logarithmic factors suppressed only in position.",
      "noteHtml": "Relative growth of dimension and inverse distance gives the curve. These are the current membership-query bounds, with logarithmic factors suppressed only in position."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>O</mi><mi>&#x003B5;</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;lower&#x000A0;bound;&#x000A0;full-domain&#x000A0;acquisition&#x000A0;at&#x000A0;</mtext><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Boolean dimension n; fixed distance epsilon",
    "parameterHtml": "Boolean dimension n; fixed distance epsilon",
    "model": "Passive labeled examples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Testing classical properties from quantum data",
        "url": "https://drops.dagstuhl.de/storage/00lipics/lipics-vol362-itcs2026/html/LIPIcs.ITCS.2026.34/LIPIcs.ITCS.2026.34.html"
      }
    ],
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.23333333
        ],
        [
          0.05,
          3.23333333
        ],
        [
          0.05,
          3.9
        ],
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$O_\\varepsilon(1)$",
      "classical": "$\\Omega(2^{n/3})\\text{ lower bound; full-domain acquisition at }\\widetilde O(2^n)$",
      "parameter": "Boolean dimension n; fixed distance epsilon",
      "model": "Passive labeled examples",
      "note": "The classical interval shows the recorded exponential lower bound and full-domain example acquisition upper scale. The quantum bound holds at each fixed distance.",
      "noteHtml": "The classical interval shows the recorded exponential lower bound and full-domain example acquisition upper scale. The quantum bound holds at each fixed distance."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>k</mi><mo>&#x0002C;</mo><mi>n</mi><mo>&#x02212;</mo><mi>k</mi><mo stretchy=\"false\">&#x0007D;</mo><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;copies</mtext><mi>;</mi><mtext>&#x000A0;</mtext><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>k</mi><mo>&#x0002C;</mo><msqrt><mrow><mi>k</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x02212;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msqrt><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;with&#x000A0;reflections</mtext></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "The copy-only advantage is logarithmic in the favorable support regime. With the supplied reflection oracle, the strongest regime has polynomial query advantage; both models remain explicit above.",
    "gainText": "The copy-only advantage is logarithmic in the favorable support regime. With the supplied reflection oracle, the strongest regime has polynomial query advantage; both models remain explicit above.",
    "parameter": "Support size k < n; all complement sizes n-k. The linear endpoint also represents the copy-only leading powers.",
    "parameterHtml": "Support size k &lt; n; all complement sizes n-k. The linear endpoint also represents the copy-only leading powers.",
    "model": "Uniform-state copies, or supplied state reflections, versus independent uniform classical samples",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\Theta(k\\log(\\min\\{k,n-k\\}+1))\\text{ copies};\\ \\Theta(\\min\\{k,\\sqrt{k(n-k)}\\})\\text{ with reflections}$",
      "classical": "$\\Theta(k\\log k)$",
      "parameter": "Support size k < n; all complement sizes n-k. The linear endpoint also represents the copy-only leading powers.",
      "model": "Uniform-state copies, or supplied state reflections, versus independent uniform classical samples",
      "note": "The reflection-access branch varies with n-k and reaches the linear leading-power endpoint. In the copy-only branch, both leading powers are one; its logarithmic improvement remains explicit. The two quantum input-access models are distinguished in the formulas.",
      "noteHtml": "The reflection-access branch varies with n-k and reaches the linear leading-power endpoint. In the copy-only branch, both leading powers are one; its logarithmic improvement remains explicit. The two quantum input-access models are distinguished in the formulas."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Support size k and universe size n with k <= n/2; fixed exact-half predicate",
    "parameterHtml": "Support size k and universe size n with k &lt;= n/2; fixed exact-half predicate",
    "model": "Membership queries",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          1.0
        ],
        [
          0.25,
          1.0
        ],
        [
          0.25,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\Theta(k^{1/4})$",
      "classical": "$\\Omega(k\\log(n/k))$",
      "parameter": "Support size k and universe size n with k <= n/2; fixed exact-half predicate",
      "model": "Membership queries",
      "note": "The classical extent is an envelope: the recorded information bound is a lower bound, while general concept elimination and the symmetric predicate determine upper costs. The quantum fourth-root dependence is explicit.",
      "noteHtml": "The classical extent is an envelope: the recorded information bound is a lower bound, while general concept elimination and the symmetric predicate determine upper costs. The quantum fourth-root dependence is explicit."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(N,1/epsilon); distribution domain size N and distance epsilon",
    "parameterHtml": "Scale max(N,1/epsilon); distribution domain size N and distance epsilon",
    "model": "coherent sampler queries versus independent samples",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          2.0,
          2.0
        ],
        [
          2.00330579,
          2.00493827
        ],
        [
          2.00655738,
          2.0097561
        ],
        [
          2.0097561,
          2.01445783
        ],
        [
          2.01290323,
          2.01904762
        ],
        [
          2.016,
          2.02352941
        ],
        [
          2.01904762,
          2.02790698
        ],
        [
          2.02204724,
          2.03218391
        ],
        [
          2.025,
          2.03636364
        ],
        [
          2.02790698,
          2.04044944
        ],
        [
          2.03076923,
          2.04444444
        ],
        [
          2.03358779,
          2.04835165
        ],
        [
          2.03636364,
          2.05217391
        ],
        [
          2.03909774,
          2.05591398
        ],
        [
          2.04179104,
          2.05957447
        ],
        [
          2.04444444,
          2.06315789
        ],
        [
          2.04705882,
          2.06666667
        ],
        [
          2.04963504,
          2.07010309
        ],
        [
          2.05217391,
          2.07346939
        ],
        [
          2.05467626,
          2.07676768
        ],
        [
          2.05714286,
          2.08
        ],
        [
          2.04179104,
          2.06666667
        ],
        [
          2.025,
          2.05217391
        ],
        [
          2.00655738,
          2.03636364
        ],
        [
          1.93333333,
          2.01904762
        ],
        [
          1.83333333,
          2.0
        ],
        [
          1.73333333,
          1.9
        ],
        [
          1.63333333,
          1.8
        ],
        [
          1.53333333,
          1.7
        ],
        [
          1.43333333,
          1.6
        ],
        [
          1.33333333,
          1.5
        ],
        [
          1.23333333,
          1.4
        ],
        [
          1.13333333,
          1.3
        ],
        [
          1.03333333,
          1.2
        ],
        [
          0.93333333,
          1.1
        ],
        [
          0.83333333,
          1.0
        ],
        [
          0.73333333,
          0.9
        ],
        [
          0.63333333,
          0.8
        ],
        [
          0.53333333,
          0.7
        ],
        [
          0.43333333,
          0.6
        ],
        [
          0.33333333,
          0.5
        ]
      ],
      "quantum": "$O(N^{1/3}/\\varepsilon^2)$",
      "classical": "$\\Theta(\\sqrt N/\\varepsilon^2)$",
      "parameter": "Scale max(N,1/epsilon); distribution domain size N and distance epsilon",
      "model": "coherent sampler queries versus independent samples",
      "note": "Domain size and inverse distance both vary. The curve includes the shared accuracy dependence rather than fixing epsilon.",
      "noteHtml": "Domain size and inverse distance both vary. The curve includes the shared accuracy dependence rather than fixing epsilon."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>max</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>N</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><msqrt><mi>N</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(N,1/epsilon); support bound N and distance epsilon",
    "parameterHtml": "Scale max(N,1/epsilon); support bound N and distance epsilon",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1.0,
          2.0
        ],
        [
          1.025,
          2.00493827
        ],
        [
          1.05,
          2.0097561
        ],
        [
          1.075,
          2.01445783
        ],
        [
          1.1,
          2.01904762
        ],
        [
          1.125,
          2.02352941
        ],
        [
          1.15,
          2.02790698
        ],
        [
          1.175,
          2.03218391
        ],
        [
          1.2,
          2.03636364
        ],
        [
          1.225,
          2.04044944
        ],
        [
          1.25,
          2.04444444
        ],
        [
          1.275,
          2.04835165
        ],
        [
          1.3,
          2.05217391
        ],
        [
          1.325,
          2.05591398
        ],
        [
          1.35,
          2.05957447
        ],
        [
          1.375,
          2.06315789
        ],
        [
          1.4,
          2.06666667
        ],
        [
          1.425,
          2.07010309
        ],
        [
          1.45,
          2.07346939
        ],
        [
          1.475,
          2.07676768
        ],
        [
          1.5,
          2.08
        ],
        [
          1.45,
          2.06666667
        ],
        [
          1.4,
          2.05217391
        ],
        [
          1.35,
          2.03636364
        ],
        [
          1.3,
          2.01904762
        ],
        [
          1.25,
          2.0
        ],
        [
          1.2,
          1.9
        ],
        [
          1.15,
          1.8
        ],
        [
          1.1,
          1.7
        ],
        [
          1.05,
          1.6
        ],
        [
          1.0,
          1.5
        ],
        [
          0.95,
          1.4
        ],
        [
          0.9,
          1.3
        ],
        [
          0.85,
          1.2
        ],
        [
          0.8,
          1.1
        ],
        [
          0.75,
          1.0
        ],
        [
          0.7,
          0.93333333
        ],
        [
          0.65,
          0.86666667
        ],
        [
          0.6,
          0.8
        ],
        [
          0.55,
          0.73333333
        ],
        [
          0.5,
          0.66666667
        ]
      ],
      "quantum": "$O(\\sqrt N/\\varepsilon)$",
      "classical": "$\\Theta(\\max\\{N^{2/3}/\\varepsilon^{4/3},\\sqrt N/\\varepsilon^2\\})$",
      "parameter": "Scale max(N,1/epsilon); support bound N and distance epsilon",
      "model": "purified preparation queries versus independent samples",
      "note": "The curve uses the maximum of the two classical terms as support size and inverse distance vary.",
      "noteHtml": "The curve uses the maximum of the two classical terms as support size and inverse distance vary."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>m</mi></mrow></msqrt><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>max</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><msqrt><mrow><mi>n</mi><mi>m</mi></mrow></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(n,m,1/epsilon); alphabet sizes n >= m and distance epsilon",
    "parameterHtml": "Scale max(n,m,1/epsilon); alphabet sizes n &gt;= m and distance epsilon",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.5,
          0.66666667
        ],
        [
          0.55,
          0.7
        ],
        [
          0.6,
          0.73333333
        ],
        [
          0.9,
          0.93333333
        ],
        [
          1.0,
          1.0
        ],
        [
          2.0,
          2.13333333
        ],
        [
          1.95,
          2.12881356
        ],
        [
          1.9,
          2.12413793
        ],
        [
          1.85,
          2.11929825
        ],
        [
          1.8,
          2.11428571
        ],
        [
          1.75,
          2.10909091
        ],
        [
          1.7,
          2.1037037
        ],
        [
          1.65,
          2.09811321
        ],
        [
          1.6,
          2.09230769
        ],
        [
          1.55,
          2.08627451
        ],
        [
          1.5,
          2.08
        ],
        [
          1.45,
          2.07346939
        ],
        [
          1.4,
          2.06666667
        ],
        [
          1.35,
          2.05957447
        ],
        [
          1.3,
          2.05217391
        ],
        [
          1.25,
          2.04444444
        ],
        [
          1.2,
          2.03636364
        ],
        [
          1.15,
          2.02790698
        ],
        [
          1.1,
          2.01904762
        ],
        [
          1.05,
          2.0097561
        ],
        [
          1.0,
          2.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt{nm}/\\varepsilon)$",
      "classical": "$\\Theta(\\max\\{n^{2/3}m^{1/3}/\\varepsilon^{4/3},\\sqrt{nm}/\\varepsilon^2\\})$",
      "parameter": "Scale max(n,m,1/epsilon); alphabet sizes n >= m and distance epsilon",
      "model": "purified preparation queries versus independent samples",
      "note": "Envelope over both alphabet sizes and inverse accuracy, retaining the maximum in the classical bound. The boundary is a hull of the correlated leading-power family.",
      "noteHtml": "Envelope over both alphabet sizes and inverse accuracy, retaining the maximum in the classical bound. The boundary is a hull of the correlated leading-power family."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mi>k</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mi>k</mi></msup><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Dimension n, fixed k and distance epsilon; powers are related by the square in the displayed formulas",
    "parameterHtml": "Dimension n, fixed k and distance epsilon; powers are related by the square in the displayed formulas",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.75,
          1.5
        ],
        [
          1.0,
          2.0
        ],
        [
          1.5,
          2.13333333
        ],
        [
          2.0,
          2.2
        ],
        [
          2.13333333,
          2.26666667
        ],
        [
          2.2,
          2.3
        ],
        [
          2.3,
          2.35
        ],
        [
          2.35,
          2.375
        ],
        [
          2.3875,
          2.39375
        ],
        [
          2.39992,
          2.39996
        ]
      ],
      "quantum": "$O(n^{k/2}/\\varepsilon)$",
      "classical": "$O(n^k/\\varepsilon^2)$",
      "parameter": "Dimension n, fixed k and distance epsilon; powers are related by the square in the displayed formulas",
      "model": "purified preparation queries versus classical samples",
      "note": "The quantum and classical leading powers vary together with k and inverse accuracy; the recorded classical expression is an upper bound.",
      "noteHtml": "The quantum and classical leading powers vary together with k and inverse accuracy; the recorded classical expression is an upper bound."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B5;</mi><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><msup><mi>log</mi><mn>2</mn></msup><mi>N</mi><mo>&#x0002F;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(N,1/epsilon); support bound N and additive accuracy epsilon",
    "parameterHtml": "Scale max(N,1/epsilon); support bound N and additive accuracy epsilon",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1.5,
          2.0
        ],
        [
          1.525,
          2.0
        ],
        [
          1.55,
          2.0
        ],
        [
          1.575,
          2.0
        ],
        [
          1.6,
          2.0
        ],
        [
          1.625,
          2.0
        ],
        [
          1.65,
          2.0
        ],
        [
          1.675,
          2.0
        ],
        [
          1.7,
          2.0
        ],
        [
          1.725,
          2.0
        ],
        [
          1.75,
          2.0
        ],
        [
          1.775,
          2.0
        ],
        [
          1.8,
          2.0
        ],
        [
          1.825,
          2.0
        ],
        [
          1.85,
          2.0
        ],
        [
          1.875,
          2.0
        ],
        [
          1.9,
          2.0
        ],
        [
          1.925,
          2.0
        ],
        [
          1.95,
          2.0
        ],
        [
          1.975,
          2.0
        ],
        [
          2.0,
          2.0
        ],
        [
          1.925,
          1.95
        ],
        [
          1.85,
          1.9
        ],
        [
          1.775,
          1.85
        ],
        [
          1.7,
          1.8
        ],
        [
          1.625,
          1.75
        ],
        [
          1.55,
          1.7
        ],
        [
          1.475,
          1.65
        ],
        [
          1.4,
          1.6
        ],
        [
          1.325,
          1.55
        ],
        [
          1.25,
          1.5
        ],
        [
          1.175,
          1.45
        ],
        [
          1.1,
          1.4
        ],
        [
          1.025,
          1.35
        ],
        [
          0.95,
          1.3
        ],
        [
          0.875,
          1.25
        ],
        [
          0.8,
          1.2
        ],
        [
          0.725,
          1.15
        ],
        [
          0.65,
          1.1
        ],
        [
          0.575,
          1.05
        ],
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt N/\\varepsilon^{3/2})$",
      "classical": "$\\Theta(N/(\\varepsilon\\log N)+\\log^2N/\\varepsilon^2)$",
      "parameter": "Scale max(N,1/epsilon); support bound N and additive accuracy epsilon",
      "model": "purified sample preparation versus independent samples",
      "note": "The curve compares purified-access queries with classical samples while support and inverse accuracy vary. The alternative probability-oracle bound remains separately identified in the entry.",
      "noteHtml": "The curve compares purified-access queries with classical samples while support and inverse accuracy vary. The alternative probability-oracle bound remains separately identified in the entry."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas.",
      "noteHtml": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
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
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas.",
      "noteHtml": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
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
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas.",
      "noteHtml": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
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
      "note": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas.",
      "noteHtml": "Matched dense-matrix query comparison. The entry also states array-input bounds; polylogarithmic factors are retained in its formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msqrt><mrow><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for bipartite graphs; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msqrt><mi>m</mi></msqrt><mo>&#x0002B;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for general graphs, Ambainis–Špalek.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> for bipartite graphs, almost-linear maximum flow; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>9</mn><mo>&#x0002F;</mo><mn>4</mn><mo>&#x0002B;</mo><mi>&#x003B5;</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span> for general graphs.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: vertices; n≤m≤n²: edges",
    "parameterHtml": "n: vertices; n≤m≤n²: edges",
    "model": "Quantum time with coherent adjacency access / classical time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.5,
          1.0
        ],
        [
          2.0,
          1.5
        ],
        [
          2.08,
          2.04444444
        ],
        [
          2.06315789,
          2.04444444
        ],
        [
          2.0,
          2.0
        ],
        [
          1.985,
          1.97
        ],
        [
          1.505,
          1.01
        ]
      ],
      "quantum": "$\\widetilde O(n\\sqrt{m+n})$ for bipartite graphs; $\\widetilde O(n^{3/2}\\sqrt m+n^2)$ for general graphs, Ambainis--\\v Spalek.",
      "classical": "$m^{1+o(1)}$ for bipartite graphs, almost-linear maximum flow; $\\min\\{O(m\\sqrt n),O(n^{9/4+\\varepsilon})\\}$ for general graphs.",
      "parameter": "n: vertices; n≤m≤n²: edges",
      "model": "Quantum time with coherent adjacency access / classical time",
      "note": "Envelope of the bipartite curve (n√m,m) and general-graph curve (n^(3/2)√m+n²,min(m√n,n^(9/4+ε))). Both are evaluated over the same edge-density range; ε may be arbitrarily small. The filled envelope includes both branches, not an assertion that every interior point is a separate algorithm.",
      "noteHtml": "Envelope of the bipartite curve (n√m,m) and general-graph curve (n^(3/2)√m+n²,min(m√n,n^(9/4+ε))). Both are evaluated over the same edge-density range; ε may be arbitrarily small. The filled envelope includes both branches, not an assertion that every interior point is a separate algorithm."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>n</mi><mrow><mn>7</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><msqrt><mi>m</mi></msqrt><mspace width=\"0.167em\" /><msup><mi>U</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002C;</mo><mi>m</mi><msqrt><mrow><mi>n</mi><mi>U</mi></mrow></msqrt><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, Ambainis–Špalek.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>m</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>, Chen–Kyng–Liu–Peng–Probst Gutenberg–Sachdeva and deterministic van den Brand et al.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: vertices; n≤m≤n²; 1≤U≤n^(1/4)",
    "parameterHtml": "n: vertices; n≤m≤n²; 1≤U≤n^(1/4)",
    "model": "Quantum coherent-graph time / classical RAM time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.5,
          1.0
        ],
        [
          1.625,
          1.0
        ],
        [
          1.875,
          1.25
        ],
        [
          1.9,
          1.3
        ],
        [
          1.97916667,
          1.45833333
        ],
        [
          2.0,
          1.5
        ],
        [
          2.0008316,
          1.50833333
        ],
        [
          2.00165975,
          1.51666667
        ],
        [
          2.00248447,
          1.525
        ],
        [
          2.00330579,
          1.53333333
        ],
        [
          2.00412371,
          1.54166667
        ],
        [
          2.00493827,
          1.55
        ],
        [
          2.00574949,
          1.55833333
        ],
        [
          2.00655738,
          1.56666667
        ],
        [
          2.00736196,
          1.575
        ],
        [
          2.00816327,
          1.58333333
        ],
        [
          2.0089613,
          1.59166667
        ],
        [
          2.0097561,
          1.6
        ],
        [
          2.01054767,
          1.60833333
        ],
        [
          2.01133603,
          1.61666667
        ],
        [
          2.01212121,
          1.625
        ],
        [
          2.01290323,
          1.63333333
        ],
        [
          2.01368209,
          1.64166667
        ],
        [
          2.01445783,
          1.65
        ],
        [
          2.01523046,
          1.65833333
        ],
        [
          2.016,
          1.66666667
        ],
        [
          2.01676647,
          1.675
        ],
        [
          2.01752988,
          1.68333333
        ],
        [
          2.01829026,
          1.69166667
        ],
        [
          2.01904762,
          1.7
        ],
        [
          2.01980198,
          1.70833333
        ],
        [
          2.02055336,
          1.71666667
        ],
        [
          2.02130178,
          1.725
        ],
        [
          2.02204724,
          1.73333333
        ],
        [
          2.02278978,
          1.74166667
        ],
        [
          2.02352941,
          1.75
        ],
        [
          2.02426614,
          1.75833333
        ],
        [
          2.025,
          1.76666667
        ],
        [
          2.02573099,
          1.775
        ],
        [
          2.02645914,
          1.78333333
        ],
        [
          2.02718447,
          1.79166667
        ],
        [
          2.02790698,
          1.8
        ],
        [
          2.02862669,
          1.80833333
        ],
        [
          2.02934363,
          1.81666667
        ],
        [
          2.0300578,
          1.825
        ],
        [
          2.03076923,
          1.83333333
        ],
        [
          2.03147793,
          1.84166667
        ],
        [
          2.03218391,
          1.85
        ],
        [
          2.03288719,
          1.85833333
        ],
        [
          2.03358779,
          1.86666667
        ],
        [
          2.03428571,
          1.875
        ],
        [
          2.03498099,
          1.88333333
        ],
        [
          2.03567362,
          1.89166667
        ],
        [
          2.03636364,
          1.9
        ],
        [
          2.03705104,
          1.90833333
        ],
        [
          2.03773585,
          1.91666667
        ],
        [
          2.03841808,
          1.925
        ],
        [
          2.03909774,
          1.93333333
        ],
        [
          2.03977486,
          1.94166667
        ],
        [
          2.04044944,
          1.95
        ],
        [
          2.0411215,
          1.95833333
        ],
        [
          2.04179104,
          1.96666667
        ],
        [
          2.0424581,
          1.975
        ],
        [
          2.04312268,
          1.98333333
        ],
        [
          2.04378479,
          1.99166667
        ],
        [
          2.04444444,
          2.0
        ],
        [
          2.03076923,
          2.0
        ]
      ],
      "quantum": "$\\widetilde O(\\min\\{n^{7/6}\\sqrt m\\,U^{1/3},m\\sqrt{nU}\\})$, Ambainis--\\v Spalek.",
      "classical": "$m^{1+o(1)}$, Chen--Kyng--Liu--Peng--Probst Gutenberg--Sachdeva and deterministic van den Brand et al.",
      "parameter": "n: vertices; n≤m≤n²; 1≤U≤n^(1/4)",
      "model": "Quantum coherent-graph time / classical RAM time",
      "note": "Envelope obtained by varying m=n^a and U=n^u over1≤a≤2,0≤u≤1/4 in the stated min bound. The classical curve is m^(1+o(1)); it is not replaced by the quantum bound.",
      "noteHtml": "Envelope obtained by varying m=n^a and U=n^u over1≤a≤2,0≤u≤1/4 in the stated min bound. The classical curve is m^(1+o(1)); it is not replaced by the quantum bound."
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
      "note": "Query comparison; arithmetic-time triangle algorithms are distinct.",
      "noteHtml": "Query comparison; arithmetic-time triangle algorithms are distinct."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mi>n</mi><mrow><mn>11</mn><mo>&#x0002F;</mo><mn>17</mn></mrow></msup><mo>&#x0002C;</mo><msqrt><mi>n</mi></msqrt><mspace width=\"0.167em\" /><mi>&#x003B1;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>G</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial: <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>11</mn><mo>&#x0002F;</mo><mn>17</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> in the worst case. The algorithms use quantum search, quantum walks and graph structure.",
    "gainText": "Polynomial: $n\\to\\widetilde O(n^{11/17})$ in the worst case. The algorithms use quantum search, quantum walks and graph structure.",
    "parameter": "n: vertices; α(G): independence number",
    "parameterHtml": "n: vertices; α(G): independence number",
    "model": "Vertex-mark queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          0.5,
          1
        ],
        [
          0.64705882,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\min\\{n^{11/17},\\sqrt n\\,\\alpha(G)^{1/6}\\})$",
      "classical": "$\\Theta(n)$",
      "parameter": "n: vertices; α(G): independence number",
      "model": "Vertex-mark queries",
      "note": "The range covers min(n^(11/17),√n α(G)^(1/6)); α(G) varies across the graph family.",
      "noteHtml": "The range covers min(n^(11/17),√n α(G)^(1/6)); α(G) varies across the graph family."
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
      "note": "The input model fixes degree and distance; polylogarithmic factors are suppressed.",
      "noteHtml": "The input model fixes degree and distance; polylogarithmic factors are suppressed."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo>&#x0002F;</mo><mi>&#x003A6;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>n</mi></msqrt><mo>&#x0002F;</mo><msup><mi>&#x003A6;</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, and quadratic improvement in the walk-time dependence <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003A6;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003A6;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></span>. The mechanism is quantum fast-forwarding and amplitude estimation.",
    "gainText": "Polynomial in $n$, and quadratic improvement in the walk-time dependence $\\Phi^{-2}\\to\\Phi^{-1}$. The mechanism is quantum fast-forwarding and amplitude estimation.",
    "parameter": "n: vertices; Φ: expansion threshold",
    "parameterHtml": "n: vertices; Φ: expansion threshold",
    "model": "Graph-oracle operations",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.33333333,
          0.5
        ],
        [
          0.43333333,
          0.7
        ],
        [
          0.58333333,
          1.0
        ],
        [
          0.83333333,
          1.5
        ],
        [
          1.33333333,
          2.08
        ],
        [
          2.05714286,
          2.22222222
        ],
        [
          2.25,
          2.32380952
        ],
        [
          2.36065574,
          2.38024691
        ],
        [
          2.39920027,
          2.3996001
        ]
      ],
      "quantum": "$\\widetilde O(n^{1/3}/\\Phi)$",
      "classical": "$\\widetilde O(\\sqrt n/\\Phi^2)$",
      "parameter": "n: vertices; Φ: expansion threshold",
      "model": "Graph-oracle operations",
      "note": "The curve parameterizes Φ=n^(−a), a≥0, while retaining the full Φ dependence. Its endpoint denotes unbounded polynomial degree, not a chosen exponent.",
      "noteHtml": "The curve parameterizes Φ=n^(−a), a≥0, while retaining the full Φ dependence. Its endpoint denotes unbounded polynomial degree, not a chosen exponent."
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
      "note": "Balanced binary formulas give the matched classical bound.",
      "noteHtml": "Balanced binary formulas give the matched classical bound."
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
      "note": "Matching input-entry query model.",
      "noteHtml": "Matching input-entry query model."
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
      "note": "Query comparison; arithmetic-time product algorithms are separate.",
      "noteHtml": "Query comparison; arithmetic-time product algorithms are separate."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msqrt><mi>d</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial oracle speedup, including <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span> for the unrestricted path-length regime. The mechanism is a span program and quantum reflections.",
    "gainText": "Polynomial oracle speedup, including $n^2\\to n^{3/2}$ for the unrestricted path-length regime. The mechanism is a span program and quantum reflections.",
    "parameter": "n: vertices; 1≤d≤n: promised path length",
    "parameterHtml": "n: vertices; 1≤d≤n: promised path length",
    "model": "Adjacency-matrix queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1,
          2
        ],
        [
          1.5,
          2
        ]
      ],
      "quantum": "$O(n\\sqrt d)$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: vertices; 1≤d≤n: promised path length",
      "model": "Adjacency-matrix queries",
      "note": "The full path-length range d=n^a, 0≤a≤1, yields exponents 1+a/2 versus 2.",
      "noteHtml": "The full path-length range d=n^a, 0≤a≤1, yields exponents 1+a/2 versus 2."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msqrt><mi>&#x003C4;</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial oracle improvement; for bounded weight ratio and dense graphs it is <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>&#x02192;</mo><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>.",
    "gainText": "Polynomial oracle improvement; for bounded weight ratio and dense graphs it is $n^2\\to\\widetilde O(n^{3/2})$.",
    "parameter": "n: vertices; τ: minimum cut value, 1≤τ≤n in unweighted graphs",
    "parameterHtml": "n: vertices; τ: minimum cut value, 1≤τ≤n in unweighted graphs",
    "model": "Adjacency-matrix queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1.5,
          2
        ],
        [
          2,
          2
        ]
      ],
      "quantum": "$\\widetilde O(n^{3/2}\\sqrt\\tau)$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "n: vertices; τ: minimum cut value, 1≤τ≤n in unweighted graphs",
      "model": "Adjacency-matrix queries",
      "note": "The segment retains τ dependence for the matrix model. Classical explicit-edge time uses a different input representation.",
      "noteHtml": "The segment retains τ dependence for the matrix model. Classical explicit-edge time uses a different input representation."
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
      "note": "QAOA supplies per-sample and optimization-loop costs, but no general depth/iteration/shot bound attaining the same approximation guarantee as the classical algorithm.",
      "noteHtml": "QAOA supplies per-sample and optimization-loop costs, but no general depth/iteration/shot bound attaining the same approximation guarantee as the classical algorithm."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "N=n+m: explicit constraint-list size; D: occurrence bound",
    "parameterHtml": "N=n+m: explicit constraint-list size; D: occurrence bound",
    "model": "Quantum gates / classical running time for the stated expected approximation guarantee",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1,
          0.05
        ],
        [
          1,
          2.4
        ]
      ],
      "quantum": "$O(m+n)$",
      "classical": "$\\operatorname{poly}(m,n)$",
      "parameter": "N=n+m: explicit constraint-list size; D: occurrence bound",
      "model": "Quantum gates / classical running time for the stated expected approximation guarantee",
      "note": "The p=1 circuit gives the proved expected objective guarantee; the classical polynomial-time algorithm attains a stronger approximation. Its polynomial degree is not specified in the catalogue.",
      "noteHtml": "The p=1 circuit gives the proved expected objective guarantee; the classical polynomial-time algorithm attains a stronger approximation. Its polynomial degree is not specified in the catalogue."
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
      "note": "Quantum time is expressed through evolution time t and measured success probability p; neither is bounded as a function of input size for the same exact-output target as the classical separator algorithm.",
      "noteHtml": "Quantum time is expressed through evolution time t and measured success probability p; neither is bounded as a function of input size for the same exact-output target as the classical separator algorithm."
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
      "note": "The p-dependent QAOA cost is per sample; the catalogue does not specify p and repetition/optimization costs attaining the classical εn-near-optimum guarantee.",
      "noteHtml": "The p-dependent QAOA cost is per sample; the catalogue does not specify p and repetition/optimization costs attaining the classical εn-near-optimum guarantee."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mn>2</mn><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><msub><mi>c</mi><mrow><mi mathvariant=\"normal\">c</mi><mi mathvariant=\"normal\">l</mi></mrow></msub><mo stretchy=\"false\">&#x00029;</mo><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><msub><mi>O</mi><mi>k</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>N</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: spins; m: terms; b: coefficient bits; c_cl: density-promise exponent",
    "parameterHtml": "n: spins; m: terms; b: coefficient bits; c_cl: density-promise exponent",
    "model": "Quantum gates / classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          2.9,
          2.86
        ],
        [
          3.4,
          2.86
        ],
        [
          3.4,
          3.9
        ],
        [
          2.9,
          2.9
        ]
      ],
      "quantum": "$2^{(1-c_{\\rm cl})n/2+o(n)}$",
      "classical": "$\\min\\{2^{(1-c_{\\rm cl})n+o(n)},\\operatorname{poly}(N)2^{O_k(N/\\sqrt{\\log N})}\\}$",
      "parameter": "n: spins; m: terms; b: coefficient bits; c_cl: density-promise exponent",
      "model": "Quantum gates / classical bit operations",
      "note": "Envelope across the density promise and input encoding: the comparator is the minimum of density-promise search and exact counting with N=O_k(n+mb). The latter can lie in the near-linear subexponential class or exceed direct search, depending on representation size.",
      "noteHtml": "Envelope across the density promise and input encoding: the comparator is the minimum of density-promise search and exact counting with N=O_k(n+mb). The latter can lie in the near-linear subexponential class or exceed direct search, depending on representation size."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x0007C;</mo><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003B5;</mi><msqrt><mi>&#x003B4;</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003B5;</mi><mn>2</mn></msup><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement for the stated sampling model, including <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math></span> and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x02192;</mo><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup></mrow></math></span>. Quantum amplitude estimation and quantum walks supply these factors.",
    "gainText": "Polynomial improvement for the stated sampling model, including $\\varepsilon^{-2}\\to\\varepsilon^{-1}$ and $\\delta^{-1}\\to\\delta^{-1/2}$. Quantum amplitude estimation and quantum walks supply these factors.",
    "parameter": "S=(log|Ω|)/(ε²δ): classical-work scale, not input length; N=log|Ω|",
    "parameterHtml": "S=(log|Ω|)/(ε²δ): classical-work scale, not input length; N=log|Ω|",
    "model": "Coherent walk operations / classical transition operations",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1
        ],
        [
          0.75,
          1
        ]
      ],
      "quantum": "$\\widetilde O((\\log|\\Omega|)^{3/4}/(\\varepsilon\\sqrt\\delta))$",
      "classical": "$\\widetilde O(\\log|\\Omega|/(\\varepsilon^2\\delta))$",
      "parameter": "S=(log|Ω|)/(ε²δ): classical-work scale, not input length; N=log|Ω|",
      "model": "Coherent walk operations / classical transition operations",
      "note": "In the common classical-work scale S, the quantum cost is N^(1/4)√S. Since1≤N≤S, its power in S ranges from1/2 to3/4. This covers arbitrary accuracy/gap dependence, including exponentially small gaps; the original multivariate formulas remain explicit.",
      "noteHtml": "In the common classical-work scale S, the quantum cost is N^(1/4)√S. Since1≤N≤S, its power in S ranges from1/2 to3/4. This covers arbitrary accuracy/gap dependence, including exponentially small gaps; the original multivariate formulas remain explicit."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>h</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mtext>&#x000A0;</mtext><mtext>queries&#x000A0;required;&#x000A0;exponential&#x000A0;exploration&#x000A0;suffices</mtext></mrow></math></span>",
    "gain": "Exponential to polynomial, through continuous-time quantum transport and interference.",
    "gainText": "Exponential to polynomial, through continuous-time quantum transport and interference.",
    "parameter": "h: height of each welded tree",
    "parameterHtml": "h: height of each welded tree",
    "model": "Oracle queries; quantum gates are polynomial in h",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          2.4,
          2.9
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(h)$",
      "classical": "$2^{\\Omega(h)}\\ \\text{queries required; exponential exploration suffices}$",
      "parameter": "h: height of each welded tree",
      "model": "Oracle queries; quantum gates are polynomial in h",
      "note": "Polynomial quantum degree and the classical exponential constants are unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents.",
      "noteHtml": "Polynomial quantum degree and the classical exponential constants are unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><msqrt><mi>&#x003B4;</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>L</mi><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Quadratic improvement in inverse spectral gap for the specified chain sequence, from quantum-walk phase detection and state transformations. An exponentially small gap gives an improvement in the exponential constant of that chain-based bound.",
    "gainText": "Quadratic improvement in inverse spectral gap for the specified chain sequence, from quantum-walk phase detection and state transformations. An exponentially small gap gives an improvement in the exponential constant of that chain-based bound.",
    "parameter": "S=L/δ: classical-work scale, not input length; L: schedule length; δ: spectral gap",
    "parameterHtml": "S=L/δ: classical-work scale, not input length; L: schedule length; δ: spectral gap",
    "model": "Coherent walk steps / classical transition steps",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1
        ],
        [
          1,
          1
        ]
      ],
      "quantum": "$\\widetilde O(L/\\sqrt\\delta)$",
      "classical": "$\\widetilde O(L/\\delta)$",
      "parameter": "S=L/δ: classical-work scale, not input length; L: schedule length; δ: spectral gap",
      "model": "Coherent walk steps / classical transition steps",
      "note": "In the common classical-work scale S, the quantum cost is √(LS). Since1≤L≤S, its power in S ranges from1/2 to1. The full gap range, including exponentially small δ, is represented without fixing δ as a polynomial in L.",
      "noteHtml": "In the common classical-work scale S, the quantum cost is √(LS). Since1≤L≤S, its power in S ranges from1/2 to1. The full gap range, including exponentially small δ, is represented without fixing δ as a polynomial in L."
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
      "note": "Leading polynomial powers in the recorded APSP algorithms; polylogarithms are suppressed.",
      "noteHtml": "Leading polynomial powers in the recorded APSP algorithms; polylogarithms are suppressed."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mtext>for&#x000A0;the&#x000A0;studied&#x000A0;interpolation-repetition&#x000A0;comparator</mtext></mrow></math></span>",
    "gain": "Candidate exponential-to-polynomial advantage for the explicit random-instance approximation target; a superpolynomial query separation for the folded oracle family. The mechanism is decoded Fourier interference.",
    "gainText": "Candidate exponential-to-polynomial advantage for the explicit random-instance approximation target; a superpolynomial query separation for the folded oracle family. The mechanism is decoded Fourier interference.",
    "parameter": "p: field size; n: degree bound; balanced OPI with constant n/p",
    "parameterHtml": "p: field size; n: degree bound; balanced OPI with constant n/p",
    "model": "Quantum gates / classical operations for the same DQI score target",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          2.4,
          2.9
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(p)$",
      "classical": "$\\exp(O(p))\\ \\text{for the studied interpolation-repetition comparator}$",
      "parameter": "p: field size; n: degree bound; balanced OPI with constant n/p",
      "model": "Quantum gates / classical operations for the same DQI score target",
      "note": "The explicit balanced OPI regime compares polynomial-time DQI with exponential interpolation repetition to reach its score. Degree and exponential-rate constants are not given. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents.",
      "noteHtml": "The explicit balanced OPI regime compares polynomial-time DQI with exponential interpolation repetition to reach its score. Degree and exponential-rate constants are not given. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents."
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
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator.",
      "noteHtml": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
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
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator.",
      "noteHtml": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
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
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator.",
      "noteHtml": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
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
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator.",
      "noteHtml": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
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
      "note": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator.",
      "noteHtml": "The variational circuit cost depends on optimization iterations, depth and shots. The entry does not bound those resources to attain the same solution quality or exact optimum as its classical comparator."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mi>k</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.66666667,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.8,
          1.0
        ],
        [
          0.83333333,
          1.0
        ],
        [
          0.85714286,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          0.88888889,
          1.0
        ],
        [
          0.9,
          1.0
        ],
        [
          0.90909091,
          1.0
        ],
        [
          0.91666667,
          1.0
        ],
        [
          0.92307692,
          1.0
        ],
        [
          0.92857143,
          1.0
        ],
        [
          0.93333333,
          1.0
        ],
        [
          0.9375,
          1.0
        ],
        [
          0.94117647,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$O(n^{k/(k+1)})$",
      "classical": "$\\Theta(n)$",
      "parameter": "n items; constant k; sufficiently large group",
      "model": "indexed queries",
      "note": "The curve joins the fixed-integer-k family and its limiting exponent; each point compares input queries.",
      "noteHtml": "The curve joins the fixed-integer-k family and its limiting exponent; each point compares input queries."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>n</mi><mo>&#x0002C;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mi>log</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>n</mi><mo>&#x0002C;</mo><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Input length n and inverse rank tolerance 1/epsilon; horizontal and vertical powers are relative to n",
    "parameterHtml": "Input length n and inverse rank tolerance 1/epsilon; horizontal and vertical powers are relative to n",
    "model": "input queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "The quantum query complexity of approximating the median and related statistics",
        "url": "https://arxiv.org/abs/quant-ph/9804066"
      }
    ],
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          0.125,
          0.25
        ],
        [
          0.25,
          0.5
        ],
        [
          0.375,
          0.75
        ],
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$O(\\min\\{n,\\varepsilon^{-1}\\log(1/\\varepsilon)\\log\\log(1/\\varepsilon)\\})$",
      "classical": "$\\Theta(\\min\\{n,\\varepsilon^{-2}\\})$",
      "parameter": "Input length n and inverse rank tolerance 1/epsilon; horizontal and vertical powers are relative to n",
      "model": "input queries",
      "note": "As inverse rank tolerance grows relative to input length, both bounds saturate at reading the input. The origin denotes bounded or subpolynomial cost.",
      "noteHtml": "As inverse rank tolerance grows relative to input length, both bounds saturate at reading the input. The origin denotes bounded or subpolynomial cost."
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
      "note": "The sum of square roots has order sqrt(n+m), uniformly over both lengths, up to logarithmic factors.",
      "noteHtml": "The sum of square roots has order sqrt(n+m), uniformly over both lengths, up to logarithmic factors."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>m</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>d</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>d</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msqrt><mrow><mi>log</mi><mi>m</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>m</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mi>d</mi></msup><mo>&#x0002B;</mo><msup><mi>n</mi><mrow><mi>d</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to subexponential in the strongest stated regime; the general parameter dependence is retained above.",
    "gainText": "Exponential to subexponential in the strongest stated regime; the general parameter dependence is retained above.",
    "parameter": "Common size d log_2 n; fixed dimension d and all pattern side lengths 1 <= m <= n",
    "parameterHtml": "Common size d log_2 n; fixed dimension d and all pattern side lengths 1 &lt;= m &lt;= n",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          3.4,
          3.9
        ],
        [
          3.35,
          3.8
        ],
        [
          3.3,
          3.7
        ],
        [
          3.25,
          3.6
        ],
        [
          3.2,
          3.5
        ],
        [
          3.15,
          3.4
        ],
        [
          3.1,
          3.4
        ],
        [
          3.05,
          3.4
        ],
        [
          3.0,
          3.4
        ],
        [
          2.95,
          3.4
        ],
        [
          2.925,
          3.4
        ],
        [
          2.905,
          3.4
        ],
        [
          2.9,
          3.4
        ],
        [
          2.8,
          3.4
        ],
        [
          2.7,
          3.4
        ]
      ],
      "quantum": "$\\widetilde O((n/m)^{d/2}2^{O(d^{3/2}\\sqrt{\\log m})})$",
      "classical": "$\\widetilde\\Theta((n/m)^d+n^{d/2})$",
      "parameter": "Common size d log_2 n; fixed dimension d and all pattern side lengths 1 <= m <= n",
      "model": "random-input oracle time",
      "note": "As pattern side length ranges from constant to comparable with text side length, the quantum exponential search factor decreases to the subexponential hidden-shift term. Intermediate approaches to comparable lengths fill the adjoining subexponential range.",
      "noteHtml": "As pattern side length ranges from constant to comparable with text side length, the quantum exponential search factor decreases to the subexponential hidden-shift term. Intermediate approaches to comparable lengths fill the adjoining subexponential range."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>u</mi><mo>&#x0002B;</mo><msqrt><mi>n</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Permutation length n and Ulam distance 1 <= u <= n",
    "parameterHtml": "Permutation length n and Ulam distance 1 &lt;= u &lt;= n",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.5,
          0.75
        ],
        [
          0.5,
          0.5
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt n)$",
      "classical": "$\\widetilde O(n/u+\\sqrt n)$",
      "parameter": "Permutation length n and Ulam distance 1 <= u <= n",
      "model": "random-access time; fixed approximation error",
      "note": "For 1 <= u <= n, the classical power decreases from 1 to 1/2 while the quantum power remains 1/2.",
      "noteHtml": "For 1 &lt;= u &lt;= n, the classical power decreases from 1 to 1/2 while the quantum power remains 1/2."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n and threshold 1 <= k <= n; pattern length is at most the text length",
    "parameterHtml": "String length n and threshold 1 &lt;= k &lt;= n; pattern length is at most the text length",
    "model": "Character queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt{nk})$",
      "classical": "$\\Theta(n)$",
      "parameter": "String length n and threshold 1 <= k <= n; pattern length is at most the text length",
      "model": "Character queries",
      "note": "The distance or mismatch threshold ranges from constant to linear in n. This curve compares character queries; the separate processing-time formulas remain in the problem page.",
      "noteHtml": "The distance or mismatch threshold ranges from constant to linear in n. This curve compares character queries; the separate processing-time formulas remain in the problem page."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n and threshold 1 <= k <= n; pattern length is at most the text length",
    "parameterHtml": "String length n and threshold 1 &lt;= k &lt;= n; pattern length is at most the text length",
    "model": "Character queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\widehat O(\\sqrt{nk})$",
      "classical": "$\\Theta(n)$",
      "parameter": "String length n and threshold 1 <= k <= n; pattern length is at most the text length",
      "model": "Character queries",
      "note": "The distance or mismatch threshold ranges from constant to linear in n. This curve compares character queries; the separate processing-time formulas remain in the problem page.",
      "noteHtml": "The distance or mismatch threshold ranges from constant to linear in n. This curve compares character queries; the separate processing-time formulas remain in the problem page."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0005E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>k</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n and threshold 1 <= k <= n; pattern length is at most the text length",
    "parameterHtml": "String length n and threshold 1 &lt;= k &lt;= n; pattern length is at most the text length",
    "model": "Character queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\widehat O(\\sqrt{nk})$",
      "classical": "$\\Theta(n)$",
      "parameter": "String length n and threshold 1 <= k <= n; pattern length is at most the text length",
      "model": "Character queries",
      "note": "The distance or mismatch threshold ranges from constant to linear in n. This curve compares character queries; the separate processing-time formulas remain in the problem page.",
      "noteHtml": "The distance or mismatch threshold ranges from constant to linear in n. This curve compares character queries; the separate processing-time formulas remain in the problem page."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>z</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n and LZ77 phrase count 1 <= z <= n",
    "parameterHtml": "String length n and LZ77 phrase count 1 &lt;= z &lt;= n",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt{nz})$",
      "classical": "$O(n)$",
      "parameter": "String length n and LZ77 phrase count 1 <= z <= n",
      "model": "random-access time and character queries",
      "note": "The curve covers the full compressibility range from a constant count to a linear count.",
      "noteHtml": "The curve covers the full compressibility range from a constant count to a linear count."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>r</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "String length n and BWT run count 1 <= r <= n",
    "parameterHtml": "String length n and BWT run count 1 &lt;= r &lt;= n",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt{nr})$",
      "classical": "$\\widetilde O(n)$",
      "parameter": "String length n and BWT run count 1 <= r <= n",
      "model": "random-access time and character queries",
      "note": "The curve covers the full compressibility range from a constant count to a linear count.",
      "noteHtml": "The curve covers the full compressibility range from a constant count to a linear count."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><msup><mi>d</mi><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>polylog</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Encoded run count n, matched run count d, and decompressed length N",
    "parameterHtml": "Encoded run count n, matched run count d, and decompressed length N",
    "model": "run queries; word costs include log N",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Near-Optimal Quantum Algorithm for Finding the Longest Common Substring between Run-Length Encoded Strings",
        "url": "https://arxiv.org/abs/2411.02421"
      }
    ],
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.66666667,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.58333333,
          1.0
        ],
        [
          0.54166667,
          1.0
        ],
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(n^{2/3}d^{-1/6+o(1)}\\operatorname{polylog}N)$",
      "classical": "$O(n)$",
      "parameter": "Encoded run count n, matched run count d, and decompressed length N",
      "model": "run queries; word costs include log N",
      "note": "The matched run count varies over 1 <= d <= n. Subpolynomial factors and word precision are retained in the formulas.",
      "noteHtml": "The matched run count varies over 1 &lt;= d &lt;= n. Subpolynomial factors and word precision are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>n</mi><mo>&#x0002C;</mo><msqrt><mi>n</mi></msqrt><msup><mi>log</mi><mrow><mi>h</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mi>n</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Word length n and unrestricted permitted height h",
    "parameterHtml": "Word length n and unrestricted permitted height h",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$O(\\min\\{n,\\sqrt n\\log^{h/2}n\\})$",
      "classical": "$\\Theta(n)$",
      "parameter": "Word length n and unrestricted permitted height h",
      "model": "character queries",
      "note": "Height changes the quantum logarithmic factor until the linear-query fallback becomes best; the line covers the resulting leading powers.",
      "noteHtml": "Height changes the quantum logarithmic factor until the linear-query fallback becomes best; the line covers the resulting leading powers."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>d</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>&#x003B4;</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x02308;</mi><mi>d</mi><mo>&#x0002F;</mo><mn>2</mn><mi>&#x02309;</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>&#x003B4;</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Point count n; fixed dimension d >= 2 and arbitrary fixed delta > 0",
    "parameterHtml": "Point count n; fixed dimension d &gt;= 2 and arbitrary fixed delta &gt; 0",
    "model": "Random-access geometric computation time",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "On the Quantum Complexity of Closest Pair and Related Problems",
        "url": "https://arxiv.org/abs/1911.01973"
      }
    ],
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.75,
          1.0
        ],
        [
          0.83333333,
          1.33333333
        ],
        [
          0.875,
          1.33333333
        ],
        [
          0.9,
          1.5
        ],
        [
          0.91666667,
          1.5
        ],
        [
          0.92857143,
          1.6
        ],
        [
          0.9375,
          1.6
        ],
        [
          0.94444444,
          1.66666667
        ],
        [
          0.95,
          1.66666667
        ],
        [
          0.95454545,
          1.71428571
        ],
        [
          0.95833333,
          1.71428571
        ],
        [
          0.96153846,
          1.75
        ],
        [
          0.96428571,
          1.75
        ],
        [
          0.96666667,
          1.77777778
        ],
        [
          0.96875,
          1.77777778
        ],
        [
          0.97058824,
          1.8
        ],
        [
          0.97222222,
          1.8
        ],
        [
          0.97368421,
          1.81818182
        ],
        [
          0.975,
          1.81818182
        ],
        [
          0.97619048,
          1.83333333
        ],
        [
          0.97727273,
          1.83333333
        ],
        [
          0.97826087,
          1.84615385
        ],
        [
          0.97916667,
          1.84615385
        ],
        [
          1.0,
          2.0
        ]
      ],
      "quantum": "$\\widetilde O(n^{1-1/(2d)+\\delta})$",
      "classical": "$O(n^{2-2/(\\lceil d/2\\rceil+1)+\\delta})$",
      "parameter": "Point count n; fixed dimension d >= 2 and arbitrary fixed delta > 0",
      "model": "Random-access geometric computation time",
      "note": "Joined fixed-dimension bounds as d varies; arbitrarily small positive exponent slack is retained in the formulas. The endpoint is the limiting exponent pair.",
      "noteHtml": "Joined fixed-dimension bounds as d varies; arbitrarily small positive exponent slack is retained in the formulas. The endpoint is the limiting exponent pair."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mo>&#x02212;</mo><mn>2</mn><mo>&#x0002F;</mo><mi>k</mi><mo>&#x02212;</mo><mi>t</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Host vertices n; fixed pattern vertex count k, edge count m, minimum degree d; t is the maximum of the two expressions in the entry",
    "parameterHtml": "Host vertices n; fixed pattern vertex count k, edge count m, minimum degree d; t is the maximum of the two expressions in the entry",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.0,
          2.0
        ],
        [
          2.0,
          2.0
        ],
        [
          2.0,
          2.0
        ],
        [
          1.0,
          2.0
        ]
      ],
      "quantum": "$O(n^{2-2/k-t})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "Host vertices n; fixed pattern vertex count k, edge count m, minimum degree d; t is the maximum of the two expressions in the entry",
      "model": "adjacency-matrix queries",
      "note": "The horizontal interval is an envelope over fixed pattern parameters. The stated expression determines the exponent for each pattern.",
      "noteHtml": "The horizontal interval is an envelope over fixed pattern parameters. The stated expression determines the exponent for each pattern."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>m</mi><mo>&#x0002C;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>d</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>k</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>k</mi><mo>&#x02212;</mo><mn>6</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><msup><mn>2</mn><mrow><mn>2</mn><mi>d</mi><mi>k</mi></mrow></msup><msup><mi>m</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>k</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></msup><mo>&#x02212;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Edge count m, cycle parameter k and maximum degree d",
    "parameterHtml": "Edge count m, cycle parameter k and maximum degree d",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.71428571,
          1.0
        ],
        [
          0.73,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$O(\\min\\{m,(2d)^{(k^2+k-6)/4}2^{2dk}m^{3/4-1/(2^{k+2}-4)}\\})$",
      "classical": "$\\Theta(m)$",
      "parameter": "Edge count m, cycle parameter k and maximum degree d",
      "model": "edge-list queries under the stated degree promise",
      "note": "Envelope over cycle length and degree promise, including the linear-query fallback; the exact parameter factors are retained in the formula.",
      "noteHtml": "Envelope over cycle length and degree promise, including the linear-query fallback; the exact parameter factors are retained in the formula."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>n</mi><mi>D</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Vertex count n and diameter 1 <= D <= n",
    "parameterHtml": "Vertex count n and diameter 1 &lt;= D &lt;= n",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt{nD})$",
      "classical": "$\\widetilde\\Theta(n)$",
      "parameter": "Vertex count n and diameter 1 <= D <= n",
      "model": "CONGEST communication rounds",
      "note": "The network diameter varies from constant to linear in n; both axes count communication rounds.",
      "noteHtml": "The network diameter varies from constant to linear in n; both axes count communication rounds."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msqrt><mrow><mi>&#x02113;</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Matrix dimension n and 0 <= ell <= n squared nonzero output entries",
    "parameterHtml": "Matrix dimension n and 0 &lt;= ell &lt;= n squared nonzero output entries",
    "model": "Input-entry queries",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1.0,
          2.0
        ],
        [
          1.25,
          2.0
        ],
        [
          1.5,
          2.0
        ],
        [
          1.75,
          2.0
        ],
        [
          2.0,
          2.0
        ]
      ],
      "quantum": "$\\widetilde\\Theta(n\\sqrt{\\ell+1})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "Matrix dimension n and 0 <= ell <= n squared nonzero output entries",
      "model": "Input-entry queries",
      "note": "Output support varies from bounded size to n squared. Both axes show input-entry queries, not matrix-multiplication processing time.",
      "noteHtml": "Output support varies from bounded size to n squared. Both axes show input-entry queries, not matrix-multiplication processing time."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>m</mi><mi>n</mi></mrow></msqrt><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Vertex count n, edge count n-1 <= m <= n squared, and sampling accuracy epsilon",
    "parameterHtml": "Vertex count n, edge count n-1 &lt;= m &lt;= n squared, and sampling accuracy epsilon",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1.0,
          1.0
        ],
        [
          1.125,
          1.25
        ],
        [
          1.25,
          1.5
        ],
        [
          1.375,
          1.75
        ],
        [
          1.5,
          2.0
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt{mn}\\log(1/\\varepsilon))$",
      "classical": "$\\widetilde O(m\\log(1/\\varepsilon))$",
      "parameter": "Vertex count n, edge count n-1 <= m <= n squared, and sampling accuracy epsilon",
      "model": "weighted adjacency-list queries and coherent-RAM time",
      "note": "Connected-graph density ranges from linear to quadratic edge count. Accuracy enters logarithmically and is retained in the formula.",
      "noteHtml": "Connected-graph density ranges from linear to quadratic edge count. Accuracy enters logarithmically and is retained in the formula."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>k</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Vertex count n and fixed source-pattern parameter k >= 2",
    "parameterHtml": "Vertex count n and fixed source-pattern parameter k &gt;= 2",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.33333333,
          0.5
        ],
        [
          0.42857143,
          0.66666667
        ],
        [
          0.46666667,
          0.75
        ],
        [
          0.48387097,
          0.8
        ],
        [
          0.49206349,
          0.83333333
        ],
        [
          0.49606299,
          0.85714286
        ],
        [
          0.49803922,
          0.875
        ],
        [
          0.49902153,
          0.88888889
        ],
        [
          0.49951124,
          0.9
        ],
        [
          0.49975574,
          0.90909091
        ],
        [
          0.4998779,
          0.91666667
        ],
        [
          0.49993896,
          0.92307692
        ],
        [
          0.49996948,
          0.92857143
        ],
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$O(n^{(1-1/(2^k-1))/2})$",
      "classical": "$O(n^{1-1/k})$",
      "parameter": "Vertex count n and fixed source-pattern parameter k >= 2",
      "model": "outgoing-neighbor queries",
      "note": "The curve joins fixed-k star-pattern comparisons and their limiting powers; general patterns use the classical upper bound in the entry.",
      "noteHtml": "The curve joins fixed-k star-pattern comparisons and their limiting powers; general patterns use the classical upper bound in the entry."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x02212;</mo><msub><mi>&#x003B1;</mi><mi>k</mi></msub></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Host vertices n and fixed path length k; alpha_k is defined by the cited recurrence",
    "parameterHtml": "Host vertices n and fixed path length k; alpha_k is defined by the cited recurrence",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.0,
          2.0
        ],
        [
          1.5,
          2.0
        ],
        [
          1.5,
          2.0
        ],
        [
          1.0,
          2.0
        ]
      ],
      "quantum": "$\\widetilde O(n^{3/2-\\alpha_k})$",
      "classical": "$\\Theta(n^2)$",
      "parameter": "Host vertices n and fixed path length k; alpha_k is defined by the cited recurrence",
      "model": "adjacency-matrix queries",
      "note": "The interval covers the pattern-dependent quantum exponent below 3/2. Its exact value uses the recurrence stated in the source theorem.",
      "noteHtml": "The interval covers the pattern-dependent quantum exponent below 3/2. Its exact value uses the recurrence stated in the source theorem."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><msqrt><mrow><mi>log</mi><mi>n</mi><mi>log</mi><mi>m</mi></mrow></msqrt><mo>&#x0002B;</mo><msqrt><mi>m</mi></msqrt><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(m,log n); sparse edge count m and vertex count n",
    "parameterHtml": "Scale max(m,log n); sparse edge count m and vertex count n",
    "model": "Induced-subgraph edge-existence queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum algorithms for learning a hidden graph and beyond",
        "url": "https://arxiv.org/abs/2011.08611"
      }
    ],
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          1.0,
          1.0
        ],
        [
          1.025,
          1.05
        ],
        [
          1.05,
          1.1
        ],
        [
          1.075,
          1.15
        ],
        [
          1.1,
          1.2
        ],
        [
          1.125,
          1.25
        ],
        [
          1.15,
          1.3
        ],
        [
          1.175,
          1.35
        ],
        [
          1.2,
          1.4
        ],
        [
          1.225,
          1.45
        ],
        [
          1.25,
          1.5
        ],
        [
          1.275,
          1.55
        ],
        [
          1.3,
          1.6
        ],
        [
          1.325,
          1.65
        ],
        [
          1.35,
          1.7
        ],
        [
          1.375,
          1.75
        ],
        [
          1.4,
          1.8
        ],
        [
          1.425,
          1.85
        ],
        [
          1.45,
          1.9
        ],
        [
          1.475,
          1.95
        ],
        [
          1.5,
          2.0
        ],
        [
          1.45,
          1.95
        ],
        [
          1.4,
          1.9
        ],
        [
          1.35,
          1.85
        ],
        [
          1.3,
          1.8
        ],
        [
          1.25,
          1.75
        ],
        [
          1.2,
          1.7
        ],
        [
          1.15,
          1.65
        ],
        [
          1.1,
          1.6
        ],
        [
          1.05,
          1.55
        ],
        [
          1.0,
          1.5
        ],
        [
          0.975,
          1.45
        ],
        [
          0.95,
          1.4
        ],
        [
          0.925,
          1.35
        ],
        [
          0.9,
          1.3
        ],
        [
          0.875,
          1.25
        ],
        [
          0.85,
          1.2
        ],
        [
          0.825,
          1.15
        ],
        [
          0.8,
          1.1
        ],
        [
          0.775,
          1.05
        ],
        [
          0.75,
          1.0
        ]
      ],
      "quantum": "$O(m^{3/4}\\sqrt{\\log n\\log m}+\\sqrt m\\log n)$",
      "classical": "$\\widetilde O(m\\log(n/m))$",
      "parameter": "Scale max(m,log n); sparse edge count m and vertex count n",
      "model": "Induced-subgraph edge-existence queries",
      "note": "The curve retains vertex-label logarithms as well as edge count for the promised matching/cycle families. Polylogarithmic factors in m are retained in the formula.",
      "noteHtml": "The curve retains vertex-label logarithms as well as edge count for the promised matching/cycle families. Polylogarithmic factors in m are retained in the formula."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>m</mi></msqrt><mi>log</mi><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mi>log</mi><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;for&#x000A0;the&#x000A0;stated&#x000A0;subclasses</mtext></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo>&#x0002F;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mtext>;&#x000A0;class-specific&#x000A0;bounds&#x000A0;in&#x000A0;the&#x000A0;entry</mtext></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale max(m,log n); edge count m, vertices n, maximum degree d and the stated structural promise",
    "parameterHtml": "Scale max(m,log n); edge count m, vertices n, maximum degree d and the stated structural promise",
    "model": "Induced-edge-parity queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Quantum algorithms for learning a hidden graph and beyond",
        "url": "https://arxiv.org/abs/2011.08611"
      }
    ],
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          1.0
        ],
        [
          0.5,
          1.0
        ],
        [
          0.5,
          2.0
        ],
        [
          0.05,
          2.0
        ]
      ],
      "quantum": "$O(\\sqrt m\\log m);\\ O(d\\log m);\\ O(1)\\text{ for the stated subclasses}$",
      "classical": "$\\Omega(m\\log(n^2/m))\\text{; class-specific bounds in the entry}$",
      "parameter": "Scale max(m,log n); edge count m, vertices n, maximum degree d and the stated structural promise",
      "model": "Induced-edge-parity queries",
      "note": "The region covers sparse general graphs and the stated bounded-degree/star/clique subclasses, with their class-specific classical information bounds. Vertex-label costs remain in the formula.",
      "noteHtml": "The region covers sparse general graphs and the stated bounded-degree/star/clique subclasses, with their class-specific classical information bounds. Vertex-label costs remain in the formula."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mo>&#x02265;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>N</mi><mi>log</mi><mi>N</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mo>&#x0003D;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "A quadratic speedup for <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mo>&#x02265;</mo><mn>3</mn></mrow></math></span>, and factor <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msqrt><mrow><mi>N</mi><mo>&#x0002F;</mo><mi>log</mi><mi>N</mi></mrow></msqrt></mrow></math></span> in two dimensions.",
    "gainText": "A quadratic speedup for $d\\geq3$, and factor $\\sqrt{N/\\log N}$ in two dimensions.",
    "parameter": "Lattice vertex count N; all fixed dimensions d >= 2",
    "parameterHtml": "Lattice vertex count N; all fixed dimensions d &gt;= 2",
    "model": "Local movement and oracle steps",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": 0.5,
    "costC": 1.0,
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
          1.0
        ]
      ],
      "quantum": "$O(\\sqrt N)\\ (d\\ge3);\\ O(\\sqrt{N\\log N})\\ (d=2)$",
      "classical": "$\\Theta(N)$",
      "parameter": "Lattice vertex count N; all fixed dimensions d >= 2",
      "model": "Local movement and oracle steps",
      "note": "For every fixed dimension d >= 2 the leading quantum power is one half; dimension two contributes the displayed sqrt(log N) factor.",
      "noteHtml": "For every fixed dimension d &gt;= 2 the leading quantum power is one half; dimension two contributes the displayed sqrt(log N) factor."
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
      "note": "The classical L_N[1/3,c] exponent is plotted at power 1/3; its (log n)^(2/3) factor remains in the displayed formula.",
      "noteHtml": "The classical L_N[1/3,c] exponent is plotted at power 1/3; its (log n)^(2/3) factor remains in the displayed formula."
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
      "note": "The classical L_q[1/3,c] regime uses the same bit-length variable.",
      "noteHtml": "The classical L_q[1/3,c] regime uses the same bit-length variable."
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          2.13333333,
          2.86
        ],
        [
          2.13333333,
          2.9
        ]
      ],
      "quantum": "$\\widetilde O(n^3)$ gates and $O(n)$ logical qubits, Shor's discrete-logarithm algorithm.",
      "classical": "$2^{O(n/(\\log n)^{1/4})}$ expected time, the Akshima et al. index-calculus algorithm.",
      "parameter": "n: group-order bit length",
      "model": "Quantum gates / expected classical operations",
      "note": "The classical n/(log n)^(1/4) exponent occupies the near-linear subexponential band; its exact logarithmic correction is retained.",
      "noteHtml": "The classical n/(log n)^(1/4) exponent occupies the near-linear subexponential band; its exact logarithmic correction is retained."
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n=log₂R: bit length of the order bound",
      "model": "Black-box group operations",
      "note": "The quantum degree is unspecified; the classical cost is 2^(n/2).",
      "noteHtml": "The quantum degree is unspecified; the classical cost is 2^(n/2)."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mrow><mi mathvariant=\"normal\">p</mi><mi mathvariant=\"normal\">r</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">c</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">n</mi></mrow><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>L</mi><mi>d</mi></msub><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mrow></math></span>",
    "gain": "Subexponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>d</mi></mrow></math></span>, through Fourier sampling of a periodic function over the reals.",
    "gainText": "Subexponential to polynomial in $\\log d$, through Fourier sampling of a periodic function over the reals.",
    "parameter": "n=log₂d: discriminant bit length; output precision",
    "parameterHtml": "n=log₂d: discriminant bit length; output precision",
    "model": "Quantum gates / heuristic classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.7
        ],
        [
          2.4,
          2.7
        ],
        [
          2.4,
          2.7
        ],
        [
          0.05,
          2.7
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,\\mathrm{precision})$",
      "classical": "$L_d[1/2,O(1)]$",
      "parameter": "n=log₂d: discriminant bit length; output precision",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "The quantum polynomial degree and precision dependence are retained as a polynomial-class range; classical L_d[1/2,O(1)] has subexponential power1/2.",
      "noteHtml": "The quantum polynomial degree and precision dependence are retained as a polynomial-class range; classical L_d[1/2,O(1)] has subexponential power1/2."
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
    "Q": "Polynomial time in the input parameters, Hallgren and Biasse–Song principal-ideal algorithms.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>L</mi><mrow><mo stretchy=\"false\">&#x0007C;</mo><msub><mi>&#x00394;</mi><mi>K</mi></msub><mo stretchy=\"false\">&#x0007C;</mo></mrow></msub><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mrow></math></span> under the standard index-calculus hypotheses in quadratic fields, relation-collection algorithms.",
    "gain": "Subexponential to polynomial in the matched quadratic-field regime. Quantum Fourier methods supply the hidden-lattice information needed for the generator.",
    "gainText": "Subexponential to polynomial in the matched quadratic-field regime. Quantum Fourier methods supply the hidden-lattice information needed for the generator.",
    "parameter": "n=log₂|Δ|: discriminant bit length; quadratic-field regime",
    "parameterHtml": "n=log₂|Δ|: discriminant bit length; quadratic-field regime",
    "model": "Quantum gates / heuristic classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.7
        ],
        [
          2.4,
          2.7
        ],
        [
          2.4,
          2.7
        ],
        [
          0.05,
          2.7
        ]
      ],
      "quantum": "Polynomial time in the input parameters, Hallgren and Biasse--Song principal-ideal algorithms.",
      "classical": "$L_{|\\Delta_K|}[1/2,O(1)]$ under the standard index-calculus hypotheses in quadratic fields, relation-collection algorithms.",
      "parameter": "n=log₂|Δ|: discriminant bit length; quadratic-field regime",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "Matched quadratic-field regime; quantum degree is unspecified and the classical subexponential power is1/2. The entry states the GRH/index-calculus assumptions.",
      "noteHtml": "Matched quadratic-field regime; quantum degree is unspecified and the classical subexponential power is1/2. The entry states the GRH/index-calculus assumptions."
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
    "Q": "Polynomial time under GRH, Biasse–Song class-group computation.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>L</mi><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x00394;</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></msub><mo stretchy=\"false\">[</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002C;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">]</mo></mrow></math></span> in imaginary quadratic fields, Hafner–McCurley and Buchmann index calculus.",
    "gain": "Subexponential to polynomial in the quadratic-field regime, through hidden-lattice Fourier methods.",
    "gainText": "Subexponential to polynomial in the quadratic-field regime, through hidden-lattice Fourier methods.",
    "parameter": "n=log₂|Δ|: discriminant bit length; quadratic-field regime",
    "parameterHtml": "n=log₂|Δ|: discriminant bit length; quadratic-field regime",
    "model": "Quantum gates / heuristic classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.7
        ],
        [
          2.4,
          2.7
        ],
        [
          2.4,
          2.7
        ],
        [
          0.05,
          2.7
        ]
      ],
      "quantum": "Polynomial time under GRH, Biasse--Song class-group computation.",
      "classical": "$L_{|\\Delta|}[1/2,O(1)]$ in imaginary quadratic fields, Hafner--McCurley and Buchmann index calculus.",
      "parameter": "n=log₂|Δ|: discriminant bit length; quadratic-field regime",
      "model": "Quantum gates / heuristic classical bit operations",
      "note": "Matched quadratic-field regime; quantum degree is unspecified and the classical subexponential power is1/2. The entry states the GRH/index-calculus assumptions.",
      "noteHtml": "Matched quadratic-field regime; quantum degree is unspecified and the classical subexponential power is1/2. The entry states the GRH/index-calculus assumptions."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>r</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>log</mi><mi>N</mi></mrow></math></span> for generic actions with <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mi>t</mi></msup><msup><mi>p</mi><mi>k</mi></msup><mi>G</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007B;</mo><mn>0</mn><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span> and fixed <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>p</mi><mo>&#x0002C;</mo><mi>t</mi><mo>&#x0002C;</mo><mi>k</mi></mrow></math></span>. General abelian hidden shifts give exponential-to-subexponential improvement, with power saving in the exponent. These comparisons use the action-oracle model; explicit isogeny costs include arithmetic evaluation.",
    "gainText": "Exponential to polynomial in $\\log N$ for generic actions with $2^tp^kG=\\{0\\}$ and fixed $p,t,k$. General abelian hidden shifts give exponential-to-subexponential improvement, with power saving in the exponent. These comparisons use the action-oracle model; explicit isogeny costs include arithmetic evaluation.",
    "parameter": "n=log₂|G|; r=log₂|2^t p^k G|, 0≤r≤n",
    "parameterHtml": "n=log₂|G|; r=log₂|2^t p^k G|, 0≤r≤n",
    "model": "Group-action oracle operations",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.5,
          3.4
        ],
        [
          2.7,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)2^{O(\\sqrt r)}$",
      "classical": "$\\widetilde O(2^{n/2})$",
      "parameter": "n=log₂|G|; r=log₂|2^t p^k G|, 0≤r≤n",
      "model": "Group-action oracle operations",
      "note": "The range retains r: the quantum bound is poly(n)2^{O(√r)}. It spans polynomial through subexponential power1/2, while generic classical action search costs2^(n/2).",
      "noteHtml": "The range retains r: the quantum bound is poly(n)2^O(√r). It spans polynomial through subexponential power1/2, while generic classical action search costs2^(n/2)."
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
      "note": "Both bounds use field cardinality p, with o(1) in the powers retained.",
      "noteHtml": "Both bounds use field cardinality p, with o(1) in the powers retained."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>p</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>6</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>p</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "p: underlying field cardinality",
    "parameterHtml": "p: underlying field cardinality",
    "model": "Quantum isogeny-query bound / classical key-recovery time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.16666667,
          0.05
        ],
        [
          0.16666667,
          0.18
        ]
      ],
      "quantum": "$\\widetilde O(p^{1/6})$",
      "classical": "$\\operatorname{poly}(\\log p)$",
      "parameter": "p: underlying field cardinality",
      "model": "Quantum isogeny-query bound / classical key-recovery time",
      "note": "The classical polynomial-in-log p attack is asymptotically faster than the historical quantum p^(1/6) bound.",
      "noteHtml": "The classical polynomial-in-log p attack is asymptotically faster than the historical quantum p^(1/6) bound."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.247</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> rigorous time, Hhan–Kim–Kim–Laarhoven; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2563</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> heuristic time, reusable quantum walks.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.409</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> rigorous time, Hhan–Kim–Kim–Laarhoven; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mn>0.2925</mn><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> heuristic time, Becker–Ducas–Gama–Laarhoven sieving.",
    "gain": "Polynomial speedups through smaller exponential constants in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>. Enumeration gives a quadratic improvement in tree size through quantum backtracking; quantum walks and amplification accelerate sieve subroutines.",
    "gainText": "Polynomial speedups through smaller exponential constants in $n$. Enumeration gives a quadratic improvement in tree size through quantum backtracking; quantum walks and amplification accelerate sieve subroutines.",
    "parameter": "n: lattice dimension",
    "parameterHtml": "n: lattice dimension",
    "model": "Quantum / classical lattice algorithm time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          3.147,
          3.309
        ],
        [
          3.1563,
          3.1925
        ]
      ],
      "quantum": "$2^{0.247n+o(n)}$ rigorous time, Hhan--Kim--Kim--Laarhoven; $2^{0.2563n+o(n)}$ heuristic time, reusable quantum walks.",
      "classical": "$2^{0.409n+o(n)}$ rigorous time, Hhan--Kim--Kim--Laarhoven; $2^{0.2925n+o(n)}$ heuristic time, Becker--Ducas--Gama--Laarhoven sieving.",
      "parameter": "n: lattice dimension",
      "model": "Quantum / classical lattice algorithm time",
      "note": "The two endpoints are separate rigorous and heuristic comparisons, respectively; the connecting segment indicates the range of recorded regimes, not an interpolation theorem.",
      "noteHtml": "The two endpoints are separate rigorous and heuristic comparisons, respectively; the connecting segment indicates the range of recorded regimes, not an interpolation theorem."
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
      "note": "Matched reduction and rigorous SVP subroutine.",
      "noteHtml": "Matched reduction and rigorous SVP subroutine."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Subexponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, through Fourier interference in the quantum examples. The availability of coherent examples is part of the input model.",
    "gainText": "Subexponential to polynomial in $n$, through Fourier interference in the quantum examples. The availability of coherent examples is part of the input model.",
    "parameter": "n: secret bit length; fixed noise and failure probability",
    "parameterHtml": "n: secret bit length; fixed noise and failure probability",
    "model": "Quantum processing time / classical LPN processing time",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1,
          2.86
        ],
        [
          1,
          2.9
        ]
      ],
      "quantum": "$O(n\\log(n/\\delta))$",
      "classical": "$2^{O(n/\\log n)}$",
      "parameter": "n: secret bit length; fixed noise and failure probability",
      "model": "Quantum processing time / classical LPN processing time",
      "note": "Quantum access supplies noisy quantum examples; classical access supplies classical samples. The two access models are stated explicitly. Logarithmic confidence factors remain in the formula.",
      "noteHtml": "Quantum access supplies noisy quantum examples; classical access supplies classical samples. The two access models are stated explicitly. Logarithmic confidence factors remain in the formula."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>T</mi></msqrt><mspace width=\"0.167em\" /><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>T</mi><mo>&#x0002C;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Quadratic acceleration in enumeration-tree size. The total-runtime comparison with the best classical solver depends on <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>T</mi></mrow></math></span>, basis quality and the target-distance promise.",
    "gainText": "Quadratic acceleration in enumeration-tree size. The total-runtime comparison with the best classical solver depends on $T$, basis quality and the target-distance promise.",
    "parameter": "n: dimension; T: size of the matched enumeration tree",
    "parameterHtml": "n: dimension; T: size of the matched enumeration tree",
    "model": "Quantum / classical lattice running time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          2.4
        ],
        [
          2.9,
          2.9
        ],
        [
          3.4,
          3.9
        ],
        [
          5.2,
          3.9
        ],
        [
          5.2,
          0.05
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt T\\,\\operatorname{poly}(n))$",
      "classical": "$\\min\\{T,2^{n+o(n)}\\}$",
      "parameter": "n: dimension; T: size of the matched enumeration tree",
      "model": "Quantum / classical lattice running time",
      "note": "The quantum bound depends on T and an unspecified polynomial in n. The classical comparator is min(T,2^{n+o(n)}). The region is an envelope over those parameters, not a fixed assumption T=2^n.",
      "noteHtml": "The quantum bound depends on T and an unspecified polynomial in n. The classical comparator is min(T,2^n+o(n)). The region is an envelope over those parameters, not a fixed assumption T=2^n."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time, Eldar–Hallgren periodic-lattice decoding.",
    "C": "Deterministic polynomial time in the same radius regime, Ducas–van Woerden decoding as developed by Allen et al.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: dimension; q: period parameter; same decoding-radius promise",
    "parameterHtml": "n: dimension; q: period parameter; same decoding-radius promise",
    "model": "Quantum gates / classical running time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          2.4
        ],
        [
          0.05,
          2.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,\\log q)$ time, Eldar--Hallgren periodic-lattice decoding.",
      "classical": "Deterministic polynomial time in the same radius regime, Ducas--van Woerden decoding as developed by Allen et al.",
      "parameter": "n: dimension; q: period parameter; same decoding-radius promise",
      "model": "Quantum gates / classical running time",
      "note": "Both matched algorithms are polynomial; their degrees are unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents.",
      "noteHtml": "Both matched algorithms are polynomial; their degrees are unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents."
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
      "note": "The quantum headline gives a block-SVP subroutine cost; the classical headline minimizes several complete attacks. A comparable optimized total attack cost requires modulus, noise, sample/secret distributions and attack parameters not supplied by one formula in this entry.",
      "noteHtml": "The quantum headline gives a block-SVP subroutine cost; the classical headline minimizes several complete attacks. A comparable optimized total attack cost requires modulus, noise, sample/secret distributions and attack parameters not supplied by one formula in this entry."
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
    "Q": "Polynomial time in the public dimensions and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi></mrow></math></span>, Chen–Liu–Zhandry quantum filtering.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time in a stronger regime, Kothari–O&#x27;Donnell–Wu.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n,m,q: stated wide-matrix SIS dimensions and modulus",
    "parameterHtml": "n,m,q: stated wide-matrix SIS dimensions and modulus",
    "model": "Quantum gates / classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          2.4
        ],
        [
          0.05,
          2.4
        ]
      ],
      "quantum": "Polynomial time in the public dimensions and $q$, Chen--Liu--Zhandry quantum filtering.",
      "classical": "$\\operatorname{poly}(m,\\log q)$ time in a stronger regime, Kothari--O'Donnell--Wu.",
      "parameter": "n,m,q: stated wide-matrix SIS dimensions and modulus",
      "model": "Quantum gates / classical bit operations",
      "note": "The classical result covers the entire stated quantum regime. Both full algorithms are polynomial in the admitted public parameters; the degrees remain unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents.",
      "noteHtml": "The classical result covers the entire stated quantum regime. Both full algorithms are polynomial in the admitted public parameters; the degrees remain unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><msqrt><mrow><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mi>n</mi><mi>w</mi></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo><mo>&#x0002F;</mo><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mrow><mi>n</mi><mo>&#x02212;</mo><mi>k</mi></mrow><mi>w</mi></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo></mrow></msqrt></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">B</mi><mi mathvariant=\"normal\">J</mi><mi mathvariant=\"normal\">M</mi><mi mathvariant=\"normal\">M</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">M</mi><mi mathvariant=\"normal\">O</mi></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>k</mi><mo>&#x0002C;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">r</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">e</mi><mtext>&#x000A0;</mtext><mi mathvariant=\"normal\">c</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">u</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">g</mi></mrow></msub><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mi>n</mi><mi>w</mi></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo><mo>&#x0002F;</mo><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00028;</mo><mfrac linethickness=\"0\"><mrow><mi>n</mi><mo>&#x02212;</mo><mi>k</mi></mrow><mi>w</mi></mfrac><mo minsize=\"2.047em\" maxsize=\"2.047em\">&#x00029;</mo><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial speedup for dense random codes: quadratic acceleration of Prange and further reductions in the exponential constant from quantum walks. Sparse parity checks have the stated subexponential classical comparator.",
    "gainText": "Polynomial speedup for dense random codes: quadratic acceleration of Prange and further reductions in the exponential constant from quantum walks. Sparse parity checks have the stated subexponential classical comparator.",
    "parameter": "n: code length; k: dimension; w: target weight; matrix sparsity",
    "parameterHtml": "n: code length; k: dimension; w: target weight; matrix sparsity",
    "model": "Quantum gates / classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          2.4
        ],
        [
          3.4,
          3.9
        ],
        [
          2.9,
          3.9
        ],
        [
          2.9,
          2.86
        ],
        [
          0.05,
          2.86
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)\\sqrt{\\binom nw/\\binom{n-k}w}$",
      "classical": "$\\min\\{T_{\\rm BJMM/MO}(n,k,w),T_{\\rm sparse\\ counting},\\operatorname{poly}(n)\\binom nw/\\binom{n-k}w\\}$",
      "parameter": "n: code length; k: dimension; w: target weight; matrix sparsity",
      "model": "Quantum gates / classical bit operations",
      "note": "Categorical envelope: amplified Prange depends on binomial(n,w)/binomial(n−k,w), while optimized ISD and sparse-circuit counting determine the classical minimum. Rates, weights and sparsity vary; no numerical optimum exponent is assumed.",
      "noteHtml": "Categorical envelope: amplified Prange depends on binomial(n,w)/binomial(n−k,w), while optimized ISD and sparse-circuit counting determine the classical minimum. Rates, weights and sparsity vary; no numerical optimum exponent is assumed."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>k</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mtext>weight&#x000A0;evaluations</mtext></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">I</mi><mi mathvariant=\"normal\">S</mi><mi mathvariant=\"normal\">D</mi></mrow></msub><mo>&#x0002C;</mo><msub><mi>T</mi><mrow><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">p</mi><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">r</mi><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">e</mi><mtext>&#x000A0;</mtext><mi mathvariant=\"normal\">c</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">u</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">t</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">g</mi></mrow></msub><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial speedup from quadratic acceleration of exhaustive weight search or a specified ISD success probability, giving a smaller exponential constant in the dense-code comparison.",
    "gainText": "Polynomial speedup from quadratic acceleration of exhaustive weight search or a specified ISD success probability, giving a smaller exponential constant in the dense-code comparison.",
    "parameter": "n: code length; k≤n: code dimension; matrix sparsity",
    "parameterHtml": "n: code length; k≤n: code dimension; matrix sparsity",
    "model": "Quantum weight evaluations / classical weight evaluations or bit operations",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          2.4
        ],
        [
          3.4,
          3.9
        ],
        [
          3.4,
          2.86
        ],
        [
          2.9,
          2.86
        ]
      ],
      "quantum": "$O(2^{k/2})\\ \\text{weight evaluations}$",
      "classical": "$\\min\\{O(2^k),T_{\\rm ISD},T_{\\rm sparse\\ counting}\\}$",
      "parameter": "n: code length; k≤n: code dimension; matrix sparsity",
      "model": "Quantum weight evaluations / classical weight evaluations or bit operations",
      "note": "The region covers rate-dependent codeword enumeration and stronger applicable ISD/sparse-counting comparators. The endpoint (1/2,1) in the exponential-rate sector is the full rate-k enumeration comparison.",
      "noteHtml": "The region covers rate-dependent codeword enumeration and stronger applicable ISD/sparse-counting comparators. The endpoint (1/2,1) in the exponential-rate sector is the full rate-k enumeration comparison."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.2182</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time with classical list heuristics, or <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.2156</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> with an additional update heuristic, Bonnetain–Bricout–Schrottenloher–Shen quantum walks.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.283</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time and space, Bonnetain–Bricout–Schrottenloher–Shen classical representations.",
    "gain": "Polynomial speedup through a smaller exponential constant in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>. Both amplitude amplification and quantum walks contribute to the algorithms.",
    "gainText": "Polynomial speedup through a smaller exponential constant in $n$. Both amplitude amplification and quantum walks contribute to the algorithms.",
    "parameter": "n: random subset-sum items in the stated cryptographic-density regime",
    "parameterHtml": "n: random subset-sum items in the stated cryptographic-density regime",
    "model": "Heuristic quantum / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          3.1156,
          3.183
        ],
        [
          3.1182,
          3.183
        ]
      ],
      "quantum": "$\\widetilde O(2^{0.2182n})$ time with classical list heuristics, or $\\widetilde O(2^{0.2156n})$ with an additional update heuristic, Bonnetain--Bricout--Schrottenloher--Shen quantum walks.",
      "classical": "$\\widetilde O(2^{0.283n})$ time and space, Bonnetain--Bricout--Schrottenloher--Shen classical representations.",
      "parameter": "n: random subset-sum items in the stated cryptographic-density regime",
      "model": "Heuristic quantum / classical running time",
      "note": "Quantum endpoints distinguish the additional update heuristic from the classical-list-only heuristic.",
      "noteHtml": "Quantum endpoints distinguish the additional update heuristic from the classical-list-only heuristic."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> gates, Grover search with reversible quadratic-equation evaluation.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mn>0.6943</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time, Dinur multiple parity counting; subexponential time for sparse systems, Boolean tensor contraction.",
    "gain": "Polynomial speedup through a smaller exponential constant for the dense promised regime, using amplitude amplification and algebraic preprocessing. Sparse explicit systems have subexponential classical bounds.",
    "gainText": "Polynomial speedup through a smaller exponential constant for the dense promised regime, using amplitude amplification and algebraic preprocessing. Sparse explicit systems have subexponential classical bounds.",
    "parameter": "n: variables; m: equations; semiregularity and sparsity parameters",
    "parameterHtml": "n: variables; m: equations; semiregularity and sparsity parameters",
    "model": "Quantum gates / classical bit operations",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "region",
      "points": [
        [
          3.362,
          3.5943
        ],
        [
          3.4,
          3.5943
        ],
        [
          3.4,
          2.86
        ],
        [
          3.362,
          2.86
        ]
      ],
      "quantum": "$O(mn^2 2^{n/2})$ gates, Grover search with reversible quadratic-equation evaluation.",
      "classical": "$\\operatorname{poly}(m,n)+O(2^{0.6943n})$ time, Dinur multiple parity counting; subexponential time for sparse systems, Boolean tensor contraction.",
      "parameter": "n: variables; m: equations; semiregularity and sparsity parameters",
      "model": "Quantum gates / classical bit operations",
      "note": "Envelope of the stated dense and sparse regimes. Quantum exponents0.462/0.47 require the specified square-system semiregularity; generic Grover uses0.5. Sparse classical encodings can be near-linear subexponential.",
      "noteHtml": "Envelope of the stated dense and sparse regimes. Quantum exponents0.462/0.47 require the specified square-system semiregularity; generic Grover uses0.5. Sparse classical encodings can be near-linear subexponential."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>r</mi><mo>&#x0002B;</mo><msqrt><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002F;</mo><mi>r</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial speedup of degree <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> relative to the classical birthday query count. The BHT construction combines a stored table with Grover search. In output length <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, the exponent changes from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span> without power saving.",
    "gainText": "Polynomial speedup of degree $3/2$ relative to the classical birthday query count. The BHT construction combines a stored table with Grover search. In output length $n$, the exponent changes from $1/2$ to $1/3$ without power saving.",
    "parameter": "n: output bits; r: stored values, 1≤r≤2^n",
    "parameterHtml": "n: output bits; r: stored values, 1≤r≤2^n",
    "model": "Hash-oracle queries",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          3.4,
          3.4
        ],
        [
          3.31666667,
          3.4
        ],
        [
          3.23333333,
          3.4
        ],
        [
          3.4,
          3.4
        ],
        [
          3.65,
          3.4
        ],
        [
          3.9,
          3.4
        ]
      ],
      "quantum": "$O(r+\\sqrt{2^n/r})$",
      "classical": "$\\Theta(2^{n/2})$",
      "parameter": "n: output bits; r: stored values, 1≤r≤2^n",
      "model": "Hash-oracle queries",
      "note": "Parameterizing r=2^(an), 0≤a≤1, gives the full memory/time tradeoff. Its optimal query point has a=1/3.",
      "noteHtml": "Parameterizing r=2^(an), 0≤a≤1, gives the full memory/time tradeoff. Its optimal query point has a=1/3."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mi>M</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> queries for <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi><mo>&#x02264;</mo><mi>M</mi><mo>&#x0003C;</mo><msup><mi>N</mi><mn>2</mn></msup></mrow></math></span>, and <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>M</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> for <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>M</mi><mo>&#x02265;</mo><msup><mi>N</mi><mn>2</mn></msup></mrow></math></span>, quantum-walk claw finding.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002B;</mo><mi>M</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> worst-case queries, list matching; <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>k</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time for double encryption, meet in the middle.",
    "gain": "A polynomial speedup of degree <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span> in the balanced query comparison and a quadratic search improvement in the highly unbalanced regime. Double encryption improves the exponential constant from <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span> to <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>k</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></math></span> through the balanced claw-finding reduction.",
    "gainText": "A polynomial speedup of degree $3/2$ in the balanced query comparison and a quadratic search improvement in the highly unbalanced regime. Double encryption improves the exponential constant from $k$ to $2k/3$ through the balanced claw-finding reduction.",
    "parameter": "M: larger list size; N≤M: smaller list size",
    "parameterHtml": "M: larger list size; N≤M: smaller list size",
    "model": "Function-evaluation queries",
    "evidence": 1,
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
        "title": "Quantum Attacks Against Iterated Block Ciphers",
        "url": "https://arxiv.org/pdf/1410.1434"
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
      }
    ],
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.5,
          1
        ],
        [
          0.66666667,
          1
        ]
      ],
      "quantum": "$O((NM)^{1/3})$ queries for $N\\le M<N^2$, and $O(\\sqrt M)$ for $M\\ge N^2$, quantum-walk claw finding.",
      "classical": "$\\Theta(N+M)$ worst-case queries, list matching; $\\widetilde O(2^k)$ time for double encryption, meet in the middle.",
      "parameter": "M: larger list size; N≤M: smaller list size",
      "model": "Function-evaluation queries",
      "note": "Coordinates use M and vary β=log N/log M. The quantum exponent is1/2 for β≤1/2 and (1+β)/3 for β≥1/2; classical cost isΘ(M).",
      "noteHtml": "Coordinates use M and vary β=log N/log M. The quantum exponent is1/2 for β≤1/2 and (1+β)/3 for β≥1/2; classical cost isΘ(M)."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>&#x0230A;</mi><msub><mi>log</mi><mn>2</mn></msub><mi>k</mi><mi>&#x0230B;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time for unrestricted lists, quantum generalized birthday algorithms.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>&#x0230A;</mi><msub><mi>log</mi><mn>2</mn></msub><mi>k</mi><mi>&#x0230B;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time with unrestricted lists, Wagner generalized birthday search.",
    "gain": "Polynomial speedups through smaller exponential constants in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span> for fixed <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span>. Amplitude amplification and quantum walks both appear in the merging constructions.",
    "gainText": "Polynomial speedups through smaller exponential constants in $n$ for fixed $k$. Amplitude amplification and quantum walks both appear in the merging constructions.",
    "parameter": "n: XOR bit length; k: number of lists",
    "parameterHtml": "n: XOR bit length; k: number of lists",
    "model": "Quantum / classical running time",
    "evidence": 0.5,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          3.23333333,
          3.4
        ],
        [
          3.15,
          3.23333333
        ],
        [
          3.1,
          3.15
        ],
        [
          3.06666667,
          3.1
        ],
        [
          3.04285714,
          3.06666667
        ],
        [
          3.025,
          3.04285714
        ],
        [
          3.01111111,
          3.025
        ],
        [
          3.0,
          3.01111111
        ],
        [
          2.99090909,
          3.0
        ],
        [
          2.98333333,
          2.99090909
        ],
        [
          2.97692308,
          2.98333333
        ],
        [
          2.97142857,
          2.97692308
        ],
        [
          2.96666667,
          2.97142857
        ],
        [
          2.9625,
          2.96666667
        ],
        [
          2.95882353,
          2.9625
        ],
        [
          2.95555556,
          2.95882353
        ],
        [
          2.95263158,
          2.95555556
        ],
        [
          2.95,
          2.95263158
        ],
        [
          2.94761905,
          2.95
        ],
        [
          2.900998,
          2.900999
        ]
      ],
      "quantum": "$\\widetilde O(2^{n/(2+\\lfloor\\log_2k\\rfloor)})$ time for unrestricted lists, quantum generalized birthday algorithms.",
      "classical": "$\\widetilde O(2^{n/(1+\\lfloor\\log_2k\\rfloor)})$ time with unrestricted lists, Wagner generalized birthday search.",
      "parameter": "n: XOR bit length; k: number of lists",
      "model": "Quantum / classical running time",
      "note": "The curve represents the discrete family indexed by j=floor(log₂k); the endpoint is the limit of growing list count. Unrestricted list lengths and polynomial factors remain in the formulas.",
      "noteHtml": "The curve represents the discrete family indexed by j=floor(log₂k); the endpoint is the limit of growing list count. Unrestricted list lengths and polynomial factors remain in the formulas."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>D</mi><mo>&#x0002B;</mo><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002F;</mo><mi>D</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential to polynomial in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math></span>, from Simon period finding. This uses the XOR period created by the Even–Mansour construction and its coherent chosen-plaintext access.",
    "gainText": "Exponential to polynomial in $n$, from Simon period finding. This uses the XOR period created by the Even–Mansour construction and its coherent chosen-plaintext access.",
    "parameter": "n: block bits; D: classical encryption queries, 1≤D≤2^n",
    "parameterHtml": "n: block bits; D: classical encryption queries, 1≤D≤2^n",
    "model": "Coherent quantum queries / total classical query and permutation work",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          1,
          3.4
        ],
        [
          1,
          3.9
        ]
      ],
      "quantum": "$O(n)$",
      "classical": "$\\widetilde\\Theta(D+2^n/D)$",
      "parameter": "n: block bits; D: classical encryption queries, 1≤D≤2^n",
      "model": "Coherent quantum queries / total classical query and permutation work",
      "note": "The classical total includes data acquisition: D+2^n/D. Varying D gives exponential rates from1/2 to1, minimized at D≈2^(n/2). Quantum coherent access and classical access are the respective models.",
      "noteHtml": "The classical total includes data acquisition: D+2^n/D. Varying D gives exponential rates from1/2 to1, minimized at D≈2^(n/2). Quantum coherent access and classical access are the respective models."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002F;</mo><mi>D</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> offline quantum time with <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>D</mi></mrow></math></span> classical encryption queries, offline Simon.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002F;</mo><mi>D</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> offline work with <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>D</mi></mrow></math></span> encryption queries, generic classical Even–Mansour attacks.",
    "gain": "Quadratic improvement of offline work at fixed data volume in the generic Q1 model, combining Grover search with offline Simon tests. Optimizing total time over <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>D</mi></mrow></math></span> gives <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> quantum versus <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> classical work, a polynomial speedup of degree <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math></span>.",
    "gainText": "Quadratic improvement of offline work at fixed data volume in the generic Q1 model, combining Grover search with offline Simon tests. Optimizing total time over $D$ gives $\\widetilde O(2^{n/3})$ quantum versus $\\widetilde O(2^{n/2})$ classical work, a polynomial speedup of degree $3/2$.",
    "parameter": "n: block bits; D: classical encryption queries, 1≤D≤2^n",
    "parameterHtml": "n: block bits; D: classical encryption queries, 1≤D≤2^n",
    "model": "Offline quantum / classical work with the same classical data",
    "evidence": 1,
    "hardware": 3,
    "hardwareLabel": "Large coherent resources",
    "costQ": null,
    "costC": null,
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
      "kind": "curve",
      "points": [
        [
          3.4,
          3.9
        ],
        [
          3.275,
          3.65
        ],
        [
          3.15,
          3.4
        ],
        [
          3.025,
          3.15
        ],
        [
          2.905,
          2.91
        ],
        [
          1,
          1
        ]
      ],
      "quantum": "$\\widetilde O(\\sqrt{2^n/D})$ offline quantum time with $D$ classical encryption queries, offline Simon.",
      "classical": "$\\widetilde O(2^n/D)$ offline work with $D$ encryption queries, generic classical Even--Mansour attacks.",
      "parameter": "n: block bits; D: classical encryption queries, 1≤D≤2^n",
      "model": "Offline quantum / classical work with the same classical data",
      "note": "The full offline data/time tradeoff is shown; preprocessing/data acquisition costs are separate from both displayed offline bounds.",
      "noteHtml": "The full offline data/time tradeoff is shown; preprocessing/data acquisition costs are separate from both displayed offline bounds."
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
      "note": "Each comparison has the same square-root relation; the original p and ε formulas are retained.",
      "noteHtml": "Each comparison has the same square-root relation; the original p and ε formulas are retained."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>&#x003BA;</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>&#x02308;</mi><msup><mi>n</mi><mn>2</mn></msup><mo>&#x0002F;</mo><mi>m</mi><mi>&#x02309;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> time, Kothari–Metger–O&#x27;Donnell–Shutty–Wu.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002F;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span> time in the Wagner regime; polynomial time above the classical vector-count threshold.",
    "gain": "Subexponential to polynomial in the strongest comparison. The quantum tradeoff reaches polynomial time throughout <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi><mo>&#x0003D;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>, extending below the smallest reported classical polynomial-time vector-count threshold. The general bounds also describe intermediate improvements when both algorithms have superpolynomial time; their degree depends on the input density <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi><mo>&#x0002F;</mo><mi>n</mi></mrow></math></span>.",
    "gainText": "Subexponential to polynomial in the strongest comparison. The quantum tradeoff reaches polynomial time throughout $m=\\Omega(n^2)$, extending below the smallest reported classical polynomial-time vector-count threshold. The general bounds also describe intermediate improvements when both algorithms have superpolynomial time; their degree depends on the input density $m/n$.",
    "parameter": "n: vector dimension; m≥κn: number of vectors",
    "parameterHtml": "n: vector dimension; m≥κn: number of vectors",
    "model": "Quantum gates / classical bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.9,
          2.86
        ],
        [
          5.2,
          2.86
        ],
        [
          5.2,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$(m/n)^{O_\\kappa(\\lceil n^2/m\\rceil)}$ time, Kothari--Metger--O'Donnell--Shutty--Wu.",
      "classical": "$\\operatorname{poly}(n,m)2^{O(n/\\log(m/n))}$ time in the Wagner regime; polynomial time above the classical vector-count threshold.",
      "parameter": "n: vector dimension; m≥κn: number of vectors",
      "model": "Quantum gates / classical bit operations",
      "note": "Categorical envelope over all admitted m: bounded m/n gives exponential bounds with unspecified constants on both sides; growing m/n changes subexponential powers; near quadratic width quantum time is polynomial; beyond the stated classical threshold both are polynomial. The full m-dependent formulas determine each regime. Interior points are an envelope, not claims of attainable independent rate choices.",
      "noteHtml": "Categorical envelope over all admitted m: bounded m/n gives exponential bounds with unspecified constants on both sides; growing m/n changes subexponential powers; near quadratic width quantum time is polynomial; beyond the stated classical threshold both are polynomial. The full m-dependent formulas determine each regime. Interior points are an envelope, not claims of attainable independent rate choices."
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
    "parameter": "n = log_2 |G| with comparable encoding length; reversible group-operation cost is retained in the entry",
    "parameterHtml": "n = log_2 |G| with comparable encoding length; reversible group-operation cost is retained in the entry",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$O(2^{n/2})$",
      "parameter": "n = log_2 |G| with comparable encoding length; reversible group-operation cost is retained in the entry",
      "model": "generic group operations and polynomial-cost reversible implementations",
      "note": "The quantum polynomial degree depends on operation cost and implementation. The classical generic-operation exponent is one half in the group-order bit length.",
      "noteHtml": "The quantum polynomial degree depends on operation cost and implementation. The classical generic-operation exponent is one half in the group-order bit length."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common size is log_2 N, where N is the group order",
    "parameterHtml": "Common size is log_2 N, where N is the group order",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.9
        ],
        [
          2.4,
          3.9
        ],
        [
          2.4,
          3.9
        ],
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log N)$",
      "classical": "$N^{1+o(1)}$",
      "parameter": "Common size is log_2 N, where N is the group order",
      "model": "black-box group time",
      "note": "Quantum degree unspecified; the classical bound is exponential in the logarithm of the group order.",
      "noteHtml": "Quantum degree unspecified; the classical bound is exponential in the logarithm of the group order."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common size is log_2 |R|; generic black-box representation",
    "parameterHtml": "Common size is log_2 |R|; generic black-box representation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log|R|)$",
      "classical": "$\\widetilde O(|R|^{1/2})$",
      "parameter": "Common size is log_2 |R|; generic black-box representation",
      "model": "generic ring operations",
      "note": "Unknown quantum polynomial degree and the generic square-root classical bound in cardinality. The representation assumptions in the entry apply.",
      "noteHtml": "Unknown quantum polynomial degree and the generic square-root classical bound in cardinality. The representation assumptions in the entry apply."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>R</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common size is log_2 |R|; generic black-box representation",
    "parameterHtml": "Common size is log_2 |R|; generic black-box representation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log|R|)$",
      "classical": "$\\widetilde O(|R|^{1/2})$",
      "parameter": "Common size is log_2 |R|; generic black-box representation",
      "model": "ring operations with coordinate construction",
      "note": "Unknown quantum polynomial degree and the generic square-root classical bound in cardinality. The representation assumptions in the entry apply.",
      "noteHtml": "Unknown quantum polynomial degree and the generic square-root classical bound in cardinality. The representation assumptions in the entry apply."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>&#x003B1;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>m</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><msup><mi>k</mi><mrow><mi>m</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>4</mn><mi>m</mi></msup><mi>m</mi><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Generator count k, variable count m and alpha with k >= (1+1/alpha)^(m+1)",
    "parameterHtml": "Generator count k, variable count m and alpha with k &gt;= (1+1/alpha)^(m+1)",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.5,
          1.0
        ],
        [
          5.2,
          1.0
        ],
        [
          5.2,
          5.2
        ],
        [
          0.5,
          5.2
        ]
      ],
      "quantum": "$O(m(1+\\alpha)^{m/2}k^{m/(m+1)})$",
      "classical": "$O(4^m m k)$",
      "parameter": "Generator count k, variable count m and alpha with k >= (1+1/alpha)^(m+1)",
      "model": "ring and evaluation queries",
      "note": "Envelope across variable count, generator count and admissible alpha. Fixed variable count yields the curve k^(m/(m+1)) versus k; growing variable count also changes the exponential prefactors.",
      "noteHtml": "Envelope across variable count, generator count and admissible alpha. Fixed variable count yields the curve k^(m/(m+1)) versus k; growing variable count also changes the exponential prefactors."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>S</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>S</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common size is log_2 |S|; generic black-box representation",
    "parameterHtml": "Common size is log_2 |S|; generic black-box representation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log|S|)$",
      "classical": "$\\widetilde O(|S|^{1/2})$",
      "parameter": "Common size is log_2 |S|; generic black-box representation",
      "model": "generic semigroup operations",
      "note": "Unknown quantum polynomial degree and the generic square-root classical bound in cardinality. The representation assumptions in the entry apply.",
      "noteHtml": "Unknown quantum polynomial degree and the generic square-root classical bound in cardinality. The representation assumptions in the entry apply."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Semigroup cardinality N and fixed generator count k",
    "parameterHtml": "Semigroup cardinality N and fixed generator count k",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.05,
          1.0
        ],
        [
          0.25,
          1.0
        ],
        [
          0.33333333,
          1.0
        ],
        [
          0.375,
          1.0
        ],
        [
          0.4,
          1.0
        ],
        [
          0.41666667,
          1.0
        ],
        [
          0.42857143,
          1.0
        ],
        [
          0.4375,
          1.0
        ],
        [
          0.44444444,
          1.0
        ],
        [
          0.45,
          1.0
        ],
        [
          0.45454545,
          1.0
        ],
        [
          0.45833333,
          1.0
        ],
        [
          0.46153846,
          1.0
        ],
        [
          0.46428571,
          1.0
        ],
        [
          0.46666667,
          1.0
        ],
        [
          0.46875,
          1.0
        ],
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\widetilde O(N^{1/2-1/(2k)})$",
      "classical": "$O(kN)$",
      "parameter": "Semigroup cardinality N and fixed generator count k",
      "model": "semigroup queries",
      "note": "Joined fixed-generator-count family and limiting exponent; logarithmic factors are retained in the quantum bound.",
      "noteHtml": "Joined fixed-generator-count family and limiting exponent; logarithmic factors are retained in the quantum bound."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>r</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Group encoding log |G| and orbit period r",
    "parameterHtml": "Group encoding log |G| and orbit period r",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log|G|)$",
      "classical": "$O(\\sqrt r)$",
      "parameter": "Group encoding log |G| and orbit period r",
      "model": "group-action operations in the covered platforms",
      "note": "Orbit period and group encoding can grow independently. The region covers polynomial through exponential generic orbit search; each concrete platform supplies its period and operation costs.",
      "noteHtml": "Orbit period and group encoding can grow independently. The region covers polynomial through exponential generic orbit search; each concrete platform supplies its period and operation costs."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>4</mn><mo>&#x0002F;</mo><mn>3</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mi>log</mi><mrow><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mi>log</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mi>q</mi><mo>&#x0002B;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><msup><mi>log</mi><mrow><mn>2</mn><mo>&#x0002B;</mo><mi>o</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Scale is max(n, log q); n is polynomial degree and q is field size. Subpolynomial factors remain in the formulas.",
    "parameterHtml": "Scale is max(n, log q); n is polynomial degree and q is field size. Subpolynomial factors remain in the formulas.",
    "model": "bit operations",
    "evidence": 0.5,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Toward an Optimal Quantum Algorithm for Polynomial Factorization over Finite Fields",
        "url": "https://arxiv.org/abs/1807.09675"
      }
    ],
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          2.0,
          2.0
        ],
        [
          2.01290323,
          2.0097561
        ],
        [
          2.025,
          2.01904762
        ],
        [
          2.03636364,
          2.02790698
        ],
        [
          2.04705882,
          2.03636364
        ],
        [
          2.05714286,
          2.04444444
        ],
        [
          2.06666667,
          2.05217391
        ],
        [
          2.07567568,
          2.05957447
        ],
        [
          2.08421053,
          2.06666667
        ],
        [
          2.09230769,
          2.07346939
        ],
        [
          2.1,
          2.08
        ],
        [
          2.10731707,
          2.08627451
        ],
        [
          2.11428571,
          2.09230769
        ],
        [
          2.12093023,
          2.09811321
        ],
        [
          2.12727273,
          2.1037037
        ],
        [
          2.13333333,
          2.10909091
        ],
        [
          2.13913043,
          2.11428571
        ],
        [
          2.14468085,
          2.11929825
        ],
        [
          2.15,
          2.12413793
        ],
        [
          2.15510204,
          2.12881356
        ],
        [
          2.16,
          2.13333333
        ],
        [
          2.15257732,
          2.12413793
        ],
        [
          2.14468085,
          2.11428571
        ],
        [
          2.13626374,
          2.1037037
        ],
        [
          2.12727273,
          2.09230769
        ],
        [
          2.11764706,
          2.08
        ],
        [
          2.10731707,
          2.06666667
        ],
        [
          2.09620253,
          2.05217391
        ],
        [
          2.08421053,
          2.03636364
        ],
        [
          2.07123288,
          2.01904762
        ],
        [
          2.05714286,
          2.0
        ],
        [
          2.04179104,
          1.95
        ],
        [
          2.025,
          1.9
        ],
        [
          2.00655738,
          1.85
        ],
        [
          1.93333333,
          1.8
        ],
        [
          1.83333333,
          1.75
        ],
        [
          1.73333333,
          1.7
        ],
        [
          1.63333333,
          1.65
        ],
        [
          1.53333333,
          1.6
        ],
        [
          1.43333333,
          1.55
        ],
        [
          1.33333333,
          1.5
        ]
      ],
      "quantum": "$O(n^{4/3+o(1)}\\log^{2+o(1)}q)$",
      "classical": "$O(n^{3/2+o(1)}\\log^{1+o(1)}q+n^{1+o(1)}\\log^{2+o(1)}q)$",
      "parameter": "Scale is max(n, log q); n is polynomial degree and q is field size. Subpolynomial factors remain in the formulas.",
      "model": "bit operations",
      "note": "The curve varies the relative growth of polynomial degree and field bit length. It includes parameter ranges where the recorded classical upper bound is smaller.",
      "noteHtml": "The curve varies the relative growth of polynomial degree and field bit length. It includes parameter ranges where the recorded classical upper bound is smaller."
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
      "note": "Both exact interpolation costs are linear in degree; the query gain is a constant factor.",
      "noteHtml": "Both exact interpolation costs are linear in degree; the query gain is a constant factor."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common size is log_2 q for field size q",
    "parameterHtml": "Common size is log_2 q for field size q",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.9
        ],
        [
          2.4,
          3.9
        ],
        [
          2.4,
          3.9
        ],
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log q)$",
      "classical": "$\\widetilde O(q)$",
      "parameter": "Common size is log_2 q for field size q",
      "model": "gate/time comparison with character evaluation",
      "note": "The polynomial quantum exponent is unspecified; the classical comparison is shift enumeration.",
      "noteHtml": "The polynomial quantum exponent is unspecified; the classical comparison is shift enumeration."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;with&#x000A0;the&#x000A0;dual&#x000A0;oracle</mtext><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;in&#x000A0;the&#x000A0;ordinary-oracle&#x000A0;formulation</mtext></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>2</mn><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mtext>&#x000A0;to&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Hidden-shift length n; the two quantum access models are identified in the entry",
    "parameterHtml": "Hidden-shift length n; the two quantum access models are identified in the entry",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          1.0,
          2.9
        ],
        [
          1.0,
          3.9
        ],
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$O(1)\\text{ with the dual oracle};\\ O(n)\\text{ in the ordinary-oracle formulation}$",
      "classical": "$2^{\\Omega(n)}\\text{ to }O(2^n)$",
      "parameter": "Hidden-shift length n; the two quantum access models are identified in the entry",
      "model": "function-oracle queries",
      "note": "Quantum access ranges from a constant number of dual-oracle queries to O(n) ordinary queries. The classical band represents the stated exponential lower and upper bounds for hard oracle families.",
      "noteHtml": "Quantum access ranges from a constant number of dual-oracle queries to O(n) ordinary queries. The classical band represents the stated exponential lower and upper bounds for hard oracle families."
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
      "note": "Two quantum oracle calls versus linear classical queries; computation over the known function is free on both sides.",
      "noteHtml": "Two quantum oracle calls versus linear classical queries; computation over the known function is free on both sides."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>N</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common size log_2 N; generalized-shift parameter M > N^epsilon for fixed epsilon > 0",
    "parameterHtml": "Common size log_2 N; generalized-shift parameter M &gt; N^epsilon for fixed epsilon &gt; 0",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log N)$",
      "classical": "$\\widetilde O(\\sqrt N)$",
      "parameter": "Common size log_2 N; generalized-shift parameter M > N^epsilon for fixed epsilon > 0",
      "model": "hidden-shift queries and efficient quantum gates",
      "note": "Unknown quantum polynomial degree, under the full M > N^epsilon promise; the classical query exponent is one half in log N.",
      "noteHtml": "Unknown quantum polynomial degree, under the full M &gt; N^epsilon promise; the classical query exponent is one half in log N."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Group encoding length log |G| and selected semidirect-product family",
    "parameterHtml": "Group encoding length log |G| and selected semidirect-product family",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          2.4,
          2.9
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log|G|)$",
      "classical": "$\\operatorname{poly}(|G|)$",
      "parameter": "Group encoding length log |G| and selected semidirect-product family",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison.",
      "noteHtml": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Group encoding length log |G|; nilpotency class two",
    "parameterHtml": "Group encoding length log |G|; nilpotency class two",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          2.4,
          2.9
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log|G|)$",
      "classical": "$O(|G|)$",
      "parameter": "Group encoding length log |G|; nilpotency class two",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison.",
      "noteHtml": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mtext>&#x000A0;to&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Common size log_2 |G|",
    "parameterHtml": "Common size log_2 |G|",
    "model": "Coset-oracle queries",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.0,
          2.9
        ],
        [
          1.0,
          2.9
        ],
        [
          1.0,
          3.9
        ],
        [
          1.0,
          3.9
        ]
      ],
      "quantum": "$O(\\log|G|)$",
      "classical": "$|G|^{\\Omega(1)}\\text{ to }O(|G|)$",
      "parameter": "Common size log_2 |G|",
      "model": "Coset-oracle queries",
      "note": "Quantum sample cost is linear in the group-order bit length. The classical band lies between a positive exponential lower bound on hard families and full oracle acquisition.",
      "noteHtml": "Quantum sample cost is linear in the group-order bit length. The classical band lies between a positive exponential lower bound on hard families and full oracle acquisition."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>q</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Dimension n and field bit length log q; constant characteristic",
    "parameterHtml": "Dimension n and field bit length log q; constant characteristic",
    "model": "The matched resource in the problem statement",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,\\log q)$",
      "classical": "$q^{O(n^2)}$",
      "parameter": "Dimension n and field bit length log q; constant characteristic",
      "model": "The matched resource in the problem statement",
      "note": "Envelope over dimension and field bit length for the stated polynomial quantum algorithm and coefficient-space enumeration. The unknown classical exponent and dimension dependence are retained in the formula.",
      "noteHtml": "Envelope over dimension and field bit length for the stated polynomial quantum algorithm and coefficient-space enumeration. The unknown classical exponent and dimension dependence are retained in the formula."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>q</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Field encoding length log q; fixed degree and number of variables",
    "parameterHtml": "Field encoding length log q; fixed degree and number of variables",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          2.4,
          2.9
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\log q)$",
      "classical": "$\\Omega(\\sqrt q)$",
      "parameter": "Field encoding length log q; fixed degree and number of variables",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison.",
      "noteHtml": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>q</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><msub><mi>O</mi><mi>g</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>; polynomial dependence on genus and extension degree in the stated small-characteristic regimes",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Genus g, q = p^a, characteristic p and extension degree a",
    "parameterHtml": "Genus g, q = p^a, characteristic p and extension degree a",
    "model": "Bit operations",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(g,\\log q)$",
      "classical": "$(\\log q)^{O_g(1)}$; polynomial dependence on genus and extension degree in the stated small-characteristic regimes",
      "parameter": "Genus g, q = p^a, characteristic p and extension degree a",
      "model": "Bit operations",
      "note": "Both polynomial fixed-genus regimes and the parameter-dependent higher-genus regimes are included. The region encodes unspecified degrees and dependence on genus and characteristic.",
      "noteHtml": "Both polynomial fixed-genus regimes and the parameter-dependent higher-genus regimes are included. The region encodes unspecified degrees and dependence on genus and characteristic."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>&#x02113;</mi><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>&#x02113;</mi></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>N</mi><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>&#x02113;</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>&#x02113;</mi></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Random-function range N and fixed collision multiplicity ell >= 2",
    "parameterHtml": "Random-function range N and fixed collision multiplicity ell &gt;= 2",
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
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.33333333,
          0.5
        ],
        [
          0.42857143,
          0.66666667
        ],
        [
          0.46666667,
          0.75
        ],
        [
          0.48387097,
          0.8
        ],
        [
          0.49206349,
          0.83333333
        ],
        [
          0.49606299,
          0.85714286
        ],
        [
          0.49803922,
          0.875
        ],
        [
          0.49902153,
          0.88888889
        ],
        [
          0.49951124,
          0.9
        ],
        [
          0.49975574,
          0.90909091
        ],
        [
          0.4998779,
          0.91666667
        ],
        [
          0.49993896,
          0.92307692
        ],
        [
          0.49996948,
          0.92857143
        ],
        [
          0.49998474,
          0.93333333
        ],
        [
          0.49999237,
          0.9375
        ],
        [
          0.5,
          1.0
        ]
      ],
      "quantum": "$\\Theta(N^{(2^{\\ell-1}-1)/(2^\\ell-1)})$",
      "classical": "$\\Theta(N^{(\\ell-1)/\\ell})$",
      "parameter": "Random-function range N and fixed collision multiplicity ell >= 2",
      "model": "random-oracle queries",
      "note": "The joined family varies fixed collision multiplicity; the final endpoint gives the limiting powers.",
      "noteHtml": "The joined family varies fixed collision multiplicity; the final endpoint gives the limiting powers."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "parameter": "Block bit length n and fixed message length",
    "parameterHtml": "Block bit length n and fixed message length",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          2.4,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$O(2^{n/2})$",
      "parameter": "Block bit length n and fixed message length",
      "model": "chosen-message tag queries",
      "note": "The quantum polynomial degree is unspecified; the classical generic birthday bound is retained.",
      "noteHtml": "The quantum polynomial degree is unspecified; the classical generic birthday bound is retained."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mi>log</mi><mi>q</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>q</mi><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>d</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Encoded size d log q; dimension d and field size q",
    "parameterHtml": "Encoded size d log q; dimension d and field size q",
    "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          2.4,
          2.9
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(d\\log q)$",
      "classical": "$q^{O(d)}$",
      "parameter": "Encoded size d log q; dimension d and field size q",
      "model": "Hidden-label oracle queries and the efficient quantum implementation in the stated family",
      "note": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison.",
      "noteHtml": "The region represents unspecified polynomial quantum degrees and the exponential classical range stated for the hard oracle families. Group, field and dimension promises remain part of the comparison."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;gates&#x000A0;and&#x000A0;at&#x000A0;most&#x000A0;</mtext><mi>n</mi><mi>&#x003BB;</mi><mtext>&#x000A0;queries</mtext></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><msup><mi>&#x003BB;</mi><mi>c</mi></msup></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;lower&#x000A0;bound</mtext><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;random-codeword&#x000A0;search</mtext></mrow></math></span>",
    "gain": "Subexponential-or-exponential classical oracle complexity to polynomial quantum queries and gates.",
    "gainText": "Subexponential-or-exponential classical oracle complexity to polynomial quantum queries and gates.",
    "parameter": "Security parameter lambda, code length n, and code-family constant 0<c<1",
    "parameterHtml": "Security parameter lambda, code length n, and code-family constant 0&lt;c&lt;1",
    "model": "Random-oracle queries; polynomial-time quantum implementation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.5
        ],
        [
          2.4,
          2.5
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\lambda)\\text{ gates and at most }n\\lambda\\text{ queries}$",
      "classical": "$\\Omega(2^{\\lambda^c})\\text{ lower bound};\\ O(n2^n)\\text{ random-codeword search}$",
      "parameter": "Security parameter lambda, code length n, and code-family constant 0<c<1",
      "model": "Random-oracle queries; polynomial-time quantum implementation",
      "note": "The classical region begins at the subexponential lower-bound family 2^(lambda^c), 0<c<1, and extends to the recorded random-codeword search upper bound. It represents the gap between bounds and code-parameter dependence.",
      "noteHtml": "The classical region begins at the subexponential lower-bound family 2^(lambda^c), 0&lt;c&lt;1, and extends to the recorded random-codeword search upper bound. It represents the gap between bounds and code-parameter dependence."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>&#x003BB;</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mi>&#x003BB;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;for&#x000A0;factoring;&#x000A0;parameter-dependent&#x000A0;lattice&#x000A0;attacks&#x000A0;for&#x000A0;LWE</mtext></mrow></math></span>",
    "gain": "Polynomial quantum proving versus superpolynomial classical attacks under the selected cryptographic assumption.",
    "gainText": "Polynomial quantum proving versus superpolynomial classical attacks under the selected cryptographic assumption.",
    "parameter": "Security parameter lambda and the chosen protocol instantiation",
    "parameterHtml": "Security parameter lambda and the chosen protocol instantiation",
    "model": "Prover/attack running time at the protocol success target",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.4
        ],
        [
          2.4,
          2.4
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\lambda)$",
      "classical": "$\\exp(O(\\lambda^{1/3}(\\log\\lambda)^{2/3}))\\text{ for factoring; parameter-dependent lattice attacks for LWE}$",
      "parameter": "Security parameter lambda and the chosen protocol instantiation",
      "model": "Prover/attack running time at the protocol success target",
      "note": "Parameter envelope over cryptographic instantiations: the factoring attack lies in the NFS subexponential band; LWE attacks depend on their lattice parameters. The comparison concerns an honest prover versus an attack that reaches the protocol target.",
      "noteHtml": "Parameter envelope over cryptographic instantiations: the factoring attack lies in the NFS subexponential band; LWE attacks depend on their lattice parameters. The comparison concerns an honest prover versus an attack that reaches the protocol target."
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
    "parameter": "Prime-field bit length n; same classification accuracy and polynomial training overhead",
    "parameterHtml": "Prime-field bit length n; same classification accuracy and polynomial training overhead",
    "model": "Learning time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.63333333
        ],
        [
          2.4,
          2.63333333
        ],
        [
          2.4,
          2.63333333
        ],
        [
          0.05,
          2.63333333
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\exp(O(n^{1/3}(\\log n)^{2/3}))$",
      "parameter": "Prime-field bit length n; same classification accuracy and polynomial training overhead",
      "model": "Learning time",
      "note": "Quantum polynomial degree unspecified; the recorded NFS attack has subexponential power one third in prime-field bit length. Logarithmic factors remain in the formula.",
      "noteHtml": "Quantum polynomial degree unspecified; the recorded NFS attack has subexponential power one third in prime-field bit length. Logarithmic factors remain in the formula."
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
      "note": "The polynomial prefactors n^(1/6),n^(1/2) remain in the formulas. Equivalently, with N=2^n vertices, the powers are1/3 and1/2.",
      "noteHtml": "The polynomial prefactors n^(1/6),n^(1/2) remain in the formulas. Equivalently, with N=2^n vertices, the powers are1/3 and1/2."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msup></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>exp</mi><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>k</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mtext>required</mtext><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mtext>sufficient</mtext></mrow></math></span>",
    "gain": "Exponential to polynomial query complexity in <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math></span> for adjacency-list testing of <span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi mathvariant=\"script\">P</mi><mi>k</mi></msub></mrow></math></span>. Full permutation symmetry and adjacency-matrix graph symmetry impose the stated polynomial limits.",
    "gainText": "Exponential to polynomial query complexity in $k$ for adjacency-list testing of $\\mathcal P_k$. Full permutation symmetry and adjacency-matrix graph symmetry impose the stated polynomial limits.",
    "parameter": "k: tree-depth parameter; ε: fixed testing distance; adjacency-list family P_k",
    "parameterHtml": "k: tree-depth parameter; ε: fixed testing distance; adjacency-list family P_k",
    "model": "Neighbor-oracle queries",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.9
        ],
        [
          2.4,
          2.9
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$(k/\\varepsilon)^{O(1)}$",
      "classical": "$\\exp(\\Omega(k))\\ \\text{required};\\ O(N)\\ \\text{sufficient}$",
      "parameter": "k: tree-depth parameter; ε: fixed testing distance; adjacency-list family P_k",
      "model": "Neighbor-oracle queries",
      "note": "The algorithmic graph-testing family has polynomial quantum cost and an exponential classical lower bound. Polynomial degree and exponential constants are unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents.",
      "noteHtml": "The algorithmic graph-testing family has polynomial quantum cost and an exponential classical lower bound. Polynomial degree and exponential constants are unspecified. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents."
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
      "note": "Parity and exact counting both have linear query complexity; the parity factor1/2 is not an asymptotic speedup.",
      "noteHtml": "Parity and exact counting both have linear query complexity; the parity factor1/2 is not an asymptotic speedup."
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
    "parameter": "n: variables; fixed-width CNF; m: clauses",
    "parameterHtml": "n: variables; fixed-width CNF; m: clauses",
    "model": "Quantum / classical bit-operation time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          2.86,
          2.86
        ],
        [
          2.9,
          2.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,m)2^{O_k(n\\log\\log n/\\sqrt{\\log n})}$",
      "classical": "$\\operatorname{poly}(n,m)2^{O_k(n\\log\\log n/\\sqrt{\\log n})}$",
      "parameter": "n: variables; fixed-width CNF; m: clauses",
      "model": "Quantum / classical bit-operation time",
      "note": "For fixed-width CNF, a quantum computer can use the same recorded subexponential classical algorithm. The diagonal band represents that shared upper bound; unrestricted-width QSETH concerns a separate regime.",
      "noteHtml": "For fixed-width CNF, a quantum computer can use the same recorded subexponential classical algorithm. The diagonal band represents that shared upper bound; unrestricted-width QSETH concerns a separate regime."
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
    "Q": "Polynomial evolution time for a suitably gapped, initialized path, stoquastic frustration-free adiabatic evolution.",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><msup><mi>&#x003B4;</mi><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> time, Bravyi–Terhal sampling under the same path assumptions.",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "n: qubits; δ: sampling accuracy; initialized smooth inverse-polynomial-gap path",
    "parameterHtml": "n: qubits; δ: sampling accuracy; initialized smooth inverse-polynomial-gap path",
    "model": "Quantum evolution/simulation time / classical sampling time",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          2.4
        ],
        [
          0.05,
          2.4
        ]
      ],
      "quantum": "Polynomial evolution time for a suitably gapped, initialized path, stoquastic frustration-free adiabatic evolution.",
      "classical": "$\\operatorname{poly}(n,\\delta^{-1})$ time, Bravyi--Terhal sampling under the same path assumptions.",
      "parameter": "n: qubits; δ: sampling accuracy; initialized smooth inverse-polynomial-gap path",
      "model": "Quantum evolution/simulation time / classical sampling time",
      "note": "The matched path assumptions give polynomial algorithms on both sides. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents.",
      "noteHtml": "The matched path assumptions give polynomial algorithms on both sides. The shaded extent denotes complexity classes with unspecified exponents; its edges are not numerical bounds on those exponents."
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
      "note": "Matched energy-optimization task at the entry’s precision promise.",
      "noteHtml": "Matched energy-optimization task at the entry’s precision promise."
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
      "note": "Both displayed costs concern objective evaluation or circuit sampling; the number K of evaluations needed for global optimization is unspecified, so they do not give a comparable total bound for the stated global-optimization problem.",
      "noteHtml": "Both displayed costs concern objective evaluation or circuit sampling; the number K of evaluations needed for global optimization is unspecified, so they do not give a comparable total bound for the stated global-optimization problem."
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
      "note": "The locally adiabatic search instance gives a matched comparison. General paths retain their separate gap-dependent cost.",
      "noteHtml": "The locally adiabatic search instance gives a matched comparison. General paths retain their separate gap-dependent cost."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>k</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "parameterHtml": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "model": "Gate/time complexity for the specified normalized additive approximation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,m,k,1/\\varepsilon)$",
      "classical": "$\\min\\{O(g2^q),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used.",
      "noteHtml": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "parameterHtml": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "model": "Gate/time complexity for the specified normalized additive approximation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,m,1/\\varepsilon)$",
      "classical": "$\\min\\{O(g2^q),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used.",
      "noteHtml": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>V</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>E</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "parameterHtml": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "model": "Gate/time complexity for the specified normalized additive approximation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(|V|+|E|,1/\\varepsilon)$",
      "classical": "$\\min\\{O(g2^q),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used.",
      "noteHtml": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo>&#x0002C;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "parameterHtml": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "model": "Gate/time complexity for the specified normalized additive approximation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(g,m,1/\\varepsilon,\\log(1/\\delta))$",
      "classical": "$\\min\\{O(g2^q),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used.",
      "noteHtml": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mtext>word&#x000A0;length</mtext><mo>&#x0002C;</mo><mtext>genus</mtext><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "parameterHtml": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "model": "Gate/time complexity for the specified normalized additive approximation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(\\text{word length},\\text{genus},1/\\varepsilon)$",
      "classical": "$\\min\\{O(g2^q),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used.",
      "noteHtml": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo>&#x0002C;</mo><mi>m</mi><mo>&#x0002C;</mo><mi>log</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>G</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "Strand count n, braid length m, group G and accuracy epsilon; fluxon labels",
    "parameterHtml": "Strand count n, braid length m, group G and accuracy epsilon; fluxon labels",
    "model": "Time for the same additive approximation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          2.4
        ],
        [
          0.05,
          2.4
        ]
      ],
      "quantum": "$\\operatorname{poly}(n,m,\\log|G|,1/\\varepsilon)$",
      "classical": "$\\operatorname{poly}(n,m,\\log|G|,1/\\varepsilon)$",
      "parameter": "Strand count n, braid length m, group G and accuracy epsilon; fluxon labels",
      "model": "Time for the same additive approximation",
      "note": "Both methods have polynomial cost for fluxon labels; their polynomial degrees are unspecified. This region does not assert an asymptotic advantage.",
      "noteHtml": "Both methods have polynomial cost for fluxon labels; their polynomial degrees are unspecified. This region does not assert an asymptotic advantage."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "parameterHtml": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
    "model": "Gate/time complexity for the specified normalized additive approximation",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\min\\{O(g2^q),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Input parameters, accuracy epsilon, implemented qubits q, gates g, contraction width w and Boolean encoding size s",
      "model": "Gate/time complexity for the specified normalized additive approximation",
      "note": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used.",
      "noteHtml": "Envelope over precision, representation width and the size of the Boolean path-count encoding. Small-width polynomial regimes and the larger classical simulation costs share the same approximation task; the minimum of the recorded algorithms is used."
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
      "note": "Both costs use exact decision with the Deutsch-Jozsa promise.",
      "noteHtml": "Both costs use exact decision with the Deutsch-Jozsa promise."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "One quantum query versus linear-in-truth-table-size classical queries at the same fixed total-variation accuracy.",
      "noteHtml": "One quantum query versus linear-in-truth-table-size classical queries at the same fixed total-variation accuracy."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mi>M</mi></msqrt><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mo stretchy=\"false\">&#x00028;</mo><mi>M</mi><mo>&#x02264;</mo><mi>N</mi><mo stretchy=\"false\">&#x00029;</mo><mi>;</mi><mtext>&#x000A0;</mtext><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><msqrt><mrow><mi>N</mi><mi>log</mi><mi>M</mi><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0002F;</mo><mi>log</mi><mi>M</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;</mtext><mo stretchy=\"false\">&#x00028;</mo><mi>N</mi><mo>&#x0003C;</mo><mi>M</mi><mo>&#x02264;</mo><msup><mn>2</mn><mi>N</mi></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00398;</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>N</mi><mo>&#x0002C;</mo><mi>M</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "gain": "Polynomial improvement in the stated resource and parameter regime.",
    "gainText": "Polynomial improvement in the stated resource and parameter regime.",
    "parameter": "Oracle string length N and concept count M <= 2^N",
    "parameterHtml": "Oracle string length N and concept count M &lt;= 2^N",
    "model": "Bit queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "An optimal quantum algorithm for the oracle identification problem",
        "url": "https://arxiv.org/abs/1311.7685"
      }
    ],
    "costComparison": {
      "kind": "curve",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          0.125,
          0.25
        ],
        [
          0.25,
          0.5
        ],
        [
          0.375,
          0.75
        ],
        [
          0.5,
          1.0
        ],
        [
          0.625,
          1.0
        ],
        [
          0.75,
          1.0
        ],
        [
          0.875,
          1.0
        ],
        [
          1.0,
          1.0
        ]
      ],
      "quantum": "$\\Theta(\\sqrt M)\\ (M\\le N);\\ \\Theta(\\sqrt{N\\log M/(\\log(N/\\log M)+1)})\\ (N<M\\le2^N)$",
      "classical": "$\\Theta(\\min\\{N,M\\})$",
      "parameter": "Oracle string length N and concept count M <= 2^N",
      "model": "Bit queries",
      "note": "The query curve covers concept counts from small families to the complete 2^N family, including the transition at M=N. Exact logarithmic factors are in the formula.",
      "noteHtml": "The query curve covers concept counts from small families to the complete 2^N family, including the transition at M=N. Exact logarithmic factors are in the formula."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002C;</mo><mi>n</mi><mi>log</mi><mi>n</mi><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x0007D;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>&#x00398;</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;at&#x000A0;constant&#x000A0;distance;&#x000A0;</mtext><mover><mi>O</mi><mo>&#x0007E;</mo></mover><mo stretchy=\"false\">&#x00028;</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;by&#x000A0;full&#x000A0;acquisition</mtext></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Boolean dimension n and distance epsilon",
    "parameterHtml": "Boolean dimension n and distance epsilon",
    "model": "Function-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "Sequential measurements, disturbance and property testing",
        "url": "https://arxiv.org/abs/1607.03236"
      }
    ],
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.0,
          3.4
        ],
        [
          3.9,
          3.4
        ],
        [
          3.9,
          3.9
        ],
        [
          1.0,
          3.9
        ]
      ],
      "quantum": "$O(\\min\\{2^n,n\\log n/\\varepsilon\\})$",
      "classical": "$\\widetilde\\Theta(2^{n/2})\\text{ at constant distance; }\\widetilde O(2^n)\\text{ by full acquisition}$",
      "parameter": "Boolean dimension n and distance epsilon",
      "model": "Function-oracle queries",
      "note": "Accuracy dependence remains explicit. At constant distance the quantum power is one and the classical exponent is one half; increasing required accuracy moves the bound through larger cost classes, with full-domain querying available.",
      "noteHtml": "Accuracy dependence remains explicit. At constant distance the quantum power is one and the classical exponent is one half; increasing required accuracy moves the bound through larger cost classes, with full-domain querying available."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>O</mi><mi>&#x003B5;</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>4</mn></mrow></msup><mo>&#x0002F;</mo><mi>log</mi><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;lower&#x000A0;bound</mtext><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;full&#x000A0;oracle&#x000A0;acquisition</mtext></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Domain size n and fixed distance epsilon",
    "parameterHtml": "Domain size n and fixed distance epsilon",
    "model": "Function-oracle queries",
    "evidence": 1,
    "hardware": 1,
    "hardwareLabel": "Fault-tolerant circuits",
    "costQ": null,
    "costC": null,
    "papers": [
      {
        "title": "New Results on Quantum Property Testing",
        "url": "https://arxiv.org/abs/1005.0523"
      }
    ],
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.25
        ],
        [
          0.05,
          0.25
        ],
        [
          0.05,
          1.0
        ],
        [
          0.05,
          1.0
        ]
      ],
      "quantum": "$O_\\varepsilon(1)$",
      "classical": "$\\Omega(n^{1/4}/\\log n)\\text{ lower bound};\\ O(n)\\text{ full oracle acquisition}$",
      "parameter": "Domain size n and fixed distance epsilon",
      "model": "Function-oracle queries",
      "note": "The classical range starts at the recorded lower bound and extends to full oracle acquisition. Quantum cost is bounded for each fixed distance.",
      "noteHtml": "The classical range starts at the recorded lower bound and extends to full oracle acquisition. Quantum cost is bounded for each fixed distance."
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
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003A9;</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mo>&#x0002F;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;lower&#x000A0;bound</mtext><mi>;</mi><mtext>&#x000A0;</mtext><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>n</mi><mrow><mn>3</mn><mi>k</mi></mrow></msup><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;full&#x000A0;truth-table&#x000A0;queries</mtext></mrow></math></span>",
    "gain": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "gainText": "Exponential or subexponential to polynomial in the strongest stated regime.",
    "parameter": "Dimension n, constructive inverse-superpolynomial lambda(n), fixed confidence parameter k",
    "parameterHtml": "Dimension n, constructive inverse-superpolynomial lambda(n), fixed confidence parameter k",
    "model": "Quantum-example learning and classical membership-query learning at the stated advantage",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          2.4
        ],
        [
          2.4,
          2.4
        ],
        [
          2.4,
          3.9
        ],
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$\\operatorname{poly}(n)$",
      "classical": "$\\Omega(n^{2k}/\\lambda(n))\\text{ lower bound};\\ O(n^{3k}\\lambda(n)^{-2})\\text{ full truth-table queries}$",
      "parameter": "Dimension n, constructive inverse-superpolynomial lambda(n), fixed confidence parameter k",
      "model": "Quantum-example learning and classical membership-query learning at the stated advantage",
      "note": "The region covers the full permitted inverse-superpolynomial hardness parameter rather than selecting it. Quasipolynomial, subexponential and exponential classical costs depend on lambda(n); its stated lower limit bounds full truth-table querying by the displayed exponential scale.",
      "noteHtml": "The region covers the full permitted inverse-superpolynomial hardness parameter rather than selecting it. Quasipolynomial, subexponential and exponential classical costs depend on lambda(n); its stated lower limit bounds full truth-table querying by the displayed exponential scale."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>T</mi><mo>&#x0002C;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>G</mi><msup><mn>2</mn><mi>q</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>&#x000A0;state-vector&#x000A0;simulation,&#x000A0;with&#x000A0;width-dependent&#x000A0;improvements</mtext></mrow></math></span>",
    "gain": "No established asymptotic speedup",
    "gainText": "No established asymptotic speedup",
    "parameter": "Verified circuit size T, security parameter lambda, and the resulting honest prover circuit with G gates and q qubits",
    "parameterHtml": "Verified circuit size T, security parameter lambda, and the resulting honest prover circuit with G gates and q qubits",
    "model": "Honest-prover running time at the same protocol acceptance probability",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$\\operatorname{poly}(T,\\lambda)$",
      "classical": "$O(G2^q)\\text{ state-vector simulation, with width-dependent improvements}$",
      "parameter": "Verified circuit size T, security parameter lambda, and the resulting honest prover circuit with G gates and q qubits",
      "model": "Honest-prover running time at the same protocol acceptance probability",
      "note": "The comparison uses simulation of the same honest prover, rather than the classical verifier. Circuit size and width vary with the verified computation and security parameter, giving a simulation-cost region.",
      "noteHtml": "The comparison uses simulation of the same honest prover, rather than the classical verifier. Circuit size and width vary with the verified computation and security parameter, giving a simulation-cost region."
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
      "note": "The separation concerns certified entropy against side information and protocol success, rather than two finite running times for the same classical output guarantee.",
      "noteHtml": "The separation concerns certified entropy against side information and protocol success, rather than two finite running times for the same classical output guarantee."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Ideal sampling compares polynomial quantum cost with the best applicable exponential or subexponential generic classical simulator.",
    "gainText": "Ideal sampling compares polynomial quantum cost with the best applicable exponential or subexponential generic classical simulator.",
    "parameter": "Common size g+n; qubit count n, gate count g, width w, path-count encoding size s, and sampling accuracy",
    "parameterHtml": "Common size g+n; qubit count n, gate count g, width w, path-count encoding size s, and sampling accuracy",
    "model": "Operations per sample from the specified circuit distribution",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.0,
          1.0
        ],
        [
          1.0,
          1.0
        ],
        [
          1.0,
          3.9
        ],
        [
          1.0,
          3.9
        ]
      ],
      "quantum": "$O(g+n)$",
      "classical": "$\\min\\{O(g2^n),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Common size g+n; qubit count n, gate count g, width w, path-count encoding size s, and sampling accuracy",
      "model": "Operations per sample from the specified circuit distribution",
      "note": "With total circuit description size g+n as the common scale, quantum execution is linear. The classical minimum varies from polynomial costs for small width or easy subfamilies through exponential simulation. Noise assumptions and required sampling accuracy remain those of the entry.",
      "noteHtml": "With total circuit description size g+n as the common scale, quantum execution is linear. The classical minimum varies from polynomial costs for small width or easy subfamilies through exponential simulation. Noise assumptions and required sampling accuracy remain those of the entry."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>n</mi><msup><mn>2</mn><mi>n</mi></msup><mo>&#x0002B;</mo><mi>m</mi><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>;&#x000A0;collision-aware&#x000A0;and&#x000A0;fixed-loss&#x000A0;bounds&#x000A0;in&#x000A0;the&#x000A0;entry</mtext></mrow></math></span>",
    "gain": "Ideal sampling compares polynomial optical resources with exponential classical bounds, keeping photon and mode counts independent.",
    "gainText": "Ideal sampling compares polynomial optical resources with exponential classical bounds, keeping photon and mode counts independent.",
    "parameter": "Scale max(m,n); mode count m, photon count n, loss and target distribution",
    "parameterHtml": "Scale max(m,n); mode count m, photon count n, loss and target distribution",
    "model": "Optical-element implementation cost versus classical sampling operations",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.0,
          0.05
        ],
        [
          2.0,
          3.9
        ],
        [
          0.05,
          3.9
        ]
      ],
      "quantum": "$O(m^2)$",
      "classical": "$O(n2^n+mn^2)\\text{; collision-aware and fixed-loss bounds in the entry}$",
      "parameter": "Scale max(m,n); mode count m, photon count n, loss and target distribution",
      "model": "Optical-element implementation cost versus classical sampling operations",
      "note": "Envelope over photon count, mode count and collisions, including the loss-dependent polynomial regime. The displayed quantum cost is interferometer implementation; the photon-detection/output cost is specified by the physical instance.",
      "noteHtml": "Envelope over photon count, mode count and collisions, including the loss-dependent polynomial regime. The displayed quantum cost is interferometer implementation; the photon-detection/output cost is specified by the physical instance."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>m</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>m</mi><msup><mi>N</mi><mn>3</mn></msup><msup><mn>2</mn><mrow><mi>N</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo stretchy=\"false\">&#x00029;</mo><mtext>;&#x000A0;polynomial&#x000A0;subclasses&#x000A0;and&#x000A0;fixed-loss&#x000A0;regimes&#x000A0;in&#x000A0;the&#x000A0;entry</mtext></mrow></math></span>",
    "gain": "General ideal instances compare polynomial optical resources with exponential hafnian-based sampling time; structure and loss determine the comparator.",
    "gainText": "General ideal instances compare polynomial optical resources with exponential hafnian-based sampling time; structure and loss determine the comparator.",
    "parameter": "Scale max(m,N); mode count m, detected photons N, squeezing, loss and numerical cutoff",
    "parameterHtml": "Scale max(m,N); mode count m, detected photons N, squeezing, loss and numerical cutoff",
    "model": "Optical-element implementation cost versus classical sampling operations",
    "evidence": 0.75,
    "hardware": 0,
    "hardwareLabel": "NISQ",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.0,
          0.05
        ],
        [
          2.0,
          3.4
        ],
        [
          0.05,
          3.4
        ]
      ],
      "quantum": "$O(m^2)$",
      "classical": "$O(mN^3 2^{N/2})\\text{; polynomial subclasses and fixed-loss regimes in the entry}$",
      "parameter": "Scale max(m,N); mode count m, detected photons N, squeezing, loss and numerical cutoff",
      "model": "Optical-element implementation cost versus classical sampling operations",
      "note": "Envelope over mode count, detected photons and loss. The conditional classical sampling bound depends exponentially on detected photon count, with the stated polynomial subclasses and loss regimes.",
      "noteHtml": "Envelope over mode count, detected photons and loss. The conditional classical sampling bound depends exponentially on detected photon count, with the stated polynomial subclasses and loss regimes."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo>&#x0002B;</mo><mi>n</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial quantum sampling versus the best applicable exponential or subexponential classical simulator.",
    "gainText": "Polynomial quantum sampling versus the best applicable exponential or subexponential classical simulator.",
    "parameter": "Common size g+n; qubit count n, gate count g, width w, path-count encoding size s, and sampling accuracy",
    "parameterHtml": "Common size g+n; qubit count n, gate count g, width w, path-count encoding size s, and sampling accuracy",
    "model": "Operations per sample from the specified circuit distribution",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          1.0,
          1.0
        ],
        [
          1.0,
          1.0
        ],
        [
          1.0,
          3.9
        ],
        [
          1.0,
          3.9
        ]
      ],
      "quantum": "$O(g+n)$",
      "classical": "$\\min\\{O(g2^n),\\operatorname{poly}(g)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Common size g+n; qubit count n, gate count g, width w, path-count encoding size s, and sampling accuracy",
      "model": "Operations per sample from the specified circuit distribution",
      "note": "With total circuit description size g+n as the common scale, quantum execution is linear. The classical minimum varies from polynomial costs for small width or easy subfamilies through exponential simulation. Noise assumptions and required sampling accuracy remain those of the entry.",
      "noteHtml": "With total circuit description size g+n as the common scale, quantum execution is linear. The classical minimum varies from polynomial costs for small width or easy subfamilies through exponential simulation. Noise assumptions and required sampling accuracy remain those of the entry."
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
    "Q": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span>",
    "C": "<span class=\"math-inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>min</mo><mo stretchy=\"false\">&#x0007B;</mo><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><msup><mn>2</mn><mi>n</mi></msup><msup><mi>&#x003B5;</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mi>log</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B4;</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo>&#x0002C;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>&#x003B5;</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>w</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002C;</mo><mo>poly</mo><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mn>2</mn><mrow><mi>O</mi><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x0002F;</mo><msqrt><mrow><mi>log</mi><mi>s</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo stretchy=\"false\">&#x0007D;</mo></mrow></math></span>",
    "gain": "Polynomial quantum gates versus the best applicable exponential or subexponential generic classical trace computation.",
    "gainText": "Polynomial quantum gates versus the best applicable exponential or subexponential generic classical trace computation.",
    "parameter": "Gate count g, qubits n, additive accuracy epsilon, failure delta, width w and path-count encoding s",
    "parameterHtml": "Gate count g, qubits n, additive accuracy epsilon, failure delta, width w and path-count encoding s",
    "model": "Gate/time cost for the same normalized-trace accuracy",
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
    "costComparison": {
      "kind": "region",
      "points": [
        [
          0.05,
          0.05
        ],
        [
          2.4,
          0.05
        ],
        [
          2.4,
          5.2
        ],
        [
          0.05,
          5.2
        ]
      ],
      "quantum": "$O(g\\varepsilon^{-2}\\log(1/\\delta))$",
      "classical": "$\\min\\{O(g2^n\\varepsilon^{-2}\\log(1/\\delta)),\\operatorname{poly}(g,1/\\varepsilon)2^{O(w)},\\operatorname{poly}(s)2^{O(s/\\sqrt{\\log s})}\\}$",
      "parameter": "Gate count g, qubits n, additive accuracy epsilon, failure delta, width w and path-count encoding s",
      "model": "Gate/time cost for the same normalized-trace accuracy",
      "note": "Region over circuit size, accuracy and contraction width; the complete cost formulas retain their shared accuracy dependence.",
      "noteHtml": "Region over circuit size, accuracy and contraction width; the complete cost formulas retain their shared accuracy dependence."
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
      "note": "The classical logarithmic band contains its logarithmic depth lower bound and polylogarithmic upper bound; quantum depth is constant.",
      "noteHtml": "The classical logarithmic band contains its logarithmic depth lower bound and polylogarithmic upper bound; quantum depth is constant."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas.",
      "noteHtml": "Leading asymptotic powers; logarithmic and subpolynomial factors are retained in the formulas."
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
      "note": "At fixed bounded error, subgroup identification uses quadratic quantum queries versus the exponential generic classical search bound.",
      "noteHtml": "At fixed bounded error, subgroup identification uses quadratic quantum queries versus the exponential generic classical search bound."
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
      "note": "Exact classical leader election is impossible on the specified anonymous networks; there is no finite classical running-time coordinate.",
      "noteHtml": "Exact classical leader election is impossible on the specified anonymous networks; there is no finite classical running-time coordinate."
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
      "note": "The comparison is success probability 1 versus 8/9 with arbitrary local computation, rather than a running-time separation.",
      "noteHtml": "The comparison is success probability 1 versus 8/9 with arbitrary local computation, rather than a running-time separation."
    }
  }
];
window.SAMPLE_DATA = window.CATALOGUE_POINTS;
