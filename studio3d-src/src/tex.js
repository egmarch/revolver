import * as THREE from 'three';

export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function cv(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

let MAX_ANISO = 4;
export function setAniso(n) { MAX_ANISO = n; }

export function toTex(c, opt = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = opt.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = MAX_ANISO;
  if (opt.repeat) {
    t.wrapS = t.wrapT = opt.mirror ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping;
    t.repeat.set(opt.repeat[0], opt.repeat[1]);
  }
  return t;
}

export function imgTex(src, opt = {}) {
  const t = new THREE.Texture();
  const img = new Image();
  img.onload = () => { t.image = img; t.needsUpdate = true; };
  img.src = src;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = MAX_ANISO;
  if (opt.repeat) {
    t.wrapS = t.wrapT = opt.mirror ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping;
    t.repeat.set(opt.repeat[0], opt.repeat[1]);
  }
  return t;
}

function noise(ctx, w, h, amount, r, alpha = 1) {
  const d = ctx.getImageData(0, 0, w, h);
  const p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    const n = (r() - 0.5) * amount;
    p[i] += n; p[i + 1] += n; p[i + 2] += n;
  }
  ctx.putImageData(d, 0, 0);
}
export { noise };

export function brickCanvas(seed = 1, base = [62, 58, 56], light = false) {
  const c = cv(512, 512), x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#1b1a19'; x.fillRect(0, 0, 512, 512);
  const bw = 64, bh = 32;
  for (let row = 0; row < 16; row++) {
    const off = (row % 2) * (bw / 2);
    for (let i = -1; i < 9; i++) {
      const v = (r() - 0.5) * 26;
      const k = light ? 1.5 : 1;
      x.fillStyle = `rgb(${(base[0] + v) * k},${(base[1] + v) * k},${(base[2] + v * 0.9) * k})`;
      x.fillRect(i * bw + off + 2, row * bh + 2, bw - 4, bh - 4);
      // грани
      x.fillStyle = 'rgba(255,255,255,.07)';
      x.fillRect(i * bw + off + 2, row * bh + 2, bw - 4, 3);
      x.fillStyle = 'rgba(0,0,0,.22)';
      x.fillRect(i * bw + off + 2, row * bh + bh - 6, bw - 4, 4);
    }
  }
  noise(x, 512, 512, 22, r);
  return c;
}

export function paveCanvas(seed = 2) {
  const c = cv(512, 512), x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#2a241f'; x.fillRect(0, 0, 512, 512);
  const n = 8, s = 512 / n;
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const v = (r() - 0.5) * 30;
    x.fillStyle = `rgb(${96 + v},${84 + v},${72 + v})`;
    x.beginPath();
    x.roundRect(i * s + 3, j * s + 3, s - 6, s - 6, 8);
    x.fill();
    x.fillStyle = 'rgba(255,255,255,.07)';
    x.fillRect(i * s + 8, j * s + 6, s - 18, 3);
  }
  noise(x, 512, 512, 18, r);
  return c;
}

export function asphaltCanvas(seed = 3) {
  const c = cv(512, 512), x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#1a1c22'; x.fillRect(0, 0, 512, 512);
  noise(x, 512, 512, 30, r);
  for (let i = 0; i < 60; i++) {
    x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 1;
    x.beginPath(); x.moveTo(r() * 512, r() * 512); x.lineTo(r() * 512, r() * 512); x.stroke();
  }
  return c;
}

export function concreteCanvas(seed = 4, base = 70) {
  const c = cv(256, 256), x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = `rgb(${base},${base},${base + 4})`; x.fillRect(0, 0, 256, 256);
  noise(x, 256, 256, 26, r);
  for (let i = 0; i < 12; i++) {
    x.fillStyle = `rgba(0,0,0,${0.05 + r() * 0.08})`;
    x.beginPath(); x.ellipse(r() * 256, r() * 256, 10 + r() * 40, 8 + r() * 24, r() * 3, 0, 7); x.fill();
  }
  return c;
}

export function curtainCanvas() {
  const c = cv(256, 256), x = c.getContext('2d'), r = rng(9);
  for (let i = 0; i < 32; i++) {
    const g = x.createLinearGradient(i * 8, 0, i * 8 + 8, 0);
    g.addColorStop(0, '#050506'); g.addColorStop(0.5, '#1c1c20'); g.addColorStop(1, '#050506');
    x.fillStyle = g; x.fillRect(i * 8, 0, 8, 256);
  }
  noise(x, 256, 256, 8, r);
  return c;
}

