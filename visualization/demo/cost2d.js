/* Asymptotic complexity plane, restricted to quantum cost <= classical cost. */
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
      if (selectionChanged && this.viewMax && selected && selected.costC>this.viewMax) this.viewMax=Math.min(options.costMax,selected.costC*1.08);
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
      if (classical <= 2.5 || q >= 3.5 || Math.abs(q-classical)<1e-7) return 0;
      return q < 2.5 ? 2 : 1;
    }

    background(width, height, maximum) {
      const key = `${Math.ceil(width)}:${Math.ceil(height)}:${maximum}`;
      if (this.gradientKey === key) return this.gradient;
      const image = document.createElement('canvas');
      image.width = Math.ceil(width); image.height = Math.ceil(height);
      const ctx = image.getContext('2d'), pixels = ctx.createImageData(image.width,image.height);
      const palette = [[255,248,248],[255,231,231],[255,212,212]];
      for(let y=0;y<image.height;y++)for(let x=0;x<image.width;x++){
        const q=maximum*(1-x/image.width),classical=maximum*(1-y/image.height);
        if(q>classical)continue;
        const rgb=palette[this.costRegion(q,classical)],offset=(y*image.width+x)*4;
        pixels.data[offset]=rgb[0];pixels.data[offset+1]=rgb[1];pixels.data[offset+2]=rgb[2];pixels.data[offset+3]=255;
      }
      ctx.putImageData(pixels,0,0);this.gradientKey=key;this.gradient=image;
      return image;
    }

    hit(x, y) {
      return this.projected.filter(p => Math.hypot(p.x - x, p.y - y) < Math.max(7,(p.radius||5)+4))
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)
          || this.projected.indexOf(b) - this.projected.indexOf(a))[0] || null;
    }

    draw() {
      const c=this.ctx,width=this.width,height=this.height;
      if(!width||!height)return;
      c.clearRect(0,0,width,height);
      const compact=width<480,maximum=this.viewMax||this.options.costMax||4.25;
      const font='-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
      const L=compact?91:105,T=compact?65:42;
      const categoryGroup=p=>p.strengthCategory==='to_polynomial'?2:['intermediate','exp_to_subexp'].includes(p.strengthCategory)?1:0;
      const unspecified=this.points.filter(p=>!Number.isFinite(p.costQ)||!Number.isFinite(p.costC));
      const groups=[0,1,2].map(i=>unspecified.filter(p=>categoryGroup(p)===i));
      const stripLeft=17,stripWidth=width-34,groupEdges=[0,.355,.735,1];
      const groupLayouts=groups.map((items,i)=>{
        const x=stripLeft+stripWidth*groupEdges[i],w=stripWidth*(groupEdges[i+1]-groupEdges[i]);
        const columns=Math.max(2,Math.floor((w-14)/15));
        return{items,x,w,columns,rows:Math.ceil(items.length/columns)};
      });
      const stripRows=Math.max(0,...groupLayouts.map(g=>g.rows));
      const stripHeight=unspecified.length?100+stripRows*15:0;
      const W=Math.max(125,width-L-20),H=Math.max(115,height-T-94-stripHeight);
      const mapX=value=>L+W*(1-value/maximum),mapY=value=>T+H*(1-value/maximum);
      const triangle=()=>{c.beginPath();c.moveTo(L,T);c.lineTo(L+W,T);c.lineTo(L+W,T+H);c.closePath();};
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
      c.save();triangle();c.clip();
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
      drawBoundary([[0,2.5],[2.5,2.5],[3.5,3.5],[3.5,maximum]],boundaryStyles[0]);
      drawBoundary([[2.5,2.5],[2.5,maximum]],boundaryStyles[1]);
      this.boundaries=[{name:'polynomial',vertices:[[0,2.5],[2.5,2.5],[3.5,3.5],[3.5,maximum]]},{name:'to_polynomial',vertices:[[2.5,2.5],[2.5,maximum]]}];
      this.projected=this.points.filter(p=>Number.isFinite(p.costQ)&&Number.isFinite(p.costC)&&p.costC>=p.costQ&&p.costQ>=0&&p.costC<=maximum)
        .map(p=>({...p,x:mapX(p.costQ),y:mapY(p.costC)}));
      this.projected=window.quantumPointLayout.spreadPoints(this.projected,(x,y,r,p)=>{
        if(x<L+r||x>L+W-r||y<T+r||y>T+H-r||(x-L)/W<(y-T)/H)return false;
        if(!p)return true;
        const q=maximum*(1-(x-L)/W),cl=maximum*(1-(y-T)/H);
        return this.costRegion(q,cl)===this.costRegion(p.costQ,p.costC);
      });
      const drawPoint=p=>{
        const active=p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug;
        const radius=active?Math.max(5.8,p.radius+1):p.radius;
        if(Number.isFinite(p.anchorX)&&Math.hypot(p.x-p.anchorX,p.y-p.anchorY)>3){
          c.beginPath();c.moveTo(p.anchorX,p.anchorY);c.lineTo(p.x,p.y);c.strokeStyle='#987b7b55';c.lineWidth=.6;c.stroke();
        }
        c.beginPath();c.arc(p.x,p.y,radius+1,0,Math.PI*2);c.fillStyle='#fff';c.fill();
        c.beginPath();c.arc(p.x,p.y,radius,0,Math.PI*2);c.fillStyle=p.color||'#fff';c.fill();c.lineWidth=.85;c.strokeStyle='#8e3535';c.stroke();
        if(active){c.beginPath();c.arc(p.x,p.y,radius+3,0,Math.PI*2);c.strokeStyle='#243248';c.lineWidth=1.3;c.stroke();}
      };
      this.projected.forEach(drawPoint);c.restore();
      const names=[...this.projected].filter(p=>p.importance!=='peripheral'||p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug)
        .sort((a,b)=>Number(b.slug===this.options.selectedSlug)-Number(a.slug===this.options.selectedSlug)||window.quantumPointLayout.importance(b)-window.quantumPointLayout.importance(a));
      const occupied=[];
      names.forEach(p=>{
        let name=p.shortName||p.name;if(name.length>42)name=name.slice(0,39)+'…';
        const fontSize=p.importance==='high'?13:12;
        c.font=`${p.importance==='high'||p.selected?600:500} ${fontSize}px ${font}`;
        while(c.measureText(name).width>W-18&&name.length>10)name=name.slice(0,-2)+'…';
        const tw=c.measureText(name).width;let shown=false;
        for(const[dx,dy]of[[12,-17],[-tw-12,-17],[12,17],[-tw/2,-34],[-tw-12,17],[12,-49],[-tw-12,-49],[12,42],[-tw-12,42]]){
          const box={x:p.x+dx-4,y:p.y+dy-9,w:tw+8,h:fontSize+7};
          if(box.x<L+2||box.x+box.w>L+W-2||box.y<T+2||box.y+box.h>T+H-2)continue;
          if(occupied.some(q=>box.x<q.x+q.w&&box.x+box.w>q.x&&box.y<q.y+q.h&&box.y+box.h>q.y))continue;
          occupied.push(box);c.beginPath();c.moveTo(p.x,p.y);c.lineTo(Math.max(box.x,Math.min(box.x+box.w,p.x)),box.y+box.h/2);c.strokeStyle='#687d7855';c.lineWidth=.7;c.stroke();
          c.fillStyle='rgba(255,255,255,.94)';c.fillRect(box.x,box.y,box.w,box.h);c.fillStyle=p.importance==='high'||p.selected?'#17242a':'#3f4b51';c.textAlign='left';c.textBaseline='middle';c.fillText(name,p.x+dx,p.y+dy);shown=true;break;
        }
        if(!shown&&(p.selected||p.slug===this.hovered?.slug)){
          const x=Math.max(L+6,Math.min(L+W-tw-6,p.x-tw/2)),y=Math.max(T+14,Math.min(T+H-14,p.y-24));
          c.fillStyle='#fff';c.fillRect(x-4,y-10,tw+8,20);c.fillStyle='#17242a';c.textAlign='left';c.textBaseline='middle';c.fillText(name,x,y);
        }
      });
      c.save();c.translate(L+W*.32-8,T+H*.32+12);c.rotate(Math.atan2(H,W));c.font='italic 14px Georgia,serif';c.textAlign='center';c.textBaseline='top';c.fillStyle='#77656b';c.fillText('TQ = TC',0,0);c.restore();
      triangle();c.strokeStyle='#cdbfc2';c.lineWidth=1;c.stroke();
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
      if(unspecified.length){
        const stripTop=T+H+90;
        c.fillStyle='#f8faf9';c.fillRect(12,stripTop,width-24,stripHeight-3);
        c.font=`500 13px ${font}`;c.textAlign='left';c.textBaseline='middle';c.fillStyle='#53635e';c.fillText('Unspecified complexity',22,stripTop+15);
        const hasIntermediate=groups[1].some(p=>p.strengthCategory==='intermediate');
        const headings=[['Polynomial'],hasIntermediate?['Improved exp. / subexp.','Exp. → subexp.']:['Exp. → subexp.'],['(Sub)exp. →','polynomial']];
        const stripPoints=[];
        groupLayouts.forEach((g,i)=>{
          c.font=`500 ${compact?12:13}px ${font}`;c.textAlign='center';c.fillStyle='#675758';
          headings[i].forEach((line,j)=>c.fillText(line,g.x+g.w/2,stripTop+38+j*15,g.w-10));
          const items=[...g.items].sort((a,b)=>window.quantumPointLayout.importance(b)-window.quantumPointLayout.importance(a));
          const spacing=(g.w-14)/g.columns;
          items.forEach((p,index)=>stripPoints.push({...p,x:g.x+7+(index%g.columns+.5)*spacing,y:stripTop+68+Math.floor(index/g.columns)*15,radius:window.quantumPointLayout.pointRadius(p)}));
          if(i<2){c.beginPath();c.moveTo(g.x+g.w,stripTop+29);c.lineTo(g.x+g.w,stripTop+stripHeight-24);c.strokeStyle=boundaryStyles[i].color;c.lineWidth=1.8;c.setLineDash(boundaryStyles[i].dash);c.stroke();c.setLineDash([]);}
        });
        stripPoints.forEach(drawPoint);
        const focused=stripPoints.find(p=>p.slug===this.hovered?.slug)||stripPoints.find(p=>p.slug===this.options.selectedSlug);
        if(focused){c.font=`600 13px ${font}`;c.fillStyle='#17242a';c.textAlign='left';c.fillText(focused.shortName||focused.name,22,stripTop+stripHeight-13,width-44);}
        this.projected.push(...stripPoints);
      }
    }

  }
  window.CostScene = CostScene;
})();
