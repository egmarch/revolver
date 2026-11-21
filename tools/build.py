# -*- coding: utf-8 -*-
"""Собирает index.html, sound/, podcast/, production/ + sitemap.xml, robots.txt, CNAME.
Запуск из корня проекта:  python -I tools/build.py"""
import io, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UTM_VOLNA = '?utm_source=revolvernsk&utm_medium=referral'
DOMAIN = 'revolvernsk.ru'
PACK = 'Трек + обложка + сниппет + Reels — 13 900 ₽'
LAYOUT = io.open(os.path.join(ROOT, 'src', '_layout.html'), encoding='utf8').read()
exec(io.open(os.path.join(ROOT, 'tools', 'extra.py'), encoding='utf8').read())

NAV = [('sound', 'sound/', 'Звукозапись'), ('podcast', 'podcast/', 'Подкасты'), ('production', 'production/', 'Продакшен')]


def render(page, path, title, desc, body, base, root):
    nav = ''.join('<a href="{b}{h}"{c}>{t}</a>'.format(b=base, h=h, t=t, c=' class="on" aria-current="page"' if k == page else '') for k, h, t in NAV)
    nav += '<a href="{r}#tour">3D-тур</a>'.format(r=root)
    theme = page if page in ('sound', 'podcast', 'production') else ''
    out = (LAYOUT.replace('{{og}}', page).replace('{{theme}}', theme).replace('{{nav}}', nav).replace('{{title}}', title).replace('{{desc}}', desc)
           .replace('{{canon}}', 'https://%s/%s' % (DOMAIN, path)).replace('{{domain}}', DOMAIN).replace('{{body}}', body))
    STATIC = '<div class="static" aria-hidden="true"><canvas></canvas><span>NO SIGNAL ● REC</span></div>\n'
    out = out.replace('<section class="sec book"', STATIC + '<section class="sec book"').replace('<section class="sec" id="faq"', STATIC + '<section class="sec" id="faq"')
    ids = set(re.findall(r'id="([^"]+)"', out))
    out = re.sub(r'href="#([^"]*)"', lambda m: m.group(0) if (m.group(1) in ids or m.group(1) == '') else 'href="%s#%s"' % (root, m.group(1)), out)
    return out.replace('{{b}}', base).replace('{{r}}', root)


def write(path, text):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    io.open(full, 'w', encoding='utf8', newline='\n').write(text)


def gal(items):
    return '<div class="gal rv" id="gal">' + ''.join(
        '<button data-lb="%s"><img src="{{b}}assets/img/%s.webp" alt="%s" loading="lazy"></button>' % (n, n, a) for n, a in items) + '</div>'


FAQ = [
    ('Я никогда не вёл подкаст. Поможете?', 'Да. До съёмки поможем со структурой и таймингом, на площадке подскажем, куда смотреть и как работать с паузами. В продюсерском пакете — ещё и с темами и содержанием.'),
    ('Что входит в готовность за 24 часа?', 'В «Экспрессе» — мультикам-склейка выпуска, базовая обработка и 5 вертикальных Shorts/Reels с субтитрами. Срок отсчитывается после получения всех исходников и согласования вводных.'),
    ('Можно прийти со своим оператором или звукорежиссёром?', 'Конечно. Для видео выбирай аренду зала со светом: заранее согласуем формат сигнала ваших камер для вывода на ЭЛТ. В звуке студия без нашего инженера — от 900 ₽/час.'),
    ('Можно записать трек и сразу снять ролик?', 'Да. В пакете за 13 900 ₽: 2 часа записи и сведение трека, фото-обложка, сниппет (15–30 секунд) и Reels с монтажом. Видео снимаем в соседнем зале.'),
    ('Что принести на запись трека?', 'Минус и стемы в WAV (лучше 24 bit), BPM и тональность, если известны, текст и референсы. Не накладывай лимитер и автотюн «на всякий случай». На трек закладывай 1,5–3 часа и приходи за 10–15 минут.'),
    ('Можно записаться ночью?', 'Пишем и ночью — если договорились заранее. Ночные сессии согласуем заранее, чтобы подготовить оборудование и доступ.'),
    ('Вы выкладываете трек на площадки?', 'Подготовим и сопроводим загрузку через выбранного дистрибьютора: проверим мастер, метаданные и обложку. Размещение не гарантируем — решение принимают площадки.'),
    ('Работаете с юрлицами?', 'Да, с физлицами, ИП и ООО. Возможна оплата по счёту. Для регулярных проектов условия обсудим отдельно.'),
    ('У меня только черновик. Это нормально?', 'Да. Приходи с черновиком: звукорежиссёр поможет записать несколько дублей и выбрать лучший.'),
]


def faq(idx):
    items = ''.join('<details><summary>%s</summary><div>%s</div></details>' % FAQ[i] for i in idx)
    return ('<section class="sec" id="faq" style="background:#0b0e0c" data-acc="lime"><div class="wrap">'
            '<span class="kick rv">Вопросы</span><h2 class="h2 rv d1">А <em>если…</em></h2><div class="faq rv">%s</div></div></section>' % items)


def _book_raw(default=''):
    return '''<section class="sec book" id="book" data-acc="lime">
  <div class="wrap book-grid">
    <div>
      <span class="kick rv">Написать нам</span>
      <h2 class="h2 rv d1">Напиши — <span>ответим</span> в течение дня.</h2>
      <p class="lead rv d2">Расскажи, что хочешь записать или снять, и куда ответить. Можно просто спросить про свободные часы или скинуть демо — послушаем и скажем, с чего начать.</p>
      <p class="rv d3 who-reply" id="whoReply">Заявка уйдёт в Telegram: <b id="whoName">—</b></p>
      {{direct}}
    </div>
    <form class="form rv d2" id="form" novalidate data-default="%s">
      <div class="attach" id="attach" hidden></div>
      <div class="kindrow" role="group" aria-label="Что нужно">
        <label><input type="radio" name="kind" value="hours" checked><span>Узнать свободные часы</span></label>
        <label><input type="radio" name="kind" value="demo"><span>Скинуть демо</span></label>
      </div>
      <label class="fld"><span>Услуга</span><select id="fService"></select></label>
      <label class="fld" id="demoRow" hidden><span>Ссылка на демо или минус</span><input id="fDemo" type="url" placeholder="Ссылка на облако, YouTube или Telegram"></label>
      <div class="kindrow replyrow" role="group" aria-label="Куда ответить">
        <label><input type="radio" name="reply" value="tg" checked><span>Ответить в Telegram</span></label>
        <label><input type="radio" name="reply" value="phone"><span>Ответить по телефону</span></label>
      </div>
      <div class="two">
        <label class="fld"><span id="fContactL">Имя и твой @ник в Telegram</span><input id="fContact" required autocomplete="name" placeholder="Имя, @ник"></label>
        <label class="fld" id="dateRow"><span>Желаемый день</span><input id="fDate" type="date"></label>
      </div>
      <label class="fld"><span>Что хочешь сделать</span><textarea id="fMsg" placeholder="Читаешь под минус, играешь с группой, нужен просто чистый голос…"></textarea></label>
      <div class="acts"><button class="btn" type="submit" id="fSubmit">Узнать свободные часы</button><button class="btn ghost" type="button" id="fCopy">Скопировать</button></div>
      <p class="fn" id="fNote">Ответим в Telegram в течение дня. Обычно быстрее, если не идёт сессия.</p>
    </form>
  </div>
</section>''' % default


