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
      return this.projected.filter(p => Math.hypot(p.x - x, p.y - y) < 13)
        .sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)
          || this.projected.indexOf(b) - this.projected.indexOf(a))[0] || null;
    }

    draw() {
      const c = this.ctx, width = this.width, height = this.height;
      if (!width || !height) return;
      c.clearRect(0, 0, width, height);
      const compact = width < 480, maximum = this.viewMax || this.options.costMax || 4.25;
      const L = 16, T = 78, W = Math.max(120, width - L - (compact ? 92 : 125)), H = Math.max(120, height - T - 28);
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
      this.projected = this.points.filter(p => p.costC >= p.costQ && p.costQ >= 0 && p.costC <= maximum)
        .map(p => ({ ...p, x: mapX(p.costQ), y: mapY(p.costC) }))
        .sort((a, b) => Number(a.slug === this.options.selectedSlug) - Number(b.slug === this.options.selectedSlug));
      this.projected.forEach(p => {
        const active = p.slug === this.options.selectedSlug || p.slug === this.hovered?.slug;
        c.beginPath(); c.arc(p.x, p.y, active ? 8.5 : 6.6, 0, Math.PI * 2); c.fillStyle = '#fff'; c.fill();
        c.beginPath(); c.arc(p.x, p.y, active ? 5.8 : 4.7, 0, Math.PI * 2); c.fillStyle = p.color || '#b93636'; c.fill();
        c.lineWidth = 1.1; c.strokeStyle = '#8e3535'; c.stroke();
        if (active) { c.beginPath(); c.arc(p.x, p.y, 10.3, 0, Math.PI * 2); c.strokeStyle = '#243248'; c.lineWidth = 1.3; c.stroke(); }
      });
      const names = [...this.projected].sort((a, b) => Number(b.slug === this.options.selectedSlug) - Number(a.slug === this.options.selectedSlug) || b.strength - a.strength).slice(0, 3);
      const occupied = [];
      names.forEach(p => {
        const name = p.shortName || p.name;
        c.font = `500 ${compact ? 10 : 11}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
        const tw = c.measureText(name).width;
        for (const [dx, dy] of [[12, -16], [-tw - 12, -16], [12, 16], [-tw / 2, -29], [-tw - 12, 16]]) {
          const box = { x: p.x + dx - 4, y: p.y + dy - 9, w: tw + 8, h: 18 };
          if (box.x < L + 2 || box.x + box.w > L + W - 2 || box.y < T + 2 || box.y + box.h > T + H - 2) continue;
          if ((box.x - L) / W < (box.y + box.h - T) / H) continue;
          if (occupied.some(q => box.x < q.x + q.w && box.x + box.w > q.x && box.y < q.y + q.h && box.y + box.h > q.y)) continue;
          occupied.push(box);
          c.fillStyle = 'rgba(255,255,255,0.91)'; c.fillRect(box.x, box.y, box.w, box.h);
          c.fillStyle = '#354153'; c.textAlign = 'left'; c.textBaseline = 'middle'; c.fillText(name, p.x + dx, p.y + dy);
          break;
        }
      });
      c.save();
      c.translate(L + W * 0.47 + 10, T + H * 0.47 - 14); c.rotate(Math.atan2(H, W));
      c.font = 'italic 11px Georgia,serif'; c.textAlign = 'center'; c.textBaseline = 'bottom'; c.fillStyle = '#7b6870'; c.fillText('TQ = TC', 0, 0);
      c.restore();
      c.restore();
      triangle(); c.strokeStyle = '#d4c4c7'; c.lineWidth = 1; c.stroke();
      c.beginPath(); c.moveTo(L, T); c.lineTo(L + W, T); c.lineTo(L + W, T + H); c.strokeStyle = '#9d7a7d'; c.lineWidth = 1.2; c.stroke();
      c.font = `500 ${compact ? 9 : 10}px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`;
      const topLabels = [];
      ticks.forEach((t, i) => {
        if (t.value < 0 || t.value > maximum) return;
        const x = mapX(t.value), y = mapY(t.value), label = String(t.label || '');
        c.beginPath(); c.moveTo(x, T); c.lineTo(x, T - 5); c.moveTo(L + W, y); c.lineTo(L + W + 5, y);
        c.strokeStyle = '#bba6aa'; c.stroke();
        const tw = c.measureText(label).width;
        const labelX = Math.max(tw / 2 + 3, Math.min(width - tw / 2 - 3, x));
        let labelY = T - 15;
        if (topLabels.some(q => Math.abs(labelX - q.x) < (tw + q.w) / 2 + 5)) labelY -= 16;
        topLabels.push({ x: labelX, w: tw });
        c.fillStyle = '#74676f'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(label, labelX, labelY);
        c.textAlign = 'left'; c.fillText(label, L + W + 10, y);
      });
      c.font = '600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
      c.fillStyle = '#695463'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('QUANTUM COMPLEXITY', L + W / 2, 22);
      c.save(); c.translate(width - 13, T + H / 2); c.rotate(Math.PI / 2); c.fillText('CLASSICAL COMPLEXITY', 0, 0); c.restore();
    }
  }
  window.CostScene = CostScene;
})();