export function carpetBlueCanvas(seed = 5) {
  const c = cv(256, 256), x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#0d1f45'; x.fillRect(0, 0, 256, 256);
  noise(x, 256, 256, 48, r);
  for (let i = 0; i < 1800; i++) {
    x.fillStyle = r() < 0.5 ? 'rgba(40,80,160,.25)' : 'rgba(0,0,10,.3)';
    x.fillRect(r() * 256, r() * 256, 2, 2);
  }
  return c;
}

export function woodFloorCanvas() {
  const c = cv(256, 256), x = c.getContext('2d'), r = rng(12);
  for (let i = 0; i < 8; i++) {
    const v = (r() - 0.5) * 18;
    x.fillStyle = `rgb(${72 + v},${58 + v},${56 + v})`; x.fillRect(0, i * 32, 256, 31);
    x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(0, i * 32 + 31, 256, 1);
  }
  noise(x, 256, 256, 14, r);
  return c;
}

export function foamCanvas() {
  const c = cv(256, 256), x = c.getContext('2d');
  x.fillStyle = '#14141a'; x.fillRect(0, 0, 256, 256);
  const n = 8, s = 256 / n;
  for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
    const g = x.createLinearGradient(i * s, j * s, i * s + s, j * s + s);
    g.addColorStop(0, '#3a3a44'); g.addColorStop(0.5, '#15151a'); g.addColorStop(1, '#050507');
    x.fillStyle = g;
    x.beginPath(); x.moveTo(i * s, j * s + s); x.lineTo(i * s + s / 2, j * s); x.lineTo(i * s + s, j * s + s); x.fill();
    x.fillStyle = 'rgba(255,255,255,.07)';
    x.beginPath(); x.moveTo(i * s + s / 2, j * s); x.lineTo(i * s + s, j * s + s); x.lineTo(i * s + s / 2, j * s + s); x.fill();
  }
  return c;
}

export function newsprintCanvas(seed = 21) {
  const c = cv(512, 512), x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#d8d3c6'; x.fillRect(0, 0, 512, 512);
  const heads = ['СВОДКА ДНЯ', 'ВЕЧЕРНИЙ ВЫПУСК', 'КРОССВОРД', 'СЛУШАЛИ — ПОСТАНОВИЛИ', 'ГОРОДСКИЕ НОВОСТИ', 'ПОГОДА НА НЕДЕЛЮ', 'КУЛЬТУРА', 'СПОРТ', 'ОБЪЯВЛЕНИЯ'];
  const sheets = [[0, 0], [256, 0], [0, 256], [256, 256]];
  sheets.forEach(([sx, sy], si) => {
    x.save();
    x.beginPath(); x.rect(sx, sy, 256, 256); x.clip();
    x.translate(sx + 128, sy + 128); x.rotate((r() - 0.5) * 0.12); x.translate(-128, -128);
    x.fillStyle = `rgb(${205 + r() * 30},${200 + r() * 28},${186 + r() * 28})`;
    x.fillRect(-20, -20, 296, 296);
    x.fillStyle = '#1b1b1b';
    x.font = '900 24px Georgia, serif';
    x.fillText(heads[(si * 2 + (r() * 5 | 0)) % heads.length], 8, 28);
    x.fillRect(8, 36, 240, 2);
    for (let col = 0; col < 3; col++) {
      for (let l = 0; l < 20; l++) {
        const w = 60 + r() * 18;
        x.fillStyle = `rgba(30,30,30,${0.45 + r() * 0.25})`;
        x.fillRect(10 + col * 80, 130 + l * 6, w, 2);
      }
    }
    // фото
    x.fillStyle = '#6a6760'; x.fillRect(10 + r() * 100, 46, 90, 70);
    x.fillStyle = '#35332f'; x.fillRect(110 + r() * 40, 50, 70, 60);
    // заголовок крупно
    x.fillStyle = '#111';
    x.font = '800 14px Georgia, serif';
    x.fillText('ГРАНД. ВЫХОДНЫЕ.', 10, 124);
    if (r() < 0.6) { // кроссворд
      for (let a = 0; a < 7; a++) for (let b = 0; b < 7; b++) {
        x.strokeStyle = '#222'; x.lineWidth = 0.7;
        x.strokeRect(180 + a * 10, 150 + b * 10, 10, 10);
        if (r() < 0.25) { x.fillStyle = '#111'; x.fillRect(180 + a * 10, 150 + b * 10, 10, 10); }
      }
    }
    x.restore();
  });
  noise(x, 512, 512, 18, r);
  return c;
}