TG_SOUND, TG_MAIN = 'CS10ten', 'Egmarch'


def direct_block(default):
    snd = '<a class="tgl" href="https://t.me/%s" target="_blank" rel="noopener"><b>Написать в Telegram</b><span>Костя · звукозапись · @%s</span></a>' % (TG_SOUND, TG_SOUND)
    mn = '<a class="tgl" href="https://t.me/%s" target="_blank" rel="noopener"><b>Написать в Telegram</b><span>Подкасты и продакшен · @%s</span></a>' % (TG_MAIN, TG_MAIN)
    first, second = (snd, mn) if default in ('sound', 'production') else (mn, snd)
    return '<div class="direct rv d3"><p>Форма не открылась или удобнее напрямую? Напиши сразу:</p>' + first + second + '</div>'


def book(default=''):
    return _book_raw(default).replace('{{direct}}', direct_block(default))


def calc(studio):
    p = 'checked' if studio == 'podcast' else ''
    s = 'checked' if studio == 'sound' else ''
    return '''<div class="calc rv" id="calc" data-studio="%s">
      <div class="calc-f">
        <fieldset hidden><legend><b>01</b> Студия</legend>
          <label class="ch-row"><input type="radio" name="studio" value="podcast" %s><i class="rd"></i><span class="tx"><b>REVOLVER PODCAST</b></span></label>
          <label class="ch-row"><input type="radio" name="studio" value="sound" %s><i class="rd"></i><span class="tx"><b>REVOLVER SOUND</b></span></label>
        </fieldset>
        <fieldset id="fmtBox"><legend><b>01</b> Что нужно</legend><div id="fmtList"></div></fieldset>
        <fieldset><legend><b>02</b> Время</legend>
          <div class="range"><input type="range" id="hrs" min="1" max="8" step="1" value="1" aria-label="Количество часов"><output id="hrsOut">1 час</output></div>
        </fieldset>
        <fieldset><legend><b>03</b> Добавить</legend><div id="optList"></div></fieldset>
      </div>
      <aside class="est" aria-live="polite">
        <div class="e1"><span>ПРЕДВАРИТЕЛЬНАЯ СМЕТА</span><button type="button" id="calcReset">СБРОС ↺</button></div>
        <h3 id="estName">—</h3>
        <div class="tot" id="estTot">0</div>
        <div id="estLines"></div>
        <p class="inc" id="estInc"></p>
        <p class="hint" id="estHint"></p>
        <div class="acts"><button class="btn" type="button" id="calcBook">Спросить про день со сметой</button><button class="btn ghost" type="button" id="calcCopy">Скопировать расчёт</button></div>
      </aside>
    </div>''' % (studio, p, s)


def phero(acc, kick, h1, lead, ctas, img, alt, crumbs, side=''):
    inner = '<div><p class="crumbs"><a href="{{r}}">Главная</a> / %s</p><span class="kick">%s</span><h1>%s</h1><p class="lead">%s</p><div class="cta" style="margin-top:30px">%s</div></div>' % (crumbs, kick, h1, lead, ctas)
    if side:
        inner = '<div class="phero-grid">' + inner + side + '</div>'
    return '''<section class="phero" data-acc="%s">
  <div class="phero-bg"><img src="{{b}}assets/img/%s.webp" alt="%s"></div>
  <span class="drip" style="left:12%%;top:0;height:90px;animation-delay:.6s" aria-hidden="true"></span>
  <span class="drip" style="right:18%%;top:0;height:130px;width:12px;animation-delay:2.6s" aria-hidden="true"></span>
  <div class="wrap">%s</div>
</section>''' % (acc, img, alt, inner)


def listen_track(title, note):
    return ('<div class="lt" data-before="" data-after=""><button class="lp" type="button" disabled aria-label="Слушать">▶</button>'
            '<div class="lm"><b>%s</b><span>%s</span></div>'
            '<div class="ab" role="group" aria-label="До или после"><button class="on" type="button" data-ab="before">До</button><button type="button" data-ab="after">После</button></div></div>') % (title, note)


# ================= ГЛАВНАЯ =================
hero = '''<section class="hero" id="top">
  <div class="hero-bg"></div>
  <div class="hero-ghost" aria-hidden="true">REVOLVER</div>
  <span class="drip" style="left:47%;top:0;height:120px;animation-delay:.4s" aria-hidden="true"></span>
  <span class="drip" style="left:38%;top:0;height:70px;width:7px;animation-delay:2.2s;background:var(--lime)" aria-hidden="true"></span>
  <span class="drip" style="right:12%;top:0;height:150px;width:12px;animation-delay:3.5s" aria-hidden="true"></span>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="stamp"><i></i> Новосибирск · Фрунзе 49 · подвал</span>
      <h1>
        <span>Запиши трек.</span>
        <span class="l2">Сними ролик<svg class="scrawl" viewBox="0 0 400 30" preserveAspectRatio="none" aria-hidden="true"><path d="M4 18C60 6 120 26 190 14S330 8 396 16"/></svg></span>
        <span class="l3">в соседнем зале.</span>
      </h1>
      <p class="lead">Две студии рядом: <b>REVOLVER SOUND</b> для звука и <b>REVOLVER PODCAST</b> для видео — с ЭЛТ, граффити и ретро-стеллажами. Снял сегодня — <b>выпуск и Shorts завтра</b>.</p>
      <div class="cta">
        <a class="btn" href="{{b}}3d/index.html">Пройти по студии <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <a class="btn ghost" href="#book" data-book>Узнать свободные часы</a>
      </div>
      <div class="hero-note"><span><b>13 900 ₽</b> трек + обложка + сниппет + Reels</span><span><b>17 000 ₽</b> выпуск подкаста за 24 часа</span><span><b>1 500 ₽/час</b> запись голоса</span></div>
    </div>
    <div class="crt-wrap">
      <div class="crt">
        <div class="crt-top"><span>REVOLVER / TELEVISION</span><b>REC <span data-tc>00:14:28:09</span></b></div>
        <div class="screen">
          <img id="crtImg" src="{{b}}assets/img/hall-wide-2.webp" alt="Общий план видеопавильона REVOLVER PODCAST" width="1700" height="1133">
          <span class="ch" id="crtCh">CH 01</span><span class="tc" aria-hidden="true">CAM A</span>
        </div>
        <div class="crt-ctl">
          <span>ПЕРЕКЛЮЧИ КАНАЛ</span>
          <button aria-pressed="true" data-cam="hall-wide-2" data-alt="Общий план видеопавильона">01 ОБЩИЙ</button>
          <button aria-pressed="false" data-cam="host-mic-1" data-alt="Ведущий за микрофоном">02 ВЕДУЩИЙ</button>
          <button aria-pressed="false" data-cam="vocal-2" data-alt="Артист в студии REVOLVER SOUND">03 ВОКАЛ</button>
        </div>
      </div>
      <span class="sticker st-nbt">No boring talks</span>
      <svg class="sticker st-cross" aria-hidden="true"><use href="#i-cross"/></svg>
      <span class="sticker st-tag" aria-hidden="true">говори громче!</span>
    </div>
  </div>
</section>
<div class="tapes" aria-hidden="true">
  <div class="tape a"><span>REC</span><span>Запись</span><span>Подкасты</span><span>Live-сессии</span><span>Shorts · Reels</span><span>Пишем и ночью</span><span>REC</span><span>Запись</span><span>Подкасты</span><span>Live-сессии</span><span>Shorts · Reels</span><span>Пишем и ночью</span></div>
  <div class="tape b"><span>Фрунзе 49</span><span>Вход — вниз по лестнице</span><span>No boring talks</span><span>Выпуск за 24 часа</span><span>Фрунзе 49</span><span>Вход — вниз по лестнице</span><span>No boring talks</span><span>Выпуск за 24 часа</span></div>
</div>'''

