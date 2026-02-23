const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

export default function HeroBanner() {
  return (
    <section
      className="relative flex items-center"
      style={{
        background: 'url(/img/banner.jpg) center no-repeat',
        backgroundSize: 'cover',
        padding: '90px 0',
        marginTop: '64px',
      }}
    >
      {/* Mobile banner override */}
      <style>{`
        @media (max-width: 480px) {
          .banner-bg {
            background: url(/img/banner2.webp) center !important;
            background-size: cover !important;
          }
        }
      `}</style>

      <div
        className="banner-bg absolute inset-0"
        style={{
          background: 'url(/img/banner.jpg) center no-repeat',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 max-w-[920px] mx-auto px-[15px] w-full">
        <h1
          className="text-white"
          style={{
            fontFamily: 'YS, Arial, sans-serif',
            fontSize: '48px',
            lineHeight: '1.1',
            marginBottom: '0',
          }}
        >
          Ищем того, кто хочет<br />
          зарабатывать до 400 ₽ в час
        </h1>
        <p
          className="text-white"
          style={{
            fontFamily: 'YS, Arial, sans-serif',
            fontSize: '24px',
            margin: '30px 0',
            lineHeight: '1.3',
          }}
        >
          Быстрый выход на первую доставку<br />
          и ежедневные выплаты<sup style={{ lineHeight: 0, fontSize: '14px' }}>2</sup>
        </p>
        <a
          href={CTA_URL}
          className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#000] rounded-[5px] transition-colors"
          style={{
            fontFamily: 'YS, Arial, sans-serif',
            fontSize: '18px',
            padding: '14px 85px',
            boxSizing: 'border-box',
          }}
        >
          Стать курьером
        </a>
      </div>
    </section>
  );
}
