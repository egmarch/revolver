import * as THREE from './three.module.min.js';

const $ = (s) => document.querySelector(s);
const qs = new URLSearchParams(location.search);
const TOUCH = qs.get('touch') === '1' || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (TOUCH) document.body.classList.add('touch');

/* ============================================================
   МИР. Единицы — метры. Улица идёт вдоль X, фасад дома на z=0,
   дорога на +z. Подвал (студии) на y=-3, чайхана на y=+4.2.
   Графика намеренно простая: цвета «запечены» в вершины, ламп нет,
   по одному мешу на материал — летает на старых телефонах.
   ============================================================ */
const BF = -3.0;            // пол подвала
const CH = 2.96;            // потолок 296 см
const CF = 4.2;             // пол чайханы
const T = 0.3;              // толщина стен

// ---------- палитра ----------
const PINK = 0xff2e97, CYAN = 0x19f0ff, VIOLET = 0x9b5cff, ORANGE = 0xff9a3c, YEL = 0xffe36a;
const PASTEL = [0xff9ec7, 0x7fe3d4, 0xffc58a, 0x9fc8ff, 0xd9a5ff, 0xfff0a0];

// ---------- пакетная геометрия ----------
const BATCH = {};
const col = new THREE.Color();
const mkBatch = () => ({ p: [], c: [], u: [] });
const bt = (k) => (typeof k === 'string' ? (BATCH[k] ||= mkBatch()) : k);
const SH = { py: 1, ny: 0.45, px: 0.8, nx: 0.68, pz: 0.92, nz: 0.6 };

function face(b, v, sh, c, uv) {
  col.set(c);
  const r = col.r * sh, g = col.g * sh, bl = col.b * sh;
  for (const i of [0, 1, 2, 0, 2, 3]) { b.p.push(v[i][0], v[i][1], v[i][2]); b.c.push(r, g, bl); b.u.push(uv[i][0], uv[i][1]); }
}
// box: tile=[tu,tv] метров на повтор текстуры (0 — без uv)
const FL = { px: 1, nx: 1, pz: 1, nz: 1, py: 1, ny: 1 };
function box(k, x0, y0, z0, x1, y1, z1, c = 0xffffff, tile = 0, sh = SH) {
  if (k === 'neon') sh = FL;
  const b = bt(k);
  const tu = tile ? tile[0] || tile : 1, tv = tile ? tile[1] || tile : 1;
  const U = (a) => a / tu, V = (a) => a / tv;
  face(b, [[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]], sh.px, c, [[U(z1), V(y0)], [U(z0), V(y0)], [U(z0), V(y1)], [U(z1), V(y1)]]);
  face(b, [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]], sh.nx, c, [[U(z0), V(y0)], [U(z1), V(y0)], [U(z1), V(y1)], [U(z0), V(y1)]]);
  face(b, [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], sh.pz, c, [[U(x0), V(y0)], [U(x1), V(y0)], [U(x1), V(y1)], [U(x0), V(y1)]]);
  face(b, [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]], sh.nz, c, [[U(x1), V(y0)], [U(x0), V(y0)], [U(x0), V(y1)], [U(x1), V(y1)]]);
  face(b, [[x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]], sh.py, c, [[U(x0), V(z1)], [U(x1), V(z1)], [U(x1), V(z0)], [U(x0), V(z0)]]);
  face(b, [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]], sh.ny, c, [[U(x0), V(z0)], [U(x1), V(z0)], [U(x1), V(z1)], [U(x0), V(z1)]]);
}
// двусторонний четырёхугольник (листья)
function quadD(k, a, b2, c2, d, c) {
  const b = bt(k); const uv = [[0, 0], [1, 0], [1, 1], [0, 1]];
  face(b, [a, b2, c2, d], 1, c, uv);
  face(b, [d, c2, b2, a], 1, c, uv);
}
const cx = (x0, x1) => (x0 + x1) / 2;

// ---------- коллизии и полы ----------
const solids = [];   // [x0,x1,z0,z1,y0,y1]
const floors = [];   // {x0,x1,z0,z1,y,holes,ramp}
// wall — видимая коробка + препятствие
function wall(k, x0, y0, z0, x1, y1, z1, c, tile) { box(k, x0, y0, z0, x1, y1, z1, c, tile); solids.push([x0, x1, z0, z1, y0, y1]); }
const block = (x0, y0, z0, x1, y1, z1) => solids.push([x0, x1, z0, z1, y0, y1]);
const floor = (x0, x1, z0, z1, y, holes) => floors.push({ x0, x1, z0, z1, y, holes });
function ramp(x0, x1, z0, z1, ya, yb, n) { floors.push({ x0, x1, z0, z1, ramp: { ya, yb, n } }); }

function floorY(f, x, z) {
  if (x < f.x0 || x > f.x1 || z < f.z0 || z > f.z1) return null;
  if (f.holes) for (const h of f.holes) if (x > h[0] && x < h[1] && z > h[2] && z < h[3]) return null;
  if (f.ramp) {
    const r = f.ramp, t = (x - f.x0) / (f.x1 - f.x0);
    return r.ya + (r.yb - r.ya) * (Math.min(r.n - 1, Math.floor(t * r.n)) + 1) / r.n;
  }
  return f.y;
}
function groundAt(x, z, feet) {
  let best = null;
  for (const f of floors) {
    const y = floorY(f, x, z);
    if (y === null) continue;
    if (y > feet + 0.5 || y < feet - 0.5) continue;
    if (best === null || y > best) best = y;
  }
  return best;
}
function hitsSolid(x, z, feet, r) {
  for (const s of solids) {
    if (s[5] <= feet + 0.35 || s[4] >= feet + 1.7) continue;
    const nx = Math.max(s[0], Math.min(x, s[1])), nz = Math.max(s[2], Math.min(z, s[3]));
    const dx = x - nx, dz = z - nz;
    if (dx * dx + dz * dz < r * r) return true;
  }
  return false;
}

// ---------- текстуры ----------
function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c, rep = true) {
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestMipmapNearestFilter; t.generateMipmaps = true;
  if (rep) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

function winTex() {           // 4×4 окна, 12×12 м
  const c = cv(128, 128), x = c.getContext('2d');
  x.fillStyle = '#e8dcee'; x.fillRect(0, 0, 128, 128);
  for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) {
    const lit = rnd() < 0.42, pick = rnd();
    x.fillStyle = '#6f8fb8'; x.fillRect(i * 32 + 5, j * 32 + 6, 22, 20);
    if (lit) { x.fillStyle = pick < 0.5 ? '#ffe9a8' : pick < 0.8 ? '#ff9fd0' : '#9ff4ff'; x.fillRect(i * 32 + 6, j * 32 + 7, 20, 18); }
    else { x.fillStyle = '#4a5f8a'; x.fillRect(i * 32 + 5, j * 32 + 6, 22, 7); }
    x.fillStyle = 'rgba(0,0,0,.25)'; x.fillRect(i * 32 + 15, j * 32 + 6, 2, 20);
  }
  return tex(c);
}
function shopTex() {          // витрины первого этажа, 8×4 м
  const c = cv(128, 64), x = c.getContext('2d');
  x.fillStyle = '#f4e9ef'; x.fillRect(0, 0, 128, 64);
  for (let i = 0; i < 2; i++) {
    x.fillStyle = '#26324f'; x.fillRect(i * 64 + 4, 10, 56, 44);
    const g = x.createLinearGradient(0, 10, 0, 54); g.addColorStop(0, '#ffb86b'); g.addColorStop(1, '#ff6fa8');
    x.fillStyle = g; x.fillRect(i * 64 + 6, 24, 52, 28);
    x.fillStyle = 'rgba(255,255,255,.18)'; x.fillRect(i * 64 + 6, 12, 14, 10);
    x.fillStyle = '#fff'; x.fillRect(i * 64 + 31, 10, 2, 44);
  }
  return tex(c);
}
function paveTex() {
  const c = cv(32, 32), x = c.getContext('2d');
  x.fillStyle = '#f0c8bd'; x.fillRect(0, 0, 32, 32);
  x.fillStyle = 'rgba(160,80,110,.35)'; x.fillRect(0, 0, 32, 1); x.fillRect(0, 0, 1, 32);
  return tex(c);
}
function foamTex() {
  const c = cv(32, 32), x = c.getContext('2d');
  x.fillStyle = '#2b2236'; x.fillRect(0, 0, 32, 32);
  x.fillStyle = '#3a2d4a';
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) if ((i + j) % 2) x.fillRect(i * 8, j * 8, 8, 8);
  return tex(c);
}
function glowTex() {
  const c = cv(64, 64), x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return tex(c, false);
}
function signCanvas(text, color, w = 512, h = 128, size = 64, bg = null) {
  const c = cv(w, h), x = c.getContext('2d');
  if (bg) { x.fillStyle = bg; x.fillRect(0, 0, w, h); }
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = `700 ${size}px Unbounded, Manrope, sans-serif`;
  const lines = text.split('\n');
  lines.forEach((l, i) => {
    const y = h / 2 + (i - (lines.length - 1) / 2) * size * 1.15;
    x.shadowColor = color; x.shadowBlur = 22; x.fillStyle = color; x.fillText(l, w / 2, y);
    x.shadowBlur = 8; x.fillStyle = '#fff'; x.fillText(l, w / 2, y);
  });
  return c;
}

