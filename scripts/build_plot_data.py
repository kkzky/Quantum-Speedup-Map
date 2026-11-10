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
CORE={
    1:(.5,1,r'$\Theta(\sqrt N)$',r'$\Theta(N)$','N: oracle domain size','Boolean-oracle queries',r'$\Theta(\sqrt N)$'),
    2:(.5,1,r'$\Theta(\sqrt N)$',r'$\Theta(N)$','N: objective domain size','Value-oracle queries',r'$\Theta(\sqrt N)$'),
    31:(1.5,2,r'$\Theta(N^{3/2})$',r'$\Theta(N^2)$','N: graph vertices','Adjacency-matrix queries',r'$\Theta(N^{1/2})$'),
    32:(1.5,2,r'$\Theta(N^{3/2})$',r'$\Theta(N^2)$','N: graph vertices','Adjacency-matrix queries',r'$\Theta(N^{1/2})$'),
    33:(1.5,2,r'$\Theta(N^{3/2})$',r'$\Theta(N^2)$','N: graph vertices','Adjacency-matrix queries',r'$\Theta(N^{1/2})$'),
    34:(1.5,2,r'$O(N^{3/2}\log^2 N)$',r'$\Theta(N^2)$','N: graph vertices','Adjacency-matrix queries',r'$\Omega(N^{1/2}/\log^2 N)$'),
    37:(1.25,2,r'$\widetilde O(N^{5/4})$',r'$\Theta(N^2)$','N: graph vertices','Adjacency-matrix queries',r'$\widetilde\Omega(N^{3/4})$'),
    38:(11/17,1,r'$\widetilde O(N^{11/17})$',r'$\Theta(N)$','N: graph vertices','Vertex-mark queries',r'$\widetilde\Omega(N^{6/17})$'),
    39:(1/3,.5,r'$\widetilde O(N^{1/3})$',r'$\widetilde\Theta(N^{1/2})$','N: graph vertices; fixed degree and distance parameters','Bounded-degree graph queries',r'$\widetilde\Omega(N^{1/6})$'),
    42:(5/3,2,r'$O(N^{5/3})$',r'$\Theta(N^2)$','N: matrix dimension','Matrix-entry queries',r'$\Omega(N^{1/3})$'),
    43:(17/12,2,r'$\widetilde O(N^{17/12})$',r'$\Theta(N^2)$','N: matrix dimension','Boolean matrix-entry queries',r'$\widetilde\Omega(N^{7/12})$'),
    41:(.5,.753,r'$\Theta(N^{1/2})$',r'$\Theta(N^{0.753\ldots})$','N: leaves of a balanced AND–OR formula','Leaf-oracle queries',r'$N^{0.253\ldots}$'),
    84:(1/3,.5,r'$\Theta(N^{1/3})$',r'$\Theta(N^{1/2})$','N: random-function range size','Hash-oracle queries',r'$\Theta(N^{1/6})$'),
    85:(2/3,1,r'$\Theta(N^{2/3})$',r'$\Theta(N)$','N: each function domain in the balanced case','Function-evaluation queries',r'$\Theta(N^{1/3})$'),
    91:(.41,.61,r'$\Theta(N^{1/3}(\log N)^{1/6})$',r'$\Theta(N^{1/2}(\log N)^{1/2})$','N: vertices of the Boolean hypercube','Value-oracle queries',r'$\Theta(N^{1/6}(\log N)^{1/3})$'),
    61:(2.06,2.87,r'$\widetilde O(N^2)$',r'$\exp((c+o(1))N^{1/3}(\log N)^{2/3})$','N: integer bit length','Quantum gates / heuristic GNFS time',r'$\exp(\Theta(N^{1/3}(\log N)^{2/3}))$'),
    88:(1,4,r'$O(N)$',r'$\widetilde O(2^{N/2})$','N: block length in bits','Coherent encryption / balanced classical queries',r'$\widetilde O(2^{N/2}/N)$'),
}


def first_formula(s):
    match=re.search(r'(?<!\\)\$(.*?)(?<!\\)\$',s,re.S)
    return '$'+match[1]+'$' if match else s


def coordinate(kind, exponent):
    if kind=='constant': return 0.05
    if kind=='logarithmic': return .18
    if exponent is None or exponent<=0: return None
    if kind=='polynomial':
        return exponent if exponent<=2 else 2+.4*(1-2/exponent)
    if kind=='subexponential': return 2.5+exponent
    if kind=='exponential': return 3.5+exponent
    return None


def display_formula(value):
    if '$' in value:
        return value
    if re.search(r'\\[A-Za-z]+|[_^]|^[nN](?:\b|\{)',value):
        return '$'+value+'$'
    return value


def parse_exponential(formula):
    m=re.search(r'(\d+(?:\.\d+)?)\^\{?([nNk])\}?',formula)
    if m and float(m[1])>1: return math.log2(float(m[1])),m[2]
    m=re.search(r'2\^\{([\d.]+)([nNk])(?:\+o.*)?\}',formula)
    if m: return float(m[1]),m[2]
    return None


