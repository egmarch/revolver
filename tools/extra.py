# -*- coding: utf-8 -*-
# Дополнительные блоки: каталог услуг, интерактивная волна, мероприятия. Подключается из build.py через exec.

CATS = [
    ('01', 'Гострайтинг', 'Песня, которой у тебя ещё нет', [
        ('Песня на заказ', 'Гострайтинг: песня на заказ'), ('Трек с нуля', 'Гострайтинг: трек с нуля'), ('Аранжировка', 'Гострайтинг: аранжировка'),
        ('Стихи на заказ', 'Гострайтинг: стихи на заказ'), ('Рекламные тексты', 'Гострайтинг: рекламный текст')]),
    ('02', 'Звукозапись', 'В студии и на выезде', [
        ('Запись трека', 'Запись вокала'), ('Дикторский голос / озвучка', 'Озвучка / дикторский голос'), ('Запись на выезде', 'Запись на выезде'),
        ('Запись инструментов', 'Запись инструментов / Live-мультитрек')]),
    ('03', 'Оборудование', 'Свет, звук, микрофоны', [
        ('Аренда оборудования', 'Аренда оборудования')]),
    ('04', 'Продвижение', 'Чтобы релиз услышали', [
        ('Дизайн обложки', 'Дизайн обложки'), ('Дистрибуция', 'Дистрибуция / релизное сопровождение'), ('Таргет и посевы в плейлисты', 'Таргет / посевы в плейлисты')]),
    ('05', 'Мероприятия', 'От идеи до сцены', [
        ('Бизнес', 'Мероприятие: бизнес'), ('Концерты', 'Мероприятие: концерт'), ('Банкеты', 'Мероприятие: банкет')]),
    ('06', 'Школы', 'Научим с нуля', [
        ('Диджеинг', 'Школа: диджеинг'), ('Брейк-данс', 'Школа: брейк-данс'), ('Рэп', 'Школа: рэп'), ('Гитара', 'Школа: гитара'),
        ('Вокал', 'Школа: вокал'), ('Сведение и мастеринг', 'Школа: сведение и мастеринг')]),
]


def chips(items):
    return ''.join('<button class="chip" type="button" data-book data-service="%s">%s<span>↗</span></button>' % (sv, lb) for lb, sv in items)


services = ('''<section class="sec wall" id="services" data-acc="lime"><div class="wrap">
  <span class="kick rv">Что умеем</span>
  <h2 class="h2 rv d1">Всё, что нужно артисту, — <em>в одной</em> <span class="tag">студии.</span></h2>
  <p class="lead rv d2">Жми на любую услугу — она сразу попадёт в заявку. Стоимость называем после короткого брифа: для каждого проекта она своя.</p>
  <div class="cats">''' + ''.join(
    '<article class="cat rv d%d"><span class="cn">%s</span><h3>%s</h3><p>%s</p><div class="chips">%s</div></article>' % (k % 3, n, t, d, chips(it))
    for k, (n, t, d, it) in enumerate(CATS)) + '''</div>
</div></section>''')

wave = '''<section class="sec" id="wave" data-acc="lime" style="background:#0b0e0c"><div class="wrap">
  <span class="kick rv">Потрогай звук</span>
  <h2 class="h2 rv d1">Волна <em>слушается</em> курсор.</h2>
  <p class="lead rv d2">Води мышью или пальцем: слева направо — частота, сверху вниз — громкость. Кликни по волне — разойдутся круги. Включи звук и сыграй на ней как на терменвоксе.</p>
  <div class="wavebox rv" id="wavebox">
    <canvas id="waveCv" aria-label="Интерактивная звуковая волна"></canvas>
    <div class="wave-ui">
      <div class="seg2" role="group" aria-label="Форма волны"><button class="on" data-w="sine">SINE</button><button data-w="saw">SAW</button><button data-w="square">SQUARE</button><button data-w="noise">NOISE</button></div>
      <button class="btn sm ghost" id="waveSnd" type="button" aria-pressed="false">Звук: выкл</button>
    </div>
    <div class="wave-read"><span id="waveHz">440 Hz</span><span id="waveDb">−12 dB</span></div>
  </div>
  <div class="cta rv" style="margin-top:34px"><a class="btn" href="#book" data-book data-service="Запись вокала">Записать свой голос</a><a class="link" href="#services">Все услуги →</a></div>
</div></section>'''