// ---------- материалы ----------
const MAT = {};
function buildMaterials() {
  const flat = (o = {}) => new THREE.MeshBasicMaterial(Object.assign({ vertexColors: true }, o));
  MAT.flat = flat();
  MAT.win = flat({ map: winTex() });
  MAT.shop = flat({ map: shopTex() });
  MAT.pave = flat({ map: paveTex() });
  MAT.foam = flat({ map: foamTex() });
  MAT.neon = flat({ fog: false });
  MAT.leaf = flat({ side: THREE.DoubleSide });
  MAT.glass = flat({ transparent: true, opacity: 0.3, depthWrite: false });
  MAT.glassWarm = flat({ transparent: true, opacity: 0.5, depthWrite: false });
}
const GLOW = { map: null };
function sprite(parent, color, size, x, y, z, op = 0.7) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW.map, color, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  s.scale.set(size, size, 1); s.position.set(x, y, z); parent.add(s); return s;
}
function signPlane(parent, canvas, w, h, x, y, z, ry = 0) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex(canvas, false), transparent: true, fog: false, depthWrite: false }));
  m.position.set(x, y, z); m.rotation.y = ry; parent.add(m); return m;
}

/* ============================================================
   СБОРКА СЦЕНЫ
   ============================================================ */
const scene = new THREE.Scene();
const FOGC = 0xff7fb0;
scene.fog = new THREE.Fog(FOGC, 28, 190);
const animated = { cars: [], steam: [], neon: [] };
let SPK = { x: -4.33, y: BF + 1.0, z: -5.1 };     // колонка в студии

function palm(x, z, h = 6.5) {
  box('flat', x - 0.14, 0, z - 0.14, x + 0.14, h * 0.55, z + 0.14, 0x8a5a3c);
  box('flat', x - 0.1, h * 0.55, z - 0.1, x + 0.1, h, z + 0.1, 0x9a6a46);
  const n = 7;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + x, dx = Math.cos(a), dz = Math.sin(a), px = -dz, pz = dx;
    const L = 2.7, w = 0.45, y = h;
    const c = i % 2 ? 0x1fae6a : 0x14935a;
    quadD('leaf', [x, y, z], [x + dx * L * 0.5 + px * w, y + 0.45, z + dz * L * 0.5 + pz * w], [x + dx * L, y - 0.9, z + dz * L], [x + dx * L * 0.5 - px * w, y + 0.45, z + dz * L * 0.5 - pz * w], c);
  }
  box('flat', x - 0.2, h - 0.3, z - 0.2, x + 0.2, h + 0.05, z + 0.2, 0x6b4a2a);
  block(x - 0.22, 0, z - 0.22, x + 0.22, 3, z + 0.22);
}
function lamp(parent, x, z, c) {
  box('flat', x - 0.06, 0, z - 0.06, x + 0.06, 5.2, z + 0.06, 0x3a2c58);
  box('flat', x - 0.06, 5.1, z - 0.06, x + 0.9, 5.2, z + 0.06, 0x3a2c58);
  box('neon', x + 0.5, 4.98, z - 0.15, x + 1.0, 5.1, z + 0.15, c);
  sprite(parent, c, 5, x + 0.75, 4.9, z, 0.5);
  block(x - 0.1, 0, z - 0.1, x + 0.1, 3, z + 0.1);
}
function railing(x0, x1, z, y0 = 0, c = 0x6a4aa0) {
  for (let x = x0; x <= x1 + 0.01; x += 1.8) box('flat', x - 0.04, y0, z - 0.04, x + 0.04, y0 + 1.0, z + 0.04, c);
  box('flat', x0, y0 + 0.95, z - 0.04, x1, y0 + 1.03, z + 0.04, c);
  box('flat', x0, y0 + 0.5, z - 0.03, x1, y0 + 0.55, z + 0.03, c);
}
function railingZ(x, z0, z1, y0, c = 0x6a4aa0) {
  for (let z = z0; z <= z1 + 0.01; z += 1.5) box('flat', x - 0.04, y0, z - 0.04, x + 0.04, y0 + 1.0, z + 0.04, c);
  box('flat', x - 0.04, y0 + 0.95, z0, x + 0.04, y0 + 1.03, z1, c);
}

function buildStreet(root) {
  // земля, дорога, тротуары
  box('flat', -320, -0.5, 5.2, 320, -0.2, 140, 0x2b1b52);
  box('flat', -320, -0.5, -140, 320, -0.2, -22, 0x2b1b52);
  box('flat', -320, -0.2, 5.3, 320, -0.12, 16.9, 0x3a2a63);                  // асфальт
  for (let x = -60; x < 60; x += 6) {                                       // разметка, 3 полосы в одну сторону
    box('flat', x, -0.12, 8.65, x + 2.6, -0.11, 8.8, 0xf5e6ff);
    box('flat', x, -0.12, 12.15, x + 2.6, -0.11, 12.3, 0xf5e6ff);
  }
  box('flat', -320, -0.12, 5.3, 320, -0.11, 5.4, YEL);
  box('pave', -320, -0.2, 0, -1.8, 0, 5.2, 0xffffff, 1.5);                    // тротуар с вырезом под спуск
  box('pave', 7.0, -0.2, 0, 320, 0, 5.2, 0xffffff, 1.5);
  box('pave', -1.8, -0.2, 1.9, 7.0, 0, 5.2, 0xffffff, 1.5);
  box('pave', -320, -0.2, 17.0, 320, 0, 22.5, 0xffffff, 1.5);                // противоположный
  box('flat', -320, -0.2, 5.2, 320, 0.0, 5.3, 0xb892c8);                     // бордюр
  box('flat', -320, -0.2, 16.9, 320, 0.0, 17.0, 0xb892c8);
  // ограждение дороги: стоит вдоль всего квартала с обеих сторон
  railing(-52, 52, 5.6); railing(-52, 52, 16.6);
  // концы тротуара — чтобы квартал выглядел закрытым
  box('flat', -53, 0, 0, -52.5, 1.0, 5.4, 0x6a4aa0); box('flat', 52.5, 0, 0, 53, 1.0, 5.4, 0x6a4aa0);
  floor(-52, 52, 0, 5.2, 0, [[-1.5, 7.0, 0, 1.6], [16.0, 22.7, 0, 2.0]]);
  // фонари и пальмы
  for (let x = -44; x <= 44; x += 11) lamp(root, x, 4.7, x % 22 ? PINK : CYAN);
  for (let x = -47; x <= 47; x += 9.2) if (x < -3 || x > 8) palm(x, 3.7, 6 + (Math.abs(x) % 3));
  for (let x = -47; x <= 47; x += 8.4) palm(x + 1, 19.6, 6.5);
  // скамейки
  for (const x of [-30, -18, 30]) { box('flat', x, 0.4, 2.8, x + 1.6, 0.48, 3.3, 0x3dd6c4); box('flat', x, 0.5, 3.2, x + 1.6, 0.95, 3.3, 0x3dd6c4); box('flat', x + 0.1, 0, 2.9, x + 0.2, 0.4, 3.2, 0x2a1b52); box('flat', x + 1.4, 0, 2.9, x + 1.5, 0.4, 3.2, 0x2a1b52); }
  // урна
  box('flat', 13.5, 0, 2.2, 13.9, 0.8, 2.6, 0xff9a3c);
}

