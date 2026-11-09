/* Native canvas scene: coordinates remain continuous under rotation and zoom. */
(function () {
  'use strict';
  const importance = p => p.importance === 'high' ? 3 : p.importance === 'peripheral' ? 1 : 2;
  const pointRadius = p => p.importance === 'high' ? 6.8 : p.importance === 'peripheral' ? 2.8 : 4.7;
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
          if(!valid(x,y,p.radius))continue;
          if(placed.some(q=>Math.hypot(x-q.x,y-q.y)<p.radius+q.radius+2))continue;
          p.x=x;p.y=y;found=true;break;
        }
      }
      placed.push(p);
    }
    return placed.sort((a,b)=>Number(a.selected)-Number(b.selected));
  }
  window.quantumPointLayout = {importance,pointRadius,spreadPoints};

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
          this.yaw += dx * 0.007;
          this.pitch = Math.max(-1.05, Math.min(0.65, this.pitch + dy * 0.006));
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
      const wx = (x - 0.5) * (this.width > 800 ? 3 : 1.9), wy = (y - 0.5) * 1.5, wz = (z - 0.5) * 1.3;
      const xx = Math.cos(this.yaw) * wx + Math.sin(this.yaw) * wz;
      const zz = -Math.sin(this.yaw) * wx + Math.cos(this.yaw) * wz;
      const yy = Math.cos(this.pitch) * wy - Math.sin(this.pitch) * zz;
      const depth = Math.sin(this.pitch) * wy + Math.cos(this.pitch) * zz;
      const scale = Math.min(this.width / 3.30, this.height / 2.80) * this.zoom;
      return { x: this.width * 0.53 + xx * scale, y: this.height * 0.45 - yy * scale, depth };
    }

    line(a, b, color = '#e5e8ed', width = 1, dashed = false) {
      const c = this.ctx, p = this.project(...a), q = this.project(...b);
      c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(q.x, q.y);
      c.strokeStyle = color; c.lineWidth = width;
      c.setLineDash(dashed ? [3, 4] : []); c.stroke(); c.setLineDash([]);
    }

    label(str, p, color, dx = 0, dy = 0, align = 'center', size = 11) {
      const c = this.ctx;
      c.font = `500 ${size}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
      c.textAlign = align; c.textBaseline = 'middle';
      const tw = c.measureText(str).width;
      const left = align === 'right' ? tw + 7 : align === 'left' ? 7 : tw / 2 + 7;
      const right = align === 'left' ? this.width - tw - 7 : align === 'right' ? this.width - 7 : this.width - tw / 2 - 7;
      const x=Math.max(left,Math.min(right,p.x+dx)),y=Math.max(8,Math.min(this.height-8,p.y+dy));
      c.fillStyle = color; c.fillText(str,x,y);
      this.axisLabelBoxes?.push({x:x-(align==='right'?tw:align==='center'?tw/2:0)-3,y:y-size/2-3,w:tw+6,h:size+6});
    }

    hit(x, y) {
      return this.projected.filter(p => Math.hypot(p.x - x, p.y - y) < Math.max(7,(p.radius||5)+4))
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)
          || this.projected.indexOf(b) - this.projected.indexOf(a))[0] || null;
    }

    draw() {
      const c = this.ctx, w = this.width, h = this.height;
      if (!w || !h) return;
      c.clearRect(0, 0, w, h);
      this.axisLabelBoxes=[];
      const maxS = this.options.strengthMax || 5.4, maxH = this.options.hardwareMax || 3.4;
      const hardwarePosition = value => value === this.options.hardwareUnspecified ? 1.32 : value / maxH;
      const compact = w < 600;
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
      this.line([0, 0, 0], [1, 0, 0], '#c84e4a', 1.6);
      this.line([0, 0, 0], [0, 1, 0], '#526fa6', 1.6);
      this.line([0, 0, 0], [0, 0, 1], '#448779', 1.6);
      this.label('ASYMPTOTIC SPEEDUP', this.project(0.55, 0, 0), '#ad3333', 0, 62, 'center', 11);
      this.label('EVIDENCE', this.project(0, 1, 0), '#46689b', -12, -29, 'right', 11);
      this.label('HARDWARE', this.project(0, 0, 1), '#337c6c', -12, -51, 'right', 11);
      const evidenceTicks = this.options.evidenceTicks || [
        { value: 0, label: 'Unestablished' }, { value: 0.5, label: 'Partial' },
        { value: 0.75, label: 'Conditional' }, { value: 1, label: 'Proved' }
      ];
      evidenceTicks.forEach(t => {
        const p = this.project(0, t.value, 0);
        this.label(t.label || '', p, '#708098', -12, t.value === 0 ? -10 : 0, 'right', compact ? 9 : 11);
      });
      const strengthTicks = this.options.strengthTicks || [];
      strengthTicks.forEach((t, i) => {
        if (t.value < 0 || t.value > maxS) return;
        const p = this.project(t.value / maxS, 0, 0);
        c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x, p.y + 5); c.strokeStyle = '#c8908b'; c.lineWidth = 1; c.stroke();
        this.label(t.label || '', p, '#8b6c70', 0, compact ? 18 + (i % 2) * 18 : (t.label.length > 18 ? 41 : 22), 'center', compact ? 9 : 11);
      });
      const hardwareTicks = this.options.hardwareTicks || [
        { value: 0, label: 'Small demos' }, { value: 1, label: 'Fault-tolerant' },
        { value: 2, label: 'Coherent data' }, { value: 3, label: 'Specialized resources' }
      ];
      hardwareTicks.forEach(t => {
        if (t.value < 0 || t.value > maxH) return;
        const p = this.project(0, 0, t.value / maxH);
        this.label(t.label || '', p, '#6b8b82', -12, t.value === 0 ? 11 : 0, 'right', compact ? 9 : 11);
      });
      if(this.points.some(p=>p.hardware===this.options.hardwareUnspecified)){
        const z=hardwarePosition(this.options.hardwareUnspecified);
        this.line([-.025,0,z],[.025,0,z],'#8a9291',1.1);
        this.line([0,0,z],[1,0,z],'#d9dfdc',1,true);
        this.label('Unspecified',this.project(0,0,z),'#6b7773',-12,0,'right',compact?9:11);
      }
      this.projected = this.points.map(p => ({ ...p, ...this.project(p.strength / maxS, p.evidence, hardwarePosition(p.hardware)) }))
        .sort((a, b) => b.depth - a.depth
          || Number(a.slug === this.options.selectedSlug) - Number(b.slug === this.options.selectedSlug));
      const occupied = [...this.axisLabelBoxes];
      this.projected = spreadPoints(this.projected, (x,y,r) => x>=r+6 && x<=w-r-6 && y>=r+6 && y<=h-r-6);
      this.projected.forEach(p => {
        const selected = p.slug === this.options.selectedSlug || p.selected;
        const active = selected || p.slug === this.hovered?.slug;
        if (selected) {
          this.line([p.strength / maxS, p.evidence, hardwarePosition(p.hardware)], [p.strength / maxS, 0, hardwarePosition(p.hardware)], '#b7bdc7', 1, true);
        }
        if(Math.hypot(p.x-p.anchorX,p.y-p.anchorY)>3){c.beginPath();c.moveTo(p.anchorX,p.anchorY);c.lineTo(p.x,p.y);c.strokeStyle='#9caaa944';c.lineWidth=.6;c.stroke();}
        const radius = active ? Math.max(6.4,p.radius+1) : p.radius;
        c.beginPath(); c.arc(p.x, p.y, radius+1.7, 0, Math.PI * 2);
        c.fillStyle = '#fff'; c.fill();
        c.beginPath(); c.arc(p.x, p.y, radius, 0, Math.PI * 2);
        c.fillStyle = p.color || '#c83732'; c.fill(); c.lineWidth = 1.1; c.strokeStyle = '#9e3737'; c.stroke();
        if (active) {
          c.beginPath(); c.arc(p.x, p.y, radius+4, 0, Math.PI * 2); c.strokeStyle = '#27384c'; c.lineWidth = 1.3; c.stroke();
        }
      });
      const labelOrder = [...this.projected].filter(p=>p.importance!=='peripheral'||p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug).sort((a,b)=>Number(b.slug===this.options.selectedSlug)-Number(a.slug===this.options.selectedSlug)||importance(b)-importance(a));
      labelOrder.forEach(p => {
        const selected = p.slug === this.options.selectedSlug;
        const fullName = p.shortName || p.name;
        let name = fullName.length>44 ? fullName.slice(0,41)+'…' : fullName;
        const fontSize = p.importance==='high' ? 13 : 11;
        c.font = `${selected || p.importance==='high' ? 600 : 500} ${fontSize}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
        while(c.measureText(name).width>w-24&&name.length>10)name=name.slice(0,-2)+'…';
        const tw = c.measureText(name).width;
        let shown=false;
        const offsets = [[12,-18],[12,12],[-tw-12,-18],[-tw-12,14],[12,-34],[-tw/2,24],[12,-52],[-tw-12,-52],[12,44],[-tw-12,44]];
        for (const [dx, dy] of offsets) {
          const box = { x: p.x + dx - 3, y: p.y + dy - 8, w: tw + 6, h: fontSize+6 };
          if (box.x < 7 || box.y < 7 || box.x + box.w > w - 7 || box.y + box.h > h - 7) continue;
          if (occupied.some(q => box.x < q.x + q.w && box.x + box.w > q.x && box.y < q.y + q.h && box.y + box.h > q.y)) continue;
          occupied.push(box);
          c.fillStyle = 'rgba(255,255,255,0.88)'; c.fillRect(box.x, box.y, box.w, box.h);
          c.fillStyle = selected || p.importance==='high' ? '#17242a' : '#3f4b51'; c.textAlign = 'left'; c.textBaseline = 'middle'; c.fillText(name, p.x + dx, p.y + dy);
          shown=true;
          break;
        }
        if(!shown&&(selected||p.slug===this.hovered?.slug)){
          const x=Math.max(10,Math.min(w-tw-10,p.x-tw/2)),y=Math.max(16,Math.min(h-16,p.y-24));
          c.fillStyle='#fff';c.fillRect(x-3,y-10,tw+6,20);c.fillStyle='#17242a';c.textAlign='left';c.textBaseline='middle';c.fillText(name,x,y);
        }
      });
    }
  }
  window.SpeedupScene = SpeedupScene;
})();
