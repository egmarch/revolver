# -*- coding: utf-8 -*-
"""Собирает index.html, sound/, podcast/, production/ из src/old_index.html (секции) + новых блоков.
Запуск:  python -I tools/build.py   (из корня проекта)"""
import re, os, io

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
old = io.open(os.path.join(ROOT, 'src', 'old_index.html'), encoding='utf8').read()


def sec(name):
    m = re.search(r'<!-- ============ ' + re.escape(name) + r' ============ -->\n', old)
    assert m, name
    start = m.end()
    nxt = re.search(r'<!-- ============ |</main>', old[start:])
    return old[start:start + nxt.start()]


def rep(s, a, b, n=1):
    assert s.count(a) >= 1, a[:60]
    return s.replace(a, b)


def clean(s):
    s = re.sub(r'class="kick rv">\d\d / ', 'class="kick rv">', s)
    s = re.sub(r' data-tab="\w+"', '', s)
    s = s.replace('REVOLVR PODCAST', 'REVOLVER PODCAST')
    return s


# ---------- общий шаблон ----------
LAYOUT = io.open(os.path.join(ROOT, 'src', '_layout.html'), encoding='utf8').read()

NAV = [('sound', 'sound/', 'Звукозапись'), ('podcast', 'podcast/', 'Подкасты'), ('production', 'production/', 'Продакшен')]


def render(page, title, desc, body, base, root):
    nav = ''.join('<a href="{b}{h}"{c}>{t}</a>'.format(b=base, h=h, t=t, c=' class="on" aria-current="page"' if k == page else '') for k, h, t in NAV)
    nav += '<a href="{r}#tour">3D-тур</a>'.format(r=root)
    theme = page if page in ('sound', 'podcast', 'production') else ''
    out = LAYOUT.replace('{{theme}}', theme).replace('{{nav}}', nav).replace('{{title}}', title).replace('{{desc}}', desc).replace('{{body}}', body)
    STATIC = '<div class="static" aria-hidden="true"><canvas></canvas><span>NO SIGNAL ● REC</span></div>\n'
    out = out.replace('<section class="sec book"', STATIC + '<section class="sec book"').replace('<section class="sec" id="faq"', STATIC + '<section class="sec" id="faq"')
    # локальные якоря, которых нет на странице, ведут на главную
    ids = set(re.findall(r'id="([^"]+)"', out))
    def anch(m):
        i = m.group(1)
        return m.group(0) if i in ids or i == '' else 'href="{r}#{i}"'.format(r=root, i=i)
    out = re.sub(r'href="#([^"]*)"', anch, out)
    out = out.replace('{{b}}', base).replace('{{r}}', root)
    return out


def write(path, text):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    io.open(full, 'w', encoding='utf8', newline='\n').write(text)


# ---------- блоки ----------
def gal(items):
    return '<div class="gal rv" id="gal">' + ''.join(
        '<button data-lb="%s"><img src="{{b}}assets/img/%s.webp" alt="%s" loading="lazy"></button>' % (n, n, a) for n, a in items) + '</div>'


def faq(idx, kick='Вопросы'):
    sect = sec('FAQ')
    items = re.findall(r'<details>.*?</details>', sect, re.S)
    body = '\n      '.join(items[i] for i in idx)
    return ('<section class="sec" id="faq" style="background:#0b0e0c" data-acc="lime"><div class="wrap">'
            '<span class="kick rv">%s</span><h2 class="h2 rv d1">А <em>если…</em></h2>'
            '<div class="faq rv">%s</div></div></section>' % (kick, body))


SERVICE_NOTE = ''