offers = '''<section class="sec" id="offers" data-acc="lime">
  <div class="wrap">
    <span class="kick rv">Что можно взять</span>
    <h2 class="h2 rv d1">Выбери, с чем уйдёшь.</h2>
    <p class="lead rv d2">Запись, сведение, обложка и ролик — в одном месте. Без пяти подрядчиков и переписки в трёх чатах.</p>
    <div class="offers">
      <article class="offer o1 rv" data-tilt>
        <span class="otag">REVOLVER SOUND</span>
        <h3>Трек + обложка<br>+ сниппет + Reels</h3>
        <div class="oprice">13 900 ₽</div>
        <ul><li>2 часа записи со звукорежиссёром</li><li>Сведение и мастеринг</li><li>Фото-обложка из студии</li><li>Сниппет 15–30 секунд и Reels с монтажом</li></ul>
        <a class="btn" href="#book" data-book data-service="%s">Записать трек</a>
        <a class="olink" href="{{b}}sound/">Про студию звука →</a>
      </article>
      <article class="offer o2 rv d1" data-tilt>
        <span class="otag">REVOLVER PODCAST</span>
        <h3>Подкаст<br>за 24 часа</h3>
        <div class="oprice">17 000 ₽</div>
        <ul><li>Час записи, 3 камеры 4K</li><li>Мультикам-монтаж по спикерам</li><li>5 Shorts / Reels с субтитрами</li><li>Выпуск — на следующий день</li></ul>
        <a class="btn amber" href="#book" data-book data-service="Экспресс-мультикам 24ч">Снять выпуск</a>
        <a class="olink" href="{{b}}podcast/">Про павильон →</a>
      </article>
      <article class="offer o3 rv d2" data-tilt>
        <span class="otag">ПРОДАКШЕН</span>
        <h3>Песня, релиз<br>или событие</h3>
        <div class="oprice">по запросу</div>
        <p class="onote">Цена зависит от задачи и объёма работ.</p>
        <ul><li>Песня или аранжировка на заказ</li><li>Дистрибуция и продвижение релиза</li><li>Концерты, банкеты и бизнес-события</li></ul>
        <a class="btn red" href="#book" data-book data-service="Гострайтинг: песня на заказ">Написать про проект</a>
        <a class="olink" href="{{b}}production/">Подробнее →</a>
      </article>
    </div>
    <p class="note rv">Цены ориентировочные: итоговую смету подтверждает администратор после короткого разговора.</p>
  </div>
</section>''' % PACK

studios = '''<section class="sec" id="studios">
  <div class="wrap">
    <span class="kick rv">Две зоны</span>
    <h2 class="h2 rv d1">Одна студия.<br><em>Две</em> <span class="tag">зоны.</span></h2>
    <p class="lead rv d2">Записал голос в тихой чёрной комнате REVOLVER SOUND — перешёл в зал с ковром, ЭЛТ и светом и снял сниппеты на новый трек.</p>
    <div class="doors">
      <article class="door s rv" data-tilt>
        <div class="door-img"><img src="{{b}}assets/img/vocal-2.webp" alt="Артист записывает вокал в REVOLVER SOUND" loading="lazy"></div>
        <svg class="splat" aria-hidden="true"><use href="#i-splat"/></svg>
        <span class="num">01</span><span class="chip">18 М² · 3×6</span>
        <div class="door-in">
          <h3><small>ЗВУКОЗАПИСЬ</small>REVOLVER SOUND</h3>
          <p>Небольшая акустически подготовленная комната: голос получается плотным, а не гулким. Запись, сведение, мастеринг, озвучка.</p>
          <ul><li>Звукорежиссёр рядом</li><li>Мониторинг и talkback</li><li>Сведение и мастер</li></ul>
          <div class="row"><div class="price">1 500 ₽<small>/ час</small></div><a class="btn sm" href="{{b}}sound/">Студия звука</a></div>
        </div>
      </article>
      <article class="door p rv d2" data-tilt>
        <div class="door-img"><img src="{{b}}assets/img/hall-wide-3.webp" alt="Видеопавильон REVOLVER PODCAST со стеллажом и ковром" loading="lazy"></div>
        <svg class="splat" aria-hidden="true"><use href="#i-splat"/></svg>
        <span class="num">02</span><span class="chip">30 М² · 6×5</span>
        <div class="door-in">
          <h3><small>ПОДКАСТЫ / LIVE / SHORTS</small>REVOLVER PODCAST</h3>
          <p>Видеопавильон с характером: граффити-ковёр, ретро-стенд, ЭЛТ с лайв-фидом с камер, три камеры 4K и киношный свет. Выпуск за 24 часа.</p>
          <ul><li>3 камеры 4K</li><li>ЭЛТ в кадре</li><li>Монтаж + 5 Shorts</li></ul>
          <div class="row"><div class="price">2 700 ₽<small>/ час · выпуск 17 000 ₽</small></div><a class="btn sm amber" href="{{b}}podcast/">Павильон</a></div>
        </div>
      </article>
    </div>
  </div>
</section>'''

