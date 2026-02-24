'use client';

import { useState, useCallback } from 'react';

const TYPE_RATES: Record<string, number> = {
  '1': 472,
  '2': 412,
  '3': 320,
};

const PEOPLE_BONUS = 5000;

export default function Calculator() {
  const [transport, setTransport] = useState('1');
  const [hours, setHours] = useState(6);
  const [days, setDays] = useState(25);
  const [people, setPeople] = useState(10);

  const total = TYPE_RATES[transport] * hours * days + people * PEOPLE_BONUS;

  const formatNumber = (n: number) => n.toLocaleString('ru-RU');

  const Slider = useCallback(({ label, value, min, max, onChange }: {
    label: string; value: number; min: number; max: number; onChange: (v: number) => void;
  }) => {
    const pct = ((value - min) / (max - min)) * 100;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, color: '#020807' }}>{label}</label>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: '#020807' }}>{value}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            width: '100%',
            background: `linear-gradient(to right, #FFCC00 0%, #FFCC00 ${pct}%, #dee0e3 ${pct}%, #dee0e3 100%)`,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(2,8,7,0.4)' }}>{min}</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(2,8,7,0.4)' }}>{max}</span>
        </div>
      </div>
    );
  }, []);

  return (
    <section id="calc" style={{ background: '#FFFFFF', padding: '112px 64px' }}>
      <div style={{ maxWidth: '1312px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#020807' }}>Калькулятор</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '52px', fontWeight: 500, color: '#020807', lineHeight: '1.2', letterSpacing: '-0.52px' }}>
              Рассчитайте свой потенциальный доход
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#020807', lineHeight: '1.5' }}>
              Используйте интерактивный калькулятор для расчёта заработка в зависимости от выбранного формата работы.
            </p>
          </div>
        </div>

        {/* Calculator widget */}
        <div style={{ background: '#F2F2F2', borderRadius: '8px', border: '1px solid rgba(2,8,7,0.15)', padding: '48px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Transport */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 600, color: '#020807' }}>
              Тип доставки
            </label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { val: '1', label: 'Автомобиль', rate: '472 ₽/ч' },
                { val: '2', label: 'Велосипед', rate: '412 ₽/ч' },
                { val: '3', label: 'Пеший', rate: '320 ₽/ч' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => setTransport(opt.val)}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500,
                    color: '#020807', cursor: 'pointer', padding: '10px 20px',
                    borderRadius: '6px', border: '1px solid rgba(2,8,7,0.15)',
                    background: transport === opt.val ? '#FFCC00' : '#FFFFFF',
                    transition: 'background 0.15s',
                  }}
                >
                  {opt.label} — {opt.rate}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div style={{ display: 'flex', gap: '48px' }}>
            <div style={{ flex: 1 }}>
              <Slider label="Часов в день" value={hours} min={2} max={12} onChange={setHours} />
            </div>
            <div style={{ flex: 1 }}>
              <Slider label="Дней в месяц" value={days} min={1} max={31} onChange={setDays} />
            </div>
          </div>

          <Slider
            label="Привлечённых курьеров (бонус 5 000 ₽ каждый)"
            value={people}
            min={0}
            max={10}
            onChange={setPeople}
          />

          {/* Result */}
          <div style={{ background: '#FFFFFF', borderRadius: '8px', padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(2,8,7,0.1)' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 400, color: '#020807' }}>
              Возможный доход в месяц
            </span>
            <span style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '48px', fontWeight: 500, color: '#020807', letterSpacing: '-1px' }}>
              {formatNumber(total)} ₽
            </span>
          </div>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(2,8,7,0.5)', lineHeight: '1.5' }}>
            Данные расчётов дохода являются максимальными. Результаты индивидуальны и зависят от города, часов доставки и вида транспорта.
          </p>
        </div>
      </div>
    </section>
  );
}
