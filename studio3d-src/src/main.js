import * as THREE from 'three';
import { buildWorld, groundY, WALK, OBST, PLAYER_R, EYE, TELEPORTS, ZONE_NAMES, zoneAt } from './world.js';
import { loadFonts } from './art.js';
import { setAniso } from './tex.js';
import { createWeapons } from './weapons.js';

const $ = (s) => document.querySelector(s);
const qs = new URLSearchParams(location.search);
const isTouch = qs.get('touch') === '1' || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0 && matchMedia('(pointer: coarse)').matches);
if (isTouch) document.body.classList.add('touch');
if (isTouch) document.querySelector('.keys .t')?.classList.remove('hidden');
else document.querySelector('.keys .t')?.classList.add('hidden');

const state = {
  started: false, paused: false, cardOpen: false,
  x: 3.4, z: 21.6, yaw: -0.62, pitch: -0.04, eyeY: 3 + EYE, y: 3, vy: 0, grounded: true,
  zone: 'street', locked: false, bob: 0, sound: false, zoneBtn: 1
};
const input = { keys: {}, mx: 0, mz: 0, lx: 0, ly: 0, run: false };

let weapons = null, curMag = 0, lastWheel = 0;
let renderer, camera, world, stageEl = $('#stage');
let fixedQuality = qs.get('fixed') === '1';
let pr = 1, prMax = 1, qualityMode = 'auto';

// ------------------------------------------------------------------
async function init() {
  qualityMode = $('#q').value;
  const low = qualityMode === 'low' || qs.get('q') === 'low';
  prMax = Math.min(window.devicePixelRatio || 1, isTouch ? 1.5 : 2);
  pr = low ? 1 : prMax;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: !low && !isTouch, powerPreference: 'high-performance' });
  } catch (e) {
    $('#go').textContent = 'WebGL недоступен'; return;
  }
  renderer.setPixelRatio(pr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = false;
  renderer.autoClear = false; renderer.info.autoReset = false;
  stageEl.appendChild(renderer.domElement);
  setAniso(Math.min(renderer.capabilities.getMaxAnisotropy(), low ? 2 : 8));
  camera = new THREE.PerspectiveCamera(72, 1, 0.05, 160);
  camera.rotation.order = 'YXZ';
  resize();

  setProgress(15);
  await loadFonts();
  setProgress(40);
  await new Promise(r => setTimeout(r, 30));
  world = buildWorld({ low });
  setProgress(90);
  world.redrawMural(); world.redrawDoor(); world.redrawSign();
  weapons = createWeapons({ renderer, camera, scene: world.scene, getWorld: () => world, audio, state });
  buildMarkers();
  drawMapBase();
  applyTeleport(1, true);
  renderer.render(world.scene, camera);
  setProgress(100);
  const go = $('#go'); go.disabled = false; go.textContent = 'Зайти'; $('#loadbar').classList.add('hidden');
  requestAnimationFrame(loop);
  window.__tour = tourApi;
}

function setProgress(p) { const i = $('#loadbar i'); if (i) i.style.width = p + '%'; }

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, true);
  camera.aspect = w / h;
  camera.fov = w / h < 0.9 ? 82 : 72;
  camera.updateProjectionMatrix();
}
addEventListener('resize', () => { if (renderer) resize(); });
addEventListener('orientationchange', () => setTimeout(() => renderer && resize(), 250));

// ------------------------------------------------------------------
// столкновения
function inWalk(x, z) {
  for (const r of WALK) if (x >= r[0] && x <= r[1] && z >= r[2] && z <= r[3]) return true;
  return false;
}
function blocked(x, z) {
  if (!inWalk(x, z)) return true;
  for (const o of OBST) if (x > o[0] - PLAYER_R && x < o[1] + PLAYER_R && z > o[2] - PLAYER_R && z < o[3] + PLAYER_R) return true;
  return false;
}
function tryMove(nx, nz) {
  if (!blocked(nx, nz)) { state.x = nx; state.z = nz; return true; }
  if (!blocked(nx, state.z)) { state.x = nx; return true; }
  if (!blocked(state.x, nz)) { state.z = nz; return true; }
  return false;
}

