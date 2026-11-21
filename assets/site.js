'use strict';
/* ====== настройки ======
   sound — Telegram звукозаписи (Костя), main — Telegram подкастов/продакшена.
   endpoint — адрес CRM/прокси заявок (POST JSON). Пока пусто → заявка уходит черновиком в Telegram.
   Когда подключим CRM: впиши сюда URL (например Cloudflare Worker или webhook amoCRM/Bitrix24). */
const CONTACTS = { main: 'Egmarch', sound: 'CS10ten', endpoint: '' };
/* ======================== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
const touch = matchMedia('(hover:none)').matches;
const money = n => new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(Math.round(n));
const track = (e, d) => { (window.dataLayer = window.dataLayer || []).push(Object.assign({ event: e }, d || {})); };

/* ---- меню ---- */
const nav = $('#nav'), burger = $('#burger');
burger.onclick = () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); document.body.classList.toggle('lock', o); };
nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('lock'); } });

/* ---- прогресс ---- */
const prog = $('#progress');
addEventListener('scroll', () => { const m = document.documentElement.scrollHeight - innerHeight; prog.style.width = (m > 0 ? scrollY / m * 100 : 0) + '%'; }, { passive: true });

/* ---- появление ---- */
const rvs = $$('.rv,.wipe,#bar');
if ('IntersectionObserver' in window && !reduce) {
  const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); ro.unobserve(e.target); } }), { threshold: .12 });
  rvs.forEach(x => ro.observe(x));
} else rvs.forEach(x => x.classList.add('vis'));

/* ---- параллакс в hero ---- */
const hero = $('.hero');
if (hero && !touch && !reduce) hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3)); });

/* ---- граффити-след курсора ---- */
(function () {
  if (touch || reduce) return;
  const c = $('#spray'), x = c.getContext('2d'); let w, h, last = null, run = false, hue = 0;
  const size = () => { const d = Math.min(devicePixelRatio || 1, 2); w = c.width = innerWidth * d; h = c.height = innerHeight * d; x.setTransform(d, 0, 0, d, 0, 0); };
  size(); addEventListener('resize', size);
  const cs = getComputedStyle(document.documentElement), cols = ['--lime', '--red', '--violet'].map(v => cs.getPropertyValue(v).trim() || '#c9f23b');
  function dot(px, py, col) { for (let i = 0; i < 7; i++) { const a = Math.random() * 6.283, r = Math.random() * Math.random() * 15; x.globalAlpha = .55 * (1 - r / 18); x.fillStyle = col; x.beginPath(); x.arc(px + Math.cos(a) * r, py + Math.sin(a) * r, Math.random() * 1.4 + .5, 0, 6.283); x.fill(); } }
  addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const col = cols[Math.floor(hue / 90) % 3]; hue = (hue + 1.5) % 270;
    if (last) { const dx = e.clientX - last.x, dy = e.clientY - last.y, n = Math.min(Math.ceil(Math.hypot(dx, dy) / 6), 14); for (let i = 0; i < n; i++) dot(last.x + dx * i / n, last.y + dy * i / n, col); }
    last = { x: e.clientX, y: e.clientY }; if (!run) { run = true; requestAnimationFrame(fade); }
  }, { passive: true });
  document.addEventListener('pointerleave', () => last = null);
  let t = 0;
  function fade() { x.globalCompositeOperation = 'destination-out'; x.globalAlpha = .09; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-over'; if (++t > 400 && !last) { x.clearRect(0, 0, w, h); run = false; t = 0; return; } requestAnimationFrame(fade); }
})();

/* ---- ЭЛТ в hero ---- */
(function () {
  const img = $('#crtImg'); if (!img) return;
  const ch = $('#crtCh'), btns = $$('[data-cam]'), tc = $('[data-tc]');
  const base = img.src.replace(/hall-wide-2\.webp.*$/, '');
  btns.forEach((b, i) => b.onclick = () => {
    btns.forEach(n => n.setAttribute('aria-pressed', n === b));
    img.style.opacity = 0; setTimeout(() => { img.src = base + b.dataset.cam + '.webp'; img.alt = b.dataset.alt; img.style.opacity = 1; ch.textContent = 'CH 0' + (i + 1); }, 140);
  });
  img.style.transition = 'opacity .14s';
  if (reduce) return;
  const t0 = performance.now(), p = n => String(n).padStart(2, '0');
  setInterval(() => { const n = Math.floor((performance.now() - t0) / 40) + 1297209; tc.textContent = `${p(Math.floor(n / 90000) % 24)}:${p(Math.floor(n / 1500) % 60)}:${p(Math.floor(n / 25) % 60)}:${p(n % 25)}`; }, 80);
  let k = 0; setInterval(() => { if (document.hidden || btns.some(b => b.matches(':hover,:focus'))) return; k = (k + 1) % btns.length; btns[k].click(); }, 6500);
})();