function buildFacade(root) {
  // подиум дома: витрины внизу, окна вверху, крыша
  box('shop', -40, 0, -0.3, 40, 4.0, 0, 0xffffff, [8, 4]);
  box('flat', -40, 4.0, -0.3, 40, 4.3, 0.12, 0xff8fc4);                      // карниз-козырёк
  // верх, кроме чайханы
  box('win', -40, 4.3, -0.3, 1.5, 8.4, 0, 0xffe9f5, 12);
  box('win', 14.0, 4.3, -0.3, 40, 8.4, 0, 0xffe9f5, 12);
  box('flat', -40, 8.4, -12, 40, 8.9, 0.15, 0xff6fa8);                       // крыша
  box('flat', -40, 8.9, -0.1, 40, 9.3, 0.15, 0x9b5cff);
  // неоновая полоса по фасаду
  box('neon', -40, 4.0, 0.12, 40, 4.1, 0.2, PINK);
  box('neon', -40, 8.9, 0.15, 40, 9.0, 0.22, CYAN);
  // козырьки над витринами
  for (let i = 0; i < 10; i++) {
    const x0 = -39 + i * 7.9; if (x0 > -4 && x0 < 9) continue;
    const c = PASTEL[i % PASTEL.length];
    box('flat', x0, 3.2, 0.0, x0 + 6.6, 3.45, 1.1, c);
    box('flat', x0, 3.0, 1.0, x0 + 6.6, 3.45, 1.1, 0xffffff);
  }
  // башня 49 за подиумом, 25 этажей; соседние 49/1 и 49/2 слева
  box('win', -14, 0, -42, 14, 78, -12, 0xffd1e8, 12);
  box('win', -76, 0, -70, -44, 76, -40, 0xcde9ff, 12);
  box('win', -124, 0, -80, -92, 72, -52, 0xffe3b8, 12);
  box('neon', -14, 78, -42, 14, 78.6, -12, PINK);
  // дома по бокам квартала
  box('win', -75, 0, -22, -40, 17, -0.3, 0x9fe3d8, 12);
  box('win', 40, 0, -22, 80, 19, -0.3, 0xffd7a3, 12);
  box('win', 80, 0, -22, 130, 36, 6, 0xd9c0ff, 12);
  box('win', -140, 0, -22, -75, 28, 6, 0xffc0dc, 12);
  // дома через дорогу (13–14 этажей и пониже)
  const row = [[-110, 22, 20], [-86, 24, 39], [-60, 28, 42], [-30, 30, 36], [2, 26, 40], [30, 30, 28], [62, 28, 41], [92, 30, 38]];
  row.forEach(([x, w, h], i) => box('win', x, 0, 30, x + w, h, 48, [0xffb3d9, 0xb3f0e6, 0xffd6a8, 0xc3d7ff, 0xe6c3ff][i % 5], 12));
  box('win', -30, 0, 70, 20, 60, 100, 0xffc9e3, 12);
  // неоновые вывески на домах напротив
  box('neon', -60, 30.0, 29.9, -32, 30.5, 30.0, CYAN);
  box('neon', 62, 28.0, 29.9, 90, 28.5, 30.0, PINK);
}

// стрелка/вывеска над спуском в студию
function buildEntrance(root) {
  // траншея лестницы
  box('flat', -1.8, BF - 0.4, 0, 7.0, BF, 1.9, 0x4a3a78);                    // пол траншеи
  box('flat', -1.8, BF, 1.6, 7.0, 0, 1.9, 0x7a5aa8);                         // южная стена
  box('flat', -1.8, BF, 0, -1.5, 0, 1.9, 0x7a5aa8);                          // западная
  box('flat', 0.3, BF, -0.3, 7.0, 0, 0, 0xcfa6e6);                           // фасад в траншее
  // ступени
  const n = 16, x0 = 2.2, x1 = 7.0, dx = (x1 - x0) / n;
  for (let i = 0; i < n; i++) box('flat', x0 + i * dx, BF, 0, x0 + (i + 1) * dx, BF + 3 * (i + 1) / n, 1.6, i % 2 ? 0xcab0ea : 0xe4d0f6);
  ramp(x0, x1, 0, 1.6, BF, 0, n);
  floor(-1.5, 2.2, 0, 1.6, BF);
  // ограждение траншеи
  railing(-1.5, 7.0, 1.7, 0, 0xff2e97);
  box('flat', 6.96, 0, 0, 7.04, 1.0, 0.1, 0xff2e97);
  // неоновая вывеска-указатель
  const root2 = new THREE.Group(); scene.add(root2);
  box('flat', 7.55, 0, 4.95, 7.65, 4.6, 5.05, 0x3a2c58); block(7.5, 0, 4.9, 7.7, 3, 5.1);
  box('flat', 7.55, 4.5, 1.7, 7.65, 4.6, 5.05, 0x3a2c58);
  const sc = signCanvas('REVOLVER\nЗАПИСЬ ↓', '#ff2e97', 512, 256, 62), sc2 = signCanvas('REVOLVER\nЗАПИСЬ ↓', '#19f0ff', 512, 256, 62);
  signPlane(root2, sc, 3.2, 1.6, 7.62, 3.4, 3.4, Math.PI / 2);
  signPlane(root2, sc2, 3.2, 1.6, 7.58, 3.4, 3.4, -Math.PI / 2);
  sprite(root2, PINK, 7, 7.6, 3.4, 3.4, 0.25);
  // табличка у двери: дверь в подвал
  box('neon', -1.2, BF + 2.25, 0.02, -0.3, BF + 2.33, 0.12, PINK);
  const dc = new THREE.Group(); scene.add(dc);
  signPlane(dc, signCanvas('ЗАПИСЬ ИДЁТ', '#ff2e97', 512, 96, 44), 1.6, 0.3, -0.75, BF + 2.6, 0.14, 0);
}

