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
