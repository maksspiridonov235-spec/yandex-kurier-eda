'use client';

import { useState, useCallback } from 'react';

const TYPE_RATES: Record<string, number> = {
  '1': 472, // машина
  '2': 412, // велосипед
  '3': 320, // пеший
};

const PEOPLE_BONUS = 5000;

export default function Calculator() {
  const [transport, setTransport] = useState('1');
  const [hours, setHours] = useState(6);
  const [days, setDays] = useState(25);
  const [people, setPeople] = useState(10);

  const total = TYPE_RATES[transport] * hours * days + people * PEOPLE_BONUS;

  const formatNumber = (n: number) =>
    n.toLocaleString('ru-RU');

  const SliderWithValue = useCallback(
    ({
      label,
      value,
      min,
      max,
      onChange,
    }: {
      label: string;
      value: number;
      min: number;
      max: number;
      onChange: (v: number) => void;
    }) => {
      const pct = ((value - min) / (max - min)) * 100;
      return (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h4
              className="text-sm desktop:text-base text-[#2b2b2b]"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              {label}
            </h4>
            <span
              className="text-[#2b2b2b] font-bold text-lg ml-4 shrink-0"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              {value}
            </span>
          </div>
          <div className="relative">
            <input
              type="range"
              min={min}
              max={max}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full"
              style={{
                background: `linear-gradient(to right, #fee334 0%, #fee334 ${pct}%, #dee0e3 ${pct}%, #dee0e3 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-[#9e9b98] mt-1">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </div>
      );
    },
    []
  );

  return (
    <section className="py-12 desktop:py-16 bg-[#f5f4f2]" id="calc">
      <div className="max-w-[920px] mx-auto px-4">
        <h2
          className="text-3xl desktop:text-4xl mb-8 text-center"
          style={{ fontFamily: 'YSb, Arial, sans-serif' }}
        >
          Калькулятор дохода
        </h2>

        <div
          className="bg-white rounded-2xl p-6 desktop:p-10"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,.08)' }}
        >
          {/* Transport select */}
          <div className="mb-8">
            <h3
              className="text-lg desktop:text-xl mb-3"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Как будете доставлять?
            </h3>
            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="w-full tablet:w-auto border border-gray-200 rounded-xl px-5 py-3 text-base bg-white text-[#2b2b2b] cursor-pointer appearance-none pr-10"
              style={{
                fontFamily: 'YS, Arial, sans-serif',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239e9b98' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 14px center',
              }}
            >
              <option value="1">Машина — 472 ₽/ч</option>
              <option value="2">Велосипед — 412 ₽/ч</option>
              <option value="3">Пеший — 320 ₽/ч</option>
            </select>
          </div>

          {/* Mode info */}
          <div className="mb-8 bg-[#edeff1] rounded-xl p-5">
            <h3
              className="text-base desktop:text-lg mb-1"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Режим доставки
            </h3>
            <h4
              className="text-base mb-1"
              style={{ fontFamily: 'YSm, Arial, sans-serif' }}
            >
              Когда смогу
            </h4>
            <p
              className="text-sm text-[#555]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Можно начать в любое время и в любом месте. Доход зависит от количества выполненных заказов.
            </p>
          </div>

          {/* Sliders grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-10">
            <SliderWithValue
              label="Сколько часов в день планируете работать"
              value={hours}
              min={2}
              max={12}
              onChange={setHours}
            />
            <SliderWithValue
              label="Количество дней в месяц"
              value={days}
              min={1}
              max={31}
              onChange={setDays}
            />
          </div>

          <SliderWithValue
            label="Количество привлечённых людей (бонус 5 000 ₽ за каждого)"
            value={people}
            min={0}
            max={10}
            onChange={setPeople}
          />

          {/* Result */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3
              className="text-base text-[#9e9b98] mb-2"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Возможный доход
            </h3>
            <div
              className="text-4xl desktop:text-5xl text-[#2b2b2b]"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              {formatNumber(total)} <span className="text-2xl desktop:text-3xl font-normal">₽</span>
            </div>
          </div>

          {/* Note */}
          <p
            className="mt-6 text-xs text-[#9e9b98] leading-relaxed"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Данные расчетов дохода являются максимальными. Результаты индивидуальны и могут отличаться от указанных, а также зависят от города, часов доставки и вида транспорта. Указан максимальный показатель дохода партнеров сервиса Яндекс.Еда на территории РФ и на основе статистики за 5 месяцев. Чтобы узнать подробности, отправьте заявку.
          </p>
        </div>
      </div>
    </section>
  );
}