function buildBasement(root) {
  const L = -6.91, M = -4.01, M2 = -3.76, R = 0, ZF = -0.3, ZB = -5.44;
  const FOAM = 'foam', W0 = BF - 0.4, W1 = BF + CH + 0.4;
  // полы
  box('flat', L - T, W0, ZB - T, R + T, BF, ZF + T, 0x2a1b45);
  box('flat', L - T, BF + CH, ZB - T, R + T, W1, ZF + T, 0x1a1030);                       // потолок
  floor(M2, R, ZB, ZF, BF); floor(L, M, ZB, ZF, BF);
  floor(M, M2, -1.9, -1.0, BF);                                                          // проём в акустической стене
  floor(-1.2, -0.3, ZF, 0.0, BF);                                                        // вход
  // внешние стены (внутренняя грань со стороны комнат)
  wall(FOAM, L - T, BF, ZB - T, R + T, BF + CH, ZB, 0xffffff, 1);                         // задняя
  wall(FOAM, L - T, BF, ZB, L, BF + CH, ZF, 0xffffff, 1);                                 // левая
  wall(FOAM, R, BF, ZB, R + T, BF + CH, ZF, 0xffffff, 1);                                 // правая
  wall('flat', L - T, BF, ZF, -1.2, 0, 0, 0x7a5aa8);                               // фасад: слева от двери
  wall('flat', -0.3, BF, ZF, R + T, 0, 0, 0x7a5aa8);                               // справа от двери
  box('flat', -1.2, BF + 2.2, ZF, -0.3, 0, 0, 0x7a5aa8);                           // притолока
  // акустическая стена 25 см
  wall(FOAM, M, BF, ZB, M2, BF + CH, -1.9, 0xffffff, 1);
  wall(FOAM, M, BF, -1.0, M2, BF + CH, ZF, 0xffffff, 1);
  box(FOAM, M, BF + 2.1, -1.9, M2, BF + CH, -1.0, 0xffffff, 1);
  // светодиодная лента по периметру (розовая) — как на схеме
  const y = BF + CH - 0.12;
  box('neon', L, y, ZB, M, y + 0.06, ZB + 0.06, PINK); box('neon', L, y, ZF - 0.06, M, y + 0.06, ZF, PINK);
  box('neon', L, y, ZB, L + 0.06, y + 0.06, ZF, PINK);
  box('neon', M2, y, ZB, R, y + 0.06, ZB + 0.06, PINK); box('neon', M2, y, ZF - 0.06, R, y + 0.06, ZF, PINK);
  box('neon', R - 0.06, y, ZB, R, y + 0.06, ZF, PINK); box('neon', M2, y, ZB, M2 + 0.06, y + 0.06, ZF, PINK);
  const lamps = [[-2.3, -1.2], [-1.45, -1.2], [-2.3, -4.4], [-1.45, -4.4], [-5.45, -1.4], [-5.45, -4.1]];
  lamps.forEach(([lx, lz]) => box('neon', lx - 0.18, BF + CH - 0.05, lz - 0.18, lx + 0.18, BF + CH, lz + 0.18, 0xfff4d6));

  /* ===== ПОДКАСТНАЯ 3,76 × 5,14 ===== */
  // ковёр-граффити
  const cc = [0xff2e97, 0x19f0ff, 0xffe36a, 0x9b5cff, 0x7cff6b];
  for (let i = 0; i < 14; i++) {
    const px = M2 + 0.15 + (i % 4) * 0.9, pz = ZB + 0.2 + Math.floor(i / 4) * 1.25;
    box('flat', px, BF + 0.005, pz, px + 0.7 + (i % 3) * 0.1, BF + 0.012, pz + 0.55 + (i % 2) * 0.3, cc[i % 5]);
  }
  // стол
  wall('flat', -2.4, BF + 0.72, -3.9, -1.36, BF + 0.78, -1.5, 0xfff0d6);
  box('flat', -2.3, BF, -3.8, -2.2, BF + 0.72, -3.7, 0x3a2c58); box('flat', -1.56, BF, -3.8, -1.46, BF + 0.72, -3.7, 0x3a2c58);
  box('flat', -2.3, BF, -1.7, -2.2, BF + 0.72, -1.6, 0x3a2c58); box('flat', -1.56, BF, -1.7, -1.46, BF + 0.72, -1.6, 0x3a2c58);
  // микрофоны на штангах
  [[-1.88, -3.5], [-1.88, -2.7], [-1.88, -1.9]].forEach(([mx, mz]) => {
    box('flat', mx - 0.015, BF + 0.78, mz - 0.015, mx + 0.015, BF + 1.15, mz + 0.015, 0x222222);
    box('flat', mx - 0.05, BF + 1.1, mz - 0.05, mx + 0.05, BF + 1.26, mz + 0.05, 0x111118);
  });
  // стулья
  [[-2.62, -3.4], [-2.62, -2.0], [-1.14, -3.4], [-1.14, -2.0]].forEach(([sx, sz]) => {
    wall('flat', sx - 0.22, BF + 0.4, sz - 0.22, sx + 0.22, BF + 0.46, sz + 0.22, 0xff2e97);
    box('flat', sx - 0.2, BF, sz - 0.03, sx + 0.2, BF + 0.4, sz + 0.03, 0x2a1b45);
    box('flat', sx - 0.22, BF + 0.46, sz + (sx < -1.9 ? -0.22 : 0.18), sx + 0.22, BF + 0.95, sz + (sx < -1.9 ? -0.18 : 0.22), 0xff2e97);
  });
  // ЭЛТ-стойка в углу
  wall('flat', -0.85, BF, -5.3, -0.1, BF + 0.9, -4.6, 0x3a2c58);
  [0, 1, 2].forEach(i => { box('flat', -0.8, BF + 0.9 + i * 0.4, -5.25, -0.15, BF + 1.28 + i * 0.4, -4.65, 0x1c1c26); box('neon', -0.74, BF + 0.95 + i * 0.4, -4.67, -0.21, BF + 1.22 + i * 0.4, -4.65, i % 2 ? CYAN : 0x9bf0ff); });
  block(-0.85, BF, -5.3, -0.1, BF + 2.2, -4.6);
  // камеры на штативах
  [[-3.45, -0.95], [-0.35, -4.3], [-3.45, -4.9]].forEach(([qx, qz]) => {
    box('flat', qx - 0.02, BF, qz - 0.02, qx + 0.02, BF + 1.4, qz + 0.02, 0x15151c);
    box('flat', qx - 0.12, BF + 1.4, qz - 0.18, qx + 0.12, BF + 1.6, qz + 0.18, 0x15151c);
    box('neon', qx - 0.02, BF + 1.55, qz + 0.18, qx + 0.02, BF + 1.58, qz + 0.2, 0xff2020);
    block(qx - 0.15, BF, qz - 0.15, qx + 0.15, BF + 1.6, qz + 0.15);
  });
  // монитор «REC» и неоновая вывеска на задней стене
  const g = new THREE.Group(); scene.add(g);
  signPlane(g, signCanvas('REVOLVER\nPODCAST', '#19f0ff', 512, 256, 70), 2.4, 1.2, -1.88, BF + 1.8, ZB + 0.02, 0);
  sprite(g, CYAN, 5, -1.88, BF + 1.8, ZB + 0.3, 0.22);
  // софтбоксы
  box('neon', -3.7, BF + 2.3, -5.4, -3.2, BF + 2.85, -5.36, 0xffffff); box('neon', -0.55, BF + 2.3, -5.4, -0.05, BF + 2.85, -5.36, 0xffffff);
  // пальма в кадке
  box('flat', -3.65, BF, -5.35, -3.3, BF + 0.35, -5.0, 0xff9a3c);
  box('flat', -3.52, BF + 0.35, -5.22, -3.43, BF + 1.2, -5.13, 0x6b4a2a);
  for (let i = 0; i < 5; i++) { const a = i * 1.26; quadD('leaf', [-3.475, BF + 1.2, -5.175], [-3.475 + Math.cos(a) * 0.35, BF + 1.35, -5.175 + Math.sin(a) * 0.35 + 0.05], [-3.475 + Math.cos(a) * 0.7, BF + 1.0, -5.175 + Math.sin(a) * 0.7], [-3.475 + Math.cos(a) * 0.35 + 0.05, BF + 1.35, -5.175 + Math.sin(a) * 0.35], 0x1fae6a); }

  /* ===== КОМНАТА ЗАПИСИ 2,90 × 5,14 ===== */
  // диван белый у задней части
  wall('flat', -6.75, BF + 0.0, -5.4, -4.85, BF + 0.42, -4.65, 0xf4f1f7);
  box('flat', -6.75, BF + 0.42, -5.4, -4.85, BF + 0.95, -5.15, 0xf4f1f7);
  box('flat', -6.75, BF + 0.42, -5.4, -6.55, BF + 0.7, -4.65, 0xe7e2ee); box('flat', -5.05, BF + 0.42, -5.4, -4.85, BF + 0.7, -4.65, 0xe7e2ee);
  box('neon', -6.75, BF + 0.02, -4.66, -4.85, BF + 0.06, -4.64, CYAN);           // подсветка под диваном
  // стеклянный журнальный столик
  box('glass', -6.2, BF + 0.4, -4.2, -5.3, BF + 0.44, -3.65, 0xbfeaff);
  box('flat', -6.18, BF, -4.18, -6.14, BF + 0.4, -4.14, 0xcfd6e0); box('flat', -5.36, BF, -4.18, -5.32, BF + 0.4, -4.14, 0xcfd6e0);
  box('flat', -6.18, BF, -3.71, -6.14, BF + 0.4, -3.67, 0xcfd6e0); box('flat', -5.36, BF, -3.71, -5.32, BF + 0.4, -3.67, 0xcfd6e0);
  block(-6.2, BF, -4.2, -5.3, BF + 0.44, -3.65);
  // отдельный стол с вертушками, слева
  wall('flat', -6.88, BF + 0.78, -3.0, -6.28, BF + 0.84, -1.4, 0x2a1b45);
  box('flat', -6.86, BF, -2.98, -6.8, BF + 0.78, -2.92, 0x15151c); box('flat', -6.86, BF, -1.48, -6.8, BF + 0.78, -1.42, 0x15151c);
  box('flat', -6.34, BF, -2.98, -6.28, BF + 0.78, -2.92, 0x15151c); box('flat', -6.34, BF, -1.48, -6.28, BF + 0.78, -1.42, 0x15151c);
  [-2.75, -1.6].forEach(dz => { box('flat', -6.82, BF + 0.84, dz - 0.18, -6.36, BF + 0.9, dz + 0.18, 0x1d1d26); box('flat', -6.74, BF + 0.9, dz - 0.14, -6.44, BF + 0.915, dz + 0.14, 0xc8ccd6); box('neon', -6.4, BF + 0.9, dz - 0.14, -6.38, BF + 0.93, dz - 0.1, CYAN); });
  box('flat', -6.72, BF + 0.84, -2.28, -6.44, BF + 0.9, -2.08, 0x15151c);                   // микшер
  // стол звукорежиссёра у акустической стены: миди-клавиатура, мониторы
  wall('flat', -4.75, BF + 0.74, -3.9, -4.1, BF + 0.8, -2.3, 0x5a3c8c);
  box('flat', -4.7, BF, -3.85, -4.66, BF + 0.74, -3.81, 0x15151c); box('flat', -4.7, BF, -2.39, -4.66, BF + 0.74, -2.35, 0x15151c);
  box('flat', -4.7, BF + 0.8, -3.5, -4.45, BF + 0.84, -2.7, 0x15151c);                    // корпус миди-клавиатуры
  box('flat', -4.6, BF + 0.84, -3.46, -4.47, BF + 0.855, -2.74, 0xf2f2f6);                // клавиши
  for (let k = 0; k < 9; k++) box('flat', -4.6, BF + 0.855, -3.44 + k * 0.08, -4.54, BF + 0.87, -3.4 + k * 0.08, 0x111111);
  box('flat', -4.4, BF + 0.8, -3.46, -4.3, BF + 0.84, -2.74, 0x22222c);                   // пэды
  box('flat', -4.15, BF + 0.8, -3.1, -4.1, BF + 1.3, -2.1, 0x15151c);                     // экраны
  box('neon', -4.16, BF + 0.88, -3.05, -4.15, BF + 1.26, -2.15, 0x2fd0ff);
  box('flat', -4.52, BF + 0.8, -3.9, -4.26, BF + 1.15, -3.65, 0x1a1a22); box('flat', -4.52, BF + 0.8, -2.55, -4.26, BF + 1.15, -2.3, 0x1a1a22);   // мониторы
  box('flat', -5.15, BF + 0.45, -3.3, -4.85, BF + 0.5, -2.95, 0x22222c); box('flat', -5.03, BF, -3.17, -4.97, BF + 0.45, -3.11, 0x22222c);
  // стойка с микрофоном и поп-фильтром
  box('flat', -5.95, BF, -1.02, -5.91, BF + 1.55, -0.98, 0x15151c);
  box('flat', -5.99, BF + 1.5, -1.08, -5.87, BF + 1.64, -0.94, 0x2a2a34);
  box('flat', -6.05, BF + 1.35, -0.82, -5.79, BF + 1.7, -0.8, 0x111111);
  block(-5.96, BF, -1.03, -5.9, BF + 1.7, -0.97);
  // колонка (источник музыки)
  wall('flat', -4.55, BF, -5.35, -4.1, BF + 1.15, -4.9, 0x1c1626);
  box('flat', -4.52, BF + 0.65, -4.92, -4.13, BF + 1.1, -4.9, 0x333040); box('neon', -4.46, BF + 0.7, -4.925, -4.19, BF + 1.05, -4.92, PINK);
  box('flat', -4.5, BF + 0.15, -4.92, -4.15, BF + 0.55, -4.9, 0x333040);
  const sp = new THREE.Group(); scene.add(sp);
  animated.speaker = sprite(sp, PINK, 1.8, -4.33, BF + 0.85, -4.7, 0.0);
  const g2 = new THREE.Group(); scene.add(g2);
  signPlane(g2, signCanvas('REVOLVER\nSOUND', '#ff2e97', 512, 256, 70), 2.0, 1.0, -5.3, BF + 1.85, ZB + 0.02, 0);
  sprite(g2, PINK, 4.5, -5.3, BF + 1.85, ZB + 0.3, 0.22);
  // гитара у стены
  box('flat', -6.84, BF, -0.9, -6.5, BF + 0.35, -0.8, 0xffb35a);
}

