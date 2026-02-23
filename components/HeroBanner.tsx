const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

export default function HeroBanner() {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: 'url(/img/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Mobile banner override */}
      <style>{`
        @media (max-width: 767px) {
          .hero-section {
            background-image: url(/img/banner2.webp) !important;
          }
        }
      `}</style>

      <div className="hero-section absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-[920px] mx-auto px-4 py-20 pt-32">
        <div className="max-w-[500px]">
          <h1
            className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ fontFamily: 'YSb, Arial, sans-serif' }}
          >
            Ищем того, кто <br />
            хочет зарабатывать <br />
            до 400 ₽ в час
          </h1>
          <p
            className="text-white text-base lg:text-lg mb-8 leading-relaxed"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Быстрый выход на первую <br />
            доставку и ежедневные выплаты<sup>2</sup>
          </p>
          <a
            href={CTA_URL}
            className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#2b2b2b] font-[family-name:var(--font-ysm)] px-16 py-4 rounded text-base transition-colors"
            style={{ fontFamily: 'YSm, Arial, sans-serif' }}
          >
            Стать курьером
          </a>
        </div>
      </div>
    </section>
  );
}
