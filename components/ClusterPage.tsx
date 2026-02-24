import FAQ from '@/components/FAQ';
import { FAQItem } from '@/components/FAQ';
import Calculator from '@/components/Calculator';

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
      <section className="pt-28 pb-12 desktop:pt-32 desktop:pb-16">
        <div className="max-w-[920px] mx-auto px-4">
          <h1
            className="text-[40px] leading-[44px] mb-8 text-[#2b2b2b]"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            {h1}
          </h1>
          <div
            className="max-w-none text-[#555] leading-[1.3] space-y-4 text-[16px]"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            {children}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <Calculator />

      {/* CTA block */}
      <section className="py-12 bg-[#fee334]">
        <div className="max-w-[920px] mx-auto px-4 text-center">
          <h2
            className="text-[40px] leading-[44px] mb-4 text-[#2b2b2b] mt-0"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Стать курьером Яндекс Еды
          </h2>
          <p
            className="text-[#2b2b2b] mb-6 text-[16px] leading-[1.3]"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Свободный график, ежедневные выплаты, до 400 ₽ в час
          </p>
          <a
            href={CTA_URL}
            className="inline-block bg-[#2b2b2b] hover:opacity-80 text-white rounded-[5px] px-[85px] py-[14px] text-[18px] transition-opacity"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} title="Частые вопросы" />
    </>
  );
}
