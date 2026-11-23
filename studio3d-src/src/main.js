import * as THREE from 'three';
import { buildWorld, groundY, WALK, OBST, PLAYER_R, EYE, TELEPORTS, ZONE_NAMES, zoneAt, setLevel, inChai } from './world.js';
import { loadFonts } from './art.js';
import { setAniso } from './tex.js';
import { initBoard } from './board.js';
import { createPasha } from './npc.js';
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
let renderer, camera, world, stageEl = $('#stage'), pasha = null;
let fixedQuality = qs.get('fixed') === '1';
let pr = 1, prMax = 1, qualityMode = 'auto';
// пиксель-арт: сцена рисуется в низком разрешении (~270 строк) и растягивается без сглаживания; по умолчанию включён
let pxOn = qs.get('px') !== '0';
try { if (qs.get('px') === null && localStorage.getItem('revolver_px') === '0') pxOn = false; } catch (e) { }
function applyPixel() {
  document.body.classList.toggle('px', pxOn);
  if (!renderer) return;
  const k = Math.max(1.6, window.innerHeight / 270);
  pr = pxOn ? 1 / k : (qualityMode === 'low' ? 1 : prMax);
  renderer.setPixelRatio(pr); resize();
  const b = document.getElementById('pxBtn'); if (b) b.style.opacity = pxOn ? 1 : 0.55;
}

