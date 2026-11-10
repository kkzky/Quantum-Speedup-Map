/* Asymptotic complexity plane with points and parameter-dependent ranges. */
(function () {
  'use strict';
  class CostScene {
    constructor(canvas, callbacks = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.callbacks = callbacks;
      this.points = [];
      this.options = {};
      this.projected = [];
      this.hovered = null;
      canvas.setAttribute('aria-label', 'Quantum and classical complexity, with both axes descending');
      canvas.addEventListener('pointermove', event => {
        const rect = canvas.getBoundingClientRect();
        const p = this.hit(event.clientX - rect.left, event.clientY - rect.top);
        canvas.style.cursor = p ? 'pointer' : 'default';
        if (p?.slug !== this.hovered?.slug) {
          this.hovered = p;
          this.callbacks.onHover?.(p || null, { x: event.clientX, y: event.clientY });
          this.draw();
        }
      });
      canvas.addEventListener('pointerleave', () => {
        this.hovered = null;
        this.callbacks.onHover?.(null);
        this.draw();
      });
      canvas.addEventListener('click', event => {
        const rect = canvas.getBoundingClientRect();
        const p = this.hit(event.clientX - rect.left, event.clientY - rect.top);
        if (p) this.callbacks.onSelect?.(p.slug, p);
      });
      canvas.addEventListener('wheel', event => {
        event.preventDefault();
        const maximum = this.options.costMax || 4.25;
        this.viewMax = Math.max(.85,Math.min(maximum,(this.viewMax || maximum)*Math.exp(event.deltaY*.001)));
        this.hovered = null;
        this.callbacks.onHover?.(null);
        this.draw();
      }, {passive:false});
      canvas.addEventListener('dblclick',()=>this.reset());
      this.observer = new ResizeObserver(() => this.resize());
      this.observer.observe(canvas);
      this.resize();
    }

    setData(points, options = {}) {
      const selectionChanged = options.selectedSlug !== this.options.selectedSlug;
      this.points = points;
      this.options = options;
      const selected = points.find(p=>p.slug===options.selectedSlug);
      if (selectionChanged && this.viewMax && selected) {
        const extent=Math.max(0,...this.geometry(selected).points.flat());
        if(extent>this.viewMax)this.viewMax=Math.min(options.costMax||5.25,extent*1.08);
      }
      this.draw();
    }

    reset() {
      this.hovered = null;
      this.viewMax = this.options.costMax || 4.25;
      this.draw();
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      this.width = rect.width || 640;
      this.height = rect.height || 460;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(this.width * dpr);
      this.canvas.height = Math.round(this.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.draw();
    }

    rgb(color) {
      if (Array.isArray(color)) return color;
      const value = String(color || '#ffffff');
      if (/^#[0-9a-f]{6}$/i.test(value)) return [1, 3, 5].map(i => parseInt(value.slice(i, i + 2), 16));
      if (/^#[0-9a-f]{3}$/i.test(value)) return [1, 2, 3].map(i => parseInt(value[i] + value[i], 16));
      const match = value.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
      if (match) return match.slice(1, 4).map(Number);
      if (!this.colorProbe) this.colorProbe = document.createElement('canvas').getContext('2d');
      this.colorProbe.clearRect(0, 0, 1, 1);
      this.colorProbe.fillStyle = value;
      this.colorProbe.fillRect(0, 0, 1, 1);
      return Array.from(this.colorProbe.getImageData(0, 0, 1, 1).data).slice(0, 3);
    }

    costRegion(q, classical) {
      if(q>classical)return -1;
      const polynomial=this.options.polynomialBoundary??2.5,exponential=this.options.exponentialBoundary??2.9;
      if (classical <= polynomial || q >= exponential || Math.abs(q-classical)<1e-7) return 0;
      return q < polynomial ? 2 : 1;
    }

    background(width, height, maximum) {
      const key = `${Math.ceil(width)}:${Math.ceil(height)}:${maximum}:${this.options.polynomialBoundary}:${this.options.exponentialBoundary}`;
      if (this.gradientKey === key) return this.gradient;
      const image = document.createElement('canvas');
      image.width = Math.ceil(width); image.height = Math.ceil(height);
      const ctx = image.getContext('2d'), pixels = ctx.createImageData(image.width,image.height);
      const palette = [[255,248,248],[255,231,231],[255,212,212]];
      for(let y=0;y<image.height;y++)for(let x=0;x<image.width;x++){
        const q=maximum*(1-x/image.width),classical=maximum*(1-y/image.height);
        const rgb=q>classical?[246,248,250]:palette[this.costRegion(q,classical)],offset=(y*image.width+x)*4;
        pixels.data[offset]=rgb[0];pixels.data[offset+1]=rgb[1];pixels.data[offset+2]=rgb[2];pixels.data[offset+3]=255;
      }
      ctx.putImageData(pixels,0,0);this.gradientKey=key;this.gradient=image;
      return image;
    }

    geometry(point) {
      const g=point.costComparison;
      if(g)return{...g,points:(g.points||[]).filter(v=>Array.isArray(v)&&v.length===2&&v.every(n=>Number.isFinite(n)&&n>=0))};
      return Number.isFinite(point.costQ)&&Number.isFinite(point.costC)
        ?{kind:'point',points:[[point.costQ,point.costC]]}:{kind:'unavailable',points:[]};
    }

    segmentDistance(x,y,a,b) {
      const dx=b[0]-a[0],dy=b[1]-a[1],length=dx*dx+dy*dy;
      const t=length?Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/length)):0;
      return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy);
    }

    insidePolygon(x,y,vertices) {
      if(vertices.length<3)return false;
      let inside=false;
      for(let i=0,j=vertices.length-1;i<vertices.length;j=i++){
        const a=vertices[i],b=vertices[j];
        if(this.segmentDistance(x,y,a,b)<.5)return true;
        if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;
      }
      return inside;
    }

    clipSegment(a,b,maximum) {
      let lo=0,hi=1;const dx=b[0]-a[0],dy=b[1]-a[1];
      for(const[p,q]of[[-dx,a[0]],[dx,maximum-a[0]],[-dy,a[1]],[dy,maximum-a[1]]]){
        if(!p){if(q<0)return null;continue;}
        const ratio=q/p;if(p<0)lo=Math.max(lo,ratio);else hi=Math.min(hi,ratio);
        if(lo>hi)return null;
      }
      return[[a[0]+lo*dx,a[1]+lo*dy],[a[0]+hi*dx,a[1]+hi*dy]];
    }

    clipPolygon(vertices,maximum) {
      let out=vertices;
      for(const[axis,bound,sign]of[[0,0,1],[0,maximum,-1],[1,0,1],[1,maximum,-1]]){
        const input=out;out=[];
        if(!input.length)break;
        for(let i=0;i<input.length;i++){
          const a=input[i],b=input[(i+1)%input.length],ain=sign*(a[axis]-bound)>=0,bin=sign*(b[axis]-bound)>=0;
          if(ain)out.push(a);
          if(ain!==bin){const t=(bound-a[axis])/(b[axis]-a[axis]);out.push([a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])]);}
        }
      }
      return out;
    }

    projectGeometry(point,maximum,mapX,mapY) {
      const g=this.geometry(point),vertices=g.points;
      if(g.kind==='unavailable'||!vertices.length)return null;
      const project=v=>[mapX(v[0]),mapY(v[1])];
      if(g.kind==='point'){
        if(vertices[0].some(n=>n>maximum))return null;
        const v=project(vertices[0]);
        return{...point,geometryKind:'point',x:v[0],y:v[1],vertices:[v],segments:[],costAnchor:vertices[0]};
      }
      const polygon=g.kind==='region'&&vertices.length>2?this.clipPolygon(vertices,maximum):[];
      const segments=[];
      for(let i=1;i<vertices.length;i++){
        const segment=this.clipSegment(vertices[i-1],vertices[i],maximum);
        if(segment)segments.push(segment.map(project));
      }
      if(g.kind==='region'&&vertices.length>2){
        const segment=this.clipSegment(vertices[vertices.length-1],vertices[0],maximum);
        if(segment)segments.push(segment.map(project));
      }
      if(!polygon.length&&!segments.length)return null;
      const projectedPolygon=polygon.map(project);
      let anchor;
      if(projectedPolygon.length>2)anchor=[0,1].map(axis=>projectedPolygon.reduce((sum,v)=>sum+v[axis],0)/projectedPolygon.length);
      else{
        let hash=2166136261;for(const ch of point.slug)hash=Math.imul(hash^ch.charCodeAt(0),16777619);
        const lengths=segments.map(([a,b])=>Math.hypot(b[0]-a[0],b[1]-a[1]));
        let remaining=lengths.reduce((a,b)=>a+b,0)*(.2+.6*(hash>>>0)/4294967295);
        for(let i=0;i<segments.length;i++){
          if(remaining<=lengths[i]||i===segments.length-1){const[a,b]=segments[i],t=lengths[i]?remaining/lengths[i]:0;anchor=[a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])];break;}
          remaining-=lengths[i];
        }
      }
      return{...point,geometryKind:g.kind,x:anchor[0],y:anchor[1],vertices:projectedPolygon,segments};
    }

    hit(x, y) {
      const marker=this.projected.filter(p => Math.hypot(p.x - x, p.y - y) < Math.max(7,(p.radius||5)+4))
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)
          || this.projected.indexOf(b) - this.projected.indexOf(a))[0] || null;
      if(marker)return marker;
      const label=(this.labelBoxes||[]).find(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h);
      if(label)return this.projected.find(p=>p.slug===label.slug)||null;
      const shapes=(this.geometryShapes||[]).filter(p=>p.geometryKind!=='point');
      const edge=shapes.map(p=>({p,d:Math.min(...p.segments.map(([a,b])=>this.segmentDistance(x,y,a,b)))})).filter(({d})=>d<4)
        .sort((a,b)=>a.d-b.d||Number(b.p.slug===this.options.selectedSlug)-Number(a.p.slug===this.options.selectedSlug))[0];
      if(edge)return this.projected.find(p=>p.slug===edge.p.slug)||null;
      const active=shapes.find(p=>p.slug===this.options.selectedSlug&&this.insidePolygon(x,y,p.vertices));
      return active?this.projected.find(p=>p.slug===active.slug)||null:null;
    }

    draw() {
      const c=this.ctx,width=this.width,height=this.height;
      if(!width||!height)return;
      c.clearRect(0,0,width,height);
      const compact=width<480,maximum=this.viewMax||this.options.costMax||4.25;
      const font='-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
      const L=compact?91:105,T=compact?65:42;
      const unspecified=this.points.filter(p=>this.geometry(p).kind==='unavailable');
      const stripLeft=22,stripWidth=width-44,stripColumns=Math.max(2,Math.floor(stripWidth/20));
      const stripRows=Math.ceil(unspecified.length/stripColumns);
      const stripHeight=unspecified.length?28+stripRows*20:0;
      const W=Math.max(125,width-L-20),H=Math.max(115,height-T-94-stripHeight);
      const mapX=value=>L+W*(1-value/maximum),mapY=value=>T+H*(1-value/maximum);
      const frame=()=>{c.beginPath();c.rect(L,T,W,H);};
      const ticks=this.options.costTicks||[];
      const boundaryStyles=[{color:'#775b74',dash:[7,5],label:'Polynomial boundary'},{color:'#a82525',dash:[3,4],label:'(Sub)exp. → polynomial'}];
      c.font=`500 13px ${font}`;c.textBaseline='middle';c.textAlign='left';
      let legendX=compact?18:L,legendY=13;
      boundaryStyles.forEach((style,i)=>{
        if(compact&&i){legendX=18;legendY=36;}
        c.beginPath();c.moveTo(legendX,legendY);c.lineTo(legendX+24,legendY);c.strokeStyle=style.color;c.lineWidth=2;c.setLineDash(style.dash);c.stroke();c.setLineDash([]);
        c.fillStyle=style.color;c.fillText(style.label,legendX+31,legendY);
        legendX+=c.measureText(style.label).width+57;
      });
      c.save();frame();c.clip();
      c.drawImage(this.background(W,H,maximum),L,T,W,H);
      ticks.forEach(t=>{
        if(t.value<0||t.value>maximum)return;
        c.beginPath();c.moveTo(mapX(t.value),T);c.lineTo(mapX(t.value),T+H);c.moveTo(L,mapY(t.value));c.lineTo(L+W,mapY(t.value));
        c.strokeStyle='#ffffffc9';c.lineWidth=1;c.stroke();
      });
      const drawBoundary=(vertices,style)=>{
        c.beginPath();vertices.forEach(([q,cl],i)=>i?c.lineTo(mapX(q),mapY(cl)):c.moveTo(mapX(q),mapY(cl)));
        c.strokeStyle='#ffffffd9';c.lineWidth=5;c.setLineDash([]);c.stroke();
        c.strokeStyle=style.color;c.lineWidth=2;c.setLineDash(style.dash);c.stroke();c.setLineDash([]);
      };
      const poly=this.options.polynomialBoundary??2.5,exp=this.options.exponentialBoundary??2.9;
      drawBoundary([[0,poly],[poly,poly],[exp,exp],[exp,maximum]],boundaryStyles[0]);
      drawBoundary([[poly,poly],[poly,maximum]],boundaryStyles[1]);
      this.boundaries=[{name:'polynomial',vertices:[[0,poly],[poly,poly],[exp,exp],[exp,maximum]]},{name:'to_polynomial',vertices:[[poly,poly],[poly,maximum]]}];
      c.beginPath();c.moveTo(L,T);c.lineTo(L+W,T+H);c.strokeStyle='#b5bfc5';c.lineWidth=1;c.stroke();
      c.save();c.translate(L+W*.32-8,T+H*.32+12);c.rotate(Math.atan2(H,W));c.font='italic 14px Georgia,serif';c.textAlign='center';c.textBaseline='top';c.fillStyle='#77656b';c.fillText('TQ = TC',0,0);c.restore();
      this.geometryShapes=this.points.map(p=>this.projectGeometry(p,maximum,mapX,mapY)).filter(Boolean);
      this.projected=this.geometryShapes.map(p=>({...p}));
      this.projected=window.quantumPointLayout.spreadPoints(this.projected,(x,y,r,p)=>{
        if(x<L+r||x>L+W-r||y<T+r||y>T+H-r)return false;
        if(!p)return true;
        if(p.geometryKind==='region'&&p.vertices.length>2)return this.insidePolygon(x,y,p.vertices);
        if(p.geometryKind!=='point')return p.segments.some(([a,b])=>this.segmentDistance(x,y,a,b)<Math.max(12,r+4));
        const q=maximum*(1-(x-L)/W),cl=maximum*(1-(y-T)/H);
        return this.costRegion(q,cl)===this.costRegion(...p.costAnchor);
      });
      const shownPaths=new Set();
      const drawGeometry=(p,active)=>{
        if(p.geometryKind==='point')return;
        const signature=JSON.stringify([p.geometryKind,p.vertices,p.segments]);
        if(!active&&shownPaths.has(signature))return;
        shownPaths.add(signature);
        c.save();
        if(p.geometryKind==='region'&&p.vertices.length>2){
          c.beginPath();p.vertices.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();
          if(active){c.fillStyle='rgba(58,91,112,.11)';c.fill();}
          c.strokeStyle=active?'#355e77':'rgba(107,91,113,.13)';c.lineWidth=active?2:1;c.setLineDash([5,4]);c.stroke();
        }else{
          c.beginPath();p.segments.forEach(([a,b])=>{c.moveTo(...a);c.lineTo(...b);});
          c.strokeStyle=active?'#355e77':'rgba(107,91,113,.2)';c.lineWidth=active?2.2:1;c.setLineDash(p.geometryKind==='region'?[5,4]:[]);c.stroke();
        }
        c.restore();
      };
      this.geometryShapes.forEach(p=>drawGeometry(p,false));
      this.geometryShapes.filter(p=>p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug).forEach(p=>drawGeometry(p,true));
      const drawPoint=p=>{
        const active=p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug;
        const radius=active?Math.max(5.8,p.radius+1):p.radius;
        if(Number.isFinite(p.anchorX)&&Math.hypot(p.x-p.anchorX,p.y-p.anchorY)>3){
          c.beginPath();c.moveTo(p.anchorX,p.anchorY);c.lineTo(p.x,p.y);c.strokeStyle='#987b7b55';c.lineWidth=.6;c.stroke();
        }
        const shape=r=>{
          c.beginPath();
          if(p.geometryKind==='curve'){c.moveTo(p.x,p.y-r-1);c.lineTo(p.x+r+1,p.y);c.lineTo(p.x,p.y+r+1);c.lineTo(p.x-r-1,p.y);c.closePath();}
          else if(p.geometryKind==='region')c.rect(p.x-r,p.y-r,r*2,r*2);
          else c.arc(p.x,p.y,r,0,Math.PI*2);
        };
        shape(radius+1);c.fillStyle='#fff';c.fill();
        shape(radius);c.fillStyle=p.geometryKind==='curve'||p.geometryKind==='region'?'#fff':p.color||'#fff';c.fill();c.lineWidth=active?1.6:1;c.strokeStyle='#8e3535';c.stroke();
        if(p.geometryKind==='curve'||p.geometryKind==='region'){shape(Math.max(1,radius-2));c.fillStyle=p.color||'#fff';c.fill();}
        if(active){c.beginPath();c.arc(p.x,p.y,radius+3,0,Math.PI*2);c.strokeStyle='#243248';c.lineWidth=1.3;c.stroke();}
      };
      this.mainProjected=[...this.projected];
      this.projected.forEach(drawPoint);c.restore();
      this.labelBoxes=window.quantumPointLayout.drawPointLabels(c,this.projected,{bounds:{x:L+2,y:T+2,w:W-4,h:H-4},selectedSlug:this.options.selectedSlug,hoveredSlug:this.hovered?.slug,compact});
      frame();c.strokeStyle='#cdbfc2';c.lineWidth=1;c.stroke();
      c.beginPath();c.moveTo(L,T);c.lineTo(L,T+H);c.lineTo(L+W,T+H);c.strokeStyle='#8c7478';c.lineWidth=1.3;c.stroke();
      c.font=`500 14px ${font}`;
      const bottomLabels=[];
      ticks.forEach(t=>{
        if(t.value<0||t.value>maximum)return;
        const x=mapX(t.value),y=mapY(t.value),label=String(t.label||'');
        c.beginPath();c.moveTo(x,T+H);c.lineTo(x,T+H+6);c.moveTo(L,y);c.lineTo(L-6,y);c.strokeStyle='#a78f94';c.stroke();
        const tw=c.measureText(label).width,labelX=Math.max(tw/2+3,Math.min(width-tw/2-3,x));
        let labelY=T+H+20;
        if(bottomLabels.some(q=>Math.abs(labelX-q.x)<(tw+q.w)/2+7))labelY+=20;
        bottomLabels.push({x:labelX,w:tw});
        c.fillStyle='#594c52';c.textAlign='center';c.textBaseline='middle';c.fillText(label,labelX,labelY);c.textAlign='right';c.fillText(label,L-10,y);
      });
      c.font=`600 15px ${font}`;c.fillStyle='#57434e';c.textAlign='center';c.textBaseline='middle';c.fillText('QUANTUM COMPLEXITY',L+W/2,T+H+64);
      c.save();c.translate(16,T+H/2);c.rotate(-Math.PI/2);c.fillText('CLASSICAL COMPLEXITY',0,0);c.restore();
      this.stripProjected=[];
      if(unspecified.length){
        const stripTop=T+H+90;
        c.fillStyle='#f8faf9';c.fillRect(12,stripTop,width-24,stripHeight-3);
        const stripPoints=[];
        const items=[...unspecified].sort((a,b)=>window.quantumPointLayout.importance(b)-window.quantumPointLayout.importance(a));
        const spacing=stripWidth/stripColumns;
        items.forEach((p,index)=>{
          const point={...p,x:stripLeft+(index%stripColumns+.5)*spacing,y:stripTop+13+Math.floor(index/stripColumns)*20,radius:window.quantumPointLayout.pointRadius(p)};
          stripPoints.push(point);drawPoint(point);
        });
        const focused=stripPoints.find(p=>p.slug===this.hovered?.slug)||stripPoints.find(p=>p.slug===this.options.selectedSlug);
        if(focused){c.font=`600 13px ${font}`;c.fillStyle='#17242a';c.textAlign='left';c.fillText(focused.shortName||focused.name,22,stripTop+stripHeight-13,width-44);}
        this.stripProjected=stripPoints;
        this.projected.push(...stripPoints);
      }
    }

  }
  window.CostScene = CostScene;
})();
