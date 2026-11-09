"""Import the catalogue's TeX records, retaining mathematical text and citations."""
from pathlib import Path
import argparse
import hashlib
import json
import re
from datetime import datetime
from urllib.parse import urlparse
from pylatexenc.latex2text import LatexNodes2Text

ROOT = Path(__file__).resolve().parents[1]
CONVERTER = LatexNodes2Text(math_mode='verbatim')


def group(s, start):
    while s[start].isspace():
        start += 1
    assert s[start] == '{', s[start:start + 80]
    depth, i = 1, start + 1
    while depth:
        if s[i] == '\\':
            i += 2
            continue
        depth += (s[i] == '{') - (s[i] == '}')
        i += 1
    return s[start + 1:i - 1], i


def commands(s, name, count):
    result = []
    for m in re.finditer(r'\\' + name + r'\s*(?=\{)', s):
        args, end = [], m.end()
        for _ in range(count):
            arg, end = group(s, end)
            args.append(arg)
        result.append((m.start(), end, args))
    return result


def clean(s):
    return re.sub(r'(?:\s*\\clearpage\s*)+$', '', s).strip()


def text(s):
    # Search text is auxiliary; the original TeX is authoritative.
    for start, end, args in reversed(commands(s, 'href', 2)):
        s = s[:start] + args[1] + s[end:]
    for start, end, args in reversed(commands(s, 'texorpdfstring', 2)):
        s = s[:start] + args[1] + s[end:]
    s = re.sub(r'\\ref\{entry:(\d+)\}', r'\1', s)
    return re.sub(r'\s+', ' ', CONVERTER.latex_to_text(s)).strip()