tour = '''<section class="tour sec" id="tour" style="padding:clamp(80px,10vw,140px) 0">
  <div class="tour-bg"><img src="{{b}}assets/img/hall-wide-3.webp" alt="" loading="lazy"></div>
  <div class="wrap">
    <div>
      <span class="kick rv" style="--acc:var(--lime)">3D-тур</span>
      <h2 class="h2 rv d1" style="--acc:var(--lime)">Зайди и <span class="tag">посмотри.</span></h2>
      <p class="lead rv d2">Зайди внутрь до того, как приедешь: ночная улица, лестница, тамбур, зал подкаста и студия звука. Можно пройти, посмотреть и оставить свой тег на стене. Ходить — WASD и мышь, на телефоне — два стика.</p>
      <div class="cta rv d3" style="margin-top:30px"><a class="btn" href="{{b}}3d/index.html">Войти <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><span style="font:600 12px ui-monospace,Consolas,monospace;color:var(--mute)">WASD · мышь · 1–3 перейти в зону<br>на телефоне — два стика</span></div>
    </div>
    <div class="stairs rv d2" aria-hidden="true">
      <span class="neon">вниз</span>
      <svg class="arrow"><use href="#i-arrow"/></svg>
      ''' + ''.join('<i class="stair" style="width:300px;animation-delay:%ss;--i:%d"></i>' % (round(.55 * i, 2), i) for i in range(10)) + '''
    </div>
  </div>
</section>'''

who = '''<section class="sec wall" id="who" data-acc="red">
  <div class="wrap">
    <span class="kick rv">Как к нам приходят</span>
    <h2 class="h2 rv d1">Со звукорежиссёром говоришь <em>напрямую.</em></h2>
    <p class="lead rv d2">Без менеджеров между тобой и звуком: говоришь, что хочешь услышать, — сразу пробуем.</p>
    <div class="aud rv">
      <article><span class="n">01</span><h3>Читаешь под минус</h3><p>Приходи с минусом и текстом. Запишем несколько дублей и вместе выберем лучший.</p><em>Запись · сведение · мастер</em></article>
      <article><span class="n">02</span><h3>Играешь с группой</h3><p>Играете в зале, звук пишется по каналам через стену, видео снимается в соседнем зале.</p><em>Live-мультитрек · видео</em></article>
      <article><span class="n">03</span><h3>Нужен просто чистый голос</h3><p>Озвучка, дикторский текст, аудиоподкаст. Без лишних эффектов — чисто и ровно.</p><em>Запись голоса · озвучка</em></article>
      <article><span class="n">04</span><h3>Снимаешь разговор</h3><p>Подкаст, интервью или шоу. Или приходишь со своей командой и берёшь зал со светом.</p><em>3 камеры · зал от 2 700 ₽/ч</em></article>
    </div>
  </div>
</section>'''

find = '''<section class="sec wall" id="find" data-acc="violet">
  <div class="wrap">
    <span class="kick rv">Как нас найти</span>
    <h2 class="h2 rv d1">Фрунзе 49.<br><em>Вниз</em> <span class="tag">по лестнице.</span></h2>
    <div class="findbox">
      <div class="find-ph rv"><img src="{{b}}assets/img/hall-wide-1.webp" alt="Видеопавильон REVOLVER PODCAST" loading="lazy"><span class="cap">ТАК ВЫГЛЯДИТ ЗАЛ ВНУТРИ</span></div>
      <div class="addr rv d1">
        <b>Новосибирск, ул. Фрунзе, 49</b>
        <span class="hours">ПИШЕМ И НОЧЬЮ — ЕСЛИ ДОГОВОРИЛИСЬ ЗАРАНЕЕ</span>
        <p>Вход — по лестнице вниз вдоль здания. Перед приездом напиши нам: встретим и покажем обе студии. Если ты впервые — выделим 15 минут на экскурсию.</p>
        <div class="btns"><a class="btn sm" target="_blank" rel="noopener" href="https://yandex.ru/maps/?text=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%2C%20%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5%2049">Яндекс Карты</a><a class="btn sm ghost" target="_blank" rel="noopener" href="https://2gis.ru/novosibirsk/search/%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5%2049">2ГИС</a><a class="btn sm ghost" href="{{b}}3d/index.html">Пройти по студии</a></div>
      </div>
    </div>
  </div>
</section>'''

home_body = hero + offers + studios + tour + who + find + faq(range(len(FAQ))) + book()
write('index.html', render('home', '', 'REVOLVER — студия звукозаписи и подкастов в Новосибирске, Фрунзе 49',
      'Запиши трек, сними ролик в соседнем зале. REVOLVER SOUND — звукозапись, REVOLVER PODCAST — видеопавильон. Трек + обложка + сниппет + Reels — 13 900 ₽. Новосибирск, Фрунзе, 49.', home_body, '', './'))

# ================= ЗВУК =================
listen = ('<aside class="listen" id="listen"><div class="listen-h"><b>Послушать записи</b><span>одинаковый припев: до и после</span></div>'
          + listen_track('Исполнитель — «Название»', 'Здесь будет реальная работа · что сделала студия — укажем точно')
          + listen_track('Исполнитель — «Название»', 'Здесь будет реальная работа · что сделала студия — укажем точно')
          + '<p class="listen-n">Реальные фрагменты добавим после согласования с артистами. Выдуманных имён и треков у нас нет.</p></aside>')

sound_hero = phero('lime', 'REVOLVER SOUND · 18 М² · 3×6', 'Студия<br><em>звукозаписи</em>',
                   'Запишем голос, сведём и отдадим файлы. Первый раз? Приходи с черновиком — разберёмся.',
                   '<a class="btn" href="#book" data-book data-service="Запись вокала">Узнать свободные часы</a><a class="btn ghost" href="#book" data-book data-kind="demo">Скинуть демо</a><a class="link" href="#listen">Послушать записи ↓</a>',
                   'vocal-2', 'Артист у микрофона в студии REVOLVER SOUND', 'Звукозапись', listen)

newbie = '''<section class="sec" id="first" data-acc="lime" style="padding:clamp(50px,6vw,80px) 0;background:#0b0e0c"><div class="wrap newbie">
  <figure class="rv"><img src="{{b}}assets/img/control-3.webp" alt="Звукорежиссёр и артист за пультом во время записи" loading="lazy"><figcaption>Из реальной сессии</figcaption></figure>
  <div class="rv d1"><span class="kick">Для новичка</span>
  <p class="bigq">Первый раз? Можно прийти с черновиком. Звукорежиссёр поможет записать несколько дублей и выбрать лучший.</p>
  <a class="link" href="#book" data-book data-kind="demo">Скинуть демо заранее →</a></div>
</div></section>'''

