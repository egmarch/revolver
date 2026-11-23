/* REVOLVER — единый Telegram-бот студии (Cloudflare Worker, webhook).
 *
 * Что делает:
 *  1) /start <tag> — запоминает направление (sound, podcast_17k, track_reels_13900, rent, production, ...) и здоровается по делу;
 *  2) следующее сообщение клиента уходит в рабочий чат ADMIN_CHAT_ID: шапка (тег, имя, @username, tg://user?id=…) + сам текст;
 *  3) ответ команды Reply-ем на это сообщение в рабочем чате уходит клиенту (работает и без @username);
 *  4) POST /lead — приём заявки с веб-формы сайта (запасной сценарий для десктопа), с нормализованной ссылкой t.me/<user>.
 *
 * Секреты (wrangler secret put): BOT_TOKEN, ADMIN_CHAT_ID, WEBHOOK_SECRET. В репозиторий их не класть.
 * KV-привязка STATE (wrangler.toml) хранит выбранный тег клиента и связку «сообщение в админ-чате → клиент».
 * Без KV всё работает, кроме запоминания тега между /start и сообщением и Reply на пересланные вложения. */

const TAGS = {
  sound: 'Звукозапись',
  podcast: 'Подкаст / Видео',
  podcast_17k: 'Подкаст за 24 часа · 17 000 ₽',
  track_reels: 'Трек + Ролик',
  track_reels_13900: 'Трек + обложка + сниппет + Reels · 13 900 ₽',
  rent: 'Аренда зала',
  production: 'Продакшен · продюсерский выпуск / Live Session / песня на заказ',
  subscription: 'Абонемент от 4 выпусков / День Reels',
  other: 'Без направления',
};
const TAG_TTL = 60 * 60 * 24; // тег живёт сутки

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tagName = t => TAGS[t] || TAGS.other;

async function tg(env, method, body) {
  const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const j = await r.json().catch(() => ({}));
  if (!j.ok) console.log('tg error', method, JSON.stringify(j));
  return j;
}
const kvGet = (env, k) => (env.STATE ? env.STATE.get(k) : null);
const kvPut = (env, k, v, ttl) => (env.STATE ? env.STATE.put(k, v, ttl ? { expirationTtl: ttl } : undefined) : null);

/* шапка заявки: тег направления, имя, кликабельный @username и прямая ссылка по id */
function header(tag, user) {
  const name = [user.first_name, user.last_name].filter(Boolean).join(' ') || 'Без имени';
  const lines = [`🔔 <b>#${esc(tag)}</b> · ${esc(tagName(tag))}`, `👤 <a href="tg://user?id=${user.id}">${esc(name)}</a>` + (user.username ? ` · @${esc(user.username)}` : ' · <i>без @username</i>'), `🆔 ID: ${user.id}`];
  return lines.join('\n');
}

async function handleClient(env, msg) {
  const user = msg.from, text = msg.text || '';
  if (/^\/start(@\w+)?(\s|$)/.test(text)) {
    const tag = (text.split(/\s+/)[1] || '').replace(/[^\w]/g, '') || 'other';
    await kvPut(env, 'tag:' + user.id, tag, TAG_TTL);
    const hello = tag === 'other'
      ? 'Привет! Это бот REVOLVER. Напиши, что хочешь записать или снять, желаемую дату и пару слов о задаче — ответим здесь.'
      : `Понял, интересует: ${tagName(tag)}.\nНапиши желаемую дату и пару слов о задаче — ответим здесь.`;
    return tg(env, 'sendMessage', { chat_id: msg.chat.id, text: hello });
  }
  const tag = (await kvGet(env, 'tag:' + user.id)) || 'other';
  const head = header(tag, user);
  let sent;
  if (msg.text) {
    sent = await tg(env, 'sendMessage', { chat_id: env.ADMIN_CHAT_ID, text: head + '\n\n' + esc(msg.text), parse_mode: 'HTML', disable_web_page_preview: true });
  } else {
    // голос, фото, файл: шапка отдельно, само сообщение — copyMessage, чтобы не терять тип
    const h = await tg(env, 'sendMessage', { chat_id: env.ADMIN_CHAT_ID, text: head, parse_mode: 'HTML' });
    sent = await tg(env, 'copyMessage', { chat_id: env.ADMIN_CHAT_ID, from_chat_id: msg.chat.id, message_id: msg.message_id, reply_parameters: h.ok ? { message_id: h.result.message_id } : undefined });
    if (h.ok) await kvPut(env, 'adm:' + h.result.message_id, String(user.id), 60 * 60 * 24 * 30);
  }
  if (sent && sent.ok) await kvPut(env, 'adm:' + sent.result.message_id, String(user.id), 60 * 60 * 24 * 30);
  return tg(env, 'sendMessage', { chat_id: msg.chat.id, text: 'Принято ✓ Ответим здесь в течение дня.' });
}

