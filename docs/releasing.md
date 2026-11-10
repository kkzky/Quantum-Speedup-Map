# Publishing a stable release

The production website at https://kkzky.github.io/Quantum-Speedup-Map/ is deployed by `.github/workflows/release.yml` when a stable GitHub Release is published. Pushes to `main`, tag creation, drafts and prereleases do not deploy the website. The workflow builds the commit associated with the release event and deploys only the latest stable release.

## Prepare the version

1. Update `VERSION`, the version and date in `CITATION.cff`, and `docs/releases/vX.Y.Z.md`.
2. Edit the committed manuscript in `sources/catalogue-preview.tex` and the JSON inputs in `data/` as needed. To import an external manuscript explicitly, run `python scripts/import_manuscript.py --source PATH` and commit the result.
3. Run `python -m pip install -r requirements.txt`, then `python scripts/build_all.py`. Review the local website and commit the release contents.
4. Run `python scripts/package_release.py` from that commit. This creates three downloads in `dist/` and the production website in `_site/`.

The normal build reads only repository inputs. It does not search for or import a manuscript from a parent directory. The release workflow uses Python 3.13.12 on Ubuntu 24.04 and the package versions in `requirements.txt`.

## Publish

1. Create tag `vX.Y.Z` at the reviewed commit and push it.
2. Create a draft GitHub Release for that tag. Use the prepared release notes and attach the three files from `dist/`.
3. Publish the release as the latest stable release. The tag must match `v` followed by `VERSION`.
4. Confirm that **Publish stable release** completes and that the website footer shows the released version.

Uploading the assets before publication also supports immutable releases. The workflow preserves existing assets and adds missing assets when the release permits uploads. A failed deployment can be rerun from GitHub Actions; an older release cannot replace the current latest stable website.

GitHub Pages must use **GitHub Actions** as its source. The `github-pages` environment permits release tags matching `v*`. Production pages are copied from `site/` to the website root. Legacy `visualization/demo/` and offline HTML links redirect to the corresponding formal entry points, retaining query strings and page anchors.

The release downloads are an offline HTML map, a ZIP of the JSON database and supporting metadata, and the SQLite database. Citation information is included in `CITATION.cff` and the JSON download.
