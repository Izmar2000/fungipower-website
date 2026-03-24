import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS, easeOut, easeInOut, clamp, progress, lerp, SceneWrapper, Label, SubText, SmallSub } from "../shared";

type Ion = {
  id: number;
  label: "Na" | "Cl";
  startX: number;
  y: number;
  delay: number;
  speed: number;
  blocked: boolean;
  blockAt: number;
};

const IONS: Ion[] = [
  { id: 0, label: "Na", startX: 100, y: 300, delay: 0, speed: 1, blocked: true, blockAt: 520 },
  { id: 1, label: "Na", startX: 100, y: 420, delay: 6, speed: 0.9, blocked: true, blockAt: 520 },
  { id: 2, label: "Na", startX: 100, y: 540, delay: 12, speed: 1.1, blocked: true, blockAt: 520 },
  { id: 3, label: "Na", startX: 100, y: 660, delay: 4, speed: 0.85, blocked: true, blockAt: 520 },
  { id: 4, label: "Cl", startX: 100, y: 360, delay: 8, speed: 1, blocked: true, blockAt: 520 },
  { id: 5, label: "Cl", startX: 100, y: 480, delay: 2, speed: 0.95, blocked: true, blockAt: 520 },
  { id: 6, label: "Cl", startX: 100, y: 600, delay: 14, speed: 1.05, blocked: true, blockAt: 520 },
  { id: 7, label: "Na", startX: 100, y: 350, delay: 18, speed: 0.7, blocked: true, blockAt: 520 },
  { id: 8, label: "Cl", startX: 100, y: 500, delay: 20, speed: 0.75, blocked: true, blockAt: 520 },
];

const MEMBRANE_X = 560;
const CELL_START = 580;

export const Ionen: React.FC = () => {
  const frame = useCurrentFrame();

  const membraneP = easeOut(clamp(progress(frame, 0, 25)));
  const blockP = easeOut(clamp(progress(frame, 20, 60)));

  const naCount = easeOut(clamp(progress(frame, 70, 115)));
  const clCount = easeOut(clamp(progress(frame, 75, 115)));

  return (
    <SceneWrapper>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 60% 50%, #12080f 0%, #070f07 70%)" }} />

      <div style={{ position: "absolute", top: 52, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Label text="Selectieve ionen-exclusie" color={COLORS.muted} delay={0} frame={frame} />
      </div>

      <svg width={1080} height={1080} style={{ position: "absolute", top: 0, left: 0 }}>

        {/* Cell interior background */}
        <rect x={CELL_START} y={200} width={420} height={660}
          fill="#0a1f0a" rx={20}
          opacity={membraneP * 0.8} />

        {/* Membrane - double line */}
        <rect x={MEMBRANE_X - 12} y={190} width={24} height={680}
          rx={12}
          fill="#2a1a2a"
          stroke={COLORS.pink} strokeWidth={1}
          opacity={membraneP} />

        {/* Membrane channel gates */}
        {[280, 380, 480, 580, 620, 720].map((y, i) => {
          const gateOpen = blockP < 0.5;
          const gateSize = lerp(14, 4, blockP);
          return (
            <rect key={i}
              x={MEMBRANE_X - 13} y={y - gateSize / 2}
              width={26} height={gateSize}
              fill={COLORS.bg} rx={2}
              opacity={membraneP}
            />
          );
        })}

        {/* Cell label */}
        <text x={CELL_START + 210} y={240}
          textAnchor="middle" fontSize={22} fill={COLORS.mutedLight}
          fontFamily="'Inter', sans-serif"
          opacity={membraneP * 0.6}>
          komkommercel
        </text>

        {/* K+ ions that DO pass through (positive) */}
        {[360, 520, 640].map((y, i) => {
          const p = easeOut(clamp(progress(frame, i * 8 + 5, i * 8 + 35)));
          const x = lerp(150, CELL_START + 60 + i * 80, p);
          return (
            <g key={`k${i}`} opacity={p > 0 && p < 1 ? 1 : p}>
              <circle cx={x} cy={y} r={20} fill="#1a4a2a" stroke="#3a9a4a" strokeWidth={1.5} />
              <text x={x} y={y + 6} textAnchor="middle" fontSize={16} fontWeight={700}
                fill="#4aaa6a" fontFamily="'Inter', sans-serif">K⁺</text>
            </g>
          );
        })}

        {/* Blocked Na/Cl ions */}
        {IONS.map((ion) => {
          const travelP = easeOut(clamp(progress(frame, ion.delay, ion.delay + 45)));
          const blockX = MEMBRANE_X - 45;
          const rawX = lerp(ion.startX, blockX + 20, travelP);

          const bounceP = clamp(progress(frame, ion.delay + 45, ion.delay + 55));
          const bouncedX = rawX - Math.sin(bounceP * Math.PI) * 18;

          const color = ion.label === "Na" ? "#dd8844" : COLORS.pink;
          const bgColor = ion.label === "Na" ? "#2a1a08" : "#2a0a1a";

          const opacity = travelP > 0 ? 1 : 0;
          const rejectionP = clamp(progress(frame, ion.delay + 48, ion.delay + 65));

          return (
            <g key={ion.id} opacity={opacity}>
              <circle cx={bouncedX} cy={ion.y} r={22}
                fill={bgColor} stroke={color} strokeWidth={1.5} />
              <text x={bouncedX} y={ion.y + 6} textAnchor="middle"
                fontSize={15} fontWeight={700} fill={color}
                fontFamily="'Inter', sans-serif">
                {ion.label}
              </text>
              {rejectionP > 0 && rejectionP < 0.9 && (
                <>
                  <line x1={bouncedX - 10} y1={ion.y - 10}
                    x2={bouncedX + 10} y2={ion.y + 10}
                    stroke={color} strokeWidth={2.5} strokeLinecap="round"
                    opacity={1 - rejectionP} />
                  <line x1={bouncedX + 10} y1={ion.y - 10}
                    x2={bouncedX - 10} y2={ion.y + 10}
                    stroke={color} strokeWidth={2.5} strokeLinecap="round"
                    opacity={1 - rejectionP} />
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Stats bottom */}
      <div style={{
        position: "absolute", bottom: 100, left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <div style={{
          opacity: easeOut(clamp(progress(frame, 70, 88))),
          transform: `translateY(${lerp(12, 0, easeOut(clamp(progress(frame, 70, 88))))}px)`,
          display: "flex", alignItems: "center", gap: 40,
          marginBottom: 8,
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 20, color: "#dd8844", marginBottom: 2 }}>Na</span>
            <span style={{ fontSize: 72, fontWeight: 700, color: "#dd8844",
              fontVariantNumeric: "tabular-nums" }}>
              −{Math.round(42 * naCount)}%
            </span>
          </div>
          <div style={{ width: 1, height: 80, background: COLORS.border }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 20, color: COLORS.pink, marginBottom: 2 }}>Cl</span>
            <span style={{ fontSize: 72, fontWeight: 700, color: COLORS.pink,
              fontVariantNumeric: "tabular-nums" }}>
              −{Math.round(46 * clCount)}%
            </span>
          </div>
        </div>
        <SubText text="Selectieve ionen-exclusie" delay={88} frame={frame} />
        <SmallSub text="Na −42% · Cl −46% in jong blad" delay={98} frame={frame} />
      </div>
    </SceneWrapper>
  );
};
