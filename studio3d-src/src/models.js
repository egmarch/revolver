// Тяжёлая версия для ПК: 3D-модели машин (Higgsfield/Meshy, ≈20 тыс. треугольников). На телефонах не загружаются.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export function loadCarModels(cars, parent) {
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  const cache = {};
  cars.forEach((spr, idx) => {
    const f = spr.userData.f.replace('.png', '.glb');
    cache[f] = cache[f] || new Promise((res, rej) => loader.load('models/high/' + f, (g) => {
      g.scene.traverse((o) => { if (o.isMesh && o.material) { o.material.emissive = new THREE.Color(0xffffff); o.material.emissiveMap = o.material.map || null; o.material.emissiveIntensity = o.material.map ? 0.22 : 0; o.frustumCulled = false; } });
      res(g.scene);
    }, undefined, rej));
    cache[f].then((src) => {
      const u = spr.userData, m = src.clone(true);
      m.rotation.y = u.axis === 'x' ? (u.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (u.dir > 0 ? 0 : Math.PI);   // перед модели = +Z
      const holder = new THREE.Group(); holder.add(m); holder.userData = u;
      holder.position.set(spr.position.x, 2.9, spr.position.z);
      parent.add(holder); parent.remove(spr); cars[idx] = holder;
    }).catch(() => { });
  });
}

// Реквизит: заменяет процедурные детали группы моделью из GLB (если файл загрузился); спрайты-подсветки остаются
export function loadProp(url, group, o = {}) {
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(url, (g) => {
    g.scene.traverse((o) => { if (o.isMesh && o.material) { o.frustumCulled = false; o.material.emissive = new THREE.Color(0xffffff); o.material.emissiveMap = o.material.map || null; o.material.emissiveIntensity = o.material.map ? 0.2 : 0; o.material.metalness = Math.min(o.material.metalness || 0, 0.3); } });
    group.children.slice().forEach((c) => { if (!c.isSprite) c.visible = false; });
    g.scene.rotation.y = o.rotY || 0; g.scene.position.y = o.y || 0; group.add(g.scene);
  }, undefined, () => { });
}
