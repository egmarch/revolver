# -*- coding: utf-8 -*-
# Блоки: «Кто на площадке», «Оборудование и райдер», видео-шоурил зала. Подключается из build.py через exec (после extra.py).
# Включатели и пути к файлам — вверху build.py (FEATURES, TEAM_PHOTOS, HALL_REEL).


def _avatar(key, name):
    p = TEAM_PHOTOS.get(key, '')
    if p:
        return '<div class="mph"><img src="{{b}}%s" alt="%s" loading="lazy"></div>' % (p, name)
    return '<div class="mph ph" aria-hidden="true"><span>ФОТО</span></div>'


team = '''<section class="sec" id="team" data-acc="lime" style="padding:clamp(40px,5vw,70px) 0;background:#0b0e0c"><div class="wrap">
  <span class="kick rv">Кто на площадке</span>
  <div class="team rv d1">
    <article class="member">%s<div><b>Егор</b><span>Видео и режиссура · REVOLVER PODCAST</span></div></article>
    <article class="member">%s<div><b>Костя</b><span>Звук · REVOLVER SOUND</span></div></article>
  </div>
</div></section>''' % (_avatar('egor', 'Егор, видео и режиссура'), _avatar('kostya', 'Костя, звук'))


def _rider_col(title, cls, rows, todo):
    dl = ''.join('<dt>%s</dt><dd>%s</dd>' % (k, v) for k, v in rows)
    return '<div class="rcol %s"><h3>%s</h3><dl>%s</dl><p class="rtodo"><!-- TODO: %s -->%s</p></div>' % (cls, title, dl, todo, todo)


_snd_rows = [(t, ' · '.join(items)) for k, t, items in GEAR]
_pod_rows = [
    ('Камеры', '3 камеры 4K · кинокамера Blackmagic Pocket Cinema 6K с кинооптикой'),
    ('Свет', 'Два восьмиугольных софтбокса и LED-панель, контровой и цветные акценты'),
    ('Звук', 'Микрофоны на журавлях, многоканальная запись, студийный мониторинг'),
    ('Сервис', 'Телесуфлёр · экран для заказчика · ЭЛТ с лайв-фидом · быстрый интернет для эфиров'),
]

rider = ('''<section class="sec" id="rider" data-acc="lime" style="padding:clamp(40px,5vw,70px) 0"><div class="wrap">
  <details class="rider rv"><summary><span><b>Оборудование и райдер</b><small>REVOLVER SOUND · REVOLVER PODCAST</small></span></summary>
  <div class="rider-grid">'''
         + _rider_col('REVOLVER SOUND', 'snd', _snd_rows, 'Полный райдер по звуку (PDF) — скоро')
         + _rider_col('REVOLVER PODCAST', 'pod', _pod_rows, 'Модели камер, объективов и микрофонов, схема света и PDF-райдер — уточняются')
         + '''</div></details>
</div></section>''')

if FEATURES['hall_reel']:
    hall_reel = ('<section class="sec" id="hall-reel" data-acc="amber" style="padding:clamp(40px,5vw,70px) 0"><div class="wrap">'
                 '<span class="kick rv">Зал в движении</span><div class="reel rv d1">'
                 '<video controls playsinline preload="none" poster="{{b}}%s"><source src="{{b}}%s" type="video/mp4"></video></div></div></section>' % (HALL_REEL['poster'], HALL_REEL['src']))
else:
    hall_reel = ''
