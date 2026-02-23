import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Работа курьером Яндекс Еды — до 400 ₽ в час',
  description: 'Стань курьером Яндекс Еды. Свободный график, ежедневные выплаты, до 400 ₽ в час. Быстрое подключение — начни доставлять уже завтра.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
