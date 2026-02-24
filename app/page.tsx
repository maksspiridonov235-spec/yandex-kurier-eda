import Image from 'next/image';
import Calculator from '@/components/Calculator';
import FAQ from '@/components/FAQ';
import { mainFAQ } from '@/data/faq';

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

const comparisonRows = [
  { label: 'Гибкий график работы', yandex: true, others: true },
  { label: 'Количество заказов в день', yandex: 'Неограниченно', others: 'До 10' },
  { label: 'Ежедневные выплаты', yandex: true, others: false },
  { label: 'Бонусы за новых курьеров', yandex: true, others: false },
  { label: 'Страхование курьера', yandex: true, others: false },
  { label: 'Юридическая поддержка', yandex: true, others: false },
];

const tags = [
  'подработка курьером',
  'работа пешим курьером',
  'работа курьером с частичной занятостью',
  'работа курьером для студентов',
  'подработка курьером в выходные',
  'работа курьером без опыта работы',
  'работа курьером с ежедневными выплатами',
  'работа курьером для мужчин',
  'работа курьером на велосипеде по доставке еды',
  'работа курьером со свободным графиком',
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[64px]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="flex flex-col desktop:flex-row items-center gap-12 py-20 desktop:py-28">
            {/* Left */}
            <div className="flex-1 max-w-[600px]">
              <h1
                className="text-[40px] desktop:text-[56px] leading-[1.1] mb-6 text-[#2b2b2b]"
                style={{ fontFamily: 'YSb, Arial, sans-serif' }}
              >
                Яндекс Курьер — регистрация
              </h1>
              <p
                className="text-[18px] leading-[1.6] text-[#555] mb-8"
                style={{ fontFamily: 'YS, Arial, sans-serif' }}
              >
                Официальная платформа для регистрации и найма курьеров по всей России
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={CTA_URL}
                  className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#000] rounded-[6px] px-8 py-4 text-[18px] transition-colors font-medium"
                  style={{ fontFamily: 'YSm, Arial, sans-serif' }}
                >
                  Регистрация
                </a>
                <a
                  href="#how"
                  className="inline-block border border-[rgba(2,8,7,0.2)] text-[#2b2b2b] hover:bg-[#f5f4f2] rounded-[6px] px-8 py-4 text-[18px] transition-colors"
                  style={{ fontFamily: 'YS, Arial, sans-serif' }}
                >
                  Подробнее
                </a>
              </div>
            </div>
            {/* Right – hero image */}
            <div className="flex-1 w-full max-w-[656px]">
              <Image
                src="/img/figma/hero-main.png"
                alt="Курьер Яндекс Еды"
                width={1312}
                height={738}
                className="w-full rounded-[12px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN: image left + content right ── */}
      <section className="py-[112px] bg-[#f2f2f2]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="flex flex-col desktop:flex-row items-center gap-16">
            {/* Image */}
            <div className="flex-1 w-full max-w-[600px]">
              <Image
                src="/img/figma/layout-220-img.png"
                alt="Работа курьером"
                width={616}
                height={640}
                className="w-full rounded-[12px] object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex-1">
              <h2
                className="text-[40px] desktop:text-[52px] leading-[1.2] mb-6 text-[#2b2b2b]"
                style={{ fontFamily: 'YSb, Arial, sans-serif' }}
              >
                Зарабатывайте на своих условиях
              </h2>
              <p
                className="text-[18px] leading-[1.6] text-[#555] mb-8"
                style={{ fontFamily: 'YS, Arial, sans-serif' }}
              >
                Гибкий график, быстрое подключение и ежедневные выплаты — всё, что нужно для комфортной работы курьером в Яндекс Еде.
              </p>
              <ul className="space-y-4">
                {[
                  'Начните уже завтра — регистрация занимает несколько минут',
                  'Работайте когда удобно — никаких фиксированных смен',
                  'Получайте выплаты каждый день на вашу карту',
                  'До 400 ₽ в час плюс чаевые от клиентов',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#fee334] flex items-center justify-center text-[12px] font-bold mt-0.5">✓</span>
                    <span
                      className="text-[16px] leading-[1.5] text-[#2b2b2b]"
                      style={{ fontFamily: 'YS, Arial, sans-serif' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={CTA_URL}
                  className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#000] rounded-[6px] px-8 py-4 text-[18px] transition-colors"
                  style={{ fontFamily: 'YSm, Arial, sans-serif' }}
                >
                  Стать курьером
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / WHAT WE OFFER (3 cards) ── */}
      <section className="py-[112px] bg-[#f2f2f2]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          {/* Section title */}
          <div className="text-center mb-16">
            <span
              className="text-[16px] font-semibold text-[#2b2b2b] uppercase tracking-wide mb-4 block"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Услуги
            </span>
            <h2
              className="text-[40px] desktop:text-[52px] leading-[1.2] text-[#2b2b2b] mb-4"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              Что предлагает Яндекс Курьер
            </h2>
            <p
              className="text-[18px] text-[#555] max-w-[600px] mx-auto"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Регистрация, найм и поддержка для всех
            </p>
          </div>
          {/* Cards */}
          <div className="flex flex-col desktop:flex-row gap-8">
            {[
              {
                tag: 'Регистрация',
                h: 'Быстрое подключение к платформе',
                p: 'Заполните анкету и начните работать',
                cta: 'Зарегистрироваться',
              },
              {
                tag: 'Доход',
                h: 'До 400 ₽ в час и ежедневные выплаты',
                p: 'Стабильный заработок без задержек',
                cta: 'Узнать больше',
              },
              {
                tag: 'Поддержка',
                h: 'Помощь 24/7 и страхование',
                p: 'Поддержка на каждом этапе работы',
                cta: 'Подробнее',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex-1 rounded-[8px] overflow-hidden border border-[rgba(2,8,7,0.15)] bg-[#f2f2f2]"
              >
                <div className="relative w-full h-[233px] bg-[#edeff1]">
                  <Image
                    src="/img/figma/service-card-1.png"
                    alt={card.h}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-8">
                  <span
                    className="text-[14px] font-semibold text-[#2b2b2b] uppercase tracking-wide mb-3 block"
                    style={{ fontFamily: 'YSm, Arial, sans-serif' }}
                  >
                    {card.tag}
                  </span>
                  <h3
                    className="text-[22px] leading-[1.3] text-[#2b2b2b] mb-3"
                    style={{ fontFamily: 'YSb, Arial, sans-serif' }}
                  >
                    {card.h}
                  </h3>
                  <p
                    className="text-[16px] leading-[1.5] text-[#555] mb-6"
                    style={{ fontFamily: 'YS, Arial, sans-serif' }}
                  >
                    {card.p}
                  </p>
                  <a
                    href={CTA_URL}
                    className="text-[16px] font-semibold text-[#2b2b2b] hover:opacity-70 transition-opacity underline underline-offset-2"
                    style={{ fontFamily: 'YSm, Arial, sans-serif' }}
                  >
                    {card.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO START (steps) ── */}
      <section id="how" className="py-[112px] bg-white">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="text-center mb-16">
            <span
              className="text-[16px] font-semibold text-[#2b2b2b] uppercase tracking-wide mb-4 block"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Процесс
            </span>
            <h2
              className="text-[40px] desktop:text-[52px] leading-[1.2] text-[#2b2b2b] mb-4"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              Как начать работать курьером в Яндекс
            </h2>
            <p
              className="text-[18px] text-[#555]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Три простых шага до первой доставки
            </p>
          </div>
          <div className="flex flex-col desktop:flex-row gap-8">
            {[
              { n: '01', h: 'Заполните анкету', p: 'Зарегистрируйтесь на сайте — это займёт не более 5 минут. Нужны только паспорт и телефон.' },
              { n: '02', h: 'Пройдите проверку', p: 'Мы проверим данные и подтвердим ваш аккаунт в течение 1 рабочего дня.' },
              { n: '03', h: 'Начните доставлять', p: 'Выходите на первую доставку уже на следующий день. Приложение поможет найти заказы рядом.' },
            ].map((step, i) => (
              <div key={i} className="flex-1 p-8 border border-[rgba(2,8,7,0.1)] rounded-[8px] bg-[#f5f4f2]">
                <span
                  className="text-[48px] font-bold text-[#fee334] leading-none mb-4 block"
                  style={{ fontFamily: 'YSb, Arial, sans-serif' }}
                >
                  {step.n}
                </span>
                <h3
                  className="text-[24px] leading-[1.3] text-[#2b2b2b] mb-3"
                  style={{ fontFamily: 'YSb, Arial, sans-serif' }}
                >
                  {step.h}
                </h3>
                <p
                  className="text-[16px] leading-[1.5] text-[#555]"
                  style={{ fontFamily: 'YS, Arial, sans-serif' }}
                >
                  {step.p}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={CTA_URL}
              className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#000] rounded-[6px] px-[85px] py-[14px] text-[18px] transition-colors"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Начать работу
            </a>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN: content left + image right ── */}
      <section className="py-[112px] bg-[#f2f2f2]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="flex flex-col desktop:flex-row items-center gap-16">
            {/* Content */}
            <div className="flex-1">
              <h2
                className="text-[40px] desktop:text-[52px] leading-[1.2] mb-6 text-[#2b2b2b]"
                style={{ fontFamily: 'YSb, Arial, sans-serif' }}
              >
                Работайте на любом транспорте
              </h2>
              <p
                className="text-[18px] leading-[1.6] text-[#555] mb-8"
                style={{ fontFamily: 'YS, Arial, sans-serif' }}
              >
                Выбирайте удобный способ передвижения и зарабатывайте больше.
              </p>
              <div className="space-y-6">
                {[
                  { icon: '🚗', title: 'Автомобиль', rate: '472 ₽/час', desc: 'Максимальный доход — крупные заказы и большой радиус доставки' },
                  { icon: '🚲', title: 'Велосипед', rate: '412 ₽/час', desc: 'Быстрая доставка в центре города без пробок' },
                  { icon: '🚶', title: 'Пеший', rate: '320 ₽/час', desc: 'Доставка в пешей доступности, не нужен транспорт' },
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-[8px] border border-[rgba(2,8,7,0.1)]">
                    <span className="text-[32px] shrink-0">{t.icon}</span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[18px] font-semibold text-[#2b2b2b]" style={{ fontFamily: 'YSb, Arial, sans-serif' }}>{t.title}</span>
                        <span className="bg-[#fee334] text-[#000] text-[13px] font-medium px-2 py-0.5 rounded-full" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>{t.rate}</span>
                      </div>
                      <p className="text-[15px] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="flex-1 w-full max-w-[600px]">
              <Image
                src="/img/figma/layout-220-img.png"
                alt="Курьер на транспорте"
                width={616}
                height={640}
                className="w-full rounded-[12px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VARIANTS / FORMATS (masonry cards) ── */}
      <section className="py-[112px] bg-white">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="text-center mb-16">
            <span
              className="text-[16px] font-semibold text-[#2b2b2b] uppercase tracking-wide mb-4 block"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Варианты
            </span>
            <h2
              className="text-[40px] desktop:text-[52px] leading-[1.2] text-[#2b2b2b] mb-4"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              Выберите свой путь работы
            </h2>
            <p
              className="text-[18px] text-[#555]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Каждый формат имеет свои преимущества
            </p>
          </div>
          <div className="flex flex-col desktop:flex-row gap-8">
            {[
              [
                { h: 'Полная занятость', p: 'Работайте 40+ часов в неделю и зарабатывайте максимум. Подходит тем, кто ищет стабильный основной доход.', tall: true },
                { h: 'Частичная занятость', p: 'Несколько часов в день или только в выходные — идеально для подработки.', tall: false },
              ],
              [
                { h: 'Студентам', p: 'Удобно совмещать с учёбой: выходите на смену между парами или по вечерам.', tall: false },
                { h: 'Самозанятым', p: 'Оформите статус самозанятого и работайте официально с налоговой отчётностью через приложение.', tall: true },
              ],
              [
                { h: 'Командная работа', p: 'Привлекайте знакомых — получайте 5 000 ₽ за каждого нового курьера.', tall: true },
                { h: 'Сезонная работа', p: 'Выходите в пиковые сезоны — праздники, лето, высокий спрос.', tall: false },
              ],
            ].map((col, ci) => (
              <div key={ci} className="flex-1 flex flex-col gap-8">
                {col.map((card, i) => (
                  <div
                    key={i}
                    className={`border border-[rgba(2,8,7,0.15)] rounded-[8px] bg-white p-8 ${card.tall ? 'flex-[2]' : 'flex-1'}`}
                  >
                    <h3
                      className="text-[22px] leading-[1.3] text-[#2b2b2b] mb-3"
                      style={{ fontFamily: 'YSb, Arial, sans-serif' }}
                    >
                      {card.h}
                    </h3>
                    <p
                      className="text-[16px] leading-[1.5] text-[#555]"
                      style={{ fontFamily: 'YS, Arial, sans-serif' }}
                    >
                      {card.p}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ── */}
      <section className="py-[112px] bg-[#f2f2f2]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="bg-white rounded-[8px] p-12 text-center">
            <h2
              className="text-[40px] desktop:text-[52px] leading-[1.2] text-[#2b2b2b] mb-6"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              Начните зарабатывать сегодня
            </h2>
            <p
              className="text-[18px] text-[#555] mb-8 max-w-[500px] mx-auto"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Подключитесь к официальной платформе Яндекс Курьер прямо сейчас
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CTA_URL}
                className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#000] rounded-[6px] px-[85px] py-[14px] text-[18px] transition-colors"
                style={{ fontFamily: 'YSm, Arial, sans-serif' }}
              >
                Зарегистрироваться
              </a>
              <a
                href="#how"
                className="inline-block border border-[rgba(2,8,7,0.15)] text-[#2b2b2b] hover:bg-[#f5f4f2] rounded-[6px] px-[85px] py-[14px] text-[18px] transition-colors"
                style={{ fontFamily: 'YS, Arial, sans-serif' }}
              >
                Подробнее
              </a>
            </div>
          </div>
          {/* CTA background image below */}
          <div className="mt-8 rounded-[8px] overflow-hidden">
            <Image
              src="/img/figma/cta-bg.png"
              alt="Курьер"
              width={1312}
              height={500}
              className="w-full object-cover max-h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <Calculator />

      {/* ── FAQ ── */}
      <section className="py-[112px] bg-[#f2f2f2]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="flex flex-col desktop:flex-row gap-16">
            {/* Left: title */}
            <div className="desktop:w-[380px] shrink-0">
              <h2
                className="text-[40px] desktop:text-[52px] leading-[1.2] text-[#2b2b2b] mb-4"
                style={{ fontFamily: 'YSb, Arial, sans-serif' }}
              >
                Вопросы
              </h2>
              <p className="text-[18px] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Ответы на главные вопросы о работе
              </p>
            </div>
            {/* Right: accordion */}
            <div className="flex-1">
              <div className="grid desktop:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { q: 'Как зарегистрироваться курьером?', a: 'Перейдите на официальный сайт Яндекс Курьер и заполните форму регистрации. Потребуются паспорт и документы, подтверждающие личность. Процесс занимает несколько минут.' },
                  { q: 'Какой минимальный возраст для работы?', a: 'Курьеру должно быть не менее 18 лет. Это требование закона для работы с доставкой. Проверка возраста происходит при верификации документов.' },
                  { q: 'Как часто выплачивается заработок?', a: 'Деньги поступают на счёт ежедневно. Система автоматически рассчитывает доход за выполненные заказы. Вывести средства можно в любой момент.' },
                  { q: 'Нужен ли собственный транспорт?', a: 'Нет, вы можете работать пешим курьером или взять транспорт в аренду у партнёров сервиса со скидкой.' },
                  { q: 'Как получить бонус за привлечение?', a: 'Поделитесь своей реферальной ссылкой с другом. Когда он начнёт работать, вы получите 5 000 ₽ на счёт.' },
                  { q: 'Есть ли страхование?', a: 'Да, прямые самозанятые курьеры застрахованы во время доставок. Дополнительная страховка доступна при выполнении определённого числа заказов.' },
                ].map((item, i) => (
                  <div key={i}>
                    <h3
                      className="text-[18px] font-semibold text-[#2b2b2b] mb-2"
                      style={{ fontFamily: 'YSb, Arial, sans-serif' }}
                    >
                      {item.q}
                    </h3>
                    <p
                      className="text-[16px] leading-[1.5] text-[#555]"
                      style={{ fontFamily: 'YS, Arial, sans-serif' }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a
                  href={CTA_URL}
                  className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#000] rounded-[6px] px-[85px] py-[14px] text-[18px] transition-colors"
                  style={{ fontFamily: 'YSm, Arial, sans-serif' }}
                >
                  Стать курьером
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-[112px] bg-[#f2f2f2]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="text-center mb-16">
            <h2
              className="text-[40px] desktop:text-[52px] leading-[1.2] text-[#2b2b2b] mb-4"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              Отзывы курьеров
            </h2>
            <p
              className="text-[18px] text-[#555]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Что говорят те, кто уже работает
            </p>
          </div>
          <div className="flex flex-col desktop:flex-row gap-8">
            {[
              {
                quote: '"Работаю курьером три месяца, доход стабильный и выплаты приходят вовремя."',
                name: 'Иван Петров',
                role: 'Курьер, Москва',
                avatar: '/img/figma/avatar-1.png',
              },
              {
                quote: '"Удобно работать в своём графике, никаких лишних условий и требований."',
                name: 'Алексей Смирнов',
                role: 'Курьер, Санкт-Петербург',
                avatar: '/img/figma/avatar-2.png',
              },
              {
                quote: '"Поддержка помогает быстро, платформа работает без сбоев."',
                name: 'Дмитрий Козлов',
                role: 'Курьер, Екатеринбург',
                avatar: '/img/figma/avatar-3.png',
              },
            ].map((t, i) => (
              <div key={i} className="flex-1 bg-[#f2f2f2] border border-[rgba(2,8,7,0.15)] rounded-[8px] p-8 flex flex-col gap-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} className="text-[#fee334] text-[20px]">★</span>
                  ))}
                </div>
                <p
                  className="text-[18px] leading-[1.5] text-[#2b2b2b] flex-1"
                  style={{ fontFamily: 'YS, Arial, sans-serif' }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12 shrink-0"
                  />
                  <div>
                    <p className="text-[16px] font-semibold text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>{t.name}</p>
                    <p className="text-[14px] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-[112px] bg-white">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="text-center mb-16">
            <h2
              className="text-[40px] desktop:text-[52px] leading-[1.2] text-[#2b2b2b] mb-4"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              Форматы работы в Яндекс Курьер
            </h2>
            <p
              className="text-[18px] text-[#555]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Выберите подходящий вариант доставки
            </p>
          </div>
          <div className="border border-[rgba(2,8,7,0.15)] rounded-[8px] overflow-hidden">
            {/* Header row */}
            <div className="flex items-center bg-white border-b border-[rgba(2,8,7,0.15)]">
              <div className="w-[440px] shrink-0 px-0 py-6 pr-6">
                <span className="text-[18px] font-bold text-[#2b2b2b]" style={{ fontFamily: 'YSb, Arial, sans-serif' }}>Возможности</span>
              </div>
              <div className="flex-1 px-6 py-6 text-center bg-white border-l border-[rgba(2,8,7,0.15)]">
                <span className="text-[18px] font-bold text-[#2b2b2b]" style={{ fontFamily: 'YSb, Arial, sans-serif' }}>Яндекс</span>
                <p className="text-[14px] text-[#555] mt-1" style={{ fontFamily: 'YS, Arial, sans-serif' }}>Официальная платформа</p>
              </div>
              <div className="flex-1 px-6 py-6 text-center border-l border-[rgba(2,8,7,0.15)]">
                <span className="text-[18px] font-bold text-[#2b2b2b]" style={{ fontFamily: 'YSb, Arial, sans-serif' }}>Другие</span>
                <p className="text-[14px] text-[#555] mt-1" style={{ fontFamily: 'YS, Arial, sans-serif' }}>Прочие сервисы</p>
              </div>
            </div>
            {/* Data rows */}
            {comparisonRows.map((row, i) => (
              <div key={i} className="flex items-center border-b border-[rgba(2,8,7,0.15)] last:border-b-0">
                <div className="w-[440px] shrink-0 py-4 pr-6">
                  <span className="text-[16px] text-[#2b2b2b]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>{row.label}</span>
                </div>
                <div className="flex-1 py-4 px-6 text-center bg-white border-l border-[rgba(2,8,7,0.15)]">
                  {typeof row.yandex === 'boolean' ? (
                    row.yandex
                      ? <span className="text-[20px]">✓</span>
                      : <span className="text-[20px] text-[#999]">—</span>
                  ) : (
                    <span className="text-[15px] font-semibold text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>{row.yandex}</span>
                  )}
                </div>
                <div className="flex-1 py-4 px-6 text-center border-l border-[rgba(2,8,7,0.15)]">
                  {typeof row.others === 'boolean' ? (
                    row.others
                      ? <span className="text-[20px]">✓</span>
                      : <span className="text-[20px] text-[#999]">—</span>
                  ) : (
                    <span className="text-[15px] font-semibold text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={CTA_URL}
              className="inline-block border border-[rgba(2,8,7,0.15)] text-[#2b2b2b] hover:bg-[#f5f4f2] rounded-[6px] px-[85px] py-[14px] text-[18px] transition-colors"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Подробнее
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN FAQ (accordion) ── */}
      <FAQ items={mainFAQ} title="Остались вопросы?" />

      {/* ── TAGS ── */}
      <section className="py-[50px]">
        <div className="max-w-[1312px] mx-auto px-4 desktop:px-16">
          <div className="flex flex-wrap items-center gap-[6px]">
            {tags.map((tag, i) => (
              <a
                key={i}
                href={CTA_URL}
                className="bg-[#fee334] rounded-[30px] px-[12px] py-[7px] text-[13px] text-[#000] hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'YS, Arial, sans-serif', display: 'inline-block', textAlign: 'center' }}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
