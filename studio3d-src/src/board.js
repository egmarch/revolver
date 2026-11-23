// Белая маркерная доска в подкастной: рисунок баллончиком остаётся на ней.
// Если задан BOARD_ENDPOINT (Cloudflare Worker из tools/board-worker), доска общая для всех посетителей.
// Без него рисунок хранится в localStorage браузера (виден только его владельцу).
export const BOARD_ENDPOINT = '';            // например: 'https://revolver-board.<аккаунт>.workers.dev/board'

const LS_KEY = 'revolver_board_v1';
const COLORS = ['#c9f23b', '#ff4b2e', '#c23cff', '#ffffff', '#111111'];
const MAX_PTS = 30000;

export function initBoard(board, weapons) {
  if (!board || !weapons) return;
  const { canvas, texture } = board;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let pts = [], pending = [], dirty = false, lastSend = 0, lastPaintKey = '';

  function dot(x, y, r, ci) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const c = COLORS[ci] || COLORS[4];
    g.addColorStop(0, c); g.addColorStop(0.55, c + 'cc'); g.addColorStop(1, c + '00');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  function replay(list) { for (const p of list) dot(p[0], p[1], p[2], p[3]); texture.needsUpdate = true; }

  // загрузка сохранённого рисунка
  function load() {
    if (BOARD_ENDPOINT) {
      fetch(BOARD_ENDPOINT, { cache: 'no-store' }).then(r => r.json()).then(d => { if (d && Array.isArray(d.pts)) { pts = d.pts.slice(-MAX_PTS); replay(pts); } }).catch(() => { });
    } else {
      try { const d = JSON.parse(localStorage.getItem(LS_KEY) || '[]'); if (Array.isArray(d)) { pts = d.slice(-MAX_PTS); replay(pts); } } catch (e) { }
    }
  }
  function save(force) {
    if (!dirty && !force) return;
    const now = performance.now();
    if (!force && now - lastSend < 15000) return;
    lastSend = now; dirty = false;
    if (BOARD_ENDPOINT) {
      if (!pending.length) return;
      const body = JSON.stringify({ pts: pending.splice(0, 600) });
      try { if (!(navigator.sendBeacon && navigator.sendBeacon(BOARD_ENDPOINT, new Blob([body], { type: 'text/plain' })))) fetch(BOARD_ENDPOINT, { method: 'POST', body, headers: { 'content-type': 'text/plain' }, keepalive: true }).catch(() => { }); } catch (e) { }
    } else {
      try { localStorage.setItem(LS_KEY, JSON.stringify(pts.slice(-MAX_PTS))); } catch (e) { }
    }
  }

  // баллончик: u,v — координаты на доске (0..1), цвет — hex из палитры оружия
  weapons.boardPaint = (uv, hex) => {
    const ci = Math.max(0, COLORS.indexOf(String(hex).toLowerCase()));
    const x = Math.round(uv.x * W), y = Math.round((1 - uv.y) * H), r = 9 + Math.round(Math.random() * 6);
    const key = x + ',' + y; if (key === lastPaintKey) return; lastPaintKey = key;
    dot(x, y, r, ci); texture.needsUpdate = true;
    const p = [x, y, r, ci]; pts.push(p); pending.push(p); if (pts.length > MAX_PTS) pts.shift(); dirty = true;
  };
  weapons.boardClear = () => { ctx.fillStyle = '#f4f5f7'; ctx.fillRect(0, 0, W, H); texture.needsUpdate = true; pts = []; pending = []; try { localStorage.removeItem(LS_KEY); } catch (e) { } };

  load();
  setInterval(() => save(false), 5000);
  addEventListener('pagehide', () => save(true));
  document.addEventListener('visibilitychange', () => { if (document.hidden) save(true); });
}
