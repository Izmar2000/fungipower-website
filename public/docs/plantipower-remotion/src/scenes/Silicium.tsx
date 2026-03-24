import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS, easeOut, easeInOut, clamp, progress, lerp, SceneWrapper, Label, BigStat, SubText, SmallSub } from "../shared";

const CucumberFill: React.FC<{ fillPercent: number; color: string }> = ({ fillPercent, color }) => {
  const W = 220;
  const H = 380;
  const rx = 108;

  const bumps = [0.18, 0.35, 0.52, 0.68, 0.82];

  const fillHeight = H * (fillPercent / 100);
  const fillY = H - fillHeight;

  return (
    <svg width={W} height={H + 40} viewBox={`0 0 ${W} ${H + 40}`} style={{ overflow: "visible" }}>
      <defs>
        <clipPath id="cucClip">
          <ellipse cx={W / 2} cy={H / 2 + 20} rx={rx} ry={H / 2} />
        </clipPath>
        <clipPath id="fillClip">
          <rect x={0} y={fillY + 20} width={W} height={fillHeight + 20} />
        </clipPath>
      </defs>

      {/* Shadow base */}
      <ellipse cx={W / 2} cy={H / 2 + 20} rx={rx} ry={H / 2}
        fill="#0d1f0d" stroke={COLORS.border} strokeWidth={2} />

      {/* Fill */}
      <ellipse cx={W / 2} cy={H / 2 + 20} rx={rx} ry={H / 2}
        fill={color} opacity={0.88} clipPath="url(#fillClip)" />

      {/* Stripe texture on fill */}
      {[...Array(7)].map((_, i) => (
        <line key={i}
          x1={W / 2 - rx + i * 35} y1={20}
          x2={W / 2 - rx + i * 35} y2={H + 20}
          stroke="rgba(0,0,0,0.08)" strokeWidth={12}
          clipPath="url(#cucClip)"
        />
      ))}

      {/* Bumps on skin */}
      {bumps.map((by, i) => (
        <ellipse key={i}
          cx={W / 2 + (i % 2 === 0 ? -rx + 14 : rx - 14)}
          cy={by * H + 20}
          rx={7} ry={5}
          fill={fillPercent / 100 > by ? color : "#1a3a1a"}
          stroke={COLORS.border} strokeWidth={1}
        />
      ))}

      {/* Outline */}
      <ellipse cx={W / 2} cy={H / 2 + 20} rx={rx} ry={H / 2}
        fill="none" stroke={COLORS.greenDim} strokeWidth={2.5} />

      {/* Stem */}
      <path d={`M${W / 2 - 10} 20 Q${W / 2} 4 ${W / 2 + 12} 10`}
        fill="none" stroke="#5aaa3a" strokeWidth={7} strokeLinecap="round" />
      <path d={`M${W / 2 + 12} 10 Q${W / 2 + 30} -8 ${W / 2 + 22} -18`}
        fill="none" stroke="#4a9a2a" strokeWidth={5} strokeLinecap="round" />

      {/* Percentage text inside */}
      <text
        x={W / 2} y={H / 2 + 28}
        textAnchor="middle"
        fontSize={48}
        fontWeight={700}
        fill="white"
        fontFamily="'Inter', sans-serif"
        opacity={0.9}
      >
        {Math.round(fillPercent)}%
      </text>
    </svg>
  );
};

export const Silicium: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fillProgress = easeInOut(clamp(progress(frame, 20, 90)));
  const currentFill = lerp(48, 94, fillProgress);

  const statP = easeOut(clamp(progress(frame, 85, 105)));

  return (
    <SceneWrapper>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 50% 60%, #0d2a0d 0%, #070f07 70%)" }} />

      <div style={{ position: "relative", display: "flex", flexDirection: "column",
        alignItems: "center", gap: 0 }}>

        <Label text="Silicium opname" color={COLORS.muted} delay={0} frame={frame} />

        <div style={{ margin: "32px 0 28px" }}>
          <CucumberFill fillPercent={currentFill} color={COLORS.green} />
        </div>

        <div style={{
          opacity: statP,
          transform: `translateY(${lerp(12, 0, statP)}px)`,
          display: "flex", alignItems: "center", gap: 24,
          marginBottom: 16,
        }}>
          <span style={{ fontSize: 56, fontWeight: 700, color: COLORS.mutedLight, fontVariantNumeric: "tabular-nums" }}>48%</span>
          <span style={{ fontSize: 40, color: COLORS.muted }}>→</span>
          <span style={{ fontSize: 72, fontWeight: 700, color: COLORS.green, fontVariantNumeric: "tabular-nums" }}>94%</span>
        </div>

        <SubText text="Silicium opname verdubbeld" delay={90} frame={frame} />
        <SmallSub text="gietwater stabiel" delay={100} frame={frame} />
      </div>
    </SceneWrapper>
  );
};