def write(path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def identity(url):
    m = re.search(r'arxiv\.org/(?:abs|pdf|html)/(.+?)(?:\.pdf)?$', url)
    if m:
        aid = re.sub(r'v\d+$', '', m.group(1))
        return 'arxiv-' + aid.replace('/', '-'), {'arxiv': aid}
    canonical = url.rstrip('/')
    return 'ref-' + hashlib.sha256(canonical.encode()).hexdigest()[:16], {}


def link_kind(url):
    p = urlparse(url)
    if p.path.lower().endswith('.pdf') or ('arxiv.org' in p.netloc and '/pdf/' in p.path):
        return 'pdf'
    if '/html/' in p.path or ('ar5iv' in p.netloc):
        return 'html'
    if 'doi.org' in p.netloc:
        return 'landing_page'
    if 'drive.google.com' in p.netloc:
        return 'document_viewer'
    return 'landing_page'


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', type=Path, default=ROOT / 'sources/catalogue.tex')
    args = parser.parse_args()
    source = args.source.read_text(encoding='utf-8-sig')
    access_path = ROOT / 'data/reference_access.json'
    access = json.loads(access_path.read_text(encoding='utf-8')) if access_path.exists() else {}
    if 'references' in access:
        access = access['references']
    intro_start = source.index(r'\section*{Introduction}')
    intro_end = source.index(r'\tableofcontents', intro_start)
    intro = source[intro_start:intro_end]
    colors = {a[0]: [int(x) for x in a[2].split(',')] for _, _, a in commands(source, 'definecolor', 3)}
    colors['white'] = [255, 255, 255]
    categories = []
    dims = ['strength', 'evidence', 'hardware']
    names = {'strengthPolynomial': 'polynomial', 'strengthIntermediate': 'improved-exponential-subexponential',
             'strengthExpToSubexp': 'exponential-to-subexponential', 'strengthPolynomialTime': 'exponential-subexponential-to-polynomial',
             'evidenceProved': 'proved', 'evidenceStrong': 'strong', 'evidencePartial': 'partial',
             'hardwareDemonstrated': 'demonstrated', 'hardwareSmall': 'small',
             'hardwarePolynomial': 'polynomial', 'hardwareExponential': 'superpolynomial', 'white': 'unspecified'}
    cat_lookup = {}
    for dimension, table in zip(dims, re.findall(r'\\begin\{tabular\}.*?\n(.*?)\\end\{tabular\}', intro, re.S)):
        for m in re.finditer(r'\\colorcell\{([^}]+)\}\s*&\s*([^\n]+)', table):
            key, label = m.groups()
            label = re.sub(r'\\\\(?:\[.*?\])?$', '', label).strip()
            cid = dimension + '-' + names[key]
            cat_lookup[dimension, key] = cid
            categories.append({'id': cid, 'dimension': dimension, 'label': text(label), 'color_key': key, 'rgb': colors[key]})
    cat_lookup['strength', 'white'] = 'strength-unspecified'
    categories.append({'id': 'strength-unspecified', 'dimension': 'strength', 'label': 'No established speedup or not applicable', 'color_key': 'white', 'rgb': colors['white']})
    sections = commands(source, 'section', 1)
    # Starred introductory headings are not matched by commands().
    chapters = [{'id': f'chapter-{i+1}', 'number': i+1, 'title': text(a[0]), 'title_latex': a[0]} for i, (_, _, a) in enumerate(sections)]
    for i, chapter in enumerate(chapters):
        start = sections[i][1]
        end = source.index(r'\entrytitle{', start)
        chapter['introduction_latex'] = clean(source[start:end])
    headers = commands(source, 'entrytitle', 5)
    headers = [h for h in headers if h[0] > intro_end]
    references, citations, entries = {}, [], []

    def cite(eid, section, content, locator=None, item_number=None):
        found = []
        for start, end, (raw_url, label) in commands(content, 'href', 2):
            url = raw_url.replace(r'\&', '&').replace(r'\_', '_').strip()
            rid, external_ids = identity(url)
            ref = references.setdefault(rid, {'id': rid, 'external_ids': external_ids, 'title': None, 'title_latex': None,
                                              'citation_labels_latex': [], 'access_links': []})
            if label not in ref['citation_labels_latex']:
                ref['citation_labels_latex'].append(label)
            titles = commands(label, 'emph', 1)
            if titles and (ref['title_latex'] is None or len(titles[0][2][0]) > len(ref['title_latex'])):
                ref['title_latex'] = titles[0][2][0]
                ref['title'] = text(ref['title_latex'])
            if not ref['title']:
                ref['title'] = text(label)
            links = access.get(url, {}).get('access_links', [])
            if not any(l['url'] == url and l['provenance'] == 'observed_catalogue' for l in links):
                links = [{'url': url, 'kind': link_kind(url), 'provenance': 'observed_catalogue'}] + links
            for link in links:
                if link not in ref['access_links']:
                    ref['access_links'].append(link)
            cid = f'{eid}-citation-{len([c for c in citations if c["entry_id"] == eid])+1:03}'
            cit = {'id': cid, 'entry_id': eid, 'reference_id': rid, 'section': section,
                   'algorithm_item_number': item_number, 'url': url, 'label_latex': label,
                   'locator_latex': locator, 'context_latex': content, 'start': start, 'end': end}
            citations.append(cit)
            found.append(cid)
        return found

    for ordinal, (start, h_end, h) in enumerate(headers):
        number = int(h[0]); eid = f'entry-{number:03}'
        end = headers[ordinal + 1][0] if ordinal+1 < len(headers) else source.index(r'\section*{Relations', start)
        for section_start, _, _ in sections:
            if start < section_start < end:
                end = source.rfind(r'\clearpage', start, section_start)
                break
        raw = clean(source[start:end])
        chapter_no = max(i for i, (p, _, _) in enumerate(sections) if p < start)
        problem = re.search(r'\\begin\{problem\}\[(.*?)\](.*?)\\end\{problem\}', raw, re.S)
        if not problem:
            raise ValueError(f'Missing problem: {eid}')
        p_name, p_statement = problem.groups()
        complexity = commands(raw, 'complexity', 2)
        dimensions = commands(raw, 'dimensionlabel', 2)
        alg = re.search(r'\\begin\{algorithmindex\}\{([^}]+)\}(.*?)\\end\{algorithmindex\}', raw, re.S)
        item_matches = list(re.finditer(r'\\item\b', alg.group(2)))
        entry = {'id': eid, 'number': number, 'ordinal': ordinal+1, 'title_latex': h[1], 'title': text(h[1]),
                 'chapter_id': chapters[chapter_no]['id'], 'problem': {'name_latex': p_name, 'name': text(p_name),
                 'statement_latex': p_statement.strip(), 'statement_text': text(p_statement)},
                 'quantum_speedup': {}, 'labels': {}, 'algorithm_items': [], 'citation_ids': [], 'source_latex': raw}
        entry['citation_ids'] += cite(eid, 'title', h[1])
        entry['citation_ids'] += cite(eid, 'problem', p_statement.strip())
        for pos, last, (model, headline) in complexity:
            next_pos = min([p for p, _, _ in complexity + dimensions if p > pos] + [alg.start()])
            details = clean(raw[last:next_pos])
            entry['quantum_speedup'][model.lower()] = {'headline_latex': headline, 'headline_text': text(headline),
                                                    'details_latex': details, 'details_text': text(details)}
            entry['citation_ids'] += cite(eid, f'{model.lower()}_complexity', headline + '\n' + details)
        for idx, (pos, last, (dimension, color)) in enumerate(dimensions):
            next_pos = dimensions[idx+1][0] if idx+1 < len(dimensions) else raw.index(r'\subhead{Algorithm}', last)
            body = clean(raw[last:next_pos]); dim = dimension.lower()
            entry['labels'][dim] = {'category_id': cat_lookup[dim, color], 'color_key': color,
                                    'description_latex': body, 'description_text': text(body)}
            assert color == h[dims.index(dim)+2], (eid, dim, color, h)
            entry['citation_ids'] += cite(eid, dim, body)
        for j, match in enumerate(item_matches):
            item_end = item_matches[j+1].start() if j+1 < len(item_matches) else len(alg.group(2))
            body = alg.group(2)[match.end():item_end].strip()
            hrefs = commands(body, 'href', 2)
            locator = body[hrefs[0][1]:].lstrip('. ').strip() if hrefs else body
            cids = cite(eid, 'algorithm', body, locator, j+1)
            entry['citation_ids'] += cids
            entry['algorithm_items'].append({'item_number': j+1, 'index_label': f'{alg.group(1)}.{j+1}',
                                              'content_latex': body, 'content_text': text(body), 'citation_ids': cids})
        assert set(entry['quantum_speedup']) == {'quantum', 'classical'}, eid
        assert len(entry['labels']) == 3, eid
        assert len(commands(raw, 'href', 2)) == len(entry['citation_ids']), f'Unplaced reference in {eid}'
        entries.append(entry)
        write(ROOT / f'data/entries/{number:04}.json', entry)
    relations = []
    relations_start = source.index(r'\section*{Relations')
    for line in source[relations_start:].splitlines():
        if ' & ' not in line or '\\ref{entry:' not in line:
            continue
        name, members, description = line.removesuffix(r'\\').split(' & ', 2)
        ids = []
        for m in re.finditer(r'\\ref\{entry:(\d+)\}(?:--\\ref\{entry:(\d+)\})?', members):
            a, b = m.groups(); ids.extend(range(int(a), int(b)+1) if b else [int(a)])
        relations.append({'id': 'relation-' + hashlib.sha256(name.encode()).hexdigest()[:12], 'name': text(name),
                          'entry_ids': [f'entry-{n:03}' for n in dict.fromkeys(ids)],
                          'description_latex': description.strip(), 'description_text': text(description)})
    conventions = []
    sh = commands(intro, 'subhead', 1)
    for i, (start, last, a) in enumerate(sh):
        if a[0] == 'Reading paths':
            continue
        end = sh[i+1][0] if i+1 < len(sh) else len(intro)
        conventions.append({'name': a[0], 'content_latex': clean(intro[last:end])})
    existing = {e['id'] for e in entries}
    assert all(set(r['entry_ids']) <= existing for r in relations), 'Dangling relation'
    for c in chapters:
        c['entry_ids'] = [e['id'] for e in entries if e['chapter_id'] == c['id']]
    date = re.search(r'(\d{1,2} [A-Z][a-z]+ \d{4})\\par', source).group(1)
    catalogue = {'schema_version': '1.0.0', 'title': 'Quantum Speedups for Discrete Computational Problems',
                 'language': 'en', 'as_of_date': datetime.strptime(date, '%d %B %Y').date().isoformat(), 'source': 'sources/catalogue.tex',
                 'entry_count': len(entries), 'reference_count': len(references), 'citation_count': len(citations),
                 'entry_order': [e['id'] for e in entries], 'chapters': chapters, 'categories': categories,
                 'introduction_latex': intro, 'conventions': conventions,
                 'label_policy': 'Strength records the strongest supported regime; complexity statements retain general parameter dependence.'}
    write(ROOT / 'data/catalogue.json', catalogue)
    write(ROOT / 'data/references.json', sorted(references.values(), key=lambda r: r['id']))
    write(ROOT / 'data/citations.json', citations)
    write(ROOT / 'data/relations.json', relations)
    print(f'{len(entries)} entries; {len(references)} references; {len(citations)} citation occurrences; {len(relations)} relations')


if __name__ == '__main__':
    main()
