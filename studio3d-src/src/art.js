import { cv, rng, noise } from './tex.js';

export const FONT_SPRAY = '"Rubik Spray Paint", Impact, "Arial Black", sans-serif';
export const FONT_HEAD = 'Unbounded, Impact, "Arial Black", sans-serif';
export const FONT_SCRIPT = '"Marck Script", "Segoe Script", cursive';

export async function loadFonts() {
  const defs = [
    ['Rubik Spray Paint', '../assets/fonts/spray-latin.woff2', 'U+0000-00FF'],
    ['Rubik Spray Paint', '../assets/fonts/spray-cyrillic.woff2', 'U+0400-04FF'],
    ['Marck Script', '../assets/fonts/marck-script.ttf', null]
  ];
  const jobs = defs.map(async ([n, u, range]) => {
    try {
      const f = new FontFace(n, `url(${u})`, range ? { unicodeRange: range } : {});
      await f.load();
      document.fonts.add(f);
    } catch (e) { /* системный шрифт */ }
  });
  const withTimeout = Promise.race([Promise.all(jobs), new Promise(r => setTimeout(r, 2500))]);
  try { await withTimeout; } catch (e) { }
  try { await Promise.race([document.fonts.load('700 40px Unbounded', 'REVOLVER Фрунзе'), new Promise(r => setTimeout(r, 1500))]); } catch (e) { }
}

function outline(x, w = 10) {
  x.lineWidth = w; x.lineJoin = 'round'; x.lineCap = 'round'; x.strokeStyle = '#0a0a0a';
  x.stroke();
}

function hatch(x, bx, by, bw, bh, step, ang, alpha = 0.35, lw = 3) {
  x.save(); x.clip();
  x.strokeStyle = `rgba(0,0,0,${alpha})`; x.lineWidth = lw;
  x.translate(bx + bw / 2, by + bh / 2); x.rotate(ang);
  const d = Math.max(bw, bh) * 1.2;
  for (let i = -d; i < d; i += step) { x.beginPath(); x.moveTo(i, -d); x.lineTo(i, d); x.stroke(); }
  x.restore();
}

function vinyl(x, cx, cy, R, label = '#d32a22') {
  x.beginPath(); x.arc(cx, cy, R, 0, 7); x.fillStyle = '#151515'; x.fill(); outline(x, 8);
  x.strokeStyle = 'rgba(255,255,255,.18)'; x.lineWidth = 2;
  for (let k = 0.45; k < 0.97; k += 0.07) { x.beginPath(); x.arc(cx, cy, R * k, 0, 7); x.stroke(); }
  x.beginPath(); x.moveTo(cx - R * 0.8, cy - R * 0.2); x.quadraticCurveTo(cx, cy - R, cx + R * 0.3, cy - R * 0.85);
  x.strokeStyle = 'rgba(255,255,255,.25)'; x.lineWidth = 4; x.stroke();
  x.beginPath(); x.arc(cx, cy, R * 0.28, 0, 7); x.fillStyle = label; x.fill();
  x.lineWidth = 4; x.strokeStyle = '#0a0a0a'; x.stroke();
  x.beginPath(); x.arc(cx, cy, R * 0.05, 0, 7); x.fillStyle = '#0a0a0a'; x.fill();
}

function speaker(x, px, py, w, h) {
  x.beginPath(); x.roundRect(px, py, w, h, 10);
  const g = x.createLinearGradient(px, py, px + w, py + h);
  g.addColorStop(0, '#d9d9d9'); g.addColorStop(1, '#6e6e6e'); x.fillStyle = g; x.fill(); outline(x, 8);
  [[0.5, 0.3, 0.2], [0.5, 0.7, 0.28]].forEach(([u, v, rr]) => {
    const cx = px + w * u, cy = py + h * v, R = Math.min(w, h) * rr;
    x.beginPath(); x.arc(cx, cy, R, 0, 7); x.fillStyle = '#1d1d1d'; x.fill(); outline(x, 6);
    x.beginPath(); x.arc(cx, cy, R * 0.45, 0, 7); x.fillStyle = '#8c8c8c'; x.fill(); outline(x, 4);
  });
}