/* ---- tilt ---- */
if (!touch && !reduce) $$('[data-tilt]').forEach(el => {
  el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(900px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateY(-4px)`; });
  el.addEventListener('pointerleave', () => el.style.transform = '');
});

/* ---- инспектор павильона ---- */
(function () {
  if (!$('#insp')) return;
  const D = [
    ['Граффити-ковёр', 'Ковёр с авторским граффити: крупные контрастные формы и фирменные маркеры, которые читаются в боке и не превращаются в кашу на камерах.', 'АРТ-ДИРЕКШН · БОКЕ'],
    ['Живые ЭЛТ-телевизоры', 'Не бутафория: выводим на экраны лайв-фид с камер. У кадра появляется ритм, глубина и своя фишка. Для своей съёмки согласуем SDI/HDMI.', 'LIVE CRT · REAL TIME'],
    ['Ретро-стенд', 'Магнитофоны, бумбокс, проигрыватель, книги, баскетбольный мяч, гитара и чемодан с реквизитными деньгами со съёмок клипа. Всё — в кадре.', 'РЕКВИЗИТ · ФАКТУРА'],
    ['Киношный свет', 'Два восьмиугольных софтбокса и LED-панель уже выставлены под кадр. Контровой и цветные акценты, кинопрофиль VOLNA film.', 'СВЕТ · УЖЕ НАСТРОЕН'],
    ['Стол и микрофоны', 'Слэб из массива, мягкие кресла и микрофоны на журавлях. 1–4 спикера, три камеры 4K и многоканальная запись звука.', '3 КАМЕРЫ · 1–4 СПИКЕРА']
  ];
  const hots = $$('.hot'), tabs = $$('#inspTabs button');
  function set(i) {
    hots.forEach((h, k) => h.classList.toggle('on', k === i)); tabs.forEach((t, k) => t.classList.toggle('on', k === i));
    $('#inspT').textContent = D[i][0]; $('#inspD').textContent = D[i][1]; $('#inspTag').textContent = D[i][2]; $('#inspNum').textContent = '0' + (i + 1);
  }
  hots.forEach((h, i) => h.onclick = () => set(i)); tabs.forEach((t, i) => t.onclick = () => set(i)); set(0);
})();

/* ---- индикаторы уровня ---- */
(function () { const m = $('#meters'); if (!m) return; for (let i = 0; i < 38; i++) { const e = document.createElement('i'); e.style.setProperty('--h', (.25 + Math.random() * .75).toFixed(2)); e.style.animationDuration = (.5 + Math.random() * .9).toFixed(2) + 's'; e.style.animationDelay = (-Math.random()).toFixed(2) + 's'; m.appendChild(e); } })();

/* ---- YouTube по нажатию ---- */
$$('[data-yt-id]').forEach(st => {
  const btn = $('.vplay', st);
  btn.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + st.dataset.ytId + '?autoplay=1&rel=0';
    f.title = st.dataset.ytTitle; f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; f.allowFullscreen = true; f.loading = 'lazy';
    st.innerHTML = ''; st.appendChild(f); track('yt_play', { id: st.dataset.ytId });
  });
});

/* ---- услуги и получатели ---- */
const PACK = 'Трек + обложка + сниппет + Reels — 13 900 ₽';
const SERVICE_GROUPS = [
  ['REVOLVER SOUND · звукозапись', 'sound', ['Трек + обложка + сниппет + Reels — 13 900 ₽', 'Запись вокала', 'Сведение и мастеринг', 'Запись инструментов / Live-мультитрек', 'Дистрибуция / релизное сопровождение', 'Экскурсия в студию звука · 15 минут',
    'Гострайтинг: песня на заказ', 'Гострайтинг: трек с нуля', 'Гострайтинг: аранжировка', 'Гострайтинг: стихи на заказ', 'Гострайтинг: рекламный текст',
    'Озвучка / дикторский голос', 'Запись на выезде', 'Аренда оборудования', 'Дизайн обложки', 'Таргет / посевы в плейлисты',
    'Мероприятие: бизнес', 'Мероприятие: концерт', 'Мероприятие: банкет',
    'Школа: диджеинг', 'Школа: брейк-данс', 'Школа: рэп', 'Школа: гитара', 'Школа: вокал', 'Школа: сведение и мастеринг']],
  ['REVOLVER PODCAST · видеопавильон', 'main', ['Экспресс-мультикам 24ч', 'Продюсерский пакет', 'Аренда зала + свет', 'Подкаст на 2 часа — полный выпуск', 'Shorts / Reels на месяц', 'Музыкальный Live · видео + мультитрек', 'Экскурсия в павильон · 15 минут']],
  ['Другое', 'main', ['YouTube на месяц', 'Хочу обсудить проект']]
];
const tgOf = {}; SERVICE_GROUPS.forEach(g => g[2].forEach(s => tgOf[s] = g[1] === 'sound' ? CONTACTS.sound : CONTACTS.main));
const WHO = { [CONTACTS.sound]: 'Костя (@' + CONTACTS.sound + ') — звукозапись', [CONTACTS.main]: '@' + CONTACTS.main + ' — подкасты и продакшен' };
const fService = $('#fService');
SERVICE_GROUPS.forEach(g => { const og = document.createElement('optgroup'); og.label = g[0]; g[2].forEach(s => og.appendChild(new Option(s, s))); fService.appendChild(og); });
const defStudio = $('#form').dataset.default;
fService.value = defStudio === 'podcast' ? 'Экспресс-мультикам 24ч' : defStudio === 'production' ? 'Гострайтинг: песня на заказ' : PACK;
function who() { $('#whoName').textContent = WHO[tgOf[fService.value] || CONTACTS.main]; }
fService.addEventListener('change', who); who();

/* ---- калькулятор ---- */
const hw = n => { if (n % 1) return String(n).replace('.', ',') + ' часа'; const x = n % 100, d = n % 10; if (x > 10 && x < 20) return n + ' часов'; if (d === 1) return n + ' час'; if (d >= 2 && d <= 4) return n + ' часа'; return n + ' часов'; };
const FM = {
  podcast: [
    { id: 'rent', t: 'Только зал + свет', s: 'Для своей съёмочной команды', p: '2 700 ₽/ч', def: 2 },
    { id: 'express', t: 'Экспресс-мультикам 24ч', s: '3 камеры, звук, монтаж + 5 Shorts', p: '17 000 ₽', def: 1 },
    { id: 'pro', t: 'Продюсерский пакет', s: 'Расширенный монтаж + 10 Shorts', p: '28 000 ₽', def: 2 },
    { id: 'live', t: 'Музыкальный Live', s: 'Видео + поканальная запись через стену', p: 'по запросу', def: 2 }
  ],
  sound: [
    { id: 'pack', t: 'Трек + обложка + сниппет + Reels', s: '2 часа записи, мастеринг, фото-обложка, сниппет, Reels', p: '13 900 ₽', def: 2 },
    { id: 'vocal', t: 'Только запись вокала / речи', s: 'Со звукорежиссёром', p: '1 500 ₽/ч', def: 2 },
    { id: 'inst', t: 'Инструменты / Live-мультитрек', s: 'Поканальная запись живой сессии', p: 'от 2 000 ₽/ч', def: 2 }
  ]
};
const OPT = {
  podcast: [{ id: 'sh', t: '+10 дополнительных Shorts', s: 'Ещё вертикальные ролики из той же съёмки', p: '+4 000 ₽' }, { id: 'eng', t: 'Отдельный звукорежиссёр в REVOLVER SOUND', s: 'Контроль записи в аппаратной', p: '+2 500 ₽' }],
  sound: [{ id: 'mix', t: 'Сведение + мастеринг', s: 'Для варианта «только запись»', p: 'от 5 000 ₽' }, { id: 'tune', t: 'Ручной тюн вокала', s: 'Стоимость согласуем до сессии', p: 'по запросу' }, { id: 'snip', t: 'Дополнительная съёмка в зале', s: 'Согласуем до сессии', p: 'по запросу' }]
};
let calcState = null;
(function () {
  if (!$('#calc')) return;
  const hrs = $('#hrs'), out = $('#hrsOut');
  const studio = () => $('input[name=studio]:checked').value;
  function renderFmt() {
    const s = studio(); $('#fmtList').innerHTML = FM[s].map((f, i) => `<label class="ch-row"><input type="radio" name="fmt" value="${f.id}" ${i === (s === 'podcast' ? 1 : 0) ? 'checked' : ''}><i class="rd"></i><span class="tx"><b>${f.t}</b><small>${f.s}</small></span><span class="pp">${f.p}</span></label>`).join('');
    $('#optList').innerHTML = OPT[s].map(o => `<label class="ch-row"><input type="checkbox" value="${o.id}"><i class="rd"></i><span class="tx"><b>${o.t}</b><small>${o.s}</small></span><span class="pp">${o.p}</span></label>`).join('');
    const f = FM[s].find(x => x.id === $('input[name=fmt]:checked').value); hrs.value = f.def; update();
  }
  function update() {
    const s = studio(), f = $('input[name=fmt]:checked').value, h = +hrs.value, o = id => { const e = $(`#optList input[value=${id}]`); return e && e.checked; };
    out.textContent = hw(h); hrs.style.setProperty('--p', ((h - 1) / 7 * 100) + '%');
    let name, rows = [], pend = [], inc = '', hint = '', pre = '', svc;
    if (s === 'podcast') {
      if (f === 'live') { svc = 'Музыкальный Live · видео + мультитрек'; name = 'Музыкальный Live'; inc = 'Пришли райдер и длительность сета — соберём одну смету за видео и звук.'; hint = 'Фиксированной цены нет: сначала уточняем состав и сетап.'; pend.push('3 камеры + поканальная запись'); }
      else if (f === 'rent') { svc = 'Аренда зала + свет'; name = 'Зал + свет'; const c = Math.max(2, h), r = c >= 4 ? 2400 : 2700; rows.push([`Аренда · ${hw(c)} × ${money(r)} ₽`, c * r]); inc = 'Павильон 30 м², реквизит, свет, администратор.'; hint = h < 2 ? 'Минимальная бронь — 2 часа.' : c >= 4 ? 'От 4 часов — 2 400 ₽/час.' : 'Минимум 2 часа. От 4 часов — 2 400 ₽/час.'; }
      else {
        const ex = f === 'express'; svc = ex ? 'Экспресс-мультикам 24ч' : 'Продюсерский пакет'; name = svc;
        const base = ex ? 17000 : 28000, inclH = ex ? 1 : 1.5; rows.push([`Базовый пакет · до ${hw(inclH)} записи`, base]);
        const add = Math.max(0, h - inclH); if (add) rows.push([`Доп. время · ${hw(add)}`, Math.round(add * 2700)]);
        if (o('sh')) rows.push(['+10 Shorts / Reels', 4000]); if (o('eng')) rows.push(['Отдельный звукорежиссёр', 2500]);
        inc = ex ? `Выпуск и ${5 + (o('sh') ? 10 : 0)} Shorts на следующий день.` : `Расширенный монтаж, цвет, обложка и ${10 + (o('sh') ? 10 : 0)} Shorts.`; hint = `Включено до ${hw(inclH)}. Доп. время — 2 700 ₽/час.`;
      }
      if (f === 'rent' || f === 'live') { if (o('sh')) pend.push('+10 Shorts — 4 000 ₽'); if (o('eng')) rows.push(['Отдельный звукорежиссёр', 2500]); }
    } else {
      if (f === 'pack') { svc = PACK; name = 'Трек + обложка + сниппет + Reels'; rows.push(['2 часа записи, сведение и мастеринг, фото-обложка, сниппет и Reels', 13900]); inc = 'Сведённый трек, фото-обложка, сниппет (15–30 сек) и Reels с монтажом.'; hint = 'Одна цена за весь набор: 2 часа записи включены, дополнительное время обсудим. Видео снимаем в соседнем зале.'; if (o('tune')) pend.push('Ручной тюн вокала'); }
      else if (f === 'inst') { svc = 'Запись инструментов / Live-мультитрек'; name = 'Live-мультитрек'; pre = 'от '; rows.push([`Запись · ${hw(h)} × 2 000 ₽`, h * 2000]); inc = 'Поканальная запись. Видео считается отдельно.'; hint = 'Зависит от числа инструментов и сложности сетапа.'; }
      else { svc = 'Запись вокала'; name = 'Запись вокала'; if (h >= 5) { rows.push(['Пакет · 5 часов', 6500]); if (h > 5) rows.push([`Дополнительно · ${hw(h - 5)}`, (h - 5) * 1500]); hint = 'Применён пакет: 5 часов за 6 500 ₽ вместо 7 500 ₽ — экономия 1 000 ₽.'; } else { rows.push([`Запись · ${hw(h)} × 1 500 ₽`, h * 1500]); hint = 'Со звукорежиссёром. Пакет на 5 часов — 6 500 ₽ вместо 7 500 ₽ (экономия 1 000 ₽).'; } inc = 'Работа звукорежиссёра и исходники сессии.'; }
      if (f === 'vocal' || f === 'inst' || f === 'pack') { if (o('mix')) { rows.push(['Сведение и мастеринг · от', 5000]); pre = 'от '; } if (o('tune')) pend.push('Ручной тюн вокала'); if (o('snip')) pend.push('Съёмка 5 сниппетов'); }
    }
    const total = rows.reduce((a, r) => a + r[1], 0);
    $('#estName').textContent = name; $('#estTot').innerHTML = f === 'live' && s === 'podcast' ? 'по запросу' : pre + money(total) + ' <small>₽</small>';
    const lines = [...rows.map(r => [r[0], money(r[1]) + ' ₽']), ...pend.map(p => [p, 'по запросу'])];
    $('#estLines').innerHTML = lines.map(l => `<div class="ln"><span>${l[0]}</span><span>${l[1]}</span></div>`).join('');
    $('#estInc').textContent = inc; $('#estHint').textContent = hint;
    calcState = { svc, text: [`${s === 'podcast' ? 'REVOLVER PODCAST' : 'REVOLVER SOUND'} · предварительный расчёт`, `Услуга: ${name}`, `Время: ${hw(h)}`, ...lines.map(l => l.join(' — ')), f === 'live' && s === 'podcast' ? 'Итого: по запросу' : `Итого: ${pre}${money(total)} ₽`, inc].join('\n') };
  }
  document.addEventListener('change', e => { if (!e.target.closest('#calc')) return; if (e.target.name === 'fmt') { const s = studio(), f = FM[s].find(x => x.id === e.target.value); hrs.value = f.def; update(); } else update(); });
  hrs.addEventListener('input', update);
  $('#calcReset').onclick = () => { renderFmt(); toast('Расчёт сброшен'); };
  $('#calcCopy').onclick = () => copy(calcState.text).then(ok => toast(ok ? 'Расчёт скопирован' : 'Не удалось скопировать'));
  $('#calcBook').onclick = () => openBook(calcState.svc, calcState.text);
  renderFmt();
})();

