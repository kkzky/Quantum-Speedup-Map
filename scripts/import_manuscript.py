"""Explicitly import a UTF-8 manuscript before reviewing and committing it."""
import argparse
from pathlib import Path
import tempfile


ROOT = Path(__file__).resolve().parents[1]


def import_manuscript(source: Path) -> Path:
    source = source.expanduser().resolve(strict=True)
    if not source.is_file():
        raise ValueError(f'Not a file: {source}')
    content = source.read_text(encoding='utf-8')
    destination = ROOT / 'sources/catalogue-preview.tex'
    if source == destination.resolve():
        return destination
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(mode='w', encoding='utf-8', newline='\n',
                                         dir=destination.parent, suffix='.tex.importing',
                                         delete=False) as output:
            temporary = Path(output.name)
            output.write(content)
        temporary.replace(destination)
    finally:
        if temporary is not None:
            temporary.unlink(missing_ok=True)
    return destination


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', required=True, type=Path,
                        help='Path to the UTF-8 TeX manuscript to import.')
    args = parser.parse_args()
    try:
        import_manuscript(args.source)
    except (OSError, UnicodeError, ValueError) as error:
        parser.error(str(error))
    print('Imported manuscript to sources/catalogue-preview.tex')


if __name__ == '__main__':
    main()
