import FAQ from '@/components/FAQ';
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
      <section className="pt-28 pb-12 desktop:pt-32 desktop:pb-16">
        <div className="max-w-[920px] mx-auto px-4">
          <h1
            className="text-3xl desktop:text-4xl mb-8 text-[#2b2b2b]"
            style={{ fontFamily: 'YSb, Arial, sans-serif' }}
          >
            {h1}
          </h1>
          <div
            className="prose prose-lg max-w-none text-[#555] leading-relaxed space-y-4"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            {children}
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-12 bg-[#fee334]">
        <div className="max-w-[920px] mx-auto px-4 text-center">
          <h2
            className="text-2xl desktop:text-3xl mb-4 text-[#2b2b2b]"
            style={{ fontFamily: 'YSb, Arial, sans-serif' }}
          >
            Стать курьером Яндекс Еды
          </h2>
          <p
            className="text-[#2b2b2b] mb-6 text-base desktop:text-lg"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Свободный график, ежедневные выплаты, до 400 ₽ в час
          </p>
          <a
            href={CTA_URL}
            className="inline-block bg-[#2b2b2b] hover:bg-[#444] text-white px-16 py-4 rounded text-base transition-colors"
            style={{ fontFamily: 'YSm, Arial, sans-serif' }}
          >
            Оставить заявку
          </a>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-[#f5f4f2]">
        <FAQ items={faqItems} title="Частые вопросы" />
      </div>
    </>
  );
}
