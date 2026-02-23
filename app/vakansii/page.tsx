import type { Metadata } from 'next';
import ClusterPage from '@/components/ClusterPage';
import { vacanciesFAQ } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Вакансии курьера Яндекс Еды — актуальные предложения',
  description: 'Актуальные вакансии курьера Яндекс Еды. Свободный график, до 400 ₽/час, ежедневные выплаты. Быстрое оформление.',
};

export default function Page() {
  return (
    <ClusterPage h1="Вакансии курьера Яндекс Еды" faqItems={vacanciesFAQ}>
      <p>
        Яндекс Еда постоянно ищет новых курьеров. Если вы хотите работать с гибким графиком и получать достойный доход — вакансия курьера подходит для вас.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Актуальные вакансии
      </h2>
      <p>Сейчас открыты вакансии для трёх типов курьеров:</p>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li><strong>Курьер на автомобиле</strong> — ставка 472 ₽/час</li>
        <li><strong>Курьер на велосипеде</strong> — ставка 412 ₽/час</li>
        <li><strong>Пеший курьер</strong> — ставка 320 ₽/час</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Требования к кандидатам
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Возраст от 18 лет</li>
        <li>Паспорт гражданина РФ (или разрешение на работу для иностранных граждан)</li>
        <li>Медицинская книжка</li>
        <li>Смартфон на Android или iOS</li>
        <li>Для автокурьеров: водительское удостоверение категории B</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Условия работы
      </h2>
      <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', marginTop: '0.5rem' }}>
        <li>Полностью свободный график — работайте когда хотите</li>
        <li>Ежедневные выплаты для самозанятых</li>
        <li>Чаевые 100% достаются курьеру</li>
        <li>Страхование во время выполнения заказов</li>
        <li>Юридическая поддержка</li>
        <li>Бонусы за привлечение новых курьеров (5 000 ₽ за каждого)</li>
      </ul>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Как откликнуться на вакансию
      </h2>
      <p>
        Процесс простой: нажмите кнопку «Стать курьером», заполните анкету онлайн и загрузите фото документов. Рассмотрение занимает 1–2 рабочих дня. После одобрения вы получаете доступ к приложению и можете начать принимать заказы.
      </p>

      <h2 style={{ fontFamily: 'YSb, Arial, sans-serif', fontSize: '1.5rem', color: '#2b2b2b', marginTop: '2rem', marginBottom: '0.5rem' }}>
        Города присутствия
      </h2>
      <p>
        Яндекс Еда работает в Москве, Санкт-Петербурге, Казани, Нижнем Новгороде, Екатеринбурге, Новосибирске, Краснодаре и многих других городах России. Уточнить наличие вакансий в вашем городе можно при заполнении анкеты.
      </p>
    </ClusterPage>
  );
}
