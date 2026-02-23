# CLAUDE.md — Проект: yandex-kurier-eda.ru

## О проекте
Рекрутинговый лендинг для курьеров Яндекс Еды.
- **Оригинальный лендинг:** `/Users/maksimspiridonov/Desktop/deliveryV4/` (jQuery, HTML/CSS — для справки)
- **Next.js проект:** `/Users/maksimspiridonov/Desktop/delivery-v4-next/` ← рабочая папка

## Стек
- Next.js 16, React 19, TypeScript
- Tailwind CSS v4 (конфиг через `@theme {}` в `app/globals.css`, **не** через `tailwind.config.ts`)
- App Router

## Структура проекта
```
app/
  layout.tsx              — глобальный layout, подключает Header и Footer
  page.tsx                — главная страница (лендинг)
  globals.css             — @font-face + @theme (цвета, шрифты, breakpoints)
  so-skolki-let/page.tsx
  skolko-zarabatyvaet/page.tsx
  peshy-kurier/page.tsx
  na-avtomobile/page.tsx
  otzyvy/page.tsx
  vakansii/page.tsx
  kalkulator/page.tsx
  na-velosipede/page.tsx
  samozanyatiy/page.tsx
components/
  Header.tsx              — фиксированный хедер, мобильное меню (useState)
  Footer.tsx              — дисклеймеры, иконки VK и Telegram
  HeroBanner.tsx          — hero секция с фоновым изображением
  Calculator.tsx          — калькулятор дохода (use client, range inputs)
  FAQ.tsx                 — аккордеон (use client, useState)
  ClusterPage.tsx         — шаблон для кластерных страниц (статья + CTA + FAQ)
data/
  faq.ts                  — все FAQ массивы (mainFAQ, ageFAQ, earningsFAQ и др.)
  pages.ts                — метаданные кластерных страниц
public/
  fonts/                  — text-regular.woff, text-medium.woff, text-bold.woff, display-regular.woff
  img/                    — logo.svg, banner.jpg, banner2.webp, h1-h4.png, b3-b8.webp и др.
  favicon.png
```

## Цветовая схема
| Переменная | Hex | Использование |
|---|---|---|
| `#fee334` | жёлтый | primary CTA, акценты |
| `#e7cd21` | жёлтый hover | hover состояние кнопок |
| `#2b2b2b` | тёмный | основной текст, тёмные кнопки |
| `#edeff1` | светло-серый | фон карточек |
| `#f5f4f2` | светло-серый | фон калькулятора и FAQ |
| `#9e9b98` | серый | вторичный текст, сноски |
| `#333` | тёмный | фон футера |

## Шрифты Яндекса
```css
font-family: 'YS'  — text-regular.woff   (основной текст)
font-family: 'YSm' — text-medium.woff    (заголовки h3, подписи)
font-family: 'YSb' — text-bold.woff      (h1, h2, жирный текст)
font-family: 'YSc' — display-regular.woff (display заголовки)
```
В inline стилях используй: `style={{ fontFamily: 'YSb, Arial, sans-serif' }}`

## Брейкпоинты (кастомные в @theme)
- `sm`: 480px
- `md`: 767px
- `lg`: 920px
- Контейнер: `max-w-[920px] mx-auto px-4`

## CTA ссылка (не менять!)
```
https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank
```
Используется везде: в Hero, кнопках секций, FAQ, тегах. Константа `CTA_URL` объявлена в каждом файле где нужна.

## Ставки курьеров
| Транспорт | Ставка |
|---|---|
| Машина | 472 ₽/час |
| Велосипед | 412 ₽/час |
| Пеший | 320 ₽/час |

Бонус за привлечённого курьера: **5 000 ₽** за человека.

## Калькулятор (логика)
`Доход = rate[transport] × hours × days + people × 5000`

Defaults: hours=6, days=25, people=10, transport='1' (машина)

## Команды
```bash
npm run dev    # запуск на http://localhost:3000
npm run build  # проверка сборки
```

## Важные детали
- `'use client'` нужен для: Header, Calculator, FAQ (используют useState)
- Изображения через `<Image>` из `next/image` (не через `<img>`)
- Header имеет `z-index: 999999`, поэтому у страниц с контентом нужен `pt-20` или `pt-28`
- Страница `/kalkulator` — исключение: сначала рендерит `<Calculator>`, потом `<ClusterPage>`
- FAQ через `dangerouslySetInnerHTML` для HTML-ответов (жирный текст, переносы строк)

## Figma MCP

При работе с Figma всегда используй параметр `depth=1` для первого запроса.
Потом запрашивай отдельные секции по `nodeId`.
Никогда не запрашивай весь файл целиком без ограничения глубины.