events = ('''<section class="sec wall" id="events" data-acc="red"><div class="wrap">
  <span class="kick rv">Мероприятия</span>
  <h2 class="h2 rv d1">Организуем <em>тусы</em> и <span class="tag">концерты.</span></h2>
  <p class="lead rv d2">Бизнес-события, концерты и банкеты: подберём площадку, звук, свет, видео и программу. Выбери формат — расскажем, что входит.</p>
  <div class="evtypes rv">''' + ''.join(
    '<article><b>%s</b><span>%s</span><button class="chip" type="button" data-book data-service="%s">Написать нам<span>↗</span></button></article>' % x for x in [
        ('Бизнес', 'Презентации, корпоративы, запуски, нетворкинг', 'Мероприятие: бизнес'),
        ('Концерты', 'Сет-листы, звук и свет, трансляция, запись', 'Мероприятие: концерт'),
        ('Банкеты', 'Музыка, ведущие, диджеи, атмосфера', 'Мероприятие: банкет')]) + '''</div>
  <article class="evt rv">
    <div class="evt-screen"><canvas class="static-cv"></canvas><b>В МОНТАЖЕ</b><span>ВИДЕО СКОРО</span></div>
    <div class="evt-body"><span class="caption">Мероприятие · хип-хоп</span><h3>Хип-хоп туса в Аэропорту</h3>
      <p>Ролик с мероприятия сейчас в монтаже. Скоро покажем, как это было: сцена, звук, люди и атмосфера.</p>
      <div class="phbar"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <button class="btn red sm" type="button" data-book data-service="Мероприятие: концерт">Хочу такую тусу</button></div>
  </article>
</div></section>''')


GEAR_IC = {
 'mic':'<rect x="20" y="6" width="16" height="28" rx="8"/><path d="M12 28c0 10 7 16 16 16s16-6 16-16M28 44v8M20 52h16"/><path d="M20 16h16M20 22h16" opacity=".5"/>',
 'card':'<rect x="4" y="14" width="48" height="28" rx="4"/><circle cx="16" cy="28" r="6"/><circle cx="34" cy="28" r="3"/><circle cx="44" cy="28" r="3"/><path d="M10 48h36" opacity=".5"/>',
 'spk':'<rect x="12" y="4" width="32" height="48" rx="4"/><circle cx="28" cy="18" r="5"/><circle cx="28" cy="36" r="10"/><circle cx="28" cy="36" r="3.5"/>',
 'gtr':'<path d="M48 4l4 4-6 6-4-4zM44 12L30 26"/><path d="M26 26c-6-2-12 2-12 8-4 0-8 3-8 8 0 6 6 10 12 8 4-1 6-4 6-8 6 0 10-6 8-12z"/><circle cx="22" cy="38" r="3"/>',
 'dj':'<rect x="4" y="8" width="48" height="40" rx="4"/><circle cx="26" cy="28" r="13"/><circle cx="26" cy="28" r="3"/><path d="M26 28l9-6M46 14v26" /><circle cx="46" cy="14" r="2"/>',
 'hp':'<path d="M10 34V28a18 18 0 0136 0v6"/><rect x="6" y="32" width="10" height="16" rx="4"/><rect x="40" y="32" width="10" height="16" rx="4"/>',
 'pad':'<rect x="4" y="8" width="48" height="40" rx="4"/><rect x="10" y="14" width="10" height="10" rx="2"/><rect x="23" y="14" width="10" height="10" rx="2"/><rect x="36" y="14" width="10" height="10" rx="2"/><rect x="10" y="29" width="10" height="10" rx="2"/><rect x="23" y="29" width="10" height="10" rx="2"/><rect x="36" y="29" width="10" height="10" rx="2"/>',
 'key':'<rect x="3" y="14" width="50" height="30" rx="3"/><path d="M11 44V30M19 44V30M27 44V30M35 44V30M43 44V30M9 14v16M17 14v16M33 14v16M41 14v16" /><rect x="8" y="14" width="5" height="16" fill="currentColor"/><rect x="16" y="14" width="5" height="16" fill="currentColor"/><rect x="32" y="14" width="5" height="16" fill="currentColor"/><rect x="40" y="14" width="5" height="16" fill="currentColor"/>',
}
GEAR = [
 ('mic','Микрофоны',['Invotone CM400L','AKG MK519','Shure SM7B (подкастовый)']),
 ('card','Звуковые карты',['MOTU 828 mk3','Behringer UMC404','Focusrite Scarlett 2i4']),
 ('spk','Мониторы',['KRK RP5 G5']),
 ('hp','Наушники',['Sennheiser HD 215','Sennheiser HD 206','Beyerdynamic DT 990','AKG K240']),
 ('gtr','Гитары',['Cort Les Paul']),
 ('dj','Проигрыватель для скретчинга',['Vestax PDX-2000 mkII']),
 ('pad','Драм-машины и пэды',['Akai MPD26','Ableton Launchpad']),
 ('key','MIDI-клавиатура',['M-Audio KeyRig 49']),
]
