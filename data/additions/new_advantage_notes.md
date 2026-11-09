# Additional literature coverage: verifiable advantage, sampling, and protocols

Date: 2026-11-10.

The accompanying JSON contains 18 additional problem entries and 41 distinct primary-source URLs. The selection was compared with the prior 112-record inventory. Formal mathematical tasks, resource models, and approximation or security conditions are stated in the entries.

## Discovery coverage

Searches covered these connected literatures:

- Verifiable quantum advantage; noninteractive proofs of quantumness; trapdoor claw-free functions; computational Bell tests; classical verification of BQP; certified randomness.
- Random circuit sampling; commuting-circuit/IQP sampling; Fock-state boson sampling; Gaussian and bipartite Gaussian boson sampling; one-clean-qubit computation.
- Constant-depth quantum advantage; noisy shallow circuits; nonlocal games and pseudotelepathy.
- Quantum fingerprinting; Hidden Matching; set-disjointness communication; anonymous distributed leader election.
- Cryptographic concept learning; quantum kernel classification; general hidden-subgroup query complexity; spatial quantum walks.
- Current classical frontiers for noisy circuit simulation, loss in photonic sampling, nonnegative graph applications of GBS, and counting-based circuit simulation.

Selection prioritizes foundational STOC/FOCS/JACM results and influential Science, Nature, Nature Physics, PRL, and related papers. An experimental or complexity paper can identify an important computational task even when its title does not contain “quantum algorithm.”

The core output consists of:

1. Codeword search with random hash constraints.
2. Interactive proofs of quantumness.
3. Classical verification of quantum computation.
4. Certified randomness from an untrusted quantum device.
5. Random circuit sampling.
6. Fock-state boson sampling.
7. Gaussian boson sampling.
8. Sampling commuting quantum circuits.
9. Normalized trace estimation for a quantum circuit.
10. Two-dimensional hidden linear function.
11. Equality in simultaneous-message communication.
12. Hidden matching in one-way communication.
13. Set disjointness in two-party communication.
14. Learning discrete-logarithm interval concepts.
15. Spatial search on a lattice.
16. Hidden subgroup identification in a general finite group.
17. Exact leader election in anonymous networks.
18. Mermin--Peres magic-square game.

## Yamakawa--Zhandry source