def book(default=''):
    return '''<section class="sec book" id="book" data-acc="lime">
  <div class="wrap book-grid">
    <div>
      <span class="kick rv">Бронь</span>
      <h2 class="h2 rv d1">Выбери <span>слот.</span><br>Заходи <em>вниз.</em></h2>
      <p class="lead rv d2">Расскажи, что хочешь записать или снять. Подскажем, сколько заложить времени. Без обязательств — можно просто приехать на экскурсию (15 минут).</p>
      <p class="rv d3 who-reply" id="whoReply">Заявка уйдёт в Telegram: <b id="whoName">—</b></p>
    </div>
    <form class="form rv d2" id="form" novalidate data-default="%s">
      <div class="attach" id="attach" hidden></div>
      <label class="fld"><span>Услуга</span><select id="fService"></select></label>
      <div class="two">
        <label class="fld"><span>Имя и контакт</span><input id="fContact" required autocomplete="name" placeholder="Имя, @telegram или телефон"></label>
        <label class="fld"><span>Желаемая дата</span><input id="fDate" type="date"></label>
      </div>
      <label class="fld"><span>Что хочешь сделать</span><textarea id="fMsg" placeholder="Тема, жанр, сколько человек, нужна ли съёмка…"></textarea></label>
      <div class="acts"><button class="btn" type="submit">Отправить заявку</button><button class="btn ghost" type="button" id="fCopy">Скопировать</button></div>
      <p class="fn" id="fNote">Откроется черновик в Telegram — останется нажать «Отправить». Дату подтвердит администратор.</p>
    </form>
  </div>
</section>''' % default


def calc(studio):
    p = 'checked' if studio == 'podcast' else ''
    s = 'checked' if studio == 'sound' else ''
    return '''<div class="calc rv" id="calc" data-studio="%s">
      <div class="calc-f">
        <fieldset hidden><legend><b>01</b> Студия</legend>
          <label class="ch-row"><input type="radio" name="studio" value="podcast" %s><i class="rd"></i><span class="tx"><b>REVOLVER PODCAST</b></span></label>
          <label class="ch-row"><input type="radio" name="studio" value="sound" %s><i class="rd"></i><span class="tx"><b>REVOLVER SOUND</b></span></label>
        </fieldset>
        <fieldset id="fmtBox"><legend><b>01</b> Формат</legend><div id="fmtList"></div></fieldset>
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
        <div class="acts"><button class="btn" type="button" id="calcBook">Запросить дату со сметой</button><button class="btn ghost" type="button" id="calcCopy">Скопировать расчёт</button></div>
      </aside>
    </div>''' % (studio, p, s)


def phero(acc, kick, h1, lead, ctas, img, alt, crumbs):
    return '''<section class="phero" data-acc="%s">
  <div class="phero-bg"><img src="{{b}}assets/img/%s.webp" alt="%s"></div>
  <span class="drip" style="left:12%%;top:0;height:90px;animation-delay:.6s" aria-hidden="true"></span>
  <span class="drip" style="right:18%%;top:0;height:130px;width:12px;animation-delay:2.6s;background:var(--lime)" aria-hidden="true"></span>
  <div class="wrap">
    <p class="crumbs"><a href="{{r}}">Главная</a> / %s</p>
    <span class="kick">%s</span>
    <h1>%s</h1>
    <p class="lead">%s</p>
    <div class="cta" style="margin-top:30px">%s</div>
  </div>
</section>''' % (acc, img, alt, crumbs, kick, h1, lead, ctas)


# ---------- ГЛАВНАЯ ----------
hero = clean(sec('HERO'))
hero = rep(hero, 'тон-ателье <b>REVOLVER</b>', 'студию звука <b>REVOLVER SOUND</b>')
hero = rep(hero, '<b>12 900 ₽</b> трек + 5 сниппетов', '<b>от 15 000 ₽</b> трек + обложка + 3 Reels')
hero = rep(hero, 'href="3d/index.html"', 'href="{{b}}3d/index.html"')
hero = rep(hero, 'Две студии в одном подвале в Новосибирске:', 'Две студии в одном подвале на Фрунзе 49:')
hero = hero.replace('src="assets/', 'src="{{b}}assets/')
hero = rep(hero, '<span><b>от 1 500 ₽/ч</b> запись голоса</span>', '<span><b>от 70 000 ₽</b> YouTube под ключ</span>')

