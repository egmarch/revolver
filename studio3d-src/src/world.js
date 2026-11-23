import * as THREE from 'three';
import woodUrl from './tex/wood.jpg';
import * as TX from './tex.js';
import * as ART from './art.js';
import { buildPalms } from './palm.js';
import { loadCarModels, loadProp } from './models.js';

export const EYE = 1.62;
export const PLAYER_R = 0.3;
export const STAIR = { x0: -2.0, x1: 2.8, z0: 5.6, z1: 7.1, n: 16, rise: 3.0 };

// --- логика высоты (ступени идут вдоль X, вверх на восток) ---
let CUR_Y = 0;                                 // этаж игрока: чайхана (y≈3) лежит над тамбуром и залом (y=0)
export function setLevel(y) { CUR_Y = y; }
const CHR = [-3.5, 3.0, 0.3, 5.6];   // чайхана только над студией: от западной стены тамбура до восточного торца
export const inChai = (x, z) => x >= CHR[0] && x <= CHR[1] && z >= CHR[2] && z <= CHR[3];
export function groundY(x, z) {
  if (CUR_Y > 1.5 && inChai(x, z)) return 3.07;
  if (z >= 5.5 && z <= 7.2 && x > -2.0 && x < 2.8) {
    const k = Math.floor((x - STAIR.x0) / ((STAIR.x1 - STAIR.x0) / STAIR.n));
    return (k + 1) * (STAIR.rise / STAIR.n);
  }
  if (CUR_Y > 1.5) return 3.0;                                  // верхний уровень: тротуары вокруг дома (в т.ч. у Фрунзе)
  if (z >= 5.5 && z < 7.4 && x >= -3.4 && x <= -2.0) return 0;   // площадка внизу лестницы
  if (z >= 5.5) return 3.0;                                     // улица (поднялись по лестнице)
  return 0;
}

// центры допустимых положений (уже отступ от стен)
export const WALK = [
  [3.1, 50, 5.65, 10.6, 'U'],            // тротуар вдоль восточного фасада (Ольги Жилиной)
  [-14.7, 3.4, 7.8, 10.6, 'U'],          // тротуар южнее парапета спуска
  [-14.7, -3.5, 5.65, 7.8, 'U'],         // тротуар западнее спуска, угол
  [-14.7, -11.5, -60, 5.65, 'U'],        // тротуар вдоль южного фасада (Фрунзе)
  [-2.9, 3.4, 5.9, 6.8],                 // лестница и площадка
  [-2.95, -2.25, 4.9, 6.2],              // дверь площадка-тамбур
  [-3.1, -0.5, 2.5, 5.1, 'D'],           // тамбур
  [-0.6, 0.6, 3.25, 3.65, 'D'],          // дверь тамбур-зал
  [0.3, 3.46, 0.3, 4.84, 'D'],           // зал 3,76 x 5,14
  [3.4, 4.4, 3.25, 3.65, 'D'],           // дверь зал-студия (акустическая стена 25 см)
  [4.31, 6.61, 0.3, 4.84, 'D'],          // студия звука 2,90 x 5,14
  [-3.1, 2.7, 0.7, 5.1, 'U'],            // чайхана
  [-3.9, -3.0, 0.9, 2.3, 'U'],           // дверь чайханы (западная стена, со стороны тротуара)
  [-11.5, -3.7, 0.5, 5.65, 'U']          // тротуар-площадка перед дверью чайханы
];
// препятствия (сырые прямоугольники x0,x1,z0,z1)
const OBST_RAW = [
  [0.21, 3.41, 0.0, 0.7],     // стеллаж
  [0.2, 0.85, 0.75, 1.35],    // ЭЛТ-стойка
  [1.43, 2.33, 1.14, 2.84],   // стол
  [0.85, 1.35, 1.74, 2.24],   // кресло
  [2.41, 2.91, 1.74, 2.24],   // кресло
  [3.07, 3.53, 1.33, 1.97],   // столик с чемоданом
  [3.45, 3.76, 2.2, 2.7],     // гитара Cort на стойке
  [2.88, 3.34, 0.78, 1.22],   // растение
  [0.4, 0.84, 1.83, 2.27],    // растение у ЭЛТ
  [0.38, 0.82, 4.33, 4.77],   // растение
  [3.22, 3.72, 4.45, 4.95],   // колонка
  [0.93, 2.83, 4.18, 5.0],    // чёрный диван
  [4.36, 6.56, 0.0, 0.8],     // пульт звукорежиссёра (у северной стены)
  [5.46, 5.96, 1.05, 1.55],   // кресло оператора (Паша)
  [5.96, 6.46, 3.99, 4.49],   // стойка микрофона
  [4.06, 5.96, 4.3, 5.0],     // белый диван
  [4.46, 5.36, 3.78, 4.24],   // стеклянный столик
  [4.08, 4.64, 0.54, 2.14],   // стол с вертушками (у западной стены)
  [6.6, 6.9, 2.15, 2.6],      // стойка со Stratocaster
  // чайхана (верхний этаж)
  [-2.25, -1.15, 3.8, 4.6, 'U'], [-2.15, -1.05, 1.9, 2.7, 'U'], [0.45, 1.55, 3.2, 4.0, 'U'],
  [-0.7, 2.7, 0.3, 1.0, 'U'],          // стойка
  [2.2, 2.6, 4.8, 5.2, 'U'], [-3.2, -2.8, 0.6, 1.0, 'U']
];
export const OBST = OBST_RAW.map(o => o[4] ? o : [o[0], o[1], o[2], o[3], 'D']);

const ZONE_NAMES = {
  street: ['Улица · Фрунзе 49', 'Вечер. Вход — вниз по лестнице. Чайхана — на первом этаже, слева от спуска'],
  chai: ['Чайхана', 'Первый этаж дома 49/3 · заходи и садись'],
  entry: ['Тамбур', 'Направо дверь в студию, прямо — школа диджеев (ремонт)'],
  hall: ['REVOLVER PODCAST · 19 м²', 'Зал для видеоподкастов · 3,76 × 5,14 м'],
  studio: ['REVOLVER SOUND · 15 м²', 'Комната звукозаписи · 2,90 × 5,14 м']
};
export { ZONE_NAMES };

export function zoneAt(x, z, y = 0) {
  if (y > 1.5) return inChai(x, z) ? 'chai' : 'street';
  if (z > 5.3 && (x > -1.9 || x < -3.5 || z > 7.4)) return 'street';
  if (x < -0.1) return 'entry';
  if (x < 3.9) return 'hall';
  return 'studio';
}

export const TELEPORTS = {
  1: { x: -10.2, z: 9.2, yaw: -1.12, pitch: -0.06, lv: 3 },   // старт: угол у чайханы, вдалеке виден спуск
  4: { x: -5.2, z: 1.6, yaw: -1.5708, pitch: -0.05, lv: 3 },
  2: { x: 1.3, z: 4.1, yaw: -0.3, pitch: -0.05 },
  3: { x: 6.2, z: 4.55, yaw: 0.35, pitch: -0.1 }
};

const LIGHTS = {
  chai: [
    { p: [-1.8, 5.6, 2.6], c: 0xffa040, i: 16, d: 9 },
    { p: [0.6, 5.6, 3.6], c: 0xffb060, i: 16, d: 9 },
    { p: [1.8, 5.4, 2.0], c: 0xffa850, i: 12, d: 8 },
    { p: [-3.0, 4.4, 1.4], c: 0xff7040, i: 6, d: 5 },
    { p: [-1.2, 5.0, 4.8], c: 0xffd9a0, i: 8, d: 6 },
    { p: [0.8, 4.2, 1.0], c: 0xffe3b8, i: 7, d: 5 }
  ],
  street: [
    { p: [-60, 40, 30], c: 0xffa060, i: 5200, d: 200 },
    { p: [3.4, 8.0, 12.0], c: 0xff7ac0, i: 160, d: 38 },
    { p: [-22, 9.0, 8.0], c: 0x7ae8ff, i: 120, d: 34 },
    { p: [22, 9.0, 8.0], c: 0xffc47a, i: 120, d: 34 },
    { p: [-0.9, 5.4, 6.35], c: 0xbfd2ff, i: 18, d: 8 },
    { p: [5.8, 4.8, 6.4], c: 0xff5a4a, i: 40, d: 12 }
  ],
  entry: [
    { p: [-1.8, 2.4, 3.8], c: 0xffe3b8, i: 8, d: 6 },
    { p: [-2.6, 2.3, 6.4], c: 0xbfd2ff, i: 8, d: 6 },
    { p: [-0.9, 1.8, 3.4], c: 0xd070ff, i: 4, d: 5 },
    { p: [-3.1, 1.6, 3.0], c: 0xff2bd6, i: 3.5, d: 4 },
    { p: [-1.2, 2.4, 6.4], c: 0xbfd2ff, i: 4, d: 5 },
    { p: [0.6, 2.0, 3.45], c: 0xffffff, i: 2, d: 4 }
  ],
  hall: [
    { p: [1.9, 2.55, 2.0], c: 0xdfe8ff, i: 9, d: 9 },
    { p: [1.9, 1.4, 0.9], c: 0x3a62ff, i: 5, d: 4.5 },
    { p: [2.8, 2.3, 2.4], c: 0xe6ffe8, i: 6, d: 6 },
    { p: [0.8, 1.6, 2.0], c: 0xff6a3a, i: 4, d: 4.5 },
    { p: [1.5, 2.4, 4.0], c: 0xffffff, i: 4, d: 6 },
    { p: [0.4, 2.0, 3.45], c: 0xd070ff, i: 2, d: 4 }
  ],
  studio: [
    { p: [4.91, 1.7, 1.44], c: 0x5aa0ff, i: 16, d: 6 },
    { p: [5.81, 2.5, 2.94], c: 0xcfe0ff, i: 18, d: 7 },
    { p: [6.21, 1.4, 0.54], c: 0x3a58ff, i: 9, d: 5 },
    { p: [5.31, 2.6, 4.34], c: 0x9ab8ff, i: 12, d: 7 },
    { p: [4.51, 1.4, 3.94], c: 0xff9a60, i: 2.5, d: 3 },
    { p: [6.41, 1.0, 2.14], c: 0xff2b2b, i: 3, d: 3 }
  ]
};
const FOG = {
  chai: [0x2a1810, 0.035, 0.6],
  street: [0xe0709c, 0.0085, 0.8],
  entry: [0x120a1a, 0.05, 0.55],
  hall: [0x05060a, 0.05, 0.5],
  studio: [0x03040a, 0.055, 0.45]
};