/* Reply в рабочем чате → клиенту. id клиента берём из шапки («ID: …») или из KV */
async function handleAdmin(env, msg) {
  const rep = msg.reply_to_message;
  if (!rep || (msg.text || '').startsWith('/')) return;
  let uid = ((rep.text || rep.caption || '').match(/ID:\s*(\d{4,})/) || [])[1] || (await kvGet(env, 'adm:' + rep.message_id));
  if (!uid) return tg(env, 'sendMessage', { chat_id: msg.chat.id, text: 'Не нашёл клиента: ответь Reply-ем на сообщение с заявкой.', reply_parameters: { message_id: msg.message_id } });
  const r = await tg(env, 'copyMessage', { chat_id: Number(uid), from_chat_id: msg.chat.id, message_id: msg.message_id });
  return tg(env, 'setMessageReaction', { chat_id: msg.chat.id, message_id: msg.message_id, reaction: [{ type: 'emoji', emoji: r.ok ? '👍' : '👎' }] });
}

async function handleUpdate(env, u) {
  const msg = u.message;
  if (!msg || !msg.from || msg.from.is_bot) return;
  if (String(msg.chat.id) === String(env.ADMIN_CHAT_ID)) return handleAdmin(env, msg);
  if (msg.chat.type === 'private') return handleClient(env, msg);
}

/* заявка с веб-формы сайта */
function cors(env, req) {
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean), o = req.headers.get('Origin') || '';
  return { 'Access-Control-Allow-Origin': allowed.includes(o) ? o : allowed[0] || '', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' };
}
function normLink(v) {
  const m = String(v || '').match(/(?:https?:\/\/)?(?:t(?:elegram)?\.me\/|@)?([A-Za-z][A-Za-z0-9_]{3,31})\s*$/i);
  return m ? 'https://t.me/' + m[1] : '';
}
async function handleLead(env, req) {
  const h = cors(env, req);
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  if (allowed.length && !allowed.includes(req.headers.get('Origin') || '')) return new Response('forbidden', { status: 403, headers: h });
  let d; try { d = await req.json(); } catch { return new Response('bad json', { status: 400, headers: h }); }
  const tag = String(d.tag || 'other').replace(/[^\w]/g, '') || 'other';
  const link = d.contact_link ? normLink(d.contact_link) : '';
  const head = [`🔔 <b>#${esc(tag)}</b> · ${esc(tagName(tag))} · <i>с сайта</i>`, `👤 ${esc(d.contact || '—')}`, link ? `✈️ <a href="${esc(link)}">${esc(link)}</a>` : '✈️ <i>Telegram не указан</i>'].join('\n');
  const body = (head + '\n\n' + esc(String(d.text || '').slice(0, 3000))).slice(0, 4000);
  const r = await tg(env, 'sendMessage', { chat_id: env.ADMIN_CHAT_ID, text: body, parse_mode: 'HTML', disable_web_page_preview: true });
  return new Response(JSON.stringify({ ok: !!r.ok }), { status: r.ok ? 200 : 502, headers: Object.assign({ 'Content-Type': 'application/json' }, h) });
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(env, req) });
    if (req.method !== 'POST') return new Response('REVOLVER bot', { status: 200 });
    if (url.pathname === '/lead') return handleLead(env, req);
    if (env.WEBHOOK_SECRET && req.headers.get('X-Telegram-Bot-Api-Secret-Token') !== env.WEBHOOK_SECRET) return new Response('forbidden', { status: 403 });
    let u; try { u = await req.json(); } catch { return new Response('bad json', { status: 400 }); }
    ctx.waitUntil(handleUpdate(env, u).catch(e => console.log('update error', e && e.message)));
    return new Response('ok');
  },
};
