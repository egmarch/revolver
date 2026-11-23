import * as THREE from 'three';
import { cv, rng, toTex } from './tex.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export const COLORS = ['#c9f23b', '#ff4b2e', '#c23cff', '#ffffff', '#111111', '#19f0ff', '#ff2e97', '#ff9a3c'];
const MAX_DECALS = 150, MAX_PAINT = 4000;

function holeCanvas(seed, crack) {
  const c = cv(128, 128), x = c.getContext('2d'), r = rng(seed);
  x.translate(64, 64);
  if (!crack) {
    const g = x.createRadialGradient(0, 0, 2, 0, 0, 40);
    g.addColorStop(0, 'rgba(0,0,0,.95)'); g.addColorStop(0.35, 'rgba(10,10,10,.8)'); g.addColorStop(0.7, 'rgba(120,115,105,.35)'); g.addColorStop(1, 'rgba(120,115,105,0)');
    x.fillStyle = g; x.beginPath(); x.arc(0, 0, 40, 0, 7); x.fill();
    x.fillStyle = '#000'; x.beginPath(); x.arc(0, 0, 5.5, 0, 7); x.fill();
    for (let i = 0; i < 12; i++) { // сколы
      const a = r() * 6.28, d = 8 + r() * 22;
      x.fillStyle = `rgba(${r() < 0.5 ? '30,28,26' : '170,165,150'},${0.5 + r() * 0.4})`;
      x.beginPath(); x.arc(Math.cos(a) * d, Math.sin(a) * d, 1 + r() * 3, 0, 7); x.fill();
    }
    x.strokeStyle = 'rgba(0,0,0,.7)'; x.lineWidth = 1;
    for (let i = 0; i < 7; i++) {
      let a = r() * 6.28, px = 0, py = 0; x.beginPath(); x.moveTo(0, 0);
      for (let k = 0; k < 4; k++) { a += (r() - 0.5) * 0.8; px += Math.cos(a) * (6 + r() * 8); py += Math.sin(a) * (6 + r() * 8); x.lineTo(px, py); }
      x.stroke();
    }
  } else {
    x.strokeStyle = 'rgba(235,245,240,.9)'; x.lineWidth = 1.4;
    for (let i = 0; i < 14; i++) {
      let a = (i / 14) * 6.28 + r() * 0.3, px = 0, py = 0; x.beginPath(); x.moveTo(0, 0);
      for (let k = 0; k < 5; k++) { a += (r() - 0.5) * 0.6; px += Math.cos(a) * (6 + r() * 9); py += Math.sin(a) * (6 + r() * 9); x.lineTo(px, py); }
      x.stroke();
    }
    x.strokeStyle = 'rgba(0,0,0,.6)'; x.lineWidth = 3;
    x.beginPath(); x.arc(0, 0, 4, 0, 7); x.stroke();
    x.strokeStyle = 'rgba(200,230,255,.5)'; x.lineWidth = 1;
    for (let k = 1; k < 4; k++) { x.beginPath(); x.arc(0, 0, k * 14, r() * 6, r() * 6 + 3.5); x.stroke(); }
  }
  return c;
}

function splatCanvas() {
  const c = cv(128, 128), x = c.getContext('2d'), r = rng(5);
  const g = x.createRadialGradient(64, 64, 2, 64, 64, 50);
  g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(0.45, 'rgba(255,255,255,.7)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 70; i++) {
    const a = r() * 6.28, d = 20 + r() * 42;
    x.fillStyle = `rgba(255,255,255,${0.35 + r() * 0.6})`;
    x.beginPath(); x.arc(64 + Math.cos(a) * d, 64 + Math.sin(a) * d, 0.6 + r() * 2.2, 0, 7); x.fill();
  }
  const d = x.getImageData(0, 0, 128, 128), p = d.data;
  for (let i = 3; i < p.length; i += 4) p[i] = Math.max(0, p[i] * (0.85 + r() * 0.3));
  x.putImageData(d, 0, 0);
  return c;
}

function canSticker() {
  const c = cv(256, 128), x = c.getContext('2d');
  x.fillStyle = '#c9ccd0'; x.fillRect(0, 0, 256, 128);
  x.fillStyle = '#111'; x.fillRect(0, 22, 256, 84);
  x.fillStyle = '#ff3b30'; x.font = '900 40px Unbounded, Impact, sans-serif'; x.textAlign = 'center';
  x.fillText('REVOLVER', 128, 74);
  x.fillStyle = '#c9f23b'; x.font = '700 14px Arial'; x.fillText('SPRAY · 400 ML', 128, 98);
  return c;
}

function glowTex() {
  const c = cv(64, 64), x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,240,200,1)'); g.addColorStop(0.3, 'rgba(255,170,60,.7)'); g.addColorStop(1, 'rgba(255,100,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return c;
}

