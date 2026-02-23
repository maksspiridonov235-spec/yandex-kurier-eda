import type { Metadata } from 'next';
import ClusterPage from '@/components/ClusterPage';
import { bicycleFAQ } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Курьер Яндекс Еды на велосипеде — 412 ₽ в час',
  description: 'Работа велокурьером в Яндекс Еде: ставка 412 ₽/час, приоритет заказов, скидки на аренду велосипеда.',
};

export default function Page() {
  return (
    <ClusterPage h1="Курьер Яндекс Еды на велосипеде" faqItems={bicycleFAQ}>
      <p>
        Работа велокурьером в Яндекс Еде — это оптимальный баланс между доходом, физической активностью и мобильностью. Ставка <strong>412 ₽ в час</strong> плюс приоритет в получении заказов делают велосипед привлекательным выбором.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Доход велокурьера
      </h2>
      <p>
        При работе 6 часов в день, 25 дней в месяц: 412 × 6 × 25 = <strong>61 800 ₽</strong>. Плюс чаевые и доплата за тяжёлые заказы. С учётом реферальных бонусов (5 000 ₽ за каждого нового курьера) месячный доход легко превышает 80 000 ₽.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Преимущества перед пешими курьерами
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Ставка выше на 92 ₽/час (+29%)</li>
        <li>Можно охватить больший радиус доставки</li>
        <li>Приоритет в системе назначения заказов</li>
        <li>В среднем на 35% больший доход по сравнению с пешими</li>
        <li>Доплата за тяжёлые заказы (от 10 кг)</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Скидки на велосипед
      </h2>
      <p>
        Курьеры Яндекс Еды получают скидки до <strong>20%</strong> на покупку и ремонт велосипедов и самокатов у партнёров сервиса. Это делает начало работы максимально доступным.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Какой велосипед выбрать
      </h2>
      <p>
        Для курьерской работы лучше всего подходит городской или горный велосипед с хорошей амортизацией. Важны надёжность и невысокая стоимость обслуживания. Электровелосипед позволит работать дольше и быстрее, что увеличит количество заказов.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Что нужно для старта
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Возраст от 18 лет</li>
        <li>Паспорт и медицинская книжка</li>
        <li>Исправный велосипед или самокат</li>
        <li>Смартфон с приложением Яндекс Про</li>
        <li>Термосумка для перевозки заказов</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Советы для велокурьеров
      </h2>
      <p>
        Регулярно проверяйте давление в шинах и состояние тормозов — это влияет на скорость и безопасность. Используйте велосипедный замок при остановках. В тёмное время суток используйте световые сигналы. Летом берите с собой воду, зимой — тёплые перчатки и термобельё.
      </p>
    </ClusterPage>
  );
}
