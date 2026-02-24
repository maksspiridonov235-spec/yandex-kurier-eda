import Link from 'next/link';

const CTA_URL =
  'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=fca82eaee048472d874ca86f874c62fe&utm_content=blank';

const cols = [
  {
    title: 'Для курьеров',
    links: [
      { label: 'Возраст требования', href: '/so-skolki-let' },
      { label: 'Заработки курьеров', href: '/skolko-zarabatyvaet' },
      { label: 'Пешком доставлять', href: '/peshy-kurier' },
      { label: 'На машине работать', href: '/na-avtomobile' },
      { label: 'Отзывы партнеров', href: '/otzyvy' },
    ],
  },
  {
    title: 'Ресурсы',
    links: [
      { label: 'Регистрация курьера', href: CTA_URL },
      { label: 'Вход в систему', href: CTA_URL },
      { label: 'Начать работу', href: CTA_URL },
      { label: 'Официальный портал', href: CTA_URL },
      { label: 'Прямое подключение', href: CTA_URL },
    ],
  },
  {
    title: 'Подписка',
    links: [
      { label: 'Вакансии', href: '/vakansii' },
      { label: 'Отзывы', href: '/otzyvy' },
      { label: 'Калькулятор', href: '/kalkulator' },
      { label: 'Самозанятый', href: '/samozanyatiy' },
      { label: 'На велосипеде', href: '/na-velosipede' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid rgba(2,8,7,0.1)', padding: '80px 64px' }}>
      <div style={{ maxWidth: '1312px', margin: '0 auto' }}>

        {/* Top: logo + columns */}
        <div style={{ display: 'flex', gap: '40px', marginBottom: '80px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '180px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 700, color: '#020807' }}>
                Яндекс Курьер
              </span>
            </Link>
          </div>
          {cols.map((col) => (
            <div key={col.title} style={{ flex: 1, minWidth: '140px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#020807' }}>
                {col.title}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 400,
                    color: '#020807', textDecoration: 'none', padding: '8px 0', lineHeight: '1.5',
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(2,8,7,0.15)', marginBottom: '32px' }} />

        {/* Bottom: copyright + social */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#020807' }}>
              © 2026 Яндекс.Курьер. Все права защищены.
            </span>
            <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#020807', textDecoration: 'none' }}>
              Политика конфиденциальности
            </a>
            <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#020807', textDecoration: 'none' }}>
              Условия использования
            </a>
            <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#020807', textDecoration: 'none' }}>
              Настройки cookies
            </a>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://vk.com/partnerofyandexeda" target="_blank" rel="noopener noreferrer" style={{ color: '#020807' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.09 11.6 4.56 9.573 4.56 9.1c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.712c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.405 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z"/>
              </svg>
            </a>
            <a href="https://t.me/partner_of_yandex_eda" target="_blank" rel="noopener noreferrer" style={{ color: '#020807' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
