const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const alpha = Math.log2((1 + Math.sqrt(33)) / 4);

// Coordinates embed the ordering of the displayed asymptotic growth rates.
// Equal ratios share an x coordinate; no finite-size evaluation enters this view.
const models = {
  search: {gain:'N<sup>1/2</sup>',gainText:'N¹ᐟ²',Q:'Θ(√N)',C:'Θ(N)',parameter:'N: candidate solutions',model:'Boolean-oracle queries',evidence:1,hardware:0},
  mst: {gain:'N<sup>1/2</sup>',gainText:'N¹ᐟ²',Q:'Θ(N<sup>3/2</sup>)',C:'Θ(N²)',parameter:'N: graph vertices',model:'Adjacency-matrix queries',evidence:1,hardware:2},
  formula: {gain:`N<sup>${(alpha-.5).toFixed(3)}…</sup>`,gainText:`N^${(alpha-.5).toFixed(3)}…`,Q:'O(√N)',C:`Θ(N<sup>${alpha.toFixed(3)}…</sup>)`,parameter:'N: leaves of a balanced binary formula',model:'Leaf-value queries',evidence:1,hardware:1},
  collision: {gain:'N<sup>1/6</sup>',gainText:'N¹ᐟ⁶',Q:'O(N<sup>1/3</sup>)',C:'Θ(√N)',parameter:'N: hash range size',model:'Random-function queries',evidence:1,hardware:3},
  claw: {gain:'N<sup>1/3</sup>',gainText:'N¹ᐟ³',Q:'O(N<sup>2/3</sup>)',C:'Θ(N)',parameter:'N: size of each function domain',model:'Balanced-domain function queries',evidence:1,hardware:3},
  local: {gain:'N<sup>1/6</sup>(log N)<sup>1/3</sup>',gainText:'N¹ᐟ⁶(log N)¹ᐟ³',Q:'Θ(N<sup>1/3</sup>(log N)<sup>1/6</sup>)',C:'Θ(N<sup>1/2</sup>(log N)<sup>1/2</sup>)',parameter:'N: vertices of the Boolean hypercube',model:'Value-oracle queries',evidence:1,hardware:2},
  factoring: {gain:'exp(Θ(N<sup>1/3</sup>(log N)<sup>2/3</sup>))',gainText:'exp(Θ(N¹ᐟ³(log N)²ᐟ³))',Q:'Õ(N²)',C:'exp((c + o(1))N<sup>1/3</sup>(log N)<sup>2/3</sup>)',parameter:'N: integer bit length',model:'Quantum gates / GNFS heuristic time',evidence:.75,hardware:1},
  even: {gain:'Õ(2<sup>N/2</sup>/N)',gainText:'Õ(2ᴺᐟ²/N)',Q:'O(N)',C:'Õ(2<sup>N/2</sup>)',parameter:'N: block length in bits',model:'Coherent encryption / balanced classical queries',evidence:1,hardware:3}
};
const hardwareLabels = ['Small demonstrations','Fault-tolerant circuits','Demanding coherent access','Large or specialized coherent resources'];
const evidenceLabels = {0:'Unestablished',.5:'Partial evidence',.75:'Conditional evidence',1:'Rigorous comparison'};
const costPositions = {search:[.5,1],mst:[1.5,2],formula:[.5,alpha],collision:[1/3,.5],claw:[2/3,1],local:[.41,.61],factoring:[2.06,3.33],even:[1,4]};
const strengthFromGap = gap => Math.log1p(Math.max(0,gap)/.08);
for (const [slug,[costQ,costC]] of Object.entries(costPositions)) Object.assign(models[slug],{costQ,costC,strength:strengthFromGap(costC-costQ)});
const records = (window.CATALOGUE_POINTS || window.SAMPLE_DATA || []).map(record => {
  const base = models[record.slug] || {};
  const point = {...base,...record};
  point.name ||= point.title || point.slug;
  point.shortName ||= point.name;
  point.evidence = Number.isFinite(record.evidence) ? record.evidence : (base.evidence ?? 0);
  point.hardware = Number.isFinite(record.hardware) ? record.hardware : (base.hardware ?? 2);
  point.evidenceLabel ||= typeof record.evidence === 'string' ? record.evidence : evidenceLabels[point.evidence];
  point.hardwareLabel ||= typeof record.hardware === 'string' ? record.hardware : hardwareLabels[point.hardware];
  point.costQ = Number.isFinite(point.costQ) ? point.costQ : null;
  point.costC = Number.isFinite(point.costC) ? point.costC : null;
  point.strength = Number.isFinite(record.strength) ? record.strength : strengthFromGap(point.costC-point.costQ);
  point.importance ||= base.Q ? 'high' : 'normal';
  point.Q ||= esc(record.quantum?.headline_text || '');
  point.C ||= esc(record.classical?.headline_text || '');
  point.gain ||= point.strength === 0 ? 'No established asymptotic advantage' : '';
  point.parameter ||= '';
  point.model ||= '';
  point.papers ||= [];
  models[point.slug] = point;
  return point;
});
const bySlug = Object.fromEntries(records.map(p=>[p.slug,p]));
const plotConfig = window.CATALOGUE_PLOT_CONFIG || {};
const priority = point => point.importance === 'high' ? 3 : point.importance === 'peripheral' ? 1 : 2;
const sortedRecords = [...records].sort((a,b)=>priority(b)-priority(a)||a.name.localeCompare(b.name));
const strengthMax = plotConfig.strengthMax || Math.max(strengthFromGap(3),...records.map(p=>p.strength))*1.1;
const costMax = Math.max(4.25,...records.flatMap(p=>[p.costQ,p.costC]).filter(Number.isFinite))*1.01;
const ticks = plotConfig.strengthTicks || [{value:0,label:'1'},{value:strengthFromGap(1/6),label:'N¹ᐟ⁶'},{value:strengthFromGap(.5),label:'N¹ᐟ²'},
  {value:strengthFromGap(1.27),label:'exp(Θ(N¹ᐟ³(log N)²ᐟ³))'},{value:strengthFromGap(3),label:'2ᴺᐟ²/N'}];
