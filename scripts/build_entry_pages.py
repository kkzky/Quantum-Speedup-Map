"""Render the demo's complete catalogue entries as HTML with native MathML."""
import html
import json
from pathlib import Path

from latex2mathml.converter import convert
from pylatexenc.latex2text import LatexNodes2Text
from pylatexenc.latexwalker import (
    LatexCharsNode, LatexGroupNode, LatexMacroNode, LatexMathNode,
    LatexWalker, get_default_latex_context_db,
)
from pylatexenc.macrospec import MacroSpec

ROOT = Path(__file__).resolve().parents[1]
DEMO_ENTRIES = {
    'search': '0001', 'mst': '0031', 'formula': '0041',
    'collision': '0084', 'claw': '0085', 'local': '0091',
    'factoring': '0061', 'even': '0088',
}
TEXT = LatexNodes2Text()
CONTEXT = get_default_latex_context_db()
CONTEXT.add_context_category('web-links', macros=[MacroSpec('href', '{{')], prepend=True)


def render_nodes(nodes):
    parts = []
    for node in nodes:
        raw = node.latex_verbatim()
        if isinstance(node, LatexMathNode):
            opening, closing = node.delimiters
            expression = raw[len(opening):-len(closing)]
            display = 'block' if node.displaytype == 'display' else 'inline'
            math = convert(expression, display=display)
            parts.append(f'<span class="math-{display}">{math}</span>')
        elif isinstance(node, LatexGroupNode):
            content = render_nodes(node.nodelist)
            if node.nodelist and isinstance(node.nodelist[0], LatexMacroNode) and node.nodelist[0].macroname == 'small':
                content = '<small class="historical-note">' + content.rstrip().removesuffix('<br><br>') + '</small>'
            parts.append(content)
        elif isinstance(node, LatexMacroNode):
            args = node.nodeargd.argnlist if node.nodeargd else []
            if node.macroname == 'href':
                url = TEXT.latex_to_text(args[0].latex_verbatim()).strip()
                label = render_nodes(args[1].nodelist)
                parts.append(f'<a href="{html.escape(url, quote=True)}" target="_blank" rel="noreferrer">{label}</a>')
            elif node.macroname in ('emph', 'textit', 'textbf', 'textsc'):
                tag = {'emph': 'em', 'textit': 'em', 'textbf': 'strong', 'textsc': 'span'}[node.macroname]
                attributes = ' class="small-caps"' if node.macroname == 'textsc' else ''
                parts.append(f'<{tag}{attributes}>{render_nodes(args[-1].nodelist)}</{tag}>')
            elif node.macroname == 'par':
                parts.append('<br><br>')
            elif node.macroname != 'small':
                parts.append(html.escape(TEXT.latex_to_text(raw)))
        elif isinstance(node, LatexCharsNode):
            parts.append(html.escape(TEXT.node_to_text(node)))
        else:
            parts.append(html.escape(TEXT.latex_to_text(raw)))
    return ''.join(parts)


def rich(source):
    nodes, _, _ = LatexWalker(source, latex_context=CONTEXT).get_latex_nodes()
    return render_nodes(nodes)


def build():
    catalogue = json.loads((ROOT / 'data/catalogue.json').read_text(encoding='utf-8'))
    categories = {category['id']: category for category in catalogue['categories']}
    pages = {}
    for slug, filename in DEMO_ENTRIES.items():
        entry = json.loads((ROOT / f'data/entries/{filename}.json').read_text(encoding='utf-8'))

        def cell(dimension):
            category = categories[entry['labels'][dimension]['category_id']]
            color = ','.join(str(channel) for channel in category['rgb'])
            label = html.escape(f'{dimension.capitalize()}: {category["label"]}', quote=True)
            return f'<span class="category-cell" style="background:rgb({color})" title="{label}" aria-label="{label}"></span>'

        parts = [
            '<div class="document-heading">',
            f'<h1>{rich(entry["title_latex"])}</h1>',
            '<span class="label-cells">' + ''.join(cell(d) for d in ('strength', 'evidence', 'hardware')) + '</span></div>',
            '<section class="document-problem">',
            f'<h2>Problem <span>({rich(entry["problem"]["name_latex"])})</span></h2>',
            f'<p>{rich(entry["problem"]["statement_latex"])}</p></section>',
            '<section><h2>Quantum speedup</h2>',
        ]
        for model in ('quantum', 'classical'):
            complexity = entry['quantum_speedup'][model]
            parts.append(
                f'<p><strong>{model.capitalize()} complexity: {rich(complexity["headline_latex"])}</strong> '
                f'{rich(complexity["details_latex"])}</p>'
            )
        for dimension in ('strength', 'evidence', 'hardware'):
            parts.append(
                '<div class="document-dimension">'
                f'<h3>{dimension.capitalize()} {cell(dimension)}</h3>'
                f'<p>{rich(entry["labels"][dimension]["description_latex"])}</p></div>'
            )
        parts.append('</section><section><h2>Algorithm</h2><ul class="algorithm-index">')
        for item in entry['algorithm_items']:
            parts.append(f'<li>{rich(item["content_latex"])}</li>')
        parts.append('</ul></section>')
        pages[slug] = {'title': entry['title'], 'html': '\n'.join(parts)}

    output = ROOT / 'visualization/demo/entry-pages.js'
    output.write_text('window.ENTRY_PAGES = ' + json.dumps(pages, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    return output


if __name__ == '__main__':
    print(build().name)