offers = '''<section class="sec" id="offers" data-acc="lime">
  <div class="wrap">
    <span class="kick rv">Офферы под ключ</span>
    <h2 class="h2 rv d1">Берёшь оффер.<br><em>Остальное</em> — наше.</h2>
    <p class="lead rv d2">Не нужно собирать проект из пяти подрядчиков. Выбери готовый результат — запись, звук, картинка и упаковка в одном подвале.</p>
    <div class="offers">
      <article class="offer o1 rv" data-tilt>
        <span class="otag">REVOLVER SOUND · ХИТ</span>
        <h3>Трек<br>под ключ</h3>
        <div class="oprice">от 15 000 ₽</div>
        <ul><li>Запись голоса со звукорежиссёром</li><li>Сведение и мастеринг</li><li>Обложка трека</li><li>3 Reels / Shorts на релиз</li></ul>
        <a class="btn" href="#book" data-book data-service="Трек под ключ: трек + обложка + 3 Reels">Записать трек</a>
        <a class="olink" href="{{b}}sound/">Подробнее о студии звука →</a>
      </article>
      <article class="offer o2 rv d1" data-tilt>
        <span class="otag">REVOLVER PODCAST</span>
        <h3>Подкаст<br>за 24 часа</h3>
        <div class="oprice">17 000 ₽</div>
        <ul><li>1 час записи, 3 камеры 4K</li><li>Мультикам-монтаж по спикерам</li><li>5 Shorts / Reels с субтитрами</li><li>Выпуск на следующий день</li></ul>
        <a class="btn amber" href="#book" data-book data-service="Экспресс-мультикам 24ч">Снять выпуск</a>
        <a class="olink" href="{{b}}podcast/">Подробнее о павильоне →</a>
      </article>
      <article class="offer o3 rv d2" data-tilt>
        <span class="otag">ПРОДАКШЕН</span>
        <h3>YouTube<br>под ключ</h3>
        <div class="oprice">от 70 000 ₽</div>
        <ul><li>Формат, рубрики и темы</li><li>Съёмка, монтаж, обложки</li><li>Shorts из каждого выпуска</li><li>Разбор результата</li></ul>
        <a class="btn red" href="#book" data-book data-service="YouTube: продюсирование разговорного канала">Обсудить канал</a>
        <a class="olink" href="{{b}}production/">Кейсы и пакеты →</a>
      </article>
    </div>
    <p class="note rv">Цены ориентировочные: итоговую смету подтверждает администратор после короткого брифа.</p>
  </div>
</section>'''

studios = clean(sec('STUDIOS'))
studios = rep(studios, '<h3><small>ЗВУКОЗАПИСЬ / DJ / РЕЛИЗ</small>REVOLVER</h3>', '<h3><small>ЗВУКОЗАПИСЬ / DJ / РЕЛИЗ</small>REVOLVER SOUND</h3>')
studios = rep(studios, '<a class="btn sm" href="#prices">Цены и пакеты</a>', '<a class="btn sm" href="{{b}}sound/">Студия звука</a>')
studios = rep(studios, '<a class="btn sm amber" href="#prices">Цены и пакеты</a>', '<a class="btn sm amber" href="{{b}}podcast/">Павильон</a>')
studios = rep(studios, '<span class="kick rv">Две двери</span>', '<span class="kick rv">Две студии</span>')
studios = studios.replace('src="assets/', 'src="{{b}}assets/')
studios = rep(studios, 'Записал голос в чёрной тихой комнате', 'Записал голос в чёрной тихой комнате REVOLVER SOUND')

tour = clean(sec('3D TOUR')).replace('href="3d/', 'href="{{b}}3d/').replace('src="assets/', 'src="{{b}}assets/')
who = clean(sec('AUDIENCE'))

find = '''<section class="sec wall" id="find" data-acc="violet">
  <div class="wrap">
    <span class="kick rv">Как нас найти</span>
    <h2 class="h2 rv d1">Фрунзе 49.<br><em>Вниз</em> <span class="tag">по лестнице.</span></h2>
    <div class="findbox">
      <div class="find-ph rv"><img src="{{b}}assets/img/graffiti-wide.webp" alt="Граффити-стена с револьвером в студии" loading="lazy"><span class="cap">ПОДВАЛ · ВХОД СО ЛЕСТНИЦЫ</span></div>
      <div class="addr rv d1">
        <b>Новосибирск, ул. Фрунзе, 49</b>
        <span class="hours">ПОДВАЛ · ПО ПРЕДВАРИТЕЛЬНОЙ ЗАПИСИ 24/7</span>
        <p>Спуск — по лестнице вдоль здания. Перед приездом напиши нам, мы встретим и покажем студии. Приезжай заранее, если это твоя первая сессия, — выделим 15 минут на экскурсию.</p>
        <div class="btns"><a class="btn sm" target="_blank" rel="noopener" href="https://yandex.ru/maps/?text=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%2C%20%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5%2049">Яндекс Карты</a><a class="btn sm ghost" target="_blank" rel="noopener" href="https://2gis.ru/novosibirsk/search/%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5%2049">2ГИС</a><a class="btn sm ghost" href="{{b}}3d/index.html">Пройти в 3D</a></div>
      </div>
    </div>
  </div>
</section>'''

