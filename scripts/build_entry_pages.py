"""Render linked problem and algorithm pages as HTML with native MathML."""
import html
import json
import re
from functools import lru_cache
from pathlib import Path

from latex2mathml.converter import convert
from pylatexenc.latex2text import LatexNodes2Text
from pylatexenc.latexwalker import (
    LatexCharsNode, LatexGroupNode, LatexMacroNode, LatexMathNode,
    LatexWalker, get_default_latex_context_db,
)
from pylatexenc.macrospec import MacroSpec
from import_demo_catalogue import load_catalogue
from import_catalogue import text

ROOT = Path(__file__).resolve().parents[1]
TEXT = LatexNodes2Text()
CONTEXT = get_default_latex_context_db()
CONTEXT.add_context_category('web-links', macros=[
    MacroSpec('href', '{{'), MacroSpec('problemref', '{'),
    MacroSpec('algorithmref', '{{'), MacroSpec('entryalias', '{'),
    MacroSpec('texorpdfstring', '{{'),
], prepend=True)
PROBLEM_LINKS = {}


@lru_cache(maxsize=None)
def mathml(expression, display):
    return convert(expression, display=display)


def problem_link(number):
    record = PROBLEM_LINKS[int(number)]
    target = '#entry/' + record['slug']
    if record['anchor']:
        target += '/' + record['anchor']
    return f'<a href="{target}">{rich(record["label_latex"])}</a>'


def render_nodes(nodes):
    parts = []
    for node in nodes:
        raw = node.latex_verbatim()
        if isinstance(node, LatexMathNode):
            opening, closing = node.delimiters
            expression = raw[len(opening):-len(closing)]
            display = 'block' if node.displaytype == 'display' else 'inline'
            math = mathml(expression, display)
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
            elif node.macroname == 'problemref':
                parts.append(problem_link(TEXT.latex_to_text(args[0].latex_verbatim())))
            elif node.macroname == 'algorithmref':
                key = TEXT.latex_to_text(args[0].latex_verbatim()).strip()
                parts.append(f'<a href="#algorithm/{html.escape(key)}">{render_nodes(args[1].nodelist)}</a>')
            elif node.macroname == 'entryalias':
                number = int(TEXT.latex_to_text(args[0].latex_verbatim()))
                anchor = PROBLEM_LINKS[number]['anchor']
                parts.append(f'<span class="problem-anchor" id="{anchor}"></span>')
            elif node.macroname == 'texorpdfstring':
                parts.append(render_nodes(args[0].nodelist))
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


def paragraphs(source):
    return '<p>' + re.sub(r'\n\s*\n', '</p><p>', rich(source).strip()) + '</p>'