export function windowsCanvas(seed = 30, cols = 10, rows = 14) {
  const c = cv(256, 512), x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#0c0e14'; x.fillRect(0, 0, 256, 512);
  const w = 256 / cols, h = 512 / rows;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const on = r() < 0.42;
    if (on) {
      const warm = r() < 0.65;
      x.fillStyle = warm ? `rgba(255,${190 + r() * 40 | 0},${110 + r() * 40 | 0},${0.55 + r() * 0.4})` : `rgba(180,215,255,${0.5 + r() * 0.4})`;
    } else x.fillStyle = 'rgba(30,36,52,.9)';
    x.fillRect(i * w + 3, j * h + 4, w - 6, h - 8);
  }
  return c;
}

export function glowCanvas() {
  const c = cv(128, 128), x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return c;
}

export function softboxCanvas() {
  const c = cv(256, 256), x = c.getContext('2d');
  x.fillStyle = '#e9edf5'; x.fillRect(0, 0, 256, 256);
  x.strokeStyle = 'rgba(70,75,90,.75)'; x.lineWidth = 3;
  const n = 14, s = 256 / n;
  for (let i = 0; i <= n; i++) {
    x.beginPath(); x.moveTo(i * s, 0); x.lineTo(i * s, 256); x.stroke();
    x.beginPath(); x.moveTo(0, i * s); x.lineTo(256, i * s); x.stroke();
  }
  const g = x.createRadialGradient(128, 128, 30, 128, 128, 180);
  g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(60,70,100,.5)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  return c;
}

export function plaidCanvas() {
  const c = cv(128, 128), x = c.getContext('2d');
  x.fillStyle = '#7a2a22'; x.fillRect(0, 0, 128, 128);
  x.fillStyle = 'rgba(230,200,150,.55)';
  for (let i = 0; i < 128; i += 16) { x.fillRect(i, 0, 5, 128); x.fillRect(0, i, 128, 5); }
  x.fillStyle = 'rgba(0,0,0,.25)';
  for (let i = 8; i < 128; i += 32) { x.fillRect(i, 0, 8, 128); }
  return c;
}

export function ballCanvas() {
  const c = cv(256, 128), x = c.getContext('2d');
  x.fillStyle = '#c9561d'; x.fillRect(0, 0, 256, 128);
  x.strokeStyle = '#1b0f08'; x.lineWidth = 4;
  for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, 128); x.stroke(); }
  x.beginPath(); x.moveTo(0, 64); x.lineTo(256, 64); x.stroke();
  x.beginPath(); x.moveTo(0, 32); x.quadraticCurveTo(128, 8, 256, 32); x.stroke();
  x.beginPath(); x.moveTo(0, 96); x.quadraticCurveTo(128, 120, 256, 96); x.stroke();
  return c;
}

export function dollarCanvas() {
  const c = cv(128, 128), x = c.getContext('2d'), r = rng(3);
  x.fillStyle = '#6f8f5c'; x.fillRect(0, 0, 128, 128);
  for (let j = 0; j < 8; j++) for (let i = 0; i < 4; i++) {
    x.fillStyle = `rgb(${90 + r() * 40},${130 + r() * 40},${90 + r() * 30})`;
    x.fillRect(i * 32 + 2, j * 16 + 2, 28, 12);
    x.fillStyle = 'rgba(0,0,0,.25)'; x.fillRect(i * 32 + 8, j * 16 + 5, 16, 6);
  }
  return c;
}