home_body = hero + offers + studios + tour + who + find + faq(range(8)) + book()
write('index.html', render('home', 'REVOLVER — звукозапись, подкасты и видео в Новосибирске, Фрунзе 49',
      'Две студии в одном подвале: REVOLVER SOUND (звукозапись) и REVOLVER PODCAST (видеопавильон). Трек под ключ от 15 000 ₽, подкаст за 24 часа. Новосибирск, Фрунзе, 49.', home_body, '', './'))

exec(io.open(os.path.join(ROOT, 'tools', 'extra.py'), encoding='utf8').read())

# ---------- ЗВУК ----------
sound_sec = clean(sec('SOUND')).replace('04 / REVOLVER', 'REVOLVER SOUND')
sound_sec = sound_sec.replace('<span class="kick rv">REVOLVER</span>', '<span class="kick rv">REVOLVER SOUND</span>')
sound_sec = rep(sound_sec, '<a class="btn" href="#prices">Тарифы звука</a>', '<a class="btn" href="#prices">Тарифы звука</a>')
sound_sec = sound_sec.replace('src="assets/', 'src="{{b}}assets/')
sound_sec = sound_sec.replace('id="sound" data-acc="lime" style="background:#0b0e0c"', 'id="studio" data-acc="lime" style="background:#0b0e0c"')

prices_old = sec('PRICES')
i = prices_old.index('<div class="cards" id="cards-sound"')
j = prices_old.index('<p class="note')
snd_cards = prices_old[i:j].replace(' hidden', '', 1)
snd_cards = snd_cards.replace('<article class="card hit rv d1">', '<article class="card rv d1">', 1)
key_card = '''<article class="card hit rv"><span class="t">ОФФЕР ПОД КЛЮЧ</span><h3>Трек под ключ</h3><p class="d">Запись, звук, обложка и вертикали к релизу.</p><div class="pr">от 15 000 ₽<small> / релиз</small></div><p class="nt">Финальную цену подтверждаем после брифа</p><ul><li>Запись голоса со звукорежиссёром</li><li>Сведение и мастеринг</li><li>Обложка трека</li><li>3 Reels / Shorts на релиз</li></ul><a class="btn" href="#book" data-book data-service="Трек под ключ: трек + обложка + 3 Reels">Записать трек</a></article>
      '''
snd_cards = snd_cards.replace('<div class="cards" id="cards-sound" data-acc="lime">\n      ', '<div class="cards" id="cards-sound" data-acc="lime">\n      ' + key_card, 1)
assert 'Трек под ключ' in snd_cards
snd_cards = rep(snd_cards, '<h3>Трек + 5 сниппетов</h3>', '<h3>Комбо: трек + 5 сниппетов</h3>')
snd_cards = snd_cards.replace('1 час съёмки в PODCAST', '1 час съёмки в REVOLVER PODCAST')

sound_prices = '''<section class="sec" id="prices" data-acc="lime">
  <div class="wrap">
    <span class="kick rv">Цены</span>
    <h2 class="h2 rv d1">Понятно <em>по деньгам.</em></h2>
    ''' + snd_cards + '''
    <p class="note rv">Мы не обещаем размещение на площадках — модерацию проводят дистрибьютор и сервисы. Работаем с физлицами, ИП и ООО, возможна оплата по счёту.</p>
    ''' + calc('sound') + '''
  </div>
</section>'''

sound_gal = '''<section class="sec" id="frames" style="background:#0b0e0c" data-acc="lime"><div class="wrap">
  <span class="kick rv">Кадры</span><h2 class="h2 rv d1">Как это <em>выглядит</em> внутри.</h2>
  ''' + gal([('vocal-1', 'Вокалист в наушниках у микрофона'), ('control-1', 'Пульт и артист'), ('mic-neumann', 'Студийный микрофон'), ('smoke-pop', 'Поп-фильтр в дыму'), ('vocal-3', 'Запись вокала'), ('control-5', 'Работа за пультом'), ('smoke-mic', 'Микрофон в дыму'), ('vocal-close', 'Наушники и поп-фильтр'), ('control-3', 'Звукорежиссёр и артист'), ('lounge', 'Лаундж с белым диваном'), ('control-6', 'Запись под присмотром звукорежиссёра'), ('vocal-4', 'Вокалист у микрофона')]) + '''
</div></section>'''