def main():
    full=load_catalogue(); points=[]
    for e in full['problems']:
        q=first_formula(e['quantum_speedup']['quantum']['headline_latex'])
        c=first_formula(e['quantum_speedup']['classical']['headline_latex'])
        strength=e['labels']['strength']['color_key']
        gain=e['labels']['strength']['description_latex']
        model=''; parameter=''; cq=cc=None
        explicit=None; strength_order=None
        if e['number'] in CORE:
            cq,cc,q,c,parameter,model,gain=CORE[e['number']]
            if e['number']==61: explicit=math.log1p(1.27/.08)
            elif e['number']==91: strength_order=1.5
            elif 0<cq<cc<=2: strength_order=cc/cq
        elif e.get('plot'):
            p=e['plot']; q=display_formula(p.get('quantum',q)); c=display_formula(p.get('classical',c))
            parameter=p.get('parameter',''); model=p.get('model','');gain=p.get('gain',gain)
            gain=display_formula(gain)
            cq=coordinate(p.get('quantum_kind'),p.get('quantum_exponent'))
            cc=coordinate(p.get('classical_kind'),p.get('classical_exponent'))
            qe,ce=p.get('quantum_exponent'),p.get('classical_exponent')
            if (p.get('quantum_kind')==p.get('classical_kind') and
                    p.get('quantum_kind') in ('polynomial','exponential') and
                    qe is not None and ce is not None and 0<qe<ce):
                strength_order=ce/qe
        else:
            qp,cp=parse_exponential(q),parse_exponential(c)
            if qp and cp and qp[1]==cp[1]:
                cq,cc=3.5+qp[0],3.5+cp[0]
                parameter=qp[1]+': the size parameter in the stated comparison'
                model='Running time, with the entry’s input and memory assumptions'
                gain='$2^{'+format(cp[0]-qp[0],'.4g')+qp[1]+'}$'
                if 0<qp[0]<cp[0]: strength_order=cp[0]/qp[0]
        if not model:
            statement=text(e['problem']['statement_latex'])
            match=re.search(r'(?:Complexity|The comparison|The quantum comparison|The quantum bound)[^.]+\.',statement)
            model=match[0] if match else 'Resource model stated in the problem'
        if strength=='white':
            gain='No established asymptotic speedup'; explicit=0
            # Plot a numerical pair only when both bounds refer to the same task and resource.
            if cq is not None and cc is not None: cq=cc=min(cq,cc)
        if cq is None or cc is None:
            cq=cc=None
            explicit={'strengthPolynomial':1.98,'strengthIntermediate':2.5,
                      'strengthExpToSubexp':3.1,'strengthPolynomialTime':3.65,'white':0}[strength]
        elif cc<cq:
            cq=cc; explicit=0
        ev={'evidenceProved':1,'evidenceStrong':.75,'evidencePartial':.5,'white':0}[e['labels']['evidence']['color_key']]
        hw={'hardwareDemonstrated':0,'hardwareSmall':0,'hardwarePolynomial':1,'hardwareExponential':3,'white':3.25}[e['labels']['hardware']['color_key']]
        hardware_label={'hardwareDemonstrated':'Demonstrated advantage','hardwareSmall':'Small demonstrations',
                        'hardwarePolynomial':'Fault-tolerant circuits','hardwareExponential':'Large coherent resources','white':'Unspecified'}[e['labels']['hardware']['color_key']]
        papers=[]
        for item in e['algorithm_items']:
            for link in item['links']:
                if link['url'] not in {p['url'] for p in papers}: papers.append({'title':link['title'],'url':link['url']})
        point={'slug':e['slug'],'name':e['title'],'shortName':e['title'],
               'entryNumber':e['number'],
               'importance':{'medium':'normal'}.get(e['importance'],e['importance']),
               'resourceModels':e.get('resource_models',[]),
               'strengthCategory':STRENGTH_CATEGORIES[strength],
               'Q':rich(q),'C':rich(c),'gain':rich(gain),'gainText':text(gain),
               'parameter':text(parameter),'parameterHtml':rich(parameter),'model':model,'evidence':ev,'hardware':hw,
               'hardwareLabel':hardware_label,'costQ':cq,'costC':cc,'papers':papers}
        if explicit is not None: point['strength']=explicit
        if strength=='strengthPolynomial' and strength_order is not None:
            point['strengthOrder']=strength_order
        points.append(point)
    output=ROOT/'visualization/demo/sample-data.js'
    output.write_text('window.CATALOGUE_POINTS = '+json.dumps(points,ensure_ascii=False,indent=2)+';\nwindow.SAMPLE_DATA = window.CATALOGUE_POINTS;\n',encoding='utf-8')
    print(f'{len(points)} plotted problem records')


if __name__=='__main__': main()
