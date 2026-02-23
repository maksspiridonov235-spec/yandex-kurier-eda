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
      className="fixed top-0 left-0 w-full bg-white shadow-sm"
    >
      <div className="max-w-[920px] mx-auto px-4">
        <div className="flex items-center justify-between h-[60px] desktop:h-[70px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/img/logo.svg" alt="Яндекс Еда" width={120} height={36} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden desktop:flex items-center gap-6">
            <button
              onClick={() => handleAnchor('faq')}
              className="font-[family-name:var(--font-ys)] text-[#2b2b2b] hover:text-[#fee334] transition-colors cursor-pointer bg-transparent border-0 text-base"
            >
              Вопросы
            </button>
            <a
              href={CTA_URL}
              className="font-[family-name:var(--font-ys)] text-[#2b2b2b] hover:text-[#fee334] transition-colors text-base"
            >
              Стать курьером
            </a>
            <button
              onClick={() => handleAnchor('calc')}
              className="font-[family-name:var(--font-ys)] text-[#2b2b2b] hover:text-[#fee334] transition-colors cursor-pointer bg-transparent border-0 text-base"
            >
              Калькулятор
            </button>
            <a
              href={CTA_URL}
              className="bg-[#fee334] hover:bg-[#e7cd21] text-[#2b2b2b] font-[family-name:var(--font-ysm)] px-5 py-2 rounded text-sm transition-colors"
            >
              Свяжитесь с нами
            </a>
          </nav>

          {/* Mobile: CTA + burger */}
          <div className="flex desktop:hidden items-center gap-3">
            <a
              href={CTA_URL}
              className="bg-[#fee334] hover:bg-[#e7cd21] text-[#2b2b2b] font-[family-name:var(--font-ysm)] px-4 py-2 rounded text-sm transition-colors"
            >
              Свяжитесь с нами
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-[5px] p-1 bg-transparent border-0 cursor-pointer"
              aria-label="Открыть меню"
            >
              <span className="block w-6 h-[2px] bg-[#2b2b2b]" />
              <span className="block w-6 h-[2px] bg-[#2b2b2b]" />
              <span className="block w-6 h-[2px] bg-[#2b2b2b]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col p-6" style={{ zIndex: 1000000 }}>
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#2b2b2b] text-3xl leading-none bg-transparent border-0 cursor-pointer"
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-xl">
            <button
              onClick={() => handleAnchor('faq')}
              className="text-left font-[family-name:var(--font-ys)] text-[#2b2b2b] bg-transparent border-0 cursor-pointer text-xl"
            >
              Вопросы
            </button>
            <a
              href={CTA_URL}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-ys)] text-[#2b2b2b]"
            >
              Стать курьером
            </a>
            <button
              onClick={() => handleAnchor('calc')}
              className="text-left font-[family-name:var(--font-ys)] text-[#2b2b2b] bg-transparent border-0 cursor-pointer text-xl"
            >
              Калькулятор
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
