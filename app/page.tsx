import Image from 'next/image';
import Calculator from '@/components/Calculator';

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

/* ─── Shared styles ─── */
const S = {
  section: (bg: string): React.CSSProperties => ({
    background: bg,
    padding: '112px 64px',
  }),
  container: (): React.CSSProperties => ({
    maxWidth: '1312px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
  }),
  tagline: (): React.CSSProperties => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    color: '#020807',
    lineHeight: '1.5',
  }),
  h1: (): React.CSSProperties => ({
    fontFamily: 'Urbanist, sans-serif',
    fontSize: '72px',
    fontWeight: 500,
    color: '#020807',
    lineHeight: '1.2',
    letterSpacing: '-0.72px',
    textAlign: 'center',
  }),
  h2: (align: 'center' | 'left' = 'center'): React.CSSProperties => ({
    fontFamily: 'Urbanist, sans-serif',
    fontSize: '52px',
    fontWeight: 500,
    color: '#020807',
    lineHeight: '1.2',
    letterSpacing: '-0.52px',
    textAlign: align,
  }),
  h4: (): React.CSSProperties => ({
    fontFamily: 'Urbanist, sans-serif',
    fontSize: '36px',
    fontWeight: 500,
    color: '#020807',
    lineHeight: '1.3',
    letterSpacing: '-0.36px',
  }),
  h5: (): React.CSSProperties => ({
    fontFamily: 'Urbanist, sans-serif',
    fontSize: '28px',
    fontWeight: 500,
    color: '#020807',
    lineHeight: '1.4',
    letterSpacing: '-0.28px',
  }),
  h6: (): React.CSSProperties => ({
    fontFamily: 'Urbanist, sans-serif',
    fontSize: '22px',
    fontWeight: 500,
    color: '#020807',
    lineHeight: '1.4',
    letterSpacing: '-0.22px',
  }),
  textMd: (align: 'center' | 'left' = 'center'): React.CSSProperties => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    color: '#020807',
    lineHeight: '1.5',
    textAlign: align,
  }),
  textReg: (): React.CSSProperties => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    color: '#020807',
    lineHeight: '1.5',
  }),
  btnPrimary: (): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    color: '#020807',
    background: '#FFCC00',
    border: '1px solid #FFCC00',
    borderRadius: '6px',
    padding: '6px 12px',
    textDecoration: 'none',
    cursor: 'pointer',
    lineHeight: '1.5',
  }),
  btnSecondary: (): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    color: '#020807',
    background: 'transparent',
    border: '1px solid rgba(2,8,7,0.15)',
    borderRadius: '6px',
    padding: '6px 12px',
    textDecoration: 'none',
    cursor: 'pointer',
    lineHeight: '1.5',
  }),
  btnLink: (): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    color: '#020807',
    background: 'transparent',
    border: 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: 0,
    lineHeight: '1.5',
  }),
  card: (): React.CSSProperties => ({
    border: '1px solid rgba(2,8,7,0.15)',
    borderRadius: '8px',
    background: '#F2F2F2',
    overflow: 'hidden',
  }),
};

