'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Fixed positions spread across a soil canvas (x%, y%)
const POSITIONS = [
    { symbol: 'N',  x: 6,  y: 18 },
    { symbol: 'P',  x: 22, y: 72 },
    { symbol: 'K',  x: 38, y: 28 },
    { symbol: 'Ca', x: 54, y: 65 },
    { symbol: 'Mg', x: 70, y: 20 },
    { symbol: 'S',  x: 84, y: 52 },
    { symbol: 'Fe', x: 14, y: 48 },
    { symbol: 'Mn', x: 30, y: 82 },
    { symbol: 'Zn', x: 46, y: 44 },
    { symbol: 'Cu', x: 62, y: 78 },
    { symbol: 'B',  x: 76, y: 38 },
    { symbol: 'Mo', x: 91, y: 70 },
];

const NAMES: Record<string, Record<string, string>> = {
    N:  { nl: 'Stikstof',   en: 'Nitrogen',   de: 'Stickstoff' },
    P:  { nl: 'Fosfor',     en: 'Phosphorus', de: 'Phosphor' },
    K:  { nl: 'Kalium',     en: 'Potassium',  de: 'Kalium' },
    Ca: { nl: 'Calcium',    en: 'Calcium',    de: 'Calcium' },
    Mg: { nl: 'Magnesium',  en: 'Magnesium',  de: 'Magnesium' },
    S:  { nl: 'Zwavel',     en: 'Sulfur',     de: 'Schwefel' },
    Fe: { nl: 'IJzer',      en: 'Iron',       de: 'Eisen' },
    Mn: { nl: 'Mangaan',    en: 'Manganese',  de: 'Mangan' },
    Zn: { nl: 'Zink',       en: 'Zinc',       de: 'Zink' },
    Cu: { nl: 'Koper',      en: 'Copper',     de: 'Kupfer' },
    B:  { nl: 'Boor',       en: 'Boron',      de: 'Bor' },
    Mo: { nl: 'Molybdeen',  en: 'Molybdenum', de: 'Molybdän' },
};

const NutrientGrid = ({ dict }: { dict: any }) => {
    const pathname = usePathname();
    const lang = pathname?.startsWith('/de') ? 'de' : pathname?.startsWith('/nl') ? 'nl' : 'en';

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [lit, setLit] = useState<Set<number>>(new Set());
    const orderRef = useRef<number[]>([]);
    const stepRef = useRef(0);

    useEffect(() => {
        // Random shuffle order
        const shuffled = [...Array(POSITIONS.length).keys()].sort(() => Math.random() - 0.5);
        orderRef.current = shuffled;

        let timeout: ReturnType<typeof setTimeout>;

        const activate = () => {
            const step = stepRef.current;
            if (step >= POSITIONS.length) {
                // Restart cycle after a pause
                stepRef.current = 0;
                orderRef.current = [...Array(POSITIONS.length).keys()].sort(() => Math.random() - 0.5);
                setLit(new Set());
                setActiveIndex(null);
                timeout = setTimeout(activate, 2400);
                return;
            }

            const idx = orderRef.current[step];
            setActiveIndex(idx);
            setLit(prev => new Set([...prev, idx]));
            stepRef.current += 1;
            timeout = setTimeout(activate, 900);
        };

        timeout = setTimeout(activate, 600);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="w-full relative" style={{ height: '220px' }}>
            {/* Soil background */}
            <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(120,70,20,0.18) 0%, rgba(10,30,15,0.0) 70%)',
                    borderBottom: '1px solid rgba(150,90,30,0.12)',
                }}
            />

            {/* Nutrient dots */}
            {POSITIONS.map((dot, idx) => {
                const isLit = lit.has(idx);
                const isActive = activeIndex === idx;
                const name = NAMES[dot.symbol]?.[lang] ?? dot.symbol;

                return (
                    <div
                        key={dot.symbol}
                        className="absolute flex flex-col items-center"
                        style={{
                            left: `${dot.x}%`,
                            top: `${dot.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        {/* Glow ring on active */}
                        {isActive && (
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'radial-gradient(circle, rgba(251,146,60,0.35) 0%, transparent 70%)',
                                    animation: 'pulse 1s ease-out',
                                }}
                            />
                        )}

                        {/* Dot */}
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                transition: 'background 0.6s ease, box-shadow 0.6s ease',
                                background: isLit
                                    ? 'rgba(251, 146, 60, 0.9)'
                                    : 'rgba(255,255,255,0.12)',
                                boxShadow: isLit
                                    ? '0 0 8px 2px rgba(251,146,60,0.5)'
                                    : 'none',
                            }}
                        />

                        {/* Label */}
                        <span
                            style={{
                                fontSize: '10px',
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                marginTop: '4px',
                                transition: 'color 0.6s ease, opacity 0.6s ease',
                                color: isLit ? 'rgba(251,146,60,0.9)' : 'rgba(255,255,255,0.2)',
                                lineHeight: 1,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {dot.symbol}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default NutrientGrid;
