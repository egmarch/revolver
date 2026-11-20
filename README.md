# REVOLVER SOUND / REVOLVER PODCAST — сайт (Новосибирск, Фрунзе 49)

Страницы: `/` главная, `/sound/`, `/podcast/`, `/production/`, `/3d/` (3D-тур).

## Как править
- Исходники секций: `src/_layout.html` (шапка/подвал) и `src/old_index.html` (общие секции), новые блоки — в `tools/build.py`.
- После правок: `python -I tools/build.py` — пересоздаёт index.html, sound/, podcast/, production/. Эти файлы руками не править.
- Стили и скрипты: `assets/site.css`, `assets/site.js`. Контакты и адрес CRM — константа `CONTACTS` в начале `site.js`
  (main = @Egmarch: подкасты и продакшен, sound = @CS10ten: звукозапись, endpoint = URL CRM/прокси заявок, пока пусто).
- 3D: `studio3d-src/` → `cd studio3d-src && npm i && npm run build` → `3d/`.
- Локально: `python -m http.server 8000` в корне.