sound_sec = '''<section class="sec" id="studio" data-acc="lime">
  <div class="wrap sound-grid">
    <div class="collage rv">
      <figure class="c1"><img src="{{b}}assets/img/vocal-1.webp" alt="Вокалист в наушниках у микрофона" loading="lazy"></figure>
      <figure class="c2"><img src="{{b}}assets/img/smoke-pop.webp" alt="Поп-фильтр и микрофон в дыму" loading="lazy"></figure>
      <figure class="c3"><img src="{{b}}assets/img/control-3.webp" alt="Звукорежиссёр за пультом и артист" loading="lazy"></figure>
      <span class="tg">REC!</span>
    </div>
    <div>
      <span class="kick rv">REVOLVER SOUND</span>
      <h2 class="h2 rv d1">Комната,<br>где слышно <em>главное.</em></h2>
      <p class="lead rv d2">Акустически подготовленное тон-ателье 18 м² (3×6 м). Звукорежиссёр сидит в аппаратной, слышит проблему до того, как она попадёт в мастер, и ведёт тебя по дублям.</p>
      <p class="roomnote rv d2">Комната небольшая — поэтому голос в ней плотный, а не гулкий.</p>
      <div class="flow rv d2">
        <div class="flow-t"><span>SIGNAL FLOW</span><span>−12 dBFS · OK</span></div>
        <svg viewBox="0 0 560 90" aria-label="Схема: зал, звукоизолированная стена, пульт, мастер">
          <path class="pipe" d="M40 45H520"/>
          <rect x="6" y="20" width="68" height="50" fill="none" stroke="#5a655d" stroke-width="2"/><text x="40" y="49" text-anchor="middle">ЗАЛ</text>
          <rect x="196" y="20" width="68" height="50" fill="none" stroke="var(--lime)" stroke-width="2"/><text x="230" y="49" text-anchor="middle">СТЕНА</text>
          <rect x="316" y="20" width="76" height="50" fill="none" stroke="#5a655d" stroke-width="2"/><text x="354" y="49" text-anchor="middle">ПУЛЬТ</text>
          <rect x="486" y="20" width="68" height="50" fill="var(--lime)"/><text x="520" y="49" text-anchor="middle" style="fill:#000">МАСТЕР</text>
          <g class="dot"><circle r="5"><animateMotion dur="3.2s" repeatCount="indefinite" path="M40 45H520"/></circle><circle r="5" opacity=".6"><animateMotion dur="3.2s" begin="1.07s" repeatCount="indefinite" path="M40 45H520"/></circle><circle r="5" opacity=".35"><animateMotion dur="3.2s" begin="2.14s" repeatCount="indefinite" path="M40 45H520"/></circle></g>
        </svg>
        <div class="meters" aria-hidden="true" id="meters"></div>
      </div>
      <div class="feat rv d3">
        <div><b>Запись</b><span>Вокал, рэп, речь, дубляж, аудиоподкасты. Звукорежиссёр рядом.</span></div>
        <div><b>Live-мультитрек</b><span>Группа играет в зале — поканальный звук пишется через стену.</span></div>
        <div><b>Озвучка</b><span>Дикторский текст, ролики, аудиоподкасты. Чисто и ровно.</span></div>
        <div><b>Сведение и мастер</b><span>Баланс, плотность, мастеринг под Яндекс Музыку, VK, Spotify.</span></div>
      </div>
    </div>
  </div>
</section>'''

engineer = '''<section class="sec wall" id="who-records" data-acc="lime"><div class="wrap">
  <span class="kick rv">Кто тебя записывает</span>
  <h2 class="h2 rv d1">Звукорежиссёр, который <em>слышит</em> тебя.</h2>
  <div class="eng">
    <figure class="rv"><img src="{{b}}assets/img/engineer-1.webp" alt="Звукорежиссёр за пультом в студии REVOLVER SOUND" loading="lazy"><figcaption>Рабочее место звукорежиссёра</figcaption></figure>
    <div class="engcard rv d1">
      <div class="who"><div class="avatar" aria-hidden="true">ФОТО</div><div><b>Имя звукорежиссёра</b><span>REVOLVER SOUND · запись и сведение</span></div></div>
      <p class="engn">Здесь будет короткий рассказ о звукорежиссёре и его опыте. Фото и имя добавим после согласования.</p>
      <div class="works"><div class="work"><b>Исполнитель — «Название»</b><span>Здесь будет реальная работа</span></div><div class="work"><b>Исполнитель — «Название»</b><span>Здесь будет реальная работа</span></div></div>
    </div>
  </div>
</div></section>'''

pricesnd = '''<section class="sec" id="prices" data-acc="lime">
  <div class="wrap">
    <span class="kick rv">Цены</span>
    <h2 class="h2 rv d1">Выбери: <em>только запись</em> или готовый релиз.</h2>
    <div class="pack2">
      <article class="pk rv">
        <span class="t">ТОЛЬКО ЗАПИСЬ</span><h3>Запись голоса</h3>
        <div class="pr">1 500 ₽<small> / час</small></div>
        <p class="nt"><b class="save">5 часов — 6 500 ₽ вместо 7 500 ₽: экономия 1 000 ₽.</b> Без нашего звукорежиссёра — от 900 ₽/час.</p>
        <div class="get"><b>Что получишь на выходе</b><span>Чистые дорожки сессии и черновое сведение — чтобы послушать дома и решить, что делать дальше.</span></div>
        <ul><li>Звукорежиссёр на сессии</li><li>Несколько дублей и помощь с подачей</li><li>Исходники записи</li><li>Демо-сведение сразу после записи</li></ul>
        <a class="btn ghost" href="#book" data-book data-service="Запись вокала">Спросить про день</a>
      </article>
      <article class="pk hit rv d1">
        <span class="t">ГОТОВЫЙ РЕЛИЗ</span><h3>Трек + обложка + сниппет + Reels</h3>
        <div class="pr">13 900 ₽<small> / релиз</small></div>
        <p class="nt">Одна цена за весь набор. Видео снимаем в соседнем зале.</p>
        <div class="get"><b>Что получишь на выходе</b><span>Сведённый трек, фото-обложку, сниппет и Reels. Сниппет — короткий кусок трека (15–30 секунд) с видео из студии. Reels — отдельный вертикальный ролик с монтажом и субтитрами под твой трек.</span></div>
        <ul><li>2 часа записи со звукорежиссёром</li><li>Сведение и мастеринг</li><li>Фото-обложка: снимаем тебя в студии и оформляем</li><li>Сниппет 15–30 секунд</li><li>Reels с монтажом и субтитрами</li></ul>
        <a class="btn" href="#book" data-book data-service="%s">Записать трек</a>
      </article>
    </div>
    <div class="cards two-c" id="cards-sound">
      <article class="card rv"><span class="t">POST</span><h3>Сведение и мастер</h3><p class="d">Баланс, пространство, современное звучание.</p><div class="pr">от 5 000 ₽<small> / трек</small></div><p class="nt">Зависит от числа дорожек и состояния исходников.</p><ul><li>Баланс, эквализация, динамика</li><li>Саунд-дизайн по задаче</li><li>Ручной тюн вокала — по запросу</li><li>Мастер под все площадки</li></ul><a class="btn ghost" href="#book" data-book data-service="Сведение и мастеринг">Скинуть трек на оценку</a></article>
      <article class="card rv d1"><span class="t">ИНСТРУМЕНТЫ / LIVE</span><h3>Live-мультитрек</h3><p class="d">Гитары, синты, поканальная запись выступления.</p><div class="pr">от 2 000 ₽<small> / час</small></div><p class="nt">Зависит от числа инструментов и сложности сетапа.</p><ul><li>Линейная и микрофонная запись</li><li>Мультитрек в DAW</li><li>Видео в REVOLVER PODCAST — по желанию</li></ul><a class="btn ghost" href="#book" data-book data-service="Запись инструментов / Live-мультитрек">Написать про Live</a></article>
      <article class="card rv"><span class="t">РЕЛИЗ</span><h3>Дистрибуция</h3><p class="d">Подготовка и сопровождение выхода на площадки.</p><div class="pr">по запросу</div><p class="nt">Зависит от дистрибьютора, прав и числа релизов.</p><ul><li>Проверка мастер-файлов</li><li>Метаданные и права</li><li>Чек-лист обложки</li></ul><a class="btn ghost" href="#book" data-book data-service="Дистрибуция / релизное сопровождение">Написать про релиз</a></article>
    </div>
    <p class="note rv">Мы не обещаем размещение на площадках — модерацию проводят дистрибьютор и сервисы. Работаем с физлицами, ИП и ООО, оплата по счёту возможна.</p>
    ''' % PACK + calc('sound') + '''
  </div>
</section>'''

