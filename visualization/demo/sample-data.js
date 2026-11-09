window.SAMPLE_DATA = [
  {
    "slug": "search",
    "name": "Unstructured search",
    "shortName": "Grover",
    "problem": "Given coherent access to a Boolean oracle \\[ f:\\{0,\\ldots,N-1\\}\\longrightarrow\\{0,1\\}, \\] output an $x$ with $f(x)=1$, or report that no such $x$ exists, with success probability at least $2/3$. Let $M=|f^{-1}(1)|$. In a combinatorial search problem, $x$ represents a candidate solution and $f$ its feasibility predicate. Complexity is measured in oracle queries for both models, with an additional quantum gate bound expressed in terms of the oracle implementation cost.",
    "quantum": {
      "headline_latex": "$\\Theta(\\sqrt N)$ oracle queries, Grover search and amplitude amplification.",
      "headline_text": "$\\Theta(\\sqrt N)$ oracle queries, Grover search and amplitude amplification.",
      "details_latex": "For $M\\ge1$, the expected query bound is $O(\\sqrt{N/M})$, including the case of unknown $M$.\nIf a reversible evaluation of $f$ costs $C_f$ gates, the direct implementation uses\n$O((C_f+\\log N)\\sqrt{N/M})$ gates.\nFor a general reversible trial with success probability $p$, amplitude amplification reduces the required number of trials to $O(p^{-1/2})$.",
      "details_text": "For $M\\ge1$, the expected query bound is $O(\\sqrt{N/M})$, including the case of unknown $M$. If a reversible evaluation of $f$ costs $C_f$ gates, the direct implementation uses $O((C_f+\\log N)\\sqrt{N/M})$ gates. For a general reversible trial with success probability $p$, amplitude amplification reduces the required number of trials to $O(p^{-1/2})$."
    },
    "classical": {
      "headline_latex": "$\\Theta(N)$ oracle queries, exhaustive or randomized search.",
      "headline_text": "$\\Theta(N)$ oracle queries, exhaustive or randomized search.",
      "details_latex": "Under a promise of $M\\ge1$ marked inputs, randomized sampling requires $\\Theta(N/M)$ queries in the worst case over their locations. A general trial with success probability $p$ needs $\\Theta(p^{-1})$ independent repetitions. The upper and lower bounds concern the same Boolean-oracle access model.",
      "details_text": "Under a promise of $M\\ge1$ marked inputs, randomized sampling requires $\\Theta(N/M)$ queries in the worst case over their locations. A general trial with success probability $p$ needs $\\Theta(p^{-1})$ independent repetitions. The upper and lower bounds concern the same Boolean-oracle access model."
    },
    "evidence": "Fully rigorous: the classical and quantum query lower bounds match the stated algorithms; see Bennett–Bernstein–Brassard–Vazirani (1997).",
    "hardware": "Small-instance search circuits have been implemented. A useful large search requires $\\lceil\\log_2N\\rceil$ logical candidate qubits, reversible-oracle workspace, and $\\Theta(\\sqrt N)$ coherent iterations in the worst case.",
    "papers": [
      {
        "title": "A Fast Quantum Mechanical Algorithm for Database Search",
        "url": "https://arxiv.org/pdf/quant-ph/9605043",
        "locator": "Section 3, ``Algorithm'', preprint p.~3, steps (i)--(iii)."
      },
      {
        "title": "Quantum Amplitude Amplification and Estimation",
        "url": "https://arxiv.org/pdf/quant-ph/0005055",
        "locator": "Section 2, Theorem 2 for known success probability; Theorem 3 and \\textsc{QSearch} for unknown success probability, preprint pp.~7--9."
      }
    ]
  },
  {
    "slug": "mst",
    "name": "Minimum spanning tree",
    "shortName": "Spanning tree",
    "problem": "Given a connected undirected graph $G=(V,E)$, $|V|=n$, $|E|=m$, and weights $w:E\\to\\mathbb R$, output a spanning tree $T$ minimizing $\\sum_{e\\in T}w(e)$. This is the minimum-cost network connecting all vertices. The comparison counts weight-oracle queries; explicit-input classical time counts comparisons and RAM operations, and quantum gate cost includes reversible weight access.",
    "quantum": {
      "headline_latex": "$\\Theta(n^{3/2})$ matrix queries or $\\Theta(\\sqrt{nm})$ array queries, D\\\"urr--Heiligman--H{\\o}yer--Mhalla.",
      "headline_text": "$\\Theta(n^{3/2})$ matrix queries or $\\Theta(\\sqrt{nm})$ array queries, Dürr–Heiligman–Høyer–Mhalla.",
      "details_latex": "The adjacency array supplies each vertex degree and coherent access to its indexed weighted neighbors. Both bounds allow bounded error and have polylogarithmic computational overhead when graph access and weight comparison are efficient. The output consists of $n-1$ classical edges.",
      "details_text": "The adjacency array supplies each vertex degree and coherent access to its indexed weighted neighbors. Both bounds allow bounded error and have polylogarithmic computational overhead when graph access and weight comparison are efficient. The output consists of $n-1$ classical edges."
    },
    "classical": {
      "headline_latex": "$O(m)$ expected time, Karger--Klein--Tarjan; $\\Theta(n^2)$ matrix queries.",
      "headline_text": "$O(m)$ expected time, Karger–Klein–Tarjan; $\\Theta(n^2)$ matrix queries.",
      "details_latex": "The randomized linear-time algorithm uses an explicit edge list and weight comparisons. In the oracle representation, inspecting the edge weights requires $\\Omega(m)$ queries in the worst case. Thus the matrix comparison is $n^2$ against $n^{3/2}$; the array advantage is a factor $\\sqrt{m/n}$. For $b$-bit weights, arithmetic and comparison costs must be included when converting either query bound to bit or gate complexity.",
      "details_text": "The randomized linear-time algorithm uses an explicit edge list and weight comparisons. In the oracle representation, inspecting the edge weights requires $\\Omega(m)$ queries in the worst case. Thus the matrix comparison is $n^2$ against $n^{3/2}$; the array advantage is a factor $\\sqrt{m/n}$. For $b$-bit weights, arithmetic and comparison costs must be included when converting either query bound to bit or gate complexity."
    },
    "evidence": "The classical and quantum query bounds are tight for their respective input representations.",
    "hardware": "Fault-tolerant graph access is required at useful scale. Active search and weight registers use $O(\\log n+b)$ logical qubits, in addition to reversible-oracle workspace and $O(n(\\log n+b))$ classical component records.",
    "papers": [
      {
        "title": "Quantum Query Complexity of Some Graph Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0401091",
        "locator": "Section 4, ``Minimum Spanning Tree'', Theorem 8; Section 8, Theorem 24, for the lower bound."
      },
      {
        "title": "A Randomized Linear-Time Algorithm to Find Minimum Spanning Trees",
        "url": "https://doi.org/10.1145/201019.201022",
        "locator": "The minimum-spanning-tree algorithm and its expected linear-time analysis."
      }
    ]
  },
  {
    "slug": "formula",
    "name": "Balanced AND–OR evaluation",
    "shortName": "AND–OR",
    "problem": "Given a fixed read-once formula $F$ with $N$ input leaves and gates AND, OR and NOT, query input bits and compute $F(x)$. For alternating AND–OR trees, this decides the winner of a finite perfect-information game with known tree and queried terminal outcomes. Complexity counts queries to the leaf bits; gate complexity additionally includes access to the preprocessed formula graph.",
    "quantum": {
      "headline_latex": "$O(\\sqrt N)$ queries, quantum-walk and span-program formula evaluation.",
      "headline_text": "$O(\\sqrt N)$ queries, quantum-walk and span-program formula evaluation.",
      "details_latex": "The bound applies to fixed read-once AND--OR formulas, allowing negations on inputs. Efficient implementations have nearly matching time after preprocessing the formula. The output is the Boolean value at the root.",
      "details_text": "The bound applies to fixed read-once AND–OR formulas, allowing negations on inputs. Efficient implementations have nearly matching time after preprocessing the formula. The output is the Boolean value at the root."
    },
    "classical": {
      "headline_latex": "$\\Theta(N^c)$ for balanced binary trees, randomized alpha--beta pruning, where $c=\\log_2((1+\\sqrt{33})/4)\\approx0.753$.",
      "headline_text": "$\\Theta(N^c)$ for balanced binary trees, randomized alpha–beta pruning, where $c=\\log_2((1+\\sqrt{33})/4)\\approx0.753$.",
      "details_latex": "The randomized algorithm evaluates children in random order and stops as soon as the parent value is determined. This is the optimal randomized classical bound for the balanced alternating binary tree. Arbitrary formulas have structure-dependent classical complexity and the general $O(N)$ leaf-reading upper bound.",
      "details_text": "The randomized algorithm evaluates children in random order and stops as soon as the parent value is determined. This is the optimal randomized classical bound for the balanced alternating binary tree. Arbitrary formulas have structure-dependent classical complexity and the general $O(N)$ leaf-reading upper bound."
    },
    "evidence": "Rigorous: the balanced-tree classical and quantum exponents have matching lower bounds.",
    "hardware": "Fault-tolerant evaluation uses logarithmic graph-address registers, phase-estimation ancillas and coherent access to the preprocessed formula. Regular balanced trees admit succinct graph descriptions.",
    "papers": [
      {
        "title": "Span-Program-Based Quantum Algorithm for Evaluating Formulas",
        "url": "https://theoryofcomputing.org/articles/v008a013/",
        "locator": "Formula-evaluation construction and the main algorithmic theorem."
      },
      {
        "title": "Reflections for Quantum Query Algorithms",
        "url": "https://arxiv.org/pdf/1005.1601",
        "locator": "Theorem 1.3 and Algorithms 1--3: conversion of span-program witnesses to query algorithms."
      }
    ]
  },
  {
    "slug": "collision",
    "name": "Hash collisions",
    "shortName": "Collision",
    "problem": "Given a random function $H$ with $n$-bit outputs and a sufficiently large domain, find distinct $x,x'$ with $H(x)=H(x')$. Collision resistance is the relevant property for many hash-based constructions and commitment schemes. The random-function comparison measures hash-oracle queries; total quantum time additionally counts coherent table access, and explicit circuits use gate or bit complexity.",
    "quantum": {
      "headline_latex": "$O(r+\\sqrt{2^n/r})$ queries with a table of $r$ values, Brassard--H\\o yer--Tapp collision search.",
      "headline_text": "$O(r+\\sqrt{2^n/r})$ queries with a table of $r$ values, Brassard–Høyer–Tapp collision search.",
      "details_latex": "The table parameter satisfies $1\\le r\\le 2^n$. Optimizing it gives $r=2^{n/3}$ and the tight $\\Theta(2^{n/3})$ quantum query bound. Near-matching time assumes efficient coherent lookup into the stored table. A gate implementation includes the lookup circuit and reversible hash cost. The random-function setting yields the matching quantum collision lower-bound scale.",
      "details_text": "The table parameter satisfies $1\\le r\\le 2^n$. Optimizing it gives $r=2^{n/3}$ and the tight $\\Theta(2^{n/3})$ quantum query bound. Near-matching time assumes efficient coherent lookup into the stored table. A gate implementation includes the lookup circuit and reversible hash cost. The random-function setting yields the matching quantum collision lower-bound scale."
    },
    "classical": {
      "headline_latex": "$\\Theta(2^{n/2})$ queries, birthday search or Pollard-rho collision finding.",
      "headline_text": "$\\Theta(2^{n/2})$ queries, birthday search or Pollard-rho collision finding.",
      "details_latex": "Birthday storage is of order $2^{n/2}$ entries; Pollard-rho offers low-memory collision finding under the usual random-function assumptions. For a hash given by a $G$-gate circuit on $\\ell$ input bits, the predicate $x\\ne x'$, $H(x)=H(x')$ has $O(\\ell+n+G)$ gates. Boolean tensor contraction and witness recovery give $\\operatorname{poly}(\\ell+n+G)2^{O((\\ell+n+G)/\\sqrt{\\log(\\ell+n+G)})}$ classical time. A linear-size explicit family therefore has a subexponential comparator.",
      "details_text": "Birthday storage is of order $2^{n/2}$ entries; Pollard-rho offers low-memory collision finding under the usual random-function assumptions. For a hash given by a $G$-gate circuit on $\\ell$ input bits, the predicate $x\\ne x'$, $H(x)=H(x')$ has $O(\\ell+n+G)$ gates. Boolean tensor contraction and witness recovery give $\\operatorname{poly}(\\ell+n+G)2^{O((\\ell+n+G)/\\sqrt{\\log(\\ell+n+G)})}$ classical time. A linear-size explicit family therefore has a subexponential comparator."
    },
    "evidence": "Fully proved in the collision-oracle model with the stated domain promise; random-function collision bounds give the corresponding cryptographic query scale.",
    "hardware": "The time-efficient BHT implementation stores about $2^{n/3}$ entries with coherent access and requires exponentially many fault-tolerant operations. Polynomial-qubit alternatives use different time-memory tradeoffs; the lookup model is a material resource assumption. [Before “ETH is false”, the generic collision comparison used $\\Theta(2^{n/2})$ classical versus $\\Theta(2^{n/3})$ quantum queries, an exponential-constant improvement also used for explicit hash circuits.]",
    "papers": [
      {
        "title": "Quantum Algorithm for the Collision Problem",
        "url": "https://arxiv.org/pdf/quant-ph/9705002",
        "locator": "Theorem 1 and \\textsc{Collision}$(F,k)$: table-based quantum collision search; Section 3: coherent table-access costs."
      },
      {
        "title": "Quantum Lower Bounds for the Collision and the Element Distinctness Problems",
        "url": "https://arxiv.org/pdf/quant-ph/0112086",
        "locator": "Theorem 1.1: tight cube-root collision query lower bound."
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf",
        "locator": "Theorem 1.1 and witness self-reduction: search for a satisfying assignment of the explicit Boolean verification circuit."
      }
    ]
  },
  {
    "slug": "claw",
    "name": "Claw finding",
    "shortName": "Claw finding",
    "problem": "Given evaluation oracles for $f:[N]\\to Z$ and $g:[M]\\to Z$, with $N\\le M$, find $(x,y)$ with $f(x)=g(y)$ or determine that none exists. Claws arise when matching two halves of a cryptanalytic computation, including double encryption and prescribed-degree isogeny search. Complexity is measured in evaluation-oracle queries; runtime includes list-access costs, and explicit functions are additionally compared in gate and bit complexity.",
    "quantum": {
      "headline_latex": "$O((NM)^{1/3})$ queries for $N\\le M<N^2$, and $O(\\sqrt M)$ for $M\\ge N^2$, Tani quantum-walk claw finding.",
      "headline_text": "$O((NM)^{1/3})$ queries for $N\\le M<N^2$, and $O(\\sqrt M)$ for $M\\ge N^2$, Tani quantum-walk claw finding.",
      "details_latex": "The balanced case is $\\Theta(N^{2/3})$. The algorithm stores evaluated subsets of both domains; coherent sorting or lookup contributes to its gate cost. The stated bounded-error bounds include finding a claw or deciding that none exists, for the evaluation-oracle model. Quantum-walk spectral and marked-fraction parameters determine the two regimes.",
      "details_text": "The balanced case is $\\Theta(N^{2/3})$. The algorithm stores evaluated subsets of both domains; coherent sorting or lookup contributes to its gate cost. The stated bounded-error bounds include finding a claw or deciding that none exists, for the evaluation-oracle model. Quantum-walk spectral and marked-fraction parameters determine the two regimes."
    },
    "classical": {
      "headline_latex": "$\\Theta(N+M)$ queries in the worst case, classical list matching.",
      "headline_text": "$\\Theta(N+M)$ queries in the worst case, classical list matching.",
      "details_latex": "Hashing both lists gives expected linear-time matching with suitable value representation; sorting gives a logarithmic time overhead. For $N=M$, the bound is $\\Theta(N)$. If $f$ and $g$ have explicit verification circuits of combined size $G$ and the combined witness length is $\\ell=\\lceil\\log_2N\\rceil+\\lceil\\log_2M\\rceil$, circuit encoding gives $\\operatorname{poly}(\\ell+G)2^{O((\\ell+G)/\\sqrt{\\log(\\ell+G)})}$ classical search. In the balanced case with $G=O(\\log N)$, this becomes $N^{o(1)}$.",
      "details_text": "Hashing both lists gives expected linear-time matching with suitable value representation; sorting gives a logarithmic time overhead. For $N=M$, the bound is $\\Theta(N)$. If $f$ and $g$ have explicit verification circuits of combined size $G$ and the combined witness length is $\\ell=\\lceil\\log_2N\\rceil+\\lceil\\log_2M\\rceil$, circuit encoding gives $\\operatorname{poly}(\\ell+G)2^{O((\\ell+G)/\\sqrt{\\log(\\ell+G)})}$ classical search. In the balanced case with $G=O(\\log N)$, this becomes $N^{o(1)}$."
    },
    "evidence": "Fully proved for the evaluation-oracle task and its matching query lower bounds. Explicit small circuits have the separate representation-dependent classical comparator.",
    "hardware": "Time-efficient walks need coherent access to stored function values and exponential storage in the logarithmic domain size. Reversible function evaluation and walk updates require fault tolerance for cryptographic domains. [Before “ETH is false”, the balanced generic comparison was $\\Theta(N)$ classical versus $\\Theta(N^{2/3})$ quantum queries, also transferred to explicit function evaluations.]",
    "papers": [
      {
        "title": "Claw Finding Algorithms Using Quantum Walk",
        "url": "https://arxiv.org/pdf/0708.2584",
        "locator": "Section 3: claw detection; Section 4, \\textsc{ClawSearch} and Theorem 8: finding a claw and the two domain-size regimes."
      },
      {
        "title": "The Exponential Time Hypothesis Is False",
        "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf",
        "locator": "Theorem 1.1 and witness self-reduction: search for a satisfying assignment of the explicit Boolean verification circuit."
      }
    ]
  },
  {
    "slug": "local",
    "name": "Hypercube local search",
    "shortName": "Local search",
    "problem": "Given value-oracle access to $f:\\{0,1\\}^n\\to\\mathbb R$, output $x$ such that $f(x)\\le f(x\\oplus e_i)$ for every coordinate $i$, with probability at least $2/3$. Values have a finite comparison encoding. This models single-bit local improvement in combinatorial optimization. Complexity is measured in value-oracle queries for both quantum and randomized classical algorithms.",
    "quantum": {
      "headline_latex": "$\\Theta(2^{n/3}n^{1/6})$ queries, quantum sampling and local descent.",
      "headline_text": "$\\Theta(2^{n/3}n^{1/6})$ queries, quantum sampling and local descent.",
      "details_latex": "Minimum finding selects a low-valued starting point, and quantum search finds improving neighbors. The bound is tight. On a fixed-dimensional grid with $N$ vertices and dimension at least six, the optimal quantum query complexity is $\\Theta(N^{1/3})$.",
      "details_text": "Minimum finding selects a low-valued starting point, and quantum search finds improving neighbors. The bound is tight. On a fixed-dimensional grid with $N$ vertices and dimension at least six, the optimal quantum query complexity is $\\Theta(N^{1/3})$."
    },
    "classical": {
      "headline_latex": "$\\Theta(2^{n/2}n^{1/2})$ queries, randomized sampling and local descent.",
      "headline_text": "$\\Theta(2^{n/2}n^{1/2})$ queries, randomized sampling and local descent.",
      "details_latex": "The Aldous-type algorithm samples vertices, chooses the lowest sampled value, and follows improving neighbors. For a fixed-dimensional grid of dimension at least four, the tight randomized bound is $\\Theta(N^{1/2})$.",
      "details_text": "The Aldous-type algorithm samples vertices, chooses the lowest sampled value, and follows improving neighbors. For a fixed-dimensional grid of dimension at least four, the tight randomized bound is $\\Theta(N^{1/2})$."
    },
    "evidence": "Matching quantum and randomized query lower bounds establish the separation.",
    "hardware": "A fault-tolerant implementation needs an $n$-qubit vertex register, value and comparison workspace, and coherent neighborhood access. Exponentially many queries dominate the runtime; the evaluator determines the additional logical-qubit count.",
    "papers": [
      {
        "title": "(Almost) Tight Bounds for Randomized and Quantum Local Search on Hypercubes and Grids",
        "url": "https://arxiv.org/pdf/quant-ph/0504085",
        "locator": "Introduction, Theorems 1--2 and the discussion of matching sampling/descent upper bounds; Section 3 for the hypercube lower bound."
      },
      {
        "title": "Lower Bounds for Local Search by Quantum Arguments",
        "url": "https://arxiv.org/pdf/quant-ph/0307149",
        "locator": "Proposition 2 for the quantum algorithm and the preceding paragraph for randomized sampling and descent."
      }
    ]
  },
  {
    "slug": "factoring",
    "name": "Integer factorization",
    "shortName": "Factoring",
    "problem": "Given an odd composite integer $N$ in binary, output primes $p_i$ and positive integers $e_i$ such that $N=\\prod_i p_i^{e_i}$. Write $n=\\lceil\\log_2N\\rceil$. The balanced semiprime case underlies RSA. The explicit-integer comparison uses quantum gate complexity and classical bit complexity.",
    "quantum": {
      "headline_latex": "$\\widetilde O(n^2)$ total gates, Shor and Regev factoring.",
      "headline_text": "$\\widetilde O(n^2)$ total gates, Shor and Regev factoring.",
      "details_latex": "Shor's order-finding algorithm uses $\\widetilde O(n^3)$ gates with elementary arithmetic and $\\widetilde O(n^2)$ with fast arithmetic; its logical space is $O(n)$. Regev uses $\\widetilde O(n^{3/2})$ gates per circuit and $\\lceil\\sqrt n\\rceil+4$ repetitions, followed by polynomial-time lattice postprocessing. The total quantum gate count is $\\widetilde O(n^2)$, with shorter individual coherent computations. Pilatte establishes unconditional correctness for the recent factoring framework.",
      "details_text": "Shor's order-finding algorithm uses $\\widetilde O(n^3)$ gates with elementary arithmetic and $\\widetilde O(n^2)$ with fast arithmetic; its logical space is $O(n)$. Regev uses $\\widetilde O(n^{3/2})$ gates per circuit and $\\lceil\\sqrt n\\rceil+4$ repetitions, followed by polynomial-time lattice postprocessing. The total quantum gate count is $\\widetilde O(n^2)$, with shorter individual coherent computations. Pilatte establishes unconditional correctness for the recent factoring framework."
    },
    "classical": {
      "headline_latex": "$L_N[1/3,(64/9)^{1/3}]$ heuristic time, general number field sieve.",
      "headline_text": "$L_N[1/3,(64/9)^{1/3}]$ heuristic time, general number field sieve.",
      "details_latex": "Here $L_N[\\alpha,c]=\\exp((c+o(1))(\\log N)^\\alpha(\\log\\log N)^{1-\\alpha})$. This is the standard fastest heuristic comparator for general balanced RSA semiprimes. It includes smooth-relation collection and sparse linear algebra. Rudich--Rousseau also announce deterministic worst-case $N^{o(1)}=2^{o(n)}$ time using the Boolean tensor-contraction theorem. That result specifies a deterministic guarantee; its $o(n)$ exponent does not quantitatively rank it against heuristic GNFS.",
      "details_text": "Here $L_N[\\alpha,c]=\\exp((c+o(1))(\\log N)^\\alpha(\\log\\log N)^{1-\\alpha})$. This is the standard fastest heuristic comparator for general balanced RSA semiprimes. It includes smooth-relation collection and sparse linear algebra. Rudich–Rousseau also announce deterministic worst-case $N^{o(1)}=2^{o(n)}$ time using the Boolean tensor-contraction theorem. That result specifies a deterministic guarantee; its $o(n)$ exponent does not quantitatively rank it against heuristic GNFS."
    },
    "evidence": "Strong evidence under the standard assumption that factoring is classically hard in polynomial time. The algorithms give upper bounds in the explicit-integer model.",
    "hardware": "Small factoring circuits have been demonstrated. RSA-sized instances require fault tolerance and polynomial arithmetic workspace. Gidney's RSA-2048 estimate uses about 1,409 logical qubits and projects fewer than one million physical qubits and an approximately one-week runtime under the specified architecture assumptions.",
    "papers": [
      {
        "title": "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer",
        "url": "https://arxiv.org/pdf/quant-ph/9508027",
        "locator": "Section 5: order finding and factor extraction."
      },
      {
        "title": "An Efficient Quantum Factoring Algorithm",
        "url": "https://arxiv.org/pdf/2308.06572",
        "locator": "Theorem 1.1: circuit cost and repetition count; Section 3: quantum procedure."
      },
      {
        "title": "Unconditional Correctness of Recent Quantum Algorithms for Factoring and Computing Discrete Logarithms",
        "url": "https://www.cambridge.org/core/journals/forum-of-mathematics-pi/article/unconditional-correctness-of-recent-quantum-algorithms-for-factoring-and-computing-discrete-logarithms/3077F5BD48D1F62000B1ED800EB86308",
        "locator": "Main factoring correctness theorem."
      },
      {
        "title": "How to Factor 2048 Bit RSA Integers with Less Than a Million Noisy Qubits",
        "url": "https://arxiv.org/pdf/2505.15917",
        "locator": "Resource-estimate summary and architecture assumptions."
      },
      {
        "title": "Deterministic Factoring in Time $N^{o(1)}$",
        "url": "https://hexagonmath.org/2610.00600v1",
        "locator": "Main deterministic factoring statement."
      }
    ]
  },
  {
    "slug": "even",
    "name": "Even–Mansour key recovery",
    "shortName": "Even–Mansour",
    "problem": "Let $P$ be a public random permutation on $\\{0,1\\}^n$, and let $E(x)=P(x\\oplus k_1)\\oplus k_2$. Given coherent oracle access to both $E$ and $P$, recover $k_1,k_2$. The coherent chosen-plaintext access is part of this cryptographic model, commonly called Q2. The comparison counts coherent or classical oracle queries to the encryption and public permutation, with polynomial auxiliary quantum-gate and classical-bit costs.",
    "quantum": {
      "headline_latex": "$O(n)$ coherent queries and polynomial auxiliary time, Kuwakado--Morii and Simon period finding.",
      "headline_text": "$O(n)$ coherent queries and polynomial auxiliary time, Kuwakado–Morii and Simon period finding.",
      "details_latex": "The function $F(x)=E(x)\\oplus P(x)$ has period $k_1$. The bounded-extra-collision analysis for a random public permutation supplies the success guarantee for Simon sampling; polynomial-time linear algebra recovers the period. One additional evaluation gives $k_2$. Coherent evaluation of both $E$ and $P$ is available in the stated Q2 model, so each sample has polynomial additional gates and two oracle evaluations.",
      "details_text": "The function $F(x)=E(x)\\oplus P(x)$ has period $k_1$. The bounded-extra-collision analysis for a random public permutation supplies the success guarantee for Simon sampling; polynomial-time linear algebra recovers the period. One additional evaluation gives $k_2$. Coherent evaluation of both $E$ and $P$ is available in the stated Q2 model, so each sample has polynomial additional gates and two oracle evaluations."
    },
    "classical": {
      "headline_latex": "$\\widetilde\\Theta(2^n/D)$ public-permutation work with $D$ classical encryption queries, generic Even--Mansour attacks.",
      "headline_text": "$\\widetilde\\Theta(2^n/D)$ public-permutation work with $D$ classical encryption queries, generic Even–Mansour attacks.",
      "details_latex": "The time--data tradeoff has scale $TD\\asymp2^n$, with $2\\le D\\le 2^n$ and total work including data acquisition. Minimizing $D+T$ gives the square-root total-work scale. The lower bound concerns the public random permutation and secret-key encryption access specified by the idealized construction.",
      "details_text": "The time–data tradeoff has scale $TD\\asymp2^n$, with $2\\le D\\le 2^n$ and total work including data acquisition. Minimizing $D+T$ gives the square-root total-work scale. The lower bound concerns the public random permutation and secret-key encryption access specified by the idealized construction."
    },
    "evidence": "Fully proved in the stated random-permutation oracle model, with the bounded-extra-collision analysis supporting the period-recovery algorithm.",
    "hardware": "The algorithm needs polynomial logical qubits for the input, output and period equations, plus workspace for the public permutation and coherent encryption device. The depth is polynomial in $n$ times the oracle depth. Realizing the supplied coherent secret-key oracle is part of the hardware model.",
    "papers": [
      {
        "title": "Breaking Symmetric Cryptosystems Using Quantum Period Finding",
        "url": "https://arxiv.org/pdf/1602.05973",
        "locator": "Theorem 1: Simon sampling with an approximate promise; Section 3.2, ``Application to the Even-Mansour construction'': the Kuwakado--Morii attack and its extra-collision analysis; Figure 6: the period function."
      },
      {
        "title": "Quantum Attacks Without Superposition Queries: The Offline Simon's Algorithm",
        "url": "https://arxiv.org/pdf/2002.12439",
        "locator": "Section 5.1 and Table 2: classical Even--Mansour time--data tradeoff."
      }
    ]
  }
];