function cassette(x, px, py, w, h) {
  x.beginPath(); x.roundRect(px, py, w, h, 8); x.fillStyle = '#efefef'; x.fill(); outline(x, 7);
  x.beginPath(); x.roundRect(px + w * 0.1, py + h * 0.2, w * 0.8, h * 0.45, 6); x.fillStyle = '#2a2a2a'; x.fill(); outline(x, 4);
  [0.3, 0.7].forEach(u => {
    x.beginPath(); x.arc(px + w * u, py + h * 0.42, h * 0.16, 0, 7); x.fillStyle = '#fff'; x.fill(); outline(x, 4);
  });
}

function note(x, px, py, s, rot = 0) {
  x.save(); x.translate(px, py); x.rotate(rot);
  x.fillStyle = '#111'; x.strokeStyle = '#111'; x.lineWidth = s * 0.1;
  x.beginPath(); x.ellipse(0, s, s * 0.34, s * 0.25, -0.4, 0, 7); x.fill();
  x.beginPath(); x.ellipse(s * 0.9, s * 0.78, s * 0.34, s * 0.25, -0.4, 0, 7); x.fill();
  x.beginPath(); x.moveTo(s * 0.3, s * 0.95); x.lineTo(s * 0.3, 0); x.lineTo(s * 1.2, -s * 0.2); x.lineTo(s * 1.2, s * 0.75); x.stroke();
  x.lineWidth = s * 0.22; x.beginPath(); x.moveTo(s * 0.3, s * 0.05); x.lineTo(s * 1.2, -s * 0.15); x.stroke();
  x.restore();
}

function smokePuff(x, cx, cy, r) {
  x.beginPath(); x.arc(cx, cy, r, 0, 7);
  const g = x.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
  g.addColorStop(0, '#f4f4f4'); g.addColorStop(0.6, '#a9a9a9'); g.addColorStop(1, '#505050');
  x.fillStyle = g; x.fill(); outline(x, 7);
  x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = 3;
  x.beginPath(); x.arc(cx + r * 0.1, cy + r * 0.1, r * 0.6, 0.5, 2.6); x.stroke();
}

