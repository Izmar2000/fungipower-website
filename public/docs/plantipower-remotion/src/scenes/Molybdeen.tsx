import React from "react";
import { useCurrentFrame } from "remotion";
import { COLORS, easeOut, easeInOut, clamp, progress, lerp, SceneWrapper, Label, SubText, SmallSub } from "../shared";

const LeafShape: React.FC<{ fillColor: string; veinsOpacity: number }> = ({ fillColor, veinsOpacity }) => {
  return (
    <svg width={500} height={420} viewBox="0 0 500 420" style={{ overflow: "visible" }}>
      <defs>
        <clipPath id="leafClip">
          <path d="M250 30 C350 30 460 120 460 220 C460 340 350 400 250 400 C150 400 40 340 40 220 C40 120 150 30 250 30 Z" />
        </clipPath>
      </defs>

      {/* Leaf body */}
      <path d="M250 30 C350 30 460 120 460 220 C460 340 350 400 250 400 C150 400 40 340 40 220 C40 120 150 30 250 30 Z"
        fill={fillColor} />

      {/* Main vein */}
      <line x1={250} y1={40} x2={250} y2={395}
        stroke="rgba(0,0,0,0.18)" strokeWidth={4} strokeLinecap="round"
        opacity={veinsOpacity} clipPath="url(#leafClip)" />

      {/* Side veins left */}
      {[120, 160, 200, 240, 280, 320, 360].map((y, i) => (
        <line key={`l${i}`}
          x1={250} y1={y}
          x2={250 - 80 - (i < 3 ? i * 10 : (6 - i) * 10)} y2={y + 30}
          stroke="rgba(0,0,0,0.14)" strokeWidth={2} strokeLinecap="round"
          opacity={veinsOpacity} clipPath="url(#leafClip)" />
      ))}
      {/* Side veins right */}
      {[120, 160, 200, 240, 280, 320, 360].map((y, i) => (
        <line key={`r${i}`}
          x1={250} y1={y}
          x2={250 + 80 + (i < 3 ? i * 10 : (6 - i) * 10)} y2={y + 30}
          stroke="rgba(0,0,0,0.14)" strokeWidth={2} strokeLinecap="round"
          opacity={veinsOpacity} clipPath="url(#leafClip)" />
      ))}

      {/* Outline */}
      <path d="M250 30 C350 30 460 120 460 220 C460 340 350 400 250 400 C150 400 40 340 40 220 C40 120 150 30 250 30 Z"
        fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth={2} />

      {/* Stem */}
      <path d="M250 400 Q245 430 240 455" fill="none" stroke="#2a5a1a" strokeWidth={8} strokeLinecap="round" />
    </svg>
  );
};

function lerpColor(c1: string, c2: string, t: number): string {
  const hex = (c: string) => [
    parseInt(c.slice(1, 3), 16),
    parseInt(c.slice(3, 5), 16),
    parseInt(c.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = hex(c1);
  const [r2, g2, b2] = hex(c2);
  const r = Math.round(lerp(r1, r2, t));
  const g = Math.round(lerp(g1, g2, t));
  const b = Math.round(lerp(b1, b2, t));
  return `rgb(${r},${g},${b})`;
}

const CounterUp: React.FC<{ value: number; color: string; frame: number; delay: number }> = ({
  value, color, frame, delay
}) => {
  const p = easeOut(clamp(progress(frame, delay, delay + 40)));
  const displayed = Math.round(value * p);
  return (
    <span style={{ fontSize: 88, fontWeight: 700, color, fontVariantNumeric: "tabular-nums",
      display: "inline-block", minWidth: 200, textAlign: "center" }}>
      +{displayed}%
    </span>
  );
};

export const Molybdeen: React.FC = () => {
  const frame = useCurrentFrame();

  const leafP = easeInOut(clamp(progress(frame, 10, 80)));
  const leafColor = lerpColor("#4a8a2a", "#1a4f0a", leafP);
  const veinsP = easeOut(clamp(progress(frame, 20, 70)));

  const particleP = clamp(progress(frame, 5, 75));

  return (
    <SceneWrapper>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 50% 45%, #0a1a08 0%, #070f07 70%)" }} />

      <div style={{ position: "absolute", top: 52, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Label text="Molybdeen" color={COLORS.muted} delay={0} frame={frame} />
      </div>

      {/* Floating particles = molybdeen molecules */}
      <svg width={1080} height={1080} style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
        {[...Array(18)].map((_, i) => {
          const angle = (i / 18) * Math.PI * 2;
          const radius = 280 + (i % 3) * 60;
          const cx = 540 + Math.cos(angle + particleP * 1.2) * radius;
          const cy = 480 + Math.sin(angle + particleP * 1.2) * radius * 0.5;
          const arriving = particleP > i / 18;
          return (
            <circle key={i} cx={cx} cy={cy} r={5}
              fill={COLORS.yellow} opacity={arriving ? 0.5 : 0}
            />
          );
        })}
      </svg>

      <div style={{ marginTop: 60 }}>
        <LeafShape fillColor={leafColor} veinsOpacity={veinsP} />
      </div>

      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 4, marginTop: 8,
      }}>
        <CounterUp value={88} color={COLORS.yellow} frame={frame} delay={65} />
        <SubText text="Molybdeen in oud plantsap" delay={85} frame={frame} />
        <SmallSub text="direct bewijs ALL12® · bij lagere Mo-gift" delay={95} frame={frame} />
      </div>
    </SceneWrapper>
  );
};
