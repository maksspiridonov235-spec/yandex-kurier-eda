'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchor = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{ zIndex: 999999 }}
      className="fixed top-0 left-0 w-full bg-white"
    >
      <div className="max-w-[920px] mx-auto px-[15px]">
        <div className="flex items-center justify-between py-[15px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/img/logo.svg" alt="Яндекс Еда" width={120} height={36} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden desktop:flex items-center">
            {[
              { label: 'Вопросы', onClick: () => handleAnchor('faq') },
              { label: 'Калькулятор', onClick: () => handleAnchor('calc') },
            ].map((item) => (
              <div key={item.label} style={{ marginLeft: '16px' }}>
                <button
                  onClick={item.onClick}
                  className="text-[#252525] hover:text-[#ddd] transition-colors cursor-pointer bg-transparent border-0 text-[16px]"
                  style={{ fontFamily: 'YS, Arial, sans-serif' }}
                >
                  {item.label}
                </button>
              </div>
            ))}
            <div style={{ marginLeft: '16px' }}>
              <a
                href={CTA_URL}
                className="text-[#252525] hover:text-[#ddd] transition-colors text-[16px]"
                style={{ fontFamily: 'YS, Arial, sans-serif' }}
              >
                Стать курьером
              </a>
            </div>
            <div style={{ marginLeft: '16px' }}>
              <a
                href={CTA_URL}
                className="text-[#252525] text-[16px] hover:text-[#888] transition-colors border border-[#000] rounded-[3px] text-center"
                style={{ fontFamily: 'YS, Arial, sans-serif', padding: '12px', boxSizing: 'border-box' }}
              >
                Свяжитесь с нами
              </a>
            </div>
          </nav>

          {/* Mobile: CTA + burger */}
          <div className="flex desktop:hidden items-center gap-3">
            <a
              href={CTA_URL}
              className="text-[#000] text-[14px] border border-[#000] rounded-[3px] px-[8px] py-[6px] text-center hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'YS, Arial, sans-serif', display: 'inline-block', boxSizing: 'border-box' }}
            >
              Свяжитесь с нами
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="bg-transparent border-0 cursor-pointer w-[32px]"
              aria-label="Открыть меню"
              style={{ display: 'block' }}
            >
              <span className="block h-[3px] bg-[#000] mb-[4px] mx-[4px]" />
              <span className="block h-[3px] bg-[#000] mb-[4px] mx-[4px]" />
              <span className="block h-[3px] bg-[#000] mx-[4px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white flex flex-col"
          style={{ zIndex: 1000000, padding: '40px 20px 20px 20px', boxSizing: 'border-box' }}
        >
          <div className="flex justify-end mb-8" style={{ position: 'relative' }}>
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-transparent border-0 cursor-pointer"
              aria-label="Закрыть меню"
              style={{ position: 'absolute', top: '-25px', right: '0', width: '25px', height: '25px' }}
            >
              <span className="text-[#2b2b2b] text-3xl leading-none">✕</span>
            </button>
          </div>
          <nav className="flex flex-col" style={{ gap: '15px' }}>
            <button
              onClick={() => handleAnchor('faq')}
              className="text-left text-[#252525] bg-transparent border-0 cursor-pointer text-[16px]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Вопросы
            </button>
            <a
              href={CTA_URL}
              onClick={() => setMenuOpen(false)}
              className="text-[#252525] text-[16px]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Стать курьером
            </a>
            <button
              onClick={() => handleAnchor('calc')}
              className="text-left text-[#252525] bg-transparent border-0 cursor-pointer text-[16px]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Калькулятор
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