let selected = bySlug.factoring ? 'factoring' : records[0]?.slug;
let points = [];
const colorRGB = s => {
  const gap = .08*Math.expm1(Math.max(0,s));
  const saturation = Math.pow(Math.min(1,-Math.expm1(-gap/2)/-Math.expm1(-3/2)),.88);
  const pale = Math.round(255*(1-saturation));
  return [255,pale,pale];
};
const color = s => `rgb(${colorRGB(s).join(',')})`;
const gapColor = gap => color(strengthFromGap(gap));
const gapRGB = gap => colorRGB(strengthFromGap(gap));
const selectFromChart = slug => select(slug,{scroll:!document.fullscreenElement});
const scene = new SpeedupScene($('scene'),{onSelect:selectFromChart,onHover:tooltip});
const costScene = new CostScene($('cost'),{onSelect:selectFromChart,onHover:tooltip});

function select(slug,{scroll=false}={}) {
  if (!bySlug[slug]) return;
  selected=slug;
  update();
  tooltip(null);
  if (scroll) {
    $('detail').focus({preventScroll:true});
    $('detail').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  }
}
function tooltip(point,position) {
  const el=$('tooltip');
  if (!point) {el.hidden=true;return;}
  el.hidden=false;
  el.innerHTML=`<b>${esc(point.name)}</b><small>${point.gain}</small>`;
  el.style.left=Math.max(8,Math.min(innerWidth-310,position.x+15))+'px';
  el.style.top=Math.max(10,Math.min(innerHeight-90,position.y+10))+'px';
}
function update() {
  points=records.map(d=>({...d,color:color(d.strength),selected:d.slug===selected}));
  scene.setData(points,{strengthMax,hardwareMax:3,hardwareUnspecified:3.25,strengthTicks:ticks,
    evidenceTicks:[{value:0,label:'Unestablished'},{value:.5,label:'Partial'},{value:.75,label:'Conditional'},{value:1,label:'Proved'}],
    hardwareTicks:[{value:0,label:'Small demos'},{value:1,label:'Fault-tolerant'},{value:2,label:'Coherent data'},{value:3,label:'Specialized resources'}],selectedSlug:selected});
  costScene.setData(points,{costMax,selectedSlug:selected,colorForGap:gapColor,colorRGBForGap:gapRGB,
    costTicks:plotConfig.costTicks || [{value:.5,label:'√N'},{value:1,label:'N'},{value:2,label:'N²'},{value:3,label:'exp(√N)'},{value:4,label:'2ᴺᐟ²'}]});
  document.querySelector('.gradient').style.background='linear-gradient(90deg,'+Array.from({length:9},(_,i)=>`${color(strengthFromGap(3*i/8))} ${100*i/8}%`).join(',')+')';
  renderProblemList();
  const p=bySlug[selected];
  if (!p) return;
  const papers=p.papers.slice(0,4);
  const algorithmLinks=(window.PROBLEM_ALGORITHMS[p.slug]||[]).map(a=>`<a class="algorithm-link" href="#algorithm/${esc(a.id)}">→ ${esc(a.title)}</a>`).join('');
  $('detail').innerHTML=`<div class="detail-top"><div><div class="eyebrow">${esc(p.model)}</div><h2>${esc(p.name)}</h2><p>${p.parameterHtml || esc(p.parameter)}</p></div></div><div class="comparison"><div><span class="field-label">QUANTUM COMPLEXITY</span><div class="formula">${p.Q}</div></div><div><span class="field-label">CLASSICAL COMPLEXITY</span><div class="formula">${p.C}</div></div></div><div class="gain-row"><span class="field-label">ASYMPTOTIC SPEEDUP, T<sub>C</sub> / T<sub>Q</sub></span><strong>${p.gain}</strong></div><div class="detail-meta"><div><i class="dot blue"></i><strong>Evidence level:</strong> ${esc(p.evidenceLabel||evidenceLabels[p.evidence]||'')}</div><div><i class="dot green"></i><strong>Required hardware:</strong> ${esc(p.hardwareLabel||hardwareLabels[p.hardware]||'')}</div></div><div class="papers">${papers.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noreferrer">${esc(r.title.replace(/\$/g,''))} ↗</a>`).join('')}</div><div class="entry-navigation"><a id="entryLink" href="#entry/${esc(p.slug)}">→ ${esc(p.name)}</a>${algorithmLinks}</div>`;
  window.demoState={points,selected};
}
function normalize(value) {return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
function matches(query,record) {return normalize(query).trim().split(/\s+/).filter(Boolean).every(term=>normalize(record).includes(term));}
const entrySearchTerms = new Map((window.PAGE_SEARCH_INDEX||[]).filter(p=>p.kind==='entry').map(p=>[p.id,p.terms]));
const problemSearchTerms = new Map(records.map(p=>[p.slug,[p.name,p.shortName,entrySearchTerms.get(p.slug)||'',...(window.PROBLEM_ALGORITHMS[p.slug]||[]).flatMap(a=>[a.title,...(a.aliases||[])])].join(' ')]));
function renderProblemList() {
  const query=$('problemFilter')?.value||'';
  const visible=sortedRecords.filter(p=>matches(query,problemSearchTerms.get(p.slug)));
  $('problemList').innerHTML=visible.map(p=>`<button class="problem-button ${p.slug===selected?'selected':''}" data-slug="${esc(p.slug)}" aria-pressed="${p.slug===selected}"><span class="problem-swatch" style="background:${color(p.strength)}"></span>${esc(p.name)}</button>`).join('')||'<p class="no-results">No matches</p>';
}
$('problemFilter').addEventListener('input',renderProblemList);
$('problemList').addEventListener('click',event=>{const button=event.target.closest('[data-slug]');if(button)select(button.dataset.slug);});

const icons={
  fullscreen:'<path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  reset:'<path d="M4 10a8 8 0 1 1 1.6 7.8M4 3v7h7"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>'
};
const svg = name => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
function closeSearches(except) {document.querySelectorAll('.chart-search').forEach(panel=>{if(panel!==except){panel.hidden=true;document.querySelector(`[aria-controls="${panel.id}"]`)?.setAttribute('aria-expanded','false');}});}
function installChartTools(card,chart,tag) {
  const tools=document.createElement('div');tools.className='chart-tools';
  tools.innerHTML=`<button class="icon-button fullscreen-button" aria-label="Enter fullscreen" title="Fullscreen">${svg('fullscreen')}</button><button class="icon-button search-button" aria-label="Search problems and algorithms" title="Search" aria-expanded="false" aria-controls="search-${tag}">${svg('search')}</button><button class="icon-button reset-button" aria-label="Reset view" title="Reset view">${svg('reset')}</button>`;
  const panel=document.createElement('div');panel.className='chart-search';panel.id=`search-${tag}`;panel.hidden=true;
  panel.innerHTML=`<label class="sr-only" for="input-${tag}">Search problems and algorithms</label><input id="input-${tag}" type="search" placeholder="Search problems or algorithms" autocomplete="off"><div class="search-results" role="listbox" aria-label="Matching problems"></div>`;
  card.append(tools,panel);
  const input=panel.querySelector('input'),results=panel.querySelector('.search-results');
  const render=()=>{
    const query=input.value.trim();
    const found=sortedRecords.filter(p=>matches(query,problemSearchTerms.get(p.slug)));
    results.innerHTML=found.map(p=>{
      const alg=(window.PROBLEM_ALGORITHMS[p.slug]||[]).find(a=>query&&matches(query,[a.title,...(a.aliases||[])].join(' ')));
      return `<button type="button" role="option" aria-selected="${selected===p.slug}" data-slug="${esc(p.slug)}"><span>${esc(p.name)}</span>${alg?`<small>${esc(alg.title)}</small>`:''}</button>`;
    }).join('')||'<p class="no-results">No matches</p>';
  };
  tools.querySelector('.search-button').addEventListener('click',()=>{
    const open=panel.hidden;closeSearches(panel);panel.hidden=!open;
    tools.querySelector('.search-button').setAttribute('aria-expanded',String(open));
    if(open){render();input.focus();}
  });
  input.addEventListener('input',render);
  input.addEventListener('keydown',event=>{
    if(event.key==='ArrowDown'){event.preventDefault();results.querySelector('button')?.focus();}
    if(event.key==='Enter'){const button=results.querySelector('button');if(button){select(button.dataset.slug);panel.hidden=true;tools.querySelector('.search-button').setAttribute('aria-expanded','false');}}
  });
  results.addEventListener('click',event=>{const button=event.target.closest('[data-slug]');if(button){select(button.dataset.slug);panel.hidden=true;tools.querySelector('.search-button').setAttribute('aria-expanded','false');tools.querySelector('.search-button').focus();}});
  tools.querySelector('.reset-button').addEventListener('click',()=>chart.reset());
  tools.querySelector('.fullscreen-button').addEventListener('click',async()=>{
    closeSearches();
    try {
      if(document.fullscreenElement===card) await document.exitFullscreen();
      else if(card.requestFullscreen) await card.requestFullscreen();
      else card.classList.toggle('expanded-chart');
    } catch {card.classList.toggle('expanded-chart');}
    chart.resize();
  });
}
installChartTools(document.querySelector('.asymptotic-card'),scene,'3d');
installChartTools(document.querySelector('.cost-card'),costScene,'2d');
const tooltipHome=$('tooltip').parentElement;
document.addEventListener('fullscreenchange',()=>{
  const current=document.fullscreenElement;
  (current||tooltipHome).append($('tooltip'));
  document.querySelectorAll('.fullscreen-button').forEach(b=>{
    const active=b.closest('.chart-card')===current;
    b.setAttribute('aria-label',active?'Exit fullscreen':'Enter fullscreen');
    b.title=active?'Exit fullscreen':'Fullscreen';
  });
  scene.resize();costScene.resize();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeSearches();$('wikiResults').hidden=true;
    document.querySelectorAll('.expanded-chart').forEach(card=>card.classList.remove('expanded-chart'));
    scene.resize();costScene.resize();
  }
});
document.addEventListener('click',event=>{
  if(!event.target.closest('.chart-search,.chart-tools'))closeSearches();
  if(!event.target.closest('.wiki-search'))$('wikiResults').hidden=true;
});

const searchIndex=window.PAGE_SEARCH_INDEX||[
  ...Object.entries(window.ENTRY_PAGES||{}).map(([id,p])=>({kind:'entry',id,title:p.title,terms:p.title})),
  ...Object.entries(window.ALGORITHM_PAGES||{}).map(([id,p])=>({kind:'algorithm',id,title:p.title,terms:p.title}))
];
function wikiSearch() {
  const query=$('wikiInput').value.trim();
  const found=searchIndex.filter(p=>matches(query,p.terms||p.title)).sort((a,b)=>{
    const aq=normalize(a.title).startsWith(normalize(query)),bq=normalize(b.title).startsWith(normalize(query));
    return Number(bq)-Number(aq)||a.title.localeCompare(b.title);
  }).slice(0,30);
  $('wikiResults').hidden=false;
  $('wikiResults').innerHTML=found.map(p=>`<a role="option" href="#${p.kind}/${esc(p.id)}"><span>${esc(p.title)}</span><small>${p.kind==='algorithm'?'Algorithm':'Problem'}</small></a>`).join('')||'<p class="no-results">No matches</p>';
}
$('wikiInput').addEventListener('input',wikiSearch);
$('wikiInput').addEventListener('focus',wikiSearch);
$('wikiInput').addEventListener('keydown',event=>{
  if(event.key==='ArrowDown'){event.preventDefault();$('wikiResults').querySelector('a')?.focus();}
  if(event.key==='Enter'){const link=$('wikiResults').querySelector('a');if(link){location.hash=link.hash;$('wikiResults').hidden=true;}}
});
$('wikiResults').addEventListener('click',event=>{if(event.target.closest('a'))$('wikiResults').hidden=true;});
function moveResult(event) {
  if(!['ArrowDown','ArrowUp'].includes(event.key))return;
  const parent=event.target.closest('.search-results');if(!parent)return;
  const items=[...parent.querySelectorAll('a,button')],index=items.indexOf(event.target);
  if(index<0)return;
  event.preventDefault();items[(index+(event.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus();
}
document.addEventListener('keydown',moveResult);
function showPage() {
  const [kind,slug,anchor]=location.hash.slice(1).split('/');
  const entry=kind==='entry'?window.ENTRY_PAGES?.[slug]:kind==='algorithm'?window.ALGORITHM_PAGES?.[slug]:null;
  const wasEntry=!$('entryPage').hidden;
  $('explore').hidden=!!entry;$('entryPage').hidden=!entry;tooltip(null);closeSearches();$('wikiResults').hidden=true;
  if(entry){
    if(kind==='entry'&&bySlug[slug])selected=slug;
    $('entryContent').innerHTML=entry.html;$('entryContent').dataset.pageType=kind;
    document.title=`${entry.title}, Quantum Speedup Map`;
    window.scrollTo({top:0,behavior:'instant'});
    if(anchor)requestAnimationFrame(()=>{const target=document.getElementById(anchor);if(target&&$('entryContent').contains(target))target.scrollIntoView({behavior:'instant',block:'start'});});
  }else{
    document.title='Quantum Speedup Map, Asymptotic View';
    if(wasEntry){update();requestAnimationFrame(()=>{scene.resize();costScene.resize();$('detail').scrollIntoView({behavior:'instant',block:'start'});});}
  }
}
window.addEventListener('hashchange',showPage);
update();showPage();
