import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS, easeOut, easeInOut, clamp, progress, lerp, SceneWrapper, Label, SubText, SmallSub } from "../shared";

const CellFill: React.FC<{ fillPercent: number; color: string }> = ({ fillPercent, color }) => {
  const cx = 270, cy = 270;
  const rx = 200, ry = 155;

  const vacuoleFill = Math.max(0, fillPercent - 0.1);
  const vacuoleRx = rx * 0.55 * Math.sqrt(vacuoleFill);
  const vacuoleRy = ry * 0.55 * Math.sqrt(vacuoleFill);

  const organelleCount = Math.round(fillPercent * 10);

  const organellePositions = [
    { ox: -80, oy: -40 }, { ox: 70, oy: -60 }, { ox: -50, oy: 60 },
    { ox: 90, oy: 50 }, { ox: -100, oy: 10 }, { ox: 30, oy: 90 },
    { ox: -30, oy: -90 }, { ox: 110, oy: -20 }, { ox: -110, oy: 60 },
    { ox: 60, oy: -100 },
  ];

  return (
    <svg width={540} height={540} viewBox="0 0 540 540" style={{ overflow: "visible" }}>
      <defs>
        <clipPath id="cellClip">
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
        </clipPath>
      </defs>

      {/* Cell wall outer */}
      <ellipse cx={cx} cy={cy} rx={rx + 10} ry={ry + 10}
        fill="none" stroke="#2a5a2a" strokeWidth={12} />

      {/* Cell background */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#0d200d" />

      {/* Cytoplasm fill - rises with progress */}
      <ellipse cx={cx} cy={cy + ry * (1 - fillPercent)}
        rx={rx * Math.sqrt(fillPercent)} ry={ry * fillPercent}
        fill={color} opacity={0.22} clipPath="url(#cellClip)" />

      {/* Organelles (chloroplasts etc.) */}
      {organellePositions.slice(0, organelleCount).map((pos, i) => (
        <ellipse key={i}
          cx={cx + pos.ox} cy={cy + pos.oy}
          rx={18} ry={11}
          fill={color} opacity={0.55}
          transform={`rotate(${i * 25} ${cx + pos.ox} ${cy + pos.oy})`}
        />
      ))}

      {/* Vacuole (central) - fills with zinc */}
      {vacuoleFill > 0.05 && (
        <>
          <ellipse cx={cx} cy={cy} rx={vacuoleRx} ry={vacuoleRy}
            fill={color} opacity={0.35} />
          <ellipse cx={cx} cy={cy} rx={vacuoleRx} ry={vacuoleRy}
            fill="none" stroke={color} strokeWidth={1.5} opacity={0.6} />
        </>
      )}

      {/* Nucleus */}
      <ellipse cx={cx - 30} cy={cy - 20} rx={35} ry={28}
        fill="#1a3a1a" stroke="#3a7a3a" strokeWidth={1.5} />
      <circle cx={cx - 30} cy={cy - 20} r={8} fill="#4a9a4a" opacity={0.7} />

      {/* Cell membrane inner */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry}
        fill="none" stroke="#3a6a3a" strokeWidth={2} />

      {/* Zn labels floating in */}
      {fillPercent > 0.3 && (
        <text x={cx + 50} y={cy + 10} fontSize={20} fontWeight={700}
          fill={color} opacity={Math.min(1, (fillPercent - 0.3) * 3)}
          fontFamily="'Inter', sans-serif">Zn</text>
      )}
      {fillPercent > 0.55 && (
        <text x={cx - 90} y={cy + 40} fontSize={16} fontWeight={700}
          fill={color} opacity={Math.min(1, (fillPercent - 0.55) * 3)}
          fontFamily="'Inter', sans-serif">Zn</text>
      )}
      {fillPercent > 0.7 && (
        <text x={cx + 20} y={cy - 70} fontSize={16} fontWeight={700}
          fill={color} opacity={Math.min(1, (fillPercent - 0.7) * 4)}
          fontFamily="'Inter', sans-serif">Zn</text>
      )}
    </svg>
  );
};

const CounterUp: React.FC<{ value: number; color: string; frame: number; delay: number }> = ({
  value, color, frame, delay
}) => {
  const p = easeOut(clamp(progress(frame, delay, delay + 40)));
  return (
    <span style={{ fontSize: 88, fontWeight: 700, color, fontVariantNumeric: "tabular-nums" }}>
      +{Math.round(value * p)}%
    </span>
  );
};

export const Zink: React.FC = () => {
  const frame = useCurrentFrame();

  const cellFillP = easeInOut(clamp(progress(frame, 8, 82)));

  return (
    <SceneWrapper>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 50% 50%, #091809 0%, #070f07 72%)" }} />

      <div style={{ position: "absolute", top: 52, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Label text="Zink" color={COLORS.muted} delay={0} frame={frame} />
      </div>

      <div style={{ marginTop: 40 }}>
        <CellFill fillPercent={cellFillP} color={COLORS.blue} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, marginTop: 0 }}>
        <CounterUp value={46} color={COLORS.blue} frame={frame} delay={72} />
        <SubText text="Zink in oud plantsap" delay={86} frame={frame} />
        <SmallSub text="Zn · stabiele accumulatie" delay={96} frame={frame} />
      </div>
    </SceneWrapper>
  );
};
