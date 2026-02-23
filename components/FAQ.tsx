'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

export default function FAQ({ items, title = 'Остались вопросы?' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-12" id="faq">
      <div className="max-w-[920px] mx-auto px-[15px]">
        <div
          className="flex flex-col desktop:flex-row items-start justify-between"
        >
          {/* Left: title */}
          <div className="shrink-0" style={{ marginBottom: '20px' }}>
            <h2
              className="text-[40px] leading-[44px]"
              style={{ fontFamily: 'YS, Arial, sans-serif', margin: 0 }}
            >
              {title.split('<br>').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>

          {/* Right: items */}
          <div
            className="flex-1"
            style={{ maxWidth: '610px', width: '100%', marginLeft: '30px' }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="mb-[20px] relative cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-[16px] text-[#2b2b2b]"
                    style={{ fontFamily: 'YS, Arial, sans-serif', fontWeight: 'normal', marginBottom: '15px' }}
                  >
                    {item.question}
                  </h3>
                  <span
                    className="shrink-0 mt-1 transition-transform duration-200"
                    style={{
                      transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      width: '16px',
                      height: '16px',
                      backgroundImage: 'url(/img/down.png)',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      display: 'block',
                    }}
                  />
                </div>
                {openIndex === i && (
                  <div
                    className="text-[16px] leading-[1.3]"
                    style={{ fontFamily: 'YS, Arial, sans-serif', opacity: 0.6 }}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[50px] text-center mb-[50px]">
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
  );
}