The source is arXiv:2204.02063v3 (2024), [Verifiable Quantum Advantage without Structure](https://arxiv.org/abs/2204.02063v3).

Relevant locations:

- Lemma 4.2, printed page 20: for any constants 0<c<c'<1, an explicit folded Reed--Solomon family has n=Theta(lambda), alphabet size 2^{lambda^{Theta(1)}}, list-recovery parameters, and an efficiently decodable dual.
- Section 6, printed pages 26--27 and Figure 1: Prove prepares independent coordinate filter states, Fourier transforms the filter and code states, adds them, applies the dual-code decoder coherently, then inverse transforms and measures.
- Verify tests code membership and the n coordinate hash constraints.
- Lemma 6.9, printed pages 34--35: at most 2^{lambda^c} classical random-oracle queries imply success at most 2^{-Omega(lambda)}, even with unlimited classical computation.
- The keyed variant addresses nonuniform oracle-dependent advice.
- Section 7 applies the same mechanism to classically secure but quantumly breakable primitives. These applications remain linked to the codeword-search entry.
- Explicit cryptographic-hash substitution has a separate computational assumption. The oracle theorem and concrete-hash interpretation occupy different evidence statements.

The Yamakawa–Zhandry construction shares the decoded quantum interferometry node with the existing application. The codeword-hash relation supplies an additional problem node, with its own comparison and literature locations.

## Resource models

Communication and depth results keep their original resources:

- Fingerprinting: Theta(log n) qubits versus Theta(sqrt n) private-coin simultaneous-message bits.
- Hidden Matching: O(log n) qubits versus Theta(sqrt n) public-coin one-way bits.
- Set disjointness: Theta(sqrt n) qubits versus Theta(n) bits.
- Hidden linear function: constant quantum depth versus logarithmic classical bounded-fan-in depth.

The first two separations are conventionally called exponential in communication length. The JSON retains n as the actual input length and uses the existing polynomial tier, with the exact reduction in the strength text. The plot model names distinguish communication from time. A future model-specific color policy can map these without changing their formulas.

The proof/verification, certified-entropy, exact-leader-election, and nonlocal-game entries use the existing “none” asymptotic-time tier when the theorem is a verification, entropy, solvability, or winning-probability statement. Their evidence field records the appropriate theorem or cryptographic security proof.

The general hidden-subgroup entry compares queries. Its generic coherent subgroup test has exponential implementation cost, recorded in hardware and the quantum-complexity paragraph.

## Current classical comparisons

### Finite-gate circuit simulation

RCS, IQP, and DQC1 trace entries retain three independent parameters: qubit count n, gate count g, and sparse Boolean path-count encoding size s; tensor contraction also uses width w.

The comparator is the best applicable member of:

- O(g 2^n) state-vector work (and sampling repetitions where relevant).
- poly(g) 2^{O(w)} tensor contraction.
- poly(s) 2^{O(s/sqrt(log s))} counting-based evaluation for fixed finite algebraic gate sets.

The last bound follows by encoding fixed-gate path weights into a bounded-fan-in Boolean counting computation and using the sparse fixed-width counting bound in Theorem 1.1 / Appendix D of the October 25 2026 version of The Exponential Time Hypothesis Is False. The primary local source eth-openai.txt was read. Sequentially evaluating prefix probabilities gives a sampling algorithm with polynomial overhead. Precision, gate synthesis, and encoding size remain explicit. A gate-size bound is not substituted for a qubit-width bound.

Primary sources:
[Counting theorem](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf);
[Markov--Shi tensor contraction](https://arxiv.org/abs/quant-ph/0511069).

### Sampling with noise, loss, or graph restrictions

- [Aharonov--Gao--Landau--Liu--Vazirani](https://arxiv.org/abs/2211.03999) gives polynomial approximate classical sampling for noisy random circuits in the anticoncentration regime at constant per-gate noise.
- [Anand et al., arXiv:2511.16558v3](https://arxiv.org/abs/2511.16558v3), revised November 6 2026 and accepted to Quantum, gives polynomial sampling for the nonnegative graph distributions used in GBS applications. Its target distribution and assumptions should be carried to any future GBS graph-optimization entries.
- [Lim, arXiv:2611.01434](https://arxiv.org/abs/2611.01434), November 1 2026 preprint, gives polynomial sampling with Haar-average total-variation error at fixed nonzero uniform loss for Fock inputs and equal bounded squeezing. Its preprint status and uniform-loss/Haar-average conditions are explicit.
- [Clifford--Clifford](https://arxiv.org/abs/2005.04214), Theorem 5, supplies the general mode/photon-dependent exact Fock-state average-case bound; the JSON uses the binomial-ratio formula.
- [Quesada et al.](https://arxiv.org/abs/2010.15595), Section III, gives O(m N^3 2^{N/2}) GBS sampling via pure-state conditional probabilities and loop hafnians.
- [Grier et al.](https://arxiv.org/abs/2110.06964) supplies approximate bipartite-GBS hardness in a quadratic mode/photon regime.

Further screened current classical sources:

- [Gaussian boson sampling: Benchmarking quantum advantage](https://arxiv.org/abs/2604.12330): numerical comparison of approximate classical samplers against experimental statistics.
- [Classical Simulation of Lossy Gaussian Boson Sampling beyond Square-Root Regime](https://arxiv.org/abs/2610.06526): loss-dependent polynomial sampling with error O(N eta^3).
- [A polynomial-time classical algorithm for noisy quantum circuits](https://arxiv.org/abs/2407.12768): expectation-value simulation and quasipolynomial sampling under anticoncentration.
- [Electrostatic Limits on Quantum Spatial Search](https://arxiv.org/abs/2610.23560): October 2026 lower bound matching Tulsi for two-dimensional local movement.

## Relationships with existing entries

- Discrete-logarithm learning reuses the existing algorithm ID shor-order as a preprocessing module.
- Spatial search and set-disjointness communication share the Aaronson--Ambainis spatial-search paper and quantum-search mechanism.
- YZ and DQI share Fourier decoding; their relations and algorithmic objectives differ.
- One-clean-qubit trace estimation is the primitive behind trace-closure Jones estimation already present in the prior inventory; connect it as a module.
- The trapdoor-function test and randomness protocol share the same cryptographic primitive but solve different certification tasks.
- Sampling regimes (ideal/noisy, lossless/lossy, arbitrary/nonnegative graph weights) are kept within problem entries with their conditions.

Generalized hidden shifts, Forrelation, Fourier Sampling, Jones/Turaev--Viro invariants, graph spanning-tree sampling, distribution testing, and the already included PAC-learning families were screened as existing material and were not added again. The fourth chapter accommodates one-clean-qubit, verification, and nonlocal-game tasks because of their direct significance for quantum complexity classes and computational models.