// Главный мурал: стена зала, 5.0 x 2.8 м, дверной проём прозрачный
export function drawMural(c, doorRect) {
  const W = c.width, H = c.height, x = c.getContext('2d'), r = rng(77);
  x.clearRect(0, 0, W, H);
  // зелёный фон + баллончик
  const bg = x.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#16a047'); bg.addColorStop(1, '#0b7d35');
  x.fillStyle = bg; x.fillRect(0, 0, W, H);
  for (let i = 0; i < 700; i++) {
    x.fillStyle = `rgba(${r() < 0.5 ? '120,255,160' : '0,60,20'},${0.03 + r() * 0.05})`;
    x.beginPath(); x.arc(r() * W, r() * H, 20 + r() * 90, 0, 7); x.fill();
  }
  noise(x, W, H, 14, r);

  // === револьвер ===
  x.save();
  const S = 1.18;
  x.translate(40, 200); x.scale(S, S);
  // дым и пластинка выше ствола
  smokePuff(x, 260, 120, 62); smokePuff(x, 330, 80, 78); smokePuff(x, 430, 30, 66);
  smokePuff(x, 160, 170, 50); smokePuff(x, 520, 60, 58); smokePuff(x, 590, 120, 46);
  vinyl(x, 380, 120, 82);
  // динамик над рамкой
  speaker(x, 560, 70, 130, 120);
  // ствол
  x.beginPath(); x.roundRect(60, 245, 430, 86, 30);
  let g = x.createLinearGradient(0, 245, 0, 331);
  g.addColorStop(0, '#f4f4f4'); g.addColorStop(0.45, '#bdbdbd'); g.addColorStop(1, '#2b2b2b');
  x.fillStyle = g; x.fill(); outline(x, 12);
  hatch(x, 60, 245, 430, 86, 12, 0.7, 0.18, 3);
  // планка
  x.beginPath(); x.roundRect(70, 222, 410, 24, 10); x.fillStyle = '#1b1b1b'; x.fill(); outline(x, 8);
  // мушка
  x.beginPath(); x.moveTo(70, 222); x.lineTo(96, 190); x.lineTo(116, 222); x.closePath(); x.fillStyle = '#e8e8e8'; x.fill(); outline(x, 8);
  // дульные кольца
  [0, 1, 2].forEach(i => {
    x.beginPath(); x.ellipse(60 + i * 3, 288, 26 - i * 3, 44 - i * 4, 0, 0, 7);
    x.fillStyle = i === 0 ? '#050505' : '#dcdcdc'; x.fill(); outline(x, 7);
  });
  // кожух шомпола
  x.beginPath(); x.roundRect(110, 332, 330, 44, 20);
  g = x.createLinearGradient(0, 332, 0, 376); g.addColorStop(0, '#d8d8d8'); g.addColorStop(1, '#303030');
  x.fillStyle = g; x.fill(); outline(x, 10);
  // кассета-наклейка на стволе
  cassette(x, 190, 255, 150, 62);

  // рамка
  x.beginPath();
  x.moveTo(470, 205); x.lineTo(690, 205); x.bezierCurveTo(770, 205, 820, 250, 830, 320);
  x.lineTo(815, 430); x.lineTo(700, 484); x.lineTo(565, 470); x.lineTo(470, 396); x.closePath();
  g = x.createLinearGradient(470, 205, 830, 484);
  g.addColorStop(0, '#fafafa'); g.addColorStop(0.55, '#d4d4d4'); g.addColorStop(1, '#6c6c6c');
  x.fillStyle = g; x.fill(); outline(x, 14);
  hatch(x, 470, 205, 360, 280, 14, -0.6, 0.12, 3);

  // барабан (вид сбоку, 3 видимые каморы)
  x.beginPath(); x.roundRect(440, 180, 210, 240, 52);
  g = x.createLinearGradient(440, 180, 650, 420);
  g.addColorStop(0, '#ffffff'); g.addColorStop(0.5, '#bdbdbd'); g.addColorStop(1, '#3e3e3e');
  x.fillStyle = g; x.fill(); outline(x, 14);
  hatch(x, 440, 180, 210, 240, 12, 0.5, 0.2, 3);
  [250, 300, 350].forEach((yy, i) => {
    x.beginPath(); x.ellipse(512, yy, 30, 25, 0, 0, 7); x.fillStyle = '#d6d6d6'; x.fill(); outline(x, 8);
    x.beginPath(); x.ellipse(512, yy, 17, 14, 0, 0, 7); x.fillStyle = '#060606'; x.fill();
  });
  // курок
  x.beginPath(); x.moveTo(770, 210); x.lineTo(836, 150); x.lineTo(880, 190); x.lineTo(840, 262); x.closePath();
  x.fillStyle = '#1e1e1e'; x.fill(); outline(x, 12);
  x.strokeStyle = 'rgba(255,255,255,.4)'; x.lineWidth = 3;
  for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(800 + i * 12, 200 - i * 10); x.lineTo(830 + i * 12, 232 - i * 10); x.stroke(); }
  // рукоять
  x.beginPath();
  x.moveTo(780, 424); x.lineTo(900, 430); x.bezierCurveTo(960, 520, 950, 640, 880, 720);
  x.lineTo(770, 690); x.bezierCurveTo(780, 600, 760, 520, 720, 480); x.closePath();
  g = x.createLinearGradient(760, 430, 940, 720);
  g.addColorStop(0, '#f2f2f2'); g.addColorStop(0.5, '#a8a8a8'); g.addColorStop(1, '#222');
  x.fillStyle = g; x.fill(); outline(x, 14);
  hatch(x, 760, 430, 190, 290, 10, 0.9, 0.3, 3);
  // сетка рукояти
  x.save(); x.beginPath();
  x.moveTo(790, 450); x.lineTo(890, 456); x.bezierCurveTo(930, 530, 925, 620, 868, 690); x.lineTo(790, 668); x.closePath(); x.clip();
  x.strokeStyle = 'rgba(0,0,0,.5)'; x.lineWidth = 3;
  for (let i = -200; i < 400; i += 22) {
    x.beginPath(); x.moveTo(760 + i, 430); x.lineTo(960 + i, 730); x.stroke();
    x.beginPath(); x.moveTo(960 + i, 430); x.lineTo(760 + i, 730); x.stroke();
  }
  x.restore();
  // скоба
  x.beginPath(); x.moveTo(588, 468);
  x.bezierCurveTo(580, 560, 660, 590, 730, 560); x.bezierCurveTo(760, 540, 765, 500, 756, 476);
  x.lineWidth = 22; x.strokeStyle = '#0a0a0a'; x.stroke();
  x.lineWidth = 11; x.strokeStyle = '#e6e6e6'; x.stroke();
  // спусковой
  x.beginPath(); x.moveTo(660, 484); x.quadraticCurveTo(650, 530, 688, 540); x.lineWidth = 12; x.strokeStyle = '#0a0a0a'; x.stroke();
  // тег-наклейка
  x.save(); x.translate(735, 380); x.rotate(-0.3);
  x.beginPath(); x.ellipse(0, 0, 54, 32, 0, 0, 7); x.fillStyle = '#111'; x.fill(); outline(x, 5);
  x.fillStyle = '#fff'; x.font = `900 30px ${FONT_SPRAY}`; x.textAlign = 'center'; x.fillText('REV', 0, 11); x.restore();
  // ноты слева-снизу и цепь
  note(x, 40, 460, 54, -0.2); note(x, 110, 570, 40, 0.3);
  x.strokeStyle = '#0a0a0a'; x.lineWidth = 8;
  for (let i = 0; i < 5; i++) {
    x.beginPath(); x.ellipse(850 + (i % 2) * 8, 740 + i * 28, 20, 28, 0, 0, 7);
    x.fillStyle = i % 2 ? '#d5d5d5' : '#8d8d8d'; x.fill(); x.stroke();
  }
  x.restore();

  // барабан-эмблема (6 камор) — рядом, снизу
  x.save();
  const ex = 250, ey = 905, er = 128;
  x.beginPath(); x.arc(ex, ey, er, 0, 7);
  g = x.createRadialGradient(ex - 40, ey - 40, 20, ex, ey, er);
  g.addColorStop(0, '#fff'); g.addColorStop(0.7, '#b8b8b8'); g.addColorStop(1, '#3a3a3a');
  x.fillStyle = g; x.fill(); outline(x, 12);
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3 - Math.PI / 2;
    x.beginPath(); x.arc(ex + Math.cos(a) * 80, ey + Math.sin(a) * 80, 30, 0, 7);
    x.fillStyle = '#050505'; x.fill(); x.lineWidth = 8; x.strokeStyle = '#e8e8e8'; x.stroke();
    x.lineWidth = 5; x.strokeStyle = '#0a0a0a'; x.stroke();
    x.beginPath(); x.arc(ex + Math.cos(a) * 80 - 6, ey + Math.sin(a) * 80 - 6, 8, 0, 7); x.fillStyle = '#c0902b'; x.fill();
  }
  x.beginPath(); x.arc(ex, ey, 28, 0, 7); x.fillStyle = '#222'; x.fill(); outline(x, 8);
  x.restore();

  // эквалайзер у двери
  x.fillStyle = '#0c0c0c';
  const eqx = 1105, hs = [90, 150, 210, 120, 260, 180, 90, 140, 60];
  hs.forEach((h, i) => { x.beginPath(); x.roundRect(eqx + i * 24, 760 - h / 2, 12, h, 6); x.fill(); });
  // ноты в рамках
  x.strokeStyle = '#0a0a0a'; x.lineWidth = 8;
  x.save(); x.translate(1000, 300); x.rotate(0.2); x.strokeRect(-60, -70, 150, 150); note(x, -30, -30, 56, 0); x.restore();
  x.save(); x.translate(1180, 160); x.rotate(-0.12); x.strokeRect(-60, -60, 130, 130); note(x, -32, -26, 48, 0); x.restore();

  // над дверью: пластинка + REC (по референсу фото)
  vinyl(x, 1385, 190, 78, '#d32a22');
  x.font = `900 120px ${FONT_HEAD}`; x.fillStyle = '#d32a22'; x.textAlign = 'left';
  x.fillText('REC', 1480, 234);

  // справа от двери: провода, колонки
  x.fillStyle = '#0a0a0a';
  x.beginPath(); x.roundRect(1800, 560, 120, 150, 10); x.fill();
  x.strokeStyle = 'rgba(0,0,0,.65)'; x.lineWidth = 5;
  for (let i = 0; i < 6; i++) {
    x.beginPath(); x.moveTo(1760 + i * 12, 220); x.bezierCurveTo(1740 + i * 20, 420, 1830 + i * 10, 500, 1780 + i * 14, 720); x.stroke();
  }
  // тег-подпись
  x.save(); x.translate(1700, 1040); x.rotate(-0.06);
  x.font = `700 80px ${FONT_SCRIPT}`; x.fillStyle = 'rgba(255,255,255,.85)'; x.fillText('revolver', 0, 0);
  x.restore();
  // светлый след от баллончика у пола
  const fl = x.createLinearGradient(0, H - 130, 0, H);
  fl.addColorStop(0, 'rgba(0,0,0,0)'); fl.addColorStop(1, 'rgba(0,0,0,.55)');
  x.fillStyle = fl; x.fillRect(0, H - 130, W, 130);

  // плинтус
  x.fillStyle = '#0c0f10'; x.fillRect(0, H - 30, W, 30);
  // проём двери — прозрачность
  x.clearRect(doorRect.x, doorRect.y, doorRect.w, doorRect.h);
}