/* ---- заявка: часы / демо, Telegram / телефон ---- */
const fDate = $('#fDate'); const td = new Date(); fDate.min = new Date(td - td.getTimezoneOffset() * 6e4).toISOString().split('T')[0];
let attach = '';
const kindOf = () => $('input[name=kind]:checked').value, replyOf = () => $('input[name=reply]:checked').value;
function syncForm() {
  const demo = kindOf() === 'demo', ph = replyOf() === 'phone';
  $('#demoRow').hidden = !demo; $('#dateRow').hidden = demo;
  $('#fSubmit').textContent = demo ? 'Скинуть демо' : 'Узнать свободные часы';
  $('#fContactL').textContent = ph ? 'Имя и телефон' : 'Имя и твой @ник в Telegram';
  $('#fContact').placeholder = ph ? 'Имя, +7…' : 'Имя, @ник';
  $('#fContact').type = 'text'; $('#fContact').autocomplete = ph ? 'tel' : 'name';
  $('#fMsg').placeholder = demo ? 'Что за песня, что нужно сделать: запись, сведение, обложка…' : 'Читаешь под минус, играешь с группой, нужен просто чистый голос…';
}
$$('input[name=kind],input[name=reply]').forEach(i => i.addEventListener('change', syncForm)); syncForm();
function openBook(service, estimate = '', kind) {
  if (service) { if (![...fService.options].some(o => o.value === service)) fService.add(new Option(service, service)); fService.value = service; who(); }
  const k = $('input[name=kind][value=' + (kind || 'hours') + ']'); if (k) { k.checked = true; syncForm(); }
  attach = estimate; const a = $('#attach'); a.hidden = !estimate; a.textContent = estimate;
  $('#book').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  setTimeout(() => $('#fContact').focus({ preventScroll: true }), 700);
  track('book_open', { service, kind: kind || 'hours' });
}
document.addEventListener('click', e => { const b = e.target.closest('[data-book]'); if (b) { e.preventDefault(); openBook(b.dataset.service, '', b.dataset.kind); } });
const params = new URLSearchParams(location.search), pre = params.get('service');
const MAP = { 'podcast-express': 'Экспресс-мультикам 24ч', rent: 'Аренда зала + свет', 'sound-vocal': 'Запись вокала', pack: PACK, combo: PACK, turnkey: PACK };
if (pre && MAP[pre]) { fService.value = MAP[pre]; who(); if (location.hash === '#book') setTimeout(() => openBook(MAP[pre]), 300); }
function reqText() {
  const demo = kindOf() === 'demo', d = fDate.value, date = d ? new Date(d + 'T12:00:00').toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) : 'пока не выбран';
  const L = [demo ? 'Привет! Скидываю демо с сайта REVOLVER (Фрунзе 49).' : 'Привет! Хочу узнать про свободные часы. Заявка с сайта REVOLVER (Фрунзе 49).', '', 'Услуга: ' + fService.value, 'Контакт: ' + $('#fContact').value.trim() + ' (ответить ' + (replyOf() === 'phone' ? 'по телефону' : 'в Telegram') + ')'];
  if (demo) L.push('Демо: ' + ($('#fDemo').value.trim() || 'пришлю файлом в Telegram')); else L.push('Желаемый день: ' + date);
  const m = $('#fMsg').value.trim(); if (m) L.push('Что важно: ' + m); if (attach) L.push('', attach);
  L.push('', demo ? 'Послушайте, пожалуйста, и подскажите, с чего начать.' : 'Подскажите, пожалуйста, свободные часы.'); return L.join('\n');
}
async function copy(t) { try { if (navigator.clipboard && isSecureContext) { await navigator.clipboard.writeText(t); return true; } throw 0; } catch { const a = document.createElement('textarea'); a.value = t; a.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(a); a.select(); let ok = false; try { ok = document.execCommand('copy'); } catch { } a.remove(); return ok; } }
const SENT = 'Ответим в течение дня — в Telegram или по телефону, как ты выбрал. Обычно быстрее, если не идёт сессия.';
function tgDraft() { window.open('https://t.me/' + (tgOf[fService.value] || CONTACTS.main) + '?text=' + encodeURIComponent(reqText()), '_blank', 'noopener'); $('#fNote').textContent = 'Черновик открыт в Telegram — останется нажать «Отправить». ' + SENT; }
$('#form').addEventListener('submit', async e => {
  e.preventDefault();
  if (!$('#fContact').value.trim()) { $('#fContact').focus(); toast('Оставь контакт, чтобы мы ответили'); return; }
  track('lead_submit', { service: fService.value, kind: kindOf(), reply: replyOf() });
  if (!CONTACTS.endpoint) return tgDraft();
  const payload = { text: reqText(), kind: kindOf(), reply: replyOf(), service: fService.value, recipient: tgOf[fService.value] || CONTACTS.main, contact: $('#fContact').value.trim(), demo: $('#fDemo').value.trim(), date: fDate.value, message: $('#fMsg').value.trim(), estimate: attach, page: location.pathname, utm: Object.fromEntries([...params].filter(p => p[0].startsWith('utm_'))) };
  try { const r = await fetch(CONTACTS.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); if (!r.ok) throw 0; toast('Заявка отправлена'); $('#fNote').textContent = 'Заявка получена. ' + SENT; e.target.reset(); syncForm(); who(); }
  catch { toast('Не получилось отправить — откроем Telegram'); tgDraft(); }
});
$('#fCopy').onclick = async () => { if (!$('#fContact').value.trim()) { $('#fContact').focus(); return; } toast(await copy(reqText()) ? 'Текст заявки скопирован' : 'Не удалось скопировать'); };
let tt; function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 3200); }

