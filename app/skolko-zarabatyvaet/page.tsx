import type { Metadata } from 'next';
import ClusterPage from '@/components/ClusterPage';
import { earningsFAQ } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Сколько зарабатывает курьер Яндекс Еды — реальные цифры',
  description: 'Узнайте реальный заработок курьера Яндекс Еды: ставки по типам транспорта, бонусы, чаевые и ежемесячный доход.',
};

export default function Page() {
  return (
    <ClusterPage h1="Сколько зарабатывает курьер Яндекс Еды" faqItems={earningsFAQ}>
      <p>
        Доход курьера Яндекс Еды зависит от типа транспорта, количества рабочих часов и дополнительных бонусов. Рассмотрим подробно, <strong>сколько реально можно заработать</strong> на доставке еды.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Ставки по типам транспорта
      </h2>
      <p>Базовая ставка зависит от того, как вы доставляете заказы:</p>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li><strong>Автомобиль</strong> — 472 ₽ в час</li>
        <li><strong>Велосипед</strong> — 412 ₽ в час</li>
        <li><strong>Пеший</strong> — 320 ₽ в час</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Расчёт ежемесячного дохода
      </h2>
      <p>
        При работе 6 часов в день, 25 дней в месяц:
      </p>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>На автомобиле: 472 × 6 × 25 = <strong>70 800 ₽</strong></li>
        <li>На велосипеде: 412 × 6 × 25 = <strong>61 800 ₽</strong></li>
        <li>Пешком: 320 × 6 × 25 = <strong>48 000 ₽</strong></li>
      </ul>
      <p style={{ marginTop: '1rem' }}>
        Это базовый доход без учёта чаевых и реферальных бонусов.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Чаевые
      </h2>
      <p>
        Все чаевые от пользователей поступают курьеру напрямую — без каких-либо удержаний. В среднем чаевые составляют 5–15% от базового дохода. Таким образом, реальный заработок выше расчётного.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Бонусы за привлечение курьеров
      </h2>
      <p>
        За каждого нового курьера, зарегистрировавшегося по вашей реферальной ссылке, вы получаете <strong>5 000 ₽</strong>. Если за месяц вы приведёте 10 человек — это дополнительные 50 000 ₽.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Доплата за тяжёлые заказы
      </h2>
      <p>
        Для пеших и велокурьеров предусмотрена доплата при доставке заказов весом от 10 до 15 кг. Это помогает справедливо компенсировать дополнительные усилия.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Как получать деньги
      </h2>
      <p>
        Самозанятые курьеры-партнёры получают выплаты <strong>ежедневно</strong> на банковскую карту. Выплаты за пятницу–воскресенье поступают в понедельник. Никаких задержек по умолчанию нет.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Как увеличить доход
      </h2>
      <p>
        Для максимального заработка советуем: работать в часы пик (обед и ужин), выбирать транспорт с более высокой ставкой, привлекать знакомых стать курьерами и поддерживать высокий рейтинг для приоритетного получения заказов.
      </p>
    </ClusterPage>
  );
}