export function createWeapons(env) {
  const { renderer, camera, scene, getWorld, audio, state } = env;
  const api = {};
  // ---------- viewmodel ----------
  const vmScene = new THREE.Scene();
  const vmCam = new THREE.PerspectiveCamera(54, 1, 0.01, 5);
  vmScene.add(new THREE.HemisphereLight(0xdde4ff, 0x504040, 1.5));
  const dl = new THREE.DirectionalLight(0xfff0e0, 1.6); dl.position.set(0.5, 1, 0.8); vmScene.add(dl);
  const flashLight = new THREE.PointLight(0xffa040, 0, 2); flashLight.position.set(0.15, 0.0, -0.5); vmScene.add(flashLight);
  const M = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.5, metalness: 0.4 }, o));
  const steel = M(0x9aa3ae, { metalness: 0.5, roughness: 0.4 }), dark = M(0x2a2d33, { metalness: 0.4, roughness: 0.5 });
  const wood = M(0x6b3d22, { metalness: 0.0, roughness: 0.6 }), skin = M(0xc99a7a, { metalness: 0, roughness: 0.8 }), cloth = M(0x2b3550, { metalness: 0, roughness: 0.95 });
  const cyl = (g, rt, rb, h, m, x, y, z, rx = 0, rz = 0, seg = 16) => { const me = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m); me.position.set(x, y, z); me.rotation.set(rx, 0, rz); g.add(me); return me; };
  const bx = (g, w, h, d, m, x, y, z, rx = 0, ry = 0, rz = 0) => { const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); me.position.set(x, y, z); me.rotation.set(rx, ry, rz); g.add(me); return me; };

  // ---------- руки: настоящая кисть с пальцами (ладонь, 3 сустава на палец, ногти) ----------
  const skinM = new THREE.MeshStandardMaterial({ color: 0xdc8f5e, roughness: 0.75, metalness: 0, emissive: 0x6a3a22, emissiveIntensity: 0.3 });
  const nailM = M(0xf2dccf, { metalness: 0, roughness: 0.28 });
  const fleeceC = cv(64, 64); { const x = fleeceC.getContext('2d'), r = rng(31); x.fillStyle = '#1d2330'; x.fillRect(0, 0, 64, 64); for (let i = 0; i < 300; i++) { x.fillStyle = `rgba(${60 + r() * 50},${70 + r() * 50},${95 + r() * 60},${0.12 + r() * 0.22})`; x.beginPath(); x.arc(r() * 64, r() * 64, 0.8 + r() * 1.6, 0, 7); x.fill(); } }
  const sleeveM = new THREE.MeshStandardMaterial({ map: toTex(fleeceC), roughness: 1, metalness: 0 });
  const V3 = (p) => new THREE.Vector3(p[0], p[1], p[2]);
  function limb(g, a, b, r0, r1, m) {
    const A = V3(a), Bv = V3(b), d = Bv.clone().sub(A), len = d.length();
    const me = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, len, 14), m);
    me.position.copy(A).addScaledVector(d, 0.5); me.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize()); me.userData.hand = true; g.add(me);
    const s = new THREE.Mesh(new THREE.SphereGeometry(r0, 14, 10), m); s.position.copy(A); s.userData.hand = true; g.add(s);
    return me;
  }
  function finger(g, pts, r) {
    for (let i = 0; i < pts.length - 1; i++) limb(g, pts[i], pts[i + 1], r * (1 - i * 0.07), r * (1 - (i + 1) * 0.07), skinM);
    const e = pts[pts.length - 1], p = pts[pts.length - 2], tip = new THREE.Mesh(new THREE.SphereGeometry(r * 0.9, 14, 10), skinM); tip.position.set(e[0], e[1], e[2]); tip.userData.hand = true; g.add(tip);
    const nail = new THREE.Mesh(new THREE.BoxGeometry(r * 1.1, r * 0.35, r * 1.2), nailM); nail.position.set(e[0], e[1] + r * 0.55, e[2]); nail.userData.hand = true; g.add(nail);
  }
  const arc = (cx, cz, rx, rz, y, degs) => degs.map(d => { const a = d * Math.PI / 180; return [cx + rx * Math.cos(a), y, cz - rz * Math.sin(a)]; });
  function palm(g, x, y, z, rx, ry, rz, len = 0.055, r = 0.026) {
    const p = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 6, 16), skinM); p.position.set(x, y, z); p.rotation.set(rx, ry, rz); p.scale.set(0.62, 1, 1); p.userData.hand = true; g.add(p); return p;
  }
  function sleeve(g, from, to, r0 = 0.032, r1 = 0.04) {
    limb(g, from, to, r0, r1, sleeveM);
    const d = V3(to).sub(V3(from)).normalize(), cuff = new THREE.Mesh(new THREE.TorusGeometry(r0 * 0.98, 0.0075, 8, 20), sleeveM);
    cuff.position.copy(V3(from)); cuff.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), d); cuff.userData.hand = true; g.add(cuff);
  }

  // револьвер .357 Magnum: рамка с силуэтом, ребристый ствол, барабан с проточками, курок, спуск, деревянная рукоять
  const rev = new THREE.Group();
  const frame = new THREE.Group(); rev.add(frame);
  const blued = M(0x434a56, { metalness: 0.3, roughness: 0.42 }), polished = M(0xb4bcc8, { metalness: 0.45, roughness: 0.3 });
  const gripC = cv(128, 128); { const x = gripC.getContext('2d'), r = rng(8); x.fillStyle = '#6b3d22'; x.fillRect(0, 0, 128, 128); x.strokeStyle = 'rgba(40,20,8,.55)'; x.lineWidth = 2; for (let i = -128; i < 256; i += 8) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + 128, 128); x.moveTo(i + 128, 0); x.lineTo(i, 128); x.stroke(); } for (let i = 0; i < 80; i++) { x.fillStyle = `rgba(255,200,140,${r() * 0.1})`; x.fillRect(r() * 128, r() * 128, 2, 2); } }
  const woodG = M(0xffffff, { map: toTex(gripC), metalness: 0, roughness: 0.55 });
  const prof = (pts, depth, m, x0 = 0) => { const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(p => s.lineTo(p[0], p[1])); const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSize: 0.0025, bevelThickness: 0.0025, bevelSegments: 2 }); geo.rotateY(-Math.PI / 2); geo.translate(depth / 2 + x0, 0, 0); const me = new THREE.Mesh(geo, m); return me; };
  // профиль рамки в плоскости (z вдоль ствола с минусом вперёд, y вверх)
  frame.add(prof([[-0.085, 0.034], [-0.03, 0.04], [0.045, 0.048], [0.085, 0.044], [0.095, 0.03], [0.09, 0.01], [0.062, -0.012], [0.035, -0.03], [0.0, -0.03], [-0.03, -0.022], [-0.07, -0.016], [-0.085, 0.0]], 0.03, blued));
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.0125, 0.0135, 0.2, 24), blued); barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0.022, -0.185); frame.add(barrel);
  const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.0138, 0.0138, 0.012, 24), polished); muzzle.rotation.x = Math.PI / 2; muzzle.position.set(0, 0.022, -0.286); frame.add(muzzle);
  const bore = new THREE.Mesh(new THREE.CircleGeometry(0.0072, 16), M(0x020202, { metalness: 0, roughness: 1 })); bore.position.set(0, 0.022, -0.2924); bore.rotation.y = Math.PI; frame.add(bore);
  bx(frame, 0.012, 0.007, 0.205, blued, 0, 0.0425, -0.185);                                                       // вентилируемая планка
  bx(frame, 0.004, 0.011, 0.012, blued, 0, 0.052, -0.274);                                                        // мушка
  limb(frame, [0, 0.004, -0.17], [0, 0.004, -0.08], 0.0085, 0.0085, blued);                                       // кожух шомпола
  limb(frame, [0, -0.002, -0.08], [0, -0.002, -0.025], 0.0092, 0.0092, blued);
  const drum = new THREE.Group(); drum.position.set(0, 0.018, -0.045); frame.add(drum);
  cyl(drum, 0.034, 0.034, 0.066, polished, 0, 0, 0, Math.PI / 2, 0, 32);
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3;
    cyl(drum, 0.0085, 0.0085, 0.01, M(0x050505, { metalness: 0 }), Math.cos(a) * 0.021, Math.sin(a) * 0.021, 0.0335, Math.PI / 2, 0, 14);
    cyl(drum, 0.0065, 0.0065, 0.01, M(0xc89a3a, { metalness: 0.8, roughness: 0.3 }), Math.cos(a) * 0.021, Math.sin(a) * 0.021, 0.0345, Math.PI / 2, 0, 14);
    const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.0062, 0.0062, 0.05, 10), blued); fl.rotation.x = Math.PI / 2; fl.position.set(Math.cos(a + 0.52) * 0.0345, Math.sin(a + 0.52) * 0.0345, -0.002); drum.add(fl);   // проточки барабана
  }
  const hammer = new THREE.Group(); hammer.position.set(0, 0.055, 0.092); frame.add(hammer);
  limb(hammer, [0, 0, 0], [0, 0.026, 0.026], 0.0075, 0.0095, blued); bx(hammer, 0.01, 0.006, 0.014, polished, 0, 0.028, 0.03);
  bx(frame, 0.007, 0.03, 0.006, blued, 0, -0.012, 0.035, -0.35);                                                   // спусковой крючок
  const guard = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.0045, 8, 24, Math.PI * 1.15), blued); guard.position.set(0, -0.02, 0.025); guard.rotation.set(0, Math.PI / 2, Math.PI * 1.04); frame.add(guard);
  const grip = prof([[0.045, -0.025], [0.1, -0.012], [0.118, -0.14], [0.072, -0.168], [0.05, -0.13]], 0.034, woodG); frame.add(grip);
  [-1, 1].forEach(s => { const sc = new THREE.Mesh(new THREE.CylinderGeometry(0.0045, 0.0045, 0.004, 10), polished); sc.rotation.z = Math.PI / 2; sc.position.set(s * 0.0185, -0.06, 0.078); frame.add(sc); });
  // рука: пальцы обхватывают рукоять спереди, указательный на спуске, большой на левой стороне рамки
  const hand = new THREE.Group(); rev.add(hand);
  palm(hand, 0.016, -0.075, 0.12, -0.35, 0, 0.0, 0.07, 0.03);
  [[-0.05, 0.088, 0.0185, 0.026], [-0.075, 0.094, 0.0185, 0.026], [-0.1, 0.1, 0.0185, 0.025]].forEach(([y, cz, rx, rz], i) => finger(hand, arc(0.0, cz, rx + 0.01, rz + 0.009, y, [-35, 5, 55, 100, 135]), 0.0092 - i * 0.0004));
  finger(hand, [[0.021, -0.036, 0.112], [0.025, -0.03, 0.075], [0.02, -0.026, 0.045], [0.013, -0.02, 0.028]], 0.0093);
  finger(hand, [[-0.012, -0.065, 0.128], [-0.027, -0.04, 0.1], [-0.029, -0.01, 0.07], [-0.026, 0.01, 0.045]], 0.0105);
  sleeve(rev, [0.03, -0.095, 0.16], [0.11, -0.19, 0.42]);
  const flash = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.2), new THREE.MeshBasicMaterial({ map: toTex(glowTex()), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  flash.position.set(0, 0.022, -0.3); flash.visible = false; rev.add(flash);
  // баллончик с краской: алюминиевый корпус с цветной этикеткой, купол-плечо, цветной колпак с форсункой
  const can = new THREE.Group();
  const canC = cv(256, 256), cx2 = canC.getContext('2d'), canT = toTex(canC); canT.wrapS = THREE.RepeatWrapping;
  const shadeHex = (hex, k) => { const n = parseInt(hex.slice(1), 16), f = (v) => Math.max(0, Math.min(255, Math.round(v * (1 + k)))); return `rgb(${f(n >> 16 & 255)},${f(n >> 8 & 255)},${f(n & 255)})`; };
  function paintCanLabel(hex) {
    const x = cx2; x.clearRect(0, 0, 256, 256);
    const g = x.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, hex); g.addColorStop(1, shadeHex(hex, -0.45)); x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    x.fillStyle = 'rgba(255,255,255,.16)'; x.fillRect(26, 0, 24, 256); x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(176, 0, 80, 256);
    x.fillStyle = '#0d0d10'; x.fillRect(0, 84, 256, 70);
    x.fillStyle = hex; x.font = '900 40px Unbounded, Impact, sans-serif'; x.textAlign = 'center'; x.fillText('REVOLVER', 128, 133);
    x.fillStyle = '#f4f4f6'; x.font = '700 13px Arial'; x.fillText('SPRAY PAINT · 400 ML', 128, 172);
    x.fillStyle = '#f4f4f6'; for (let i = 0; i < 26; i++) x.fillRect(18 + i * 3.2, 200, 1 + (i % 3), 26);
    x.fillStyle = 'rgba(255,255,255,.55)'; for (let i = 0; i < 5; i++) { x.beginPath(); x.arc(30 + i * 48, 10 + (i * 37) % 30, 3 + i % 3, 0, 7); x.fill(); }
    canT.needsUpdate = true;
  }
  const alu = M(0xc9ced4, { metalness: 0.85, roughness: 0.28 });
  const canBody = new THREE.Mesh(new THREE.CylinderGeometry(0.0335, 0.0335, 0.145, 32, 1, true), M(0xffffff, { map: canT, metalness: 0.35, roughness: 0.38 }));
  can.add(canBody);
  const lath = (pts, m, y) => { const me = new THREE.Mesh(new THREE.LatheGeometry(pts.map(p => new THREE.Vector2(p[0], p[1])), 32), m); me.position.y = y; can.add(me); return me; };
  lath([[0.0335, 0], [0.0325, 0.008], [0.029, 0.018], [0.0235, 0.026], [0.0195, 0.031], [0.0195, 0.036]], alu, 0.0725);                    // плечо-купол
  lath([[0, 0], [0.0335, 0], [0.0345, -0.004], [0.032, -0.009], [0.026, -0.015], [0, -0.016]], alu, -0.0725);                              // донышко
  lath([[0.0205, 0], [0.0205, 0.044], [0.0185, 0.05], [0, 0.05]], M(0x2c2c32, { roughness: 0.55, metalness: 0.15 }), 0.105);              // колпак
  const capMat = M(0xc9f23b, { metalness: 0.1, roughness: 0.5 });
  lath([[0.0215, 0], [0.0215, 0.02], [0.0205, 0.02], [0.0205, 0]], capMat, 0.108);                                                     // цветное кольцо на колпаке
  const nozzle = bx(can, 0.016, 0.01, 0.024, M(0xf2f2f4, { roughness: 0.4, metalness: 0.1 }), 0, 0.151, -0.014);                                     // кнопка-форсунка
  cyl(can, 0.0034, 0.0034, 0.012, dark, 0, 0.151, -0.03, Math.PI / 2, 0, 8);
  // рука: три пальца обхватывают корпус, указательный лежит на форсунке, большой упирается слева сзади
  palm(can, 0.062, 0.0, 0.034, 0, 0, 0.0, 0.075, 0.03);
  [0.027, 0.0, -0.027].forEach((y, i) => finger(can, arc(0, 0, 0.042 + (i ? 0.0 : 0), 0.042, y, [-6, 32, 68, 105, 140]), 0.0092 - i * 0.0005));
  // указательный палец: три фаланги с суставами, сужается к кончику, ноготь; при распылении сгибается и жмёт на форсунку
  const idx = new THREE.Group(); idx.position.set(0, 0, 0); can.add(idx);
  const fingerSkin = new THREE.MeshStandardMaterial({ color: 0xe08d5e, roughness: 0.7, metalness: 0, emissive: 0x5a2f1a, emissiveIntensity: 0.3 });
  const idxJ = [new THREE.Vector3(0.056, 0.058, 0.03), new THREE.Vector3(0.049, 0.094, 0.018), new THREE.Vector3(0.036, 0.126, 0.002), new THREE.Vector3(0.016, 0.1555, -0.013)];
  const idxR = [0.0118, 0.0108, 0.0098, 0.0088];
  const phal = [];
  for (let i = 0; i < 3; i++) {
    const a0 = idxJ[i], b0 = idxJ[i + 1], d = b0.clone().sub(a0), len = d.length();
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(idxR[i + 1], idxR[i], len, 18), fingerSkin);
    seg.position.copy(a0).addScaledVector(d, 0.5); seg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize()); seg.scale.set(1, 1, 0.88); idx.add(seg); phal.push(seg);
    const kn = new THREE.Mesh(new THREE.SphereGeometry(idxR[i] * 1.06, 18, 12), fingerSkin); kn.position.copy(a0); idx.add(kn);
  }
  const tipS = new THREE.Mesh(new THREE.SphereGeometry(idxR[3], 18, 12), fingerSkin); tipS.position.copy(idxJ[3]); tipS.scale.set(1, 1.15, 0.9); idx.add(tipS);
  const nailI = new THREE.Mesh(new THREE.CapsuleGeometry(0.0062, 0.008, 4, 10), nailM); nailI.position.set(idxJ[3].x - 0.002, idxJ[3].y + 0.0, idxJ[3].z - 0.0075); nailI.rotation.set(0.3, 0, 0.9); nailI.scale.set(1, 1, 0.45); idx.add(nailI);
  idx.traverse(o => { o.userData.hand = false; });
  sleeve(can, [0.075, -0.03, 0.065], [0.16, -0.17, 0.36]);
  const mist = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.16), new THREE.MeshBasicMaterial({ map: toTex(glowTex()), transparent: true, opacity: 0.6, depthWrite: false, color: 0xc9f23b }));
  mist.position.set(0, 0.151, -0.1); mist.visible = false; can.add(mist);

  const vm = new THREE.Group(); vmScene.add(vm);
  vm.add(rev); vm.add(can); rev.visible = false;
  const BASE = { rev: new THREE.Vector3(0.1, -0.095, -0.3), can: new THREE.Vector3(0.1, -0.1, -0.3) };
  rev.scale.setScalar(0.85); can.scale.setScalar(0.8);
  can.rotation.set(-0.35, 0.1, 0); rev.rotation.set(0, 0.06, 0);

  // ---------- состояние ----------
  const S = { weapon: 1, hasRev: false, ammo: 6, reload: -1, rec: 0, flash: 0, cd: 0, swap: 1, swapTo: 0, trigger: false, color: 0, sprayT: 0, hold: 0, bobT: 0, sx: 0, sy: 0, lastYaw: 0, lastPitch: 0, lastP: null, dripLen: 0, dripT: 0, spraying: false };
  api.S = S;
  api._dbg = { vm, rev, can, hand, BASE };

  // ---------- декали ----------
  const holeTex = [toTex(holeCanvas(1)), toTex(holeCanvas(2)), toTex(holeCanvas(3))];
  const crackTex = toTex(holeCanvas(9, true));
  const dMat = holeTex.map(t => new THREE.MeshLambertMaterial({ map: t, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
  const crackMat = new THREE.MeshBasicMaterial({ map: crackTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6 });
  const quad = new THREE.PlaneGeometry(1, 1);
  const decals = []; let dIdx = 0;
  const _n = new THREE.Vector3(), _p = new THREE.Vector3();
  function placeDecal(p, n, size, crack) {
    let m = decals[dIdx];
    if (!m) { m = new THREE.Mesh(quad, dMat[0]); decals[dIdx] = m; scene.add(m); }
    dIdx = (dIdx + 1) % MAX_DECALS;
    m.material = crack ? crackMat : dMat[(Math.random() * 3) | 0];
    m.scale.set(size, size, 1);
    m.position.copy(p).addScaledVector(n, 0.004);
    setOrient(m, n);
    m.rotateZ(Math.random() * 6.28);
    m.visible = true;
  }
  function setOrient(o, n) {
    if (Math.abs(n.y) > 0.95) o.up.set(0, 0, 1); else o.up.set(0, 1, 0);
    o.lookAt(o.position.x + n.x, o.position.y + n.y, o.position.z + n.z);
  }

  // ---------- краска (InstancedMesh) ----------
  const splatTex = toTex(splatCanvas());
  const pMat = new THREE.MeshLambertMaterial({ map: splatTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  const paint = new THREE.InstancedMesh(quad, pMat, MAX_PAINT);
  paint.frustumCulled = false; paint.count = 0; scene.add(paint);
  paint.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const col = new THREE.Color(), dummy = new THREE.Object3D();
  let pIdx = 0, pCount = 0;
  function addSplat(p, n, size, sx = 1, sy = 1, vertical = false, off = 0) {
    dummy.position.copy(p).addScaledVector(n, 0.003 + (pIdx % 9) * 0.0004);
    dummy.scale.set(size * sx, size * sy, 1);
    dummy.up.set(0, 1, 0);
    if (Math.abs(n.y) > 0.95) dummy.up.set(0, 0, 1);
    dummy.lookAt(dummy.position.x + n.x, dummy.position.y + n.y, dummy.position.z + n.z);
    if (!vertical) dummy.rotateZ(Math.random() * 6.28);
    dummy.updateMatrix();
    paint.setMatrixAt(pIdx, dummy.matrix);
    col.set(COLORS[S.color]); paint.setColorAt(pIdx, col);
    pIdx = (pIdx + 1) % MAX_PAINT; pCount = Math.min(MAX_PAINT, pCount + 1);
    paint.count = pCount;
    paint.instanceMatrix.needsUpdate = true; if (paint.instanceColor) paint.instanceColor.needsUpdate = true;
  }

  // ---------- частицы ----------
  const NP = 80;
  function mkPoints(size, blend) {
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NP * 3), 3)); g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(NP * 3), 3));
    const m = new THREE.PointsMaterial({ size, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true, map: toTex(glowTex()) });
    const pt = new THREE.Points(g, m); pt.frustumCulled = false; scene.add(pt);
    return { pt, g, v: new Float32Array(NP * 3), life: new Float32Array(NP), max: new Float32Array(NP), i: 0, base: new Float32Array(NP * 3), grav: 0 };
  }
  const sparks = mkPoints(0.05), smoke = mkPoints(0.22); sparks.grav = 6; smoke.grav = -0.15;
  function emit(sys, p, n, count, speed, life, colr) {
    for (let k = 0; k < count; k++) {
      const i = sys.i; sys.i = (sys.i + 1) % NP;
      const pos = sys.g.attributes.position.array;
      pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z;
      sys.v[i * 3] = n.x * speed * Math.random() + (Math.random() - 0.5) * speed;
      sys.v[i * 3 + 1] = n.y * speed * Math.random() + (Math.random() - 0.3) * speed;
      sys.v[i * 3 + 2] = n.z * speed * Math.random() + (Math.random() - 0.5) * speed;
      sys.life[i] = sys.max[i] = life * (0.6 + Math.random() * 0.6);
      sys.base[i * 3] = colr[0]; sys.base[i * 3 + 1] = colr[1]; sys.base[i * 3 + 2] = colr[2];
    }
  }
  function stepParticles(sys, dt) {
    const pos = sys.g.attributes.position.array, c = sys.g.attributes.color.array;
    for (let i = 0; i < NP; i++) {
      if (sys.life[i] > 0) {
        sys.life[i] -= dt; const k = Math.max(0, sys.life[i] / sys.max[i]);
        sys.v[i * 3 + 1] -= sys.grav * dt;
        pos[i * 3] += sys.v[i * 3] * dt; pos[i * 3 + 1] += sys.v[i * 3 + 1] * dt; pos[i * 3 + 2] += sys.v[i * 3 + 2] * dt;
        c[i * 3] = sys.base[i * 3] * k; c[i * 3 + 1] = sys.base[i * 3 + 1] * k; c[i * 3 + 2] = sys.base[i * 3 + 2] * k;
      } else { c[i * 3] = c[i * 3 + 1] = c[i * 3 + 2] = 0; }
    }
    sys.g.attributes.position.needsUpdate = true; sys.g.attributes.color.needsUpdate = true;
  }

  // ---------- лучи ----------
  const ray = new THREE.Raycaster(); ray.far = 40;
  let tCache = null, tZone = '';
  api.invalidate = () => { tCache = null; };
  function targets() {
    const w = getWorld(); if (!w) return [];
    if (tCache && tZone === state.zone) return tCache;
    const list = [];
    for (const k in w.groups) { const g = w.groups[k]; if (!g.visible) continue; g.traverse(o => { if (o.isMesh && o.visible && !(o.material.transparent && o.material.opacity < 0.5 && !o.material.alphaTest) && o.material.side !== THREE.DoubleSide) list.push(o); }); }
    (api.extra || []).forEach(g => { if (g.visible) g.traverse(o => { if (o.isMesh && o.visible) list.push(o); }); });   // персонажи (Паша)
    tCache = list; tZone = state.zone; return list;
  }
  function pick(origin, dir) {
    camera.updateMatrixWorld();
    if (origin) ray.set(origin, dir); else ray.setFromCamera({ x: 0, y: 0 }, camera);
    const hits = ray.intersectObjects(targets(), false);
    for (const h of hits) {
      if (!h.face) continue;
      _n.copy(h.face.normal).transformDirection(h.object.matrixWorld);
      if (_n.dot(ray.ray.direction) > 0) _n.negate();
      return { point: h.point.clone(), normal: _n.clone(), object: h.object, uv: h.uv ? h.uv.clone() : null };
    }
    return null;
  }

  function shootAt(origin, dir) {
    const h = pick(origin, dir);
    if (!h) return null;
    if (h.object.userData.npc) { emit(sparks, h.point, h.normal, 6, 1.6, 0.3, [1, 0.5, 0.3]); if (api.onNpc) api.onNpc('gun'); return h; }
    const door = h.object.userData.noPaint;
    if (h.object.userData.crt) {
      placeDecal(h.point, h.normal, 0.3, true);
      const w = getWorld(); if (w && w.glitch) w.glitch(1.1);
      emit(sparks, h.point, h.normal, 14, 2.5, 0.5, [0.6, 1, 0.8]);
    } else if (!door) {
      placeDecal(h.point, h.normal, 0.17 + Math.random() * 0.06, false);
      emit(sparks, h.point, h.normal, 10, 2.2, 0.45, [1, 0.7, 0.25]);
    } else emit(sparks, h.point, h.normal, 6, 1.8, 0.35, [1, 0.7, 0.25]);
    emit(smoke, h.point, h.normal, 3, 0.5, 1.1, [0.3, 0.3, 0.3]);
    return h;
  }

  api.fire = (origin, dir, force) => {
    if (!S.hasRev || S.weapon !== 0 || S.swap < 1) return false;
    if (S.reload >= 0 || S.cd > 0) return false;
    if (S.ammo <= 0) { audio.click(); api.reload(); return false; }
    S.ammo--; S.rec = 1; S.flash = 0.06; S.cd = 0.3;
    drum.rotation.z -= Math.PI / 3;
    audio.shot();
    shootAt(origin, dir);
    updateHud();
    if (S.ammo === 0) setTimeout(() => api.reload(), 450);
    return true;
  };
  api.reload = () => { if (!S.hasRev || S.weapon !== 0 || S.reload >= 0 || S.ammo >= 6) return; S.reload = 0; audio.click(); };
  api.giveRevolver = () => { S.hasRev = true; S.ammo = 6; api.switchWeapon(0); };
  api.switchWeapon = (to) => {
    if (!S.hasRev) return;
    const t = to === undefined ? 1 - S.weapon : to;
    if (t === S.weapon && S.swap >= 1) return;
    S.swapTo = t; S.swap = 0; S.reload = -1; S.trigger = false; audio.spray(false);
  };
  api.cycleColor = (i) => { S.color = i === undefined ? (S.color + 1) % COLORS.length : i; capMat.color.set(COLORS[S.color]); mist.material.color.set(COLORS[S.color]); paintCanLabel(COLORS[S.color]); updateHud(); };
  api.randomColor = () => { const pool = COLORS.map((c, i) => i).filter(i => COLORS[i] !== '#ffffff'); api.cycleColor(pool[Math.floor(Math.random() * pool.length)]); };
  api.setTrigger = (d) => {
    S.trigger = d;
    if (S.weapon === 0 && d) api.fire();
    if (!d) audio.spray(false);
  };
  // отладка: брызнуть из точки
  api.sprayAt = (origin, dir, n = 1) => {
    let h = null;
    for (let i = 0; i < n; i++) h = sprayHit(origin, dir);
    return !!h;
  };
  function sprayHit(origin, dir) {
    const h = pick(origin, dir);
    if (h && h.object.userData.npc) { if (api.onNpc) api.onNpc('paint'); return h; }
    if (h && h.object.userData.board && h.uv) { if (api.boardPaint) api.boardPaint(h.uv, COLORS[S.color]); return h; }   // белая доска: рисунок сохраняется
    if (!h || h.object.userData.noPaint) return null;
    const jit = new THREE.Vector3();
    const size = 0.16 + Math.random() * 0.06;
    addSplat(h.point, h.normal, size);
    for (let k = 0; k < 2; k++) {
      jit.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.16).projectOnPlane(h.normal);
      addSplat(_p.copy(h.point).add(jit), h.normal, 0.02 + Math.random() * 0.04);
    }
    return h;
  }
  api.clear = () => {
    pCount = 0; pIdx = 0; paint.count = 0; decals.forEach(d => d.visible = false); dIdx = 0;
  };
  api.counts = () => ({ decals: decals.filter(d => d.visible).length, paint: pCount });

  // ---------- HUD ----------
  const elAmmo = document.getElementById('ammo'), elPal = document.getElementById('palette');
  function updateHud() {
    if (!elAmmo) return;
    elAmmo.firstElementChild.textContent = S.weapon === 0 ? (S.reload >= 0 ? '…' : S.ammo) + '/∞' : 'Спрей';
    elAmmo.lastElementChild.textContent = S.weapon === 0 ? 'Револьвер .357' : 'Баллончик';
    elPal.style.display = S.weapon === 1 ? 'flex' : 'none';
    [...elPal.children].forEach((b, i) => b.classList.toggle('on', i === S.color));
  }
  if (elPal) {
    COLORS.forEach((c, i) => { const b = document.createElement('button'); b.style.background = c; b.setAttribute('aria-label', 'Цвет ' + (i + 1)); b.addEventListener('click', (e) => { e.stopPropagation(); api.cycleColor(i); }); elPal.appendChild(b); });
  }
  api.updateHud = updateHud; updateHud();

  // ---------- кадр ----------
  const ease = (t) => t * t * (3 - 2 * t);
  api.update = (dt, mv) => {
    S.cd = Math.max(0, S.cd - dt);
    // смена оружия
    let swapOff = 0;
    if (S.swap < 1) {
      S.swap = Math.min(1, S.swap + dt / 0.28);
      if (S.swap < 0.5) swapOff = ease(S.swap * 2); else {
        if (S.weapon !== S.swapTo) { S.weapon = S.swapTo; rev.visible = S.weapon === 0; can.visible = S.weapon === 1; updateHud(); }
        swapOff = 1 - ease((S.swap - 0.5) * 2);
      }
      if (S.swap >= 1) swapOff = 0;
    }
    const base = S.weapon === 0 ? BASE.rev : BASE.can;
    // bob
    S.bobT += dt * (4 + mv.speed * 5);
    const bobA = Math.min(1, mv.speed) * (mv.airborne ? 0 : 1);
    const bx_ = Math.sin(S.bobT) * 0.006 * bobA, by_ = Math.abs(Math.cos(S.bobT)) * 0.007 * bobA - 0.003 * bobA;
    // sway
    let dy = state.yaw - S.lastYaw, dp = state.pitch - S.lastPitch; S.lastYaw = state.yaw; S.lastPitch = state.pitch;
    dy = Math.max(-0.2, Math.min(0.2, dy)); dp = Math.max(-0.2, Math.min(0.2, dp));
    S.sx += (-dy * 0.35 - S.sx) * Math.min(1, dt * 10); S.sy += (dp * 0.35 - S.sy) * Math.min(1, dt * 10);
    // отдача, перезарядка
    S.rec = Math.max(0, S.rec - dt * 7);
    let rl = 0;
    if (S.reload >= 0) {
      S.reload += dt;
      const T = 1.4; const k = Math.min(1, S.reload / T);
      rl = Math.sin(Math.PI * Math.min(1, k * 1.15));
      drum.rotation.z += dt * 18 * Math.sin(Math.PI * k);
      if (S.reload >= T) { S.reload = -1; S.ammo = 6; audio.click(); updateHud(); }
    }
    const g = S.weapon === 0 ? rev : can;
    vm.position.set(base.x + bx_ + S.sx, base.y + by_ + S.sy - swapOff * 0.25 - rl * 0.07 + Math.min(0, mv.vy) * 0.004, base.z + S.rec * 0.05);
    g.rotation.x = (S.weapon === 1 ? -0.35 : 0) + S.rec * 0.28 - rl * 0.55 + swapOff * 0.5;
    g.rotation.z = rl * 0.7 + (mv.airborne ? 0.04 : 0);
    // вспышка
    S.flash = Math.max(0, S.flash - dt);
    flash.visible = S.flash > 0; flash.rotation.z = Math.random() * 6; flashLight.intensity = S.flash > 0 ? 3 : 0;
    hammer.rotation.x = 0.5 - (S.cd > 0.12 ? 0.5 : 0);
    // баллончик: палец жмёт на форсунку
    { const press = S.weapon === 1 && S.trigger && S.swap >= 1 ? 1 : 0; S.press = (S.press || 0) + (press - (S.press || 0)) * Math.min(1, dt * 22); idx.position.set(0, 0, 0); idx.rotation.set(0, 0, 0); idx.position.copy(idxJ[0]).multiplyScalar(-1); idx.rotation.z = 0.0; { const pv = idxJ[0]; idx.position.set(pv.x, pv.y, pv.z); idx.rotation.z = 0.2 * S.press; idx.position.sub(new THREE.Vector3(pv.x, pv.y, pv.z).applyEuler(idx.rotation)); } nozzle.position.y = 0.151 - 0.0045 * S.press; }
    mist.visible = false;
    if (S.weapon === 1 && S.trigger && S.swap >= 1) {
      mist.visible = true; mist.rotation.z = Math.random() * 6; vm.position.x += (Math.random() - 0.5) * 0.002;
      audio.spray(true);
      S.sprayT -= dt;
      if (S.sprayT <= 0) {
        S.sprayT = 0.035;
        const h = sprayHit();
        if (h) {
          if (S.lastP && S.lastP.distanceTo(h.point) < 0.1) S.hold += 0.035; else { S.hold = 0; S.dripLen = 0; }
          S.lastP = h.point.clone();
          if (S.hold > 0.6 && Math.abs(h.normal.y) < 0.6) {
            S.dripT -= 0.035;
            if (S.dripT <= 0 && S.dripLen < 0.45) {
              S.dripT = 0.12; S.dripLen += 0.035;
              _p.copy(h.point); _p.y -= S.dripLen;
              addSplat(_p, h.normal, 0.1, 0.12, 0.55, true);
            }
          }
        } else { S.lastP = null; S.hold = 0; }
      }
    } else if (S.weapon === 1) audio.spray(false);
    stepParticles(sparks, dt); stepParticles(smoke, dt);
  };
  api.render = () => {
    vmCam.aspect = camera.aspect; vmCam.updateProjectionMatrix();
    renderer.clearDepth(); renderer.render(vmScene, vmCam);
  };
  api.paint = paint; api.vm = vm; api.vmScene = vmScene; api.vmCam = vmCam;
  // рука с рукавом для баллончика из GLB (Higgsfield + Blender); корпус баллончика остаётся свой, с меняющимся цветом
  { const gc = new GLTFLoader(); gc.setMeshoptDecoder(MeshoptDecoder);
    gc.load('models/high/viewmodel_can_hand.glb', (g) => {
      can.children.slice().forEach(ch => { if (ch.userData.hand) ch.visible = false; });
      g.scene.traverse((m) => { if (m.isMesh) { m.frustumCulled = false; const mt = m.material; if (mt) { mt.emissive = new THREE.Color(0xffffff); mt.emissiveMap = mt.map || null; mt.emissiveIntensity = mt.map ? 0.18 : 0; mt.metalness = 0; mt.roughness = 0.85; } } });
      g.scene.traverse((m) => { if (m.isMesh && m.material) { const mt = m.material; mt.onBeforeCompile = (sh) => {
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvOP = position;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP;').replace('void main() {', 'void main() {\n  if (vOP.x > 0.02 && vOP.y > 0.106) discard;');
      }; mt.needsUpdate = true; } });
      can.add(g.scene);
    }, undefined, () => { }); }
  // револьвер с рукой из GLB (Higgsfield + Blender); если файла нет или он не загрузился, остаётся процедурный
  { const gl = new GLTFLoader(); gl.setMeshoptDecoder(MeshoptDecoder);
    gl.load('models/high/viewmodel_revolver.glb', (g) => {
      rev.children.slice().forEach(ch => { if (ch !== flash) ch.visible = false; });
      g.scene.traverse((m) => { if (m.isMesh) { m.frustumCulled = false; const mt = m.material; if (mt) { mt.emissive = new THREE.Color(0xffffff); mt.emissiveMap = mt.map || null; mt.emissiveIntensity = mt.map ? 0.18 : 0; mt.metalness = Math.min(mt.metalness || 0, 0.35); } } });
      g.scene.scale.setScalar(1.22); g.scene.rotation.x = 0.1; g.scene.position.set(-0.04, 0.11, 0.0); rev.add(g.scene); flash.position.set(-0.03, 0.2, -0.3);
    }, undefined, () => { }); }
  api.randomColor();   // у каждого входа баллончик другого цвета
  return api;
}
