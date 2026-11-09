"""Build the complete problem/algorithm catalogue from the manuscript and research records."""
import json
import re
from pathlib import Path
from pylatexenc.latex2text import LatexNodes2Text
from import_catalogue import commands, identity, link_kind, text, write
from import_demo_catalogue import load_source_catalogue, literature_item, slugify

ROOT = Path(__file__).resolve().parents[1]
COLOR = {
    'strength': {'polynomial':'strengthPolynomial', 'intermediate':'strengthIntermediate',
                 'exp_to_subexp':'strengthExpToSubexp','to_polynomial':'strengthPolynomialTime','none':'white'},
    'evidence': {'proved':'evidenceProved','strong':'evidenceStrong','partial':'evidencePartial','none':'white'},
    'hardware': {'small':'hardwareSmall','polynomial':'hardwarePolynomial','exponential':'hardwareExponential','unspecified':'white'},
}
CHAPTER = {'exact':'chapter-1','graphs':'chapter-2','crypto':'chapter-3','complexity':'chapter-4'}
IMPORTANT = {1,2,3,5,7,8,10,18,19,31,32,34,37,41,49,51,54,55,60,61,62,63,68,71,73,76,78,84,85,88,92,98,101,102}
PERIPHERAL = {24,25,26,27,28,69,75,77,104,106}


def reference_item(ref):
    body = r'\href{' + ref['url'] + r'}{\emph{' + ref['title'] + '}}.'
    if ref.get('locator'): body += ' ' + ref['locator']
    return literature_item(body)


def append_unique(items, incoming, key):
    seen = {key(x) for x in items}
    for x in incoming:
        k = key(x)
        if k not in seen:
            items.append(x); seen.add(k)


def main():
    manuscript = ROOT.parent / 'quantum_speedups_catalogue_en.tex'
    if manuscript.exists():
        (ROOT / 'sources/catalogue-preview.tex').write_text(manuscript.read_text(encoding='utf-8'), encoding='utf-8')
    full = load_source_catalogue()
    full['schema_version'] = '2.0.0'
    full['sources'] = ['sources/catalogue-preview.tex', 'data/additions/']
    records = full['problems']
    algorithms = {a['id']: a for a in full['algorithms']}
    ids_path = ROOT / 'data/additions/entry_ids.json'
    ids = json.loads(ids_path.read_text()) if ids_path.exists() else {}
    for entry in records:
        entry['importance'] = 'high' if entry['number'] in IMPORTANT else 'peripheral' if entry['number'] in PERIPHERAL else 'medium'
        entry['origin'] = 'manuscript'
    for filename in ['prior_candidates.json', 'new_advantage.json']:
        path = ROOT / 'data/additions' / filename
        if not path.exists(): continue
        incoming = json.loads(path.read_text(encoding='utf-8'))
        if isinstance(incoming, dict): incoming = incoming['records']
        for record in incoming:
            key = record['key']
            if key not in ids: ids[key] = max([107] + list(ids.values())) + 1
            n = ids[key]
            entry = {'id': f'entry-{n:03}', 'number':n, 'slug':slugify(key),
                     'title':text(record['title']), 'title_latex':record['title'], 'aliases':[],
                     'chapter_id':CHAPTER[record['chapter']], 'importance':record['importance'],
                     'origin': 'research', 'research_key':key, 'inventory_ids':record.get('inventory_ids',[]),
                     'problem':{'name':text(record['title']),'name_latex':record['title'],
                                'statement_latex':record['problem_latex']},
                     'labels':{},'quantum_speedup':{},'algorithm_ids':[], 'also_used_in':[],
                     'algorithm_items':[reference_item(r) for r in record['references']], 'source_latex':''}
            for model in ['quantum','classical']:
                value = record[model+'_latex']
                first, separator, rest = value.partition('\n\n')
                entry['quantum_speedup'][model] = {'headline_latex':first, 'details_latex':rest}
            for dimension in ['strength','evidence','hardware']:
                entry['labels'][dimension] = {'color_key':COLOR[dimension][record[dimension]],
                     'description_latex':record[dimension+'_note']}
            entry['algorithm_heading_latex'] = 'Algorithm: ' + '; '.join(a['name'] for a in record['algorithms'])
            for a in record['algorithms']:
                aid = a['key']
                algo = algorithms.setdefault(aid, {'id':aid,'title':text(a['name']),'title_latex':a['name'],
                                                  'literature':[],'applications':[],'source_latex':''})
                names = algo.setdefault('aliases', [])
                if a['name'] != algo['title_latex'] and a['name'] not in names:
                    names.append(a['name'])
                append_unique(algo['literature'], [reference_item(r) for r in a.get('references',record['references'])],
                              lambda x: tuple(y['url'] for y in x['links']))
                algo['applications'].append({'problem_number':n,'entry_id':entry['id'],
                     'content_latex':r'\problemref{' + str(n) + '}. ' + a['role']})
                entry['algorithm_ids'].append(aid)
            records.append(entry)
            full['problem_links'][n] = {'entry_id':entry['id'],'slug':entry['slug'],
                                         'label_latex':record['title'],'anchor':None}
            if record.get('plot'): entry['plot'] = record['plot']
    # Preserve destinations assigned to candidates subsequently grouped together.
    candidate_owner = {item.lower(): e for e in records for item in e.get('inventory_ids', [])}
    active_keys = {e.get('research_key') for e in records}
    for key, old_number in ids.items():
        if key.startswith('prior-') and key not in active_keys:
            owner = candidate_owner.get(key.removeprefix('prior-'))
            if owner:
                full['problem_links'][old_number] = {'entry_id':owner['id'], 'slug':owner['slug'],
                    'label_latex':owner['title_latex'], 'anchor':None}
    for entry in records:
        entry['also_used_in'] = []
        for aid in entry['algorithm_ids']:
            others = list(dict.fromkeys(a['problem_number'] for a in algorithms[aid]['applications'] if a['entry_id'] != entry['id']))
            if others: entry['also_used_in'].append({'algorithm_id':aid,'label_latex':algorithms[aid]['title_latex'],'problem_numbers':others})
    full['algorithms'] = list(algorithms.values())
    plain = LatexNodes2Text()
    for entry in records:
        entry['title'] = plain.latex_to_text(entry['title_latex'])
        entry['problem']['name'] = plain.latex_to_text(entry['problem']['name_latex'])
    for algorithm in full['algorithms']:
        algorithm['title'] = plain.latex_to_text(algorithm['title_latex'])
    records.sort(key=lambda e: int(e['chapter_id'].split('-')[-1]))
    full['entry_count'] = len(records)
    full['algorithm_count'] = len(algorithms)
    write(ids_path, ids)
    write(ROOT / 'data/full_catalogue.json',full)
    write(ROOT / 'data/algorithms.json',full['algorithms'])
    export_database_records(full)
    print(f'{len(records)} problem entries, {len(algorithms)} algorithms')


