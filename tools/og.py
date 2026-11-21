# -*- coding: utf-8 -*-
"""Рисует OG-картинки 1200x630 для соцсетей: assets/og/*.jpg. Запуск: python -I tools/og.py"""
import os
from PIL import Image, ImageDraw, ImageFont, ImageEnhance

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT = r'C:\Windows\Fonts\ariblk.ttf'
FONT2 = r'C:\Windows\Fonts\arialbd.ttf'
PAGES = [
    ('home', 'hall-wide-2', '#c9f23b', 'REVOLVER', ['Запиши трек.', 'Сними ролик', 'в соседнем зале.'], 'Звукозапись и подкасты · Фрунзе 49'),
    ('sound', 'vocal-2', '#c9f23b', 'REVOLVER SOUND', ['Запись вокала', 'и трека в Новосибирске'], 'от 1 500 ₽/час · трек + обложка + Reels — 13 900 ₽'),
    ('podcast', 'hall-wide-3', '#f2b560', 'REVOLVER PODCAST', ['Студия подкастов', 'в Новосибирске'], 'Выпуск за 24 часа — 17 000 ₽ · зал от 2 700 ₽/час'),
    ('production', 'smoke-mic', '#ff4b2e', 'ПРОДАКШЕН', ['Продюсирование', 'музыки и событий'], 'Песни, релизы, концерты · Новосибирск'),
]
os.makedirs(os.path.join(ROOT, 'assets', 'og'), exist_ok=True)
for key, img, col, tag, lines, sub in PAGES:
    im = Image.open(os.path.join(ROOT, 'assets', 'img', img + '.webp')).convert('RGB')
    w, h = im.size
    r = max(1200 / w, 630 / h)
    im = im.resize((int(w * r) + 1, int(h * r) + 1), Image.LANCZOS)
    x0, y0 = (im.size[0] - 1200) // 2, (im.size[1] - 630) // 2
    im = im.crop((x0, y0, x0 + 1200, y0 + 630))
    im = ImageEnhance.Brightness(im).enhance(.55)
    ov = Image.new('RGBA', (1200, 630))
    d = ImageDraw.Draw(ov)
    for x in range(1200):
        a = int(235 * max(0, 1 - x / 900) ** 1.1)
        d.line([(x, 0), (x, 630)], fill=(8, 10, 9, a))
    im = Image.alpha_composite(im.convert('RGBA'), ov).convert('RGB')
    d = ImageDraw.Draw(im)
    d.rectangle([60, 70, 72, 150], fill=col)
    d.text((92, 70), tag, font=ImageFont.truetype(FONT, 34), fill=col)
    size = 78 if len(lines) == 2 else 70
    y = 190
    for ln in lines:
        d.text((60, y), ln, font=ImageFont.truetype(FONT, size), fill='#f0ede2')
        y += size + 10
    d.rectangle([60, 540, 1140, 544], fill=col)
    d.text((60, 562), sub, font=ImageFont.truetype(FONT2, 30), fill='#f0ede2')
    im.save(os.path.join(ROOT, 'assets', 'og', key + '.jpg'), quality=86)
print('og ok')
