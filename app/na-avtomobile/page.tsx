import type { Metadata } from 'next';
import ClusterPage from '@/components/ClusterPage';
import { carFAQ } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Работа курьером Яндекс Еды на автомобиле — до 472 ₽/ч',
  description: 'Станьте курьером Яндекс Еды на автомобиле. Ставка 472 ₽/час, приоритет в заказах, свободный график.',
};

export default function Page() {
  return (
    <ClusterPage h1="Курьер Яндекс Еды на автомобиле" faqItems={carFAQ}>
      <p>
        Доставка еды на автомобиле — самый высокооплачиваемый формат работы в Яндекс Еде. Ставка для автокурьеров составляет <strong>472 ₽ в час</strong> — это максимальная ставка среди всех типов транспорта.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Сколько зарабатывает курьер на машине
      </h2>
      <p>
        При работе 6 часов в день, 25 дней в месяц: 472 × 6 × 25 = <strong>70 800 ₽</strong>. Дополнительно — чаевые (обычно 5–15% сверху) и бонусы за привлечение новых курьеров (5 000 ₽ за каждого). Итоговый доход может превысить <strong>100 000 ₽ в месяц</strong>.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Преимущества работы на автомобиле
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Самая высокая ставка — 472 ₽/час</li>
        <li>Можно выполнять заказы на большие расстояния</li>
        <li>Комфорт в любую погоду</li>
        <li>Возможность брать крупные и тяжёлые заказы</li>
        <li>Приоритет в системе распределения заказов</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Требования к автомобилю
      </h2>
      <p>
        Жёстких требований к марке или году выпуска нет. Главное — автомобиль должен быть технически исправен. Можно работать на собственной или арендованной машине. Тип топлива не имеет значения.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Необходимые документы
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Паспорт гражданина РФ</li>
        <li>Водительское удостоверение категории B</li>
        <li>Медицинская книжка</li>
        <li>Смартфон с приложением Яндекс Про</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Расходы на топливо
      </h2>
      <p>
        Расходы на топливо не компенсируются отдельно — они учтены в повышенной ставке (472 ₽/час против 320 ₽/час у пеших курьеров). При стандартном расходе 10 л/100 км и ценах на бензин около 55 ₽/л расходы на топливо за рабочий день составляют в среднем 300–500 ₽.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Страхование автокурьеров
      </h2>
      <p>
        Яндекс Еда предоставляет страховку во время выполнения заказов. Одна программа действует в процессе доставки, другая — вне рабочих слотов. В случае ДТП или травмы во время работы курьер может получить страховое возмещение.
      </p>
    </ClusterPage>
  );
}