// ------------------------------------------------------------------
// управление
const KEYMAP = { KeyW: 'f', ArrowUp: 'f', KeyS: 'b', ArrowDown: 'b', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r' };
addEventListener('keydown', (e) => {
  if (!state.started) return;
  if (KEYMAP[e.code]) { input.keys[KEYMAP[e.code]] = true; e.preventDefault(); }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') input.run = true;
  if (e.code === 'KeyE' && !e.repeat) { if (state.cardOpen) closeCard(); else interact(); }
  if (e.code === 'Escape' && state.cardOpen) closeCard();
  if (e.code === 'Space') { e.preventDefault(); if (!e.repeat) jump(); }
  if (!state.cardOpen && !state.paused && !e.repeat && weapons) {
    if (e.code === 'KeyQ') weapons.switchWeapon();
    if (e.code === 'KeyR') weapons.reload();
    if (e.code === 'KeyC') weapons.cycleColor();
    if (e.code === 'KeyX') weapons.clear();
  }
  if (/^Digit[1-3]$/.test(e.code) && !e.repeat) teleport(+e.code.slice(5));
});
addEventListener('keyup', (e) => {
  if (KEYMAP[e.code]) input.keys[KEYMAP[e.code]] = false;
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') input.run = false;
});
addEventListener('blur', () => { input.keys = {}; input.run = false; });

function lookBy(dx, dy) {
  state.yaw -= dx * 0.0022;
  state.pitch = Math.max(-1.35, Math.min(1.35, state.pitch - dy * 0.0022));
}
document.addEventListener('mousemove', (e) => {
  if (state.locked) lookBy(e.movementX, e.movementY);
});

// --- аккуратный захват курсора: без повторных запросов и с гарантированным отпусканием ---
let lockBusy = false;
function lockPointer() {
  if (isTouch || state.locked || lockBusy) return;
  lockBusy = true; setTimeout(() => { lockBusy = false; }, 800);
  try { const r = renderer.domElement.requestPointerLock(); if (r && r.catch) r.catch(() => { lockBusy = false; }); } catch (e) { lockBusy = false; }
}
function releasePointer() { try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { } }
document.addEventListener('pointerlockerror', () => { lockBusy = false; });
addEventListener('blur', releasePointer);
addEventListener('pagehide', releasePointer);
addEventListener('beforeunload', releasePointer);
document.addEventListener('visibilitychange', () => { if (document.hidden) releasePointer(); });
document.addEventListener('click', (e) => { const a = e.target.closest && e.target.closest('a[href]'); if (a) releasePointer(); }, true);

let drag = null;
stageEl.addEventListener('pointerdown', (e) => {
  if (!state.started || state.cardOpen || e.pointerType !== 'mouse') return;
  if (!state.locked) {
    lockPointer();
    drag = { x: e.clientX, y: e.clientY, t: performance.now(), moved: 0 };
  } else if (weapons) {
    if (e.button === 0) trig(true); else if (e.button === 2) weapons.cycleColor();
  }
});
addEventListener('contextmenu', (e) => { if (state.started) e.preventDefault(); });
addEventListener('wheel', (e) => {
  if (!state.started || state.cardOpen || state.paused || !weapons) return;
  const n = performance.now(); if (n - lastWheel < 260) return; lastWheel = n;
  weapons.switchWeapon();
}, { passive: true });
function trig(d) { if (!weapons) return; if (d && (!state.started || state.paused || state.cardOpen)) return; weapons.setTrigger(d); }
function jump() { if (!state.started || state.paused || state.cardOpen || !state.grounded) return; state.vy = 4.3; state.grounded = false; }
const tb = (id, down, up) => { const el = $(id); el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); try { el.setPointerCapture(e.pointerId); } catch (er) { } down(); }); if (up) ['pointerup', 'pointercancel'].forEach(ev => el.addEventListener(ev, up)); };
tb('#btnJump', jump); tb('#btnFire', () => trig(true), () => trig(false)); tb('#btnSwap', () => weapons && weapons.switchWeapon()); tb('#btnRel', () => weapons && weapons.reload());
addEventListener('pointermove', (e) => {
  if (drag && e.pointerType === 'mouse' && !state.locked) {
    lookBy(e.clientX - drag.x, e.clientY - drag.y);
    drag.moved += Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y);
    drag.x = e.clientX; drag.y = e.clientY;
  }
});
addEventListener('pointerup', (e) => {
  if (e.pointerType === 'mouse' && e.button === 0) trig(false);
  if (drag && drag.moved < 6 && performance.now() - drag.t < 300 && !state.locked) interact();
  drag = null;
});
document.addEventListener('pointerlockchange', () => {
  const was = state.locked;
  state.locked = document.pointerLockElement === renderer.domElement;
  if (!state.locked) trig(false);
  if (was && !state.locked && state.started && !state.cardOpen && !isTouch) showPause(true);
});