/* ---- лайтбокс ---- */
(function () {
  const items = $$('[data-lb]'); if (!items.length) return;
  const lb = $('#lb'), im = $('#lbImg'), base = (items[0].querySelector('img').getAttribute('src').replace(/[^/]+$/, '')); let k = 0;
  const show = i => { k = (i + items.length) % items.length; im.src = base + items[k].dataset.lb + '.webp'; im.alt = $('img', items[k]).alt; lb.classList.add('on'); document.body.classList.add('lock'); };
  const hide = () => { lb.classList.remove('on'); document.body.classList.remove('lock'); };
  items.forEach((el, i) => el.addEventListener('click', () => show(i)));
  $('.x', lb).onclick = hide; $('.pv', lb).onclick = () => show(k - 1); $('.nx', lb).onclick = () => show(k + 1);
  lb.addEventListener('click', e => { if (e.target === lb) hide(); });
  addEventListener('keydown', e => { if (!lb.classList.contains('on')) return; if (e.key === 'Escape') hide(); if (e.key === 'ArrowLeft') show(k - 1); if (e.key === 'ArrowRight') show(k + 1); });
})();


/* ---- защита от «залипания» курсора: нативный drag картинок ---- */
document.addEventListener('dragstart', e => { if (e.target.tagName === 'IMG' || e.target.closest('img')) e.preventDefault(); });

