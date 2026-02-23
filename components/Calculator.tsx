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
        <div className="mb-[30px]">
          <h4
            className="text-[16px] text-[#2b2b2b] mb-[15px]"
            style={{ fontFamily: 'YSm, Arial, sans-serif' }}
          >
            {label}
          </h4>
          <div className="relative">
            <input
              type="range"
              min={min}
              max={max}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full"
              style={{
                background: `linear-gradient(to right, #fce000 0%, #fce000 ${pct}%, #dee0e3 ${pct}%, #dee0e3 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-[#9e9b98] mt-1">
            <span>{min}</span>
            <span
              className="text-[#2b2b2b] font-bold text-[16px]"
              style={{ fontFamily: 'YSb, Arial, sans-serif' }}
            >
              {value}
            </span>
            <span>{max}</span>
          </div>
        </div>
      );
    },
    []
  );

  return (
    <section className="pb-[50px]" id="calc">
      <div className="max-w-[920px] mx-auto px-[15px]">
        <h2
          className="text-[40px] leading-[44px] mb-8 mt-14"
          style={{ fontFamily: 'YS, Arial, sans-serif' }}
        >
          Калькулятор дохода
        </h2>

        <div
          className="rounded-[24px] p-[28px]"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,.08)', boxSizing: 'border-box' }}
        >
          {/* Transport select */}
          <div className="mb-[30px]">
            <h3
              className="text-[20px] mb-[15px]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Как будете доставлять?
            </h3>
            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="w-full tablet:w-auto cursor-pointer appearance-none"
              style={{
                background: '#f5f4f2',
                border: 'none',
                borderRadius: '16px',
                fontSize: '20px',
                padding: '4px 0',
                fontFamily: 'YS, Arial, sans-serif',
                boxSizing: 'border-box',
              }}
            >
              <option value="1">Машина — 472 ₽/ч</option>
              <option value="2">Велосипед — 412 ₽/ч</option>
              <option value="3">Пеший — 320 ₽/ч</option>
            </select>
          </div>

          {/* Mode info */}
          <div
            className="mb-[30px]"
            style={{
              padding: '16px',
              boxSizing: 'border-box',
              borderRadius: '20px',
              border: '3px solid #f5f4f2',
            }}
          >
            <h4
              className="text-[20px] mb-[10px]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Режим доставки — Когда смогу
            </h4>
            <p
              className="text-[16px] text-[#555]"
              style={{ fontFamily: 'YS, Arial, sans-serif' }}
            >
              Можно начать в любое время и в любом месте. Доход зависит от количества выполненных заказов.
            </p>
          </div>

          {/* Sliders grid */}
          <div className="flex flex-col tablet:flex-row justify-between gap-x-[30px]">
            <div className="tablet:w-[47%]">
              <SliderWithValue
                label="Сколько часов в день планируете работать"
                value={hours}
                min={2}
                max={12}
                onChange={setHours}
              />
            </div>
            <div className="tablet:w-[47%]">
              <SliderWithValue
                label="Количество дней в месяц"
                value={days}
                min={1}
                max={31}
                onChange={setDays}
              />
            </div>
          </div>

          <SliderWithValue
            label="Количество привлечённых людей (бонус 5 000 ₽ за каждого)"
            value={people}
            min={0}
            max={10}
            onChange={setPeople}
          />

          {/* Result */}
          <div
            className="mt-4 rounded-[24px] p-[24px]"
            style={{ background: '#f1f0ed', boxSizing: 'border-box' }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <h3
                className="text-[16px] text-[#2b2b2b]"
                style={{ fontFamily: 'YS, Arial, sans-serif', fontWeight: 'normal', marginBottom: 0 }}
              >
                Возможный доход
              </h3>
              <div
                className="text-[44px] text-[#2b2b2b]"
                style={{ fontFamily: 'YSb, Arial, sans-serif' }}
              >
                {formatNumber(total)} ₽
              </div>
            </div>
          </div>

          {/* Note */}
          <p
            className="mt-[20px] text-[13px] text-[#9e9b98] leading-relaxed"
            style={{ fontFamily: 'YS, Arial, sans-serif' }}
          >
            Данные расчётов дохода являются максимальными. Результаты индивидуальны и могут отличаться от указанных, а также зависят от города, часов доставки и вида транспорта. Указан максимальный показатель дохода партнёров сервиса Яндекс.Еда на территории РФ на основе статистики за 5 месяцев. Чтобы узнать подробности, отправьте заявку.
          </p>
        </div>
      </div>
    </section>
  );
}
