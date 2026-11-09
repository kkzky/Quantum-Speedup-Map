# Data model

## Records and identifiers

The catalogue is organized around problems. Algorithms addressing the same problem remain in one entry, with their complexity comparisons and literature definitions.

An entry has a stable identifier such as `entry-001`, its original integer `number`, and a position in the catalogue's reading order. Filenames use four digits, for example `data/entries/0001.json`. Original numbering and reading order are separate: entries 101–107 occur in the chapters matching their subjects.

The current dataset contains 102 entries. The original number range is 1–107, with 45, 47, 48, 57 and 58 absent. All entries 91–100 remain in the complexity chapter.

## Entry contents

| Field | Meaning |
| --- | --- |
| `id`, `number`, `ordinal` | Stable database identifier, original catalogue number and reading-order position. |
| `title`, `title_latex` | Searchable title and its LaTeX form. |
| `chapter_id` | Membership in one of the four subject chapters. |
| `problem` | Formal problem name and statement, background and resource-model information. |
| `quantum_speedup.quantum` | Quantum complexity headline and its detailed conditions and explanation. |
| `quantum_speedup.classical` | Classical comparison headline and its detailed conditions and explanation. |
| `labels.strength` | Speedup category and the accompanying comparison text. |
| `labels.evidence` | Evidence category and its explanation. |
| `labels.hardware` | Implementation category and its resource discussion. |
| `algorithm_items` | Literature index items, including the definitions and algorithm locators supplied in the catalogue. |
| `citation_ids` | Citations occurring in the entry. |
| `source_latex` | The imported entry in its original LaTeX form. |

LaTeX fields carry the mathematical content. Derived text fields remove prose formatting while retaining formulas in LaTeX for searching and inspection. General parameter-dependent bounds, promises, input representations and approximation conditions stay together in their comparison fields.

## Classification

The category definitions belong to the catalogue metadata. Each entry selects one category for each of three dimensions and retains a free-text explanation. Color keys preserve the catalogue's red strength, blue evidence and green hardware labels. White represents an unestablished comparison or a dimension that does not apply, as explained in the entry.

The strength category represents the strongest supported comparison across parameter regimes and input models. The complexity fields record the general bounds and assumptions for the applicable regimes.

The first three subject chapters concern discrete computational problems. The fourth chapter has a broader scope because its problems describe or constrain quantum complexity classes.

## Literature and citations

A literature record describes a shared reference. A citation describes one occurrence of a reference in an entry. Keeping these records separate preserves the different theorems, pages or algorithm definitions cited from the same work.

arXiv references use identifiers such as `arxiv-quant-ph-9605043`. Different arXiv representations and versions share the base arXiv identifier, while their exact URLs remain in the access records. Other reference identifiers are derived from their cited URLs. `citation_labels_latex` preserves the bibliographic labels used in the source; `external_ids` stores an arXiv identifier when available.

Each citation identifies its entry and section, the shared literature record, its access URL, and the surrounding citation or locator text. LaTeX escaping is decoded in the URL field. Citations in an algorithm index also attach to that particular item. Repeated citations therefore remain available at their original positions.

`context_latex` contains the cited passage. `start` and `end` locate the complete hyperlink command within that passage, using zero-based Python string offsets with an exclusive end. SQLite exposes the same values as `start_offset` and `end_offset`. `locator_latex` contains the algorithm item's theorem, section, equation or page information when supplied; it is null for occurrences without a separately extracted locator.

`data/reference_access.json` maps original citation URLs to additional access routes. Access records retain the URL, its representation type and its provenance. Provenance distinguishes:

- A URL present in the catalogue.
- A URL present in the research notes.
- A full-text route resolved from a landing page.
- A full-text route discovered on a primary source.
- A standard arXiv PDF route constructed from an arXiv identifier.

The original URL remains attached to the citation. An added route does not replace a version-specific HTML or PDF URL. A standard URL pattern identifies an access route; it does not record a prior visit to that URL.

## Relationships

Relations are named groups linking entries through shared algorithms, assumptions or computational models. Each relation stores its description and member entry identifiers. A relation with several members remains a group rather than an inferred set of pairwise dependencies.

The database also supports direct links from entries to citations, citations to literature records, entries to chapters, and entries to classification categories.

## SQLite tables

| Table | Contents and principal keys |
| --- | --- |
| `metadata` | Catalogue JSON values, keyed by `key`. |
| `chapters` | Four chapter records, keyed by `id`. |
| `categories` | Classification dimensions, labels and RGB components, keyed by `id`. |
| `entries` | Problem records, keyed by `id`; includes `record_json` for the complete structured entry. |
| `comparisons` | Quantum and classical comparisons, keyed by `(entry_id, model)`. |
| `entry_labels` | Classification assignments and explanations, keyed by `(entry_id, dimension)`. |
| `algorithm_items` | Literature-index items, keyed by `(entry_id, item_number)`. |
| `references` | Literature records, keyed by `id`. Quote this table name in SQL as `"references"`. |
| `reference_links` | Access URLs, representation kinds and provenance for each reference. |
| `citations` | Citation occurrences, keyed by `id`, with entry, reference and optional algorithm-item links. |
| `relations` | Named multi-entry relations, keyed by `id`. |
| `relation_members` | Relation membership, keyed by `(relation_id, entry_id)`. |
| `entry_search` | FTS5 search over title, problem, quantum and classical comparisons, labels and algorithm items. |

Category identifiers are stored in `data/catalogue.json`. For example, `strength-exponential-subexponential-to-polynomial` identifies the strongest speedup category, `evidence-proved` identifies the fully rigorous category, and `hardware-small` identifies small-instance physical implementation or benchmark results.

## Storage and maintenance

JSON is the editable structured dataset. SQLite is generated from it for filtering, joining and full-text searching. The TeX file is the source snapshot for the initial import and preserves the complete imported wording and formulas.

To import a new catalogue snapshot, update `sources/catalogue.tex` and run:

```sh
python scripts/import_catalogue.py --source sources/catalogue.tex
python scripts/build_database.py
```

To update entry, reference, citation or relation records directly, edit the appropriate JSON files and run:

```sh
python scripts/build_database.py
```

`reference_access.json` is an input to the TeX importer. Changes to that map are incorporated when the importer next reconstructs the reference records. The SQLite builder reads access links from `references.json`.

Retain entry identifiers when editing an existing problem. Preserve exact access URLs and attach new locators to the citation occurrence that uses them. Update category explanations together with any changed comparison bounds.