export function buildWorld(opts = {}) {
  const low = !!opts.low;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070a14);
  scene.fog = new THREE.FogExp2(0x0b1020, 0.022);

  const G = {};
  ['street', 'stairs', 'entry', 'hall', 'studio', 'chai'].forEach(n => { G[n] = new THREE.Group(); G[n].name = n; scene.add(G[n]); });

  // ---------- материалы ----------
  const M = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.85, metalness: 0 }, o));
  const rep = { repeat: [1, 1] };
  const T = {
    brick: TX.toTex(TX.brickCanvas(1), rep),
    brickLight: TX.toTex(TX.brickCanvas(2, [92, 84, 76]), rep),
    pave: TX.toTex(TX.paveCanvas(), rep),
    asphalt: TX.toTex(TX.asphaltCanvas(), rep),
    concrete: TX.toTex(TX.concreteCanvas(4, 74), rep),
    concreteDark: TX.toTex(TX.concreteCanvas(7, 34), rep),
    curtain: TX.toTex(TX.curtainCanvas(), rep),
    blueCarpet: TX.toTex(TX.carpetBlueCanvas(), rep),
    woodFloor: TX.toTex(TX.woodFloorCanvas(), rep),
    foam: TX.toTex(TX.foamCanvas(), rep),
    news: TX.toTex(TX.newsprintCanvas(), rep),
    softbox: TX.toTex(TX.softboxCanvas()),
    plaid: TX.toTex(TX.plaidCanvas()),
    ball: TX.toTex(TX.ballCanvas()),
    dollar: TX.toTex(TX.dollarCanvas()),
    daw: TX.toTex(TX.dawCanvas()),
    grain: TX.toTex(TX.woodGrainCanvas(), rep),
    leather: TX.toTex(TX.leatherCanvas(), rep),
    glow: TX.toTex(TX.glowCanvas()),
    carpetRed: TX.toTex(TX.carpetCanvas(), rep),
    tableWood: TX.imgTex(woodUrl)
  };
  T.tableWood.wrapS = T.tableWood.wrapT = THREE.ClampToEdgeWrapping;

  // фасадная текстура (стекло и коричневые рамы)
  const facadeC = TX.cv(512, 512); {
    const x = facadeC.getContext('2d'), r = TX.rng(51);
    x.fillStyle = '#1d1511'; x.fillRect(0, 0, 512, 512);
    for (let j = 0; j < 2; j++) for (let i = 0; i < 4; i++) {
      const g = x.createLinearGradient(i * 128, j * 256, i * 128 + 128, j * 256 + 256);
      g.addColorStop(0, '#2a3338'); g.addColorStop(0.5, '#4a2a22'); g.addColorStop(1, '#171a20');
      x.fillStyle = g; x.fillRect(i * 128 + 8, j * 256 + 8, 112, 240);
      x.fillStyle = `rgba(255,160,100,${0.1 + r() * 0.12})`; x.fillRect(i * 128 + 14, j * 256 + 120, 100, 100);
      x.fillStyle = 'rgba(255,255,255,.07)'; x.beginPath(); x.moveTo(i * 128 + 8, j * 256 + 8); x.lineTo(i * 128 + 70, j * 256 + 8); x.lineTo(i * 128 + 8, j * 256 + 120); x.fill();
    }
  }
  T.facade = TX.toTex(facadeC, rep);

  const mat = {
    brick: M(0xffffff, { map: T.brick, roughness: 0.95 }),
    brickLight: M(0xffffff, { map: T.brickLight, roughness: 0.95 }),
    pave: M(0xb8b0a8, { map: T.pave, roughness: 0.9 }),
    asphalt: M(0xffffff, { map: T.asphalt, roughness: 0.55, metalness: 0.1 }),
    concrete: M(0xffffff, { map: T.concrete }),
    concreteDark: M(0xffffff, { map: T.concreteDark, color: 0x8a8a8a }),
    curtain: M(0xffffff, { map: T.curtain, roughness: 1 }),
    blueCarpet: M(0xffffff, { map: T.blueCarpet, roughness: 1 }),
    woodFloor: M(0xffffff, { map: T.woodFloor, roughness: 0.6 }),
    foam: M(0xffffff, { map: T.foam, roughness: 1 }),
    news: M(0xffffff, { map: T.news, roughness: 0.9 }),
    carpetRed: M(0xffffff, { map: T.carpetRed, roughness: 1, emissive: 0x330806, emissiveMap: T.carpetRed, emissiveIntensity: 0.12 }),
    facade: M(0xffffff, { map: T.facade, roughness: 0.4, metalness: 0.2, emissive: 0xffffff, emissiveMap: T.facade, emissiveIntensity: 0.12 }),
    black: M(0x0a0a0c, { roughness: 0.9 }),
    ceil: M(0x6a6078, { roughness: 1, emissive: 0x3a2a55, emissiveIntensity: 1 }),
    steel: M(0x8a8f96, { roughness: 0.4, metalness: 0.85 }),
    darkSteel: M(0x2a2d31, { roughness: 0.5, metalness: 0.8 }),
    white: M(0xe6e4dc, { roughness: 0.6 }),
    cream: M(0xe9e0c6, { map: T.leather, roughness: 0.45 }),
    green: M(0x1aa04a, { roughness: 0.9 }),
    plastic: M(0x1a1b1d, { roughness: 0.5 }),
    grayVel: M(0x59616b, { roughness: 1 }),
    wood: M(0xffffff, { map: T.grain, roughness: 0.7 }),
    leaf: M(0x2f8a3a, { roughness: 0.8, side: THREE.DoubleSide, emissive: 0x0a2a10, emissiveIntensity: 0.6 }),
    leaf2: M(0x1d6b2c, { roughness: 0.8, side: THREE.DoubleSide, emissive: 0x08200c, emissiveIntensity: 0.6 }),
    ivy: M(0x2e7d32, { roughness: 0.9, emissive: 0x0a2a10, emissiveIntensity: 0.6 }),
    gold: M(0xc9a23a, { roughness: 0.35, metalness: 0.9 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x8aa8c8, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.18, depthWrite: false })
  };
  const emi = (c, k = 1) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), toneMapped: false });
  const BOXG = new THREE.BoxGeometry(1, 1, 1);

  // ---------- геометрические помощники ----------
  function texBox(parent, x0, y0, z0, x1, y1, z1, mats, tile = 1) {
    const w = x1 - x0, h = y1 - y0, d = z1 - z0;
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.attributes.uv;
    const tu = Array.isArray(tile) ? tile[0] : tile, tv = Array.isArray(tile) ? tile[1] : tile;
    const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      uv.setXY(i, uv.getX(i) * dims[f][0] / tu, uv.getY(i) * dims[f][1] / tv);
    }
    const m = new THREE.Mesh(g, mats);
    m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    parent.add(m);
    return m;
  }
  const B = (parent, w, h, d, m, x, y, z, ry = 0, rx = 0, rz = 0) => {
    const me = new THREE.Mesh(BOXG, m);
    me.scale.set(w, h, d); me.position.set(x, y, z);
    me.rotation.set(rx, ry, rz);
    parent.add(me); return me;
  };
  const CYL = (parent, rt, rb, h, m, x, y, z, seg = low ? 12 : 28, rx = 0, rz = 0) => {
    const me = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
    me.position.set(x, y, z); me.rotation.set(rx, 0, rz); parent.add(me); return me;
  };
  const SPH = (parent, r, m, x, y, z, sx = 1, sy = 1, sz = 1) => {
    const me = new THREE.Mesh(new THREE.SphereGeometry(r, low ? 12 : 32, low ? 8 : 20), m);
    me.position.set(x, y, z); me.scale.set(sx, sy, sz); parent.add(me); return me;
  };
  const FACE = { '+x': [0, Math.PI / 2, 0], '-x': [0, -Math.PI / 2, 0], '+z': [0, 0, 0], '-z': [0, Math.PI, 0], '+y': [-Math.PI / 2, 0, 0], '-y': [Math.PI / 2, 0, 0] };
  function plane(parent, w, h, m, x, y, z, face = '+z', uvs = null) {
    const g = new THREE.PlaneGeometry(w, h);
    if (uvs) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * uvs[0], uv.getY(i) * uvs[1]); }
    const me = new THREE.Mesh(g, m);
    me.position.set(x, y, z); me.rotation.set(...FACE[face]);
    parent.add(me); return me;
  }
  function glowSprite(parent, color, size, x, y, z, op = 0.8) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow, color, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    s.scale.set(size, size, 1); s.position.set(x, y, z); parent.add(s); return s;
  }

  G.stairs.rotation.y = Math.PI / 2; G.stairs.position.set(-16.4, 0, 10.85);   // лестничная клетка в своих локальных координатах
  // ======================================================
  //  КВАРТАЛ по скриншоту 2ГИС: угол Фрунзе и Ольги Жилиной.
  //  Дом 49 (башня) с низким крылом 49/3; вход в студию — на фасаде, обращённом к Ольги Жилиной (спуск),
  //  чайхана — на первом этаже того же крыла, дверь с угловой стороны у Фрунзе.
  //  Мировые координаты (у нас «север»=−z, «запад»=−x). Тротуар y=3. Масштаб карты ≈ 0.2 м на пиксель.
  // ======================================================
  const S = G.street;
  const SY = 3.0, CHY = 3.07;
  const ldr = new THREE.TextureLoader();
  const imgTex = (f, rx = 1, ry = 1, rep = false) => { const t = ldr.load('img/' + f); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); } return t; };
  const litM = (map, k = 0.5, tint = 0xffffff) => new THREE.MeshStandardMaterial({ map, color: tint, emissive: 0xffffff, emissiveMap: map, emissiveIntensity: k, roughness: 0.9 });
  const decoM = litM(imgTex('facade_deco.jpg', 1, 1, true), 0.5);
  const panelM = litM(imgTex('facade_panel.jpg', 1, 1, true), 0.7);
  const shopM = M(0xffffff, { map: T.facade, roughness: 0.4, metalness: 0.2, emissive: 0xffffff, emissiveMap: T.facade, emissiveIntensity: 0.35 });
  const wallM = M(0xe9cfc6, { roughness: 0.9 });
  const darkWall = M(0x6a5a78, { roughness: 0.95 });
  const asph = M(0x3a3446, { roughness: 0.9 });
  const lineM = M(0xe8e0f0, { roughness: 0.6 }), yelM = M(0xf2c14e, { roughness: 0.6 });
  const R_X0 = -15.2;                       // бордюр Фрунзе (со стороны дома)

  // --- земля (без прорези под спуск), тротуары, дороги ---
  // ВАЖНО: земляные плиты НЕ должны заходить в подземные комнаты (тамбур, зал, студия: x −3.6…7.2, z −0.4…5.6, высота до 3.06).
  // Раньше плита y 2.0–2.8 висела внутри тамбура и студии — это и был «чёрный меш под потолком».
  texBox(S, -330, 2.0, -330, -3.6, 2.8, 330, mat.concreteDark, 6);
  texBox(S, 7.4, 2.0, -330, 330, 2.8, 330, mat.concreteDark, 6);
  texBox(S, 2.8, 2.0, 5.7, 7.4, 2.8, 330, mat.concreteDark, 6);
  texBox(S, -3.4, 2.0, 7.4, 2.8, 2.8, 330, mat.concreteDark, 6);
  texBox(S, -3.6, 2.0, -330, 7.4, 2.8, -0.5, mat.concreteDark, 6);
  // тротуар вдоль восточного фасада (к Ольги Жилиной): прорезь под спуск остаётся открытой
  texBox(S, R_X0, 2.4, 5.6, -3.4, SY, 11.2, mat.pave, 2);
  texBox(S, -3.4, 2.4, 7.4, 2.8, SY, 11.2, mat.pave, 2);
  texBox(S, 2.8, 2.4, 5.6, 330, SY, 11.2, mat.pave, 2);
  // тротуар вдоль южного фасада (к Фрунзе) и дальше за крылом
  texBox(S, R_X0, 2.4, -70, -11.2, SY, 5.6, mat.pave, 2);
  // дороги: Фрунзе (вдоль z): две проезжие части и разделитель; Ольги Жилиной (вдоль x)
  texBox(S, -42, 2.2, -330, R_X0, 2.9, 11.7, asph, 8); texBox(S, -42, 2.2, 23.2, R_X0, 2.9, 330, asph, 8);
  texBox(S, -330, 2.2, 11.7, 330, 2.9, 23.2, asph, 8);
  texBox(S, -30.4, 2.4, -330, -26.8, 3.0, 11.7, M(0x3f6a3a, { roughness: 1 }), 1); texBox(S, -30.4, 2.4, 23.2, -26.8, 3.0, 330, M(0x3f6a3a, { roughness: 1 }), 1);   // разделительная полоса
  texBox(S, R_X0 - 0.3, 2.4, -330, R_X0, 3.05, 11.7, mat.concrete, 1); texBox(S, R_X0 - 0.3, 2.4, 23.2, R_X0, 3.05, 330, mat.concrete, 1);   // бордюр Фрунзе
  texBox(S, -330, 2.4, 11.2, 330, 3.05, 11.7, mat.concrete, 1); texBox(S, -330, 2.4, 23.2, 330, 3.05, 23.5, mat.concrete, 1);               // бордюры Ольги Жилиной
  texBox(S, -48, 2.4, -330, -42, SY, 23.5, mat.pave, 2); texBox(S, -48, 2.4, 23.5, 330, SY, 29.5, mat.pave, 2); texBox(S, -330, 2.4, -330, -48, SY, 330, mat.concrete, 2);
  // разметка Фрунзе (3 полосы в каждую сторону) и Ольги Жилиной (по две полосы)
  for (let z = -200; z < 200; z += 6) {
    if (z > 8 && z < 26) continue;
    [-19.0, -22.9, -34.0, -37.9].forEach(x => B(S, 0.14, 0.012, 2.6, lineM, x, 2.905, z));
  }
  for (let x = -200; x < 300; x += 6) { if (x > -45 && x < -12) continue; B(S, 2.6, 0.012, 0.14, lineM, x, 2.905, 17.45); }
  [R_X0 - 0.4, -26.5, -30.7, -42.4].forEach(x => { B(S, 0.12, 0.012, 340, lineM, x, 2.905, -160); B(S, 0.12, 0.012, 340, lineM, x, 2.905, 180); });
  // зебры и стоп-линии на перекрёстке
  for (let i = 0; i < 10; i++) { B(S, 3.2, 0.014, 0.55, lineM, -13.0, 2.906, 12.2 + i * 1.0); B(S, 3.2, 0.014, 0.55, lineM, -44.6, 2.906, 12.2 + i * 1.0); }
  for (let i = 0; i < 26; i++) { const zx = -16.2 - i * 1.0; if (zx < -26.5 && zx > -30.8) continue; B(S, 0.55, 0.014, 3.2, lineM, zx, 2.906, 9.6); }
  B(S, 0.3, 0.014, 11.4, lineM, R_X0 - 0.6, 2.906, 17.5);
  // --- ограждения дороги (пешеходам на проезжую часть нельзя) ---
  function fence(ax, az, bx, bz) {
    const len = Math.hypot(bx - ax, bz - az), n = Math.max(2, Math.round(len / 1.6)), ang = Math.atan2(bx - ax, bz - az), m = M(0x6c5aa8, { roughness: 0.5, metalness: 0.6 });
    for (let i = 0; i <= n; i++) { const t = i / n; B(S, 0.06, 1.05, 0.06, m, ax + (bx - ax) * t, SY + 0.52, az + (bz - az) * t); }
    [1.0, 0.55, 0.2].forEach(h => B(S, 0.05, 0.05, len, m, (ax + bx) / 2, SY + h, (az + bz) / 2, ang));
  }
  fence(R_X0 + 0.3, -70, R_X0 + 0.3, 4.6); fence(-12.2, 11.6, 140, 11.6);
  // --- крыло 49/3 (два этажа) и башня 49 (25 этажей) ---
  const HB = 10.5;
  texBox(S, -11.2, SY, -19, 3.8, 7.0, 0.1, [darkWall, shopM, darkWall, darkWall, darkWall, darkWall], [8, 8]);   // сплошная часть крыла (витрины к Фрунзе)
  texBox(S, 3.2, SY, 0.1, 3.8, 7.0, 5.6, wallM, 1);                                                             // торец рядом с чайханой
  texBox(S, -11.2, 7.0, -19, 3.8, HB, 0.1, [darkWall, decoM, mat.concreteDark, darkWall, decoM, darkWall], [7, 3.5]);
  texBox(S, -3.4, 7.0, 0.1, 3.8, HB, 5.6, [darkWall, decoM, mat.concreteDark, darkWall, decoM, darkWall], [4, 3.5]);   // над чайханой: только над студией
  texBox(S, -11.2, HB, -19, 3.8, HB + 0.4, 0.1, mat.concreteDark, 1); texBox(S, -3.4, HB, 0.1, 3.8, HB + 0.4, 5.8, mat.concreteDark, 1);
  texBox(S, -11.2, 2.4, 0.1, -3.6, SY, 5.6, mat.pave, 2);   // площадка-тротуар на месте прежнего западного крыла чайханы
  // длинный низкий дом вдоль Фрунзе дальше на запад (магазины)
  texBox(S, -11.2, SY, -62, 3.8, 7.0, -19, [darkWall, shopM, darkWall, darkWall, darkWall, darkWall], [8, 8]);
  texBox(S, -11.2, 7.0, -62, 3.8, HB, -19, [darkWall, decoM, mat.concreteDark, darkWall, darkWall, darkWall], [7, 3.5]);
  // башня 49 и вставка между крылом и башней
  texBox(S, 3.8, SY, -24.4, 5.8, HB, 5.6, wallM, 1);
  texBox(S, 5.8, SY, -24.4, 43.8, 9.5, 5.6, [darkWall, darkWall, darkWall, darkWall, shopM, darkWall], [8, 8]);
  texBox(S, 5.8, 9.5, -24.4, 43.8, 80, 5.6, [panelM, panelM, mat.concreteDark, mat.concreteDark, panelM, panelM], [12, 9]);
  B(S, 40, 0.1, 0.3, emi(0xff2e97, 1.6), 24.8, 7.0, 5.72); B(S, 40, 0.1, 0.12, emi(0x19f0ff, 1.5), 24.8, 9.6, 5.7);
  // неоновая полоса по крылу
  B(S, 0.3, 0.12, 19.1, emi(0xff2e97, 1.6), -11.35, 7.0, -9.45); B(S, 7.2, 0.12, 0.3, emi(0xff2e97, 1.6), 0.2, 7.0, 5.72);
  // вывески магазинов (общие, без названий) и навесы
  const nsign = (txt, col, x, z, w, face) => { const c = TX.cv(512, 128); ART.drawNeonText(c, txt, col, `700 64px ${ART.FONT_HEAD}`); const m = new THREE.MeshBasicMaterial({ map: TX.toTex(c), transparent: true, toneMapped: false, depthWrite: false }); if (face === 'w') plane(S, w, w / 4, m, -11.3, 6.4, z, '-x'); else plane(S, w, w / 4, m, x, 6.4, 5.7, '+z'); glowSprite(S, col, w * 0.9, face === 'w' ? -11.7 : x, 6.4, face === 'w' ? z : 5.9, 0.16); };
  nsign('КОФЕ', '#19f0ff', 0, -30, 2.6, 'w'); nsign('PIZZA', '#ff9a3c', 0, -42, 2.6, 'w'); nsign('24', '#ffe36a', 0, -52, 1.6, 'w'); nsign('OPEN', '#ff2e97', 12, 0, 2.4, 'e'); nsign('AUTO', '#7cff6b', 30, 0, 2.2, 'e');
  [-52, -42, -30, -22, -14].forEach((az, i) => { const c = [0xff6fa8, 0x3dd6c4, 0xffc15a, 0x9b6cff, 0xff6fa8][i % 5]; B(S, 1.5, 0.12, 5.6, M(c, { roughness: 0.7 }), -11.9, 5.9, az, 0, 0, 0.18); B(S, 0.04, 0.5, 5.6, M(c, { roughness: 0.7 }), -12.65, 5.65, az); });
  [8, 15, 22, 30, 37].forEach((ax, i) => { const c = [0xff6fa8, 0x3dd6c4, 0xffc15a, 0x9b6cff][i % 4]; B(S, 5.6, 0.12, 1.5, M(c, { roughness: 0.7 }), ax, 5.9, 6.35, 0, 0.18); B(S, 5.6, 0.5, 0.04, M(c, { roughness: 0.7 }), ax, 5.62, 7.05); });
  // вывеска REVOLVER над спуском, красная стрелка вниз
  const signC = TX.cv(1024, 256); ART.drawSign(signC);
  const signT = TX.toTex(signC);
  const signM = new THREE.MeshBasicMaterial({ map: signT, toneMapped: false });
  B(S, 7.4, 1.7, 0.1, mat.black, -0.2, 8.7, 5.66);
  plane(S, 7.2, 1.5, signM, -0.2, 8.7, 5.72, '+z');
  glowSprite(S, 0xff3020, 11, -0.2, 8.7, 6.3, 0.26);
  const arrC = TX.cv(128, 160); ART.drawArrow(arrC);
  const arrM = new THREE.MeshBasicMaterial({ map: TX.toTex(arrC), transparent: true, toneMapped: false, depthWrite: false });
  // стрелка просто висит в воздухе (как в Vice City): без стойки и таблички
  const AX = 3.6, AZ = 6.2;
  const arrow = plane(S, 0.9, 1.1, arrM, AX, SY + 2.35, AZ + 0.025, '+z');
  const arrow2 = plane(S, 0.9, 1.1, arrM, AX, SY + 2.35, AZ - 0.025, '-z');
  glowSprite(S, 0xff3a2a, 2.5, AX, SY + 2.35, AZ + 0.1, 0.3);
  // уличный фонарь у спуска (раньше шар висел в воздухе)
  B(S, 0.1, 4.4, 0.1, mat.darkSteel, 4.6, SY + 2.2, 6.0); B(S, 0.1, 0.1, 0.6, mat.darkSteel, 4.6, SY + 4.35, 5.75);
  SPH(S, 0.24, emi(0xfff3d8, 1.1), 4.6, SY + 4.2, 5.5); glowSprite(S, 0xfff0cc, 3.0, 4.6, SY + 4.2, 5.5, 0.5);
  // --- дома вокруг (по карте): северо-восток 56 и 56/1, юго-запад 88 и 86, юго-восток 96, 49/1 за домом ---
  const tw = (x0, x1, z0, z1, h, k = 0) => { const m = k ? decoM : panelM; texBox(S, x0, SY - 0.5, z0, x1, h, z1, [m, m, mat.concreteDark, mat.concreteDark, m, m], [12, 9]); };
  tw(1.8, 30, 32, 108, 18); tw(6, 46, 36, 64, 57); tw(-82, -52, -12, 20, 43); tw(-84, -52, -64, -28, 40); tw(-80, -33, 80, 134, 17);
  tw(32, 66, -116, -82, 78); tw(-130, -96, 20, 60, 30); tw(60, 110, -40, 10, 24); tw(-62, -52, 26, 44, 9, 1);
  // --- небо (картинка Higgsfield) и силуэт города на горизонте ---
  const skyT = imgTex('sky.jpg'); skyT.wrapS = THREE.RepeatWrapping;
  const sky = new THREE.Mesh(new THREE.SphereGeometry(420, 32, 14, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshBasicMaterial({ map: skyT, side: THREE.BackSide, fog: false, depthWrite: false }));
  sky.position.y = 2.5; sky.rotation.y = 0.9; sky.renderOrder = -2; S.add(sky);
  const skyL = imgTex('skyline.png', 3, 1, true);
  const skl = new THREE.Mesh(new THREE.CylinderGeometry(300, 300, 52, 48, 1, true), new THREE.MeshBasicMaterial({ map: skyL, transparent: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  skl.position.y = 26; skl.renderOrder = -1; S.add(skl);
  // --- настоящие 3D-пальмы (ПК — детальные, телефон — упрощённые) ---
  const palmSpots = [];
  for (let z = -60; z <= 0; z += 9) palmSpots.push([-13.0, SY, z, 6.5 + (z % 3 + 3) % 3]);
  for (let x = -6; x <= 60; x += 8.5) palmSpots.push([x, SY, 10.4, 6.5 + ((x * 7) % 3 + 3) % 3]);
  for (let z = -40; z <= 100; z += 10) palmSpots.push([-28.6, SY, z, 8]);                       // разделитель Фрунзе
  for (let x = -6; x <= 120; x += 9) palmSpots.push([x, SY, 26.5, 8.5]);
  buildPalms(S, palmSpots, !low);
  // --- светофоры, фонари, скамейки, урны ---
  const tlight = (x, z, ry, red) => { const g = new THREE.Group(); g.position.set(x, SY, z); g.rotation.y = ry; S.add(g);
    B(g, 0.12, 4.0, 0.12, mat.darkSteel, 0, 2.0, 0); B(g, 0.4, 1.1, 0.3, mat.black, 0, 4.1, 0.1);
    [[red ? 0xff2a2a : 0x331010, 4.38], [0x332a10, 4.1], [red ? 0x103310 : 0x2aff5a, 3.82]].forEach(([c, y]) => SPH(g, 0.1, emi(c, c > 0x600000 ? 1.5 : 0.6), 0, y, 0.27)); glowSprite(g, red ? 0xff2a2a : 0x2aff5a, 1.4, 0, red ? 4.38 : 3.82, 0.4, 0.8); };
  tlight(-13.2, 10.8, Math.PI, true); tlight(-14.6, 24.0, 0, false); tlight(-43.5, 10.8, Math.PI, false); tlight(-43.5, 24.0, 0, true);
  [-9, 12, 30, 48].forEach((lx, i) => {
    B(S, 0.12, 5.2, 0.12, mat.darkSteel, lx, SY + 2.6, 10.9); B(S, 1.4, 0.1, 0.1, mat.darkSteel, lx, SY + 5.15, 10.55);
    B(S, 0.6, 0.12, 0.3, emi(i % 2 ? 0xff7ac0 : 0xffc47a, 1.5), lx, SY + 5.05, 10.0);
    glowSprite(S, i % 2 ? 0xff7ac0 : 0xffb060, 5, lx, SY + 4.95, 10.0, 0.45);
  });
  [-13.4, 18, 36].forEach((bx, i) => { const bz = i ? 9.4 : 1.0; B(S, 1.6, 0.06, 0.5, M(0x7a4a28), bx, SY + 0.45, bz); B(S, 1.6, 0.4, 0.05, M(0x7a4a28), bx, SY + 0.75, bz - 0.22); B(S, 0.06, 0.45, 0.4, mat.black, bx - 0.7, SY + 0.22, bz); B(S, 0.06, 0.45, 0.4, mat.black, bx + 0.7, SY + 0.22, bz); });
  CYL(S, 0.22, 0.2, 0.7, M(0x3a8a5a, { roughness: 0.6 }), 8.2, SY + 0.35, 9.0, 12);
  // --- машины: Фрунзе (вдоль z) и Ольги Жилиной (вдоль x). Картинки Higgsfield; на ПК позже заменяются 3D-моделями ---
  const cars = [];
  const carTex = {}, aspects = { 'car_jeep.png': 234 / 512, 'car_diablo.png': 140 / 512 };
  const defs = [
    ['car_diablo.png', 4.5, 'z', -17.2, -1, 9], ['car_muscle.png', 4.8, 'z', -21.0, -1, 12], ['car_cabrio.png', 5.0, 'z', -24.8, -1, 7.5], ['car_jeep.png', 4.4, 'z', -17.2, -1, 8],
    ['car_testarossa.png', 4.6, 'z', -32.4, 1, 11], ['car_muscle2.png', 4.6, 'z', -36.2, 1, 9], ['car_cabrio.png', 5.0, 'z', -40.0, 1, 8.5], ['car_diablo.png', 4.5, 'z', -36.2, 1, 12.5],
    ['car_muscle.png', 4.8, 'x', 13.4, -1, 8], ['car_jeep.png', 4.4, 'x', 16.1, -1, 6.5], ['car_testarossa.png', 4.6, 'x', 19.2, 1, 9], ['car_muscle2.png', 4.6, 'x', 21.8, 1, 7]
  ];
  defs.forEach(([f, w, axis, lane, dir, speed], i) => {
    const t = carTex[f] || (carTex[f] = imgTex(f)), h = w * (aspects[f] || 0.26);
    const car = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, color: 0xe6d8f0 }));
    // вдоль x: рисунок «смотрит вправо». Плоскость повернута к зрителю на тротуаре; для встречного направления зеркалим.
    if (axis === 'x') car.rotation.y = Math.PI; else car.rotation.y = Math.PI / 2;
    car.scale.x = (axis === 'x' ? dir > 0 : dir > 0) ? -1 : 1;
    car.userData = { axis, dir, speed, p: -90 + i * 17, lane, h, w, f };
    if (axis === 'x') car.position.set(car.userData.p, 2.9 + h / 2, lane); else car.position.set(lane, 2.9 + h / 2, car.userData.p);
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.92, 0.5), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.set(0, -h / 2 + 0.02, 0); car.add(shadow);
    S.add(car); cars.push(car);
  });

  if (!low) loadCarModels(cars, S);   // ПК: настоящие 3D-машины вместо картинок

  // ======================================================
  //  ЧАЙХАНА (1 этаж крыла 49/3, над студией): дверь с угловой стороны у Фрунзе, окна на обе улицы
  // ======================================================
  const CH = G.chai;
  const CX0 = -3.4, CX1 = 3.0, CZ0 = 0.3, CZ1 = 5.4, CTOP = 6.7;
  const ochre = M(0xd49a58, { roughness: 0.9 });
  const ornC = TX.cv(256, 128); { const x = ornC.getContext('2d'); x.fillStyle = '#c4703a'; x.fillRect(0, 0, 256, 128);
    x.fillStyle = '#f3e6c8'; x.fillRect(0, 22, 256, 6); x.fillRect(0, 100, 256, 6);
    for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#1f5f8b' : '#f3e6c8'; x.beginPath(); x.moveTo(i * 32 + 16, 34); x.lineTo(i * 32 + 30, 64); x.lineTo(i * 32 + 16, 94); x.lineTo(i * 32 + 2, 64); x.closePath(); x.fill(); } }
  const ornT = TX.toTex(ornC); ornT.repeat.set(5, 1); const ornM = M(0xffffff, { map: ornT, roughness: 0.9 });
  const glassW = new THREE.MeshStandardMaterial({ color: 0xffd9a0, transparent: true, opacity: 0.28, roughness: 0.05, emissive: 0xff9a40, emissiveIntensity: 0.25, depthWrite: false });
  texBox(CH, CX0, 3.05, CZ0, CX1, CHY, CZ1, mat.woodFloor, 1.2);                          // пол
  texBox(CH, CX0 - 0.2, CHY, CZ0 - 0.2, CX1 + 0.2, CTOP + 0.2, CZ0, ochre, 1);             // северная стена (к башне/соседям)
  texBox(CH, CX1, CHY, CZ0, CX1 + 0.2, CTOP + 0.2, CZ1 + 0.2, ochre, 1);                   // стена к башне
  texBox(CH, CX0, CTOP, CZ0, CX1, CTOP + 0.2, CZ1, M(0x5a3a22, { roughness: 0.8 }), 1);   // потолок
  for (let bx = CX0 + 0.8; bx < CX1; bx += 1.4) B(CH, 0.14, 0.16, CZ1 - CZ0, M(0x3f2616), bx, CTOP - 0.08, (CZ0 + CZ1) / 2);   // балки
  plane(CH, CX1 - CX0, 1.1, ornM, (CX0 + CX1) / 2, 4.0, CZ0 + 0.01, '+z', [2.3, 1]);
  plane(CH, CZ1 - CZ0, 1.1, ornM, CX1 - 0.01, 4.0, (CZ0 + CZ1) / 2, '-x', [1.5, 1]);
  // восточный фасад: окна по всей длине (чайхана видна с Ольги Жилиной)
  texBox(CH, CX0, SY, CZ1, CX1, 4.2, CZ1 + 0.2, wallM, 1); texBox(CH, CX0, 6.4, CZ1, CX1, 7.0, CZ1 + 0.2, wallM, 1);
  B(CH, CX1 - CX0, 2.2, 0.03, glassW, (CX0 + CX1) / 2, 5.3, CZ1 + 0.1);
  for (let mx = CX0 + 1.2; mx < CX1; mx += 1.6) B(CH, 0.06, 2.2, 0.05, M(0x6a3a1c), mx, 5.3, CZ1 + 0.12);
  // южная стена у Фрунзе (x=-11): дверь z 1.0…2.2, окна, вывеска, навес
  texBox(CH, CX0 - 0.2, CHY, CZ0, CX0, 4.2, 1.0, ochre, 1); texBox(CH, CX0 - 0.2, CHY, 2.2, CX0, 4.2, CZ1 + 0.2, ochre, 1);
  texBox(CH, CX0 - 0.2, 4.2, CZ0, CX0, 6.4, 1.0, ochre, 1); texBox(CH, CX0 - 0.2, 4.2, 2.2, CX0, 6.4, CZ1 + 0.2, ochre, 1);
  texBox(CH, CX0 - 0.2, 6.4, CZ0, CX0, CTOP + 0.2, CZ1 + 0.2, ochre, 1);
  texBox(CH, CX0 - 0.2, 5.4, 1.0, CX0, 6.4, 2.2, ochre, 1);
  // цоколь западной стены (закрывает щель под стеной) и порог двери чайханы (проём z 1.0…2.2)
  texBox(CH, CX0 - 0.2, 2.8, CZ0, CX0, CHY, 1.0, mat.concreteDark, 1); texBox(CH, CX0 - 0.2, 2.8, 2.2, CX0, CHY, CZ1 + 0.2, mat.concreteDark, 1);
  texBox(CH, CX0 - 0.22, 2.9, 1.0, CX0 + 0.12, CHY + 0.045, 2.2, M(0x6a3a1c, { roughness: 0.6 }), 1);    // деревянный порог выше тротуара на 12 см
  B(CH, 0.03, 0.012, 1.2, mat.gold, CX0 - 0.06, CHY + 0.051, 1.6);                                          // латунная накладка
  B(CH, 0.03, 1.4, 2.6, glassW, CX0 - 0.1, 5.0, 3.8); B(CH, 0.03, 1.4, 0.7, glassW, CX0 - 0.1, 5.0, 0.65);
  [CZ0 + 1.9, 3.0, 4.2].forEach(zz => B(CH, 0.05, 1.5, 0.06, M(0x6a3a1c), CX0 - 0.12, 5.0, zz));
  for (let i = 0; i < 6; i++) B(CH, 1.5, 0.1, 0.62, M(i % 2 ? 0xf3e6c8 : 0xc4402a, { roughness: 0.8 }), CX0 - 0.95, 5.95, 0.1 + i * 0.62 + 0.4, 0, 0, -0.16);
  const chC = TX.cv(512, 128); ART.drawNeonText(chC, 'ЧАЙХАНА', '#ffb347', `700 66px ${ART.FONT_HEAD}`);
  plane(CH, 3.0, 0.75, new THREE.MeshBasicMaterial({ map: TX.toTex(chC), transparent: true, toneMapped: false, depthWrite: false }), CX0 - 0.35, 6.55, 1.6, '-x');
  glowSprite(CH, 0xffa040, 4.5, CX0 - 0.9, 6.55, 1.6, 0.22);
  // меню у двери (без цен и рекламы)
  const mnC = TX.cv(384, 256); { const x = mnC.getContext('2d'); x.fillStyle = '#26211c'; x.fillRect(0, 0, 384, 256); x.strokeStyle = '#8a6a3a'; x.lineWidth = 10; x.strokeRect(5, 5, 374, 246);
    x.fillStyle = '#f3ead2'; x.textAlign = 'center'; x.font = `700 54px ${ART.FONT_HEAD}`; x.fillText('МАНТЫ', 192, 100); x.font = `600 34px ${ART.FONT_HEAD}`; x.fillText('ПЛОВ · ЧАЙ', 192, 168); x.fillStyle = '#e8a43a'; x.fillRect(80, 190, 224, 4); }
  plane(CH, 0.8, 0.53, M(0xffffff, { map: TX.toTex(mnC), roughness: 0.9 }), CX0 + 0.02, 4.7, 3.0, '+x');
  // низкие столы с подушками и коврами
  const rugs = [[-2.8, 3.4, -0.6, 5.0, 0xb02a4a], [-2.6, 1.6, -0.6, 3.0, 0x2f7a4a], [0.2, 3.0, 2.0, 4.4, 0x1f5f8b]];
  rugs.forEach(([a, b, c, d, rc]) => { B(CH, c - a, 0.012, d - b, M(rc, { roughness: 1 }), (a + c) / 2, CHY + 0.006, (b + d) / 2); B(CH, c - a - 0.3, 0.012, d - b - 0.3, M(0xf3e6c8, { roughness: 1 }), (a + c) / 2, CHY + 0.018, (b + d) / 2); B(CH, c - a - 0.5, 0.012, d - b - 0.5, M(rc, { roughness: 1 }), (a + c) / 2, CHY + 0.030, (b + d) / 2); });
  const cushionCols = [0xb02a4a, 0x1f5f8b, 0xe8a43a, 0x2f7a4a, 0x8a3aa0];
  const tbls = [[-1.7, 4.2], [-1.6, 2.3], [1.0, 3.6]];
  tbls.forEach(([tx, tz], i) => {
    B(CH, 1.1, 0.07, 0.8, M(0x6a3a1c, { roughness: 0.6 }), tx, CHY + 0.38, tz); [[-0.45, -0.3], [0.45, -0.3], [-0.45, 0.3], [0.45, 0.3]].forEach(([a, b]) => B(CH, 0.07, 0.36, 0.07, M(0x4a2a14), tx + a, CHY + 0.18, tz + b));
    CYL(CH, 0.2, 0.2, 0.025, M(0xf3f1ea, { roughness: 0.3 }), tx, CHY + 0.42, tz, 18); CYL(CH, 0.07, 0.07, 0.1, M(0x1f5f8b), tx + 0.3, CHY + 0.46, tz + 0.15, 10);
    [[-0.95, 0], [0.95, 0], [0, -0.7], [0, 0.7]].forEach(([ox, oz], k) => B(CH, 0.56, 0.16, 0.56, M(cushionCols[(i + k) % 5], { roughness: 0.9 }), tx + ox, CHY + 0.1, tz + oz, 0.2 * k));
  });
  B(CH, 3.4, 1.0, 0.7, M(0x7a4a28, { roughness: 0.7 }), 1.0, CHY + 0.5, CZ0 + 0.55); B(CH, 3.5, 0.06, 0.8, M(0xe9c48a), 1.0, CHY + 1.03, CZ0 + 0.55);
  [-0.2, 0.9].forEach((sx, i) => { for (let k = 0; k < 3; k++) CYL(CH, 0.3, 0.3, 0.16, M(k % 2 ? 0xe8c070 : 0xd9a85a, { roughness: 0.8 }), 0.4 + sx + i * 0.9, CHY + 1.12 + k * 0.17, CZ0 + 0.55, 16); CYL(CH, 0.32, 0.32, 0.04, M(0x8a5a2a), 0.4 + sx + i * 0.9, CHY + 1.66, CZ0 + 0.55, 16); });
  CYL(CH, 0.18, 0.2, 0.5, mat.gold, 2.2, CHY + 1.3, CZ0 + 0.55, 14); SPH(CH, 0.2, mat.gold, 2.2, CHY + 1.62, CZ0 + 0.55, 1, 0.7, 1);
  [0, 1, 2].forEach(i => glowSprite(CH, 0xffffff, 0.8, 0.4 + i * 0.7, CHY + 2.0, CZ0 + 0.55, 0.3));
  B(CH, 3.0, 0.05, 0.3, M(0x6a3a1c), -1.9, CHY + 2.0, CZ0 + 0.2); B(CH, 4.5, 0.05, 0.3, M(0x6a3a1c), 0.6, CHY + 2.35, CZ0 + 0.2);
  for (let i = 4; i < 9; i++) { const px = -5.4 + i * 0.65; B(CH, 0.22, 0.24, 0.22, M(i % 2 ? 0x1f5f8b : 0xf3f1ea, { roughness: 0.3 }), px, CHY + 2.15, CZ0 + 0.2); SPH(CH, 0.07, M(0xe8c070, { roughness: 0.4, metalness: 0.7 }), px, CHY + 2.33, CZ0 + 0.2); }
  tbls.forEach(([tx, tz]) => { CYL(CH, 0.05, 0.04, 0.14, new THREE.MeshStandardMaterial({ color: 0xcfeaff, transparent: true, opacity: 0.4 }), tx - 0.3, CHY + 0.5, tz - 0.1, 10); [0xff4f9a, 0xffd23a, 0xf4f4f4].forEach((fc, k) => SPH(CH, 0.035, M(fc), tx - 0.3 + (k - 1) * 0.04, CHY + 0.62 + k * 0.01, tz - 0.1, 1, 0.8, 1)); });
  [[2.4, 5.0], [-3.0, 0.8]].forEach(([px, pz]) => { CYL(CH, 0.2, 0.15, 0.4, M(0xb06a3a), px, CHY + 0.2, pz, 12); for (let k = 0; k < 6; k++) { const a = k * 1.05; SPH(CH, 0.2, mat.leaf, px + Math.cos(a) * 0.15, CHY + 0.8 + (k % 3) * 0.2, pz + Math.sin(a) * 0.15, 0.5, 1.6, 0.5); } });
  [[-2.8, 2.4], [-2.0, 4.0], [0.0, 2.4], [1.8, 4.6], [-1.0, 1.2]].forEach(([lx, lz]) => {
    CYL(CH, 0.012, 0.012, 0.8, mat.black, lx, CTOP - 0.4, lz, 6);
    CYL(CH, 0.16, 0.12, 0.3, emi(0xffa040, 1.3), lx, CTOP - 0.95, lz, 10); glowSprite(CH, 0xffa040, 2.0, lx, CTOP - 0.95, lz, 0.38);
  });
  for (let i = 0; i < 12; i++) B(S, 0.1, 0.1, 0.1, emi(i % 2 ? 0xffb347 : 0xff6fa8, 1.6), -12.4, 6.1 + Math.sin(i * 0.9) * 0.08, -1.0 + i * 0.5);

  // стены лестничной клетки (прежние)
  texBox(G.stairs, 5.25, 0, 13.2, 5.45, 3.0, 13.35, mat.brick, 2);
  texBox(G.stairs, 5.25, 2.1, 13.35, 5.45, 3.0, 14.25, mat.brick, 2);
  texBox(G.stairs, 5.25, 0, 14.25, 5.45, 3.0, 19.2, mat.brick, 2);                    // кирпичная стена лестницы (низ)
  texBox(G.stairs, 3.45, 0, 13.2, 3.75, 4.0, 19.2, [mat.brick, mat.brick, mat.pave, mat.brick, mat.brick, mat.brick], 2);

  // ======================================================
  //  ЛЕСТНИЦА И ЛЕСТНИЧНАЯ КЛЕТКА
  // ======================================================
  const ST = G.stairs;
  const stepM = [mat.concrete, mat.concrete, M(0xffffff, { map: T.concreteDark, roughness: 0.6, metalness: 0.2 }), mat.concrete, mat.concrete, mat.concrete];
  // ВАЖНО: ST повёрнут (локально x_l = 10.85 − z_мир, z_l = x_мир + 16.4), поэтому ступени строим в локальных координатах
  const sdx = (STAIR.x1 - STAIR.x0) / STAIR.n, sdy = STAIR.rise / STAIR.n;
  const LX0 = 10.85 - STAIR.z1, LX1 = 10.85 - STAIR.z0, LZ0 = STAIR.x0 + 16.4;   // 3.75..5.25, 14.4…
  const antiM = M(0x888070, { roughness: 0.4, metalness: 0.6 });
  for (let k = 0; k < STAIR.n; k++) {
    texBox(ST, LX0, 0, LZ0 + k * sdx, LX1, (k + 1) * sdy, LZ0 + (k + 1) * sdx, stepM, 1);
    B(ST, 1.4, 0.01, 0.05, antiM, (LX0 + LX1) / 2, (k + 1) * sdy + 0.005, LZ0 + (k + 1) * sdx - 0.06);   // анти-скользящая полоса
  }
  // площадка
  texBox(ST, 3.75, -0.2, 13.2, 5.25, 0.0, 14.4, mat.concreteDark, 1);
  // торцевая стена с металлической дверью
  texBox(ST, 3.45, 0, 13.0, 5.45, 3.5, 13.2, mat.brick, 2);
  // козырёк-перекрытие
  texBox(ST, 3.45, 3.0, 13.02, 5.58, 3.45, 15.2, mat.concreteDark, 1);
  // светильник на площадке
  CYL(ST, 0.16, 0.16, 0.1, M(0xdddddd), 4.5, 2.95, 14.2, 12);
  CYL(ST, 0.12, 0.12, 0.02, emi(0xdbe6ff, 1.4), 4.5, 2.89, 14.2, 12);
  glowSprite(ST, 0xc8dcff, 1.4, 4.5, 2.7, 14.2, 0.45);
  // поручень вдоль левой стены
  {
    const run = STAIR.x1 - STAIR.x0;
    const len = Math.hypot(run, STAIR.rise);
    const ang = Math.atan2(STAIR.rise, run);
    B(ST, 0.05, 0.05, len, mat.steel, 3.95, 0.95 + STAIR.rise / 2 + 0.1, LZ0 + run / 2, 0, -ang);
    for (let k = 0; k < 5; k++) {
      const wx = STAIR.x0 + 0.3 + k * 1.1; const yy = groundY(wx, 6.0);
      B(ST, 0.04, 0.95, 0.04, mat.steel, 3.95, yy + 0.47 + 0.1, wx + 16.4);
    }
  }
  // боковая лампа на стене лестницы (мягкий свет)
  // дверь металлическая
  const mdC = TX.cv(256, 512); {
    const x = mdC.getContext('2d'), r = TX.rng(9);
    x.fillStyle = '#4b2d20'; x.fillRect(0, 0, 256, 512);
    TX.noise(x, 256, 512, 22, r);
    x.strokeStyle = 'rgba(0,0,0,.4)'; x.lineWidth = 3; x.strokeRect(14, 14, 228, 484);
    x.fillStyle = 'rgba(255,200,150,.1)'; x.fillRect(14, 14, 228, 40);
    for (let i = 0; i < 24; i++) { x.fillStyle = 'rgba(0,0,0,.4)'; x.beginPath(); x.arc(24 + (i % 2 ? 208 : 0), 30 + Math.floor(i / 2) * 40, 3, 0, 7); x.fill(); }
  }
  const mdM = M(0xffffff, { map: TX.toTex(mdC), roughness: 0.55, metalness: 0.5 });
  const doors = [];
  function addDoor(parent, { axis, hx, hz, w, h = 2.1, t = 0.07, open, mats, cx, cz, knob = true, knobSide = 1 }) {
    const pivot = new THREE.Group(); pivot.position.set(hx, 0, hz); parent.add(pivot);
    if (axis === 'z') {
      const m = new THREE.Mesh(BOXG, mats); m.userData.noPaint = true; m.scale.set(w, h, t); m.position.set(w / 2, h / 2, 0); pivot.add(m);
      if (knob) { SPH(pivot, 0.035, mat.steel, w - 0.1, 1.0, t / 2 + 0.04); SPH(pivot, 0.035, mat.steel, w - 0.1, 1.0, -t / 2 - 0.04); }
    } else {
      const m = new THREE.Mesh(BOXG, mats); m.userData.noPaint = true; m.scale.set(t, h, w); m.position.set(0, h / 2, -w / 2); pivot.add(m);
      if (knob) { SPH(pivot, 0.035, mat.steel, t / 2 + 0.04, 1.0, -w + 0.1); SPH(pivot, 0.035, mat.steel, -t / 2 - 0.04, 1.0, -w + 0.1); }
    }
    const d = { pivot, cur: 0, target: 0, open, cx, cz, grp: parent };
    doors.push(d); return d;
  }
  addDoor(ST, { axis: 'x', hx: 5.35, hz: 14.25, w: 0.9, h: 2.1, t: 0.08, open: -Math.PI / 2 * 0.92, mats: [mdM, mdM, mat.darkSteel, mat.darkSteel, mat.darkSteel, mat.darkSteel], cx: 5.35, cz: 13.8 });

  // ======================================================
  //  ТАМБУР (после поворота направо от лестницы)
  // ======================================================
  const E = G.entry;
  const wy = 2.96;
  const newsW = mat.news;
  const wM = M(0xefedf2, { roughness: 0.5 });
  const dk = mat.concreteDark;
  texBox(E, -3.6, -0.1, 2.0, -0.2, 0, 5.6, mat.woodFloor, 1.2);
  texBox(E, -3.6, wy, 2.0, -0.2, wy + 0.1, 5.6, mat.ceil, 1);
  texBox(E, -3.6, 0, 2.0, -3.4, wy, 5.6, [newsW, dk, dk, dk, dk, dk], 1);           // запад
  texBox(E, -3.6, 0, 2.0, -0.2, wy, 2.2, [dk, dk, dk, dk, newsW, dk], 1);           // север
  texBox(E, -3.6, 0, 5.4, -3.2, wy, 5.6, [dk, dk, dk, dk, dk, dk], 1);              // юг (слева от двери)
  // газеты на южной стене тамбура (поверх кирпича лестницы)
  plane(E, 0.35, 2.8, newsW, -3.225, 1.4, 5.392, '-z', [0.35, 2.8]);
  plane(E, 1.95, 2.8, newsW, -1.175, 1.4, 5.392, '-z', [1.95, 2.8]);
  plane(E, 0.9, 0.7, newsW, -2.6, 2.45, 5.392, '-z', [0.9, 0.7]);
  // дверь школы диджеев: закрыта, ремонт
  const djx = -2.3;
  B(E, 1.1, 2.2, 0.06, wM, djx, 1.1, 2.23);
  B(E, 0.9, 2.1, 0.07, M(0x26323a, { roughness: 0.7 }), djx, 1.05, 2.275);
  SPH(E, 0.035, mat.steel, djx + 0.32, 1.0, 2.33);
  const djC = TX.cv(512, 256); ART.drawDjSign(djC);
  plane(E, 0.5, 0.25, new THREE.MeshStandardMaterial({ map: TX.toTex(djC), roughness: 0.8, emissive: 0xffffff, emissiveMap: TX.toTex(djC), emissiveIntensity: 0.25 }), djx, 1.55, 2.315, '+z');
  const tapeM = M(0xe8c21a, { roughness: 0.6 });
  B(E, 1.15, 0.05, 0.01, tapeM, djx, 1.1, 2.322, 0, 0, 0.7); B(E, 1.15, 0.05, 0.01, tapeM, djx, 1.1, 2.324, 0, 0, -0.7);
  // ведро и плёнка: идёт ремонт
  CYL(E, 0.14, 0.11, 0.3, M(0xd9d9d4, { roughness: 0.6 }), -1.3, 0.15, 2.5, 14);
  B(E, 0.5, 0.01, 0.8, M(0xcfd6d8, { roughness: 0.3 }), -1.0, 0.012, 2.9, 0, 0.3);
  // подпись над дверью в студию
  const stC = TX.cv(512, 128); ART.drawNeonText(stC, 'REVOLVER PODCAST →', '#ff4b3a', `700 44px ${ART.FONT_HEAD}`);
  plane(E, 1.4, 0.35, new THREE.MeshBasicMaterial({ map: TX.toTex(stC), transparent: true, toneMapped: false, depthWrite: false }), -0.23, 2.45, 3.45, '-x');
  glowSprite(E, 0xff4b3a, 1.6, -0.3, 2.45, 3.45, 0.3);
  // электрощиток и афиши
  B(E, 0.06, 0.55, 0.42, M(0x7a8086, { roughness: 0.5, metalness: 0.6 }), -3.37, 1.5, 3.6);
  B(E, 0.02, 0.2, 0.3, M(0xe0b020), -3.34, 1.6, 3.6);
  [[0, -3.39, 4.5, '+x'], [1, -3.39, 2.8, '+x'], [2, -1.5, 5.37, '-z']].forEach(([k, px, pz, f]) => {
    const pc = TX.cv(256, 384); ART.drawPoster(pc, k);
    const pz_ = f === '-z' ? pz : pz; const g = plane(E, 0.5, 0.75, M(0xffffff, { map: TX.toTex(pc), roughness: 0.8 }), px, 1.4, pz_, f);
  });
  // лампа
  CYL(E, 0.14, 0.14, 0.05, M(0xffe9c0), -1.8, wy - 0.025, 3.8, 14);   // плафон вплотную к потолку
  CYL(E, 0.11, 0.11, 0.02, emi(0xffe3b8, 1.4), -1.8, wy - 0.06, 3.8, 14);
  glowSprite(E, 0xffd9a0, 1.4, -1.8, wy - 0.25, 3.8, 0.4);
  [-3.38, -0.24].forEach(xx => B(E, 0.04, 0.04, 3.2, emi(0xd22bff, 1.5), xx, 2.65, 3.8));
  glowSprite(E, 0xd02bff, 3.5, -1.8, 2.4, 3.8, 0.18);

  // ======================================================
  //  ЗАЛ REVOLVER PODCAST
  // ======================================================
  const H = G.hall;
  const HW = 3.76, HD = 5.14;   // подкастная по эскизу и экспорту Cinema 4D
  // пол/потолок
  texBox(H, 0, -0.1, 0, HW, 0, HD, mat.blueCarpet, 1.0);
  texBox(H, 0, wy, 0, HW, wy + 0.1, HD, mat.ceil, 1);
  // северная стена — тёмный бетон/металл
  texBox(H, -0.2, 0, -0.2, HW + 0.25, wy + 0.1, 0, [mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark, M(0x0f1013)], 2);
  // западная — красный ковёр
  const wDz0 = 3.0, wDz1 = 3.9;
  const wmW = [mat.concreteDark, newsW, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark];
  texBox(H, -0.2, 0, 0, 0, wy + 0.1, wDz0, wmW, 1);
  texBox(H, -0.2, 0, wDz1, 0, wy + 0.1, HD, wmW, 1);
  texBox(H, -0.2, 2.1, wDz0, 0, wy + 0.1, wDz1, wmW, 1);
  plane(H, 3.0, wy, mat.carpetRed, 0.012, wy / 2, 1.5, '+x', [3.33, 3.11]);
  plane(H, HD - 3.9, wy, mat.foam, 0.012, wy / 2, (3.9 + HD) / 2, '+x', [(HD - 3.9) * 1.5, wy * 1.5]);
  plane(H, 0.9, wy - 2.1, mat.foam, 0.012, (2.1 + wy) / 2, 3.45, '+x', [1.35, (wy - 2.1) * 1.5]);
  addDoor(H, { axis: 'x', hx: -0.1, hz: wDz1, w: 0.9, h: 2.1, t: 0.05, open: -Math.PI / 2 * 0.95, mats: wM, cx: -0.1, cz: 3.45 });
  B(H, 0.1, 2.1, 0.06, wM, -0.1, 1.05, wDz0 - 0.02); B(H, 0.1, 2.1, 0.06, wM, -0.1, 1.05, wDz1 + 0.02); B(H, 0.1, 0.06, 1.0, wM, -0.1, 2.13, 3.45);
  // южная стена с дверью: шторы
  texBox(H, -0.2, 0, HD, HW + 0.25, wy + 0.1, HD + 0.2, mat.concreteDark, 2);
  plane(H, HW, wy, mat.curtain, HW / 2, wy / 2, HD - 0.03, '-z', [HW, 1]);
  // восточная стена (граффити). Тело стены:
  const doorZ0 = 3.0, doorZ1 = 3.9;
  texBox(H, HW, 0, 0, HW + 0.25, wy + 0.1, doorZ0, mat.black, 1);
  texBox(H, HW, 0, doorZ1, HW + 0.25, wy + 0.1, HD, mat.black, 1);
  texBox(H, HW, 2.1, doorZ0, HW + 0.25, wy + 0.1, doorZ1, mat.black, 1);
  // холст
  const muralC = TX.cv(2048, 1180);
  const doorRect = { x: doorZ0 / HD * 2048, y: 1180 - 2.1 / wy * 1180, w: (doorZ1 - doorZ0) / HD * 2048, h: 2.1 / wy * 1180 };
  const muralT = TX.toTex(muralC);
  let muralImg = null;
  const redrawMural = () => {
    if (muralImg) { const x = muralC.getContext('2d'); x.clearRect(0, 0, muralC.width, muralC.height); x.drawImage(muralImg, 0, 0, muralC.width, muralC.height); x.clearRect(doorRect.x, doorRect.y, doorRect.w, doorRect.h); }
    else ART.drawMural(muralC, doorRect);
    muralT.needsUpdate = true;
  };
  { const im = new Image(); im.onload = () => { muralImg = im; redrawMural(); }; im.src = 'img/mural.jpg'; }
  redrawMural();
  const muralM = M(0xffffff, { map: muralT, roughness: 0.9, alphaTest: 0.5, emissive: 0xffffff, emissiveMap: muralT, emissiveIntensity: 0.18 });
  const muralPl = plane(H, HD, wy, muralM, HW - 0.012, wy / 2, HD / 2, '-x');
  // дверь
  const dsC = TX.cv(384, 896); ART.drawDoorStencil(dsC);
  const dsT = TX.toTex(dsC);
  const dsM = M(0xffffff, { map: dsT, roughness: 0.6 });
  const redrawDoor = () => { ART.drawDoorStencil(dsC); dsT.needsUpdate = true; };
  const mdoor = addDoor(H, { axis: 'x', hx: HW + 0.07, hz: doorZ1, w: 0.9, h: 2.1, t: 0.05, open: -Math.PI / 2 * 0.95, mats: [wM, dsM, wM, wM, wM, wM], cx: HW + 0.07, cz: 3.45 });
  // зелёная рамка двери
  B(H, 0.3, 2.12, 0.06, M(0x0f8a3a), HW + 0.12, 1.06, doorZ0 - 0.02); B(H, 0.3, 2.12, 0.06, M(0x0f8a3a), HW + 0.12, 1.06, doorZ1 + 0.02); B(H, 0.3, 0.06, 1.0, M(0x0f8a3a), HW + 0.12, 2.13, 3.45);
  // конусы
  const coneG = new THREE.ConeGeometry(0.13, 0.5, 14);
  [[3.4, 4.45], [3.58, 4.1]].forEach(([cx, cz], i) => {
    const m = new THREE.Mesh(coneG, M(0xff6a1a, { roughness: 0.6 })); m.position.set(cx, 0.25, cz); H.add(m);
    CYL(H, 0.115, 0.125, 0.07, M(0xf3f3f0), cx, 0.26, cz, 14); CYL(H, 0.09, 0.1, 0.07, M(0xf3f3f0), cx, 0.37, cz, 14);
    B(H, 0.34, 0.03, 0.34, M(0x222), cx, 0.015, cz);
  });
  // акустические гитары у мурала
  function guitar(parent, x, z, ry, color, body = 'ac', lean = 0.12) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; g.rotation.z = lean; parent.add(g);
    const bm = M(color, { roughness: 0.35, metalness: 0.1 });
    SPH(g, 0.19, bm, 0, 0.22, 0, 1, 1.05, 0.28); SPH(g, 0.15, bm, 0, 0.53, 0, 1, 1.0, 0.28);
    CYL(g, 0.06, 0.06, 0.02, M(0x050505), 0, 0.38, 0.065, 14, Math.PI / 2);
    B(g, 0.05, 0.62, 0.025, M(0x2a1a10), 0, 0.98, 0); B(g, 0.07, 0.14, 0.02, M(0x151515), 0, 1.35, 0);
    return g;
  }
  // ---------- гитары: Cort в стиле Les Paul (зелёный флейм) и Stratocaster-копия ----------
  const spl = (pts) => { const sp = new THREE.Shape(); sp.moveTo(pts[0][0], pts[0][1]); sp.splineThru(pts.slice(1).concat([pts[0]]).map(p => new THREE.Vector2(p[0], p[1]))); return sp; };
  const LP_PTS = [[-0.07, 0.47], [-0.115, 0.44], [-0.135, 0.38], [-0.12, 0.31], [-0.105, 0.26], [-0.14, 0.2], [-0.165, 0.1], [-0.16, 0.01], [-0.1, -0.045], [0, -0.055], [0.1, -0.045], [0.16, 0.01], [0.165, 0.1], [0.145, 0.2], [0.125, 0.27], [0.1, 0.31], [0.095, 0.36], [0.075, 0.44], [0.04, 0.47]];
  const ST_PTS = [[-0.05, 0.47], [-0.085, 0.5], [-0.12, 0.47], [-0.115, 0.4], [-0.1, 0.33], [-0.105, 0.27], [-0.14, 0.22], [-0.165, 0.12], [-0.16, 0.02], [-0.1, -0.045], [0, -0.055], [0.1, -0.045], [0.16, 0.02], [0.165, 0.12], [0.14, 0.2], [0.1, 0.26], [0.115, 0.34], [0.13, 0.42], [0.115, 0.48], [0.07, 0.49], [0.04, 0.47]];
  function flameMap(a, b, seed) {
    const c = TX.cv(128, 256), x = c.getContext('2d'), r = TX.rng(seed);
    const g = x.createLinearGradient(0, 0, 128, 256); g.addColorStop(0, a); g.addColorStop(1, b);
    x.fillStyle = g; x.fillRect(0, 0, 128, 256);
    for (let i = 0; i < 46; i++) { x.strokeStyle = `rgba(${r() < 0.5 ? '200,255,230' : '10,60,50'},${0.06 + r() * 0.14})`; x.lineWidth = 2 + r() * 5; x.beginPath(); const y0 = r() * 256; x.moveTo(0, y0); x.bezierCurveTo(40, y0 + (r() - 0.5) * 60, 90, y0 + (r() - 0.5) * 60, 128, y0 + (r() - 0.5) * 50); x.stroke(); }
    const t = TX.toTex(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.repeat.set(1 / 0.36, 1 / 0.56); t.offset.set(0.5, 0.1); return t;
  }
  const gtrBody = (pts, topMat, sideMat, depth) => {
    const geo = new THREE.ExtrudeGeometry(spl(pts), { depth, bevelEnabled: true, bevelSize: 0.004, bevelThickness: 0.004, bevelSegments: 1, curveSegments: low ? 6 : 10 });
    const me = new THREE.Mesh(geo, [topMat, sideMat]); me.position.z = -depth / 2; return me;
  };
  const chromeM = M(0xcfd3d8, { roughness: 0.25, metalness: 0.95 }), goldM = M(0xd9b24a, { roughness: 0.3, metalness: 0.9 });
  function neckAndHead(g, neckCol, fingerCol, headCol, strat) {
    B(g, 0.046, 0.55, 0.026, M(neckCol, { roughness: 0.5 }), 0, 0.47 + 0.275, -0.002);
    B(g, 0.042, 0.52, 0.006, M(fingerCol, { roughness: 0.55 }), 0, 0.47 + 0.27, 0.014);
    for (const f of [0.1, 0.16, 0.21, 0.255, 0.295, 0.33, 0.36, 0.385]) B(g, 0.043, 0.0016, 0.008, chromeM, 0, 0.47 + f * 1.3 - 0.02, 0.016);
    [0.15, 0.27, 0.36, 0.45].forEach(d => SPH(g, 0.005, M(0xefe9d0), 0, 0.47 + d, 0.019));
    const hy = 0.47 + 0.55 + 0.08;
    B(g, strat ? 0.062 : 0.06, 0.17, 0.02, M(headCol, { roughness: 0.4 }), 0, hy, -0.002);
    for (let i = 0; i < 6; i++) {
      const side = strat ? 1 : (i < 3 ? -1 : 1), k = strat ? i : i % 3;
      CYL(g, 0.007, 0.007, 0.02, chromeM, side * 0.036, hy - 0.06 + k * (strat ? 0.026 : 0.045), 0.0, 8, 0, Math.PI / 2);
    }
    B(g, 0.046, 0.008, 0.014, M(0xefe9d0), 0, 0.47 + 0.55 + 0.002, 0.012);
  }
  function guitarLP(parent, x, z, ry, tilt = -0.14) {
    const root = new THREE.Group(); root.position.set(x, 0.06, z); root.rotation.y = ry; parent.add(root);
    const g = new THREE.Group(); g.rotation.x = tilt; root.add(g);
    const top = new THREE.MeshStandardMaterial({ map: flameMap('#0e8f7a', '#05402f', 71), roughness: 0.22, metalness: 0.15 });
    g.add(gtrBody(LP_PTS, top, M(0x0a0a0c, { roughness: 0.3 }), 0.05));
    neckAndHead(g, 0x6a3a1c, 0x2a160c, 0x15100d, false);
    const pu = M(0xe9dfc2, { roughness: 0.5 });
    [0.4, 0.22].forEach((py) => { B(g, 0.082, 0.04, 0.016, pu, 0, py, 0.03); for (let k = 0; k < 6; k++) { SPH(g, 0.004, chromeM, -0.032 + k * 0.0128, py - 0.009, 0.039); SPH(g, 0.004, chromeM, -0.032 + k * 0.0128, py + 0.009, 0.039); } });
    B(g, 0.1, 0.012, 0.012, chromeM, 0, 0.115, 0.032); B(g, 0.1, 0.014, 0.014, chromeM, 0, 0.05, 0.032);
    const amber = M(0xe89a1a, { roughness: 0.3 });
    [[0.075, 0.03], [0.1, 0.085], [0.07, 0.15], [0.11, 0.2]].forEach(([kx, ky]) => { CYL(g, 0.014, 0.012, 0.022, amber, kx, ky, 0.04, 12, Math.PI / 2); });
    B(g, 0.03, 0.01, 0.01, goldM, -0.095, 0.3, 0.03);
    return root;
  }
  function guitarStrat(parent, x, z, ry, tilt = -0.14) {
    const root = new THREE.Group(); root.position.set(x, 0.06, z); root.rotation.y = ry; parent.add(root);
    const g = new THREE.Group(); g.rotation.x = tilt; root.add(g);
    const body = M(0x19b9ad, { roughness: 0.2, metalness: 0.2 });
    g.add(gtrBody(ST_PTS, body, body, 0.045));
    const pg = spl(ST_PTS.map(p => [p[0] * 0.8, (p[1] - 0.2) * 0.78 + 0.2]));
    const pgm = new THREE.Mesh(new THREE.ShapeGeometry(pg), M(0xf3f0e6, { roughness: 0.4 })); pgm.position.z = 0.0275; g.add(pgm);
    neckAndHead(g, 0xd9b36a, 0xc79a52, 0xd9b36a, true);
    const wh = M(0xf5f2e8, { roughness: 0.4 });
    [0.4, 0.3, 0.2].forEach((py) => { B(g, 0.085, 0.022, 0.014, wh, 0, py, 0.036); for (let k = 0; k < 6; k++) SPH(g, 0.0035, chromeM, -0.032 + k * 0.0128, py, 0.044); });
    B(g, 0.11, 0.07, 0.014, chromeM, 0, 0.1, 0.034); B(g, 0.1, 0.012, 0.016, chromeM, 0, 0.14, 0.04);
    [[0.04, 0.17], [0.075, 0.115], [0.095, 0.065]].forEach(([kx, ky]) => CYL(g, 0.012, 0.011, 0.02, wh, kx + 0.01, ky - 0.02, 0.04, 10, Math.PI / 2));
    CYL(g, 0.012, 0.012, 0.012, chromeM, -0.06, 0.02, 0.03, 10, Math.PI / 2);
    return root;
  }
  function gStand(parent, x, z, ry) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; parent.add(g);
    const bm = mat.black;
    for (let i = 0; i < 3; i++) { const a = i * 2.094 + 0.5; B(g, 0.02, 0.02, 0.3, bm, Math.cos(a) * 0.1, 0.012, Math.sin(a) * 0.1, -a + Math.PI / 2); }
    CYL(g, 0.012, 0.012, 0.5, bm, 0, 0.26, 0, 8);
    B(g, 0.22, 0.02, 0.02, bm, 0, 0.5, 0); B(g, 0.02, 0.18, 0.02, bm, 0, 0.58, -0.07);
    return g;
  }
  { gStand(H, 3.5, 2.45, -Math.PI / 2); guitarLP(H, 3.52, 2.45, -Math.PI / 2, -0.1); }

  // --- стеллаж ---
  const sh = new THREE.Group(); sh.position.x = -1.69; H.add(sh);   // стеллаж 3,2 м вдоль северной стены
  const shMat = M(0x666c73, { roughness: 0.35, metalness: 0.9 });
  [[1.9, 0.12], [5.1, 0.12], [1.9, 0.62], [5.1, 0.62]].forEach(([px, pz]) => B(sh, 0.05, 2.15, 0.05, shMat, px, 1.075, pz));
  const levels = [0.15, 0.78, 1.38, 1.98];
  levels.forEach(y => B(sh, 3.2, 0.04, 0.5, shMat, 3.5, y, 0.37));
  texBox(sh, 1.9, 0.05, 0.05, 5.1, 2.2, 0.1, M(0x0a1038, { roughness: 1, emissive: 0x0a1c70, emissiveIntensity: 0.3 }), 1);
  const rgbSegs = [];
  levels.forEach((y, i) => { if (i > 0) for (let k = 0; k < 8; k++) { const m = emi(0xff0000, 1.7); rgbSegs.push({ m, k: k + i * 2 }); B(sh, 0.4, 0.025, 0.025, m, 2.1 + k * 0.4, y - 0.04, 0.6); } });
  glowSprite(sh, 0x9a7aff, 3.2, 3.5, 1.1, 0.7, 0.16);
  // ивы-лианы на стойках
  const ivyG = new THREE.IcosahedronGeometry(0.06, 0);
  for (let k = 0; k < (low ? 26 : 60); k++) {
    const post = [1.9, 5.1, 3.5][k % 3];
    const m = new THREE.Mesh(ivyG, mat.ivy); m.position.set(post + (Math.random() - 0.5) * 0.12, 0.4 + Math.random() * 1.9, 0.14 + Math.random() * 0.1);
    m.scale.set(1.2, 0.8 + Math.random(), 0.5); sh.add(m);
  }
  // ЭЛТ телевизоры
  const crtC = [TX.cv(128, 96), TX.cv(128, 96)];
  const crtT = crtC.map(c => TX.toTex(c));
  crtT.forEach(t => { t.generateMipmaps = false; t.minFilter = THREE.LinearFilter; });
  function crt(parent, x, y, z, w, tex, ry = 0) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; parent.add(g);
    const gray = M(0x303337, { roughness: 0.55 });
    B(g, w, w * 0.84, w * 0.78, gray, 0, w * 0.42, 0);
    B(g, w * 0.7, w * 0.6, w * 0.4, gray, 0, w * 0.42, -w * 0.5);
    B(g, w * 0.86, w * 0.68, 0.02, M(0x15171a, { roughness: 0.3 }), -0.02 * w, w * 0.45, w * 0.39 + 0.012);
    const sc = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.72, w * 0.56), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 1.35, roughness: 0.2 }));
    sc.position.set(-0.02 * w, w * 0.45, w * 0.39 + 0.025); sc.userData.crt = true; g.add(sc);
    glowSprite(g, 0x70ff90, w * 1.6, -0.02 * w, w * 0.45, w * 0.5, 0.18);
    return g;
  }
  crt(H, 0.5, 0.0, 1.05, 0.56, crtT[0], 0.5);
  crt(H, 0.5, 0.48, 1.05, 0.5, crtT[1], 0.4);
  crt(sh, 4.55, 1.4, 0.42, 0.34, crtT[0]);
  B(H, 0.6, 0.02, 0.6, M(0x222), 0.5, 0.01, 1.05, 0.5);
  // техника на полках
  // турнтейбл
  B(sh, 0.5, 0.1, 0.38, M(0xc9c4b4, { roughness: 0.5 }), 3.4, 0.85, 0.37);
  CYL(sh, 0.15, 0.15, 0.015, M(0x101010), 3.34, 0.915, 0.37, 24);
  B(sh, 0.45, 0.012, 0.02, M(0x222), 3.4, 0.92, 0.2);
  // счётчик купюр
  B(sh, 0.3, 0.2, 0.28, M(0xd7d2c4), 2.7, 0.9, 0.37); B(sh, 0.18, 0.04, 0.2, M(0x6f8f5c), 2.7, 1.02, 0.37);
  // книги
  const bk = [0x6a1e1e, 0x1e3a6a, 0x3a5a2a, 0x7a5a1a, 0x4a2a5a, 0x555];
  for (let i = 0; i < 9; i++) B(sh, 0.05, 0.22 + (i % 3) * 0.03, 0.18, M(bk[i % bk.length], { roughness: 0.8 }), 4.2 + i * 0.055, 0.92, 0.38);
  // бюст-торс белый + подсветка
  const bust = new THREE.Group(); bust.position.set(4.9, 1.38, 0.38); sh.add(bust);
  SPH(bust, 0.15, M(0xe9ecf2, { roughness: 0.45 }), 0, 0.12, 0, 1.2, 1.2, 0.8);
  SPH(bust, 0.07, M(0xe9ecf2, { roughness: 0.45 }), 0, 0.33, 0, 1, 1.1, 1);
  B(bust, 0.5, 0.01, 0.01, emi(0x3a7aff, 1.8), 0, -0.05, 0.2);
  // трофей
  CYL(sh, 0.06, 0.04, 0.2, mat.gold, 4.0, 0.9, 0.37, 14); SPH(sh, 0.06, mat.gold, 4.0, 1.06, 0.37, 1.1, 0.9, 1.1);
  // баскетбольные мячи
  const ballM = M(0xffffff, { map: T.ball, roughness: 0.7 });
  SPH(sh, 0.12, ballM, 2.4, 1.5, 0.4); SPH(sh, 0.12, ballM, 4.4, 0.27, 0.4);
  // коробки и кейсы на верхней полке
  B(sh, 0.4, 0.28, 0.3, M(0x808890, { roughness: 0.35, metalness: 0.6 }), 2.3, 2.17, 0.37);
  B(sh, 0.46, 0.04, 0.17, M(0xd0462b), 3.2, 2.02, 0.37, 0.1);
  B(sh, 0.3, 0.3, 0.28, M(0x4e5258, { roughness: 0.5 }), 4.3, 2.18, 0.37);
  // бумбокс
  const bb = new THREE.Group(); bb.position.set(4.7, 2.1, 0.37); sh.add(bb);
  B(bb, 0.46, 0.2, 0.15, M(0xb4b8bc, { roughness: 0.35, metalness: 0.5 }), 0, 0, 0);
  [-0.15, 0.15].forEach(sx => { CYL(bb, 0.06, 0.06, 0.01, M(0x151515), sx, 0, 0.08, 16, Math.PI / 2); });
  B(bb, 0.1, 0.06, 0.012, M(0x222), 0, 0.03, 0.078);
  // скейтборд красный
  { // скейтборд (красная дека с графикой) стоит на верхней полке
    // деку ставим на ребро вдоль полки (длина по X), у задней стенки, колёсами к стенке
    const skO = new THREE.Group(); skO.position.set(3.9, 2.1, 0.2); skO.rotation.set(-0.08, Math.PI / 2, 0); sh.add(skO);
    const sk = new THREE.Group(); sk.rotation.z = Math.PI / 2; skO.add(sk);
    const deck = M(0xc9381f, { roughness: 0.4 });
    B(sk, 0.2, 0.012, 0.8, deck, 0, 0, 0); B(sk, 0.2, 0.012, 0.1, deck, 0, 0.012, 0.42, 0, -0.35); B(sk, 0.2, 0.012, 0.1, deck, 0, 0.012, -0.42, 0, 0.35);
    B(sk, 0.14, 0.013, 0.5, M(0xf1c40f, { roughness: 0.5 }), 0, 0.0005, 0);
    [[0.09, 0.26], [-0.09, 0.26], [0.09, -0.26], [-0.09, -0.26]].forEach(([wx, wz]) => CYL(sk, 0.03, 0.03, 0.04, M(0xf3f3ef), wx, -0.03, wz, 10, 0, Math.PI / 2));
  }
  // синтезатор
  B(sh, 0.72, 0.05, 0.26, M(0x15171a, { roughness: 0.5 }), 4.55, 0.2, 0.37);
  B(sh, 0.66, 0.012, 0.1, M(0xf2efe6, { roughness: 0.5 }), 4.55, 0.23, 0.42);
  for (let q = 0; q < 12; q++) B(sh, 0.025, 0.014, 0.06, mat.black, 4.3 + q * 0.045, 0.235, 0.44);
  B(sh, 0.66, 0.02, 0.07, mat.darkSteel, 4.55, 0.23, 0.3);
  // противогаз и мелочь на нижних полках
  SPH(sh, 0.08, M(0x151515, { roughness: 0.6 }), 2.8, 1.46, 0.37); SPH(sh, 0.04, mat.black, 2.74, 1.5, 0.45); SPH(sh, 0.04, mat.black, 2.86, 1.5, 0.45);
  B(sh, 0.3, 0.1, 0.22, M(0x222), 3.8, 1.45, 0.37); B(sh, 0.2, 0.08, 0.2, M(0xb03a2a), 4.2, 1.44, 0.37);
  B(sh, 0.3, 0.14, 0.2, M(0x333), 2.2, 0.22, 0.37); B(sh, 0.25, 0.1, 0.25, M(0x6c4a2e), 3.0, 0.2, 0.37);
  B(sh, 0.36, 0.15, 0.22, M(0xb9b3a0), 3.7, 0.24, 0.37);
  // потолочные рельсы
  [1.3, 3.2].forEach(z => B(H, HW, 0.04, 0.04, mat.darkSteel, HW / 2, 2.88, z));
  [0.7, 3.06].forEach(x => B(H, 0.04, 0.04, HD, mat.darkSteel, x, 2.88, HD / 2));
  // потолочные софитчики
  SPH(H, 0.07, emi(0xffffff, 1.6), 1.9, 2.84, 1.3); glowSprite(H, 0xffffff, 1.0, 1.9, 2.8, 1.3, 0.6);
  // --- стол: цельная плита с «живым» краем на чёрных ножках (по фото и Cinema 4D) ---
  const tbl = new THREE.Group(); H.add(tbl);
  const dark = M(0x1c120b, { roughness: 0.6 });
  const topM = new THREE.MeshStandardMaterial({ map: T.tableWood, roughness: 0.5, color: 0x8f7d6c, emissive: 0x2a1608, emissiveMap: T.tableWood, emissiveIntensity: 0.12 });
  {
    const tw = 0.9, tl = 1.7, tx = HW / 2, tz = 1.99;
    const g = new THREE.BoxGeometry(tw, 0.06, tl);
    const tt = new THREE.Mesh(g, [dark, dark, topM, dark, dark, dark]);
    tt.position.set(tx, 0.76, tz); tbl.add(tt);
    B(tbl, 0.04, 0.05, 0.5, dark, tx - tw / 2 - 0.012, 0.76, tz - 0.3); B(tbl, 0.04, 0.05, 0.4, dark, tx + tw / 2 + 0.012, 0.76, tz + 0.35);
    [[-0.34, -0.7], [0.34, -0.7], [-0.34, 0.7], [0.34, 0.7]].forEach(([lx, lz]) => { B(tbl, 0.05, 0.73, 0.05, mat.black, tx + lx, 0.365, tz + lz); });
    B(tbl, 0.7, 0.04, 0.05, mat.black, tx, 0.7, tz - 0.7); B(tbl, 0.7, 0.04, 0.05, mat.black, tx, 0.7, tz + 0.7);
  }
  // микрофон AT2020 в «пауке» + сетчатый поп-фильтр на чёрном журавле, струбцина на краю стола
  const meshC = TX.cv(32, 32); { const x = meshC.getContext('2d'); x.fillStyle = '#0d0d0f'; x.fillRect(0, 0, 32, 32); x.strokeStyle = '#3a3a3f'; x.lineWidth = 1; for (let i = 0; i < 32; i += 4) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 32); x.moveTo(0, i); x.lineTo(32, i); x.stroke(); } }
  const meshT = TX.toTex(meshC); meshT.repeat.set(3, 2);
  const popM = new THREE.MeshStandardMaterial({ map: meshT, roughness: 0.8, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
  function boomMic(clampX, clampZ, tx, ty, tz) {
    const g = new THREE.Group(); g.position.set(clampX, 0.79, clampZ); tbl.add(g);
    const bk = M(0x0d0d10, { roughness: 0.5, metalness: 0.3 });
    B(g, 0.07, 0.085, 0.06, bk, 0, -0.02, 0);
    CYL(g, 0.014, 0.014, 0.22, bk, 0, 0.14, 0, 8);
    SPH(g, 0.028, bk, 0, 0.26, 0);
    const dx = tx - clampX, dz = tz - clampZ, len = Math.hypot(dx, dz);
    const arm = new THREE.Group(); arm.position.set(0, 0.26, 0); arm.rotation.y = Math.atan2(dx, dz); g.add(arm);
    const rise = ty - 0.79 - 0.26, ang = Math.atan2(rise, len - 0.04), L = Math.hypot(rise, len - 0.04);
    const seg = B(arm, 0.022, 0.022, L, bk, 0, rise / 2, (len - 0.04) / 2); seg.rotation.x = -ang;
    SPH(arm, 0.022, bk, 0, rise, len - 0.04);
    const mic = new THREE.Group(); mic.position.set(0, rise, len); mic.rotation.set(Math.PI / 2 - 0.35, 0, 0); arm.add(mic);
    CYL(mic, 0.0245, 0.0245, 0.15, bk, 0, 0, 0, 14);
    CYL(mic, 0.0262, 0.0262, 0.04, M(0x2b2b30, { roughness: 0.35, metalness: 0.8 }), 0, 0.095, 0, 14);
    CYL(mic, 0.0268, 0.0268, 0.006, chromeM, 0, 0.06, 0, 14);
    for (const yy of [-0.03, 0.05]) { const tr = new THREE.Mesh(new THREE.TorusGeometry(0.043, 0.0035, 6, 18), bk); tr.rotation.x = Math.PI / 2; tr.position.y = yy; mic.add(tr); }
    [[0.04, 0], [-0.04, 0], [0, 0.04], [0, -0.04]].forEach(([qx, qz]) => { B(mic, 0.003, 0.09, 0.003, bk, qx, 0.01, qz); });
    CYL(mic, 0.012, 0.012, 0.05, chromeM, 0, -0.1, 0, 8);
    const pf = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.13, 18, 1, true, -Math.PI / 2, Math.PI), popM);
    pf.position.set(0, 0.07, 0.03); mic.add(pf);
    return g;
  }
  boomMic(1.46, 2.45, 1.12, 1.18, 1.8);
  boomMic(2.3, 2.45, 2.64, 1.18, 1.8);
  boomMic(1.88, 1.18, 1.88, 1.16, 1.5);
  // кресла
  function chair(x, z, ry) {
    const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = ry; H.add(c);
    const vm = new THREE.MeshStandardMaterial({ color: 0x1b1c21, roughness: 0.85, side: THREE.DoubleSide });
    CYL(c, 0.27, 0.25, 0.1, vm, 0, 0.46, 0, 20);
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.42, 20, 1, true, Math.PI * 0.38, Math.PI * 1.24), vm);
    back.position.set(0, 0.76, 0); c.add(back);
    B(c, 0.05, 0.4, 0.05, mat.black, 0, 0.23, 0); B(c, 0.4, 0.03, 0.04, mat.black, 0, 0.03, 0); B(c, 0.04, 0.03, 0.4, mat.black, 0, 0.03, 0);
    [[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]].forEach(([lx, lz]) => B(c, 0.02, 0.43, 0.02, mat.black, lx * 0.8, 0.21, lz * 0.8));
  }
  chair(1.1, 1.99, Math.PI / 2 - 0.25); chair(2.66, 1.99, -Math.PI / 2 + 0.25);
  // чёрный кожаный диван между дверями (южная стена)
  { const bs = M(0x0f0f12, { roughness: 0.32, metalness: 0.15 });
    const bsofa = new THREE.Group(); bsofa.position.set(HW / 2, 0, HD - 0.55); H.add(bsofa);
    B(bsofa, 1.9, 0.38, 0.8, bs, 0, 0.3, 0); B(bsofa, 1.9, 0.5, 0.18, bs, 0, 0.72, 0.33);
    B(bsofa, 0.18, 0.3, 0.82, bs, -0.95, 0.55, 0); B(bsofa, 0.18, 0.3, 0.82, bs, 0.95, 0.55, 0);
    B(bsofa, 0.84, 0.14, 0.64, bs, -0.42, 0.55, -0.03); B(bsofa, 0.84, 0.14, 0.64, bs, 0.42, 0.55, -0.03);
    [[-0.85, -0.3], [0.85, -0.3], [-0.85, 0.3], [0.85, 0.3]].forEach(([a, b]) => B(bsofa, 0.04, 0.1, 0.04, mat.steel, a, 0.05, b)); }
  // маркерная доска над диваном (на южной стене), на ней остаётся рисунок
  const wbG = new THREE.Group(); wbG.position.set(HW / 2, 1.75, HD - 0.07); H.add(wbG);
  B(wbG, 2.0, 1.2, 0.03, M(0xb9bdc4, { roughness: 0.35, metalness: 0.8 }), 0, 0, 0);
  const wbCanvas = TX.cv(1024, 576); { const x = wbCanvas.getContext('2d'); x.fillStyle = '#f4f5f7'; x.fillRect(0, 0, 1024, 576); }
  const wbTex = TX.toTex(wbCanvas); wbTex.wrapS = wbTex.wrapT = THREE.ClampToEdgeWrapping;
  const wbMesh = plane(wbG, 1.92, 1.12, new THREE.MeshStandardMaterial({ map: wbTex, roughness: 0.25, emissive: 0xffffff, emissiveMap: wbTex, emissiveIntensity: 0.14 }), 0, 0, -0.018, '-z');
  wbMesh.userData.board = true; wbMesh.userData.noPaint = true;
  B(wbG, 1.0, 0.025, 0.07, M(0xb9bdc4, { roughness: 0.4, metalness: 0.7 }), 0, -0.62, -0.03);
  [[-0.2, 0xe53935], [0.0, 0x1e88e5], [0.2, 0x111111]].forEach(([mx, mc]) => B(wbG, 0.12, 0.02, 0.02, M(mc), mx, -0.595, -0.045));
  // напольная колонка (чёрный корпус с деревянной крышкой) у восточной стены
  { const sp = new THREE.Group(); sp.position.set(3.45, 0, 4.7); sp.rotation.y = -Math.PI / 2 - 0.1; H.add(sp);
    B(sp, 0.42, 0.78, 0.34, M(0x0c0c0e, { roughness: 0.7 }), 0, 0.39, 0); B(sp, 0.44, 0.03, 0.36, M(0x7a4a28, { roughness: 0.5 }), 0, 0.795, 0);
    [[0.52, 0.12], [0.2, 0.15]].forEach(([yy, rr]) => { CYL(sp, rr, rr, 0.02, M(0x1a1a1d, { roughness: 0.5 }), 0, yy, 0.175, 22, Math.PI / 2); CYL(sp, rr * 0.35, rr * 0.35, 0.03, M(0x2a2a2e), 0, yy, 0.18, 12, Math.PI / 2); }); }
  // чемодан на столике
  const sc = new THREE.Group(); sc.position.set(3.3, 0, 1.65); sc.rotation.y = -Math.PI / 2; H.add(sc);
  [[-0.25, -0.2], [0.25, -0.2], [-0.25, 0.2], [0.25, 0.2]].forEach(([lx, lz]) => B(sc, 0.025, 0.55, 0.025, mat.black, lx, 0.275, lz));
  B(sc, 0.62, 0.03, 0.46, M(0x7a5a38, { roughness: 0.6 }), 0, 0.56, 0);
  const plaidM = M(0xffffff, { map: T.plaid, roughness: 0.8 });
  loadProp('models/high/suitcase.glb', sc, { keep: true, y: 0.575 });   // чемодан с деньгами из GLB (Higgsfield), крышка на петлях
  // пальмы
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0); leafShape.quadraticCurveTo(0.07, 0.35, 0, 0.9); leafShape.quadraticCurveTo(-0.07, 0.35, 0, 0);
  const leafG = new THREE.ShapeGeometry(leafShape);
  const leafLong = (() => { const s = new THREE.Shape(); s.moveTo(0, 0); s.quadraticCurveTo(0.14, 0.5, 0, 1.2); s.quadraticCurveTo(-0.14, 0.5, 0, 0); return new THREE.ShapeGeometry(s); })();
  function palm(parent, x, z, h, kind = 0) {
    const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
    CYL(g, 0.17, 0.14, 0.36, M(0x101012, { roughness: 0.7 }), 0, 0.18, 0, 14);
    CYL(g, 0.15, 0.15, 0.02, M(0x1a120c), 0, 0.37, 0, 14);
    const n = low ? 9 : 16;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.3;
      const st = Math.random() * 0.25;
      if (kind === 0) {
        CYL(g, 0.012, 0.012, h * 0.6, M(0x4a6a2a), Math.cos(a) * 0.04, 0.36 + h * 0.3, Math.sin(a) * 0.04, 5, 0.0, 0);
        const lf = new THREE.Mesh(leafLong, i % 2 ? mat.leaf : mat.leaf2);
        lf.position.set(Math.cos(a) * 0.04, 0.36 + h * 0.55, Math.sin(a) * 0.04);
        lf.rotation.set(0, -a + Math.PI / 2, 0); lf.rotateX(-(0.9 + st)); lf.scale.set(1.2, h * 0.8, 1);
        g.add(lf);
      } else {
        const lf = new THREE.Mesh(leafG, i % 2 ? mat.leaf : mat.leaf2);
        lf.position.set(0, 0.35 + Math.random() * 0.3, 0);
        lf.rotation.set(0, -a + Math.PI / 2, 0); lf.rotateX(-(0.2 + Math.random() * 0.5));
        lf.scale.set(1.3, h * 0.9, 1); g.add(lf);
      }
    }
    return g;
  }
  function softPlant(parent, x, z, h, spread, seedN) {
    const g = new THREE.Group(); g.position.set(x, 0, z); parent.add(g);
    CYL(g, 0.17, 0.14, 0.34, M(0x15161a, { roughness: 0.6 }), 0, 0.17, 0, low ? 10 : 18);
    CYL(g, 0.15, 0.15, 0.02, M(0x2a1a10), 0, 0.35, 0, low ? 10 : 18);
    const r = TX.rng(seedN), n = low ? 9 : 18, segs = low ? 4 : 9, A = [[], []];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + r() * 0.5, len = h * (0.62 + r() * 0.38), sp = spread * (0.5 + r() * 0.5), ca = Math.cos(a), sa = Math.sin(a), w0 = (low ? 0.11 : 0.085) * (0.8 + r() * 0.5);
      const pts = [];
      for (let k = 0; k <= segs; k++) { const t = k / segs; pts.push([ca * sp * Math.pow(t, 1.5), 0.36 + len * (t - 0.62 * t * t), sa * sp * Math.pow(t, 1.5), w0 * Math.pow(Math.sin(Math.PI * Math.min(1, t * 0.9 + 0.1)), 0.8) + 0.004]); }
      const arr = A[i % 2];
      for (let k = 0; k < segs; k++) {
        const p = pts[k], q = pts[k + 1];
        const L = [-sa * p[3], 0, ca * p[3]], L2 = [-sa * q[3], 0, ca * q[3]];
        const v = [[p[0] - L[0], p[1], p[2] - L[2]], [p[0] + L[0], p[1], p[2] + L[2]], [q[0] + L2[0], q[1], q[2] + L2[2]], [q[0] - L2[0], q[1], q[2] - L2[2]]];
        [0, 1, 2, 0, 2, 3].forEach(ix => arr.push(...v[ix]));
      }
    }
    A.forEach((arr, i) => { const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); geo.computeVertexNormals(); g.add(new THREE.Mesh(geo, i ? mat.leaf2 : mat.leaf)); });
    return g;
  }
  softPlant(H, 3.1, 1.0, 1.9, 0.5, 11); softPlant(H, 0.62, 2.05, 1.35, 0.42, 12); softPlant(H, 0.6, 4.55, 1.3, 0.42, 13);
  // две «подставки» у пальмы справа
  // софтбоксы (8-угольные)
  const sbMat = [M(0x0c0c0e, { roughness: 0.9 }), M(0x0c0c0e), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: T.softbox, emissiveIntensity: 0.95, map: T.softbox })];
  function softbox(x, y, z, lookAt, r = 0.5) {
    const g = new THREE.Group(); g.position.set(x, y, z); H.add(g);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.55, r, 0.32, 8, 1), sbMat);
    m.position.y = 0; g.add(m);
    g.lookAt(lookAt.x, lookAt.y, lookAt.z);
    // lookAt направляет +z на цель; цилиндр ось y → повернуть, чтобы низ (большой торец) смотрел на цель
    m.rotation.x = -Math.PI / 2;
    // тонкие LED по краю
    const led = new THREE.Mesh(new THREE.TorusGeometry(r * 0.95, 0.01, 6, 8), emi(0xdff0ff, 1.5));
    led.rotation.x = 0; led.position.z = 0.16; led.rotation.z = Math.PI / 8; g.add(led);
    B(g, 0.03, 0.6, 0.03, mat.black, 0, 0.3, -0.2); // тяга
    glowSprite(g, 0xcfe0ff, r * 3, 0, 0, 0.3, 0.2);
    return g;
  }
  softbox(0.97, 2.47, 1.96, new THREE.Vector3(1.88, 0.9, 1.99), 0.58);
  softbox(2.79, 2.47, 1.96, new THREE.Vector3(1.88, 0.9, 1.99), 0.58);
  // LED панель над стеллажом
  const panel = new THREE.Group(); panel.position.set(1.9, 2.5, 0.85); panel.rotation.x = 0.35; H.add(panel);
  B(panel, 1.3, 0.2, 0.05, M(0x15161a), 0, 0, 0);
  plane(panel, 1.22, 0.14, new THREE.MeshStandardMaterial({ color: 0, emissive: 0xffffff, emissiveMap: T.softbox, emissiveIntensity: 1.5 }), 0, 0, 0.03, '+z', [3, 1]);
  glowSprite(panel, 0xe8f0ff, 2.2, 0, 0, 0.4, 0.3);
  // плющ вдоль верха красного ковра
  const ivyPlane = (() => {
    const c = TX.cv(512, 128), x = c.getContext('2d'), r = TX.rng(61);
    for (let i = 0; i < 360; i++) {
      x.fillStyle = `rgba(${30 + r() * 40},${100 + r() * 70},${40 + r() * 30},${0.75 + r() * 0.25})`;
      const px = r() * 512, py = r() * r() * 128;
      x.beginPath(); x.ellipse(px, py, 9 + r() * 6, 6 + r() * 3, r() * 3, 0, 7); x.fill();
    }
    for (let i = 0; i < 40; i++) { x.strokeStyle = 'rgba(30,90,30,.9)'; x.lineWidth = 1.5; x.beginPath(); const px = r() * 512; x.moveTo(px, 0); x.lineTo(px + (r() - 0.5) * 20, 30 + r() * 90); x.stroke(); }
    return TX.toTex(c);
  })();
  plane(H, HD, 0.9, new THREE.MeshStandardMaterial({ map: ivyPlane, transparent: true, alphaTest: 0.35, roughness: 0.9, side: THREE.DoubleSide, emissive: 0x0f3a14, emissiveIntensity: 0.6, emissiveMap: ivyPlane }), 0.05, 2.3, HD / 2, '+x');
  // неоновый «REC» над дверью (маленький красный индикатор)
  SPH(H, 0.05, emi(0xff2a2a, 1.8), HW - 0.2, 2.35, 3.45); glowSprite(H, 0xff2020, 0.7, HW - 0.2, 2.35, 3.45, 0.6);

  // ======================================================
  //  СТУДИЯ ЗВУКА
  // ======================================================
  const U = G.studio;
  U.position.x = -5.09; U.position.z = 0.14;   // комната записи 2,90 x 5,14: x 4.01..6.91, z 0..5.14
  const blackWall = M(0x08080b, { roughness: 1 });
  texBox(U, 9.1, -0.1, -0.14, 12, 0, 5, mat.blueCarpet, 1.0);
  texBox(U, 9.1, wy, -0.14, 12, wy + 0.1, 5, mat.ceil, 1);
  texBox(U, 9.1, 0, -0.34, 12.2, wy + 0.1, -0.14, blackWall, 1);   // север
  texBox(U, 12, 0, -0.34, 12.2, wy + 0.1, 5.2, blackWall, 1);   // восток
  texBox(U, 9.1, 0, 5.0, 12.2, wy + 0.1, 5.2, blackWall, 1);   // юг
  // поролон на западной стене (звукоизоляция), на восточной и северной — панели
  plane(U, 1.0, 2.4, mat.foam, 9.12, 1.3, 4.45, '+x', [1.5, 3.6]);
  plane(U, 1.0, 2.4, mat.foam, 9.12, 1.3, 2.4, '+x', [1.5, 3.6]);
  plane(U, 2.4, 1.6, mat.foam, 11.98, 1.3, 1.2, '-x', [3.5, 2.5]);
  plane(U, 2.4, 1.6, mat.foam, 11.98, 1.3, 3.8, '-x', [3.5, 2.5]);
  plane(U, 1.6, 1.6, mat.foam, 10.5, 1.3, -0.16, '+z', [2.4, 2.4]);
  plane(U, 2.6, 1.8, mat.foam, 10.5, wy - 0.01, 3.5, '-y', [4, 3]);
  // пульт-стол
  const desk = new THREE.Group(); U.add(desk);
  const deskM = M(0xffffff, { map: T.concreteDark, roughness: 0.55, color: 0x888d95 });
  B(desk, 0.8, 0.05, 2.1, deskM, 9.55, 0.75, 1.25);
  [[9.2, 0.3], [9.2, 2.2], [9.9, 0.3], [9.9, 2.2]].forEach(([a, b]) => B(desk, 0.05, 0.72, 0.05, mat.black, a, 0.36, b));
  // изогнутый монитор (3 сегмента) у окна
  const dawM = new THREE.MeshStandardMaterial({ color: 0, emissive: 0xffffff, emissiveMap: T.daw, emissiveIntensity: 1.1, map: T.daw });
  const segs = 3, mw = 1.0;
  for (let i = 0; i < segs; i++) {
    const a = (i - 1) * 0.28;
    const sg = new THREE.Group(); sg.position.set(9.4 + Math.abs(i - 1) * 0.0 + Math.cos(a) * 0.0, 1.12, 1.2 + (i - 1) * 0.34); sg.rotation.y = Math.PI / 2 + (i - 1) * 0.28; desk.add(sg);
    sg.position.x = 9.38 + (i === 1 ? 0 : 0.04);
    const pm = new THREE.Mesh(new THREE.PlaneGeometry(mw / segs, 0.34), new THREE.MeshStandardMaterial({ color: 0, emissive: 0xffffff, emissiveMap: T.daw, emissiveIntensity: 1.2, map: T.daw }));
    pm.material.map = T.daw.clone(); pm.material.emissiveMap = pm.material.map; pm.material.map.needsUpdate = true;
    pm.material.map.repeat.set(1 / segs, 1); pm.material.map.offset.set(i / segs, 0);
    pm.position.z = 0.0; sg.add(pm);
    B(sg, mw / segs, 0.36, 0.02, mat.black, 0, 0, -0.012);
  }
  B(desk, 0.05, 0.28, 0.08, mat.black, 9.3, 0.9, 1.2);
  glowSprite(desk, 0x5aa0ff, 2.2, 9.6, 1.1, 1.2, 0.22);
  // клавиатура, мышь, MIDI-пэд
  B(desk, 0.18, 0.015, 0.5, mat.black, 9.65, 0.785, 1.15); B(desk, 0.14, 0.04, 0.2, M(0x1a1a22), 9.8, 0.795, 0.6);
  // мониторы студийные (жёлтые)
  [[9.4, 0.3], [9.4, 2.1]].forEach(([a, b]) => { B(desk, 0.24, 0.36, 0.28, mat.black, a, 1.0, b); CYL(desk, 0.085, 0.085, 0.02, M(0xd7a31a, { roughness: 0.5 }), a + 0.12, 1.0, b, 16, 0, Math.PI / 2); });
  // револьвер на столе (можно подобрать)
  const revProp = new THREE.Group(); revProp.position.set(9.72, 0.79, 0.62); revProp.rotation.y = 0.5; U.add(revProp);
  { const st = M(0x9aa3ae, { roughness: 0.4, metalness: 0.5 });
    B(revProp, 0.28, 0.045, 0.05, st, 0, 0.03, 0); B(revProp, 0.09, 0.07, 0.045, st, -0.14, 0.04, 0);
    CYL(revProp, 0.032, 0.032, 0.05, st, -0.1, 0.045, 0, 14, Math.PI / 2);
    B(revProp, 0.05, 0.09, 0.04, M(0x6b3d22, { roughness: 0.6 }), -0.19, -0.01, 0, 0, 0, 0.35);
    glowSprite(revProp, 0xffd070, 0.7, 0, 0.05, 0, 0.5); }
  loadProp('models/high/revolver_prop.glb', revProp, { rotY: -Math.PI / 2, y: -0.005 });   // новая модель револьвера на столе (из GLB)
  // операторское кресло
  const ch = new THREE.Group(); ch.position.set(10.45, 0, 1.0); ch.rotation.y = -Math.PI / 2 + 0.3; U.add(ch);
  B(ch, 0.5, 0.1, 0.5, M(0x15161a, { roughness: 0.5 }), 0, 0.5, 0); B(ch, 0.5, 0.4, 0.1, M(0x8a867a, { roughness: 0.6 }), 0, 0.78, -0.24);
  B(ch, 0.5, 0.1, 0.12, M(0x15161a), 0, 1.0, -0.24); CYL(ch, 0.03, 0.03, 0.4, mat.darkSteel, 0, 0.25, 0, 8); B(ch, 0.5, 0.04, 0.04, mat.darkSteel, 0, 0.04, 0); B(ch, 0.04, 0.04, 0.5, mat.darkSteel, 0, 0.04, 0);
  // стол звукорежиссёра (пульт, мониторы, кресло, револьвер) переезжает к северной стене лицом на юг
  const pultG = new THREE.Group(); U.add(pultG); pultG.add(desk, revProp, ch);
  pultG.rotation.y = -Math.PI / 2; pultG.position.set(11.8, 0, -9.29);
  // вокальная зона
  const vox = new THREE.Group(); vox.position.set(11.3, 0, 4.1); U.add(vox);
  for (let i = 0; i < 3; i++) { const a = i * 2.094; B(vox, 0.03, 0.03, 0.4, mat.black, Math.cos(a) * 0.17, 0.04, Math.sin(a) * 0.17, -a + Math.PI / 2); }
  CYL(vox, 0.018, 0.018, 1.45, mat.black, 0, 0.75, 0, 8);
  B(vox, 0.02, 0.02, 0.35, mat.black, 0.0, 1.5, -0.14);
  // INVOTONE CM400L: серебристый корпус, сетка-решётка, чёрный «паук»
  const micM = M(0xb9bec6, { roughness: 0.3, metalness: 0.9 });
  const grC = TX.cv(32, 32); { const x = grC.getContext('2d'); x.fillStyle = '#9ea4ad'; x.fillRect(0, 0, 32, 32); x.strokeStyle = '#d8dce2'; x.lineWidth = 1; for (let i = 0; i < 32; i += 3) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 32); x.moveTo(0, i); x.lineTo(32, i); x.stroke(); } }
  const grT = TX.toTex(grC); grT.repeat.set(4, 2);
  CYL(vox, 0.031, 0.031, 0.19, micM, 0, 1.47, -0.3, 18);
  CYL(vox, 0.034, 0.034, 0.1, M(0xffffff, { map: grT, metalness: 0.8, roughness: 0.4 }), 0, 1.6, -0.3, 18);
  SPH(vox, 0.034, M(0xffffff, { map: grT, metalness: 0.8, roughness: 0.4 }), 0, 1.65, -0.3);
  CYL(vox, 0.034, 0.034, 0.008, M(0x2a55c8, { roughness: 0.3, metalness: 0.5 }), 0, 1.53, -0.3, 18);
  for (const yy of [1.42, 1.56]) { const tr = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.004, 6, 20), mat.black); tr.rotation.x = Math.PI / 2; tr.position.set(0, yy, -0.3); vox.add(tr); }
  [[0.05, 0], [-0.05, 0], [0, 0.05], [0, -0.05]].forEach(([qx, qz]) => B(vox, 0.004, 0.16, 0.004, mat.black, qx, 1.49, -0.3 + qz));
  // поп-фильтр
  const pop = new THREE.Mesh(new THREE.CircleGeometry(0.1, 24), new THREE.MeshStandardMaterial({ color: 0x111, transparent: true, opacity: 0.55, side: THREE.DoubleSide }));
  pop.position.set(0.0, 1.5, -0.17); vox.add(pop);
  const popR = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.006, 6, 24), mat.black); popR.position.copy(pop.position); vox.add(popR);
  CYL(vox, 0.01, 0.01, 0.3, mat.black, 0.0, 1.35, -0.17, 6);
  // наушники на стойке
  const hp = new THREE.Group(); hp.position.set(11.6, 1.1, 1.0); U.add(hp);
  CYL(hp, 0.01, 0.01, 1.0, mat.black, 0, -0.55, 0, 6);
  const hpm = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.012, 8, 20, Math.PI), mat.black); hpm.rotation.z = 0; hp.add(hpm);
  CYL(hp, 0.05, 0.05, 0.03, mat.black, -0.09, -0.02, 0, 12, 0, Math.PI / 2); CYL(hp, 0.05, 0.05, 0.03, mat.black, 0.09, -0.02, 0, 12, 0, Math.PI / 2);
  // гитара на стойке
  gStand(U, 11.68, 2.35, -Math.PI / 2); guitarStrat(U, 11.7, 2.35, -Math.PI / 2, -0.1);   // бирюзовый Stratocaster
  // чёрная маска на стене
  SPH(U, 0.14, M(0x050505, { roughness: 0.4 }), 11.95, 1.9, 2.6, 0.3, 1.2, 0.8); glowSprite(U, 0x66aaff, 0.8, 11.9, 1.9, 2.6, 0.12);
  // ---- белый диван у входа и стеклянный журнальный столик ----
  { const wm = M(0xf2f0f4, { roughness: 0.32 });
    const sofa = new THREE.Group(); sofa.position.set(10.1, 0, 4.58); U.add(sofa);
    B(sofa, 1.9, 0.38, 0.8, wm, 0, 0.3, 0); B(sofa, 1.9, 0.5, 0.18, wm, 0, 0.72, 0.33);
    B(sofa, 0.18, 0.3, 0.82, wm, -0.95, 0.55, 0); B(sofa, 0.18, 0.3, 0.82, wm, 0.95, 0.55, 0);
    B(sofa, 0.84, 0.14, 0.64, wm, -0.42, 0.55, -0.03); B(sofa, 0.84, 0.14, 0.64, wm, 0.42, 0.55, -0.03);
    [[-0.85, -0.3], [0.85, -0.3], [-0.85, 0.3], [0.85, 0.3]].forEach(([a, b]) => B(sofa, 0.04, 0.1, 0.04, mat.steel, a, 0.05, b));
    B(sofa, 0.38, 0.38, 0.1, M(0xd0489a, { roughness: 0.6 }), -0.6, 0.72, 0.12, 0.2); B(sofa, 0.36, 0.36, 0.1, M(0x2b2d33, { roughness: 0.6 }), 0.62, 0.7, 0.12, -0.15);
    const gt = new THREE.Group(); gt.position.set(10.0, 0, 3.85); U.add(gt);
    B(gt, 0.9, 0.012, 0.45, new THREE.MeshStandardMaterial({ color: 0xcdeaff, transparent: true, opacity: 0.32, roughness: 0.04, metalness: 0.2, depthWrite: false }), 0, 0.42, 0);
    B(gt, 0.92, 0.02, 0.47, mat.steel, 0, 0.405, 0);
    [[-0.42, -0.2], [0.42, -0.2], [-0.42, 0.2], [0.42, 0.2]].forEach(([a, b]) => B(gt, 0.025, 0.4, 0.025, mat.steel, a, 0.2, b));
    // цветы в стеклянной вазе
    CYL(gt, 0.05, 0.04, 0.2, new THREE.MeshStandardMaterial({ color: 0xcfeaff, transparent: true, opacity: 0.35, roughness: 0.05 }), -0.2, 0.53, 0.0, 14);
    [[0xff4f9a, 0.0, 0.0], [0xffd23a, 0.05, 0.03], [0xff7a3a, -0.04, 0.04], [0xf4f4f4, 0.03, -0.05], [0xc23cff, -0.05, -0.03]].forEach(([fc, fx, fz], i) => {
      B(gt, 0.008, 0.2 + i * 0.02, 0.008, M(0x2f8a3a), -0.2 + fx, 0.7 + i * 0.01, fz);
      SPH(gt, 0.04, M(fc, { roughness: 0.6 }), -0.2 + fx, 0.84 + i * 0.02, fz, 1, 0.7, 1);
    });
    B(gt, 0.26, 0.012, 0.18, M(0x1a1a22), 0.2, 0.436, 0.02, 0.3); B(gt, 0.26, 0.006, 0.18, M(0xe94a2a), 0.2, 0.446, 0.02, 0.3); }
  // ---- стол с вертушками (дальний конец комнаты, у северной стены) ----
  { const tt = new THREE.Group(); tt.position.set(9.45, 0, 1.2); tt.rotation.y = Math.PI / 2; U.add(tt);
    const wd = M(0x2a1d15, { roughness: 0.55 });
    B(tt, 1.6, 0.05, 0.55, wd, 0, 0.8, 0);
    [[-0.74, -0.22], [0.74, -0.22], [-0.74, 0.22], [0.74, 0.22]].forEach(([a, b]) => B(tt, 0.05, 0.78, 0.05, mat.black, a, 0.39, b));
    B(tt, 1.5, 0.03, 0.5, wd, 0, 0.3, 0);
    for (let i = 0; i < 18; i++) B(tt, 0.012, 0.28, 0.3, M([0xd9d2c0, 0x1a1a1d, 0xb8352a, 0x2d4a8a][i % 4]), -0.7 + i * 0.04, 0.45, 0.02);
    [[-0.45, 1], [0.45, -1]].forEach(([dx, side]) => {
      B(tt, 0.44, 0.06, 0.4, M(0x22242a, { roughness: 0.4, metalness: 0.4 }), dx, 0.855, 0);
      CYL(tt, 0.15, 0.15, 0.015, M(0x0c0c0e), dx - 0.03, 0.89, 0, 28); CYL(tt, 0.155, 0.155, 0.008, chromeM, dx - 0.03, 0.88, 0, 28); CYL(tt, 0.045, 0.045, 0.018, M(0xd9402a), dx - 0.03, 0.896, 0, 16);
      B(tt, 0.012, 0.012, 0.26, chromeM, dx + 0.17 * side, 0.9, 0.04, 0.3 * side); CYL(tt, 0.02, 0.02, 0.03, chromeM, dx + 0.17 * side, 0.9, -0.12, 10);
      B(tt, 0.02, 0.008, 0.2, M(0x888a90), dx + 0.19 * side, 0.89, 0.0);
    });
    B(tt, 0.34, 0.07, 0.36, mat.black, 0, 0.855, 0);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) CYL(tt, 0.012, 0.012, 0.014, M(0xc9cdd3, { metalness: 0.8, roughness: 0.3 }), -0.1 + c * 0.065, 0.895, -0.12 + r * 0.06, 8);
    B(tt, 0.08, 0.006, 0.02, chromeM, 0, 0.893, 0.14);
    B(tt, 0.26, 0.004, 0.012, emi(0x19f0ff, 1.5), 0, 0.892, 0.165);
  }
  // ---- MIDI-клавиатура (49 клавиш) на пульте звукорежиссёра ----
  { const kc = TX.cv(64, 512); { const x = kc.getContext('2d'); x.fillStyle = '#f2f2f4'; x.fillRect(0, 0, 64, 512); x.strokeStyle = '#555'; x.lineWidth = 1;
      for (let i = 0; i <= 29; i++) { const y = i * 512 / 29; x.beginPath(); x.moveTo(0, y); x.lineTo(64, y); x.stroke(); }
      x.fillStyle = '#0b0b0d'; const blk = [1, 1, 0, 1, 1, 1, 0]; for (let i = 0; i < 28; i++) if (blk[i % 7]) x.fillRect(0, (i + 1) * 512 / 29 - 7, 38, 14); }
    const kt = TX.toTex(kc);
    const midi = new THREE.Group(); midi.position.set(9.78, 0.775, 1.62); desk.add(midi);
    B(midi, 0.3, 0.035, 0.84, M(0x15161a, { roughness: 0.4 }), 0, 0.0175, 0);
    const keys = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.76), new THREE.MeshBasicMaterial({ map: kt })); keys.rotation.set(-Math.PI / 2, 0, 0); keys.position.set(0.045, 0.037, 0); midi.add(keys);
    for (let k = 0; k < 4; k++) CYL(midi, 0.012, 0.012, 0.012, M(0xd9d9de), -0.1, 0.04, -0.3 + k * 0.1, 8);
    for (let p = 0; p < 4; p++) B(midi, 0.04, 0.012, 0.04, emi([0xff2e97, 0x19f0ff, 0xffe36a, 0x7cff6b][p], 1.2), -0.1, 0.041, 0.1 + p * 0.06 - 0.0);
  }
  // холодная подсветка (LED-ленты)
  [-0.1, 4.95].forEach(z => B(U, 2.8, 0.04, 0.04, emi(0x3a66ff, 1.6), 10.6, wy - 0.08, z));
  B(U, 0.04, 0.04, 5.0, emi(0x3a66ff, 1.4), 11.9, wy - 0.08, 2.4);
  glowSprite(U, 0x3a66ff, 5, 10.8, 2.5, 2.0, 0.12);
  // красная REC лампочка
  SPH(U, 0.05, emi(0xff2a2a, 1.8), 11.95, 2.3, 3.6); glowSprite(U, 0xff2020, 0.8, 11.9, 2.3, 3.6, 0.6);

  // ======================================================
  //  СВЕТ
  // ======================================================
  const amb = new THREE.HemisphereLight(0x9a86c8, 0x3a2030, 0.55);
  scene.add(amb);
  const lights = [];
  for (let i = 0; i < 6; i++) {
    const l = new THREE.PointLight(0xffffff, 0, 10, 2);
    scene.add(l); lights.push(l);
  }
  const lightState = { zone: null };
  function setZoneLights(zone, snap) {
    lightState.zone = zone;
    lightState.target = LIGHTS[zone];
    lightState.fog = FOG[zone];
    lightState.amb = { street: 1.5, chai: 0.8, entry: 0.3, hall: 0.3, studio: 0.85 }[zone];
    if (snap) applyLights(1);
  }
  const tmpC = new THREE.Color();
  function applyLights(a) {
    const tg = lightState.target;
    lights.forEach((l, i) => {
      const t = tg[i];
      l.position.x += (t.p[0] - l.position.x) * a; l.position.y += (t.p[1] - l.position.y) * a; l.position.z += (t.p[2] - l.position.z) * a;
      tmpC.setHex(t.c); l.color.lerp(tmpC, a);
      l.intensity += (t.i - l.intensity) * a; l.distance += (t.d - l.distance) * a;
    });
    const f = lightState.fog;
    scene.fog.color.lerp(tmpC.setHex(f[0]), a); scene.fog.density += (f[1] - scene.fog.density) * a;
    scene.background.lerp(tmpC.setHex(f[0]), a);
    amb.intensity += (lightState.amb - amb.intensity) * a;
  }

  // видимость групп по зоне
  const VIS = {
    chai: ['street', 'stairs', 'chai'],
    street: ['street', 'stairs', 'entry', 'chai'],
    entry: ['street', 'stairs', 'entry', 'hall'],
    hall: ['entry', 'hall', 'studio'],
    studio: ['hall', 'studio']
  };
  function setVisibility(zone) {
    const v = VIS[zone];
    for (const n in G) G[n].visible = v.includes(n);
  }

  // ======================================================
  //  ХОТСПОТЫ
  // ======================================================
  const BOOK = (s) => `../index.html?service=${s}#book`;
  const hotspots = [
    { id: 'crt', zone: 'hall', pos: [0.5, 0.75, 1.05], title: 'Старые телевизоры в кадре', text: 'На экранах идёт картинка с камер студии: зелёный фосфор, шум, таймкод REC. Такой фон оживляет кадр.', img: 'hall-wide-1', service: 'podcast-express' },
    { id: 'suitcase', zone: 'hall', pos: [3.32, 0.85, 1.6], title: 'Чемодан', text: 'Чемодан «заряжен на деньги». Реквизит можно переставить под тему выпуска.', img: 'detail-suitcase', service: 'rent' },
    { id: 'retro', zone: 'hall', pos: [1.7, 1.0, 0.45], title: 'Стеллаж с инструментами и техникой', text: 'Три гитары, синтезатор, проигрыватель, магнитофоны и книги. Всё настоящее, без бутафории — это ретро-эстетика в кадре.', img: 'detail-turntable', service: 'rent' },
    { id: 'mural', zone: 'hall', pos: [3.7, 1.5, 1.4], title: 'Граффити-стена', text: 'Большой чёрно-белый рисунок на зелёной стене — фирменный фон студии. Рядом дверь в комнату звукозаписи.', img: 'hall-wide-2', service: 'rent' },
    { id: 'light', zone: 'hall', pos: [0.97, 2.3, 1.96], title: 'Свет RGB', text: 'Цвет света подбираем под настроение выпуска. Два больших софтбокса и панель сверху дают мягкую картинку.', img: 'hall-wide-3', service: 'podcast-express' },
    { id: 'table', zone: 'hall', pos: [1.88, 0.9, 1.99], title: 'Стол и три микрофона', text: 'Три микрофона на журавлях, три камеры 4K, запись в мультикам. Садись за стол — проверим звук.', img: 'hall-table', service: 'podcast-express' },
    { id: 'sofa', zone: 'hall', pos: [1.88, 0.8, 4.4], title: 'Чёрный кожаный диван', text: 'Диван между входом и дверью в звукозапись. Можно посидеть, пока мы готовим свет и звук.', img: 'hall-both', service: 'rent', sit: { x: 1.88, z: 4.5, yaw: 0, ox: 1.88, oz: 3.8 } },
    { id: 'sofa2', zone: 'studio', pos: [5.01, 0.8, 4.6], title: 'Белый диван', text: '', img: null, service: null, sit: { x: 5.01, z: 4.62, yaw: 0, ox: 5.75, oz: 3.9 } },
    { id: 'console', zone: 'studio', pos: [5.51, 1.1, 0.25], title: 'Тот же фрагмент после сведения', text: 'Звукорежиссёр сидит в той же комнате, что и исполнитель, — без стеклянной стены между вами. Сравни с записью до обработки.', img: 'engineer-1', service: 'sound-vocal', audio: 'demo-after.mp3' },
    { id: 'vocal', zone: 'studio', pos: [6.21, 1.45, 4.24], title: 'Голос до обработки', text: 'Комната небольшая — поэтому голос в ней плотный, а не гулкий. Послушай запись до обработки.', img: 'mic-neumann', service: 'sound-vocal', audio: 'demo-before.mp3' },
    { id: 'wall', zone: 'studio', pos: [4.15, 1.4, 4.0], title: 'Звукоизолированная стена', text: 'Между залом и комнатой звукозаписи — звукоизоляция. Можно писать подкаст и голос одновременно, не мешая друг другу. Пакет «Трек + обложка + сниппет + Reels — 13 900 ₽».', img: 'vocal-2', service: 'pack' },
    { id: 'revolver', zone: 'studio', pos: [6.09, 0.9, 0.57], title: 'Револьвер на столе', text: '', img: null, service: null, pickup: true },
    { id: 'board', zone: 'hall', pos: [1.88, 1.75, 4.9], title: 'Доска для рисунков', text: 'Нарисуй баллончиком на белой доске над диваном. Рисунок остаётся здесь, и его увидят другие гости.', img: null, service: null },
    { id: 'turn', zone: 'studio', pos: [4.4, 1.0, 1.34], title: 'Вертушки и микшер', text: 'Отдельный стол с двумя проигрывателями и микшером. Можно записать сэмплы с винила.', img: 'detail-turntable', service: 'sound-vocal' },
    { id: 'pasha', zone: 'studio', pos: [5.71, 1.25, 1.0], title: 'Паша, звукорежиссёр', text: 'Привет, я Паша. Записываю и свожу. Расскажи, что хочешь записать: голос, трек или подкаст. Подберём формат и время. Портфолио: сведение вокала, реклама, подкасты. Примеры до и после — ниже, остальное на странице «Звукозапись».', img: 'engineer-1', service: 'sound-vocal', audio: 'demo-after.mp3' },
    { id: 'dj', zone: 'entry', pos: [-2.3, 1.5, 2.3], title: 'Школа диджеев — идёт ремонт', text: 'Здесь только начали ремонт, дверь закрыта. Тебе — направо, в студию.', img: null, service: null },
    { id: 'sign', zone: 'street', pos: [-0.2, 8.7, 6.0], title: 'REVOLVER PODCAST · REVOLVER SOUND', text: 'Студии на Фрунзе, 49: видеоподкасты и запись голоса. Вход по лестнице вниз, потом направо.', img: 'hall-both', service: 'pack' }
  ].map(h => Object.assign(h, { pos: new THREE.Vector3(...h.pos), href: h.service ? BOOK(h.service) : null }));

  // ======================================================
  //  UPDATE
  // ======================================================
  const clockT = { t: 0 };
  const sdev = [{ i: 0, t: 0 }, { i: 1, t: 0 }];
  let glitch = 0;
  function glitchFx(c) {
    const x = c.getContext('2d');
    for (let k = 0; k < 5; k++) { const y = Math.random() * c.height, h = 3 + Math.random() * 10; x.drawImage(c, 0, y, c.width, h, (Math.random() - 0.5) * 40, y, c.width, h); }
    x.fillStyle = 'rgba(255,255,255,.55)'; x.fillRect(0, Math.random() * c.height, c.width, 2);
    x.fillStyle = 'rgba(255,0,60,.25)'; x.fillRect(0, Math.random() * c.height, c.width, 6);
  }
  const _dv = new THREE.Vector3();
  function update(dt, px, pz, zone) {
    clockT.t += dt;
    const t = clockT.t;
    // двери
    for (const d of doors) {
      d.grp.localToWorld(_dv.set(d.cx, 0, d.cz));
      const dist = Math.hypot(px - _dv.x, pz - _dv.z);
      d.target = dist < 2.0 ? d.open : 0;
      d.cur += (d.target - d.cur) * Math.min(1, dt * 4.5);
      d.pivot.rotation.y = d.cur;
    }
    // RGB-подсветка стеллажа
    for (const sg of rgbSegs) sg.m.color.setHSL(((t * 0.07 + sg.k / 16) % 1), 1, 0.5).multiplyScalar(1.7);
    LIGHTS.hall[1].c = new THREE.Color().setHSL((t * 0.07) % 1, 1, 0.5).getHex();
    // свет
    applyLights(Math.min(1, dt * 3.2));
    // ЭЛТ
    if (zone === 'hall' || zone === 'entry') {
      sdev[0].t += dt; sdev[1].t += dt;
      if (glitch > 0) glitch -= dt;
      if (sdev[0].t > 0.085) { sdev[0].t = 0; ART.crtFrame(crtC[0], t, 1, (t * 100) | 0); if (glitch > 0) glitchFx(crtC[0]); crtT[0].needsUpdate = true; }
      if (sdev[1].t > 0.12) { sdev[1].t = 0; ART.crtFrame(crtC[1], t + 5, 2, (t * 77) | 0); if (glitch > 0) glitchFx(crtC[1]); crtT[1].needsUpdate = true; }
    }
    // машины
    if (zone === 'street' || zone === 'entry' || zone === 'chai') {
      for (const c of cars) {
        const u = c.userData;
        u.p += u.dir * u.speed * dt;
        if (u.p > 110) u.p = -110; if (u.p < -110) u.p = 110;
        if (u.axis === 'x') c.position.x = u.p; else c.position.z = u.p;
      }
      arrow.position.y = SY + 2.35 + Math.sin(t * 3) * 0.05; arrow2.position.y = arrow.position.y;
    }
  }

  scene.updateMatrixWorld(true);
  return {
    scene, groups: G, hotspots, update, setZoneLights, setVisibility, redrawMural, redrawDoor, redrawSign: () => { ART.drawSign(signC); signT.needsUpdate = true; },
    doors, lights, amb, glitch: (v) => { glitch = v; }, hideRevolverProp: () => { revProp.visible = false; },
    board: { canvas: wbCanvas, texture: wbTex }
  };
}
