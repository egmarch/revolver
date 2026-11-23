// Настоящие 3D-пальмы (не спрайты): изогнутый ствол с кольцами и перистые листья с зубчатым краем.
// Все пальмы рисуются двумя InstancedMesh (ствол + листья) — 2 вызова отрисовки на любое их число.
import * as THREE from 'three';

function rnd(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

function buildVariant(detail, seed, H) {
  const r = rnd(seed), tp = [], tc = [], ti = [], lp = [], lc = [];
  // --- ствол: трубка с лёгким изгибом и сужением, кольца-шрамы от листьев
  const rings = detail ? 18 : 7, sides = detail ? 12 : 6, lean = 0.5 + r() * 0.8, dirA = r() * 6.28;
  const cx = Math.cos(dirA), cz = Math.sin(dirA);
  const centers = [];
  for (let i = 0; i <= rings; i++) {
    const t = i / rings, bend = lean * t * t * H * 0.18;
    const c = [cx * bend, t * H, cz * bend];
    centers.push(c);
    const rad = (0.2 - 0.085 * t) * (1 + (i === 0 ? 0.45 : 0)) * (i % 2 ? 1.0 : (detail ? 0.93 : 1));
    const shade = detail ? (i % 2 ? 0.55 : 0.42) : 0.5;
    for (let k = 0; k < sides; k++) {
      const a = (k / sides) * Math.PI * 2;
      tp.push(c[0] + Math.cos(a) * rad, c[1], c[2] + Math.sin(a) * rad);
      tc.push(0.62 * shade * 1.5, 0.5 * shade * 1.5, 0.38 * shade * 1.5);
    }
  }
  for (let i = 0; i < rings; i++) for (let k = 0; k < sides; k++) {
    const a = i * sides + k, b = i * sides + (k + 1) % sides, c = (i + 1) * sides + k, d = (i + 1) * sides + (k + 1) % sides;
    ti.push(a, c, b, b, c, d);
  }
  const top = centers[rings];
  // --- листья: дугой от вершины, зубчатый край (перья)
  const nf = detail ? 15 : 8, segs = detail ? 10 : 4;
  for (let f = 0; f < nf; f++) {
    const a = (f / nf) * Math.PI * 2 + r() * 0.35, ca = Math.cos(a), sa = Math.sin(a);
    const L = H * (0.34 + r() * 0.12), up0 = 0.5 + r() * 0.4, droop = 0.8 + r() * 0.7, w0 = (detail ? 0.2 : 0.26) * (0.85 + r() * 0.3);
    const pts = [];
    for (let k = 0; k <= segs; k++) {
      const t = k / segs, out = L * t, y = top[1] + L * (up0 * t - droop * t * t) + 0.1;
      const feather = detail ? (k % 2 ? 1 : 0.5) : 1;
      pts.push([top[0] + ca * out, y, top[2] + sa * out, w0 * Math.sin(Math.PI * Math.min(1, t * 0.92 + 0.06)) * feather + 0.012]);
    }
    for (let k = 0; k < segs; k++) {
      const p = pts[k], q = pts[k + 1], l1 = [-sa * p[3], 0, ca * p[3]], l2 = [-sa * q[3], 0, ca * q[3]];
      const v = [[p[0] - l1[0], p[1], p[2] - l1[2]], [p[0] + l1[0], p[1], p[2] + l1[2]], [q[0] + l2[0], q[1], q[2] + l2[2]], [q[0] - l2[0], q[1], q[2] - l2[2]]];
      const g = 0.5 + 0.5 * (k / segs);
      [0, 1, 2, 0, 2, 3].forEach(ix => { lp.push(...v[ix]); lc.push(0.1 * g, 0.55 * g + 0.15, 0.14 * g); });
    }
  }
  const tg = new THREE.BufferGeometry();
  tg.setAttribute('position', new THREE.Float32BufferAttribute(tp, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(tc, 3)); tg.setIndex(ti); tg.computeVertexNormals();
  const lg = new THREE.BufferGeometry();
  lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3)); lg.setAttribute('color', new THREE.Float32BufferAttribute(lc, 3)); lg.computeVertexNormals();
  return { tg, lg };
}

// spots: [[x, y, z, высота(м)], ...]; detail: true — для ПК, false — для телефонов
export function buildPalms(parent, spots, detail) {
  const group = new THREE.Group(); parent.add(group);
  const tm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
  const lm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, side: THREE.DoubleSide, emissive: 0x0a3a14, emissiveIntensity: 0.35 });
  const variants = [buildVariant(detail, 11, 7), buildVariant(detail, 29, 7)];
  const dummy = new THREE.Object3D();
  variants.forEach((v, vi) => {
    const mine = spots.filter((_, i) => i % 2 === vi);
    if (!mine.length) return;
    const it = new THREE.InstancedMesh(v.tg, tm, mine.length), il = new THREE.InstancedMesh(v.lg, lm, mine.length);
    mine.forEach(([x, y, z, h], i) => {
      dummy.position.set(x, y, z); dummy.rotation.set(0, (i * 2.399) % 6.28, 0); const s = (h || 7) / 7 * (0.9 + ((i * 37) % 10) / 40); dummy.scale.set(s, s, s); dummy.updateMatrix();
      it.setMatrixAt(i, dummy.matrix); il.setMatrixAt(i, dummy.matrix);
    });
    it.frustumCulled = false; il.frustumCulled = false; group.add(it, il);
  });
  return group;
}
