"""Generate every problem's visual record, retaining the comparison's resource model."""
import json
import math
import re
from pathlib import Path
from import_demo_catalogue import load_catalogue
from import_catalogue import text
from build_entry_pages import rich

ROOT=Path(__file__).resolve().parents[1]
STRENGTH_CATEGORIES = {
    'white':'none', 'strengthPolynomial':'polynomial',
    'strengthIntermediate':'intermediate', 'strengthExpToSubexp':'exp_to_subexp',
    'strengthPolynomialTime':'to_polynomial',
}
def display_formula(value):
    if '$' in value:
        return value
    if re.search(r'\\[A-Za-z]+|[_^]|^[nN](?:\b|\{)',value):
        return '$'+value+'$'
    return value


def main():
    full=load_catalogue(); points=[]
    geometries={}
    for filename in ['cost_geometry_early.json', 'cost_geometry_late.json']:
        source=json.loads((ROOT/'data'/filename).read_text(encoding='utf-8'))['entries']
        if geometries.keys() & source.keys():
            raise ValueError('Duplicate complexity geometry entries')
        geometries.update(source)
    expected={str(e['number']) for e in full['problems']
              if not (e['chapter_id']=='chapter-4' and not e['algorithm_ids'])}
    if set(geometries)!=expected:
        raise ValueError(f'Complexity geometry coverage mismatch: missing {expected-set(geometries)}, extra {set(geometries)-expected}')
    for e in full['problems']:
        if e['chapter_id']=='chapter-4' and not e['algorithm_ids']:
            continue
        strength=e['labels']['strength']['color_key']
        gain=e['labels']['strength']['description_latex']
        if strength=='white':
            gain='No established asymptotic speedup'
        comparison=geometries[str(e['number'])]
        kind=comparison['kind']
        vertices=comparison.get('points',[])
        if kind not in {'point','curve','region','unavailable'}:
            raise ValueError(f'Unknown complexity geometry for entry {e["number"]}')
        required=0 if kind=='unavailable' else 1 if kind=='point' else 2
        if len(vertices)<required or (kind=='point' and len(vertices)!=1) or (kind=='unavailable' and vertices):
            raise ValueError(f'Invalid geometry for entry {e["number"]}')
        if not comparison.get('note') or any(len(pair)!=2 or not all(isinstance(x,(int,float)) and math.isfinite(x) and x>=0 for x in pair) for pair in vertices):
            raise ValueError(f'Invalid coordinates or missing explanation for entry {e["number"]}')
        q=display_formula(comparison['quantum'])
        c=display_formula(comparison['classical'])
        parameter=comparison['parameter']; model=comparison['model']
        cq,cc=vertices[0] if kind=='point' else (None,None)
        ev={'evidenceProved':1,'evidenceStrong':.75,'evidencePartial':.5,'white':0}[e['labels']['evidence']['color_key']]
        hw={'hardwareDemonstrated':0,'hardwareSmall':0,'hardwarePolynomial':1,'hardwareExponential':3,'white':3.25}[e['labels']['hardware']['color_key']]
        hardware_label={'hardwareDemonstrated':'Demonstrated advantage','hardwareSmall':'NISQ',
                        'hardwarePolynomial':'Fault-tolerant circuits','hardwareExponential':'Large coherent resources','white':'Unspecified'}[e['labels']['hardware']['color_key']]
        assessment=e.get('hardware_assessment',{})
        if assessment:
            hw=assessment['visual_difficulty'] if assessment['visual_difficulty'] is not None else 3.25
            hardware_label=assessment['visual_label']
        papers=[]
        for item in e['algorithm_items']:
            for link in item['links']:
                if link['url'] not in {p['url'] for p in papers}: papers.append({'title':link['title'],'url':link['url']})
        point={'slug':e['slug'],'name':e['title'],'shortName':e.get('display_name',e['title']),
               'featured':e.get('featured',False),
               'entryNumber':e['number'],
               'importance':{'medium':'normal'}.get(e['importance'],e['importance']),
               'resourceModels':e.get('resource_models',[]),
               'strengthCategory':STRENGTH_CATEGORIES[strength],
               'Q':rich(q),'C':rich(c),'gain':rich(gain),'gainText':text(gain),
               'parameter':text(parameter),'parameterHtml':rich(parameter),'model':model,'evidence':ev,'hardware':hw,
               'hardwareLabel':hardware_label,'costQ':cq,'costC':cc,'papers':papers,
               'costComparison':{**comparison,'noteHtml':rich(comparison['note'])}}
        points.append(point)
    output=ROOT/'visualization/demo/sample-data.js'
    output.write_text('window.CATALOGUE_POINTS = '+json.dumps(points,ensure_ascii=False,indent=2)+';\nwindow.SAMPLE_DATA = window.CATALOGUE_POINTS;\n',encoding='utf-8')
    print(f'{len(points)} plotted problem records')


if __name__=='__main__': main()
