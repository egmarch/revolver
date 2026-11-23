// Общая маркерная доска REVOLVER (Cloudflare Worker + KV).
//   GET    /board           -> { pts: [[x,y,r,цвет], ...] }
//   POST   /board           -> тело {"pts":[[x,y,r,цвет],...]} (до 600 точек за раз), дописывает на доску
//   DELETE /board           -> очистить доску; нужен заголовок x-admin-key (секрет ADMIN_KEY)
// Рисунок хранится как список точек, не картинка: безопасно и мало места. Ограничения защищают от спама.

const MAX_PTS = 30000, MAX_BATCH = 600, W = 1024, H = 576, KEY = 'pts';
const ORIGINS = ['https://revolvernsk.ru', 'https://www.revolvernsk.ru', 'http://localhost:8811', 'http://localhost:8813'];
const hits = new Map();   // простой лимит на IP (в пределах одного экземпляра воркера)

const cors = (req) => {
  const o = req.headers.get('origin') || '';
  return { 'access-control-allow-origin': ORIGINS.includes(o) ? o : ORIGINS[0], 'access-control-allow-methods': 'GET,POST,DELETE,OPTIONS', 'access-control-allow-headers': 'content-type,x-admin-key', 'vary': 'origin' };
};
const json = (req, data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...cors(req) } });

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors(req) });
    if (url.pathname !== '/board') return json(req, { error: 'not found' }, 404);

    if (req.method === 'GET') {
      const raw = await env.BOARD.get(KEY);
      return json(req, { pts: raw ? JSON.parse(raw) : [] });
    }
    if (req.method === 'DELETE') {
      if (!env.ADMIN_KEY || req.headers.get('x-admin-key') !== env.ADMIN_KEY) return json(req, { error: 'forbidden' }, 403);
      await env.BOARD.delete(KEY);
      return json(req, { ok: true, cleared: true });
    }
    if (req.method === 'POST') {
      const ip = req.headers.get('cf-connecting-ip') || 'x', now = Date.now();
      const last = hits.get(ip) || 0;
      if (now - last < 4000) return json(req, { error: 'slow down' }, 429);
      hits.set(ip, now); if (hits.size > 2000) hits.clear();
      let body; try { body = JSON.parse(await req.text()); } catch (e) { return json(req, { error: 'bad json' }, 400); }
      if (!body || !Array.isArray(body.pts)) return json(req, { error: 'bad body' }, 400);
      const add = [];
      for (const p of body.pts.slice(0, MAX_BATCH)) {
        if (!Array.isArray(p) || p.length !== 4) continue;
        const [x, y, r, c] = p.map(Number);
        if (![x, y, r, c].every(Number.isFinite)) continue;
        if (x < 0 || x > W || y < 0 || y > H || r < 4 || r > 24 || c < 0 || c > 4) continue;
        add.push([Math.round(x), Math.round(y), Math.round(r), Math.round(c)]);
      }
      if (!add.length) return json(req, { ok: true, added: 0 });
      const raw = await env.BOARD.get(KEY);
      let pts = raw ? JSON.parse(raw) : [];
      pts = pts.concat(add); if (pts.length > MAX_PTS) pts = pts.slice(-MAX_PTS);
      await env.BOARD.put(KEY, JSON.stringify(pts));
      return json(req, { ok: true, added: add.length, total: pts.length });
    }
    return json(req, { error: 'method not allowed' }, 405);
  }
};
