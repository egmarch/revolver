import * as THREE from 'three';
import carpetUrl from './tex/carpet.jpg';
import woodUrl from './tex/wood.jpg';
import * as TX from './tex.js';
import * as ART from './art.js';

export const EYE = 1.62;
export const PLAYER_R = 0.3;
export const STAIR = { x0: 3.75, x1: 5.25, z0: 14.4, z1: 19.2, n: 16, rise: 3.0 };

// --- логика высоты (ступени) ---
export function groundY(x, z) {
  if (z >= STAIR.z1) return 3.0;
  if (z <= STAIR.z0) return 0;
  const k = Math.floor((z - STAIR.z0) / ((STAIR.z1 - STAIR.z0) / STAIR.n));
  return (k + 1) * (STAIR.rise / STAIR.n);
}

// центры допустимых положений (уже отступ от стен)
export const WALK = [
  [-3.7, 13.7, 19.5, 24.2],     // тротуар
  [4.05, 4.95, 4.6, 19.8],      // лестница, тамбур, коридор, дверь в зал
  [0.3, 5.7, 0.3, 4.7],         // зал
  [5.5, 6.5, 3.25, 3.65],       // дверь зал-лаундж
  [6.4, 8.6, 0.3, 4.7],         // лаундж
  [8.5, 9.6, 3.25, 3.65],       // дверь лаундж-студия
  [9.4, 11.7, -0.7, 4.7]        // студия
];
// препятствия (сырые прямоугольники x0,x1,z0,z1)
export const OBST = [
  [1.9, 5.1, 0.0, 0.7],      // стеллаж
  [1.05, 1.8, 0.1, 0.95],    // ЭЛТ-стойка
  [2.42, 3.58, 1.3, 4.0],    // стол
  [1.72, 2.28, 1.72, 2.28],  // кресло
  [3.72, 4.15, 1.72, 2.28],  // кресло
  [5.05, 5.9, 1.0, 1.8],     // столик с чемоданом
  [5.5, 5.95, 1.95, 2.7],    // гитары
  [5.0, 5.6, 2.45, 3.0],     // пальма
  [5.1, 5.9, 4.0, 4.9],      // пальма + конус
  [0.1, 0.8, 0.85, 1.45],    // пальма у ковра
  [0.1, 0.8, 4.1, 4.9],      // пальма
  [6.8, 8.7, 0.1, 1.1],      // диван
  [7.05, 8.15, 1.7, 2.5],    // журнальный стол
  [8.3, 8.9, 3.9, 4.9],      // тумба
  [9.1, 10.05, 0.1, 2.4],    // пульт
  [10.1, 10.9, 0.5, 1.5],    // кресло оператора
  [10.85, 11.35, 2.45, 2.95] // стойка микрофона
];

const ZONE_NAMES = {
  street: ['Улица · Фрунзе 49', 'Ночь. Вход в подвал — вниз по лестнице'],
  entry: ['Вход · тамбур и коридор', 'Металлическая дверь, газеты и фиолетовый свет'],
  hall: ['REVOLVER PODCAST · 30 м²', 'Видеопавильон для подкастов'],
  lounge: ['Лаундж', 'Диван, постеры и звукоизоляция'],
  studio: ['REVOLVER SOUND · студия звукозаписи · 18 м²', 'Акустически обработанная комната']
};
export { ZONE_NAMES };

export function zoneAt(x, z) {
  if (z > 14.4) return 'street';
  if (x > 3.6 && x < 5.4 && z > 5.2) return 'entry';
  if (x < 6.0) return 'hall';
  if (x < 9.0) return 'lounge';
  return 'studio';
}

export const TELEPORTS = {
  1: { x: 2.6, z: 22.2, yaw: -0.5, pitch: -0.18 },
  2: { x: 3.6, z: 4.62, yaw: 0.12, pitch: -0.02 },
  3: { x: 7.5, z: 4.5, yaw: 0.08, pitch: -0.1 },
  4: { x: 10.7, z: 4.5, yaw: 0.28, pitch: -0.1 }
};

const LIGHTS = {
  street: [
    { p: [9.5, 5.6, 21.2], c: 0xff6a50, i: 22, d: 14 },
    { p: [5.8, 5.0, 18.6], c: 0xfff1d0, i: 22, d: 12 },
    { p: [-1.2, 7.6, 22], c: 0xffa550, i: 110, d: 26 },
    { p: [4.5, 2.4, 15.5], c: 0xbfd2ff, i: 16, d: 8 },
    { p: [4.5, 4.2, 26], c: 0x6c8cff, i: 50, d: 20 },
    { p: [4.5, 1.7, 12.2], c: 0xd57bff, i: 4, d: 6 }
  ],
  entry: [
    { p: [4.5, 2.4, 12.0], c: 0xffe3b8, i: 7, d: 6 },
    { p: [4.5, 2.3, 9.0], c: 0xff2bd6, i: 3, d: 6 },
    { p: [4.5, 2.3, 6.6], c: 0xb02bff, i: 3, d: 6 },
    { p: [4.5, 2.2, 14.0], c: 0xbfd2ff, i: 9, d: 6 },
    { p: [4.5, 2.0, 4.0], c: 0xffffff, i: 2, d: 5 },
    { p: [4.5, 1.8, 8.0], c: 0xff40ff, i: 1.5, d: 4 }
  ],
  hall: [
    { p: [3.0, 2.5, 2.8], c: 0xdfe8ff, i: 9, d: 9 },
    { p: [3.4, 1.4, 1.0], c: 0x3a62ff, i: 5, d: 4.5 },
    { p: [5.0, 2.3, 2.4], c: 0xe6ffe8, i: 6, d: 6 },
    { p: [0.9, 1.6, 2.4], c: 0xff6a3a, i: 4, d: 4.5 },
    { p: [1.5, 2.4, 4.0], c: 0xffffff, i: 4, d: 6 },
    { p: [4.5, 2.2, 4.8], c: 0xd070ff, i: 2, d: 4 }
  ],
  lounge: [
    { p: [7.5, 2.3, 1.8], c: 0xffd9a8, i: 14, d: 8 },
    { p: [7.6, 2.2, 3.8], c: 0xfff0e0, i: 10, d: 6 },
    { p: [6.4, 1.5, 3.4], c: 0x35e06b, i: 5, d: 4 },
    { p: [8.6, 1.6, 2.2], c: 0x4a9bff, i: 4, d: 5 },
    { p: [7.5, 0.5, 1.0], c: 0xff8a50, i: 2, d: 3 },
    { p: [4.8, 1.8, 3.4], c: 0xdfe8ff, i: 2, d: 5 }
  ],
  studio: [
    { p: [10.0, 1.7, 1.3], c: 0x5aa0ff, i: 16, d: 6 },
    { p: [10.9, 2.4, 2.8], c: 0xcfe0ff, i: 18, d: 7 },
    { p: [11.3, 1.4, 0.4], c: 0x3a58ff, i: 9, d: 5 },
    { p: [10.4, 2.5, 4.2], c: 0x9ab8ff, i: 12, d: 7 },
    { p: [9.6, 1.4, 3.8], c: 0xff9a60, i: 2.5, d: 3 },
    { p: [11.5, 1.0, 2.0], c: 0xff2b2b, i: 3, d: 3 }
  ]
};
const FOG = {
  street: [0x0b1020, 0.022, 0.8],
  entry: [0x120a1a, 0.045, 0.55],
  hall: [0x05060a, 0.05, 0.5],
  lounge: [0x06070a, 0.055, 0.5],
  studio: [0x03040a, 0.055, 0.45]
};

