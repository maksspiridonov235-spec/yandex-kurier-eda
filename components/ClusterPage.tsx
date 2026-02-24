import Calculator from '@/components/Calculator';
import { FAQItem } from '@/components/FAQ';

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

interface ClusterPageProps {
  h1: string;
  children: React.ReactNode;
  faqItems: FAQItem[];
}

export default function ClusterPage({ h1, children, faqItems }: ClusterPageProps) {
  return (
    <>
      {/* Article */}
      <section style={{ background: '#FFFFFF', padding: '112px 64px', paddingTop: 'calc(112px + 72px)' }}>
        <div style={{ maxWidth: '1312px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <h1 style={{
            fontFamily: 'Urbanist, sans-serif', fontSize: '72px', fontWeight: 500,
            color: '#020807', lineHeight: '1.2', letterSpacing: '-0.72px',
          }}>
            {h1}
          </h1>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#020807', lineHeight: '1.6', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {children}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <Calculator />

      {/* CTA block */}
      <section style={{ background: '#F2F2F2', padding: '112px 64px' }}>
        <div style={{ maxWidth: '1312px', margin: '0 auto' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '8px', padding: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '52px', fontWeight: 500, color: '#020807', lineHeight: '1.2', letterSpacing: '-0.52px' }}>
                Начните зарабатывать сегодня
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#020807', lineHeight: '1.5' }}>
                Подключитесь к официальной платформе Яндекс Курьер прямо сейчас
              </p>
            </div>
            <a href={CTA_URL} style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500,
              color: '#020807', background: '#FFCC00', border: '1px solid #FFCC00',
              borderRadius: '6px', padding: '6px 24px', textDecoration: 'none',
            }}>
              Зарегистрироваться
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F2F2F2', padding: '0 64px 112px' }}>
        <div style={{ maxWidth: '1312px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '52px', fontWeight: 500, color: '#020807', lineHeight: '1.2', letterSpacing: '-0.52px' }}>
              Частые вопросы
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid rgba(2,8,7,0.15)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: '#020807', lineHeight: '1.5' }}>
                  {item.question}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#020807', lineHeight: '1.5', opacity: 0.7 }}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
