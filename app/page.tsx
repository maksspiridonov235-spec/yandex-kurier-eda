import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import Calculator from '@/components/Calculator';
import FAQ from '@/components/FAQ';
import { mainFAQ } from '@/data/faq';

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

const steps = [
  { img: '/img/h1.png', alt: 'Шаг 1' },
  { img: '/img/h2.png', alt: 'Шаг 2' },
  { img: '/img/h3.png', alt: 'Шаг 3' },
  { img: '/img/h4.png', alt: 'Шаг 4' },
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
      {/* Hero */}
      <HeroBanner />

      {/* Benefits section */}
      <section className="py-12 desktop:py-16">
        <div className="max-w-[920px] mx-auto px-4">
          <h2
            className="text-[40px] leading-[44px] mb-8 mt-14"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Это вам понравится
          </h2>

          {/* Wide block — income */}
          <div
            className="rounded-[15px] p-[30px] mb-[10px] relative overflow-hidden"
            style={{
              background: '#fee878 url(/img/400.jpg) right bottom no-repeat',
              backgroundSize: 'cover',
              minHeight: '140px',
            }}
          >
            <h3
              className="text-[26px] mb-[10px]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Доход до 400 ₽ в час
            </h3>
            <p style={{ fontFamily: 'YS, Arial, sans-serif' }} className="text-[16px] leading-[1.3]">
              Выплаты каждый день на вашу карту
            </p>
          </div>

          {/* Row 1: 3 cards */}
          <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-[10px] mb-[10px]">
            <div className="rounded-[15px] p-[30px] pb-[70px] bg-[#edeff1] tablet:w-[32.6%]">
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Быстрое подключение
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Начинайте доставлять заказы уже на следующий день после регистрации
              </p>
            </div>
            <div
              className="rounded-[15px] p-[30px] bg-[#edeff1] relative overflow-hidden tablet:w-[32.6%]"
              style={{
                backgroundImage: 'url(/img/b3.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom',
                paddingBottom: '70px',
              }}
            >
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Скидка на еду
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Заказывайте еду в ресторанах-партнёрах и Яндекс Лавке со скидкой
              </p>
            </div>
            <div className="rounded-[15px] p-[30px] pb-[70px] bg-[#edeff1] tablet:w-[32.6%]">
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Удобное расписание
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Выходите на доставки когда захотите, остальное время — ваше
              </p>
            </div>
          </div>

          {/* Row 2: bonus + tips + transport */}
          <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-[10px] mb-[10px]">
            <div
              className="rounded-[15px] p-[30px] pb-[70px] bg-[#edeff1] relative overflow-hidden tablet:w-[32.6%]"
              style={{
                backgroundImage: 'url(/img/b5.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
              }}
            >
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Бонусы за новичков
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                5&nbsp;000 ₽ за каждого нового курьера, которого вы привели
              </p>
            </div>
            <div
              className="rounded-[15px] p-[30px] bg-[#edeff1] relative overflow-hidden tablet:w-[32.6%]"
              style={{
                backgroundImage: 'url(/img/b4.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
                paddingBottom: '30px',
              }}
            >
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Чаевые
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Все чаевые от пользователей достаются вам полностью, без удержаний
              </p>
            </div>
            <div
              className="rounded-[15px] p-[30px] pb-[70px] bg-[#edeff1] relative overflow-hidden tablet:w-[32.6%]"
              style={{
                backgroundImage: 'url(/img/b6.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom',
              }}
            >
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Любой транспорт
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Скидки на аренду самокатов и велосипедов у партнёров сервиса
              </p>
            </div>
          </div>

          {/* Row 3: insurance (wide) + legal */}
          <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-[10px] mb-[10px]">
            <div
              className="rounded-[15px] p-[30px] bg-[#edeff1] relative overflow-hidden tablet:w-[66.2%]"
              style={{
                backgroundImage: 'url(/img/b7.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
              }}
            >
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Страхование
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Одна программа — во время доставок, другая — после них: при травме или болезни вам положены выплаты<sup>³</sup>
              </p>
            </div>
            <div className="rounded-[15px] p-[30px] pb-[70px] bg-[#edeff1] tablet:w-[32.6%]">
              <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Юридическая поддержка
              </h3>
              <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                3 бесплатные консультации от специалиста каждый месяц<sup>⁴</sup>
              </p>
            </div>
          </div>

          {/* Wide — heavy orders */}
          <div
            className="rounded-[15px] p-[30px] relative overflow-hidden bg-[#edeff1]"
            style={{
              backgroundImage: 'url(/img/b8.webp)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
              minHeight: '120px',
            }}
          >
            <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
              Доплата за тяжёлые заказы
            </h3>
            <p className="text-[16px] leading-[1.3] text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
              Для пеших и велокурьеров — если заказ весит от 10 до 15 кг
            </p>
          </div>
        </div>
      </section>

      {/* Auto-couriers advantages */}
      <section className="py-12 desktop:py-16">
        <div className="max-w-[920px] mx-auto px-4">
          <h2
            className="text-[40px] leading-[44px] mb-8"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Преимущества курьеров на личном или арендованном транспорте
          </h2>
          <div className="flex flex-col tablet:flex-row justify-between items-stretch gap-[10px] mb-8">
            <div className="tablet:w-[48%]">
              <Image
                src="/img/deliv.webp"
                alt="Курьер на транспорте"
                width={400}
                height={300}
                className="w-full rounded-[15px]"
                style={{ objectFit: 'cover', maxWidth: '65%', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="tablet:w-[48%] space-y-6" style={{ marginLeft: '10px', minWidth: '300px' }}>
              {[
                { title: 'Приоритет', text: 'Получайте приоритет в передаче заказов — больше работы в часы пик' },
                { title: 'Оперативность', text: 'Доставляйте больше заказов за смену благодаря большему радиусу работы' },
                { title: 'Выше доход', text: 'Доход велокурьеров выше на 35% по сравнению с пешими' },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-[26px] mb-[10px]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'YS, Arial, sans-serif' }} className="text-[16px] leading-[1.3] text-[#555]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-[50px] mb-[50px]">
            <a
              href={CTA_URL}
              className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#000] rounded-[5px] px-[85px] py-[14px] text-[18px] transition-colors"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Стать курьером
            </a>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <Calculator />

      {/* How to become */}
      <section className="py-12 desktop:py-16">
        <div className="max-w-[920px] mx-auto px-4">
          <h2
            className="text-[40px] leading-[44px] mb-8 mt-14"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Как стать курьером
          </h2>
          <div className="flex flex-wrap justify-between gap-[10px] mb-8">
            {steps.map((step, i) => (
              <div key={i} className="w-[49.4%] tablet:w-[23%]" style={{ lineHeight: 0 }}>
                <Image
                  src={step.img}
                  alt={step.alt}
                  width={200}
                  height={200}
                  className="w-full rounded-xl"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-[50px] mb-[50px]">
            <a
              href={CTA_URL}
              className="inline-block bg-[#2b2b2b] hover:opacity-80 text-white rounded-[5px] px-[85px] py-[14px] text-[18px] transition-opacity"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Стать курьером
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQ items={mainFAQ} title="Остались вопросы?" />
      </div>

      {/* Tags */}
      <section className="py-[50px]">
        <div className="max-w-[920px] mx-auto px-4">
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
