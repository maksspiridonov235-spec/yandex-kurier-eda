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
            className="text-3xl desktop:text-4xl mb-8 mt-6"
            style={{ fontFamily: 'YSb, Arial, sans-serif' }}
          >
            Это вам понравится
          </h2>

          {/* Wide block — income */}
          <div
            className="rounded-2xl p-6 desktop:p-8 mb-4 bg-[#fee334] relative overflow-hidden"
            style={{
              backgroundImage: 'url(/img/400.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              minHeight: '140px',
            }}
          >
            <h3
              className="text-2xl desktop:text-3xl text-[#2b2b2b] mb-2"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              Доход до 400 ₽ в час
            </h3>
            <p style={{ fontFamily: 'YS, Arial, sans-serif' }} className="text-[#2b2b2b]">
              Выплаты каждый день на вашу карту
            </p>
          </div>

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 mb-4">
            <div className="rounded-2xl p-6 bg-[#edeff1]">
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Быстрое подключение к сервису
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Начинайте доставлять заказы уже на следующий день
              </p>
            </div>
            <div
              className="rounded-2xl p-6 bg-[#edeff1] relative overflow-hidden"
              style={{
                backgroundImage: 'url(/img/b3.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom',
              }}
            >
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Скидка на еду
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Заказывайте еду в ресторанах-партнёрах и Яндекс Лавке для себя и близких
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[#edeff1]">
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Удобное расписание
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Выходите на доставки, когда захотите, а остальное время посвящайте себе
              </p>
            </div>
          </div>

          {/* Row 2: bonus + tips + transport */}
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 mb-4">
            <div
              className="rounded-2xl p-6 bg-[#edeff1] relative overflow-hidden"
              style={{
                backgroundImage: 'url(/img/b5.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom',
              }}
            >
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Бонусы за новичков
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Приводите новых курьеров и получайте денежное вознаграждение
              </p>
            </div>
            <div
              className="rounded-2xl p-6 bg-[#edeff1] relative overflow-hidden"
              style={{
                backgroundImage: 'url(/img/b4.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
              }}
            >
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Чаевые
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Вы получаете полностью все чаевые, которые оставляют вам пользователи
              </p>
            </div>
            <div
              className="rounded-2xl p-6 bg-[#edeff1] relative overflow-hidden"
              style={{
                backgroundImage: 'url(/img/b6.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
              }}
            >
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Доставляйте на удобном вам транспорте
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Скидки на аренду самокатов и велосипедов у наших партнёров
              </p>
            </div>
          </div>

          {/* Row 3: insurance (wide) + legal */}
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 mb-4">
            <div
              className="rounded-2xl p-6 bg-[#edeff1] tablet:col-span-2 relative overflow-hidden"
              style={{
                backgroundImage: 'url(/img/b7.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom',
              }}
            >
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Страхование
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                Одна программа действует во время доставок, другая — после них: в случае травмы или болезни вам положены выплаты<sup>³</sup>
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[#edeff1]">
              <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                Юридическая поддержка
              </h3>
              <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
                По 3 бесплатных консультации от специалиста в месяц<sup>⁴</sup>
              </p>
            </div>
          </div>

          {/* Wide — heavy orders */}
          <div
            className="rounded-2xl p-6 desktop:p-8 relative overflow-hidden bg-[#edeff1]"
            style={{
              backgroundImage: 'url(/img/b8.webp)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
              minHeight: '120px',
            }}
          >
            <h3 className="text-lg desktop:text-xl mb-2 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
              Доплата за тяжелые заказы
            </h3>
            <p className="text-sm text-[#555]" style={{ fontFamily: 'YS, Arial, sans-serif' }}>
              Действует для пеших и велокурьеров, если заказ весит от 10 до 15 кг
            </p>
          </div>
        </div>
      </section>

      {/* Auto-couriers advantages */}
      <section className="py-12 desktop:py-16 bg-[#edeff1]">
        <div className="max-w-[920px] mx-auto px-4">
          <h2
            className="text-3xl desktop:text-4xl mb-8"
            style={{ fontFamily: 'YSb, Arial, sans-serif' }}
          >
            Преимущества курьеров на личном или арендованном транспорте
          </h2>
          <div className="flex flex-col tablet:flex-row gap-8 items-center mb-8">
            <div className="tablet:w-1/2">
              <Image
                src="/img/deliv.webp"
                alt="Курьер на транспорте"
                width={400}
                height={300}
                className="w-full rounded-2xl"
              />
            </div>
            <div className="tablet:w-1/2 space-y-6">
              {[
                { title: 'Приоритет', text: 'Получайте приоритет в передаче заказов' },
                { title: 'Оперативность', text: 'Успевайте доставлять больше заказов' },
                { title: 'Выше доход', text: 'Доход велокурьеров больше на 35%' },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl mb-1 text-[#2b2b2b]" style={{ fontFamily: 'YSm, Arial, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'YS, Arial, sans-serif' }} className="text-[#555]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <a
              href={CTA_URL}
              className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#2b2b2b] px-16 py-4 rounded text-base transition-colors"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
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
            className="text-3xl desktop:text-4xl mb-8"
            style={{ fontFamily: 'YSb, Arial, sans-serif' }}
          >
            Как стать курьером
          </h2>
          <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4 mb-8">
            {steps.map((step, i) => (
              <div key={i}>
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
          <div className="text-center">
            <a
              href={CTA_URL}
              className="inline-block bg-[#2b2b2b] hover:bg-[#444] text-white px-16 py-4 rounded text-base transition-colors"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Стать курьером
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-[#f5f4f2]" id="faq">
        <FAQ items={mainFAQ} title="Остались вопросы?" />
      </div>

      {/* Tags */}
      <section className="py-8 desktop:py-12 border-t border-gray-100">
        <div className="max-w-[920px] mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <a
                key={i}
                href={CTA_URL}
                className="bg-[#edeff1] hover:bg-[#e0e2e5] text-[#555] text-sm px-4 py-2 rounded-full transition-colors"
                style={{ fontFamily: 'YS, Arial, sans-serif' }}
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