// стики
function makeStick(el, cb) {
  const knob = el.firstElementChild; const R = 44; let id = null, cx = 0, cy = 0;
  function mv(e) {
    let dx = (e.clientX - cx) / R, dy = (e.clientY - cy) / R;
    const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; }
    knob.style.transform = `translate(${dx * R}px,${dy * R}px)`; cb(dx, dy);
  }
  el.addEventListener('pointerdown', (e) => {
    if (id !== null) return; id = e.pointerId;
    try { el.setPointerCapture(id); } catch (er) { }
    const r = el.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2;
    mv(e); e.preventDefault();
  });
  el.addEventListener('pointermove', (e) => { if (e.pointerId === id) mv(e); });
  const end = (e) => { if (e.pointerId !== id) return; id = null; knob.style.transform = ''; cb(0, 0); };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
}
makeStick($('#stickL'), (dx, dy) => { input.mx = dx; input.mz = dy; });
makeStick($('#stickR'), (dx, dy) => { input.lx = dx; input.ly = dy; });
$('#actBtn').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); interact(); });

// ------------------------------------------------------------------
// хотспоты, маркеры, карточка
let focus = null;
const markerEls = new Map();
function buildMarkers() {
  const host = $('#markers');
  world.hotspots.forEach((h, i) => {
    const el = document.createElement('div');
    el.className = 'mk'; el.textContent = '+'; el.style.display = 'none';
    el.addEventListener('pointerdown', (e) => { e.stopPropagation(); });
    el.addEventListener('click', (e) => { e.stopPropagation(); openCard(h); });
    host.appendChild(el); markerEls.set(h, el);
  });
}
const _v = new THREE.Vector3(), _f = new THREE.Vector3();
function updateFocus() {
  camera.getWorldDirection(_f);
  let best = null, bestScore = 0;
  const cp = camera.position;
  for (const h of world.hotspots) {
    const el = markerEls.get(h);
    if (h.zone !== state.zone || h.disabled || state.cardOpen || !state.started) { el.style.display = 'none'; continue; }
    _v.copy(h.pos).sub(cp);
    const d = _v.length();
    _v.divideScalar(d);
    const dot = _v.dot(_f);
    const range = h.zone === 'street' ? 14 : 6.5;
    // экранная проекция
    _v.copy(h.pos).project(camera);
    const vis = _v.z < 1 && d < range && dot > 0.2;
    if (vis) {
      el.style.display = 'flex';
      const sx = (_v.x * 0.5 + 0.5) * innerWidth, sy = (-_v.y * 0.5 + 0.5) * innerHeight;
      el.style.left = sx + 'px'; el.style.top = sy + 'px';
      el.style.opacity = String(Math.max(0.35, Math.min(1, 1.5 - d / range)));
    } else el.style.display = 'none';
    const reach = h.zone === 'street' ? 16 : 5.2;
    if (dot > 0.93 && d < reach && vis) {
      const score = dot - d * 0.01;
      if (score > bestScore) { bestScore = score; best = h; }
    }
  }
  focus = best;
  markerEls.forEach((el, h) => el.classList.toggle('focus', h === focus));
  const pr_ = $('#prompt'), cr = $('#cross'), ab = $('#actBtn');
  if (focus) {
    pr_.classList.add('on'); cr.classList.add('on');
    pr_.lastElementChild.textContent = (focus.pickup ? ' Взять: ' : ' Осмотреть: ') + focus.title;
    pr_.firstElementChild.textContent = isTouch ? '●' : 'E';
    ab.classList.add('on');
  } else { pr_.classList.remove('on'); cr.classList.remove('on'); ab.classList.remove('on'); }
}
const NOFILE = 'Здесь будет реальная запись: тот же фрагмент до и после сведения';
const audioOK = {};
let cardAudioEl = null;
function checkAudio(f) {
  if (audioOK[f] !== undefined) return Promise.resolve(audioOK[f]);
  return fetch('../assets/audio/' + f, { method: 'HEAD' }).then(r => (audioOK[f] = r.ok)).catch(() => (audioOK[f] = false));
}
function stopCardAudio() {
  if (cardAudioEl) { try { cardAudioEl.pause(); } catch (e) { } cardAudioEl = null; }
  const b = $('#playBtn'); if (b) b.textContent = '▶';
}
function setupAudio(h) {
  const box = $('#cardAudio'); stopCardAudio();
  if (!h.audio) { box.classList.add('hidden'); return; }
  const btn = $('#playBtn'), msg = $('#audioMsg');
  box.classList.remove('hidden'); btn.classList.add('hidden'); msg.textContent = 'Проверяю запись…';
  checkAudio(h.audio).then(ok => {
    if (!state.cardOpen) return;
    if (!ok) { msg.textContent = NOFILE; return; }
    btn.classList.remove('hidden'); msg.textContent = h.audio.indexOf('before') > 0 ? 'Голос до обработки' : 'После сведения';
    btn.onclick = () => {
      if (cardAudioEl && !cardAudioEl.paused) { stopCardAudio(); return; }
      cardAudioEl = new Audio('../assets/audio/' + h.audio);
      cardAudioEl.onended = stopCardAudio;
      cardAudioEl.onerror = () => { stopCardAudio(); btn.classList.add('hidden'); msg.textContent = NOFILE; };
      cardAudioEl.play().then(() => { btn.textContent = '⏸'; }).catch(() => { });
    };
  });
}
function toast(t, s) {
  const el = $('#toast'); el.innerHTML = '<b></b><span></span>'; el.firstChild.textContent = t; el.lastChild.textContent = s;
  el.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('on'), 5500);
}
function pickRevolver() {
  if (!world || !weapons || weapons.S.hasRev) return false;
  world.hideRevolverProp();
  const h = world.hotspots.find(x => x.id === 'revolver');
  if (h) { h.disabled = true; const el = markerEls.get(h); if (el) el.style.display = 'none'; }
  weapons.giveRevolver();
  $('#btnSwap').classList.remove('hidden'); $('#btnRel').classList.remove('hidden');
  toast('Револьвер подобран', 'ЛКМ — огонь · R — перезарядка · Q или колесо — сменить оружие');
  return true;
}
function interact() {
  if (state.cardOpen) return;
  if (focus) openCard(focus);
}
let openedAt = 0;
function openCard(h) {
  if (h.pickup) { pickRevolver(); return; }
  if (weapons) weapons.setTrigger(false);
  state.cardOpen = true; openedAt = performance.now();
  if (document.pointerLockElement) document.exitPointerLock();
  const im = $('#cardImg');
  if (h.img) { im.classList.remove('hidden'); im.onerror = () => { im.onerror = null; im.src = '../assets/img/control-1.webp'; }; im.src = `../assets/img/${h.img}.webp`; im.alt = h.title; } else im.classList.add('hidden');
  setupAudio(h);
  $('#cardTitle').textContent = h.title;
  $('#cardText').textContent = h.text;
  const bk = $('#cardBook'); if (h.href) { bk.classList.remove('hidden'); bk.href = h.href; } else bk.classList.add('hidden');
  $('#card').classList.remove('hidden'); $('#shade').classList.remove('hidden');
  input.keys = {}; input.mx = input.mz = input.lx = input.ly = 0;
}
function closeCard() {
  if (!state.cardOpen) return;
  stopCardAudio();
  state.cardOpen = false;
  $('#card').classList.add('hidden'); $('#shade').classList.add('hidden');
  if (!isTouch) { lockPointer(); }
}
$('#cardClose').addEventListener('click', closeCard);
$('#shade').addEventListener('click', () => { if (performance.now() - openedAt > 450) closeCard(); });
// тап по сцене на тач: ближайший маркер
stageEl.addEventListener('click', (e) => {
  if (!isTouch || !state.started || state.cardOpen) return;
  let best = null, bd = 80;
  markerEls.forEach((el, h) => {
    if (el.style.display === 'none') return;
    const dx = parseFloat(el.style.left) - e.clientX, dy = parseFloat(el.style.top) - e.clientY;
    const d = Math.hypot(dx, dy); if (d < bd) { bd = d; best = h; }
  });
  if (best) openCard(best);
});