/* ---- помехи: шум на canvas ---- */
(function () {
  const cvs = $$('.static canvas, canvas.static-cv'); if (!cvs.length || reduce) { cvs.forEach(c => { c.width = 160; c.height = 24; }); return; }
  const live = new Set();
  const io2 = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? live.add(e.target) : live.delete(e.target))) : null;
  cvs.forEach(c => { c.width = 200; c.height = c.classList.contains('static-cv') ? 140 : 24; if (io2) io2.observe(c); else live.add(c); });
  let last = 0;
  function tick(t) {
    requestAnimationFrame(tick); if (t - last < 80 || document.hidden) return; last = t;
    live.forEach(c => { const x = c.getContext('2d'), w = c.width, h = c.height, im = x.createImageData(w, h), d = im.data; for (let i = 0; i < d.length; i += 4) { const v = Math.random() * 255 | 0; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; } x.putImageData(im, 0, 0); });
  }
  requestAnimationFrame(tick);
})();
if (!reduce) (function g() { setTimeout(() => { document.body.classList.add('gl-on'); setTimeout(() => document.body.classList.remove('gl-on'), 320); g(); }, 5500 + Math.random() * 5000); })();

/* ---- интерактивная волна ---- */
(function () {
  const cv = $('#waveCv'); if (!cv) return;
  const x = cv.getContext('2d'); let W, H, mx = .35, my = .45, tx = mx, ty = my, type = 'sine', t = 0, rip = [], inside = false, visible = true;
  const css = getComputedStyle(document.documentElement), col = () => css.getPropertyValue('--lime').trim() || '#c9f23b';
  const size = () => { const d = Math.min(devicePixelRatio || 1, 2), r = cv.getBoundingClientRect(); W = cv.width = r.width * d; H = cv.height = r.height * d; };
  size(); addEventListener('resize', size);
  const freqOf = u => 80 * Math.pow(15, u), ampOf = v => Math.max(.04, 1 - v);
  /* аудио */
  let ac = null, osc = null, gain = null, noise = null, nbp = null, on = false;
  function audioInit() {
    if (ac) return; ac = new (window.AudioContext || window.webkitAudioContext)(); gain = ac.createGain(); gain.gain.value = 0; gain.connect(ac.destination);
    const buf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate), d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    noise = ac.createBufferSource(); noise.buffer = buf; noise.loop = true; nbp = ac.createBiquadFilter(); nbp.type = 'bandpass'; nbp.Q.value = 6; noise.connect(nbp); nbp.connect(gain); noise.start();
    mkOsc();
  }
  function mkOsc() { if (osc) { try { osc.stop(); } catch (e) { } osc.disconnect(); osc = null; } if (type === 'noise') return; osc = ac.createOscillator(); osc.type = type === 'saw' ? 'sawtooth' : type; osc.frequency.value = freqOf(mx); osc.connect(gain); osc.start(); }
  function audioUpdate() {
    if (!ac) return; const f = freqOf(mx), v = on && inside ? .09 * ampOf(my) : 0; const n = ac.currentTime;
    if (osc) osc.frequency.setTargetAtTime(f, n, .03); if (nbp) nbp.frequency.setTargetAtTime(f, n, .03); gain.gain.setTargetAtTime(v, n, .04);
  }
  const btn = $('#waveSnd');
  btn.onclick = () => { on = !on; if (on) { audioInit(); ac.resume(); mkOsc(); } btn.setAttribute('aria-pressed', on); btn.textContent = on ? 'Звук: вкл' : 'Звук: выкл'; audioUpdate(); };
  $$('[data-w]').forEach(b => b.onclick = () => { type = b.dataset.w; $$('[data-w]').forEach(n => n.classList.toggle('on', n === b)); if (ac) { mkOsc(); audioUpdate(); } });
  /* ввод */
  const pos = e => { const r = cv.getBoundingClientRect(); tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)); ty = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)); };
  cv.addEventListener('pointermove', e => { inside = true; pos(e); });
  cv.addEventListener('pointerenter', e => { inside = true; pos(e); });
  cv.addEventListener('pointerleave', () => { inside = false; audioUpdate(); });
  cv.addEventListener('pointerdown', e => { inside = true; pos(e); rip.push({ x: tx, y: ty, r: 0 }); if (rip.length > 8) rip.shift(); });
  if ('IntersectionObserver' in window) new IntersectionObserver(es => visible = es[0].isIntersecting).observe(cv);
  const shape = (ph) => { const p = ph % 1; if (type === 'saw') return 2 * p - 1; if (type === 'square') return p < .5 ? 1 : -1; return Math.sin(ph * 6.2832); };
  function draw() {
    requestAnimationFrame(draw); if (!visible || document.hidden) return;
    mx += (tx - mx) * .1; my += (ty - my) * .1; t += reduce ? 0 : .016 + mx * .05;
    const f = freqOf(mx), cycles = 1.2 + mx * 13, a = ampOf(my) * H * .3, c = col();
    x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
    x.strokeStyle = '#ffffff10'; x.lineWidth = 1; for (let i = 1; i < 8; i++) { x.beginPath(); x.moveTo(0, H * i / 8); x.lineTo(W, H * i / 8); x.stroke(); } for (let i = 1; i < 16; i++) { x.beginPath(); x.moveTo(W * i / 16, 0); x.lineTo(W * i / 16, H); x.stroke(); }
    for (let L = 5; L >= 0; L--) {
      x.beginPath(); x.lineWidth = (L === 0 ? 4 : 1.5) * (devicePixelRatio > 1 ? 1.5 : 1); x.strokeStyle = c; x.globalAlpha = L === 0 ? 1 : .14 + .06 * (5 - L); x.shadowColor = c; x.shadowBlur = L === 0 ? 18 : 0;
      for (let i = 0; i <= 240; i++) {
        const u = i / 240; let y = type === 'noise' ? (Math.random() * 2 - 1) * (.35 + .65 * Math.sin(u * 3.14)) : shape(u * cycles - t * (1 + L * .08) + L * .07);
        rip.forEach(r => { const d = Math.abs(u - r.x) - r.r; y += Math.exp(-d * d * 260) * Math.sin(d * 60) * (1 - r.r * 1.4) * 1.6; });
        const px = u * W, py = H / 2 + y * a * (1 - L * .07); i ? x.lineTo(px, py) : x.moveTo(px, py);
      }
      x.stroke();
    }
    x.shadowBlur = 0; x.globalAlpha = 1;
    rip.forEach(r => r.r += .012); rip = rip.filter(r => r.r < .75);
    const cx = mx * W, cy = H / 2 + (Math.sin(mx * cycles * 6.28 - t * 6.28) * a * .0); x.strokeStyle = '#ffffff55'; x.setLineDash([6, 8]); x.beginPath(); x.moveTo(cx, 0); x.lineTo(cx, H); x.stroke(); x.setLineDash([]);
    x.fillStyle = c; x.beginPath(); x.arc(cx, my * H, 8 * (devicePixelRatio > 1 ? 1.5 : 1), 0, 6.283); x.fill();
    $('#waveHz').textContent = Math.round(f) + ' Hz'; $('#waveDb').textContent = '−' + Math.round(6 + my * 40) + ' dB';
    audioUpdate();
  }
  draw();
})();


