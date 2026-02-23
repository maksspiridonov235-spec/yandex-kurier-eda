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

export default function FAQ({ items, title = 'Остались вопросы?' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-12 lg:py-16" id="faq">
      <div className="max-w-[920px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-48 shrink-0">
            <h2
              className="text-3xl lg:text-4xl leading-tight"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              {title.split('<br>').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split('<br>').length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <div className="flex-1 divide-y divide-gray-200">
            {items.map((item, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left flex items-start justify-between gap-4 bg-transparent border-0 cursor-pointer"
                >
                  <h3
                    className="text-base lg:text-lg text-[#2b2b2b]"
                    style={{ fontFamily: 'YSm, Arial, sans-serif' }}
                  >
                    {item.question}
                  </h3>
                  <span
                    className="shrink-0 mt-1 transition-transform duration-200 text-[#9e9b98]"
                    style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <path d="M1 1L8 8L15 1" stroke="#9e9b98" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {openIndex === i && (
                  <div
                    className="mt-3 text-[#555] text-sm lg:text-base leading-relaxed"
                    style={{ fontFamily: 'YS, Arial, sans-serif' }}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank"
            className="inline-block bg-[#fee334] hover:bg-[#e7cd21] text-[#2b2b2b] px-16 py-4 rounded text-base transition-colors"
            style={{ fontFamily: 'YSm, Arial, sans-serif' }}
          >
            Стать курьером
          </a>
        </div>
      </div>
    </section>
  );
}