sound_gal = '''<section class="sec" id="frames" style="background:#0b0e0c" data-acc="lime"><div class="wrap">
  <span class="kick rv">Кадры</span><h2 class="h2 rv d1">Как это <em>выглядит</em> внутри.</h2>
  ''' + gal([('vocal-1', 'Вокалист в наушниках у микрофона'), ('control-1', 'Пульт и артист'), ('mic-neumann', 'Студийный микрофон'), ('smoke-pop', 'Поп-фильтр в дыму'), ('vocal-3', 'Запись вокала'), ('control-5', 'Работа за пультом'), ('smoke-mic', 'Микрофон в дыму'), ('vocal-close', 'Наушники и поп-фильтр'), ('control-3', 'Звукорежиссёр и артист'), ('engineer-2', 'Звукорежиссёр в наушниках'), ('control-6', 'Запись под присмотром звукорежиссёра'), ('vocal-4', 'Вокалист у микрофона')]) + '''
</div></section>'''

sound_body = sound_hero + newbie + sound_sec + wave + engineer + services + pricesnd + sound_gal + faq([8, 3, 4, 2, 5, 6, 7]) + book('sound')
write('sound/index.html', render('sound', 'sound/', 'Запись вокала и трека в Новосибирске — от 1 500 ₽/час | REVOLVER SOUND',
      'Запись вокала от 1 500 ₽/час, сведение и мастеринг. Первый раз — приходи с черновиком. Трек + фото-обложка + сниппет + Reels — 13 900 ₽. Новосибирск, Фрунзе, 49.', sound_body, '../', '../'))

# ================= ПОДКАСТЫ =================
pav = '''<section class="sec wall" id="studio" data-acc="amber">
  <div class="wrap">
    <span class="kick rv">REVOLVER PODCAST</span>
    <h2 class="h2 rv d1">Не фон.<br><em>Часть шоу.</em></h2>
    <p class="lead rv d2">Ковёр с авторским граффити, ретро-техника, ЭЛТ и настоящие инструменты — всё читается в кадре и в боке. Нажимай на точки.</p>
    <div class="insp rv" id="insp">
      <div class="insp-photo">
        <img src="{{b}}assets/img/hall-wide-1.webp" alt="Видеопавильон REVOLVER PODCAST: ковёр, стеллаж, ЭЛТ, свет и стол" loading="lazy" width="1700" height="1133">
        <button class="hot on" style="left:9%;top:52%" data-i="0" aria-label="Граффити-ковёр">1</button>
        <button class="hot" style="left:31%;top:52%" data-i="1" aria-label="ЭЛТ-телевизоры">2</button>
        <button class="hot" style="left:56%;top:40%" data-i="2" aria-label="Ретро-стеллаж">3</button>
        <button class="hot" style="left:36%;top:15%" data-i="3" aria-label="Свет">4</button>
        <button class="hot" style="left:48%;top:78%" data-i="4" aria-label="Стол и микрофоны">5</button>
      </div>
      <div class="insp-panel" aria-live="polite"><span class="big" id="inspNum">01</span><h3 id="inspT"></h3><p id="inspD"></p><div class="tags"><span id="inspTag"></span></div></div>
    </div>
    <div class="insp-tabs" id="inspTabs" style="border:2px solid var(--line);border-top:0"><button class="on">Ковёр</button><button>ЭЛТ</button><button>Стенд</button><button>Свет</button><button>Стол</button></div>
    <div class="strip" aria-label="Детали студии" id="strip">
      <figure class="pol" style="margin:0" data-lb="detail-suitcase"><img src="{{b}}assets/img/detail-suitcase.webp" alt="Чемодан с деньгами и граффити" loading="lazy"><span>заряжено на деньги</span></figure>
      <figure class="pol" style="margin:0" data-lb="detail-gasmask"><img src="{{b}}assets/img/detail-gasmask.webp" alt="Противогаз на стеллаже" loading="lazy"><span>атмосфера</span></figure>
      <figure class="pol" style="margin:0" data-lb="detail-turntable"><img src="{{b}}assets/img/detail-turntable.webp" alt="Проигрыватель и микрофоны на журавлях" loading="lazy"><span>ретро и три микрофона</span></figure>
      <figure class="pol" style="margin:0" data-lb="detail-ball"><img src="{{b}}assets/img/detail-ball.webp" alt="Баскетбольный мяч, настолки, книги" loading="lazy"><span>красиво в боке</span></figure>
      <figure class="pol" style="margin:0" data-lb="detail-guitar"><img src="{{b}}assets/img/detail-guitar.webp" alt="Гитара и микрофон" loading="lazy"><span>всё настоящее, без муляжей</span></figure>
      <figure class="pol" style="margin:0" data-lb="detail-books"><img src="{{b}}assets/img/detail-books.webp" alt="Книги и бюст с RGB-подсветкой" loading="lazy"><span>RGB-свет</span></figure>
    </div>
    <div class="cta rv" style="margin-top:20px"><a class="btn amber" href="#prices">Тарифы павильона</a><a class="link" href="#frames">Все кадры →</a></div>
  </div>
</section>'''