def build():
    global PROBLEM_LINKS
    catalogue = load_catalogue()
    PROBLEM_LINKS = catalogue['problem_links']
    algorithms = {record['id']: record for record in catalogue['algorithms']}
    algorithm_links = {entry['slug']: [{'id': key, 'title': algorithms[key]['title'],
                                       'aliases': [TEXT.latex_to_text(alias) for alias in algorithms[key].get('aliases', [])]}
                                      for key in entry['algorithm_ids']]
                       for entry in catalogue['problems']}
    pages = {}
    for entry in catalogue['problems']:
        slug = entry['slug']

        def cell(dimension):
            color = ','.join(str(channel) for channel in catalogue['colors'][entry['labels'][dimension]['color_key']])
            label = dimension.capitalize()
            return f'<span class="category-cell" style="background:rgb({color})" title="{label}" aria-label="{label}"></span>'

        parts = [
            '<div class="document-heading">',
            f'<h1>{rich(entry["title_latex"])}</h1>',
            '<span class="label-cells">' + ''.join(cell(d) for d in ('strength', 'evidence', 'hardware')) + '</span></div>',
            '<section class="document-problem">',
            f'<h2>Problem <span>({rich(entry["problem"]["name_latex"])})</span></h2>',
            paragraphs(entry['problem']['statement_latex']) + '</section>',
            '<section><h2>Quantum speedup</h2>',
        ]
        for model in ('quantum', 'classical'):
            complexity = entry['quantum_speedup'][model]
            parts.append(
                '<p><strong>' + model.capitalize() + ' complexity: ' + rich(complexity['headline_latex']) + '</strong> '
                + re.sub(r'\n\s*\n', '</p><p>', rich(complexity['details_latex'])) + '</p>'
            )
        for dimension in ('strength', 'evidence', 'hardware'):
            parts.append(
                '<div class="document-dimension">'
                f'<h3>{dimension.capitalize()} {cell(dimension)}</h3>'
                + paragraphs(entry['labels'][dimension]['description_latex']) + '</div>'
            )
        parts.append(f'</section><section><h2>{rich(entry["algorithm_heading_latex"])}</h2><ul class="algorithm-index">')
        for item in entry['algorithm_items']:
            parts.append(f'<li>{rich(item["content_latex"])}</li>')
        parts.append('</ul></section>')
        if entry['also_used_in']:
            parts.append('<aside class="related-uses"><h3>Also used in</h3><ul>')
            for relation in entry['also_used_in']:
                key = relation['algorithm_id']
                related = ', '.join(problem_link(number) for number in relation['problem_numbers'])
                parts.append(f'<li><a href="#algorithm/{key}">{rich(relation["label_latex"])}</a>: {related}.</li>')
            parts.append('</ul></aside>')
        if entry['algorithm_ids']:
            parts.append('<nav class="entry-navigation" aria-label="Algorithm pages">')
            for key in entry['algorithm_ids']:
                parts.append(f'<a href="#algorithm/{key}">→ {rich(algorithms[key]["title_latex"])}</a>')
            parts.append('</nav>')
        pages[slug] = {'title': entry['title'], 'html': '\n'.join(parts)}

    algorithm_pages = {}
    for key, algorithm in algorithms.items():
        parts = ['<div class="document-heading">', f'<h1>{rich(algorithm["title_latex"])}</h1></div>',
                 '<ul class="algorithm-index">']
        parts += [f'<li>{rich(item["content_latex"])}</li>' for item in algorithm['literature']]
        parts.append('</ul><ul class="algorithm-applications">')
        parts += [f'<li>{rich(item["content_latex"])}</li>' for item in algorithm['applications']]
        parts.append('</ul>')
        algorithm_pages[key] = {'title': algorithm['title'], 'html': '\n'.join(parts)}

    algorithm_problems = {
        key: [entry['slug'] for entry in catalogue['problems'] if key in entry['algorithm_ids']]
        for key in algorithms
    }
    search_index = [
        {'kind': 'entry', 'id': entry['slug'], 'title': entry['title'],
         'terms': ' '.join([entry['title'], entry['problem']['name'],
                            TEXT.latex_to_text(entry.get('algorithm_heading_latex', '')),
                            *[algorithms[key]['title'] for key in entry['algorithm_ids']],
                            *[TEXT.latex_to_text(alias) for key in entry['algorithm_ids'] for alias in algorithms[key].get('aliases', [])]])}
        for entry in catalogue['problems']
    ] + [{'kind': 'algorithm', 'id': key, 'title': algorithm['title'],
          'terms': ' '.join([algorithm['title'], *[TEXT.latex_to_text(alias) for alias in algorithm.get('aliases', [])]])}
         for key, algorithm in algorithms.items()]

    output = ROOT / 'site/entry-pages.js'
    output.write_text('\n'.join('window.' + name + ' = ' + json.dumps(value, ensure_ascii=False, indent=2) + ';'
                                for name, value in [('ENTRY_PAGES', pages), ('ALGORITHM_PAGES', algorithm_pages),
                                                    ('PROBLEM_ALGORITHMS', algorithm_links),
                                                    ('PAGE_SEARCH_INDEX', search_index),
                                                    ('ALGORITHM_PROBLEMS', algorithm_problems)]) + '\n', encoding='utf-8')

    return output


if __name__ == '__main__':
    print(build().name)