function buildChaikhana(root) {
  const X0 = 1.5, X1 = 14.0, ZF = -0.3, ZB = -8.0, Y0 = CF, Y1 = 7.4;
  // стены и фасад (дверь x 11.0–12.2)
  box('flat', X0 - 0.3, CF - 0.2, ZB - 0.3, X1 + 0.3, CF, 0, 0xb5763a);            // перекрытие (пол)
  floor(X0, X1, ZB, 0, CF);
  wall('flat', X0 - 0.3, CF, ZB - 0.3, X1 + 0.3, Y1 + 0.3, ZB, 0xe9a45e);           // задняя
  wall('flat', X0 - 0.3, CF, ZB, X0, Y1 + 0.3, ZF, 0xe9a45e);
  wall('flat', X1, CF, ZB, X1 + 0.3, Y1 + 0.3, ZF, 0xe9a45e);
  box('flat', X0 - 0.3, Y1, ZB, X1 + 0.3, Y1 + 0.3, ZF, 0x7a3a24);                  // потолок
  // фасадная стена: подоконник, окна-стекло, дверь
  wall('flat', X0, CF, ZF, 11.0, 5.1, 0, 0xd9884a); wall('flat', 12.2, CF, ZF, X1, 5.1, 0, 0xd9884a);
  box('glassWarm', X0, 5.1, ZF, 11.0, 7.0, ZF + 0.02, 0xffd08a); box('glassWarm', 12.2, 5.1, ZF, X1, 7.0, ZF + 0.02, 0xffd08a);
  box('flat', X0, 7.0, ZF, X1, 8.4, 0, 0xd9884a); box('flat', 11.0, 6.6, ZF, 12.2, 7.0, 0, 0xd9884a);
  for (let x = 3.0; x < 14; x += 1.5) if (x < 10.8 || x > 12.4) box('flat', x, 5.1, ZF - 0.01, x + 0.06, 7.0, 0.02, 0x7a3a24);
  // орнаментальная полоса и вывеска
  box('neon', X0, 7.05, 0.02, X1, 7.12, 0.08, ORANGE);
  const g = new THREE.Group(); scene.add(g);
  signPlane(g, signCanvas('ЧАЙХАНА', '#ffb347', 512, 128, 66), 3.4, 0.85, 12.8 + 0, 7.75, 0.16, 0);
  sprite(g, ORANGE, 5, 12.8, 7.75, 0.5, 0.2);
  // балкон
  floor(9.2, 16.0, 0, 2.6, CF);
  box('flat', 9.2, CF - 0.2, 0, 16.0, CF, 2.6, 0xb5763a);
  railing(9.2, 16.0, 2.6, CF, 0xe9a45e); railingZ(9.2, 0, 2.6, CF, 0xe9a45e);
  for (const [bx, bz] of [[10.1, 1.8], [14.5, 1.8]]) { box('flat', bx - 0.35, CF, bz - 0.35, bx + 0.35, CF + 0.3, bz + 0.35, 0x9b3a5a); block(bx - 0.4, CF, bz - 0.4, bx + 0.4, CF + 0.35, bz + 0.4); }
  // внешняя лестница вверх (x 16.0 → 22.7)
  const n = 24, sx0 = 16.0, sx1 = 22.7, dx = (sx1 - sx0) / n;
  for (let i = 0; i < n; i++) box('flat', sx0 + i * dx, 0, 0, sx0 + (i + 1) * dx, CF - CF * (i + 1) / n, 2.0, i % 2 ? 0xd9a05a : 0xeabd7e);
  ramp(sx0, sx1, 0, 2.0, CF, 0, n);
  block(sx0, 0, 2.0, sx1, CF + 1.0, 2.1);
  for (let i = 0; i <= n; i += 3) { const x = sx0 + i * dx, y = CF - CF * i / n; box('flat', x - 0.04, y, 1.98, x + 0.04, y + 1.0, 2.06, 0xe9a45e); }
  box('flat', sx0, CF + 0.95, 1.98, sx1, CF + 0.98, 2.06, 0xe9a45e);
  // гирлянда
  for (let i = 0; i < 12; i++) { const x = 9.4 + i * 0.58; box('neon', x, CF + 2.6 + Math.sin(i) * 0.08 - 0.02, 2.5, x + 0.1, CF + 2.7 + Math.sin(i) * 0.08, 2.6, i % 2 ? ORANGE : PINK); }

  /* ===== интерьер ===== */
  // ковры
  const rug = [[3.0, -3.0, 5.2, -1.0, 0xc2305a], [3.0, -6.4, 5.2, -4.4, 0x2a6d9b], [7.0, -3.0, 9.4, -1.0, 0x2a6d9b], [7.0, -6.4, 9.4, -4.4, 0xc2305a], [10.5, -6.4, 12.8, -3.4, 0x3a8a5a]];
  rug.forEach(([a, b, c, d, rc]) => { box('flat', a, CF + 0.005, b, c, CF + 0.02, d, rc); box('flat', a + 0.15, CF + 0.02, b + 0.15, c - 0.15, CF + 0.03, d - 0.15, 0xffe3a8); box('flat', a + 0.3, CF + 0.03, b + 0.3, c - 0.3, CF + 0.04, d - 0.3, rc); });
  // низкие столы с подушками
  [[4.1, -2.0], [4.1, -5.4], [8.2, -2.0], [8.2, -5.4], [11.65, -4.9]].forEach(([tx, tz]) => {
    wall('flat', tx - 0.55, CF + 0.3, tz - 0.55, tx + 0.55, CF + 0.38, tz + 0.55, 0x7a3a24);
    box('flat', tx - 0.5, CF, tz - 0.5, tx - 0.4, CF + 0.3, tz - 0.4, 0x5a2a18); box('flat', tx + 0.4, CF, tz + 0.4, tx + 0.5, CF + 0.3, tz + 0.5, 0x5a2a18);
    box('flat', tx - 0.18, CF + 0.38, tz - 0.18, tx + 0.18, CF + 0.5, tz + 0.18, 0xfff0d0);                       // блюдо
    [[-0.95, 0], [0.95, 0], [0, -0.95], [0, 0.95]].forEach(([ox, oz], i) => box('flat', tx + ox - 0.3, CF, tz + oz - 0.3, tx + ox + 0.3, CF + 0.14, tz + oz + 0.3, [0xc2305a, 0x2a8aa8, 0xe8a43a, 0x4a9a5a][i]));
  });
  // стойка у задней стены + мантышницы
  wall('flat', 2.0, CF, -7.7, 8.0, CF + 1.05, -6.9, 0x7a3a24);
  box('flat', 1.95, CF + 1.05, -7.75, 8.05, CF + 1.12, -6.85, 0xe9c48a);
  [3.0, 4.6, 6.2].forEach((sx, i) => { for (let k = 0; k < 3; k++) box('flat', sx - 0.4, CF + 1.12 + k * 0.2, -7.55, sx + 0.4, CF + 1.3 + k * 0.2, -7.0, k % 2 ? 0xe8c070 : 0xd9a85a); box('flat', sx - 0.42, CF + 1.72, -7.57, sx + 0.42, CF + 1.8, -6.98, 0x8a5a2a); });
  // полки и чайники
  box('flat', 1.8, CF + 2.2, -7.95, 13.7, CF + 2.28, -7.55, 0x7a3a24);
  for (let i = 0; i < 9; i++) { const px = 2.2 + i * 1.25; box('flat', px, CF + 2.28, -7.85, px + 0.32, CF + 2.62, -7.6, i % 2 ? 0x2a8aa8 : 0xc2305a); box('flat', px + 0.08, CF + 2.62, -7.78, px + 0.24, CF + 2.7, -7.68, 0xe8c070); }
  // доска с меню на задней стене
  signPlane(g, signCanvas('МАНТЫ\nПЛОВ · ЧАЙ', '#ffe3a8', 512, 256, 62, '#2a1b18'), 2.4, 1.2, 11.2, CF + 1.9, ZB + 0.02, 0);
  // фонари
  [[3.5, -3.7], [7.5, -3.7], [9.0, -3.7], [5.5, -6.2], [9.5, -1.6], [3.0, -1.2]].forEach(([lx, lz]) => {
    box('flat', lx - 0.01, Y1 - 1.2, lz - 0.01, lx + 0.01, Y1, lz + 0.01, 0x2a1b18);
    box('neon', lx - 0.14, Y1 - 1.55, lz - 0.14, lx + 0.14, Y1 - 1.2, lz + 0.14, ORANGE);
    sprite(root, ORANGE, 2.2, lx, Y1 - 1.4, lz, 0.4);
  });
  // пар из мантышниц
  for (let i = 0; i < 3; i++) animated.steam.push(sprite(root, 0xffffff, 0.9, 3.0 + i * 1.6, CF + 2.1, -7.2, 0.35));
}