// «ДАW» на мониторе
export function dawCanvas() {
  const c = cv(512, 256), x = c.getContext('2d'), r = rng(8);
  x.fillStyle = '#10131a'; x.fillRect(0, 0, 512, 256);
  x.fillStyle = '#1b2230'; x.fillRect(0, 0, 512, 20);
  x.fillStyle = '#6a3fd0'; x.fillRect(60, 28, 380, 16);
  for (let t = 0; t < 6; t++) {
    x.fillStyle = '#181d28'; x.fillRect(0, 50 + t * 30, 512, 28);
    for (let k = 0; k < 4; k++) {
      x.fillStyle = r() < 0.5 ? '#9be23a' : '#4dc3ff';
      const w = 30 + r() * 90;
      x.fillRect(70 + r() * 340, 54 + t * 30, w, 20);
    }
  }
  x.fillStyle = '#242c3d'; x.fillRect(0, 236, 512, 20);
  for (let i = 0; i < 40; i++) { x.fillStyle = '#6cf'; x.fillRect(10 + i * 12, 240, 6, 10); }
  return c;
}

export function woodGrainCanvas() {
  const c = cv(256, 256), x = c.getContext('2d'), r = rng(15);
  x.fillStyle = '#6a4a30'; x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 90; i++) {
    x.strokeStyle = `rgba(${30 + r() * 40},${20 + r() * 20},10,${0.15 + r() * 0.25})`;
    x.lineWidth = 1 + r() * 2;
    x.beginPath(); x.moveTo(0, r() * 256); x.bezierCurveTo(80, r() * 256, 170, r() * 256, 256, r() * 256); x.stroke();
  }
  return c;
}

export function leatherCanvas() {
  const c = cv(128, 128), x = c.getContext('2d'), r = rng(31);
  x.fillStyle = '#e4dcc4'; x.fillRect(0, 0, 128, 128);
  noise(x, 128, 128, 14, r);
  return c;
}

export function carpetCanvas() {
  const c = cv(512, 512), x = c.getContext('2d'), r = rng(44);
  x.fillStyle = '#8c0f17'; x.fillRect(0, 0, 512, 512);
  const cell = 128;
  const dia = (cx, cy, R) => { x.beginPath(); x.moveTo(cx, cy - R); x.lineTo(cx + R, cy); x.lineTo(cx, cy + R); x.lineTo(cx - R, cy); x.closePath(); };
  // решётка тонких линий
  x.strokeStyle = 'rgba(40,0,6,.55)'; x.lineWidth = 2;
  for (let i = -4; i <= 8; i++) {
    x.beginPath(); x.moveTo(i * cell, 0); x.lineTo(i * cell + 512, 512); x.stroke();
    x.beginPath(); x.moveTo(i * cell + 512, 0); x.lineTo(i * cell, 512); x.stroke();
  }
  for (let j = 0; j <= 4; j++) for (let i = 0; i <= 4; i++) {
    const cx = i * cell + 64 - 64, cy = j * cell + 64 - 64; // центры в узлах решётки
    dia(cx, cy, 58); x.fillStyle = '#b3141f'; x.fill(); x.lineWidth = 4; x.strokeStyle = '#ecdcb2'; x.stroke();
    dia(cx, cy, 40); x.fillStyle = '#5c060e'; x.fill(); x.lineWidth = 2; x.strokeStyle = '#d9c28c'; x.stroke();
    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI / 4;
      x.beginPath(); x.ellipse(cx + Math.cos(a) * 17, cy + Math.sin(a) * 17, 9, 5, a, 0, 7);
      x.fillStyle = k % 2 ? '#ecdcb2' : '#d9a85a'; x.fill();
    }
    x.beginPath(); x.arc(cx, cy, 7, 0, 7); x.fillStyle = '#8c0f17'; x.fill(); x.lineWidth = 2; x.strokeStyle = '#ecdcb2'; x.stroke();
    // малые ромбы в центрах ячеек
    const mx = cx + 64, my = cy + 64;
    dia(mx, my, 20); x.fillStyle = '#ecdcb2'; x.fill();
    dia(mx, my, 11); x.fillStyle = '#8c0f17'; x.fill();
    x.beginPath(); x.arc(mx, my, 4, 0, 7); x.fillStyle = '#d9a85a'; x.fill();
    // точки по бокам
    [[cx + 64, cy], [cx, cy + 64]].forEach(([px, py]) => { x.beginPath(); x.arc(px, py, 5, 0, 7); x.fillStyle = '#ecdcb2'; x.fill(); });
  }
  noise(x, 512, 512, 10, r);
  return c;
}