// Полотно двери (трафарет)
export function drawDoorStencil(c) {
  const W = c.width, H = c.height, x = c.getContext('2d'), r = rng(5);
  x.fillStyle = '#f2f2ee'; x.fillRect(0, 0, W, H);
  noise(x, W, H, 8, r);
  x.fillStyle = '#111'; x.textAlign = 'center';
  x.font = `900 ${W * 0.075}px ${FONT_SPRAY}`;
  x.fillText('STROFF THA STREET', W / 2, H * 0.12);
  // прицел
  const cx = W / 2, cy = H * 0.57, R = W * 0.48;
  x.strokeStyle = '#111';
  x.lineWidth = 7; x.beginPath(); x.arc(cx, cy, R, 0, 7); x.stroke();
  x.lineWidth = 4; x.beginPath(); x.arc(cx, cy, R * 0.88, 0, 7); x.stroke();
  x.lineWidth = 6; x.beginPath(); x.moveTo(cx - R * 1.04, cy); x.lineTo(cx + R * 1.04, cy); x.moveTo(cx, cy - R * 1.05); x.lineTo(cx, cy + R * 1.05); x.stroke();
  // силуэт в шляпе
  x.fillStyle = '#0c0c10';
  x.beginPath();
  x.ellipse(cx, cy - R * 0.62, W * 0.075, W * 0.095, 0, 0, 7); x.fill();
  x.beginPath(); x.ellipse(cx, cy - R * 0.7, W * 0.17, W * 0.03, 0, 0, 7); x.fill();
  x.beginPath(); x.roundRect(cx - W * 0.1, cy - R * 0.74, W * 0.2, W * 0.07, 8); x.fill();
  x.beginPath();
  x.moveTo(cx - W * 0.1, cy - R * 0.5);
  x.bezierCurveTo(cx - W * 0.33, cy - R * 0.42, cx - W * 0.33, cy + R * 0.12, cx - W * 0.28, cy + R * 0.55);
  x.lineTo(cx + W * 0.34, cy + R * 0.55);
  x.bezierCurveTo(cx + W * 0.34, cy + R * 0.12, cx + W * 0.32, cy - R * 0.42, cx + W * 0.1, cy - R * 0.5);
  x.closePath(); x.fill();
  // человечки
  x.fillStyle = '#111';
  [W * 0.16, W * 0.84].forEach(px => {
    x.beginPath(); x.arc(px, H * 0.26, W * 0.04, 0, 7); x.fill();
    x.beginPath(); x.roundRect(px - W * 0.06, H * 0.285, W * 0.12, H * 0.07, 6); x.fill();
  });
  // красная табличка-подпись
  x.fillStyle = '#fff'; x.fillRect(W * 0.28, H * 0.22, W * 0.44, H * 0.07);
  x.strokeStyle = '#c62a2a'; x.lineWidth = 3; x.strokeRect(W * 0.28, H * 0.22, W * 0.44, H * 0.07);
  x.fillStyle = '#c62a2a'; x.font = `700 ${W * 0.05}px Arial, sans-serif`; x.fillText('ЗАПИСЬ ИДЁТ', W / 2, H * 0.265);
}

