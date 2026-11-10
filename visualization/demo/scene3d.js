/* Native canvas scene: coordinates remain continuous under rotation and zoom. */
(function () {
  'use strict';
  const importance = p => p.featured ? 4 : p.importance === 'high' ? 3 : p.importance === 'peripheral' ? 1 : 2;
  const pointRadius = p => p.featured ? 7 : p.importance === 'high' ? 5.5 : p.importance === 'peripheral' ? 1.9 : 3.6;
  function spreadPoints(points, valid = () => true) {
    const placed = [];
    const order = [...points].sort((a,b) => Number(b.selected)-Number(a.selected) || importance(b)-importance(a));
    for (const point of order) {
      const p = {...point, anchorX:point.x, anchorY:point.y, radius:pointRadius(point)};
      let found = false;
      for (let ring=0; ring<=16 && !found; ring++) {
        const count=ring ? 6*ring : 1, radius=ring*7;
        for(let i=0;i<count;i++) {
          const angle=i/count*Math.PI*2;
          const x=point.x+Math.cos(angle)*radius,y=point.y+Math.sin(angle)*radius;
          if(!valid(x,y,p.radius,p))continue;
          if(placed.some(q=>Math.hypot(x-q.x,y-q.y)<p.radius+q.radius+2))continue;
          p.x=x;p.y=y;found=true;break;
        }
      }
      placed.push(p);
    }
    return placed.sort((a,b)=>Number(a.selected)-Number(b.selected));
  }
  function drawPointLabels(c,points,{bounds,occupied=[],selectedSlug,hoveredSlug,compact=false}={}) {
    const taken=[...occupied],labels=[];
    const intersects=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
    const names=points.filter(p=>p.featured||p.importance!=='peripheral'||p.slug===selectedSlug||p.slug===hoveredSlug)
      .sort((a,b)=>Number(!!b.featured)-Number(!!a.featured)||Number(b.slug===selectedSlug)-Number(a.slug===selectedSlug)||importance(b)-importance(a));
    for(const p of names){
      const selected=p.slug===selectedSlug,active=selected||p.slug===hoveredSlug;
      const fontSize=p.featured?(compact?17:19):p.importance==='high'?13:11;
      c.font=`${p.featured?700:selected||p.importance==='high'?600:500} ${fontSize}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
      let name=p.shortName||p.name;
      if(!p.featured&&name.length>44)name=name.slice(0,41)+'…';
      while(c.measureText(name).width>bounds.w-16&&name.length>8)name=name.slice(0,-2)+'…';
      const tw=c.measureText(name).width,bw=tw+10,bh=fontSize+9;
      const placements=[];
      for(const[dx,dy]of[[13,-20],[-tw-13,-20],[13,17],[-tw-13,17],[-tw/2,-39],[-tw/2,36],[14,-60],[-tw-14,-60],[14,57],[-tw-14,57]])placements.push({x:p.x+dx-5,y:p.y+dy-bh/2,w:bw,h:bh});
      if(p.featured||active){
        const fallback=[];
        for(let y=bounds.y+5;y+bh<=bounds.y+bounds.h-5;y+=4){
          const x=Math.max(bounds.x+5,Math.min(bounds.x+bounds.w-bw-5,p.x-bw/2));
          fallback.push({x,y,w:bw,h:bh});
          fallback.push({x:bounds.x+5,y,w:bw,h:bh});
          fallback.push({x:bounds.x+bounds.w-bw-5,y,w:bw,h:bh});
        }
        fallback.sort((a,b)=>Math.hypot(a.x+a.w/2-p.x,a.y+a.h/2-p.y)-Math.hypot(b.x+b.w/2-p.x,b.y+b.h/2-p.y));
        placements.push(...fallback);
      }
      const fits=box=>box.x>=bounds.x&&box.x+box.w<=bounds.x+bounds.w&&box.y>=bounds.y&&box.y+box.h<=bounds.y+bounds.h&&!taken.some(q=>intersects(box,q));
      let box=placements.find(fits);
      if(!box&&(p.featured||active))box={x:Math.max(bounds.x+4,Math.min(bounds.x+bounds.w-bw-4,p.x-bw/2)),y:Math.max(bounds.y+4,Math.min(bounds.y+bounds.h-bh-4,p.y-35)),w:bw,h:bh};
      if(!box)continue;
      taken.push(box);labels.push({...box,slug:p.slug,text:name,fontSize,featured:!!p.featured});
      c.beginPath();c.moveTo(p.x,p.y);c.lineTo(Math.max(box.x,Math.min(box.x+box.w,p.x)),Math.max(box.y,Math.min(box.y+box.h,p.y)));c.strokeStyle=p.featured?'#52676388':'#687d7844';c.lineWidth=p.featured?1:.65;c.stroke();
      c.fillStyle=p.featured?'rgba(255,255,255,.97)':'rgba(255,255,255,.91)';c.fillRect(box.x,box.y,box.w,box.h);
      c.fillStyle=p.featured||selected||p.importance==='high'?'#10232b':'#425057';c.textAlign='left';c.textBaseline='middle';c.fillText(name,box.x+5,box.y+box.h/2);
    }
    return labels;
  }
  window.quantumPointLayout = {importance,pointRadius,spreadPoints,drawPointLabels};


  class SpeedupScene {
    constructor(canvas, callbacks = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.callbacks = callbacks;
      this.points = [];
      this.projected = [];
      this.options = {};
      this.yaw = -0.50;
      this.pitch = -0.30;
      this.zoom = 1;
      this.hovered = null;
      canvas.style.touchAction = 'none';
      canvas.style.cursor = 'grab';
      canvas.setAttribute('aria-label', 'Rotatable three-dimensional plot of strength, evidence and hardware resources');
      canvas.addEventListener('pointerdown', e => {
        this.drag = { x: e.clientX, y: e.clientY, moved: 0 };
        canvas.setPointerCapture(e.pointerId);
        canvas.style.cursor = 'grabbing';
      });
      canvas.addEventListener('pointermove', e => {
        const rect = canvas.getBoundingClientRect();
        if (this.drag) {
          const dx = e.clientX - this.drag.x, dy = e.clientY - this.drag.y;
          this.drag.moved += Math.abs(dx) + Math.abs(dy);
          this.yaw -= dx * 0.007;
          this.pitch = Math.max(-1.05, Math.min(0.65, this.pitch - dy * 0.006));
          this.drag.x = e.clientX; this.drag.y = e.clientY;
          this.draw();
          return;
        }
        const p = this.hit(e.clientX - rect.left, e.clientY - rect.top);
        if (p?.slug !== this.hovered?.slug) {
          this.hovered = p;
          canvas.style.cursor = p ? 'pointer' : 'grab';
          this.callbacks.onHover?.(p || null, { x: e.clientX, y: e.clientY });
          this.draw();
        }
      });
      canvas.addEventListener('pointerup', e => {
        const rect = canvas.getBoundingClientRect();
        if (this.drag && this.drag.moved < 5) {
          const p = this.hit(e.clientX - rect.left, e.clientY - rect.top);
          if (p) this.callbacks.onSelect?.(p.slug, p);
        }
        this.drag = null;
        canvas.style.cursor = 'grab';
        if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      });
      canvas.addEventListener('pointercancel', () => { this.drag = null; });
      canvas.addEventListener('pointerleave', () => {
        if (!this.drag) {
          this.hovered = null;
          this.callbacks.onHover?.(null);
          this.draw();
        }
      });
      canvas.addEventListener('wheel', e => {
        e.preventDefault();
        this.zoom = Math.max(0.65, Math.min(1.5, this.zoom * Math.exp(-e.deltaY * 0.001)));
        this.draw();
      }, { passive: false });
      this.observer = new ResizeObserver(() => this.resize());
      this.observer.observe(canvas);
      this.resize();
    }

    setData(points, options = {}) {
      this.points = points;
      this.options = options;
      this.draw();
    }

    reset() {
      this.yaw = -0.50; this.pitch = -0.30; this.zoom = 1;
      this.draw();
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      this.width = rect.width || 600;
      this.height = rect.height || 430;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(this.width * dpr);
      this.canvas.height = Math.round(this.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.draw();
    }

    project(x, y, z) {
      const wx = (x - 0.5) * (this.width > 800 ? 3.4 : 2.5), wy = (y - 0.5) * (this.width<480?3.25:1.5), wz = (z - 0.5) * 1.15;
      const xx = Math.cos(this.yaw) * wx + Math.sin(this.yaw) * wz;
      const zz = -Math.sin(this.yaw) * wx + Math.cos(this.yaw) * wz;
      const yy = Math.cos(this.pitch) * wy - Math.sin(this.pitch) * zz;
      const depth = Math.sin(this.pitch) * wy + Math.cos(this.pitch) * zz;
      const scale = Math.min(this.width / 3.80, this.height / 3.20) * this.zoom;
      return { x: this.width * 0.56 + xx * scale, y: this.height * 0.43 - yy * scale, depth };
    }

    line(a, b, color = '#e5e8ed', width = 1, dashed = false) {
      const c = this.ctx, p = this.project(...a), q = this.project(...b);
      c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(q.x, q.y);
      c.strokeStyle = color; c.lineWidth = width;
      c.setLineDash(dashed ? [3, 4] : []); c.stroke(); c.setLineDash([]);
    }

    label(str, p, color, dx = 0, dy = 0, align = 'center', size = 14, maxWidth = null) {
      const c = this.ctx;
      c.font = `500 ${size}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
      c.textAlign = align; c.textBaseline = 'middle';
      let lines=Array.isArray(str)?str:String(str).split('\n');
      if(maxWidth){
        lines=lines.flatMap(line=>{
          const wrapped=[];let current='';
          for(const word of line.split(' ')){
            if(current&&c.measureText(current+' '+word).width>maxWidth){wrapped.push(current);current=word;}
            else current+=(current?' ':'')+word;
          }
          if(current)wrapped.push(current);
          return wrapped;
        });
      }
      const tw = Math.max(0,...lines.map(line=>c.measureText(line).width));
      const lineHeight=size+3,totalHeight=lines.length*lineHeight;
      const left = align === 'right' ? tw + 7 : align === 'left' ? 7 : tw / 2 + 7;
      const right = align === 'left' ? this.width - tw - 7 : align === 'right' ? this.width - 7 : this.width - tw / 2 - 7;
      const x=Math.max(left,Math.min(right,p.x+dx)),y=Math.max(totalHeight/2+7,Math.min(this.height-totalHeight/2-7,p.y+dy));
      c.fillStyle = color;
      lines.forEach((line,i)=>c.fillText(line,x,y+(i-(lines.length-1)/2)*lineHeight));
      this.axisLabelBoxes?.push({text:lines.join(' '),x:x-(align==='right'?tw:align==='center'?tw/2:0)-4,y:y-totalHeight/2-4,w:tw+8,h:totalHeight+8});
    }

    hit(x, y) {
      const label=(this.labelBoxes||[]).find(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h);
      if(label)return this.projected.find(p=>p.slug===label.slug)||null;
      return this.projected.filter(p => Math.hypot(p.x - x, p.y - y) < Math.max(7,(p.radius||5)+4))
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)
          || this.projected.indexOf(b) - this.projected.indexOf(a))[0] || null;
    }

    draw() {
      const c = this.ctx, w = this.width, h = this.height;
      if (!w || !h) return;
      c.clearRect(0, 0, w, h);
      this.axisLabelBoxes=[{x:w-57,y:0,w:57,h:58}];
      const maxS = this.options.strengthMax || 5.4, maxH = this.options.hardwareMax || 3.4;
      const hardwarePosition = value => value === this.options.hardwareUnspecified ? 1.32 : value / maxH;
      const compact = w < 600;
      const tickSize = compact ? 13 : 14;
      const axisSize = compact ? 14 : 15;
      const floor = [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]].map(p => this.project(...p));
      c.beginPath(); floor.forEach((p, i) => i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y));
      c.closePath(); c.fillStyle = '#f7f8fa'; c.fill();
      for (let i = 0; i <= 4; i++) {
        const t = i / 4;
        this.line([t, 0, 0], [t, 0, 1]);
        this.line([0, 0, t], [1, 0, t]);
        this.line([0, t, 1], [1, t, 1], '#ebedf1');
        this.line([1, 0, t], [1, 1, t], '#ebedf1');
      }
      this.line([0, 0, 1], [0, 1, 1], '#dde2e8');
      this.line([1, 0, 1], [1, 1, 1], '#dde2e8');
      this.line([0, 1, 1], [1, 1, 1], '#dde2e8');
      const boundaries=(this.options.strengthBoundaries||[]).filter(b=>b.value>0&&b.value<maxS).sort((a,b)=>a.value-b.value);
      this.boundaryPlanes=[];
      boundaries.forEach((boundary,index)=>{
        const x=boundary.value/maxS;
        const corners=[[x,0,0],[x,1,0],[x,1,1],[x,0,1]].map(p=>this.project(...p));
        this.boundaryPlanes.push({value:boundary.value,corners});
        c.beginPath();corners.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y));c.closePath();
        c.fillStyle=index?'rgba(161,46,57,.045)':'rgba(104,79,118,.04)';c.fill();
        const color=boundary.color||(index?'#9f293b':'#6d537d');
        this.line([x,0,0],[x,0,1],color,1.8);
        this.line([x,0,0],[x,1,0],color,1.5,true);
        this.line([x,1,0],[x,1,1],color,1.5,true);
        this.line([x,1,1],[x,0,1],color,1.5,true);
      });
      this.line([0, 0, 0], [1, 0, 0], '#c84e4a', 1.6);
      this.line([0, 0, 0], [0, 1, 0], '#526fa6', 1.6);
      this.line([0, 0, 0], [0, 0, 1], '#448779', 1.6);
      if(!compact)this.label('STRENGTH', this.project(0.55, 0, 0), '#ad3333', 0, 89, 'center', axisSize);
      this.label('EVIDENCE', this.project(0, 1, 0), '#46689b', -12, -35, 'right', axisSize);
      const evidenceTicks = this.options.evidenceTicks || [
        { value: 0, label: 'Unestablished' }, { value: 0.5, label: 'Partial' },
        { value: 0.75, label: 'Conditional' }, { value: 1, label: 'Proved' }
      ];
      evidenceTicks.forEach(t => {
        const p = this.project(0, t.value, 0);
        if(t.value===0)this.label(t.label||'',p,'#526680',14,-23,'left',tickSize,compact?105:125);
        else this.label(t.label || '', p, '#526680', -12, 0, 'right', tickSize,compact?105:125);
      });
      const strengthTicks = this.options.strengthTicks || [];
      const strengthGridLeft=Math.max(140,w*.39),strengthGridWidth=w-strengthGridLeft-12;
      const strengthGridY=Math.min(h-126,this.project(.5,0,0).y+38);
      strengthTicks.forEach((t, i) => {
        if (t.value < 0 || t.value > maxS) return;
        const p = this.project(t.value / maxS, 0, 0);
        c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x, p.y + 5); c.strokeStyle = '#c8908b'; c.lineWidth = 1; c.stroke();
        if(compact){
          const target={x:strengthGridLeft+(i%2+.5)*strengthGridWidth/2,y:strengthGridY+Math.floor(i/2)*43};
          c.beginPath();c.moveTo(p.x,p.y+6);c.lineTo(target.x,target.y-20);c.strokeStyle='#b98b8b88';c.lineWidth=.75;c.stroke();
          this.label(t.label||'',target,'#79575c',0,0,'center',tickSize,Math.min(105,strengthGridWidth/2-8));
        }else this.label(t.label || '', p, '#79575c', 0, i%2?60:30, 'center', tickSize,145);
      });
      if(compact)this.label('STRENGTH',{x:strengthGridLeft+strengthGridWidth/2,y:strengthGridY+79},'#ad3333',0,0,'center',axisSize);
      const hardwareTicks = this.options.hardwareTicks || [
        { value: 0, label: 'NISQ' }, { value: 1, label: 'Fault-tolerant' },
        { value: 2, label: 'Coherent data' }, { value: 3, label: 'Specialized resources' }
      ];
      const hardwareFont=compact?10:11;
      const hardwareNames={0:'NISQ',1:'Fault-tolerant',2:'Coherent access',3:'Specialized'};
      hardwareTicks.filter(t=>t.value>=0&&t.value<=maxH).forEach(t=>{
        const p=this.project(0,0,t.value/maxH);
        this.label(hardwareNames[t.value]||t.label,p,'#4c7568',-8,15-t.value*2,'right',hardwareFont);
      });
      this.label('HARDWARE',this.project(0,0,1),'#337c6c',-8,-35,'right',12);
      if(this.points.some(p=>p.hardware===this.options.hardwareUnspecified)){
        const p=this.project(0,0,hardwarePosition(this.options.hardwareUnspecified));
        this.label(this.options.hardwareUnspecifiedLabel||'Not applicable',p,'#61706a',-8,-2,'right',hardwareFont);
      }
      this.projected = this.points.map(p => ({ ...p, renderStrength:p.layoutStrength??p.strength,
        ...this.project((p.layoutStrength??p.strength) / maxS, p.evidence, hardwarePosition(p.hardware)) }))
        .sort((a, b) => b.depth - a.depth
          || Number(a.slug === this.options.selectedSlug) - Number(b.slug === this.options.selectedSlug));
      const occupied = [...this.axisLabelBoxes];
      const start=this.project(0,0,0),end=this.project(1,0,0);
      const ux=end.x-start.x,uy=end.y-start.y,axisLength2=ux*ux+uy*uy;
      const cuts=[0,...boundaries.map(b=>b.value),maxS];
      this.projected = spreadPoints(this.projected, (x,y,r,p) => {
        if(x<r+6||x>w-r-6||y<r+6||y>h-r-6)return false;
        if(this.axisLabelBoxes.some(box=>x+r+2>box.x&&x-r-2<box.x+box.w&&y+r+2>box.y&&y-r-2<box.y+box.h))return false;
        const group=Math.min(cuts.length-2,cuts.findIndex((value,i)=>i<cuts.length-1&&p.renderStrength>=value&&p.renderStrength<=cuts[i+1]));
        if(group<0||axisLength2<1)return true;
        const displacement=((x-p.anchorX)*ux+(y-p.anchorY)*uy)/axisLength2*maxS;
        const position=p.renderStrength+displacement;
        return position>=cuts[group]+(group?0.12:0)&&position<=cuts[group+1]-(group<cuts.length-2?0.12:0);
      });
      this.projected.forEach(p=>{p.displayStrength=p.renderStrength+((p.x-p.anchorX)*ux+(p.y-p.anchorY)*uy)/Math.max(1,axisLength2)*maxS;});
      this.projected.forEach(p => {
        const selected = p.slug === this.options.selectedSlug || p.selected;
        const active = selected || p.slug === this.hovered?.slug;
        if (selected) {
          this.line([p.renderStrength / maxS, p.evidence, hardwarePosition(p.hardware)], [p.renderStrength / maxS, 0, hardwarePosition(p.hardware)], '#b7bdc7', 1, true);
        }
        if(Math.hypot(p.x-p.anchorX,p.y-p.anchorY)>3){c.beginPath();c.moveTo(p.anchorX,p.anchorY);c.lineTo(p.x,p.y);c.strokeStyle='#9caaa944';c.lineWidth=.6;c.stroke();}
        const radius = active ? Math.max(6.4,p.radius+1) : p.radius;
        c.beginPath(); c.arc(p.x, p.y, radius+(p.importance==='peripheral'?.9:1.4), 0, Math.PI * 2);
        c.fillStyle = '#fff'; c.fill();
        c.beginPath(); c.arc(p.x, p.y, radius, 0, Math.PI * 2);
        c.fillStyle = p.color || '#c83732'; c.fill(); c.lineWidth = p.importance==='peripheral'?.7:1; c.strokeStyle = '#9e3737'; c.stroke();
        if (active) {
          c.beginPath(); c.arc(p.x, p.y, radius+4, 0, Math.PI * 2); c.strokeStyle = '#27384c'; c.lineWidth = 1.3; c.stroke();
        }
      });
      this.labelBoxes=drawPointLabels(c,this.projected,{bounds:{x:7,y:7,w:w-14,h:h-14},occupied:this.axisLabelBoxes,selectedSlug:this.options.selectedSlug,hoveredSlug:this.hovered?.slug,compact:w<480});

    }
  }
  window.SpeedupScene = SpeedupScene;
})();