def export_database_records(full):
    metadata = json.loads((ROOT/'data/catalogue.json').read_text(encoding='utf-8'))
    cat = {(c['dimension'], c['color_key']):c['id'] for c in metadata['categories']}
    references, citations = {}, []
    previous = json.loads((ROOT/'data/references.json').read_text(encoding='utf-8'))
    old_refs = {r['id']:r for r in previous}

    def capture(eid, section, body, item_number=None):
        found=[]
        for start,end,(url,label) in commands(body,'href',2):
            url = url.replace(r'\&','&').replace(r'\_','_')
            rid, external = identity(url)
            ref = references.setdefault(rid, old_refs.get(rid, {'id':rid, 'external_ids':external,
                 'title':text(label),'title_latex':label,'citation_labels_latex':[], 'access_links':[]}))
            if label not in ref['citation_labels_latex']: ref['citation_labels_latex'].append(label)
            if not any(x['url']==url for x in ref['access_links']):
                ref['access_links'].append({'url':url,'kind':link_kind(url),'provenance':'observed_catalogue'})
            cid=f'{eid}-citation-{len(citations)+1:05}'
            citations.append({'id':cid,'entry_id':eid,'reference_id':rid,'section':section,
                'algorithm_item_number':item_number,'url':url,'label_latex':label,
                'locator_latex':body[end:].lstrip('. '),'context_latex':body,'start':start,'end':end})
            found.append(cid)
        return found

    for ordinal,entry in enumerate(full['problems'],1):
        entry['ordinal']=ordinal
        entry['problem']['statement_text']=text(entry['problem']['statement_latex'])
        entry['citation_ids']=capture(entry['id'],'problem',entry['problem']['statement_latex'])
        for model,comp in entry['quantum_speedup'].items():
            for k in ['headline','details']: comp[k+'_text']=text(comp[k+'_latex'])
            entry['citation_ids']+=capture(entry['id'],model+'_complexity',comp['headline_latex']+'\n'+comp['details_latex'])
        for dim,label in entry['labels'].items():
            label['category_id']=cat[dim,label['color_key']]
            label['description_text']=text(label['description_latex'])
            entry['citation_ids']+=capture(entry['id'],dim,label['description_latex'])
        for i,item in enumerate(entry['algorithm_items'],1):
            item.update(item_number=i,index_label='',citation_ids=capture(entry['id'],'algorithm',item['content_latex'],i))
            entry['citation_ids']+=item['citation_ids']
        write(ROOT/f'data/entries/{entry["number"]:04}.json',entry)
    relations=[]
    for a in full['algorithms']:
        members=list(dict.fromkeys(x['entry_id'] for x in a['applications']))
        relations.append({'id':'algorithm-'+a['id'],'name':a['title'],'entry_ids':members,
                           'description_latex':a['title_latex'],'description_text':a['title']})
    metadata.update(schema_version='2.0.0',as_of_date='2026-11-10',source='data/full_catalogue.json',
                    entry_count=len(full['problems']),algorithm_count=len(full['algorithms']),
                    entry_order=[e['id'] for e in full['problems']],reference_count=len(references),citation_count=len(citations))
    write(ROOT/'data/catalogue.json',metadata)
    write(ROOT/'data/references.json',list(references.values()))
    write(ROOT/'data/citations.json',citations)
    write(ROOT/'data/relations.json',relations)
    active = {e['number'] for e in full['problems']}
    for number,link in full['problem_links'].items():
        if int(number) not in active:
            write(ROOT/f'data/entries/{int(number):04}.json',
                  {'id':f'entry-{int(number):03}','type':'redirect','canonical_id':link['entry_id'],
                   'title_latex':link['label_latex'],'anchor':link['anchor']})
    write(ROOT/'data/full_catalogue.json',full)


if __name__ == '__main__': main()