// Неоновая вывеска
export function drawSign(c) {
  const W = c.width, H = c.height, x = c.getContext('2d');
  x.fillStyle = '#05060a'; x.fillRect(0, 0, W, H);
  x.strokeStyle = 'rgba(255,255,255,.2)'; x.lineWidth = 6; x.strokeRect(10, 10, W - 20, H - 20);
  x.textAlign = 'center';
  x.shadowColor = '#ff2a1f'; x.shadowBlur = 40;
  x.fillStyle = '#ff5a4d';
  x.font = `800 ${H * 0.46}px ${FONT_HEAD}`;
  x.fillText('REVOLVER', W * 0.5, H * 0.52);
  x.shadowBlur = 24; x.shadowColor = '#35e06b'; x.fillStyle = '#9dffbd';
  x.font = `700 ${H * 0.15}px ${FONT_HEAD}`;
  x.fillText('PODCAST  ·  SOUND', W * 0.5, H * 0.74);
  x.shadowColor = '#fff'; x.shadowBlur = 14; x.fillStyle = '#ffffff';
  x.font = `600 ${H * 0.115}px ${FONT_HEAD}`;
  x.fillText('Фрунзе 49  ↓  подвал', W * 0.5, H * 0.91);
  x.shadowBlur = 0;
}