sound_hero = phero('lime', 'REVOLVER SOUND · 18 М² · 3×6', 'Студия<br><em>звукозаписи</em>',
                   'Акустически подготовленное тон-ателье: вокал, рэп, инструменты, сведение и мастеринг. Звукорежиссёр ведёт тебя по дублям, а видеопавильон — за стеной.',
                   '<a class="btn" href="#book" data-book data-service="Трек под ключ: трек + обложка + 3 Reels">Записать трек</a><a class="btn ghost" href="#prices">Цены</a><a class="link" href="{{b}}podcast/">Видеопавильон →</a>',
                   'vocal-2', 'Артист у микрофона в студии REVOLVER SOUND', 'Звукозапись')
sound_body = sound_hero + sound_sec + wave + services + sound_prices + sound_gal + faq([3, 4, 2, 5, 6, 7]) + book('sound')
write('sound/index.html', render('sound', 'REVOLVER SOUND — студия звукозаписи в Новосибирске, Фрунзе 49',
      'Запись вокала и рэпа, сведение и мастеринг, Live-мультитрек, DJ-школа. Трек под ключ от 15 000 ₽. Новосибирск, Фрунзе, 49.', sound_body, '../', '../'))

# ---------- ПОДКАСТЫ ----------
pav = clean(sec('PODCAST SPACE')).replace('src="assets/', 'src="{{b}}assets/')
pav = pav.replace('id="pavilion" data-acc="amber"', 'id="studio" data-acc="amber"')
pod_i = prices_old.index('<div class="cards" id="cards-podcast"')
pod_j = prices_old.index('<div class="cards" id="cards-sound"')
pod_cards = prices_old[pod_i:pod_j].rstrip()
pod_cards = pod_cards.replace('<div class="cards" id="cards-podcast" data-acc="amber">', '<div class="cards" id="cards-podcast" data-acc="amber">', 1)
pod_cards = pod_cards.replace('Отдельный звукорежиссёр в REVOLVER', 'Отдельный звукорежиссёр в REVOLVER SOUND')
pod_prices = '''<section class="sec" id="prices" style="background:#0b0e0c" data-acc="amber">
  <div class="wrap">
    <span class="kick rv">Цены</span>
    <h2 class="h2 rv d1">Понятно <em>по деньгам.</em></h2>
    ''' + pod_cards + '''
    <p class="note rv">Работаем с физлицами, ИП и ООО, возможна оплата по счёту. Для регулярных проектов обсудим индивидуальные условия. Нестандартный проект (выезд, реклама, сложная графика) считаем после короткого брифа.</p>
    ''' + calc('podcast') + '''
  </div>
</section>'''
fm = clean(sec('FORMATS + 24H'))
fm = rep(fm, '<span class="kick rv">Скорость</span>', '<span class="kick rv">Скорость</span>')
pod_gal = '''<section class="sec" id="frames" style="background:#0b0e0c" data-acc="amber"><div class="wrap">
  <span class="kick rv">Кадры</span><h2 class="h2 rv d1">Не сток. <em>Настоящий</em> подвал.</h2>
  ''' + gal([('interview', 'Интервью в павильоне'), ('hall-table', 'Стол в павильоне'), ('host-1', 'Ведущий за микрофоном'), ('graffiti-wide', 'Граффити с револьвером на зелёной стене'), ('hall-both', 'Двое за столом, широкий план'), ('host-mic-2', 'Ведущий эмоционально рассказывает'), ('talk-a', 'Разговор за столом'), ('graffiti-room', 'Граффити-стена и стол'), ('hall-wide-3', 'Павильон: стеллаж и свет'), ('talk-b', 'Разговор, вид с другой камеры'), ('detail-turntable', 'Проигрыватель и микрофоны'), ('lounge', 'Лаундж с белым диваном')]) + '''
</div></section>'''
pod_hero = phero('amber', 'REVOLVER PODCAST · 30 М² · 6×5', 'Видео&shy;павильон<br><em>для подкастов</em>',
                 'Граффити-ковёр, ретро-стенд, ЭЛТ с лайв-фидом и киношный свет уже включены. Три камеры 4K, студийный звук и монтаж за 24 часа.',
                 '<a class="btn amber" href="#book" data-book data-service="Экспресс-мультикам 24ч">Снять выпуск</a><a class="btn ghost" href="#prices">Цены</a><a class="link" href="{{b}}3d/index.html">Пройти в 3D →</a>',
                 'hall-wide-2', 'Видеопавильон REVOLVER PODCAST', 'Подкасты')