/* ---- плеер «до / после» ---- */
(function () {
  const tracks = $$('.lt'); if (!tracks.length) return;
  let cur = null;
  tracks.forEach(t => {
    const before = t.dataset.before, after = t.dataset.after, btn = $('.lp', t), abs = $$('[data-ab]', t);
    if (!before && !after) { t.classList.add('soon'); btn.title = 'Аудио появится после согласования с артистом'; return; }
    btn.disabled = false; const a = new Audio(); a.preload = 'none'; let mode = 'before'; a.src = before || after; if (!before) mode = 'after';
    const sync = () => abs.forEach(b => b.classList.toggle('on', b.dataset.ab === mode));
    btn.onclick = () => { if (cur && cur !== a) { cur.pause(); } cur = a; a.paused ? a.play().catch(() => toast('Не удалось запустить аудио')) : a.pause(); };
    a.onplay = () => { btn.textContent = 'Ⅱ'; track('listen_play'); }; a.onpause = () => btn.textContent = '▶'; a.onended = () => btn.textContent = '▶';
    abs.forEach(b => b.onclick = () => { const src = b.dataset.ab === 'after' ? after : before; if (!src || mode === b.dataset.ab) return; const tm = a.currentTime, pl = !a.paused; mode = b.dataset.ab; a.src = src; a.onloadedmetadata = () => { a.currentTime = Math.min(tm, a.duration - .05); if (pl) a.play().catch(() => { }); }; a.load(); sync(); });
    sync();
  });
})();
