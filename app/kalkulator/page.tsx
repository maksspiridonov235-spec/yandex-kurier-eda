import type { Metadata } from 'next';
import ClusterPage from '@/components/ClusterPage';
import { calculatorFAQ } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Калькулятор дохода курьера Яндекс Еды — рассчитай заработок',
  description: 'Рассчитайте свой потенциальный доход как курьера Яндекс Еды. Учитывает тип транспорта, часы работы и бонусы.',
};

export default function Page() {
  return (
      <ClusterPage h1="Калькулятор дохода курьера Яндекс Еды" faqItems={calculatorFAQ}>
        <p>
          Калькулятор дохода помогает рассчитать потенциальный заработок курьера Яндекс Еды с учётом типа транспорта, количества рабочих часов и дней, а также бонусов за привлечение новых курьеров.
        </p>

        <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
          Формула расчёта
        </h2>
        <p>
          Доход = Ставка (₽/час) × Часы в день × Дней в месяц + Привлечённые люди × 5 000 ₽
        </p>

        <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
          Ставки по типам транспорта
        </h2>
        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
          <li>Автомобиль: 472 ₽/час</li>
          <li>Велосипед: 412 ₽/час</li>
          <li>Пеший: 320 ₽/час</li>
        </ul>

        <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
          Примеры расчёта
        </h2>
        <p>
          Пример 1: Велосипед, 8 часов в день, 20 дней в месяц, 5 привлечённых курьеров:<br />
          412 × 8 × 20 + 5 × 5 000 = 65 920 + 25 000 = <strong>90 920 ₽</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          Пример 2: Автомобиль, 6 часов в день, 25 дней в месяц, 0 привлечённых:<br />
          472 × 6 × 25 = <strong>70 800 ₽</strong> (плюс чаевые)
        </p>

        <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
          Что не учитывает калькулятор
        </h2>
        <p>
          Калькулятор показывает базовый доход. В реальности к нему добавляются: чаевые от клиентов (в среднем 5–15%), доплата за тяжёлые заказы (от 10 до 15 кг), бонусы за активность и высокий рейтинг.
        </p>

        <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
          Как максимизировать доход
        </h2>
        <p>
          Для максимального заработка рекомендуем работать в часы пик (12:00–14:00 и 18:00–21:00), выбирать транспорт с более высокой ставкой и активно привлекать знакомых — каждый новый курьер приносит вам 5 000 ₽.
        </p>
      </ClusterPage>
  );
}