// ---------- машины ----------
function buildCars() {
  const colors = [0xff2e97, 0x19f0ff, 0xffe36a, 0xffffff, 0x9b5cff, 0xff9a3c, 0x7cff6b];
  const lanes = [7.1, 10.6, 14.1];
  for (let i = 0; i < 9; i++) {
    const b = mkBatch(), c = colors[i % colors.length];
    box(b, -2.1, 0.28, -0.9, 2.1, 0.85, 0.9, c);
    box(b, -1.0, 0.85, -0.8, 1.0, 1.35, 0.8, 0x1b1a3a);
    box(b, 2.1, 0.5, -0.7, 2.14, 0.7, -0.4, YEL); box(b, 2.1, 0.5, 0.4, 2.14, 0.7, 0.7, YEL);
    box(b, -2.14, 0.5, -0.7, -2.1, 0.7, -0.4, 0xff2020); box(b, -2.14, 0.5, 0.4, -2.1, 0.7, 0.7, 0xff2020);
    box(b, -1.5, 0.0, -0.95, -0.8, 0.4, 0.95, 0x15151c); box(b, 0.9, 0.0, -0.95, 1.6, 0.4, 0.95, 0x15151c);
    const m = new THREE.Mesh(toGeo(b), MAT.flat); m.frustumCulled = false;
    const lane = lanes[i % 3];
    m.position.set(-90 + i * 21, 0, lane); m.userData = { v: 7 + (i % 4) * 2.2, lane };
    scene.add(m); animated.cars.push(m);
  }
}