export function buildWorld(opts = {}) {
  const low = !!opts.low;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070a14);
  scene.fog = new THREE.FogExp2(0x0b1020, 0.022);

  const G = {};
  ['street', 'stairs', 'entry', 'hall', 'lounge', 'studio'].forEach(n => { G[n] = new THREE.Group(); G[n].name = n; scene.add(G[n]); });

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
    carpetRed: TX.imgTex(carpetUrl, { repeat: [1, 1], mirror: true }),
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
    ceil: M(0x0b0b0d, { roughness: 1 }),
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
  const CYL = (parent, rt, rb, h, m, x, y, z, seg = 16, rx = 0, rz = 0) => {
    const me = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
    me.position.set(x, y, z); me.rotation.set(rx, 0, rz); parent.add(me); return me;
  };
  const SPH = (parent, r, m, x, y, z, sx = 1, sy = 1, sz = 1) => {
    const me = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), m);
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

  // ======================================================
  //  УЛИЦА
  // ======================================================
  const S = G.street;
  texBox(S, -9, 2.4, 8, 3.75, 3.0, 25, mat.pave, 2);              // левая плита
  texBox(S, 3.75, 2.4, 19.2, 5.25, 3.0, 25, mat.pave, 2);        // перед лестницей
  texBox(S, 5.25, 2.4, 19.2, 24, 3.0, 25, mat.pave, 2);           // правый тротуар
  texBox(S, -60, 1.6, 25, 80, 2.9, 80, mat.asphalt, 6);           // проезжая часть
  texBox(S, -9, 2.4, 24.8, 24, 2.95, 25.2, mat.concrete, 1);      // бордюр
  // разметка
  const lineM = M(0x9a9a9a, { roughness: 0.6 });
  for (let i = -8; i < 24; i += 3) plane(S, 1.4, 0.16, lineM, i, 2.915, 31, '+y');
  for (let i = 0; i < 9; i++) plane(S, 0.5, 5.2, lineM, 1 + i * 0.9, 2.915, 28.0, '+y');
  // фасад дома справа
  texBox(G.stairs, 5.25, 0, 13.2, 6.2, 3.0, 19.2, mat.brick, 2);                    // кирпичная стена лестницы (низ)
  texBox(S, 5.25, 3.0, 10, 24, 3.45, 19.2, mat.darkSteel, 1);                          // карниз-козырёк
  texBox(S, 5.25, 3.45, 10, 24, 10.5, 19.2, [mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.facade, mat.concreteDark], [2.4, 2.4]);
  // низ фасада (витрины) — поверх
  plane(S, 18.7, 1.9, mat.facade, 14.6, 4.45, 19.21, '+z', [4, 1]);
  plane(S, 3.5, 1.9, mat.facade, 7.0, 4.45, 19.21, '+z', [1, 1]);
  // вывеска
  const signC = TX.cv(1024, 256); ART.drawSign(signC);
  const signT = TX.toTex(signC);
  const signM = new THREE.MeshBasicMaterial({ map: signT, toneMapped: false });
  texBox(S, 6.3, 5.3, 19.1, 13.7, 6.9, 19.25, mat.black, 1);
  plane(S, 7.2, 1.5, signM, 10.0, 6.1, 19.27, '+z');
  glowSprite(S, 0xff3020, 11, 10.0, 6.1, 19.7, 0.28);
  // стрелка вниз
  const arrC = TX.cv(128, 160); ART.drawArrow(arrC);
  const arrM = new THREE.MeshBasicMaterial({ map: TX.toTex(arrC), transparent: true, toneMapped: false, depthWrite: false });
  const arrow = plane(S, 0.9, 1.1, arrM, 4.5, 4.35, 19.0, '+z');
  const arrow2 = plane(S, 0.9, 1.1, arrM, 4.5, 4.35, 19.0, '-z');
  glowSprite(S, 0xff3a2a, 2.5, 4.5, 4.35, 19.0, 0.35);
  // кронштейн стрелки
  B(S, 0.05, 1.2, 0.05, mat.darkSteel, 4.5, 5.0, 18.8);
  // шар-фонарь
  SPH(S, 0.32, emi(0xfff3d8, 1.1), 5.75, 5.0, 18.9);
  glowSprite(S, 0xfff0cc, 3.4, 5.75, 5.0, 18.9, 0.6);
  // левый парапет лестницы
  texBox(G.stairs, 3.45, 0, 13.2, 3.75, 4.0, 19.2, [mat.brick, mat.brick, mat.pave, mat.brick, mat.brick, mat.brick], 2);
  // кондиционер с тегом
  const tagC = TX.cv(256, 256); ART.drawTag(tagC);
  const tagM = M(0xffffff, { map: TX.toTex(tagC), roughness: 0.7 });
  const acBody = M(0x9a9c98, { roughness: 0.7 });
  const AC = [acBody, acBody, acBody, acBody, tagM, acBody];
  texBox(S, 2.5, 3.0, 17.4, 3.4, 4.05, 18.4, AC, 1);
  // ограждения на тротуаре (вдоль северного края, граница ходьбы)
  const railM = mat.steel;
  for (let x = -3.9; x <= 3.5; x += 1.4) B(S, 0.05, 1.0, 0.05, railM, x, 3.5, 19.25);
  B(S, 7.6, 0.05, 0.05, railM, -0.2, 3.95, 19.25); B(S, 7.6, 0.05, 0.05, railM, -0.2, 3.55, 19.25);
  // ограждение по бордюру
  for (let x = -8; x <= 23; x += 1.5) B(S, 0.05, 0.95, 0.05, railM, x, 3.47, 24.6);
  B(S, 32, 0.05, 0.05, railM, 7.5, 3.9, 24.6); B(S, 32, 0.05, 0.05, railM, 7.5, 3.45, 24.6);
  // торцевые здания слева и справа
  const bW = M(0xffffff, { map: TX.toTex(TX.windowsCanvas(31, 8, 12), rep), emissive: 0xffffff, roughness: 0.8 });
  bW.emissiveMap = bW.map; bW.emissiveIntensity = 0.65;
  texBox(S, -30, 0, -2, -9, 18, 30, [bW, bW, mat.concreteDark, mat.concreteDark, bW, bW], [6, 6]);
  // дома через дорогу
  const bxs = [[-30, 12, 46, 20], [-14, 10, 52, 28], [-2, 14, 47, 18], [14, 10, 50, 32], [26, 12, 46, 22], [40, 14, 52, 26]];
  bxs.forEach(([bx, bw, bz, bh], i) => {
    const wm = M(0xffffff, { map: TX.toTex(TX.windowsCanvas(40 + i, 9, 14), rep), emissive: 0xffffff, roughness: 0.9 });
    wm.emissiveMap = wm.map; wm.emissiveIntensity = 0.55;
    texBox(S, bx, 0, bz, bx + bw, bh, bz + 10, [wm, wm, mat.concreteDark, mat.concreteDark, wm, wm], [5, 5]);
  });
  // светофор и знак пешеходного перехода
  const tl = new THREE.Group(); tl.position.set(7.3, 3.0, 25.5); S.add(tl);
  B(tl, 0.12, 3.6, 0.12, mat.darkSteel, 0, 1.8, 0);
  B(tl, 0.36, 1.0, 0.3, mat.black, 0, 3.55, 0);
  SPH(tl, 0.1, emi(0xff2a2a, 1.4), 0, 3.85, 0.17);
  SPH(tl, 0.1, M(0x222222), 0, 3.55, 0.17);
  SPH(tl, 0.1, M(0x222222), 0, 3.25, 0.17);
  glowSprite(tl, 0xff2a2a, 1.3, 0, 3.85, 0.3, 0.8);
  const psC = TX.cv(128, 128); ART.drawTrafficSign(psC);
  plane(tl, 0.7, 0.7, new THREE.MeshBasicMaterial({ map: TX.toTex(psC), toneMapped: false }), 0, 2.4, 0.08, '+z');
  const tl2 = tl.clone(); tl2.position.set(-1.2, 3.0, 25.5); S.add(tl2);
  // уличные фонари
  [[-1.2, 22], [15, 22.5]].forEach(([lx, lz]) => {
    B(S, 0.12, 7.6, 0.12, mat.darkSteel, lx, 3 + 3.8, lz);
    B(S, 1.2, 0.1, 0.1, mat.darkSteel, lx + 0.5, 10.6, lz);
    B(S, 0.5, 0.12, 0.3, emi(0xffc47a, 1.4), lx + 1.0, 10.5, lz);
    glowSprite(S, 0xffb060, 5, lx + 1.0, 10.4, lz, 0.55);
  });
  // машины на дороге
  const cars = [];
  for (let i = 0; i < 5; i++) {
    const car = new THREE.Group();
    B(car, 1.9, 0.5, 4.2, M(i % 2 ? 0x1b2530 : 0x3a2a2a, { roughness: 0.4, metalness: 0.4 }), 0, 0.5, 0);
    B(car, 1.6, 0.45, 2.2, M(0x0a1018, { roughness: 0.2, metalness: 0.5 }), 0, 0.95, -0.2);
    B(car, 0.35, 0.14, 0.05, emi(0xffeeb8, 1.5), -0.6, 0.55, 2.12); B(car, 0.35, 0.14, 0.05, emi(0xffeeb8, 1.5), 0.6, 0.55, 2.12);
    B(car, 0.35, 0.12, 0.05, emi(0xff2020, 1.3), -0.6, 0.55, -2.12); B(car, 0.35, 0.12, 0.05, emi(0xff2020, 1.3), 0.6, 0.55, -2.12);
    glowSprite(car, 0xfff0c0, 2.2, 0, 0.55, 2.8, 0.35);
    car.rotation.y = Math.PI / 2;
    const dir = i % 2 ? 1 : -1;
    car.userData = { dir, speed: 5 + i * 1.3, x: -30 + i * 15, z: dir > 0 ? 33.5 : 29.5 };
    if (dir < 0) car.rotation.y = -Math.PI / 2;
    car.position.set(car.userData.x, 2.9, car.userData.z);
    S.add(car); cars.push(car);
  }

  // ======================================================
  //  ЛЕСТНИЦА И ЛЕСТНИЧНАЯ КЛЕТКА
  // ======================================================
  const ST = G.stairs;
  const stepM = [mat.concrete, mat.concrete, M(0xffffff, { map: T.concreteDark, roughness: 0.6, metalness: 0.2 }), mat.concrete, mat.concrete, mat.concrete];
  const sdz = (STAIR.z1 - STAIR.z0) / STAIR.n, sdy = STAIR.rise / STAIR.n;
  for (let k = 0; k < STAIR.n; k++) {
    texBox(ST, STAIR.x0, 0, STAIR.z0 + k * sdz, STAIR.x1, (k + 1) * sdy, STAIR.z0 + (k + 1) * sdz, stepM, 1);
    // анти-скользящая полоса
    B(ST, 1.5, 0.012, 0.05, M(0x888070, { roughness: 0.4, metalness: 0.6 }), 4.5, (k + 1) * sdy + 0.006, STAIR.z0 + (k + 1) * sdz - 0.06);
  }
  // площадка
  texBox(ST, 3.75, -0.2, 13.2, 5.25, 0.0, 14.4, mat.concreteDark, 1);
  // торцевая стена с металлической дверью
  texBox(ST, 3.45, 0, 13.0, 4.0, 3.5, 13.2, mat.brick, 2);
  texBox(ST, 5.0, 0, 13.0, 5.6, 3.5, 13.2, mat.brick, 2);
  texBox(ST, 4.0, 2.1, 13.0, 5.0, 3.5, 13.2, mat.brick, 2);
  // козырёк-перекрытие
  texBox(ST, 3.45, 3.0, 13.0, 5.6, 3.5, 15.2, mat.concreteDark, 1);
  // светильник на площадке
  CYL(ST, 0.16, 0.16, 0.1, M(0xdddddd), 4.5, 2.95, 14.2, 12);
  CYL(ST, 0.12, 0.12, 0.02, emi(0xdbe6ff, 1.4), 4.5, 2.89, 14.2, 12);
  glowSprite(ST, 0xc8dcff, 1.4, 4.5, 2.7, 14.2, 0.45);
  // поручень вдоль левой стены
  {
    const len = Math.hypot(STAIR.z1 - STAIR.z0, STAIR.rise);
    const ang = Math.atan2(STAIR.rise, STAIR.z1 - STAIR.z0);
    const rail = B(ST, 0.05, 0.05, len, mat.steel, 3.9, 0.95 + STAIR.rise / 2, (STAIR.z0 + STAIR.z1) / 2, 0, -ang);
    for (let k = 0; k < 5; k++) {
      const zz = STAIR.z0 + 0.4 + k * 1.15; const yy = groundY(3.9, zz);
      B(ST, 0.04, 0.95, 0.04, mat.steel, 3.88, yy + 0.47, zz);
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
    const d = { pivot, cur: 0, target: 0, open, cx, cz };
    doors.push(d); return d;
  }
  addDoor(ST, { axis: 'z', hx: 4.0, hz: 13.1, w: 1.0, h: 2.1, t: 0.08, open: Math.PI / 2 * 0.92, mats: [mat.darkSteel, mat.darkSteel, mat.darkSteel, mat.darkSteel, mdM, mdM], cx: 4.5, cz: 13.1 });
  // ручка-скоба
  B(ST, 0.03, 0.35, 0.03, mat.steel, 4.93, 1.05, 13.18);

  // ======================================================
  //  ВХОД: тамбур + коридор
  // ======================================================
  const E = G.entry;
  const wy = 2.8;
  // пол/потолок
  texBox(E, 3.75, -0.1, 5.2, 5.25, 0, 13.0, mat.woodFloor, 1.2);
  texBox(E, 3.75, wy, 5.2, 5.25, wy + 0.1, 13.0, mat.ceil, 1);
  // стены коридора (газеты)
  const newsW = mat.news;
  texBox(E, 3.55, 0, 5.2, 3.75, wy, 10.8, [newsW, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark], 1);
  texBox(E, 5.25, 0, 5.2, 5.45, wy, 10.8, [mat.concreteDark, newsW, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark], 1);
  // тамбур (светлый бетон + электрощиток)
  texBox(E, 3.55, 0, 10.8, 3.75, wy, 13.0, [mat.concrete, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark], 1.5);
  texBox(E, 5.25, 0, 10.8, 5.45, wy, 13.0, [mat.concreteDark, mat.concrete, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark], 1.5);
  // дверной проём в стене у деревянной двери
  texBox(E, 3.75, 0, 10.8, 4.0, wy, 11.0, [mat.concrete, mat.concrete, mat.concrete, mat.concrete, mat.concrete, mat.concrete], 1);
  texBox(E, 5.0, 0, 10.8, 5.25, wy, 11.0, mat.concrete, 1);
  texBox(E, 4.0, 2.1, 10.8, 5.0, wy, 11.0, mat.concrete, 1);
  // стена с белой дверью зала (z 5.0..5.2)
  texBox(E, 3.75, 0, 5.0, 4.05, wy, 5.2, newsW, 1);
  texBox(E, 4.95, 0, 5.0, 5.25, wy, 5.2, newsW, 1);
  texBox(E, 4.05, 2.1, 5.0, 4.95, wy, 5.2, newsW, 1);
  // южный торец тамбура уже за дверью металл; светильники
  CYL(E, 0.12, 0.12, 0.05, M(0xffe9c0), 4.5, 2.76, 12.0, 12);
  SPH(E, 0.09, emi(0xffe3b8, 1.4), 4.5, 2.66, 12.0);
  glowSprite(E, 0xffd9a0, 1.2, 4.5, 2.6, 12.0, 0.45);
  // фиолетовые светодиодные ленты
  [3.8, 5.2].forEach(xx => { B(E, 0.04, 0.04, 5.55, emi(0xd22bff, 1.5), xx, 2.62, 8.0); });
  [3.8, 5.2].forEach(xx => { B(E, 0.04, 0.04, 5.55, emi(0xff2bd6, 1.2), xx, 0.12, 8.0); });
  glowSprite(E, 0xd02bff, 4.5, 4.5, 2.4, 6.4, 0.22); glowSprite(E, 0xff2bd6, 4.5, 4.5, 2.4, 9.2, 0.22);
  // электрощит
  B(E, 0.06, 0.55, 0.42, M(0x7a8086, { roughness: 0.5, metalness: 0.6 }), 3.8, 1.5, 12.0);
  B(E, 0.02, 0.2, 0.3, M(0xe0b020), 3.77, 1.6, 12.0);
  B(E, 0.03, 1.2, 0.03, M(0x111), 3.8, 1.9, 11.4);
  // постеры в коридоре
  [[0, 3.77, 7.0, '+x'], [1, 3.77, 8.1, '+x'], [2, 5.23, 6.2, '-x'], [3, 5.23, 9.1, '-x']].forEach(([k, px, pz, f]) => {
    const pc = TX.cv(256, 384); ART.drawPoster(pc, k);
    plane(E, 0.5, 0.75, M(0xffffff, { map: TX.toTex(pc), roughness: 0.8 }), px, 1.4 + (k % 2) * 0.15, pz, f);
  });
  // деревянная дверь
  const wdC = TX.cv(256, 512); {
    const x = wdC.getContext('2d'), r = TX.rng(14);
    for (let i = 0; i < 6; i++) { const v = r() * 20; x.fillStyle = `rgb(${120 + v},${78 + v * 0.6},${46 + v * 0.4})`; x.fillRect(i * 43, 0, 42, 512); x.fillStyle = 'rgba(0,0,0,.45)'; x.fillRect(i * 43 + 42, 0, 1, 512); }
    TX.noise(x, 256, 512, 20, r);
    x.fillStyle = 'rgba(0,0,0,.25)'; x.fillRect(0, 100, 256, 8); x.fillRect(0, 400, 256, 8);
  }
  const wdM = M(0xffffff, { map: TX.toTex(wdC), roughness: 0.7 });
  addDoor(E, { axis: 'z', hx: 4.0, hz: 10.9, w: 1.0, h: 2.1, t: 0.06, open: Math.PI / 2 * 0.95, mats: [M(0x4a3020), M(0x4a3020), M(0x4a3020), M(0x4a3020), wdM, wdM], cx: 4.5, cz: 10.9 });
  // белая дверь зала
  const wM = M(0xefedf2, { roughness: 0.5 });
  addDoor(E, { axis: 'z', hx: 4.05, hz: 5.1, w: 0.9, h: 2.1, t: 0.05, open: Math.PI / 2 * 0.95, mats: wM, cx: 4.5, cz: 5.1 });
  // белая рамка
  B(E, 0.07, 2.1, 0.22, wM, 4.01, 1.05, 5.1); B(E, 0.07, 2.1, 0.22, wM, 4.99, 1.05, 5.1); B(E, 1.0, 0.07, 0.22, wM, 4.5, 2.13, 5.1);

  // ======================================================
  //  ЗАЛ REVOLVER PODCAST
  // ======================================================
  const H = G.hall;
  // пол/потолок
  texBox(H, 0, -0.1, 0, 6, 0, 5, mat.blueCarpet, 1.0);
  texBox(H, 0, wy, 0, 6, wy + 0.1, 5, mat.ceil, 1);
  // северная стена — тёмный бетон/металл
  texBox(H, -0.2, 0, -0.2, 6.1, wy + 0.1, 0, [mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark, mat.concreteDark, M(0x0f1013)], 2);
  // западная — красный ковёр
  texBox(H, -0.2, 0, 0, 0, wy + 0.1, 5, mat.concreteDark, 2);
  plane(H, 5, 2.8, mat.carpetRed, 0.012, 1.4, 2.5, '+x', [1.6, 1]);
  // южная стена с дверью: шторы
  texBox(H, -0.2, 0, 5.0, 4.05, wy + 0.1, 5.2, mat.concreteDark, 2);
  texBox(H, 4.95, 0, 5.0, 6.1, wy + 0.1, 5.2, mat.concreteDark, 2);
  texBox(H, 4.05, 2.1, 5.0, 4.95, wy + 0.1, 5.2, mat.concreteDark, 2);
  plane(H, 4.05, 2.8, mat.curtain, 2.0, 1.4, 4.97, '-z', [4, 1]);
  plane(H, 1.05, 2.8, mat.curtain, 5.5, 1.4, 4.97, '-z', [1.5, 1]);
  plane(H, 0.9, 0.7, mat.curtain, 4.5, 2.45, 4.97, '-z', [1, 1]);
  // восточная стена (граффити). Тело стены:
  const doorZ0 = 3.0, doorZ1 = 3.9;
  texBox(H, 5.9, 0, 0, 6.1, wy + 0.1, doorZ0, mat.black, 1);
  texBox(H, 5.9, 0, doorZ1, 6.1, wy + 0.1, 5, mat.black, 1);
  texBox(H, 5.9, 2.1, doorZ0, 6.1, wy + 0.1, doorZ1, mat.black, 1);
  // холст
  const muralC = TX.cv(2048, 1152);
  const doorRect = { x: doorZ0 / 5 * 2048, y: 1152 - 2.1 / 2.8 * 1152, w: (doorZ1 - doorZ0) / 5 * 2048, h: 2.1 / 2.8 * 1152 };
  const muralT = TX.toTex(muralC);
  const redrawMural = () => { ART.drawMural(muralC, doorRect); muralT.needsUpdate = true; };
  redrawMural();
  const muralM = M(0xffffff, { map: muralT, roughness: 0.9, alphaTest: 0.5, emissive: 0xffffff, emissiveMap: muralT, emissiveIntensity: 0.18 });
  const muralPl = plane(H, 5, 2.8, muralM, 5.888, 1.4, 2.5, '-x');
  // дверь
  const dsC = TX.cv(384, 896); ART.drawDoorStencil(dsC);
  const dsT = TX.toTex(dsC);
  const dsM = M(0xffffff, { map: dsT, roughness: 0.6 });
  const redrawDoor = () => { ART.drawDoorStencil(dsC); dsT.needsUpdate = true; };
  const mdoor = addDoor(H, { axis: 'x', hx: 5.97, hz: doorZ1, w: 0.9, h: 2.1, t: 0.05, open: -Math.PI / 2 * 0.95, mats: [wM, dsM, wM, wM, wM, wM], cx: 5.97, cz: 3.45 });
  // зелёная рамка двери
  B(H, 0.22, 2.12, 0.06, M(0x0f8a3a), 6.0, 1.06, doorZ0 - 0.03); B(H, 0.22, 2.12, 0.06, M(0x0f8a3a), 6.0, 1.06, doorZ1 + 0.03); B(H, 0.22, 0.06, 1.0, M(0x0f8a3a), 6.0, 2.13, 3.45);
  // конусы
  const coneG = new THREE.ConeGeometry(0.13, 0.5, 14);
  [[5.55, 4.45], [5.75, 4.1]].forEach(([cx, cz], i) => {
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
  guitar(H, 5.78, 2.15, 0, 0xf3efe6, 'ac', 0.22);
  const eg = guitar(H, 5.72, 2.5, 0, 0x0e5f45, 'el', 0.16);
  eg.rotation.y = -0.2;

  // --- стеллаж ---
  const sh = new THREE.Group(); H.add(sh);
  const shMat = M(0x666c73, { roughness: 0.35, metalness: 0.9 });
  [[1.9, 0.12], [5.1, 0.12], [1.9, 0.62], [5.1, 0.62]].forEach(([px, pz]) => B(sh, 0.05, 2.15, 0.05, shMat, px, 1.075, pz));
  const levels = [0.15, 0.78, 1.38, 1.98];
  levels.forEach(y => B(sh, 3.2, 0.04, 0.5, shMat, 3.5, y, 0.37));
  texBox(sh, 1.9, 0.05, 0.05, 5.1, 2.2, 0.1, M(0x0a1038, { roughness: 1, emissive: 0x0a1c70, emissiveIntensity: 0.3 }), 1);
  levels.forEach((y, i) => { if (i > 0) B(sh, 3.15, 0.025, 0.025, emi(0x2a56ff, 1.6), 3.5, y - 0.04, 0.6); });
  glowSprite(sh, 0x3a62ff, 3.2, 3.5, 1.1, 0.7, 0.18);
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
  crt(H, 1.4, 0.0, 0.55, 0.56, crtT[0]);
  crt(H, 1.4, 0.48, 0.55, 0.5, crtT[1]);
  crt(H, 4.55, 1.4, 0.42, 0.34, crtT[0]);
  B(H, 0.6, 0.02, 0.6, M(0x222), 1.4, 0.01, 0.55);
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
  B(sh, 0.62, 0.02, 0.18, M(0xc01e1e, { roughness: 0.5 }), 3.4, 2.04, 0.35, 0.1);
  // противогаз и мелочь на нижних полках
  SPH(sh, 0.08, M(0x151515, { roughness: 0.6 }), 2.8, 1.46, 0.37); SPH(sh, 0.04, mat.black, 2.74, 1.5, 0.45); SPH(sh, 0.04, mat.black, 2.86, 1.5, 0.45);
  B(sh, 0.3, 0.1, 0.22, M(0x222), 3.8, 1.45, 0.37); B(sh, 0.2, 0.08, 0.2, M(0xb03a2a), 4.2, 1.44, 0.37);
  B(sh, 0.3, 0.14, 0.2, M(0x333), 2.2, 0.22, 0.37); B(sh, 0.25, 0.1, 0.25, M(0x6c4a2e), 3.0, 0.2, 0.37);
  B(sh, 0.36, 0.15, 0.22, M(0xb9b3a0), 3.7, 0.24, 0.37);
  // потолочные рельсы
  [1.3, 3.2].forEach(z => B(H, 6, 0.04, 0.04, mat.darkSteel, 3, 2.72, z));
  [0.7, 5.3].forEach(x => B(H, 0.04, 0.04, 5, mat.darkSteel, x, 2.72, 2.5));
  // потолочные софитчики
  SPH(H, 0.07, emi(0xffffff, 1.6), 3.4, 2.72, 1.25); glowSprite(H, 0xffffff, 1.0, 3.4, 2.68, 1.25, 0.6);
  // --- стол ---
  const tbl = new THREE.Group(); H.add(tbl);
  const dark = M(0x1c120b, { roughness: 0.6 });
  const topM = new THREE.MeshStandardMaterial({ map: T.tableWood, roughness: 0.55, color: 0x8f7d6c, emissive: 0x2a1608, emissiveMap: T.tableWood, emissiveIntensity: 0.1 });
  {
    const g = new THREE.BoxGeometry(1.0, 0.07, 2.6);
    const tt = new THREE.Mesh(g, [dark, dark, topM, dark, dark, dark]);
    tt.position.set(3.0, 0.76, 2.65); tbl.add(tt);
    // подрисовать UV верха: ширина по x, длина по z; текстура 170x640 (длинная вдоль v)
  }
  [[2.6, 1.55], [3.4, 1.55], [2.6, 3.75], [3.4, 3.75]].forEach(([lx, lz]) => B(tbl, 0.05, 0.72, 0.05, mat.black, lx, 0.36, lz));
  // микрофоны на журавлях
  [[2.65, 1.55, 0.35], [3.35, 1.55, -0.35]].forEach(([mx, mz, lean]) => {
    B(tbl, 0.07, 0.07, 0.06, mat.black, mx, 0.8, mz);
    B(tbl, 0.025, 0.55, 0.025, mat.black, mx, 1.1, mz);
    B(tbl, 0.025, 0.025, 0.4, mat.black, mx, 1.36, mz + 0.18, 0, 0, 0);
    CYL(tbl, 0.035, 0.035, 0.16, M(0x2a2c30, { roughness: 0.4, metalness: 0.6 }), mx, 1.34, mz + 0.34, 12, Math.PI / 2);
    CYL(tbl, 0.045, 0.045, 0.07, M(0xd9c24a, { roughness: 0.4, metalness: 0.8 }), mx, 1.34, mz + 0.4, 12, Math.PI / 2);
  });
  // кресла
  function chair(x, z, ry) {
    const c = new THREE.Group(); c.position.set(x, 0, z); c.rotation.y = ry; H.add(c);
    const vm = new THREE.MeshStandardMaterial({ color: 0x59616b, roughness: 1, side: THREE.DoubleSide });
    CYL(c, 0.27, 0.25, 0.1, vm, 0, 0.46, 0, 20);
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.42, 20, 1, true, Math.PI * 0.38, Math.PI * 1.24), vm);
    back.position.set(0, 0.76, 0); c.add(back);
    B(c, 0.05, 0.4, 0.05, mat.black, 0, 0.23, 0); B(c, 0.4, 0.03, 0.04, mat.black, 0, 0.03, 0); B(c, 0.04, 0.03, 0.4, mat.black, 0, 0.03, 0);
    [[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]].forEach(([lx, lz]) => B(c, 0.02, 0.43, 0.02, mat.black, lx * 0.8, 0.21, lz * 0.8));
  }
  chair(2.0, 2.0, Math.PI / 2 - 0.35); chair(4.0, 2.0, -Math.PI / 2 + 0.35);
  // чемодан на столике
  const sc = new THREE.Group(); sc.position.set(5.45, 0, 1.4); H.add(sc);
  [[-0.25, -0.2], [0.25, -0.2], [-0.25, 0.2], [0.25, 0.2]].forEach(([lx, lz]) => B(sc, 0.025, 0.55, 0.025, mat.black, lx, 0.275, lz));
  B(sc, 0.62, 0.03, 0.46, M(0x7a5a38, { roughness: 0.6 }), 0, 0.56, 0);
  const plaidM = M(0xffffff, { map: T.plaid, roughness: 0.8 });
  B(sc, 0.56, 0.16, 0.4, plaidM, 0, 0.66, 0);
  B(sc, 0.5, 0.05, 0.34, M(0x2c1c14), 0, 0.745, 0);
  B(sc, 0.46, 0.06, 0.3, M(0xffffff, { map: T.dollar }), 0, 0.78, 0, 0.1);
  B(sc, 0.5, 0.025, 0.4, plaidM, 0.0, 0.88, -0.28, 0, -0.35);
  const lid = new THREE.Mesh(BOXG, plaidM); lid.scale.set(0.56, 0.03, 0.4); lid.position.set(0, 0.95, -0.35); lid.rotation.x = -1.35; sc.add(lid);
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
  palm(H, 5.35, 2.7, 1.5, 0); palm(H, 5.4, 4.5, 1.4, 1); palm(H, 0.45, 1.15, 1.2, 1); palm(H, 0.45, 4.5, 1.3, 0);
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
  softbox(0.95, 2.4, 3.3, new THREE.Vector3(3, 0.9, 2.8));
  softbox(5.05, 2.4, 1.7, new THREE.Vector3(3, 0.9, 2.8));
  // LED панель над стеллажом
  const panel = new THREE.Group(); panel.position.set(3.4, 2.4, 1.05); panel.rotation.x = 0.35; H.add(panel);
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
  plane(H, 5.0, 0.9, new THREE.MeshStandardMaterial({ map: ivyPlane, transparent: true, alphaTest: 0.35, roughness: 0.9, side: THREE.DoubleSide, emissive: 0x0f3a14, emissiveIntensity: 0.6, emissiveMap: ivyPlane }), 0.05, 2.3, 2.5, '+x');
  // неоновый «REC» над дверью (маленький красный индикатор)
  SPH(H, 0.05, emi(0xff2a2a, 1.8), 5.8, 2.35, 3.45); glowSprite(H, 0xff2020, 0.7, 5.8, 2.35, 3.45, 0.6);

  // ======================================================
  //  ЛАУНДЖ
  // ======================================================
  const L = G.lounge;
  texBox(L, 6.1, -0.1, 0, 8.9, 0, 5, mat.blueCarpet, 1.0);
  texBox(L, 6.1, wy, 0, 8.9, wy + 0.1, 5, mat.ceil, 1);
  // стены
  const lw = M(0x1a1b22, { roughness: 1 });
  texBox(L, 6.1, 0, -0.2, 8.9, wy + 0.1, 0, lw, 1);
  texBox(L, 6.1, 0, 5.0, 8.9, wy + 0.1, 5.2, lw, 1);
  // стена между лаунджем и студией (x 8.9..9.1), проём двери z 3..3.9 и окно z 0.5..1.9
  texBox(L, 8.9, 0, 0, 9.1, wy + 0.1, 0.5, mat.black, 1);
  texBox(L, 8.9, 0, 0.5, 9.1, 1.0, 1.9, mat.black, 1);
  texBox(L, 8.9, 1.9, 0.5, 9.1, wy + 0.1, 1.9, mat.black, 1);
  texBox(L, 8.9, 0, 1.9, 9.1, wy + 0.1, 3.0, mat.black, 1);
  texBox(L, 8.9, 0, 3.9, 9.1, wy + 0.1, 5.0, mat.black, 1);
  texBox(L, 8.9, 2.1, 3.0, 9.1, wy + 0.1, 3.9, mat.black, 1);
  plane(L, 1.4, 0.9, mat.glass, 9.0, 1.45, 1.2, '-x');
  B(L, 0.14, 0.05, 1.5, mat.black, 9.0, 0.98, 1.2); B(L, 0.14, 0.05, 1.5, mat.black, 9.0, 1.92, 1.2);
  // акустический поролон вокруг проёма со стороны лаунджа и вдоль стены
  plane(L, 2.0, 2.4, mat.foam, 8.88, 1.3, 4.45, '-x', [3, 3.6]);
  plane(L, 1.0, 2.0, mat.foam, 6.12, 1.2, 4.5, '+x', [1.5, 3]);
  plane(L, 1.0, 2.0, mat.foam, 6.12, 1.2, 2.2, '+x', [1.5, 3]);
  // диван
  const sofa = new THREE.Group(); sofa.position.set(7.7, 0, 0.55); L.add(sofa);
  B(sofa, 1.8, 0.4, 0.8, mat.cream, 0, 0.3, 0); B(sofa, 1.8, 0.5, 0.2, mat.cream, 0, 0.7, -0.3);
  B(sofa, 0.2, 0.3, 0.82, mat.cream, -0.9, 0.55, 0); B(sofa, 0.2, 0.3, 0.82, mat.cream, 0.9, 0.55, 0);
  B(sofa, 0.8, 0.14, 0.7, mat.cream, -0.4, 0.55, 0.05); B(sofa, 0.8, 0.14, 0.7, mat.cream, 0.4, 0.55, 0.05);
  // журнальный стол
  const ct = new THREE.Group(); ct.position.set(7.6, 0, 2.1); L.add(ct);
  B(ct, 1.0, 0.04, 0.7, mat.white, 0, 0.43, 0);
  [[-0.45, -0.3], [0.45, -0.3], [-0.45, 0.3], [0.45, 0.3]].forEach(([a, b]) => B(ct, 0.05, 0.42, 0.05, mat.white, a, 0.21, b));
  B(ct, 0.9, 0.03, 0.6, mat.white, 0, 0.12, 0);
  for (let i = 0; i < 6; i++) B(ct, 0.2 + (i % 3) * 0.05, 0.01, 0.15, M([0xc23a2a, 0xe8e1c8, 0x333, 0x2a7a4a][i % 4]), -0.3 + i * 0.12, 0.455 + i * 0.001, -0.1 + (i % 2) * 0.2, i * 0.5);
  B(ct, 0.25, 0.02, 0.15, mat.black, 0.3, 0.47, 0.1, 0.3); CYL(ct, 0.03, 0.03, 0.1, M(0xdddddd), -0.35, 0.5, 0.2, 10);
  // оранжевая тумба
  const ts = new THREE.Group(); ts.position.set(8.6, 0, 4.4); L.add(ts);
  B(ts, 0.5, 0.55, 0.4, M(0xb8651f, { roughness: 0.6 }), 0, 0.28, 0); B(ts, 0.14, 0.12, 0.05, mat.steel, 0, 0.36, 0.2);
  SPH(ts, 0.1, M(0x6a8aa8, { roughness: 0.1, transparent: true, opacity: 0.7 }), 0, 0.68, 0);
  // постеры
  [[0, 7.0, 0.05, '+z'], [1, 8.1, 0.05, '+z'], [2, 8.87, 2.0, '-x'], [3, 6.9, 4.95, '-z']].forEach(([k, px, pz, f]) => {
    const pc = TX.cv(256, 384); ART.drawPoster(pc, k);
    const pt = TX.toTex(pc);
    const g = new THREE.Group(); g.position.set(px, 1.6, pz); g.rotation.set(...FACE[f]); L.add(g);
    B(g, 0.66, 0.96, 0.03, M(0x111113), 0, 0, 0);
    plane(g, 0.58, 0.88, new THREE.MeshStandardMaterial({ map: pt, emissive: 0xffffff, emissiveMap: pt, emissiveIntensity: 0.35, roughness: 0.8 }), 0, 0, 0.02, '+z');
  });
  // неон-кольцо «ON AIR»
  const naC = TX.cv(512, 128); ART.drawNeonText(naC, 'ON AIR', '#ff2a2a', `700 80px ${ART.FONT_HEAD}`);
  plane(L, 1.1, 0.28, new THREE.MeshBasicMaterial({ map: TX.toTex(naC), transparent: true, toneMapped: false, depthWrite: false }), 7.7, 2.35, 0.05, '+z');
  glowSprite(L, 0xff2a2a, 2.0, 7.7, 2.35, 0.2, 0.35);
  // лампа торшер
  CYL(L, 0.02, 0.02, 1.4, mat.black, 6.5, 0.7, 0.5, 8); SPH(L, 0.18, emi(0xffd9a8, 1.0), 6.5, 1.5, 0.5, 1, 0.8, 1); glowSprite(L, 0xffc890, 1.5, 6.5, 1.5, 0.5, 0.5);
  // ковёр-прямоугольник
  plane(L, 2.2, 1.6, M(0x1c1c28, { roughness: 1 }), 7.6, 0.012, 2.1, '+y');

  // ======================================================
  //  СТУДИЯ ЗВУКА
  // ======================================================
  const U = G.studio;
  const blackWall = M(0x08080b, { roughness: 1 });
  texBox(U, 9.1, -0.1, -1, 12, 0, 5, mat.blueCarpet, 1.0);
  texBox(U, 9.1, wy, -1, 12, wy + 0.1, 5, mat.ceil, 1);
  texBox(U, 9.1, 0, -1.2, 12.2, wy + 0.1, -1, blackWall, 1);   // север
  texBox(U, 12, 0, -1.2, 12.2, wy + 0.1, 5.2, blackWall, 1);   // восток
  texBox(U, 9.1, 0, 5.0, 12.2, wy + 0.1, 5.2, blackWall, 1);   // юг
  // поролон на западной стене (звукоизоляция), на восточной и северной — панели
  plane(U, 2.0, 2.4, mat.foam, 9.12, 1.3, 4.45, '+x', [3, 3.6]);
  plane(U, 1.0, 2.4, mat.foam, 9.12, 1.3, 2.4, '+x', [1.5, 3.6]);
  plane(U, 2.4, 1.6, mat.foam, 11.98, 1.3, 1.2, '-x', [3.5, 2.5]);
  plane(U, 2.4, 1.6, mat.foam, 11.98, 1.3, 3.8, '-x', [3.5, 2.5]);
  plane(U, 1.6, 1.6, mat.foam, 10.5, 1.3, -0.98, '+z', [2.4, 2.4]);
  plane(U, 2.6, 1.8, mat.foam, 10.5, 2.79, 3.5, '-y', [4, 3]);
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
  B(desk, 0.18, 0.015, 0.5, mat.black, 9.65, 0.785, 1.15); B(desk, 0.14, 0.04, 0.2, M(0x1a1a22), 9.8, 0.795, 1.8);
  // мониторы студийные (жёлтые)
  [[9.4, 0.3], [9.4, 2.1]].forEach(([a, b]) => { B(desk, 0.24, 0.36, 0.28, mat.black, a, 1.0, b); CYL(desk, 0.085, 0.085, 0.02, M(0xd7a31a, { roughness: 0.5 }), a + 0.12, 1.0, b, 16, 0, Math.PI / 2); });
  // операторское кресло
  const ch = new THREE.Group(); ch.position.set(10.45, 0, 1.0); ch.rotation.y = Math.PI / 2 - 0.4; U.add(ch);
  B(ch, 0.5, 0.1, 0.5, M(0x15161a, { roughness: 0.5 }), 0, 0.5, 0); B(ch, 0.5, 0.65, 0.1, M(0x8a867a, { roughness: 0.6 }), 0, 0.9, -0.24);
  B(ch, 0.5, 0.2, 0.12, M(0x15161a), 0, 1.3, -0.24); CYL(ch, 0.03, 0.03, 0.4, mat.darkSteel, 0, 0.25, 0, 8); B(ch, 0.5, 0.04, 0.04, mat.darkSteel, 0, 0.04, 0); B(ch, 0.04, 0.04, 0.5, mat.darkSteel, 0, 0.04, 0);
  // вокальная зона
  const vox = new THREE.Group(); vox.position.set(11.1, 0, 2.7); U.add(vox);
  for (let i = 0; i < 3; i++) { const a = i * 2.094; B(vox, 0.03, 0.03, 0.4, mat.black, Math.cos(a) * 0.17, 0.04, Math.sin(a) * 0.17, -a + Math.PI / 2); }
  CYL(vox, 0.018, 0.018, 1.45, mat.black, 0, 0.75, 0, 8);
  B(vox, 0.02, 0.02, 0.35, mat.black, 0.0, 1.5, -0.14);
  const micM = M(0xc5c9cf, { roughness: 0.25, metalness: 0.95 });
  CYL(vox, 0.032, 0.032, 0.18, micM, 0, 1.52, -0.3, 16);
  CYL(vox, 0.045, 0.045, 0.02, mat.black, 0, 1.42, -0.3, 16); CYL(vox, 0.045, 0.045, 0.02, mat.black, 0, 1.62, -0.3, 16);
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
  guitar(U, 11.6, 2.2, -1.2, 0x23252b, 'el', 0.0);
  // чёрная маска на стене
  SPH(U, 0.14, M(0x050505, { roughness: 0.4 }), 11.95, 1.9, 2.6, 0.3, 1.2, 0.8); glowSprite(U, 0x66aaff, 0.8, 11.9, 1.9, 2.6, 0.12);
  // холодная подсветка (LED-ленты)
  [-0.95, 4.95].forEach(z => B(U, 2.8, 0.04, 0.04, emi(0x3a66ff, 1.6), 10.6, 2.72, z));
  B(U, 0.04, 0.04, 5.8, emi(0x3a66ff, 1.4), 11.9, 2.72, 2.0);
  glowSprite(U, 0x3a66ff, 5, 10.8, 2.5, 2.0, 0.12);
  // красная REC лампочка
  SPH(U, 0.05, emi(0xff2a2a, 1.8), 11.95, 2.3, 3.6); glowSprite(U, 0xff2020, 0.8, 11.9, 2.3, 3.6, 0.6);
  // дверь в студию
  const sdM = M(0x15151a, { roughness: 0.8 });
  const sdoor = addDoor(U, { axis: 'x', hx: 9.0, hz: 3.9, w: 0.9, h: 2.1, t: 0.07, open: -Math.PI / 2 * 0.95, mats: [mat.foam, sdM, sdM, sdM, sdM, sdM], cx: 9.0, cz: 3.45 });

  // ======================================================
  //  СВЕТ
  // ======================================================
  const amb = new THREE.HemisphereLight(0x2c3a66, 0x120a0a, 0.55);
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
    lightState.amb = { street: 0.8, entry: 0.3, hall: 0.3, lounge: 0.6, studio: 0.85 }[zone];
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
    street: ['street', 'stairs', 'entry'],
    entry: ['street', 'stairs', 'entry', 'hall'],
    hall: ['entry', 'hall', 'lounge'],
    lounge: ['hall', 'lounge', 'studio'],
    studio: ['lounge', 'studio', 'hall']
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
    { id: 'crt', zone: 'hall', pos: [1.4, 0.75, 0.9], title: 'ЭЛТ-телевизоры: «живой фид»', text: 'Ретро-телевизоры в кадре показывают сигнал с камер студии — зелёный фосфор, шум и таймкод REC. Деталь, которая оживляет задний план подкаста.', img: 'hall-wide-1', service: 'podcast-express' },
    { id: 'suitcase', zone: 'hall', pos: [5.45, 0.85, 1.4], title: 'Чемодан с «деньгами»', text: 'Реквизит для кадра: старый чемодан с пачками купюр. В студии много такой фактуры — её можно переставлять под тему выпуска или взять в аренду.', img: 'detail-suitcase', service: 'rent' },
    { id: 'retro', zone: 'hall', pos: [3.4, 1.0, 0.45], title: 'Ретро-техника на стеллаже', text: 'Проигрыватель, бумбокс, магнитофоны, книги, мячи и бюст с синей подсветкой — стальной стеллаж с LED-лентами задаёт характер кадра.', img: 'detail-turntable', service: 'rent' },
    { id: 'mural', zone: 'hall', pos: [5.9, 1.5, 1.4], title: 'Граффити-револьвер', text: 'Монохромный револьвер с дымом, винилом и нотами на зелёной стене — фирменный фон студии. Рядом — дверь с трафаретом в лаундж.', img: 'graffiti-wide', service: 'rent' },
    { id: 'light', zone: 'hall', pos: [1.1, 2.3, 3.1], title: 'Свет: софтбоксы и LED-панель', text: 'Два больших восьмиугольных софтбокса и LED-панель под потолком дают мягкий кинематографичный свет. Схему настраиваем под выпуск.', img: 'hall-wide-2', service: 'podcast-express' },
    { id: 'table', zone: 'hall', pos: [3.0, 0.9, 2.6], title: 'Стол с микрофонами', text: 'Массивный стол из слэба, два кресла и микрофоны на журавлях. Три камеры 4K, мультикам-запись, звук без шумов.', img: 'hall-table', service: 'podcast-express' },
    { id: 'lounge', zone: 'lounge', pos: [7.7, 0.9, 0.7], title: 'Лаундж', text: 'Белый кожаный диван, постеры и акустический поролон. Здесь ждут гости, обсуждают сценарий и отдыхают между дублями.', img: 'lounge', service: 'combo' },
    { id: 'console', zone: 'studio', pos: [9.55, 1.1, 1.2], title: 'Пульт со стеклянным окном', text: 'Рабочее место звукорежиссёра: изогнутый монитор, студийные мониторы и окно в стене — вы видите вокалиста, а он вас.', img: 'control-1', service: 'sound-vocal' },
    { id: 'vocal', zone: 'studio', pos: [11.1, 1.45, 2.4], title: 'Вокальный микрофон', text: 'Конденсаторный микрофон с поп-фильтром, наушники и тёмная акустически обработанная комната — чистая запись вокала и озвучки.', img: 'mic-neumann', service: 'sound-vocal' },
    { id: 'wall', zone: 'studio', pos: [9.2, 1.4, 2.6], title: 'Звукоизолированная стена', text: 'Между подкаст-залом и студией — звукоизолирующая стена с поролоном. Можно записывать подкаст и вокал одновременно, не мешая друг другу.', img: 'vocal-1', service: 'combo' },
    { id: 'sign', zone: 'street', pos: [10.0, 6.0, 19.3], title: 'REVOLVER PODCAST · REVOLVER SOUND', text: 'Вход в подвал по лестнице у дома на Фрунзе, 49. Металлическая дверь, тамбур, фиолетовый коридор — и вы в студии.', img: 'enter-stairs', service: 'combo' }
  ].map(h => Object.assign(h, { pos: new THREE.Vector3(...h.pos), href: BOOK(h.service) }));

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
  function update(dt, px, pz, zone) {
    clockT.t += dt;
    const t = clockT.t;
    // двери
    for (const d of doors) {
      const dist = Math.hypot(px - d.cx, pz - d.cz);
      d.target = dist < 2.0 ? d.open : 0;
      d.cur += (d.target - d.cur) * Math.min(1, dt * 4.5);
      d.pivot.rotation.y = d.cur;
    }
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
    if (zone === 'street' || zone === 'entry') {
      for (const c of cars) {
        const u = c.userData;
        u.x += u.dir * u.speed * dt;
        if (u.x > 60) u.x = -60; if (u.x < -60) u.x = 60;
        c.position.x = u.x;
      }
      arrow.position.y = 4.35 + Math.sin(t * 3) * 0.08; arrow2.position.y = arrow.position.y;
    }
  }

  return {
    scene, groups: G, hotspots, update, setZoneLights, setVisibility, redrawMural, redrawDoor, redrawSign: () => { ART.drawSign(signC); signT.needsUpdate = true; },
    doors, lights, amb, glitch: (v) => { glitch = v; }
  };
}