pod_body = pod_hero + pav + pod_prices + fm + pod_gal + faq([0, 1, 2, 5, 7]) + book('podcast')
write('podcast/index.html', render('podcast', 'REVOLVER PODCAST — студия подкастов и видеопавильон в Новосибирске',
      'Съёмка подкастов, интервью, Live и Shorts. 3 камеры 4K, ЭЛТ, граффити. Выпуск за 24 часа от 17 000 ₽. Аренда зала от 2 700 ₽/ч. Фрунзе, 49.', pod_body, '../', '../'))

# ---------- ПРОДАКШЕН ----------
YT = [
    ('Gm8-ZmQf0nU', 'После этого случая я поверил в МИСТИКУ!', 'Авторский канал · длинный формат',
     '«Эксперт по шнуркам» — истории одного человека стали каналом с 26,6 млн просмотров',
     'Велосипедист-кругосветчик рассказывает истории из поездок. Длинный выпуск набрал более 2 млн просмотров и почти 220 тыс. часов просмотра.',
     '26,6+ млн просмотров · 980+ тыс. часов просмотра · 61+ тыс. подписчиков', 'https://youtu.be/Gm8-ZmQf0nU'),
    ('ADKbN_Wm_Rc', 'Чем ателье лучше производства?', 'Интервью с непубличным предпринимателем',
     'SNEGOVIK PRODUCTION — интересный разговор с непубличным предпринимателем',
     'Вместо интервью «о пути предпринимателя» — один конкретный вопрос, на который у героя есть ответ из практики. Short из этого выпуска набрал более 4 млн просмотров.',
     '17+ млн просмотров · 190+ тыс. часов просмотра · 22,6+ тыс. подписчиков', 'https://youtu.be/ADKbN_Wm_Rc'),
    ('xIGH-3r54MQ', 'Как изменился бизнес в России за 40 лет? Владимир Мартыненков', 'Деловое интервью · девелопмент',
     'Как изменился бизнес в России за 40 лет?',
     'Разговор с основателем группы компаний «Мета»: от первых предпринимательских решений до девелопмента. Компания раскрывается через решения человека.',
     'Выпуск опубликован на канале «Завтраки Бизнес Сибирь»', 'https://youtu.be/xIGH-3r54MQ'),
    ('DFQLBI6_p50', 'Как мы построили дом мечты? Post and Beam: сибирский эксперимент', 'Экспертный рум-тур · строительство',
     'Как мы построили дом мечты?',
     'Рум-тур с основателем «Старко» по собственному дому: зелёная кровля, планировка и детали конструкции — повод объяснить, как мыслит строитель.',
     'Экспертный рум-тур', 'https://youtu.be/DFQLBI6_p50'),
]
yt_cards = ''
for k, (vid, t, cap, h3, txt, stat, url) in enumerate(YT):
    yt_cards += '''<article class="ytc rv d%d"><div class="video-stage" data-yt-id="%s" data-yt-title="%s"><img src="{{b}}assets/yt/%s.jpg" alt="Превью выпуска «%s»" loading="lazy"><button class="vplay" type="button" aria-label="Смотреть: %s"><span>▶</span>Смотреть</button></div>
<div class="ytb"><span class="caption">%s</span><h3>%s</h3><p>%s</p><p class="ystat">%s</p><a class="olink" href="%s" target="_blank" rel="noopener">Смотреть на YouTube ↗</a></div></article>
''' % (k % 3, vid, t, vid, t, t, cap, h3, txt, stat, url)

ph_cards = ''.join('<article class="phc rv d%d"><span class="soon">СКОРО</span><h3>%s</h3><p>%s</p><div class="phbar"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></article>' % (k, h, p) for k, (h, p) in enumerate([
    ('Кейс: трек + клип', 'Здесь появится история релиза: от записи в REVOLVER SOUND до клипа и Reels.'),
    ('Кейс: Live-сессия', 'Живое выступление в павильоне и мультитрек через стену. Видео и чистый звук.'),
    ('Кейс: альбом / EP', 'Серия треков, обложки и вертикали. Что сделали и какой получился результат.')]))

