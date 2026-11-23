# Бот REVOLVER (Cloudflare Worker)

Единая точка входа заявок: клиент жмёт кнопку на сайте → `https://t.me/<BOT>?start=<tag>` → бот здоровается по направлению →
после сообщения клиента заявка летит в рабочий чат (Егор + Костя) с тегом, именем, `@username` и ссылкой `tg://user?id=…`.
Ответить клиенту можно Reply-ем на сообщение бота прямо в рабочем чате — работает и у тех, у кого нет `@username`.

Теги: `sound`, `podcast`, `podcast_17k`, `track_reels`, `track_reels_13900`, `rent`, `production`, `subscription` (список и названия — `TAGS` в `worker.js`).

## Запуск (один раз)
1. @BotFather → `/newbot` → получить токен и username. Username вписать в `BOT_USERNAME` в `tools/build.py`, затем `python -I tools/build.py` и push.
2. Рабочий чат: создать группу с Егором и Костей, добавить бота, отключить ему Privacy (`/setprivacy` → Disable) — иначе Reply на сообщения не придут. Узнать `chat_id` (например, добавить @RawDataBot и убрать).
3. `cd tools/bot && npx wrangler login`
4. `npx wrangler kv namespace create STATE` → id вписать в `wrangler.toml`.
5. Секреты (значения не коммитить):
   ```
   npx wrangler secret put BOT_TOKEN
   npx wrangler secret put ADMIN_CHAT_ID
   npx wrangler secret put WEBHOOK_SECRET     # любая длинная случайная строка
   ```
6. `npx wrangler deploy` → получишь адрес `https://revolver-bot.<аккаунт>.workers.dev`.
7. Webhook:
   ```
   curl "https://api.telegram.org/bot<BOT_TOKEN>/setWebhook" -d "url=https://revolver-bot.<аккаунт>.workers.dev/" -d "secret_token=<WEBHOOK_SECRET>"
   ```
8. Для веб-формы сайта: в `tools/build.py` указать `LEAD_ENDPOINT = 'https://revolver-bot.<аккаунт>.workers.dev/lead'` и пересобрать.

## Проверка
- Открыть `t.me/<BOT>?start=sound` → бот отвечает «Понял, интересует: Звукозапись…».
- Написать сообщение → в рабочем чате шапка `#sound · Звукозапись`, имя, @username, ID и текст.
- Ответить Reply-ем на него → клиент получает ответ, на вашем сообщении появляется 👍.

## Ограничения
- Темы (топики) супергруппы не используются: Reply достаточно. Если нужны топики по тегам — добавить `message_thread_id` в `sendMessage` (карта тег → топик).
- Без KV тег между `/start` и сообщением не запоминается (заявка уйдёт с тегом `other`). KV на бесплатном тарифе хватает.
- Токен бота и chat_id — только секреты Worker; в репозитории их быть не должно.