// ------------------------------------------------------------------
// телепорт
let fading = false;
function applyTeleport(n, instant) {
  const t = TELEPORTS[n];
  state.x = t.x; state.z = t.z; state.yaw = t.yaw; state.pitch = t.pitch;
  state.y = groundY(t.x, t.z); state.vy = 0; state.grounded = true; state.eyeY = state.y + EYE;
  setZone(zoneAt(t.x, t.z), true);
  state.zoneBtn = n; markZoneBtn();
}
function teleport(n) {
  if (!TELEPORTS[n] || fading) return;
  fading = true;
  const f = $('#fade'); f.classList.add('on');
  setTimeout(() => {
    applyTeleport(n);
    setTimeout(() => { f.classList.remove('on'); fading = false; }, 120);
  }, 300);
}
document.querySelectorAll('#zones button').forEach(b => b.addEventListener('click', () => { teleport(+b.dataset.z); b.blur(); }));
function markZoneBtn() {
  const map = { street: 1, entry: 1, hall: 2, studio: 3 };
  document.querySelectorAll('#zones button').forEach(b => b.classList.toggle('on', +b.dataset.z === map[state.zone]));
}

function setZone(z, snap) {
  const prevZone = state.zone;
  state.zone = z;
  if (z === 'studio' && prevZone !== 'studio' && state.started && !state.endShown) { state.endShown = true; setTimeout(showEnd, 1500); }
  world.setVisibility(z); if (weapons) weapons.invalidate();
  world.setZoneLights(z, snap);
  const [n, s] = ZONE_NAMES[z];
  $('#zoneName').textContent = n; $('#zoneSub').textContent = s;
  markZoneBtn();
}

