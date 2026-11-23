// Паша-звукорежиссёр: стилизованный персонаж по фото (длинные волосы в хвост, борода и усы, круглые очки,
// тёмная флисовая куртка). Сидит за пультом; если в него брызнуть краской или выстрелить, встаёт, идёт к игроку
// и бьёт по лицу, после чего игра перезапускается.
import * as THREE from 'three';
import { cv, rng, toTex } from './tex.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function fleeceTex() {
  const c = cv(64, 64), x = c.getContext('2d'), r = rng(77);
  x.fillStyle = '#1d2330'; x.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 360; i++) { x.fillStyle = `rgba(${60 + r() * 50},${70 + r() * 50},${95 + r() * 60},${0.12 + r() * 0.22})`; x.beginPath(); x.arc(r() * 64, r() * 64, 0.8 + r() * 1.8, 0, 7); x.fill(); }
  const t = toTex(c); t.repeat.set(2, 2); return t;
}

export function createPasha(parent, o) {
  const low = !!o.low, SEG = low ? 10 : 20;
  const root = new THREE.Group(); root.position.set(o.x, 0, o.z); root.rotation.y = o.yaw; parent.add(root);
  const M = (c, op = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.75, metalness: 0 }, op));
  const skin = M(0xd6a27c, { roughness: 0.7 }), hair = M(0x3b2a1c, { roughness: 0.55 }), beard = M(0x9a7448, { roughness: 0.9 });
  const fleece = M(0xffffff, { map: fleeceTex(), roughness: 1 }), jeans = M(0x1c2029, { roughness: 0.9 }), shoe = M(0xe8e8ea, { roughness: 0.6 }), sole = M(0x2a2a2e);
  const metal = M(0xb8bcc4, { roughness: 0.25, metalness: 0.9 }), white = M(0xf2f2f2, { roughness: 0.4 }), dark = M(0x111114);
  const cap = (g, r, len, m, x, y, z, rx = 0, rz = 0) => { const me = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, low ? 3 : 6, SEG), m); me.position.set(x, y, z); me.rotation.set(rx, 0, rz); g.add(me); return me; };
  const sph = (g, r, m, x, y, z, sx = 1, sy = 1, sz = 1) => { const me = new THREE.Mesh(new THREE.SphereGeometry(r, SEG, Math.max(6, SEG - 4)), m); me.position.set(x, y, z); me.scale.set(sx, sy, sz); g.add(me); return me; };

  const pelvis = new THREE.Group(); root.add(pelvis);
  cap(pelvis, 0.12, 0.1, jeans, 0, 0.02, 0, 0, Math.PI / 2);
  const spine = new THREE.Group(); spine.position.set(0, 0.06, 0); pelvis.add(spine);
  cap(spine, 0.145, 0.22, fleece, 0, 0.24, 0);                                       // торс-жакет
  cap(spine, 0.165, 0.04, fleece, 0, 0.4, 0, 0, Math.PI / 2);                        // плечи
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.032, 8, SEG), fleece); collar.position.set(0, 0.5, 0); collar.rotation.x = Math.PI / 2; spine.add(collar);
  const zip = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.36, 0.01), metal); zip.position.set(0, 0.26, 0.151); spine.add(zip);
  const head = new THREE.Group(); head.position.set(0, 0.5, 0); spine.add(head);
  cap(head, 0.036, 0.04, skin, 0, 0.03, 0);                                          // шея
  sph(head, 0.105, skin, 0, 0.17, 0.01, 0.94, 1.08, 1);                              // голова
  [-1, 1].forEach(s => sph(head, 0.02, skin, s * 0.098, 0.165, 0, 0.6, 1, 0.8));      // уши
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.113, SEG, 12, 0, Math.PI * 2, 0, 1.55), hair); hairCap.position.set(0, 0.185, -0.012); hairCap.scale.set(0.97, 1.05, 1.06); head.add(hairCap);
  sph(head, 0.1, hair, 0, 0.145, -0.05, 0.95, 0.95, 0.85);                           // волосы сзади
  cap(head, 0.034, 0.12, hair, 0, 0.1, -0.15, 0.55);                                 // хвост
  sph(head, 0.045, hair, 0, 0.215, -0.1, 1, 0.8, 1);                                 // пучок
  const bd = new THREE.Mesh(new THREE.SphereGeometry(0.108, SEG, 12, 0, Math.PI * 2, 1.78, 1.05), beard); bd.position.set(0, 0.17, 0.012); bd.scale.set(0.95, 1.08, 1.04); head.add(bd);   // борода
  sph(head, 0.03, beard, 0, 0.138, 0.098, 1.6, 0.35, 0.6);                           // усы
  cap(head, 0.014, 0.02, skin, 0, 0.165, 0.108, 0.2);                                // нос
  [-1, 1].forEach(s => {
    sph(head, 0.017, white, s * 0.04, 0.188, 0.093, 1, 0.8, 0.5); sph(head, 0.009, dark, s * 0.04, 0.188, 0.099, 1, 1, 0.5);   // глаза
    const br = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.01, 0.01), hair); br.position.set(s * 0.04, 0.215, 0.096); br.rotation.z = -s * 0.12; head.add(br);   // брови
    const lens = new THREE.Mesh(new THREE.TorusGeometry(0.036, 0.0045, 8, SEG), metal); lens.position.set(s * 0.043, 0.189, 0.104); head.add(lens);                  // круглые очки
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.11), metal); arm.position.set(s * 0.09, 0.19, 0.05); head.add(arm);
  });
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.004, 0.004), metal); bridge.position.set(0, 0.195, 0.108); head.add(bridge);

  const mkArm = (s) => {
    const sh = new THREE.Group(); sh.position.set(s * 0.19, 0.42, 0); spine.add(sh);
    cap(sh, 0.05, 0.2, fleece, 0, -0.16, 0);
    const el = new THREE.Group(); el.position.set(0, -0.32, 0); sh.add(el);
    cap(el, 0.042, 0.2, fleece, 0, -0.14, 0); sph(el, 0.044, skin, 0, -0.3, 0, 1, 1.15, 0.8);
    return { sh, el };
  };
  const aL = mkArm(-1), aR = mkArm(1);
  const mkLeg = (s) => {
    const hip = new THREE.Group(); hip.position.set(s * 0.09, -0.01, 0); pelvis.add(hip);
    cap(hip, 0.072, 0.3, jeans, 0, -0.22, 0);
    const kn = new THREE.Group(); kn.position.set(0, -0.45, 0); hip.add(kn);
    cap(kn, 0.056, 0.3, jeans, 0, -0.22, 0);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.075, 0.27), shoe); foot.position.set(0, -0.47, 0.06); kn.add(foot);
    const sl = new THREE.Mesh(new THREE.BoxGeometry(0.104, 0.02, 0.28), sole); sl.position.set(0, -0.51, 0.06); kn.add(sl);
    return { hip, kn };
  };
  const lL = mkLeg(-1), lR = mkLeg(1);
  root.traverse(ob => { if (ob.isMesh) { ob.userData.npc = true; ob.userData.noPaint = true; } });

  // --- GLB-модель Паши (Higgsfield/Meshy) управляется теми же числами, что и процедурная фигурка ---
  let glbSync = null;
  const NAMES = { hips: 'Hips', sp: 'Spine', head: 'Head', lua: 'LeftArm', lfa: 'LeftForeArm', rua: 'RightArm', rfa: 'RightForeArm', lth: 'LeftUpLeg', lsh: 'LeftLeg', lft: 'LeftFoot', lto: 'LeftToeBase', rth: 'RightUpLeg', rsh: 'RightLeg', rft: 'RightFoot', rto: 'RightToeBase' };
  if (o.glbUrl) {
    const ld = new GLTFLoader(); ld.setMeshoptDecoder(MeshoptDecoder);
    ld.load(o.glbUrl, (g) => {
      const gr = new THREE.Group(); gr.add(g.scene); root.add(gr); root.updateMatrixWorld(true);
      const Bn = {}; for (const k in NAMES) Bn[k] = g.scene.getObjectByName(NAMES[k]);
      if (!Bn.hips || !Bn.lth) return;
      g.scene.traverse((m) => { if (m.isMesh) { m.frustumCulled = false; m.userData.npc = true; m.userData.noPaint = true; const mt = m.material; if (mt) { mt.emissive = new THREE.Color(0xffffff); mt.emissiveMap = mt.map || null; mt.emissiveIntensity = mt.map ? 0.28 : 0; } } });
      const qr = new THREE.Quaternion(), qp = new THREE.Quaternion(), qd = new THREE.Quaternion(), qa = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3();
      const rootQ0 = root.getWorldQuaternion(new THREE.Quaternion()).invert();
      const rest = {}; for (const k in Bn) rest[k] = { rel: rootQ0.clone().multiply(Bn[k].getWorldQuaternion(new THREE.Quaternion())), q: Bn[k].quaternion.clone(), p: Bn[k].position.clone() };
      const hipsRoot0 = root.worldToLocal(Bn.hips.getWorldPosition(new THREE.Vector3()));
      const Rx = (a, b = 0) => new THREE.Quaternion().setFromEuler(e.set(a, b, 0, 'YXZ'));
      const setAbs = (k, dq) => { const bn = Bn[k]; root.getWorldQuaternion(qr); bn.parent.getWorldQuaternion(qp); qd.copy(qr).multiply(dq).multiply(rest[k].rel); bn.quaternion.copy(qp.invert().multiply(qd)); bn.updateMatrixWorld(true); };
      g.scene.updateMatrixWorld(true);
      pelvis.visible = false;           // процедурную фигурку прячем, остаётся только для расчёта поз
      const ID = new THREE.Quaternion(), HIPS_Y = 0.95;
      glbSync = () => {
        for (const k in Bn) { Bn[k].quaternion.copy(rest[k].q); Bn[k].position.copy(rest[k].p); }
        root.updateMatrixWorld(true);
        v.copy(hipsRoot0); v.y += pelvis.position.y - HIPS_Y + (o.hipsAdjust || 0); v.z += (o.hipsZ || 0);
        Bn.hips.position.copy(Bn.hips.parent.worldToLocal(root.localToWorld(v))); Bn.hips.updateMatrixWorld(true);
        setAbs('sp', Rx(spine.rotation.x, spine.rotation.y));
        setAbs('head', Rx(spine.rotation.x * 0.6 + head.rotation.x, head.rotation.y + spine.rotation.y));
        setAbs('lua', Rx(aL.sh.rotation.x)); setAbs('lfa', Rx(aL.sh.rotation.x + aL.el.rotation.x));
        setAbs('rua', Rx(aR.sh.rotation.x)); setAbs('rfa', Rx(aR.sh.rotation.x + aR.el.rotation.x));
        setAbs('lth', Rx(lL.hip.rotation.x)); setAbs('lsh', Rx(lL.hip.rotation.x + lL.kn.rotation.x)); setAbs('lft', ID); setAbs('lto', ID);
        setAbs('rth', Rx(lR.hip.rotation.x)); setAbs('rsh', Rx(lR.hip.rotation.x + lR.kn.rotation.x)); setAbs('rft', ID); setAbs('rto', ID);
      };
      glbSync();
    }, undefined, () => { });
  }

  // --- позы ---
  const SIT = { py: 0.54, thx: -1.45, shx: 1.5, tor: 0.12, uax: -0.55, fax: -1.0, hx: -0.12 };
  const STAND = { py: 0.95, thx: 0, shx: 0, tor: 0, uax: 0.04, fax: -0.12, hx: 0 };
  const P = { ...SIT };
  const S = { st: 'sit', t: 0, walk: 0, look: 0, punchT: 0, hit: false, tick: 0 };
  const WAY = [[4.5, 3.45], [3.6, 3.45], [0.5, 3.45], [-0.9, 3.45]];
  let wpI = 0;

  function apply(sitW, tm) {
    const pz = o.seatZ ?? 0;
    pelvis.position.y = lerp(STAND.py, SIT.py, sitW);
    const th = lerp(STAND.thx, SIT.thx, sitW), sh = lerp(STAND.shx, SIT.shx, sitW), sw = S.walk * Math.sin(S.t * 7.5) * 0.65;
    lL.hip.rotation.x = th + sw * (1 - sitW); lR.hip.rotation.x = th - sw * (1 - sitW);
    lL.kn.rotation.x = sh + Math.max(0, -sw) * 0.9 * (1 - sitW); lR.kn.rotation.x = sh + Math.max(0, sw) * 0.9 * (1 - sitW);
    spine.rotation.x = lerp(STAND.tor, SIT.tor, sitW);
    const type = sitW > 0.9 ? Math.sin(tm * 9) * 0.04 : 0;
    let uaL = lerp(STAND.uax, SIT.uax, sitW) - S.walk * Math.sin(S.t * 7.5) * 0.5 * (1 - sitW) + type, faL = lerp(STAND.fax, SIT.fax, sitW);
    let uaR = lerp(STAND.uax, SIT.uax, sitW) + S.walk * Math.sin(S.t * 7.5) * 0.5 * (1 - sitW) - type, faR = faL;
    if (S.st === 'punch') { const k = clamp(S.punchT / 0.3, 0, 1), back = S.punchT > 0.3 ? clamp(1 - (S.punchT - 0.3) / 0.35, 0, 1) : 1; uaR = lerp(0.6, -1.55, k) * back + uaR * (1 - back); faR = lerp(-1.0, -0.12, k) * back + faR * (1 - back); uaL = -0.9; faL = -1.3; spine.rotation.y = lerp(0, -0.35, k) * back; } else spine.rotation.y = 0;
    aL.sh.rotation.set(uaL, 0, 0.06); aL.el.rotation.x = faL; aR.sh.rotation.set(uaR, 0, -0.06); aR.el.rotation.x = faR;
    if (glbSync) glbSync();
  }
  apply(1, 0);

  // --- логика ---
  const api = { group: root, state: () => S.st, hotspotPos: new THREE.Vector3(o.x, 1.25, o.z) };
  api.provoke = (why) => {
    if (S.st !== 'sit') return;
    S.st = 'stand'; S.t = 0; wpI = 0;
    if (o.onSay) o.onSay('Паша', why === 'gun' ? 'Ты что, с ума сошёл?!' : 'Ты мне весь пульт испачкал!');
  };
  api.update = (dt, px, pz) => {
    S.tick += dt;
    const head_ = head;
    if (S.st === 'sit') {
      apply(1, S.tick);
      const dx = px - root.position.x, dz = pz - root.position.z, near = Math.hypot(dx, dz) < 3.6;
      const want = near ? clamp(Math.atan2(dx, dz) - root.rotation.y, -1.0, 1.0) : Math.sin(S.tick * 0.3) * 0.15;
      head_.rotation.y = lerp(head_.rotation.y, want, Math.min(1, dt * 3));
      head_.rotation.x = lerp(head_.rotation.x, near ? 0 : SIT.hx, Math.min(1, dt * 3));
      return;
    }
    S.t += dt;
    if (S.st === 'stand') {
      const k = clamp(S.t / 0.75, 0, 1), e = k * k * (3 - 2 * k);
      apply(1 - e, S.tick); head_.rotation.x = lerp(head_.rotation.x, 0, 0.2);
      if (k >= 1) { S.st = 'chase'; S.t = 0; }
      return;
    }
    if (S.st === 'chase') {
      let tx = px, tz = pz;
      if (px < 4.0) { while (wpI < WAY.length && root.position.x <= WAY[wpI][0] + 0.15 && wpI < WAY.length - 1 && WAY[wpI][0] > px) { const d = Math.hypot(WAY[wpI][0] - root.position.x, WAY[wpI][1] - root.position.z); if (d < 0.35) wpI++; else break; } const wp = WAY[Math.min(wpI, WAY.length - 1)]; if (WAY[Math.min(wpI, WAY.length - 1)][0] > px + 0.4) { tx = wp[0]; tz = wp[1]; } }
      const dx = tx - root.position.x, dz = tz - root.position.z, d = Math.hypot(dx, dz);
      const face = Math.atan2(dx, dz); let da = face - root.rotation.y; da = Math.atan2(Math.sin(da), Math.cos(da)); root.rotation.y += da * Math.min(1, dt * 8);
      head_.rotation.y = lerp(head_.rotation.y, 0, 0.2);
      const distP = Math.hypot(px - root.position.x, pz - root.position.z);
      if (distP > 0.95) { const sp = Math.min(1.9 * dt, d); root.position.x += dx / Math.max(d, 1e-4) * sp; root.position.z += dz / Math.max(d, 1e-4) * sp; S.walk = 1; }
      else { S.walk = 0; S.st = 'punch'; S.punchT = 0; S.hit = false; }
      apply(0, S.tick);
      return;
    }
    if (S.st === 'punch') {
      S.punchT += dt; const dx = px - root.position.x, dz = pz - root.position.z;
      const face = Math.atan2(dx, dz); let da = face - root.rotation.y; da = Math.atan2(Math.sin(da), Math.cos(da)); root.rotation.y += da * Math.min(1, dt * 10);
      apply(0, S.tick);
      if (!S.hit && S.punchT > 0.26) { S.hit = true; if (o.onPunch) o.onPunch(); }
      if (S.punchT > 1.4 && o.onRestart) { const f = o.onRestart; o.onRestart = null; f(); }
    }
  };
  return api;
}