function toGeo(b) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(b.p, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(b.c, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(b.u, 2));
  return g;
}

// ---------- небо ----------
function buildSky() {
  const g = new THREE.SphereGeometry(500, 16, 10);
  const pos = g.attributes.position, colors = [];
  const top = new THREE.Color(0x1b0a56), mid = new THREE.Color(0xd23a9a), hor = new THREE.Color(0xffa040), low = new THREE.Color(0xff7fb0);
  for (let i = 0; i < pos.count; i++) {
    const h = pos.getY(i) / 500, c = new THREE.Color();
    if (h > 0.45) c.copy(top).lerp(mid, 1 - (h - 0.45) / 0.55); else if (h > 0.08) c.copy(mid).lerp(hor, 1 - (h - 0.08) / 0.37); else c.copy(hor).lerp(low, Math.min(1, (0.08 - h) / 0.2));
    colors.push(c.r, c.g, c.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const sky = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  sky.renderOrder = -2; scene.add(sky);
  // солнце в полоску
  const c = cv(256, 256), x = c.getContext('2d');
  const gr = x.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#fff17a'); gr.addColorStop(1, '#ff4fa0');
  x.fillStyle = gr; x.beginPath(); x.arc(128, 128, 126, 0, 7); x.fill();
  x.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 6; i++) x.fillRect(0, 130 + i * 20, 256, 3 + i * 2.6);
  const sun = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), new THREE.MeshBasicMaterial({ map: tex(c, false), transparent: true, fog: false, depthWrite: false }));
  sun.position.set(-380, 120, 90); sun.lookAt(0, 20, 0); sun.renderOrder = -1; scene.add(sun);
  scene.userData.sky = sky;
}

function buildWorld() {
  buildMaterials();
  GLOW.map = glowTex();
  const root = new THREE.Group(); scene.add(root);
  buildSky();
  buildStreet(root);
  buildFacade(root);
  buildEntrance(root);
  buildBasement(root);
  buildChaikhana(root);
  buildCars();
  for (const k of Object.keys(BATCH)) {
    const m = new THREE.Mesh(toGeo(BATCH[k]), MAT[k]);
    m.frustumCulled = false; if (k.startsWith('glass')) m.renderOrder = 5; scene.add(m);
  }
}

/* ============================================================
   ИГРОК, ВВОД, РЕНДЕР
   ============================================================ */
const P = { x: 15, z: 2.6, feet: 0, eye: 1.65, yaw: Math.PI / 2 + 0.12, pitch: -0.02, bob: 0 };
const ZONES = [
  { id: 'podcast', t: 'REVOLVER PODCAST', s: '3,76 × 5,14 м · потолок 2,96 м', occ: 0.55, test: (x, z, y) => y < -1.5 && x > -3.76 && x < 0 && z < -0.3 },
  { id: 'sound', t: 'REVOLVER SOUND', s: '2,90 × 5,14 м · комната записи', occ: 0, test: (x, z, y) => y < -1.5 && x < -4.01 && z < -0.3 },
  { id: 'stairs', t: 'Спуск в студию', s: 'Фрунзе, 49', occ: 0.8, test: (x, z, y) => y < -0.2 },
  { id: 'chai', t: 'Чайхана', s: 'Второй этаж · заходи, садись', occ: 1, test: (x, z, y) => y > 3.5 && z < -0.3 },
  { id: 'balcony', t: 'Балкон над улицей', s: 'Чайхана', occ: 1, test: (x, z, y) => y > 3.5 },
  { id: 'street', t: 'Фрунзе, 49', s: 'Новосибирск · летний вечер', occ: 0.95, test: () => true }
];
function zoneNow() { const y = P.feet; return ZONES.find(z => z.test(P.x, P.z, y)); }

let renderer, camera, started = false, muted = false;
const keys = {};
const mv = { x: 0, y: 0 };      // стик
let locked = false;

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setPixelRatio(pr); renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}
let pr = 1, prMax = 1, ema = 16;

function step(dt) {
  let fx = 0, fz = 0;
  if (keys.KeyW || keys.ArrowUp) fz += 1; if (keys.KeyS || keys.ArrowDown) fz -= 1;
  if (keys.KeyD || keys.ArrowRight) fx += 1; if (keys.KeyA || keys.ArrowLeft) fx -= 1;
  fx += mv.x; fz += -mv.y;
  const len = Math.hypot(fx, fz); if (len > 1) { fx /= len; fz /= len; }
  const run = keys.ShiftLeft || keys.ShiftRight;
  const sp = (run ? 5.4 : 2.9) * dt;
  const sn = Math.sin(P.yaw), cs = Math.cos(P.yaw);
  const dx = (-sn * fz + cs * fx) * sp, dz = (-cs * fz - sn * fx) * sp;
  const r = 0.28;
  if (dx || dz) {
    for (const [mx, mz] of [[dx, 0], [0, dz]]) {
      const nx = P.x + mx, nz = P.z + mz;
      const g = groundAt(nx, nz, P.feet);
      if (g === null || hitsSolid(nx, nz, g, r)) continue;
      P.x = nx; P.z = nz; P.feet += (g - P.feet) * Math.min(1, dt * 14);
    }
    P.bob += dt * (run ? 11 : 8);
  }
  const g2 = groundAt(P.x, P.z, P.feet); if (g2 !== null) P.feet += (g2 - P.feet) * Math.min(1, dt * 14);
  P.eye = 1.65 + Math.sin(P.bob) * ((dx || dz) ? 0.025 : 0);
}

/* ---------- звук: чем ближе к колонке, тем громче ---------- */
const A = { ctx: null, gain: null, lp: null, pan: null, el: $('#lofi') };
function audioInit() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  try {
    A.ctx = new AC();
    const src = A.ctx.createMediaElementSource(A.el);
    A.lp = A.ctx.createBiquadFilter(); A.lp.type = 'lowpass'; A.lp.frequency.value = 400; A.lp.Q.value = 0.5;
    A.gain = A.ctx.createGain(); A.gain.gain.value = 0;
    if (A.ctx.createStereoPanner) { A.pan = A.ctx.createStereoPanner(); src.connect(A.lp); A.lp.connect(A.pan); A.pan.connect(A.gain); }
    else { src.connect(A.lp); A.lp.connect(A.gain); }
    A.gain.connect(A.ctx.destination);
  } catch (e) { A.ctx = null; }
}
let curZone = null, audioDbg = { d: 0, g: 0, f: 0 };
function updateAudio(zone, t) {
  const dx = P.x - SPK.x, dz = P.z - SPK.z, dy = P.feet + 1.6 - SPK.y;
  const d = Math.hypot(dx, dy, dz);
  const near = 1 / (1 + Math.pow(d / 2.1, 2));
  const occ = zone.occ;
  const g = (0.05 + 0.95 * near) * (1 - 0.82 * occ) * (muted ? 0 : 1);
  const f = Math.max(260, 17000 * Math.exp(-0.16 * d) * (1 - 0.88 * occ));
  audioDbg = { d: +d.toFixed(2), g: +g.toFixed(3), f: Math.round(f) };
  if (A.ctx) {
    A.gain.gain.setTargetAtTime(g * 0.95, A.ctx.currentTime, 0.12);
    A.lp.frequency.setTargetAtTime(f, A.ctx.currentTime, 0.12);
    if (A.pan) {
      const rx = Math.cos(P.yaw), rz = -Math.sin(P.yaw);                 // вектор «вправо» от камеры
      const s = (-dx * rx + -dz * rz) / Math.max(d, 0.5);                // проекция направления на колонку
      A.pan.pan.setTargetAtTime(Math.max(-0.7, Math.min(0.7, s * 0.7)) * (1 - occ), A.ctx.currentTime, 0.1);
    }
  } else A.el.volume = Math.max(0, Math.min(1, g));
  if (animated.speaker) animated.speaker.material.opacity = muted ? 0 : 0.25 * near * (0.7 + 0.3 * Math.sin(t * 6));
}

