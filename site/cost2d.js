/* Principal quantum and classical complexity comparisons. */
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
        const extent=Math.max(0,...(this.costPair(selected)||[]));
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

    costRegion(q, classical) {
      if(q>classical)return -1;
      const polynomial=this.options.polynomialBoundary??2.4,exponential=this.options.exponentialBoundary??2.9;
      if (classical <= polynomial || q >= exponential || Math.abs(q-classical)<1e-7) return 0;
      return q <= polynomial ? 2 : 1;
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

    costPair(point) {
      if(point.costComparison?.kind==='unavailable')return null;
      const pair=Number.isFinite(point.costQ)&&Number.isFinite(point.costC)
        ?[point.costQ,point.costC]
        :point.costComparison?.kind==='point'?point.costComparison.points?.[0]:null;
      return pair?.length===2&&pair.every(n=>Number.isFinite(n)&&n>=0)?pair:null;
    }

    hit(x, y) {
      const marker=this.projected.filter(p => Math.hypot(p.x - x, p.y - y) < Math.max(7,(p.radius||5)+4))
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)
          || this.projected.indexOf(b) - this.projected.indexOf(a))[0] || null;
      if(marker)return marker;
      const label=(this.labelBoxes||[]).find(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h);
      if(label)return this.projected.find(p=>p.slug===label.slug)||null;
      return null;
    }

    draw() {
      const c=this.ctx,width=this.width,height=this.height;
      if(!width||!height)return;
      c.clearRect(0,0,width,height);
      const compact=width<480,maximum=this.viewMax||this.options.costMax||4.25;
      const font='-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
      const L=compact?91:105,T=compact?65:42;
      const unspecified=this.points.filter(p=>!this.costPair(p));
      const stripLeft=22,stripWidth=width-44,stripColumns=Math.max(2,Math.floor(stripWidth/20));
      const stripRows=Math.ceil(unspecified.length/stripColumns);
      const stripHeight=unspecified.length?28+stripRows*20:0;
      const W=Math.max(125,width-L-20);
      const mapX=value=>L+W*(1-value/maximum);
      const ticks=(this.options.costTicks||[]).filter(t=>t.value>=0&&t.value<=maximum);
      c.font=`500 14px ${font}`;
      const tickRows=[];
      const bottomLabels=ticks.map(t=>{
        const text=String(t.label||''),w=c.measureText(text).width;
        const x=Math.max(w/2+3,Math.min(width-w/2-3,mapX(t.value)));
        let row=tickRows.findIndex(items=>items.every(item=>Math.abs(x-item.x)>(w+item.w)/2+8));
        if(row<0){row=tickRows.length;tickRows.push([]);}
        const label={...t,text,x,w,row};tickRows[row].push(label);return label;
      });
      const axisOffset=26+20*Math.max(1,tickRows.length),stripOffset=axisOffset+26;
      const H=Math.max(115,height-T-stripOffset-4-stripHeight);
      const mapY=value=>T+H*(1-value/maximum);
      const frame=()=>{c.beginPath();c.rect(L,T,W,H);};
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
      const poly=this.options.polynomialBoundary??2.4,exp=this.options.exponentialBoundary??2.9;
      drawBoundary([[0,poly],[poly,poly],[exp,exp],[exp,maximum]],boundaryStyles[0]);
      drawBoundary([[poly,poly],[poly,maximum]],boundaryStyles[1]);
      this.boundaries=[{name:'polynomial',vertices:[[0,poly],[poly,poly],[exp,exp],[exp,maximum]]},{name:'to_polynomial',vertices:[[poly,poly],[poly,maximum]]}];
      c.beginPath();c.moveTo(L,T);c.lineTo(L+W,T+H);c.strokeStyle='#b5bfc5';c.lineWidth=1;c.stroke();
      c.save();c.translate(L+W*.32-8,T+H*.32+12);c.rotate(Math.atan2(H,W));c.font='italic 14px Georgia,serif';c.textAlign='center';c.textBaseline='top';c.fillStyle='#77656b';c.fillText('TQ = TC',0,0);c.restore();
      this.projected=this.points.map(p=>{
        const pair=this.costPair(p);
        return pair&&pair.every(value=>value<=maximum)?{...p,x:mapX(pair[0]),y:mapY(pair[1]),costAnchor:pair}:null;
      }).filter(Boolean);
      this.projected=window.quantumPointLayout.spreadPoints(this.projected,(x,y,r,p)=>{
        if(x<L+r||x>L+W-r||y<T+r||y>T+H-r)return false;
        if(!p)return true;
        const q=maximum*(1-(x-L)/W),cl=maximum*(1-(y-T)/H);
        return this.costRegion(q,cl)===this.costRegion(...p.costAnchor);
      });
      const drawPoint=p=>{
        const active=p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug;
        const radius=active?Math.max(5.8,p.radius+1):p.radius;
        if(Number.isFinite(p.anchorX)&&Math.hypot(p.x-p.anchorX,p.y-p.anchorY)>3){
          c.beginPath();c.moveTo(p.anchorX,p.anchorY);c.lineTo(p.x,p.y);c.strokeStyle='#987b7b55';c.lineWidth=.6;c.stroke();
        }
        c.beginPath();c.arc(p.x,p.y,radius+1,0,Math.PI*2);c.fillStyle='#fff';c.fill();
        c.beginPath();c.arc(p.x,p.y,radius,0,Math.PI*2);c.fillStyle=p.color||'#fff';c.fill();c.lineWidth=active?1.6:1;c.strokeStyle='#8e3535';c.stroke();
        if(active){c.beginPath();c.arc(p.x,p.y,radius+3,0,Math.PI*2);c.strokeStyle='#243248';c.lineWidth=1.3;c.stroke();}
      };
      this.mainProjected=[...this.projected];
      this.projected.forEach(drawPoint);c.restore();
      this.labelBoxes=window.quantumPointLayout.drawPointLabels(c,this.projected,{bounds:{x:L+2,y:T+2,w:W-4,h:H-4},selectedSlug:this.options.selectedSlug,hoveredSlug:this.hovered?.slug,compact});
      frame();c.strokeStyle='#cdbfc2';c.lineWidth=1;c.stroke();
      c.beginPath();c.moveTo(L,T);c.lineTo(L,T+H);c.lineTo(L+W,T+H);c.strokeStyle='#8c7478';c.lineWidth=1.3;c.stroke();
      c.font=`500 14px ${font}`;
      const leftLabels=ticks.map(t=>({...t,text:String(t.label||''),y:mapY(t.value)})).sort((a,b)=>a.y-b.y);
      leftLabels.forEach((label,i)=>{label.drawY=Math.max(label.y,i?leftLabels[i-1].drawY+18:T+7);});
      for(let i=leftLabels.length-1;i>=0;i--)leftLabels[i].drawY=Math.min(leftLabels[i].drawY,i<leftLabels.length-1?leftLabels[i+1].drawY-18:T+H-7);
      this.axisTickLabels={bottom:[],left:[]};
      ticks.forEach(t=>{
        const x=mapX(t.value),y=mapY(t.value);
        c.beginPath();c.moveTo(x,T+H);c.lineTo(x,T+H+6);c.moveTo(L,y);c.lineTo(L-6,y);c.strokeStyle='#a78f94';c.stroke();
      });
      bottomLabels.forEach(label=>{
        const y=T+H+20+label.row*20;
        c.fillStyle='#594c52';c.textAlign='center';c.textBaseline='middle';c.fillText(label.text,label.x,y);
        this.axisTickLabels.bottom.push({text:label.text,x:label.x-label.w/2,y:y-8,w:label.w,h:16});
      });
      leftLabels.forEach(label=>{
        if(Math.abs(label.drawY-label.y)>2){c.beginPath();c.moveTo(L-6,label.y);c.lineTo(L-9,label.drawY);c.strokeStyle='#a78f94';c.stroke();}
        c.fillStyle='#594c52';c.textAlign='right';c.textBaseline='middle';c.fillText(label.text,L-11,label.drawY);
        const w=c.measureText(label.text).width;
        this.axisTickLabels.left.push({text:label.text,x:L-11-w,y:label.drawY-8,w,h:16});
      });
      c.font=`600 15px ${font}`;c.fillStyle='#57434e';c.textAlign='center';c.textBaseline='middle';c.fillText('QUANTUM COMPLEXITY',L+W/2,T+H+axisOffset);
      c.save();c.translate(16,T+H/2);c.rotate(-Math.PI/2);c.fillText('CLASSICAL COMPLEXITY',0,0);c.restore();
      this.stripProjected=[];
      if(unspecified.length){
        const stripTop=T+H+stripOffset;
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
