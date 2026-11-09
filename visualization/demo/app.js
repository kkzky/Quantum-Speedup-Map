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
const evidenceLabels = {0:'Unestablished',.5:'Partial evidence',.75:'Conditional evidence',1:'Rigorous oracle comparison'};
const costPositions = {
  search:[.5,1], mst:[1.5,2], formula:[.5,alpha],
  collision:[1/3,.5], claw:[2/3,1], local:[.41,.61],
  factoring:[2.06,3.33], even:[1,4]
};
const strengthFromGap = gap => Math.log1p(Math.max(0,gap)/.08);
for (const [slug,coordinates] of Object.entries(costPositions)) {
  Object.assign(models[slug],{costQ:coordinates[0],costC:coordinates[1],strength:strengthFromGap(coordinates[1]-coordinates[0])});
}
const ticks = [{value:0,label:'1'},
  {value:models.collision.strength,label:'N¹ᐟ⁶'},
  {value:models.search.strength,label:'N¹ᐟ²'},
  {value:models.factoring.strength,label:'exp(Θ(N¹ᐟ³(log N)²ᐟ³))'},
  {value:models.even.strength,label:'2ᴺᐟ²/N'}];
let selected = 'factoring';
let points = [];
const colorRGB = s => {
  const gap = .08*Math.expm1(Math.max(0,s));
  const saturation = Math.pow(Math.min(1,-Math.expm1(-gap/2)/-Math.expm1(-3/2)),.88);
  const pale = Math.round(255*(1-saturation));
  return [255,pale,pale];
};
const color = s => `rgb(${colorRGB(s).join(',')})`;
const scene = new SpeedupScene($('scene'), {onSelect:select,onHover:tooltip});
const costScene = new CostScene($('cost'), {onSelect:select,onHover:tooltip});

function select(slug) { selected = slug; update(); }
function tooltip(point, position) {
  const el = $('tooltip');
  if (!point) { el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = `<b>${esc(point.name)}</b><small>T<sub>C</sub> / T<sub>Q</sub>: ${models[point.slug].gain}</small>`;
  el.style.left = Math.min(innerWidth-310,position.x+15)+'px';
  el.style.top = Math.max(10,Math.min(innerHeight-90,position.y+10))+'px';
}
function update() {
  points = SAMPLE_DATA.map(d => ({...d,...models[d.slug],color:color(models[d.slug].strength),selected:d.slug===selected}));
  scene.setData(points, {
    strengthMax:strengthFromGap(3)*1.10,hardwareMax:3.4,strengthTicks:ticks,
    evidenceTicks:[{value:.5,label:'Partial'},{value:.75,label:'Conditional'},{value:1,label:'Proved'}],
    hardwareTicks:[{value:0,label:'Small demos'},{value:1,label:'Fault-tolerant'},{value:2,label:'Coherent data'},{value:3,label:'Specialized resources'}],
    selectedSlug:selected
  });
  costScene.setData(points,{
    costMax:4.25, selectedSlug:selected,
    colorForGap:gap=>color(strengthFromGap(gap)),
    colorRGBForGap:gap=>colorRGB(strengthFromGap(gap)),
    costTicks:[{value:.5,label:'√N'},{value:1,label:'N'},
      {value:2,label:'N²'},{value:3.5,label:'exp(√N)'},{value:4,label:'2ᴺᐟ²'}]
  });
  document.querySelector('.gradient').style.background = 'linear-gradient(90deg,' + Array.from({length:9},(_,i)=>`${color(strengthFromGap(3*i/8))} ${100*i/8}%`).join(',') + ')';
  $('problemList').innerHTML = points.map(p => `<button class="problem-button ${p.slug===selected?'selected':''}" data-slug="${p.slug}" aria-pressed="${p.slug===selected}"><span class="problem-swatch" style="background:${p.color}"></span>${esc(p.name)}</button>`).join('');
  const p = points.find(p=>p.slug===selected);
  const papers = [...p.papers.slice(0,3),...p.papers.filter(r=>selected==='factoring'&&/2048|million/i.test(r.title))];
  $('detail').innerHTML = `<div class="detail-top"><div><div class="eyebrow">${esc(p.model)}</div><h2>${esc(p.name)}</h2><p>${esc(p.parameter)}</p></div></div><div class="comparison"><div><span class="field-label">QUANTUM COMPLEXITY</span><div class="formula">${p.Q}</div></div><div><span class="field-label">CLASSICAL COMPLEXITY</span><div class="formula">${p.C}</div></div></div><div class="gain-row"><span class="field-label">ASYMPTOTIC SPEEDUP · T<sub>C</sub> / T<sub>Q</sub></span><strong>${p.gain}</strong></div><div class="detail-meta"><div><i class="dot blue"></i>${esc(evidenceLabels[p.evidence])}</div><div><i class="dot green"></i>${esc(hardwareLabels[p.hardware])}</div></div><div class="papers">${papers.map(r=>`<a href="${esc(r.url)}" target="_blank" rel="noreferrer">${esc(r.title.replace(/\$/g,''))} ↗</a>`).join('')}</div>`;
  window.demoState = {points,selected};
}
$('problemList').addEventListener('click',event=>{const button=event.target.closest('[data-slug]');if(button)select(button.dataset.slug);});
$('reset').addEventListener('click',()=>scene.reset());
$('resetCost').addEventListener('click',()=>costScene.reset());
update();