/* ---------- цикл ---------- */
let last = 0, lastZoneId = '', toastT = 0, accT = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
  const t = now / 1000;
  if (started) step(dt);
  const zone = zoneNow();
  if (zone.id !== lastZoneId) { lastZoneId = zone.id; $('#zone').innerHTML = `${zone.t}<span>${zone.s}</span>`; }
  if (started) updateAudio(zone, t);
  for (const c of animated.cars) { c.position.x += c.userData.v * dt; if (c.position.x > 110) c.position.x = -110; }
  animated.steam.forEach((s, i) => { s.position.y = CF + 2.1 + ((t * 0.35 + i * 0.33) % 1) * 0.8; s.material.opacity = 0.35 * (1 - ((t * 0.35 + i * 0.33) % 1)); });
  camera.position.set(P.x, P.feet + P.eye, P.z); camera.rotation.set(P.pitch, P.yaw, 0, 'YXZ');
  scene.userData.sky.position.copy(camera.position);
  renderer.render(scene, camera);
  // адаптивное разрешение
  ema += (dt * 1000 - ema) * 0.05; accT += dt;
  if (accT > 1.2) {
    accT = 0;
    if (ema > 27 && pr > 0.5) { pr = Math.max(0.5, pr - 0.15); resize(); }
    else if (ema < 15 && pr < prMax) { pr = Math.min(prMax, pr + 0.05); resize(); }
  }
}

/* ---------- ввод ---------- */
function toast(msg, ms = 3200) { const el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), ms); }
function bindInput() {
  addEventListener('keydown', e => { keys[e.code] = true; if (e.code === 'KeyM') toggleMute(); });
  addEventListener('keyup', e => { keys[e.code] = false; });
  addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
  const cvs = renderer.domElement;
  cvs.addEventListener('click', () => { if (!TOUCH && started && !locked) cvs.requestPointerLock?.(); });
  document.addEventListener('pointerlockchange', () => { locked = document.pointerLockElement === cvs; });
  document.addEventListener('mousemove', e => { if (!locked) return; P.yaw -= e.movementX * 0.0022; P.pitch = Math.max(-1.4, Math.min(1.4, P.pitch - e.movementY * 0.0022)); });
  // тач: левый стик — ходьба, правая зона — взгляд
  const tl = $('#tl'), tr = $('#tr'), stick = $('#stick'), knob = stick.firstElementChild;
  let sid = null, sx = 0, sy = 0, lid = null, lx = 0, ly = 0;
  tl.addEventListener('pointerdown', e => { sid = e.pointerId; tl.setPointerCapture(sid); sx = e.clientX; sy = e.clientY; stick.style.display = 'block'; stick.style.left = sx + 'px'; stick.style.top = (sy - tl.getBoundingClientRect().top) + 'px'; });
  tl.addEventListener('pointermove', e => { if (e.pointerId !== sid) return; let dx = (e.clientX - sx) / 50, dy = (e.clientY - sy) / 50; const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; } mv.x = dx; mv.y = dy; knob.style.transform = `translate(${dx * 40}px,${dy * 40}px)`; });
  const endS = e => { if (e.pointerId !== sid) return; sid = null; mv.x = mv.y = 0; stick.style.display = 'none'; knob.style.transform = ''; };
  tl.addEventListener('pointerup', endS); tl.addEventListener('pointercancel', endS);
  tr.addEventListener('pointerdown', e => { lid = e.pointerId; tr.setPointerCapture(lid); lx = e.clientX; ly = e.clientY; });
  tr.addEventListener('pointermove', e => { if (e.pointerId !== lid) return; P.yaw -= (e.clientX - lx) * 0.0055; P.pitch = Math.max(-1.3, Math.min(1.3, P.pitch - (e.clientY - ly) * 0.0045)); lx = e.clientX; ly = e.clientY; });
  const endL = e => { if (e.pointerId === lid) lid = null; };
  tr.addEventListener('pointerup', endL); tr.addEventListener('pointercancel', endL);
  $('#mute').addEventListener('click', toggleMute);
  addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => { if (document.hidden) A.el.pause(); else if (started && !muted) A.el.play().catch(() => {}); });
}
function toggleMute() { muted = !muted; $('#mute').textContent = muted ? '✕♪' : '♪'; $('#mute').style.opacity = muted ? 0.55 : 1; }

/* ---------- старт ---------- */
async function init() {
  try {
    renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  } catch (e) { $('#go').textContent = 'WebGL недоступен'; return; }
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  prMax = TOUCH ? 1 : Math.min(devicePixelRatio || 1, 1.25); pr = prMax;
  $('#stage').appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(74, 1, 0.08, 520);
  $('.sun'); $('#bar i').style.width = '20%';
  try { await Promise.race([Promise.all([document.fonts.load('700 60px Unbounded', 'REVOLVER ЧАЙХАНА ЗАПИСЬ'), document.fonts.load('700 60px Manrope', 'М')]), new Promise(r => setTimeout(r, 2500))]); } catch (e) {}
  $('#bar i').style.width = '55%';
  await new Promise(r => setTimeout(r, 20));
  buildWorld();
  resize(); bindInput();
  renderer.render(scene, camera);
  $('#bar i').style.width = '100%';
  const go = $('#go'); go.disabled = false; go.textContent = 'Выйти на улицу';
  go.addEventListener('click', () => {
    audioInit(); A.el.play().catch(() => {}); if (A.ctx?.state === 'suspended') A.ctx.resume();
    document.body.classList.add('play'); started = true;
    toast('Спустись по лестнице к неоновой стрелке. Музыка из студии. Этажом выше — чайхана.', 5200);
    if (!TOUCH) renderer.domElement.requestPointerLock?.();
  });
  requestAnimationFrame(frame);
}
init();

// отладка и тесты
window.__t = {
  P, audio: () => audioDbg, zone: () => zoneNow().id,
  tp(n) {
    const s = { street: [15, 2.6, 0, Math.PI / 2 + 0.12, -0.02], top: [8.6, 0.8, 0, Math.PI / 2, -0.2], stair: [5.5, 0.8, -1.5, Math.PI / 2, -0.12], landing: [1.0, 0.8, -3, Math.PI / 2, 0],
      podcast: [-0.7, -0.8, -3, 0, 0], podcast2: [-1.9, -4.9, -3, Math.PI, 0], sound: [-5.4, -0.8, -3, 0.15, -0.05], sound2: [-6.5, -1.0, -3, -0.7, -0.08], sound3: [-4.4, -3.2, -3, 1.55, -0.1],
      chai: [11.6, -0.7, CF, 0, 0], chai2: [3.0, -1.0, CF, -0.5, -0.05], balcony: [12.5, 1.9, CF, Math.PI / 2 + 0.9, -0.05], stairchai: [20.8, 1.3, 0.55, Math.PI / 2, 0.1] }[n];
    P.x = s[0]; P.z = s[1]; P.feet = s[2]; P.yaw = s[3]; P.pitch = s[4];
  },
  start() { started = true; document.body.classList.add('play'); },
  // тест: пройти по точкам, вернуть где остановились
  sim(pts) {
    const out = [];
    for (const [tx, tz] of pts) {
      let n = 0;
      while (n++ < 1500) {
        const dx = tx - P.x, dz = tz - P.z;
        if (Math.hypot(dx, dz) < 0.12) break;
        P.yaw = Math.atan2(-dx, -dz); keys.KeyW = true; step(0.03);
      }
      keys.KeyW = false;
      out.push([tx, tz, +P.x.toFixed(2), +P.z.toFixed(2), +P.feet.toFixed(2), n < 1500]);
    }
    return out;
  }
};