export function drawArrow(c) {
  const W = c.width, H = c.height, x = c.getContext('2d');
  x.clearRect(0, 0, W, H);
  x.shadowColor = '#ff2a1f'; x.shadowBlur = 24;
  x.fillStyle = '#ff6a5c';
  x.beginPath();
  x.moveTo(W * 0.38, H * 0.08); x.lineTo(W * 0.62, H * 0.08); x.lineTo(W * 0.62, H * 0.5);
  x.lineTo(W * 0.85, H * 0.5); x.lineTo(W * 0.5, H * 0.94); x.lineTo(W * 0.15, H * 0.5);
  x.lineTo(W * 0.38, H * 0.5); x.closePath(); x.fill();
}

export function drawTag(c, seed = 11, dark = true) {
  const W = c.width, H = c.height, x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#c9cbc6'; x.fillRect(0, 0, W, H);
  noise(x, W, H, 14, r);
  x.strokeStyle = '#0b0b0b'; x.lineCap = 'round'; x.lineJoin = 'round';
  for (let k = 0; k < 7; k++) {
    x.lineWidth = 8 + r() * 14;
    x.beginPath();
    let px = W * (0.2 + r() * 0.2), py = H * (0.1 + r() * 0.8);
    x.moveTo(px, py);
    for (let i = 0; i < 6; i++) {
      px += (r() - 0.3) * W * 0.22; py += (r() - 0.5) * H * 0.3;
      x.quadraticCurveTo(px + (r() - 0.5) * 60, py + (r() - 0.5) * 60, px, py);
    }
    x.stroke();
  }
}

export function drawNeonText(c, text, color, font) {
  const W = c.width, H = c.height, x = c.getContext('2d');
  x.clearRect(0, 0, W, H);
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.shadowColor = color; x.shadowBlur = 28;
  x.fillStyle = color; x.font = font;
  x.fillText(text, W / 2, H / 2);
  x.shadowBlur = 8; x.fillStyle = '#fff'; x.fillText(text, W / 2, H / 2);
}