prod_hero = phero('red', 'ПРОДАКШЕН · ЭКСПЕРТЫ · БРЕНДЫ · АРТИСТЫ', 'Продюсируем<br><em>YouTube</em> и музыку',
                  'Находим тему, герою — формат, а выпуску — причину, чтобы его открыли. Снимаем на своей площадке и упаковываем под YouTube, VK Видео, Rutube и Дзен. Свет и картинку курирует команда VOLNA film.',
                  '<a class="btn red" href="#book" data-book data-service="YouTube: пилотный выпуск">Обсудить пилот</a><a class="btn ghost" href="#cases">Смотреть кейсы</a>',
                  'interview', 'Съёмка интервью в павильоне REVOLVER PODCAST', 'Продакшен')
prod_body = prod_hero + '''<section class="sec" id="cases" data-acc="red"><div class="wrap">
  <span class="kick rv">YouTube</span>
  <h2 class="h2 rv d1">Каналы и выпуски,<br>которые <em>работают.</em></h2>
  <p class="lead rv d2">Видео загружается только по нажатию. YouTube в России может требовать VPN — рядом всегда есть прямая ссылка.</p>
  <div class="ytgrid">''' + yt_cards + '''</div>
</div></section>
''' + events + '''<section class="sec wall" id="tracks" data-acc="lime"><div class="wrap">
  <span class="kick rv">Музыка</span>
  <h2 class="h2 rv d1">Кейсы по <em>трекам.</em></h2>
  <p class="lead rv d2">Первые релизы со студии скоро появятся здесь: треки, клипы, Live и вертикальные ролики.</p>
  <div class="phgrid">''' + ph_cards + '''</div>
</div></section>
<section class="sec" id="packages" style="background:#0b0e0c" data-acc="red"><div class="wrap">
  <span class="kick rv">Пакеты</span>
  <h2 class="h2 rv d1">Два пакета <em>продюсирования.</em></h2>
  <div class="cards two-c">
    <article class="card rv"><span class="t">ФОРМАТ «ГОВОРЯЩАЯ ГОЛОВА»</span><h3>Разговорный канал</h3><p class="d">Эксперт, основатель или ведущий в кадре: придумываем рубрики и темы, снимаем и упаковываем выпуски.</p><div class="pr">от 70 000 ₽</div><p class="nt">Итог зависит от числа выпусков и объёма работ</p><ul><li>Разбор задачи, аудитории и героя</li><li>Формат, рубрики и темы выпусков</li><li>Съёмка в студии или выезд</li><li>Монтаж, обложки, названия, описания</li><li>Shorts из выпусков и разбор результата</li></ul><a class="btn ghost" href="#book" data-book data-service="YouTube: продюсирование разговорного канала">Обсудить канал</a></article>
    <article class="card hit rv d1"><span class="t">ШОУ</span><h3>Продюсирование шоу</h3><p class="d">Серия с гостями и героями: придумываем формат, делаем пилот и ведём регулярный выход.</p><div class="pr">от 150 000 ₽</div><p class="nt">Итог зависит от формата, числа выпусков и сложности съёмки</p><ul><li>Концепция шоу, ведущий, структура</li><li>Подбор гостей, сценарный план</li><li>Пилотный выпуск и разбор результата</li><li>Съёмка, монтаж, графика, звук, обложки</li><li>Регулярный выход и упаковка для платформ</li></ul><a class="btn red" href="#book" data-book data-service="YouTube: продюсирование шоу">Обсудить шоу</a></article>
  </div>
  <p class="note rv">Окончательную стоимость называем после обсуждения задачи и пилотного выпуска. Записать выпуск на площадке можно по <a href="{{b}}podcast/#prices" style="border-bottom:2px solid var(--red)">готовым тарифам павильона</a>.</p>
  <p class="volna rv" style="color:var(--ink);margin-top:34px">Корпоративное видео для заводов, застройщиков и госсектора, клипы и фестивальное кино — <a href="https://marchen.ru" target="_blank" rel="noopener" style="border-bottom:2px solid var(--lime)">VOLNA film · marchen.ru ↗</a></p>
</div></section>''' + book('production')
write('production/index.html', render('production', 'Продакшен REVOLVER — YouTube, подкасты и музыка под ключ, Новосибирск',
      'Продюсирование YouTube-каналов и шоу, кейсы с миллионами просмотров. Разговорный канал от 70 000 ₽, шоу от 150 000 ₽. Новосибирск.', prod_body, '../', '../'))
print('ok')