// ------------------------------------------------------------------
async function init() {
  qualityMode = $('#q').value;
  const low = qualityMode === 'low' || qs.get('q') === 'low' || (isTouch && qs.get('q') !== 'high');
  prMax = Math.min(window.devicePixelRatio || 1, isTouch ? 1.5 : 2);
  pr = low ? 1 : prMax;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: !low && !isTouch && !pxOn, powerPreference: 'high-performance' });
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
  applyPixel();

  setProgress(15);
  await loadFonts();
  setProgress(40);
  await new Promise(r => setTimeout(r, 30));
  world = buildWorld({ low });
  setProgress(90);
  world.redrawMural(); world.redrawDoor(); world.redrawSign();
  weapons = createWeapons({ renderer, camera, scene: world.scene, getWorld: () => world, audio, state });
  initBoard(world.board, weapons);
  // Паша-звукорежиссёр сидит за пультом; брызги и выстрелы выводят его из себя
  pasha = createPasha(world.scene, {
    x: 5.71, z: 1.3, yaw: Math.PI, low, glbUrl: 'models/high/pasha.glb',
    onSay: (n, t) => toast(n, t),
    onPunch: () => punchFx(),
    onRestart: () => { location.reload(); }
  });
  weapons.extra = [pasha.group];
  weapons.onNpc = (why) => { if (pasha && pasha.state() === 'sit') { pasha.provoke(why); const h = world.hotspots.find(x => x.id === 'pasha'); if (h) { h.disabled = true; const el = markerEls.get(h); if (el) el.style.display = 'none'; } if (state.cardOpen) closeCard(); } };
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
const lvOK = (tag) => !tag || ((tag === 'U') === (state.y > 1.5));   // чайхана (y≈3) лежит над залом и тамбуром (y=0)
function inWalk(x, z) {
  for (const r of WALK) if (lvOK(r[4]) && x >= r[0] && x <= r[1] && z >= r[2] && z <= r[3]) return true;
  return false;
}
function blocked(x, z) {
  if (!inWalk(x, z)) return true;
  for (const o of OBST) if (lvOK(o[4]) && x > o[0] - PLAYER_R && x < o[1] + PLAYER_R && z > o[2] - PLAYER_R && z < o[3] + PLAYER_R) return true;
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
function jump() { if (!state.started || state.paused || state.cardOpen || !state.grounded) return; state.vy = 5.0; state.grounded = false; }
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
let shake = 0;
function punchFx() {
  shake = 1; state.paused = true; if (weapons) weapons.setTrigger(false);
  if (document.pointerLockElement) document.exitPointerLock();
  let f = document.getElementById('hitfx');
  if (!f) { f = document.createElement('div'); f.id = 'hitfx'; f.style.cssText = 'position:fixed;inset:0;z-index:99;pointer-events:none;background:radial-gradient(ellipse at center,rgba(255,40,30,.15),rgba(180,0,0,.75));opacity:0;transition:opacity .08s'; document.body.appendChild(f); }
  f.style.opacity = '1'; setTimeout(() => { f.style.transition = 'opacity 1.1s'; f.style.opacity = '0.85'; }, 120);
  if (actx && state.sound) { const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(35, t + 0.18); g.gain.setValueAtTime(0.7, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.25); o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.3); }
  toast('Паша', 'Получил по лицу. Начинаем заново.');
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
  setLevel(t.lv || 0); state.y = groundY(t.x, t.z); state.vy = 0; state.grounded = true; state.eyeY = state.y + EYE;
  setZone(zoneAt(t.x, t.z, state.y), true);
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
  const map = { street: 1, entry: 1, hall: 2, studio: 3, chai: 4 };
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
  setSound(true);   // звук включается по нажатию «Зайти» (браузеру нужен жест); кнопка 🔊 выключает
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
// лоуфай играет из колонок в студии: чем ближе к ним, тем громче и чище; через стены и на улице — глухо
const SPK = { x: 4.4, y: 1.0, z: 1.34 };
const OCC = { studio: 0, hall: 0.55, entry: 0.78, street: 0.94, chai: 1 };
let lofi = null, lofiGain = null, lofiLP = null, lofiPan = null;
function startLofi() {
  if (lofi || !actx) return;
  try {
    lofi = new Audio('audio/lofi.mp3'); lofi.loop = true;
    const src = actx.createMediaElementSource(lofi);
    lofiLP = actx.createBiquadFilter(); lofiLP.type = 'lowpass'; lofiLP.frequency.value = 400; lofiLP.Q.value = 0.5;
    lofiGain = actx.createGain(); lofiGain.gain.value = 0;
    src.connect(lofiLP);
    if (actx.createStereoPanner) { lofiPan = actx.createStereoPanner(); lofiLP.connect(lofiPan); lofiPan.connect(lofiGain); } else lofiLP.connect(lofiGain);
    lofiGain.connect(actx.destination);
    lofi.play().catch(() => { });
  } catch (e) { lofi = null; }
}
function updateLofi() {
  if (!lofi || !actx) return;
  const dx = state.x - SPK.x, dz = state.z - SPK.z, dy = state.y + EYE - SPK.y;
  const d = Math.hypot(dx, dy, dz), occ = OCC[state.zone] ?? 0.9;
  const near = 1 / (1 + Math.pow(d / 2.2, 2));
  const g = state.sound ? (0.05 + 0.95 * near) * (1 - 0.82 * occ) : 0;
  const f = Math.max(260, 17000 * Math.exp(-0.16 * d) * (1 - 0.88 * occ));
  const t = actx.currentTime;
  lofiGain.gain.setTargetAtTime(g * 0.9, t, 0.12); lofiLP.frequency.setTargetAtTime(f, t, 0.12);
  if (lofiPan) {
    const rx = Math.cos(state.yaw), rz = -Math.sin(state.yaw);
    const sp = (-dx * rx - dz * rz) / Math.max(d, 0.5);
    lofiPan.pan.setTargetAtTime(Math.max(-0.7, Math.min(0.7, sp * 0.7)) * (1 - occ), t, 0.1);
  }
  window.__lofi = { d: +d.toFixed(2), g: +g.toFixed(3), f: Math.round(f), zone: state.zone };
}
function setSound(on) {
  state.sound = on;
  $('#snd').textContent = on ? '🔊' : '🔇';
  if (on) { ensureAudio(); if (actx && actx.state === 'suspended') actx.resume(); startLofi(); if (lofi && lofi.paused) lofi.play().catch(() => { }); }
  if (humGain) humGain.gain.value = on ? 0.03 : 0;
}
$('#snd').addEventListener('click', () => setSound(!state.sound));

// ------------------------------------------------------------------
// мини-карта
const mm = $('#minimap'), mmx = mm.getContext('2d');
const MAP = { x0: -16.5, z0: -2, s: 6.0 };
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
  rect(-14.7, 5.6, 18, 11.2, 'rgba(70,74,92,.5)', null);               // тротуар
  rect(-14.7, -2, -11.2, 5.6, 'rgba(70,74,92,.5)', null);               // тротуар у Фрунзе
  rect(-11.2, 0.1, 3.8, 5.6, 'rgba(230,150,60,.45)', '#ffb347');         // чайхана
  rect(-2.0, 5.6, 2.8, 7.1, 'rgba(120,120,130,.6)', '#8a8f9a');       // лестница
  rect(-3.4, 5.6, -2.0, 7.1, 'rgba(120,120,130,.45)', '#8a8f9a');     // площадка
  rect(-3.4, 2.2, -0.2, 5.4, 'rgba(150,60,200,.55)', '#c070ff');      // тамбур
  rect(0, 0, 3.76, 5.14, 'rgba(40,150,70,.55)', '#35e06b');            // зал
  rect(4.01, 0, 6.91, 5.14, 'rgba(60,100,220,.55)', '#6a95ff');        // студия
  c.fillStyle = '#fff'; c.font = '600 15px Manrope, Arial, sans-serif'; c.textAlign = 'center';
  [['ул.', 6, 9.4], ['зал', 1.9, 2.7], ['звук', 5.45, 2.0], ['тамб.', -1.8, 3.8], ['чай', -4, 3.0]].forEach(([t, x, z]) => { const [a, b] = mp(x, z); c.fillText(t, a, b); });
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
  setLevel(state.y);
  const gnd = groundY(state.x, state.z);
  if (state.grounded) { if (gnd < state.y - 0.3) { state.grounded = false; state.vy = 0; } else state.y = gnd; }
  if (!state.grounded) {
    state.vy -= 13 * dt; state.y += state.vy * dt;
    const ceilAbs = (state.y > 1.5 && inChai(state.x, state.z)) ? 6.6 : (state.z >= 5.5 && state.x > -0.8) ? 99 : 2.96;
    const maxY = ceilAbs - 0.12 - EYE;
    if (state.y > maxY) { state.y = maxY; if (state.vy > 0) state.vy = 0; }
    if (state.y <= gnd) { state.y = gnd; state.vy = 0; state.grounded = true; }
  }
  const tY = state.y + EYE;
  state.eyeY = state.grounded ? state.eyeY + (tY - state.eyeY) * Math.min(1, dt * 14) : tY;
  const zn = zoneAt(state.x, state.z, state.y);
  if (zn !== state.zone) setZone(zn, false);
  if (world) world.update(dt, state.x, state.z, state.zone);
  updateLofi();
  if (pasha) { { const vis = state.zone === 'studio' || state.zone === 'hall' || state.zone === 'entry'; if (pasha.group.visible !== vis) { pasha.group.visible = vis; weapons.invalidate(); } } pasha.update(dt, state.x, state.z); if (shake > 0) { shake = Math.max(0, shake - dt * 1.4); } }
  camera.position.set(state.x, state.eyeY + Math.sin(state.bob) * 0.018, state.z);
  camera.rotation.set(state.pitch + (shake ? (Math.random() - 0.5) * shake * 0.12 : 0), state.yaw + (shake ? (Math.random() - 0.5) * shake * 0.12 : 0), shake ? (Math.random() - 0.5) * shake * 0.1 : 0);
  camera.updateMatrixWorld();
  if (world) {
    updateFocus();
    if (weapons) weapons.update(dt, { speed: curMag, airborne: !state.grounded, vy: state.vy });
    renderer.clear(); renderer.info.reset();
    renderer.render(world.scene, window.__topCam || camera);
    if (weapons && state.started) weapons.render();
  }
  mapT += dt; if (mapT > 0.066) { mapT = 0; drawMap(); }
  if (humFilter) humFilter.frequency.value = state.zone === 'street' ? 700 : 260;

  // адаптивное разрешение
  if (qualityMode === 'auto' && !fixedQuality && !pxOn && state.started) {
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

const pxBtn = document.getElementById('pxBtn');
if (pxBtn) pxBtn.addEventListener('click', () => { pxOn = !pxOn; try { localStorage.setItem('revolver_px', pxOn ? '1' : '0'); } catch (e) { } applyPixel(); });
addEventListener('resize', () => { if (pxOn && renderer) applyPixel(); });
$('#q').addEventListener('change', () => {
  qualityMode = $('#q').value;
  if (!renderer) return;
  pr = qualityMode === 'low' ? 1 : prMax; renderer.setPixelRatio(pr); applyPixel();
});

const tourApi = {
  pasha: () => pasha && ({ state: pasha.state(), x: pasha.group.position.x, z: pasha.group.position.z }),
  // отладка: пройти по точкам с настоящими коллизиями, вернуть где остановились
  sim: (pts) => {
    const out = [];
    for (const [tx, tz] of pts) {
      let k = 0;
      while (k++ < 2500) {
        const dx = tx - state.x, dz = tz - state.z, d = Math.hypot(dx, dz);
        if (d < 0.12) break;
        const s = Math.min(0.06, d); tryMove(state.x + dx / d * s, state.z + dz / d * s);
        setLevel(state.y); state.y = groundY(state.x, state.z);
      }
      out.push([tx, tz, +state.x.toFixed(2), +state.z.toFixed(2), +state.y.toFixed(2), k < 2500]);
    }
    setZone(zoneAt(state.x, state.z, state.y), true);
    return out;
  },
  // отладка: вид сверху (ортографическая камера), все группы видимы
  top: (cx, cz, half, y) => {
    for (const n in world.groups) world.groups[n].visible = true;
    const oc = new THREE.OrthographicCamera(-half * camera.aspect, half * camera.aspect, half, -half, 0.1, 200);
    oc.position.set(cx, y || 60, cz); oc.up.set(0, 0, -1); oc.lookAt(cx, 0, cz); oc.updateMatrixWorld();
    window.__topCam = oc;
  },
  teleport: (n) => { applyTeleport(n); },
  teleportFade: teleport,
  setView: (x, z, yaw, pitch, lv) => { state.x = x; state.z = z; state.yaw = yaw; state.pitch = pitch; setLevel(lv || 0); state.y = groundY(x, z); state.vy = 0; state.grounded = true; state.eyeY = state.y + EYE; setZone(zoneAt(x, z, state.y), true); },
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