// ------------------------------------------------------------------
// пауза / старт
function showEnd() { if (!state.cardOpen && !state.paused) $('#endcard').classList.add('on'); }
$('#endClose').addEventListener('click', () => $('#endcard').classList.remove('on'));
function showPause(v) { $('#pause').classList.toggle('hidden', !v); state.paused = v; }
$('#resume').addEventListener('click', () => {
  showPause(false);
  if (!isTouch) { lockPointer(); }
});

$('#go').addEventListener('click', () => {
  if (!world) return;
  $('#splash').classList.add('hidden');
  $('#hud').classList.remove('hidden');
  if (isTouch) $('#touch').classList.remove('hidden');
  state.started = true; document.body.classList.add('started'); setTimeout(() => document.body.classList.remove('started'), 6000);
  if (!isTouch) { lockPointer(); }
  const fs = qs.get('fs') === '1';
  if (fs && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => { });
  // без звука по умолчанию
});

// ------------------------------------------------------------------
// звук (опционально)
let actx = null, humGain = null, humFilter = null, lastStep = 0;
function ensureAudio() {
  if (actx) return;
  try {
    actx = new (window.AudioContext || window.webkitAudioContext)();
    const len = actx.sampleRate * 2, buf = actx.createBuffer(1, len, actx.sampleRate), d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    const src = actx.createBufferSource(); src.buffer = buf; src.loop = true;
    humFilter = actx.createBiquadFilter(); humFilter.type = 'lowpass'; humFilter.frequency.value = 220;
    humGain = actx.createGain(); humGain.gain.value = 0.0;
    src.connect(humFilter).connect(humGain).connect(actx.destination); src.start();
    const o = actx.createOscillator(); o.frequency.value = 50; const og = actx.createGain(); og.gain.value = 0.015;
    o.connect(og).connect(actx.destination); o.start();
  } catch (e) { actx = null; }
}
function stepSound() {
  if (!actx || !state.sound) return;
  const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
  o.type = 'triangle'; o.frequency.setValueAtTime(110 + Math.random() * 30, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.08);
  g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
  o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.12);
}
const audio = {
  shot() {
    if (!state.sound || !actx) return;
    const t = actx.currentTime;
    const len = Math.floor(actx.sampleRate * 0.25), b = actx.createBuffer(1, len, actx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    const n = actx.createBufferSource(); n.buffer = b;
    const bp = actx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.6;
    const g = actx.createGain(); g.gain.value = 0.7;
    const o = actx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.25);
    const og = actx.createGain(); og.gain.setValueAtTime(0.9, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    const dly = actx.createDelay(); dly.delayTime.value = 0.13; const fb = actx.createGain(); fb.gain.value = 0.35;
    const lp = actx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1500;
    const out = actx.createGain(); out.gain.value = 0.6; out.connect(actx.destination);
    n.connect(bp).connect(g).connect(out); o.connect(og).connect(out);
    g.connect(dly); og.connect(dly); dly.connect(lp).connect(fb).connect(dly); lp.connect(actx.destination);
    n.start(t); o.start(t); o.stop(t + 0.35);
  },
  click() {
    if (!state.sound || !actx) return;
    const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
    o.type = 'square'; o.frequency.value = 1400; g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.05);
  },
  spray(on) {
    if (!actx || !state.sound) on = false;
    if (on) {
      if (!audio._g) {
        const len = actx.sampleRate, b = actx.createBuffer(1, len, actx.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        const s = actx.createBufferSource(); s.buffer = b; s.loop = true;
        const hp = actx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 3500;
        audio._g = actx.createGain(); audio._g.gain.value = 0; s.connect(hp).connect(audio._g).connect(actx.destination); s.start();
      }
      audio._g.gain.setTargetAtTime(0.12, actx.currentTime, 0.02);
    } else if (audio._g) audio._g.gain.setTargetAtTime(0, actx.currentTime, 0.03);
  }
};
$('#snd').addEventListener('click', () => {
  state.sound = !state.sound;
  $('#snd').textContent = state.sound ? '🔊' : '🔇';
  if (state.sound) { ensureAudio(); if (actx && actx.state === 'suspended') actx.resume(); }
  if (humGain) humGain.gain.value = state.sound ? 0.06 : 0;
});

// ------------------------------------------------------------------
// мини-карта
const mm = $('#minimap'), mmx = mm.getContext('2d');
const MAP = { x0: -4.2, z0: -1.6, s: 11.4 };
let mapBase = null;
function mp(x, z) { return [(x - MAP.x0) * MAP.s, (z - MAP.z0) * MAP.s]; }
function drawMapBase() {
  mapBase = document.createElement('canvas'); mapBase.width = mm.width; mapBase.height = mm.height;
  const c = mapBase.getContext('2d');
  c.fillStyle = 'rgba(8,10,16,.9)'; c.fillRect(0, 0, mm.width, mm.height);
  const rect = (x0, z0, x1, z1, fill, stroke) => {
    const [a, b] = mp(x0, z0), [c2, d] = mp(x1, z1);
    c.fillStyle = fill; c.fillRect(a, b, c2 - a, d - b);
    if (stroke) { c.strokeStyle = stroke; c.lineWidth = 2; c.strokeRect(a, b, c2 - a, d - b); }
  };
  rect(2.8, 5.6, 8.6, 16, 'rgba(70,74,92,.5)', null);                 // улица
  rect(-2.0, 5.6, 2.8, 7.1, 'rgba(120,120,130,.6)', '#8a8f9a');       // лестница
  rect(-3.4, 5.6, -2.0, 7.1, 'rgba(120,120,130,.45)', '#8a8f9a');     // площадка
  rect(-3.4, 2.2, -0.2, 5.4, 'rgba(150,60,200,.55)', '#c070ff');      // тамбур
  rect(0, 0, 6, 5, 'rgba(40,150,70,.55)', '#35e06b');                  // зал
  rect(6, -1, 9, 5, 'rgba(60,100,220,.55)', '#6a95ff');               // студия
  c.fillStyle = '#fff'; c.font = '600 15px Manrope, Arial, sans-serif'; c.textAlign = 'center';
  [['ул.', 5.8, 11], ['зал', 3, 2.7], ['звук', 7.5, 2.0], ['тамб.', -1.8, 3.8]].forEach(([t, x, z]) => { const [a, b] = mp(x, z); c.fillText(t, a, b); });
}
function drawMap() {
  mmx.drawImage(mapBase, 0, 0);
  const [px, pz] = mp(state.x, state.z);
  mmx.save(); mmx.translate(px, pz); mmx.rotate(-state.yaw);
  mmx.fillStyle = 'rgba(255,59,48,.25)';
  mmx.beginPath(); mmx.moveTo(0, 0); mmx.arc(0, 0, 40, -Math.PI / 2 - 0.6, -Math.PI / 2 + 0.6); mmx.fill();
  mmx.fillStyle = '#ff3b30'; mmx.strokeStyle = '#fff'; mmx.lineWidth = 2;
  mmx.beginPath(); mmx.moveTo(0, -9); mmx.lineTo(7, 8); mmx.lineTo(-7, 8); mmx.closePath(); mmx.fill(); mmx.stroke();
  mmx.restore();
}

// ------------------------------------------------------------------
// цикл
let last = performance.now(), mapT = 0, fpsAcc = 0, fpsN = 0, adaptCool = 0;
function loop(now) {
  requestAnimationFrame(loop);
  let dt = (now - last) / 1000; last = now;
  if (dt > 0.1) dt = 0.1;
  if (state.started && !state.paused && !state.cardOpen) {
    // обзор
    if (isTouch && (input.lx || input.ly)) {
      const cv = (n) => Math.sign(n) * Math.pow(Math.abs(n), 1.7); // мягкая кривая стика
      state.yaw -= cv(input.lx) * dt * 1.5;
      state.pitch = Math.max(-1.3, Math.min(1.3, state.pitch - cv(input.ly) * dt * 1.0));
    }
    // ходьба
    let fx = 0, fz = 0;
    if (input.keys.f) fz -= 1; if (input.keys.b) fz += 1; if (input.keys.l) fx -= 1; if (input.keys.r) fx += 1;
    fx += input.mx; fz += input.mz;
    const mag = Math.min(1, Math.hypot(fx, fz)); curMag = mag * (input.run ? 1.5 : 1);
    if (mag > 0.05) {
      const sp = (input.run ? 4.4 : 2.5) * mag * dt;
      const nl = Math.hypot(fx, fz); fx /= nl; fz /= nl;
      const s = Math.sin(state.yaw), c = Math.cos(state.yaw);
      // вперёд = (-sin, -cos); вправо = (cos, -sin)
      const dx = (fx * c + fz * s) * sp, dz = (-fx * s + fz * c) * sp;
      const ox = state.x, oz = state.z;
      tryMove(state.x + dx, state.z + dz);
      const moved = Math.hypot(state.x - ox, state.z - oz);
      state.bob += moved * 5.2;
      if (moved > 0 && state.bob - lastStep > 2.6) { lastStep = state.bob; stepSound(); }
    }
  }
  if (!(state.started && !state.paused && !state.cardOpen && (input.keys.f || input.keys.b || input.keys.l || input.keys.r || input.mx || input.mz))) curMag = 0;
  const gnd = groundY(state.x, state.z);
  if (state.grounded) { if (gnd < state.y - 0.3) { state.grounded = false; state.vy = 0; } else state.y = gnd; }
  if (!state.grounded) {
    state.vy -= 13 * dt; state.y += state.vy * dt;
    const ceilAbs = (state.z >= 5.5 && state.x > -0.8) ? 99 : 2.8;
    const maxY = ceilAbs - 0.12 - EYE;
    if (state.y > maxY) { state.y = maxY; if (state.vy > 0) state.vy = 0; }
    if (state.y <= gnd) { state.y = gnd; state.vy = 0; state.grounded = true; }
  }
  const tY = state.y + EYE;
  state.eyeY = state.grounded ? state.eyeY + (tY - state.eyeY) * Math.min(1, dt * 14) : tY;
  const zn = zoneAt(state.x, state.z);
  if (zn !== state.zone) setZone(zn, false);
  if (world) world.update(dt, state.x, state.z, state.zone);
  camera.position.set(state.x, state.eyeY + Math.sin(state.bob) * 0.018, state.z);
  camera.rotation.set(state.pitch, state.yaw, 0);
  camera.updateMatrixWorld();
  if (world) {
    updateFocus();
    if (weapons) weapons.update(dt, { speed: curMag, airborne: !state.grounded, vy: state.vy });
    renderer.clear(); renderer.info.reset();
    renderer.render(world.scene, camera);
    if (weapons && state.started) weapons.render();
  }
  mapT += dt; if (mapT > 0.066) { mapT = 0; drawMap(); }
  if (humFilter) humFilter.frequency.value = state.zone === 'street' ? 700 : 260;

  // адаптивное разрешение
  if (qualityMode === 'auto' && !fixedQuality && state.started) {
    fpsAcc += dt; fpsN++; adaptCool -= dt;
    if (fpsN >= 45) {
      const avg = fpsAcc / fpsN; fpsAcc = 0; fpsN = 0;
      if (adaptCool <= 0) {
        if (avg > 0.026 && pr > 0.6) { pr = Math.max(0.6, pr - 0.15); renderer.setPixelRatio(pr); adaptCool = 1.5; }
        else if (avg < 0.0155 && pr < prMax) { pr = Math.min(prMax, pr + 0.1); renderer.setPixelRatio(pr); adaptCool = 3; }
      }
    }
  }
}

$('#q').addEventListener('change', () => {
  qualityMode = $('#q').value;
  if (!renderer) return;
  pr = qualityMode === 'low' ? 1 : prMax; renderer.setPixelRatio(pr);
});

const tourApi = {
  teleport: (n) => { applyTeleport(n); },
  teleportFade: teleport,
  setView: (x, z, yaw, pitch) => { state.x = x; state.z = z; state.yaw = yaw; state.pitch = pitch; state.y = groundY(x, z); state.vy = 0; state.grounded = true; state.eyeY = state.y + EYE; setZone(zoneAt(x, z), true); },
  start: () => $('#go').click(),
  state, input,
  get world() { return world; },
  info: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles, tex: renderer.info.memory.textures, geo: renderer.info.memory.geometries, pr }),
  fire: () => weapons.fire(), switchWeapon: (n) => weapons.switchWeapon(n), setColor: (i) => weapons.cycleColor(i), clearAll: () => weapons.clear(), counts: () => weapons.counts(),
  sprayAt: (ox, oy, oz, dx, dy, dz, n) => { const V = THREE.Vector3; return ox === undefined ? weapons.sprayAt(undefined, undefined, 1) : weapons.sprayAt(new V(ox, oy, oz), new V(dx, dy, dz).normalize(), n || 1); },
  fireAt: (ox, oy, oz, dx, dy, dz) => { const V = THREE.Vector3; weapons.S.cd = 0; if (weapons.S.weapon !== 0) weapons.switchWeapon(0); return weapons.fire(new V(ox, oy, oz), new V(dx, dy, dz).normalize()); },
  get weapons() { return weapons; }, jump,
  showEnd, pickRevolver, interact, closeCard, hotspots: () => world.hotspots.map(h => h.id), open: (id) => openCard(world.hotspots.find(h => h.id === id)),
  fixed: () => { fixedQuality = true; }
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
