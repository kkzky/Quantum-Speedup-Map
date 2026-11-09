"""Read problem and algorithm records from the catalogue used by the demo."""
import json
import re
import unicodedata
from pathlib import Path

from import_catalogue import clean, commands, group, text

ROOT = Path(__file__).resolve().parents[1]
DEMO_SLUGS = {1: 'search', 31: 'mst', 41: 'formula', 84: 'collision',
              85: 'claw', 91: 'local', 61: 'factoring', 88: 'even'}


def slugify(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', value).strip('-')


def items(body):
    return [part.strip() for part in re.split(r'\\item\b', body)[1:]]


def literature_item(body):
    links = []
    for _, end, (url, label) in commands(body, 'href', 2):
        titles = commands(label, 'emph', 1)
        title = titles[0][2][0] if titles else label
        links.append({'url': url.replace(r'\&', '&').replace(r'\_', '_'),
                      'title': text(title), 'label_latex': label,
                      'locator_latex': body[end:].lstrip('. ').strip()})
    return {'content_latex': body, 'content_text': text(body), 'links': links}


def load_catalogue():
    source = (ROOT / 'sources/catalogue-preview.tex').read_text(encoding='utf-8')
    body_start = source.index(r'\tableofcontents')
    relation_start = source.index(r'\section*{Relations')
    appendix_start = source.index(r'\section*{Appendix: Quantum algorithms}')
    headers = [h for h in commands(source, 'entrytitle', 5) if h[0] > body_start]
    sections = commands(source, 'section', 1)
    names = {}
    for match in re.finditer(r'\\csname problemname@(\d+)\\endcsname\s*(?=\{)', source):
        name, _ = group(source, match.end())
        names[int(match.group(1))] = name

    problems, canonical = {}, {}
    for index, (start, _, heading) in enumerate(headers):
        number = int(heading[0])
        end = headers[index + 1][0] if index + 1 < len(headers) else relation_start
        end = min([end] + [position for position, _, _ in sections if start < position < end])
        raw = clean(source[start:end])
        problem = re.search(r'\\begin\{problem\}\[(.*?)\](.*?)\\end\{problem\}', raw, re.S)
        algorithm = re.search(r'\\begin\{algorithmindex\}\{[^}]+\}(.*?)\\end\{algorithmindex\}', raw, re.S)
        algorithm_heading = next(h for h in commands(raw, 'subhead', 1) if h[2][0].startswith('Algorithm'))
        aliases = [int(args[0]) for _, _, args in commands(raw, 'entryalias', 1)]
        for member in [number] + aliases:
            canonical[member] = number
        record = {
            'id': f'entry-{number:03}', 'number': number,
            'slug': DEMO_SLUGS.get(number, slugify(text(heading[1]))),
            'title_latex': heading[1], 'title': text(heading[1]),
            'aliases': aliases,
            'problem': {'name_latex': problem.group(1), 'name': text(problem.group(1)),
                        'statement_latex': problem.group(2).strip()},
            'quantum_speedup': {}, 'labels': {},
            'algorithm_heading_latex': algorithm_heading[2][0],
            'algorithm_items': [literature_item(item) for item in items(algorithm.group(1))],
            'algorithm_ids': [], 'also_used_in': [], 'source_latex': raw,
        }
        comparisons = commands(raw, 'complexity', 2)
        dimensions = commands(raw, 'dimensionlabel', 2)
        for position, last, (model, headline) in comparisons:
            stop = min([p for p, _, _ in comparisons + dimensions if p > position] + [algorithm_heading[0]])
            record['quantum_speedup'][model.lower()] = {
                'headline_latex': headline, 'details_latex': clean(raw[last:stop]),
            }
        for i, (_, last, (dimension, color)) in enumerate(dimensions):
            stop = dimensions[i + 1][0] if i + 1 < len(dimensions) else algorithm_heading[0]
            record['labels'][dimension.lower()] = {'color_key': color, 'description_latex': clean(raw[last:stop])}
        tail = raw[algorithm.end():]
        related = commands(tail, 'algorithmref', 2)
        for i, (_, last, (key, label)) in enumerate(related):
            stop = related[i + 1][0] if i + 1 < len(related) else len(tail)
            record['also_used_in'].append({'algorithm_id': key, 'label_latex': label,
                                          'problem_numbers': [int(args[0]) for _, _, args in commands(tail[last:stop], 'problemref', 1)]})
        problems[number] = record

    algorithms = {}
    algorithm_headers = [h for h in commands(source, 'algorithmheading', 2) if h[0] > appendix_start]
    for index, (start, _, (key, title)) in enumerate(algorithm_headers):
        end = algorithm_headers[index + 1][0] if index + 1 < len(algorithm_headers) else source.index(r'\end{document}', start)
        raw = clean(source[start:end])
        references = re.search(r'\\begin\{algorithmindex\}\{[^}]+\}(.*?)\\end\{algorithmindex\}', raw, re.S)
        applications = re.search(r'\\begin\{itemize\}(?:\[[^\]]*\])?(.*?)\\end\{itemize\}', raw, re.S)
        record = {'id': key, 'title': text(title), 'title_latex': title,
                  'literature': [literature_item(item) for item in items(references.group(1))],
                  'applications': [], 'source_latex': raw}
        for item in items(applications.group(1)):
            number = int(commands(item, 'problemref', 1)[0][2][0])
            owner = canonical[number]
            record['applications'].append({'problem_number': number, 'entry_id': problems[owner]['id'],
                                            'content_latex': item})
            if key not in problems[owner]['algorithm_ids']:
                problems[owner]['algorithm_ids'].append(key)
        algorithms[key] = record

    problem_links = {}
    for number, owner in canonical.items():
        name = names.get(number, problems[owner]['title_latex'])
        anchor = slugify(text(name)) if number != owner else None
        problem_links[number] = {'entry_id': problems[owner]['id'], 'slug': problems[owner]['slug'],
                                 'label_latex': name, 'anchor': anchor}
    colors = {args[0]: [int(channel) for channel in args[2].split(',')]
              for _, _, args in commands(source, 'definecolor', 3) if args[1] == 'RGB'}
    colors['white'] = [255, 255, 255]
    result = {'schema_version': '2.0-preview', 'source': 'sources/catalogue-preview.tex',
              'problems': list(problems.values()), 'algorithms': list(algorithms.values()),
              'problem_links': problem_links, 'colors': colors}
    output = ROOT / 'visualization/catalogue-preview.json'
    output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    return result


if __name__ == '__main__':
    catalogue = load_catalogue()
    print(f'{len(catalogue["problems"])} problems, {len(catalogue["algorithms"])} algorithms')