/* ─── Section Title component helper ─── */
function SectionTitle({ tagline, heading, text, align = 'center' }: {
  tagline?: string;
  heading: string;
  text?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', gap: '16px' }}>
      {tagline && <span style={S.tagline()}>{tagline}</span>}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', gap: '24px', width: '100%' }}>
        <h2 style={S.h2(align)}>{heading}</h2>
        {text && <p style={S.textMd(align)}>{text}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HEADER / HERO (1:837) ── */}
      {/* bg white, padding 112px 64px, center layout */}
      <section style={{ ...S.section('#FFFFFF'), paddingTop: `calc(112px + 72px)` }}>
        <div style={{ ...S.container(), alignItems: 'center' }}>
          {/* Content: h1 + text + buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
              <h1 style={S.h1()}>Яндекс курьер регистрация</h1>
              <p style={S.textMd('center')}>
                Официальная платформа для регистрации и найма курьеров по всей России. Подключитесь напрямую и начните зарабатывать уже сегодня.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href={CTA_URL} style={S.btnPrimary()}>Зарегистрироваться</a>
              <a href="#how" style={S.btnSecondary()}>Подробнее</a>
            </div>
          </div>
          {/* Hero image */}
          <div style={{ width: '100%', height: '720px', borderRadius: '8px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
            <Image
              src="/img/figma/hero-main.png"
              alt="Яндекс курьер"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── LAYOUT 220 (1:847): image left + list right ── */}
      {/* bg #F2F2F2, padding 112px 64px */}
      <section style={S.section('#F2F2F2')}>
        <div style={{ maxWidth: '1312px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '80px', alignItems: 'stretch' }}>
            {/* Image */}
            <div style={{ flex: 1, height: '640px', borderRadius: '8px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
              <Image
                src="/img/figma/layout-220-img.png"
                alt="Работа курьером"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* List items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '8px 0' }}>
                {/* Row 1 */}
                <div style={{ display: 'flex', gap: '24px' }}>
                  {[
                    { icon: '📋', h: 'Быстрая регистрация', p: 'Пройдите простую регистрацию на официальном сайте Яндекс Курьер за несколько минут.' },
                    { icon: '🔗', h: 'Прямое подключение', p: 'Подключитесь к сервису напрямую без посредников и лишних условий.' },
                  ].map((item) => (
                    <div key={item.h} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', background: '#FFCC00', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <h3 style={S.h5()}>{item.h}</h3>
                      <p style={S.textReg()}>{item.p}</p>
                    </div>
                  ))}
                </div>
                {/* Row 2 */}
                <div style={{ display: 'flex', gap: '24px' }}>
                  {[
                    { icon: '📊', h: 'Личный кабинет', p: 'Управляйте заказами и доходом через удобный личный кабинет с быстрым входом.' },
                    { icon: '🚚', h: 'Найм курьеров', p: 'Работодатели могут нанимать курьеров через платформу Яндекс с полной поддержкой.' },
                  ].map((item) => (
                    <div key={item.h} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', background: '#FFCC00', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <h3 style={S.h5()}>{item.h}</h3>
                      <p style={S.textReg()}>{item.p}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Button */}
              <div>
                <a href={CTA_URL} style={S.btnSecondary()}>Начать</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LAYOUT 369 (1:883): Преимущества — 3 cards ── */}
      {/* bg #F2F2F2 */}
      <section style={S.section('#F2F2F2')}>
        <div style={{ ...S.container(), alignItems: 'center' }}>
          <SectionTitle
            tagline="Преимущества"
            heading="Почему выбирают Яндекс Курьер"
            text="Официальная платформа с прозрачными условиями работы для всех."
          />
          {/* Cards row */}
          <div style={{ display: 'flex', gap: '32px', width: '100%', alignItems: 'stretch' }}>
            {/* Big card left (640px fixed in figma, flex in our layout) */}
            <div style={{ ...S.card(), flex: '0 0 auto', width: '640px', display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1, background: '#FFFFFF', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={S.tagline()}>Надёжность</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={S.h5()}>Поддержка от крупной компании Яндекс</h3>
                    <p style={S.textReg()}>Гарантированная защита интересов курьеров и клиентов.</p>
                  </div>
                </div>
                <a href={CTA_URL} style={S.btnLink()}>Подробнее →</a>
              </div>
              <div style={{ width: '233px', flexShrink: 0, position: 'relative' }}>
                <Image src="/img/figma/card-big.png" alt="Надёжность" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            {/* Right column: 2 cards */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { tag: 'Гибкость', h: 'Выбирайте удобный формат работы', p: 'Работайте пешком, на авто, велосипеде или как самозанятый.' },
                { tag: 'Доход', h: 'Прозрачный расчёт заработка', p: 'Используйте калькулятор для расчёта потенциального дохода в любой момент.' },
              ].map((card) => (
                <div key={card.tag} style={{ ...S.card(), flex: 1 }}>
                  <div style={{ height: '171px', position: 'relative' }}>
                    <Image src="/img/figma/service-card-1.png" alt={card.h} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span style={S.tagline()}>{card.tag}</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <h3 style={S.h5()}>{card.h}</h3>
                        <p style={S.textReg()}>{card.p}</p>
                      </div>
                    </div>
                    <a href={CTA_URL} style={S.btnLink()}>Подробнее →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LAYOUT 407 (1:926): Процесс — tabs with steps ── */}
      {/* bg white */}
      <section id="how" style={S.section('#FFFFFF')}>
        <div style={{ ...S.container(), alignItems: 'center' }}>
          <SectionTitle
            tagline="Процесс"
            heading="Как начать работать курьером в Яндекс"
            text="Три простых шага от регистрации до первого заказа. Всё делается через официальный сайт Яндекс Курьер."
          />
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {/* Steps image */}
            <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <Image src="/img/figma/steps-img.png" alt="Шаги регистрации" fill style={{ objectFit: 'cover' }} />
            </div>
            {/* Tabs */}
            <div style={{ display: 'flex', width: '100%' }}>
              {[
                { h: 'Зарегистрируйтесь онлайн', p: 'Заполните форму на сайте Яндекс Курьер и пройдите верификацию документов за несколько минут.', active: true },
                { h: 'Выберите формат работы', p: 'Определитесь с удобным способом доставки: пешком, на авто, велосипеде или как самозанятый.', active: false },
                { h: 'Начните принимать заказы', p: 'Получите доступ к личному кабинету и начните выполнять заказы с первого дня.', active: false },
              ].map((tab, i) => (
                <div key={i} style={{
                  flex: 1, padding: '16px 24px',
                  borderTop: tab.active ? '1px solid #020807' : '1px solid rgba(2,8,7,0.1)',
                  display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', textAlign: 'center',
                }}>
                  <h3 style={{ ...S.h6(), textAlign: 'center' }}>{tab.h}</h3>
                  <p style={{ ...S.textReg(), textAlign: 'center' }}>{tab.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LAYOUT 19 (1:949): content left + image right ── */}
      {/* bg white */}
      <section style={S.section('#FFFFFF')}>
        <div style={{ maxWidth: '1312px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '80px', alignItems: 'stretch' }}>
            {/* Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Section title */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span style={S.tagline()}>Калькулятор</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <h2 style={S.h2('left')}>Рассчитайте свой потенциальный доход</h2>
                    <p style={S.textMd('left')}>
                      Используйте интерактивный калькулятор для расчёта заработка в зависимости от выбранного формата работы.
                    </p>
                  </div>
                </div>
                {/* List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Работа пешком', 'Доставка на автомобиле', 'Доставка на велосипеде'].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#020807', flexShrink: 0 }} />
                      <p style={S.textReg()}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <a href={CTA_URL} style={S.btnSecondary()}>Подробнее</a>
              </div>
            </div>
            {/* Image */}
            <div style={{ flex: 1, height: '640px', borderRadius: '8px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
              <Image
                src="/img/figma/layout-220-img.png"
                alt="Калькулятор дохода"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LAYOUT 395 (1:970): Services — 3 cards ── */}
      {/* bg #F2F2F2 */}
      <section style={S.section('#F2F2F2')}>
        <div style={{ ...S.container(), alignItems: 'center' }}>
          <SectionTitle
            tagline="Услуги"
            heading="Что предлагает Яндекс Курьер"
            text="Регистрация, найм и поддержка для всех."
          />
          {/* Cards */}
          <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
            {[
              { tag: 'Возраст', img: '/img/figma/service-card-1.png', h: 'Сколько лет нужно курьеру', p: 'Узнайте требования к возрасту', href: '/so-skolki-let' },
              { tag: 'Заработок', img: '/img/figma/service-card-1.png', h: 'Сколько зарабатывает курьер', p: 'Прозрачный расчёт дохода', href: '/skolko-zarabatyvaet' },
              { tag: 'Формат', img: '/img/figma/service-card-1.png', h: 'Выберите свой путь работы', p: 'Пеший, авто или велосипед', href: '/peshy-kurier' },
            ].map((card) => (
              <div key={card.tag} style={{ ...S.card(), flex: 1, background: '#F2F2F2' }}>
                <div style={{ height: '233px', position: 'relative' }}>
                  <Image src={card.img} alt={card.h} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ background: '#FFFFFF', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={S.tagline()}>{card.tag}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <h3 style={S.h4()}>{card.h}</h3>
                      <p style={S.textReg()}>{card.p}</p>
                    </div>
                  </div>
                  <a href={card.href} style={S.btnLink()}>Подробнее →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 31 (1:1013): Начните зарабатывать ── */}
      {/* bg #F2F2F2 */}
      <section style={S.section('#F2F2F2')}>
        <div style={{ maxWidth: '1312px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', background: '#FFFFFF', padding: '80px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
              <h2 style={S.h2()}>Начните зарабатывать сегодня</h2>
              <p style={S.textMd()}>Подключитесь к официальной платформе Яндекс Курьер прямо сейчас</p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href={CTA_URL} style={S.btnPrimary()}>Зарегистрироваться</a>
              <a href="#how" style={S.btnSecondary()}>Подробнее</a>
            </div>
          </div>
          {/* CTA image below */}
          <div style={{ marginTop: '32px', height: '400px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <Image src="/img/figma/cta-bg.png" alt="Стать курьером" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── CALCULATOR embedded ── */}
      <Calculator />

      {/* ── LAYOUT 398 (1:1023): Варианты — masonry cards ── */}
      {/* bg white */}
      <section style={S.section('#FFFFFF')}>
        <div style={{ ...S.container(), alignItems: 'center' }}>
          <SectionTitle
            tagline="Варианты"
            heading="Выберите свой путь работы"
            text="Каждый формат имеет свои преимущества"
          />
          <div style={{ display: 'flex', gap: '32px', width: '100%', alignItems: 'flex-start' }}>
            {[
              [
                { h: 'Полная занятость', p: 'Работайте 40+ часов в неделю и зарабатывайте максимум. Подходит тем, кто ищет основной стабильный доход.', tall: true },
                { h: 'Частичная занятость', p: 'Несколько часов в день или только в выходные — идеально для подработки.', tall: false },
              ],
              [
                { h: 'Студентам', p: 'Удобно совмещать с учёбой: выходите на смену между парами или по вечерам.', tall: false },
                { h: 'Самозанятым', p: 'Оформите статус самозанятого и работайте официально с налоговой отчётностью.', tall: true },
              ],
              [
                { h: 'Командная работа', p: 'Привлекайте знакомых — получайте бонус за каждого нового курьера.', tall: true },
                { h: 'Сезонная работа', p: 'Выходите в пиковые периоды — праздники, высокий сезон, выходные.', tall: false },
              ],
            ].map((col, ci) => (
              <div key={ci} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {col.map((card) => (
                  <div key={card.h} style={{
                    border: '1px solid rgba(2,8,7,0.15)', borderRadius: '8px',
                    background: '#FFFFFF', padding: '32px',
                    minHeight: card.tall ? '280px' : '180px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  }}>
                    <h3 style={{ ...S.h5(), marginBottom: '16px' }}>{card.h}</h3>
                    <p style={S.textReg()}>{card.p}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ 13 (1:1096) ── */}
      {/* bg #F2F2F2 */}
      <section style={S.section('#F2F2F2')}>
        <div style={{ maxWidth: '1312px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={S.h2('left')}>Вопросы</h2>
            <p style={S.textMd('left')}>Ответы на главные вопросы о работе</p>
          </div>
          {/* Questions grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {/* Row 1 */}
            <div style={{ display: 'flex', gap: '48px' }}>
              {[
                { q: 'Как зарегистрироваться курьером?', a: 'Перейдите на официальный сайт Яндекс Курьер и заполните форму регистрации. Потребуются паспорт и документы, подтверждающие личность. Процесс занимает несколько минут.' },
                { q: 'Какой минимальный возраст для работы?', a: 'Курьеру должно быть не менее 18 лет. Это требование закона для работы с доставкой. Проверка возраста происходит при верификации документов.' },
                { q: 'Как часто выплачивается заработок?', a: 'Деньги поступают на счёт еженедельно. Система автоматически рассчитывает доход за выполненные заказы. Вывести средства можно в любой момент.' },
              ].map((item) => (
                <div key={item.q} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: '#020807', lineHeight: '1.5' }}>{item.q}</h3>
                  <p style={S.textReg()}>{item.a}</p>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div style={{ display: 'flex', gap: '48px' }}>
              {[
                { q: 'Нужен ли собственный транспорт?', a: 'Нет, можно работать пешком. Яндекс Курьер предлагает несколько форматов доставки. Выбирайте удобный вам способ работы.' },
                { q: 'Как войти в личный кабинет?', a: 'Используйте номер телефона и пароль для входа на сайт. Личный кабинет доступен 24/7 через браузер. Там видны все заказы и заработки.' },
                { q: 'Есть ли техническая поддержка?', a: 'Да, служба поддержки работает круглосуточно. Обратитесь через чат в приложении или на сайте. Специалисты помогут решить любую проблему.' },
              ].map((item) => (
                <div key={item.q} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: '#020807', lineHeight: '1.5' }}>{item.q}</h3>
                  <p style={S.textReg()}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA at bottom */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <h3 style={S.h4()}>Остались вопросы?</h3>
              <p style={S.textMd('left')}>Свяжитесь с нашей командой поддержки</p>
            </div>
            <div>
              <a href={CTA_URL} style={S.btnSecondary()}>Связаться</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS 17 (1:1128) ── */}
      {/* bg #F2F2F2 */}
      <section style={S.section('#F2F2F2')}>
        <div style={{ ...S.container(), alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
            <h2 style={S.h2()}>Отзывы курьеров</h2>
            <p style={S.textMd()}>Что говорят те, кто уже работает</p>
          </div>
          <div style={{ display: 'flex', gap: '32px', width: '100%', alignItems: 'stretch' }}>
            {[
              { quote: '"Работаю курьером три месяца, доход стабильный и выплаты приходят вовремя."', name: 'Иван Петров', role: 'Курьер, Москва', avatar: '/img/figma/avatar-1.png' },
              { quote: '"Удобно работать в своём графике, никаких лишних условий и требований."', name: 'Алексей Смирнов', role: 'Курьер, Санкт-Петербург', avatar: '/img/figma/avatar-2.png' },
              { quote: '"Поддержка помогает быстро, платформа работает без сбоев."', name: 'Дмитрий Козлов', role: 'Курьер, Екатеринбург', avatar: '/img/figma/avatar-3.png' },
            ].map((t) => (
              <div key={t.name} style={{
                flex: 1, background: '#F2F2F2', border: '1px solid rgba(2,8,7,0.15)',
                borderRadius: '8px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px',
              }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', background: 'transparent' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFCC00">
                      <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.32L10 13.27l-4.78 2.52.91-5.32L2.27 6.62l5.34-.78z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ ...S.textMd('left'), flex: 1 }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                    <Image src={t.avatar} alt={t.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#020807' }}>{t.name}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, color: '#020807' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON 1 (1:1177) ── */}
      {/* bg white */}
      <section style={S.section('#FFFFFF')}>
        <div style={{ ...S.container(), alignItems: 'center' }}>
          <SectionTitle
            heading="Форматы работы в Яндекс Курьер"
            text="Выберите подходящий вариант доставки"
          />
          <div style={{ width: '100%' }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(2,8,7,0.15)' }}>
              <div style={{ width: '440px', flexShrink: 0, padding: '24px 24px 24px 0' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, color: '#020807', lineHeight: '1.5' }}>Возможности</span>
              </div>
              <div style={{ flex: 1, padding: '24px', textAlign: 'center', background: '#FFFFFF', borderLeft: '1px solid rgba(2,8,7,0.15)' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, color: '#020807' }}>Яндекс</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#020807', opacity: 0.6 }}>Официальная платформа</div>
              </div>
              <div style={{ flex: 1, padding: '24px', textAlign: 'center', borderLeft: '1px solid rgba(2,8,7,0.15)' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, color: '#020807' }}>Другие</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#020807', opacity: 0.6 }}>Прочие сервисы</div>
              </div>
            </div>
            {/* Data rows */}
            {[
              { label: 'Гибкий график работы', yandex: true, others: true },
              { label: 'Количество заказов в день', yandex: 'Неограниченно', others: 'До 10' },
              { label: 'Ежедневные выплаты', yandex: true, others: false },
              { label: 'Бонусы за новых курьеров', yandex: true, others: false },
              { label: 'Страхование курьера', yandex: true, others: false },
              { label: 'Юридическая поддержка', yandex: true, others: false },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(2,8,7,0.15)' }}>
                <div style={{ width: '440px', flexShrink: 0, padding: '16px 24px 16px 0' }}>
                  <span style={S.textReg()}>{row.label}</span>
                </div>
                <div style={{ flex: 1, padding: '16px 24px', textAlign: 'center', background: '#FFFFFF', borderLeft: '1px solid rgba(2,8,7,0.15)' }}>
                  {typeof row.yandex === 'boolean'
                    ? (row.yandex ? <span style={{ fontSize: '20px', color: '#020807' }}>✓</span> : <span style={{ fontSize: '20px', color: 'rgba(2,8,7,0.3)' }}>—</span>)
                    : <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#020807' }}>{row.yandex}</span>
                  }
                </div>
                <div style={{ flex: 1, padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid rgba(2,8,7,0.15)' }}>
                  {typeof row.others === 'boolean'
                    ? (row.others ? <span style={{ fontSize: '20px', color: '#020807' }}>✓</span> : <span style={{ fontSize: '20px', color: 'rgba(2,8,7,0.3)' }}>—</span>)
                    : <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, color: '#020807' }}>{row.others}</span>
                  }
                </div>
              </div>
            ))}
          </div>
          <div>
            <a href={CTA_URL} style={S.btnSecondary()}>Подробнее</a>
          </div>
        </div>
      </section>
    </>
  );
}
