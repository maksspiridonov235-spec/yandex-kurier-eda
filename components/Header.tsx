'use client';

import { useState } from 'react';
import Link from 'next/link';

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

const navLinks = [
  { label: 'Вакансии', href: '/vakansii', external: false },
  { label: 'Калькулятор', href: '/kalkulator', external: false },
  { label: 'Отзывы', href: '/otzyvy', external: false },
];

const menuLinks = [
  { label: 'Вакансии', href: '/vakansii' },
  { label: 'Калькулятор', href: '/kalkulator' },
  { label: 'Отзывы', href: '/otzyvy' },
  { label: 'Заработок', href: '/skolko-zarabatyvaet' },
  { label: 'Пеший курьер', href: '/peshy-kurier' },
  { label: 'На автомобиле', href: '/na-avtomobile' },
  { label: 'На велосипеде', href: '/na-velosipede' },
  { label: 'Самозанятый', href: '/samozanyatiy' },
  { label: 'Возраст', href: '/so-skolki-let' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        background: '#FFFFFF', borderBottom: '1px solid rgba(2,8,7,0.1)',
        height: '72px', display: 'flex', alignItems: 'center', padding: '0 64px',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', maxWidth: '1312px', margin: '0 auto', gap: '32px',
        }}>
          {/* Left nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1 }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400,
                color: '#020807', textDecoration: 'none', lineHeight: '1.5',
                whiteSpace: 'nowrap',
              }}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center: Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700,
              color: '#020807', letterSpacing: '-0.5px',
            }}>
              Яндекс Курьер
            </span>
          </Link>

          {/* Right: Menu button */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setOpen(!open)}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500,
                color: '#020807', background: '#FFCC00', border: '1px solid #FFCC00',
                borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', lineHeight: '1.5',
              }}
            >
              Меню
            </button>
          </div>
        </div>
      </header>

      {/* Menu dropdown */}
      {open && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0,
          background: '#FFFFFF', zIndex: 998, padding: '48px 64px', overflowY: 'auto',
        }}>
          <div style={{ maxWidth: '1312px', margin: '0 auto' }}>
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {menuLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setOpen(false)} style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 400,
                  color: '#020807', textDecoration: 'none',
                  padding: '16px 0', borderBottom: '1px solid rgba(2,8,7,0.1)',
                }}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div style={{ marginTop: '32px' }}>
              <a href={CTA_URL} onClick={() => setOpen(false)} style={{
                display: 'inline-block', fontFamily: 'Inter, sans-serif',
                fontSize: '16px', fontWeight: 500, color: '#020807',
                background: '#FFCC00', border: '1px solid #FFCC00',
                borderRadius: '6px', padding: '10px 24px', textDecoration: 'none',
              }}>
                Зарегистрироваться
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