pod_cards = '''<div class="cards two-c" id="cards-podcast" data-acc="amber">
      <article class="card hit rv"><span class="t">РЕШЕНИЕ 1 · ГОТОВО ЗА 24 ЧАСА</span><h3>Снять выпуск</h3><p class="d">Сняли разговор — отдали готовый выпуск и пять коротких.</p><div class="pr">17 000 ₽<small> / выпуск</small></div><p class="nt">1 час записи · 3 камеры + звук</p><ul><li>3 камеры 4K, многоканальный звук</li><li>Склейка по спикерам</li><li>5 Shorts / Reels с субтитрами</li><li>Выпуск — на следующий день</li></ul><a class="btn amber" href="#book" data-book data-service="Экспресс-мультикам 24ч">Снять выпуск</a></article>
      <article class="card rv d1"><span class="t">РЕШЕНИЕ 2 · РЕГУЛЯРНЫЙ КАНАЛ</span><h3>Канал на месяц</h3><p class="d">Регулярный канал без найма своей команды.</p><div class="pr">85 000 ₽<small> / месяц</small></div><p class="nt">4 выпуска и 15 Shorts</p><ul><li>4 YouTube-обложки</li><li>Помощь с темами и структурой</li><li>3 камеры, премиум-свет</li></ul><a class="btn ghost" href="#book" data-book data-service="YouTube на месяц">Написать про канал</a></article>
    </div>
    <h3 class="rows-h rv">Другие варианты</h3>
    <div class="rows rv">
      <div class="rw"><div><b>Зал + свет для своей команды</b><span>Павильон 30 м², свет, реквизит, ваши камеры на ЭЛТ. Минимум 2 часа, от 4 часов — 2 400 ₽/час.</span></div><div class="rp">2 700 ₽<small>/ час</small></div><a class="btn sm ghost" href="#book" data-book data-service="Аренда зала + свет">Узнать свободные часы</a></div>
      <div class="rw"><div><b>Продюсерский пакет</b><span>До 1,5 часов записи, смысловая чистка, интро, цвет, 10 Shorts, обложка и описание.</span></div><div class="rp">28 000 ₽<small>/ выпуск</small></div><a class="btn sm ghost" href="#book" data-book data-service="Продюсерский пакет">Написать про выпуск</a></div>
      <div class="rw"><div><b>Подкаст на 2 часа</b><span>Расширенная сессия, два техника, мультикам-монтаж, цвет, титры, 5 Shorts.</span></div><div class="rp">40 000 ₽<small>/ 2 часа</small></div><a class="btn sm ghost" href="#book" data-book data-service="Подкаст на 2 часа — полный выпуск">Написать про выпуск</a></div>
      <div class="rw"><div><b>Поток Shorts</b><span>15 вертикальных роликов из одной смены до 4 часов: сценарии, монтаж, субтитры.</span></div><div class="rp">50 000 ₽<small>/ месяц</small></div><a class="btn sm ghost" href="#book" data-book data-service="Shorts / Reels на месяц">Спросить про ролики</a></div>
    </div>'''

pod_prices = '''<section class="sec" id="prices" style="background:#0b0e0c" data-acc="amber">
  <div class="wrap">
    <span class="kick rv">Цены</span>
    <h2 class="h2 rv d1">Понятно <em>по деньгам.</em></h2>
    ''' + pod_cards + '''
    <p class="note rv">Работаем с физлицами, ИП и ООО, оплата по счёту возможна. Для регулярных проектов условия обсудим отдельно. Нестандартный проект (выезд, реклама, сложная графика) считаем после короткого брифа.</p>
    ''' + calc('podcast') + '''
  </div>
</section>'''

fm = '''<section class="sec wall" id="formats" data-acc="amber">
  <div class="wrap">
    <span class="kick rv">Форматы</span>
    <h2 class="h2 rv d1">Не ограничивайся <em>одним</em> <span class="tag">разговором.</span></h2>
    <div class="fmt rv">
      <article><span class="n">01</span><h3>Подкасты и интервью</h3><p>Оператор и режиссёр не дадут выпуску стать статичной конференцией. От 1 часа записи, 1–4 спикера.</p><em>ВЫПУСК + 5–10 ВЕРТИКАЛЕЙ</em></article>
      <article><span class="n">02</span><h3>Музыкальные Live</h3><p>Группа играет в зале, звукорежиссёр пишет поканальный мультитрек через стену. Живое видео и чистые исходники для сведения.</p><em>TINY DESK VIBE · ОТ 2 ЧАСОВ</em></article>
      <article><span class="n">03</span><h3>Пакетная съёмка Shorts</h3><p>Темы заранее, съёмка блоками, вертикали с субтитрами. 15 роликов из одной смены до 4 часов.</p><em>15 РОЛИКОВ / МЕСЯЦ · 9:16</em></article>
      <article><span class="n">04</span><h3>YouTube-шоу и ролики для брендов</h3><p>Темы, структура, таймкоды, съёмка, смысловая чистка, интро, моушн-плашки, обложки.</p><em>РАЗОВО ИЛИ НА МЕСЯЦ</em></article>
    </div>
  </div>
</section>
<section class="sec t24" id="t24" data-acc="red">
  <div class="wrap">
    <span class="kick rv">Скорость</span>
    <h2 class="h2 rv d1">Снял сегодня.<br><em>Выпуск завтра.</em></h2>
    <p class="lead rv d2">Собственный AI-пайплайн собирает черновик мультикама за ~15 минут и нарезает вертикальные ролики. Пока другие думают про монтаж — ты уже публикуешь.</p>
    <ol class="steps rv d2">
      <li><span class="tm">ДЕНЬ 0 · ВЕЧЕР</span><h3>Съёмка</h3><p>3 камеры, студийный звук, режиссёр на посте.</p></li>
      <li><span class="tm">ДЕНЬ 0 · НОЧЬ</span><h3>Сборка</h3><p>Мультикам-склейка по спикерам, чистка звука.</p></li>
      <li><span class="tm">ДЕНЬ 1 · УТРО</span><h3>Shorts</h3><p>Вертикали с субтитрами и обложки.</p></li>
      <li><span class="tm">ДЕНЬ 1 · ДЕНЬ</span><h3>Публикуешь</h3><p>Готовый выпуск и 5 Shorts у тебя.</p></li>
    </ol>
    <div class="bar rv" id="bar"><i></i></div>
    <p class="volna rv">Свет и картинку на площадке курирует команда <a href="https://marchen.ru/?utm_source=revolvernsk&utm_medium=referral" target="_blank" rel="noopener">VOLNA film</a> — создатели музыкальных клипов, фестивального кино и коммерческих проектов.</p>
  </div>
</section>'''

