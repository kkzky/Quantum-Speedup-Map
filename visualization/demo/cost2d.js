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

    background(width, height, maximum) {
      const fn = this.options.colorRGBForGap || this.options.colorForGap;
      const key = `${Math.ceil(width)}:${Math.ceil(height)}:${maximum}`;
      if (this.gradientKey === key && this.gradientFunction === fn) return this.gradient;
      const image = document.createElement('canvas');
      image.width = Math.ceil(width); image.height = Math.ceil(height);
      const ctx = image.getContext('2d'), pixels = ctx.createImageData(image.width, image.height);
      const palette = Array.from({ length: 513 }, (_, i) => this.rgb(fn ? fn(i / 512 * maximum) : [255, 255 * (1 - i / 512), 255 * (1 - i / 512)]));
      for (let y = 0; y < image.height; y++) {
        for (let x = 0; x < image.width; x++) {
          const gap = x / image.width - y / image.height;
          if (gap < 0) continue;
          const rgb = palette[Math.min(512, Math.round(gap * 512))];
          const offset = (y * image.width + x) * 4;
          pixels.data[offset] = rgb[0]; pixels.data[offset + 1] = rgb[1]; pixels.data[offset + 2] = rgb[2]; pixels.data[offset + 3] = 255;
        }
      }
      ctx.putImageData(pixels, 0, 0);
      this.gradientKey = key; this.gradientFunction = fn; this.gradient = image;
      return image;
    }

    hit(x, y) {
      return this.projected.filter(p => Math.hypot(p.x - x, p.y - y) < Math.max(7,(p.radius||5)+4))
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)
          || this.projected.indexOf(b) - this.projected.indexOf(a))[0] || null;
    }

    draw() {
      const c = this.ctx, width = this.width, height = this.height;
      if (!width || !height) return;
      c.clearRect(0, 0, width, height);
      const compact = width < 480, maximum = this.viewMax || this.options.costMax || 4.25;
      const L = compact ? 74 : 82, T = 20;
      const unspecified = this.points.filter(p=>!Number.isFinite(p.costQ)||!Number.isFinite(p.costC));
      const stripColumns = Math.max(6,Math.floor((width-48)/18));
      const stripHeight = unspecified.length ? 61+Math.ceil(unspecified.length/stripColumns)*18 : 0;
      const W = Math.max(120, width - L - 14), H = Math.max(120, height - T - 74 - stripHeight);
      const mapX = value => L + W * (1 - value / maximum);
      const mapY = value => T + H * (1 - value / maximum);
      const triangle = () => {
        c.beginPath(); c.moveTo(L, T); c.lineTo(L + W, T); c.lineTo(L + W, T + H); c.closePath();
      };
      const ticks = this.options.costTicks || [];
      c.save(); triangle(); c.clip();
      c.drawImage(this.background(W, H, maximum), L, T, W, H);
      ticks.forEach(t => {
        if (t.value < 0 || t.value > maximum) return;
        const x = mapX(t.value), y = mapY(t.value);
        c.beginPath(); c.moveTo(x, T); c.lineTo(x, T + H); c.moveTo(L, y); c.lineTo(L + W, y);
        c.strokeStyle = 'rgba(255,255,255,0.48)'; c.lineWidth = 1; c.stroke();
      });
      this.projected = this.points.filter(p => Number.isFinite(p.costQ) && Number.isFinite(p.costC) && p.costC >= p.costQ && p.costQ >= 0 && p.costC <= maximum)
        .map(p => ({ ...p, x: mapX(p.costQ), y: mapY(p.costC) }))
        .sort((a, b) => Number(a.slug === this.options.selectedSlug) - Number(b.slug === this.options.selectedSlug));
      this.projected = window.quantumPointLayout.spreadPoints(this.projected, (x,y,r) => x>=L+r && x<=L+W-r && y>=T+r && y<=T+H-r && (x-L)/W>=(y-T)/H);
      this.projected.forEach(p => {
        const active = p.slug === this.options.selectedSlug || p.slug === this.hovered?.slug;
        if(Math.hypot(p.x-p.anchorX,p.y-p.anchorY)>3){c.beginPath();c.moveTo(p.anchorX,p.anchorY);c.lineTo(p.x,p.y);c.strokeStyle='#9c777744';c.lineWidth=.6;c.stroke();}
        const radius = active ? Math.max(6.4,p.radius+1) : p.radius;
        c.beginPath(); c.arc(p.x, p.y, radius+1.7, 0, Math.PI * 2); c.fillStyle = '#fff'; c.fill();
        c.beginPath(); c.arc(p.x, p.y, radius, 0, Math.PI * 2); c.fillStyle = p.color || '#b93636'; c.fill();
        c.lineWidth = 1.1; c.strokeStyle = '#8e3535'; c.stroke();
        if (active) { c.beginPath(); c.arc(p.x, p.y, radius+4, 0, Math.PI * 2); c.strokeStyle = '#243248'; c.lineWidth = 1.3; c.stroke(); }
      });
      c.restore();
      const names = [...this.projected].filter(p=>p.importance!=='peripheral'||p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug).sort((a,b)=>Number(b.slug===this.options.selectedSlug)-Number(a.slug===this.options.selectedSlug)||window.quantumPointLayout.importance(b)-window.quantumPointLayout.importance(a));
      const occupied = [];
      names.forEach(p => {
        const fullName=p.shortName||p.name;
        let name=fullName.length>44?fullName.slice(0,41)+'…':fullName;
        const fontSize=p.importance==='high'?(compact?12:13):(compact?10:11);
        c.font = `${p.importance==='high'||p.selected?600:500} ${fontSize}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
        while(c.measureText(name).width>W-18&&name.length>10)name=name.slice(0,-2)+'…';
        const tw = c.measureText(name).width;
        let shown=false;
        for (const [dx, dy] of [[12,-16],[-tw-12,-16],[12,16],[-tw/2,-29],[-tw-12,16],[12,-45],[-tw-12,-45],[12,40],[-tw-12,40]]) {
          const box = { x: p.x + dx - 4, y: p.y + dy - 9, w: tw + 8, h: fontSize+7 };
          if (box.x < L + 2 || box.x + box.w > L + W - 2 || box.y < T + 2 || box.y + box.h > T + H - 2) continue;
          if (occupied.some(q => box.x < q.x + q.w && box.x + box.w > q.x && box.y < q.y + q.h && box.y + box.h > q.y)) continue;
          occupied.push(box);
          c.beginPath();c.moveTo(p.x,p.y);c.lineTo(Math.max(box.x,Math.min(box.x+box.w,p.x)),box.y+box.h/2);c.strokeStyle='#687d7855';c.lineWidth=.7;c.stroke();
          c.fillStyle = 'rgba(255,255,255,0.91)'; c.fillRect(box.x, box.y, box.w, box.h);
          c.fillStyle = p.importance==='high'||p.selected?'#17242a':'#3f4b51'; c.textAlign = 'left'; c.textBaseline = 'middle'; c.fillText(name, p.x + dx, p.y + dy);
          shown=true;
          break;
        }
        if(!shown&&(p.selected||p.slug===this.hovered?.slug)){
          const x=Math.max(L+6,Math.min(L+W-tw-6,p.x-tw/2)),y=Math.max(T+14,Math.min(T+H-14,p.y-24));
          c.fillStyle='#fff';c.fillRect(x-4,y-10,tw+8,20);c.fillStyle='#17242a';c.textAlign='left';c.textBaseline='middle';c.fillText(name,x,y);
        }
      });
      c.save();
      c.translate(L + W * 0.47 + 10, T + H * 0.47 - 14); c.rotate(Math.atan2(H, W));
      c.font = 'italic 11px Georgia,serif'; c.textAlign = 'center'; c.textBaseline = 'bottom'; c.fillStyle = '#7b6870'; c.fillText('TQ = TC', 0, 0);
      c.restore();
      triangle(); c.strokeStyle = '#d4c4c7'; c.lineWidth = 1; c.stroke();
      c.beginPath(); c.moveTo(L, T); c.lineTo(L, T + H); c.lineTo(L + W, T + H); c.strokeStyle = '#9d7a7d'; c.lineWidth = 1.2; c.stroke();
      c.font = `500 ${compact ? 9 : 10}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
      const bottomLabels = [];
      ticks.forEach((t, i) => {
        if (t.value < 0 || t.value > maximum) return;
        const x = mapX(t.value), y = mapY(t.value), label = String(t.label || '');
        c.beginPath(); c.moveTo(x, T + H); c.lineTo(x, T + H + 5); c.moveTo(L, y); c.lineTo(L - 5, y);
        c.strokeStyle = '#bba6aa'; c.stroke();
        const tw = c.measureText(label).width;
        const labelX = Math.max(tw / 2 + 3, Math.min(width - tw / 2 - 3, x));
        let labelY = T + H + 18;
        if (bottomLabels.some(q => Math.abs(labelX - q.x) < (tw + q.w) / 2 + 5)) labelY += 14;
        bottomLabels.push({ x: labelX, w: tw });
        c.fillStyle = '#74676f'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(label, labelX, labelY);
        c.textAlign = 'right'; c.fillText(label, L - 9, y);
      });
      c.font = '600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
      c.fillStyle = '#695463'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('QUANTUM COMPLEXITY', L + W / 2, T + H + 43);
      c.save(); c.translate(15, T + H / 2); c.rotate(-Math.PI / 2); c.fillText('CLASSICAL COMPLEXITY', 0, 0); c.restore();
      if(unspecified.length){
        const stripTop=T+H+67;
        c.fillStyle='#f7f9f8';c.fillRect(13,stripTop,width-26,stripHeight-5);
        c.strokeStyle='#e0e7e3';c.lineWidth=1;c.beginPath();c.moveTo(13,stripTop);c.lineTo(width-13,stripTop);c.stroke();
        c.font='500 10px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
        c.textAlign='left';c.textBaseline='middle';c.fillStyle='#65746f';c.fillText('Unspecified complexity',23,stripTop+14);
        const spacing=(width-48)/stripColumns;
        const stripPoints=[...unspecified].sort((a,b)=>window.quantumPointLayout.importance(b)-window.quantumPointLayout.importance(a)).map((p,i)=>({...p,x:24+(i%stripColumns+.5)*spacing,y:stripTop+36+Math.floor(i/stripColumns)*18,radius:window.quantumPointLayout.pointRadius(p)}));
        stripPoints.forEach(p=>{
          const active=p.slug===this.options.selectedSlug||p.slug===this.hovered?.slug;
          const radius=active?Math.max(6.4,p.radius+1):p.radius;
          c.beginPath();c.arc(p.x,p.y,radius,0,Math.PI*2);c.fillStyle=p.color||'#fff';c.fill();c.strokeStyle='#8e3535';c.lineWidth=1;c.stroke();
          if(active){c.beginPath();c.arc(p.x,p.y,radius+3,0,Math.PI*2);c.strokeStyle='#243248';c.lineWidth=1.3;c.stroke();}
        });
        const focused=stripPoints.find(p=>p.slug===this.hovered?.slug)||stripPoints.find(p=>p.slug===this.options.selectedSlug);
        if(focused){c.font='600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';c.fillStyle='#17242a';const text=focused.shortName||focused.name;c.fillText(text,23,stripTop+stripHeight-14,width-46);}
        this.projected.push(...stripPoints);
      }
    }
  }
  window.CostScene = CostScene;
})();