export function drawPoster(c, kind) {
  const W = c.width, H = c.height, x = c.getContext('2d'), r = rng(kind * 7 + 1);
  const pal = [
    { bg: '#e9dfc8', a: '#d02419', b: '#111' },
    { bg: '#d02419', a: '#f1e9d3', b: '#111' },
    { bg: '#111', a: '#37ff7a', b: '#f1e9d3' },
    { bg: '#f1e9d3', a: '#111', b: '#37ff7a' }
  ][kind % 4];
  x.fillStyle = pal.bg; x.fillRect(0, 0, W, H);
  noise(x, W, H, 12, r);
  const words = [['JAM', 'SESSION'], ['ЖИВОЙ', 'ЗВУК'], ['REC', 'NIGHT'], ['СТРИМ', 'СТУДИЯ']][kind % 4];
  x.textAlign = 'left'; x.fillStyle = pal.a;
  x.font = `900 ${W * 0.3}px ${FONT_HEAD}`;
  x.save(); x.translate(W * 0.06, H * 0.2); x.rotate(-0.06);
  x.fillText(words[0], 0, 0);
  x.fillStyle = pal.b; x.font = `900 ${W * 0.2}px ${FONT_HEAD}`;
  x.fillText(words[1], 0, W * 0.25);
  x.restore();
  // геометрия
  x.fillStyle = pal.b;
  x.beginPath(); x.arc(W * 0.68, H * 0.62, W * 0.24, 0, 7); x.fill();
  x.fillStyle = pal.a; x.beginPath(); x.arc(W * 0.68, H * 0.62, W * 0.08, 0, 7); x.fill();
  x.strokeStyle = pal.a; x.lineWidth = 3;
  for (let i = 0; i < 8; i++) { x.beginPath(); x.arc(W * 0.68, H * 0.62, W * (0.1 + i * 0.017), 0, 7); x.stroke(); }
  x.fillStyle = pal.b; x.fillRect(W * 0.06, H * 0.86, W * 0.88, 4);
  x.fillStyle = pal.b; x.font = `700 ${W * 0.06}px Arial, sans-serif`;
  x.fillText('Фрунзе 49 · подвал · 21:00', W * 0.06, H * 0.93);
}

export function crtFrame(c, t, cam, noiseSeed) {
  const W = c.width, H = c.height, x = c.getContext('2d');
  const d = x.createImageData(W, H), p = d.data;
  const r = rng(noiseSeed);
  for (let j = 0; j < H; j++) {
    const roll = Math.sin(j * 0.4 + t * 6) * 0.5 + 0.5;
    for (let i = 0; i < W; i++) {
      const k = (j * W + i) * 4;
      const n = r() * 95;
      const scan = (j % 2) ? 0.55 : 1;
      const g = (n + 25 + roll * 25) * scan;
      p[k] = g * 0.3; p[k + 1] = g; p[k + 2] = g * 0.35; p[k + 3] = 255;
    }
  }
  x.putImageData(d, 0, 0);
  // сцена: силуэты
  x.fillStyle = 'rgba(120,255,150,.35)';
  const sx = (Math.sin(t * 0.6 + cam) * 0.5 + 0.5) * (W - 30);
  x.beginPath(); x.arc(sx + 15, H * 0.4, 7, 0, 7); x.fill();
  x.fillRect(sx + 4, H * 0.48, 22, H * 0.4);
  x.fillStyle = 'rgba(120,255,150,.22)'; x.fillRect(0, H * 0.82, W, 3);
  // таймкод
  const s = Math.floor(t + cam * 77);
  const tc = [Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60].map(v => String(v).padStart(2, '0')).join(':');
  x.font = 'bold 12px monospace'; x.fillStyle = '#b6ffc3'; x.textAlign = 'left';
  x.fillText(tc, 6, H - 7);
  x.textAlign = 'right'; x.fillText('CAM ' + cam, W - 6, 14);
  if (Math.floor(t * 1.6) % 2 === 0) { x.fillStyle = '#ff3b30'; x.beginPath(); x.arc(12, 12, 4, 0, 7); x.fill(); x.fillStyle = '#ffc9c5'; x.textAlign = 'left'; x.fillText('REC', 20, 16); }
}

export function drawTrafficSign(c) {
  const x = c.getContext('2d'), W = c.width;
  x.fillStyle = '#1f6fd0'; x.fillRect(0, 0, W, W);
  x.fillStyle = '#fff'; x.fillRect(W * 0.08, W * 0.08, W * 0.84, W * 0.84);
  x.fillStyle = '#1f6fd0'; x.fillRect(W * 0.12, W * 0.12, W * 0.76, W * 0.76);
  x.fillStyle = '#fff';
  x.beginPath(); x.moveTo(W * 0.2, W * 0.78); x.lineTo(W * 0.5, W * 0.2); x.lineTo(W * 0.8, W * 0.78); x.closePath(); x.fill();
  x.fillStyle = '#111';
  x.beginPath(); x.arc(W * 0.5, W * 0.4, W * 0.05, 0, 7); x.fill();
  x.fillRect(W * 0.46, W * 0.45, W * 0.08, W * 0.22);
}