pod_gal = '''<section class="sec" id="frames" style="background:#0b0e0c" data-acc="amber"><div class="wrap">
  <span class="kick rv">Кадры</span><h2 class="h2 rv d1">Не сток. <em>Настоящая</em> студия.</h2>
  ''' + gal([('interview', 'Интервью в павильоне'), ('hall-table', 'Стол в павильоне'), ('host-1', 'Ведущий за микрофоном'), ('hall-wide-2', 'Павильон: общий план'), ('hall-both', 'Двое за столом, широкий план'), ('host-mic-2', 'Ведущий эмоционально рассказывает'), ('talk-a', 'Разговор за столом'), ('host-2', 'Ведущий в кадре'), ('hall-wide-3', 'Павильон: стеллаж и свет'), ('talk-b', 'Разговор, вид с другой камеры'), ('detail-turntable', 'Проигрыватель и микрофоны'), ('host-mic-1', 'Ведущий у микрофона')]) + '''
</div></section>'''

pod_hero = phero('amber', 'REVOLVER PODCAST · 30 М² · 6×5', 'Видео&shy;павильон<br><em>для подкастов</em>',
                 'Сняли разговор — отдали готовый выпуск и пять коротких. Граффити-ковёр, ретро-стенд, ЭЛТ и киношный свет уже включены: три камеры 4K, студийный звук, монтаж за 24 часа.',
                 '<a class="btn amber" href="#book" data-book data-service="Экспресс-мультикам 24ч">Снять выпуск</a><a class="btn ghost" href="#prices">Цены</a><a class="link" href="{{b}}3d/index.html">Пройти по студии →</a>',
                 'hall-wide-2', 'Видеопавильон REVOLVER PODCAST', 'Подкасты')
pod_body = pod_hero + pav + pod_prices + fm + pod_gal + faq([0, 1, 2, 5, 7]) + book('podcast')
write('podcast/index.html', render('podcast', 'podcast/', 'Студия подкастов в Новосибирске — выпуск за 24 часа, 17 000 ₽ | REVOLVER PODCAST',
      'Съёмка подкастов, интервью, Live и Shorts. 3 камеры 4K, ЭЛТ, граффити. Выпуск за 24 часа — 17 000 ₽. Аренда зала — 2 700 ₽/ч. Фрунзе, 49.', pod_body, '../', '../'))

# ================= ПРОДАКШЕН =================
ph_cards = ''.join('<article class="phc rv d%d"><span class="soon">СКОРО</span><h3>Исполнитель — «Название»</h3><p>Здесь будет реальная работа: что сделала студия и ссылка на трек.</p><div class="phbar"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></article>' % k for k in range(3))

prod_hero = phero('red', 'ПРОДАКШЕН · МУЗЫКА · МЕРОПРИЯТИЯ', 'Продюсируем<br><em>музыку</em> и события',
                  'Песня или аранжировка на заказ, обложка, дистрибуция и продвижение релиза. А ещё концерты, банкеты и бизнес-события. YouTube-продюсирование делает VOLNA film — ссылка ниже.',
                  '<a class="btn red" href="#book" data-book data-service="Гострайтинг: песня на заказ">Написать про трек</a><a class="btn ghost" href="#events">Мероприятия</a><a class="link" href="#youtube">YouTube — у VOLNA film →</a>',
                  'smoke-mic', 'Студийный микрофон в дыму', 'Продакшен')

youtube_volna = '''<section class="sec" id="youtube" style="background:#0b0e0c;padding:clamp(50px,6vw,80px) 0" data-acc="red"><div class="wrap yt1">
  <article class="ytc rv"><div class="video-stage" data-yt-id="Gm8-ZmQf0nU" data-yt-title="После этого случая я поверил в МИСТИКУ!"><img src="{{b}}assets/yt/Gm8-ZmQf0nU.jpg" alt="Превью выпуска «После этого случая я поверил в МИСТИКУ!»" loading="lazy"><button class="vplay" type="button" aria-label="Смотреть: После этого случая я поверил в МИСТИКУ!"><span>▶</span>Смотреть</button></div>
    <div class="ytb"><span class="caption">Авторский канал · длинный формат</span><h3>«Эксперт по шнуркам»: выпуск набрал более 2 млн просмотров</h3><p class="ystat">Канал: 25,9 млн просмотров · 61,3 тыс. подписчиков<small>данные канала на ноябрь 2026</small></p><div class="ylinks"><a class="olink" href="https://youtu.be/Gm8-ZmQf0nU" target="_blank" rel="noopener">Смотреть на YouTube ↗</a><a class="olink" href="https://www.youtube.com/@expertposhnurkam" target="_blank" rel="noopener">Канал и статистика ↗</a></div></div></article>
  <div class="rv d1">
    <span class="kick">YouTube</span>
    <h2 class="h2 sm">YouTube-продюсирование делает VOLNA film.</h2>
    <p class="lead" style="font-size:16px">Каналы и шоу для экспертов и компаний — наш партнёр. Кейсы, пакеты и цены на их странице.</p>
    <a class="btn red sm" style="margin-top:22px" href="https://marchen.ru/youtube/%s" target="_blank" rel="noopener">Перейти к VOLNA film ↗</a>
  </div>
</div></section>''' % UTM_VOLNA

prod_body = prod_hero + '''<section class="sec wall" id="tracks" data-acc="lime"><div class="wrap">
  <span class="kick rv">Музыка</span>
  <h2 class="h2 rv d1">Кейсы по <em>трекам.</em></h2>
  <p class="lead rv d2">Первые релизы со студии скоро появятся здесь: треки, клипы, Live и вертикальные ролики.</p>
  <div class="phgrid">''' + ph_cards + '''</div>
</div></section>
''' + events + youtube_volna + book('production')
write('production/index.html', render('production', 'production/', 'Продюсирование музыки и мероприятий в Новосибирске | REVOLVER',
      'Песни и аранжировки на заказ, дистрибуция и продвижение релизов, концерты, банкеты и бизнес-события. YouTube-продюсирование делает VOLNA film. Новосибирск, Фрунзе, 49.', prod_body, '../', '../'))

# ---------- служебные файлы ----------
write('CNAME', DOMAIN + '\n')
write('robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://%s/sitemap.xml\n' % DOMAIN)
write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(
    '  <url><loc>https://%s/%s</loc></url>\n' % (DOMAIN, p) for p in ['', 'sound/', 'podcast/', 'production/', '3d/']) + '</urlset>\n')
print('ok')
