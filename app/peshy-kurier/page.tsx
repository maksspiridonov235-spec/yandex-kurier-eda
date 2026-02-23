import type { Metadata } from 'next';
import ClusterPage from '@/components/ClusterPage';
import { pedestrianFAQ } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Пеший курьер Яндекс Еды — работа без транспорта',
  description: 'Работа пешим курьером Яндекс Еды: ставка 320 ₽/час, свободный график, ежедневные выплаты. Как стать пешим курьером.',
};

export default function Page() {
  return (
    <ClusterPage h1="Пеший курьер Яндекс Еды" faqItems={pedestrianFAQ}>
      <p>
        Работа пешим курьером в Яндекс Еде — отличный способ начать зарабатывать без каких-либо вложений. Не нужен автомобиль, велосипед или водительские права. Достаточно смартфона и желания работать.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Сколько зарабатывает пеший курьер
      </h2>
      <p>
        Ставка пешего курьера составляет <strong>320 ₽ в час</strong>. При работе 6 часов в день и 25 рабочих днях в месяц базовый доход составит <strong>48 000 ₽</strong>. Плюс чаевые и бонусы за привлечение новых курьеров (5 000 ₽ за каждого).
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Как работает пеший курьер
      </h2>
      <p>
        Пеший курьер забирает заказ из ресторана или кафе и доставляет его клиенту пешком. Маршруты обычно находятся в пределах одного района — система учитывает ваше текущее местоположение при назначении заказов. За смену пеший курьер в среднем выполняет до 2 заказов в час.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Преимущества пешей работы
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Не нужно транспортное средство и вложения в него</li>
        <li>Полезная физическая нагрузка</li>
        <li>Нет расходов на топливо или обслуживание</li>
        <li>Свободный выбор района доставки</li>
        <li>Можно начать работать уже на следующий день после регистрации</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Доплата за тяжёлые заказы
      </h2>
      <p>
        Если заказ весит от 10 до 15 кг, пешие курьеры получают дополнительную доплату. Это справедливая компенсация за повышенную физическую нагрузку.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Что нужно для работы
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Возраст от 18 лет</li>
        <li>Паспорт и медицинская книжка</li>
        <li>Смартфон с приложением Яндекс Про</li>
        <li>Термосумка для доставки (иногда предоставляется партнёром)</li>
        <li>Удобная обувь и одежда по погоде</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Когда выгодно работать пешим курьером
      </h2>
      <p>
        Пешая доставка особенно выгодна в плотной городской застройке, где пробки делают автомобиль медленнее пешехода. В центре крупных городов пеший курьер нередко доставляет заказы быстрее автомобильного. Кроме того, в дождь и снег спрос на доставку возрастает — а значит, и заказов становится больше.
      </p>
    </ClusterPage>
  );
}
