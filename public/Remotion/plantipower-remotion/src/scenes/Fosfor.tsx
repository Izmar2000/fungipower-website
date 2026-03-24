import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, easeOut, easeInOut, clamp, progress, lerp, SceneWrapper, Label, SubText, SmallSub } from "../shared";

type Branch = {
  x1: number; y1: number;
  x2: number; y2: number;
  delay: number;
  thickness: number;
  child?: boolean;
};

const ROOT_BRANCHES: Branch[] = [
  { x1: 540, y1: 320, x2: 540, y2: 580, delay: 0, thickness: 6 },
  { x1: 540, y1: 380, x2: 400, y2: 520, delay: 8, thickness: 4 },
  { x1: 540, y1: 380, x2: 680, y2: 520, delay: 8, thickness: 4 },
  { x1: 540, y1: 440, x2: 370, y2: 620, delay: 14, thickness: 3 },
  { x1: 540, y1: 440, x2: 710, y2: 600, delay: 14, thickness: 3 },
  { x1: 540, y1: 500, x2: 460, y2: 680, delay: 18, thickness: 2.5 },
  { x1: 540, y1: 500, x2: 620, y2: 680, delay: 18, thickness: 2.5 },
  { x1: 400, y1: 520, x2: 320, y2: 660, delay: 22, thickness: 2, child: true },
  { x1: 400, y1: 520, x2: 430, y2: 670, delay: 24, thickness: 2, child: true },
  { x1: 680, y1: 520, x2: 760, y2: 660, delay: 22, thickness: 2, child: true },
  { x1: 680, y1: 520, x2: 650, y2: 670, delay: 24, thickness: 2, child: true },
  { x1: 370, y1: 620, x2: 290, y2: 760, delay: 28, thickness: 1.5, child: true },
  { x1: 370, y1: 620, x2: 350, y2: 780, delay: 30, thickness: 1.5, child: true },
  { x1: 710, y1: 600, x2: 790, y2: 750, delay: 28, thickness: 1.5, child: true },
  { x1: 710, y1: 600, x2: 730, y2: 780, delay: 30, thickness: 1.5, child: true },
  { x1: 460, y1: 680, x2: 400, y2: 820, delay: 34, thickness: 1.2, child: true },
  { x1: 620, y1: 680, x2: 680, y2: 820, delay: 34, thickness: 1.2, child: true },
  { x1: 540, y1: 580, x2: 500, y2: 760, delay: 20, thickness: 2 },
  { x1: 540, y1: 580, x2: 580, y2: 760, delay: 20, thickness: 2 },
];

const RootBranch: React.FC<{ branch: Branch; frame: number; maxFrames: number; color: string }> = ({
  branch, frame, maxFrames, color
}) => {
  const p = easeOut(clamp(progress(frame, branch.delay, branch.delay + 18)));
  const cx = lerp(branch.x1, branch.x2, p);
  const cy = lerp(branch.y1, branch.y2, p);
  return (
    <line
      x1={branch.x1} y1={branch.y1}
      x2={cx} y2={cy}
      stroke={color}
      strokeWidth={branch.thickness}
      strokeLinecap="round"
      opacity={branch.child ? 0.7 : 0.9}
    />
  );
};

const RootTips: React.FC<{ frame: number; color: string }> = ({ frame, color }) => {
  const tips = [
    { x: 290, y: 760, delay: 38 }, { x: 350, y: 780, delay: 40 },
    { x: 790, y: 750, delay: 38 }, { x: 730, y: 780, delay: 40 },
    { x: 400, y: 820, delay: 44 }, { x: 680, y: 820, delay: 44 },
    { x: 320, y: 660, delay: 32 }, { x: 760, y: 660, delay: 32 },
  ];
  return (
    <>
      {tips.map((tip, i) => {
        const p = easeOut(clamp(progress(frame, tip.delay, tip.delay + 12)));
        return (
          <circle key={i} cx={tip.x} cy={tip.y} r={4 * p}
            fill={color} opacity={0.6 * p} />
        );
      })}
    </>
  );
};

const PlantBase: React.FC<{ frame: number }> = ({ frame }) => {
  const stemP = easeOut(clamp(progress(frame, 0, 25)));
  const leafP = easeOut(clamp(progress(frame, 15, 40)));

  return (
    <>
      <rect x={510} y={lerp(320, 200, stemP)} width={60} height={lerp(0, 120, stemP)}
        rx={30} fill="#1a4a1a" />
      <ellipse cx={540} cy={200} rx={70 * leafP} ry={40 * leafP}
        fill="#2a6a1a" opacity={0.9} />
      <ellipse cx={480} cy={220} rx={55 * leafP} ry={30 * leafP}
        fill="#3a7a2a" opacity={0.8}
        transform={`rotate(-20 480 220)`} />
      <ellipse cx={600} cy={215} rx={55 * leafP} ry={30 * leafP}
        fill="#3a7a2a" opacity={0.8}
        transform={`rotate(20 600 215)`} />
      <line x1={540} y1={240} x2={540} y2={320}
        stroke="#2a5a1a" strokeWidth={8} strokeLinecap="round" />
    </>
  );
};

export const Fosfor: React.FC = () => {
  const frame = useCurrentFrame();

  const beforeAfterP = easeOut(clamp(progress(frame, 85, 108)));
  const rootColor = COLORS.teal;

  return (
    <SceneWrapper>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "radial-gradient(ellipse at 50% 40%, #0a1f12 0%, #070f07 70%)" }} />

      <svg width={1080} height={1080} style={{ position: "absolute", top: 0, left: 0 }}>
        <line x1={80} y1={330} x2={1000} y2={330}
          stroke={COLORS.border} strokeWidth={1.5} strokeDasharray="6,6" opacity={0.5} />

        <PlantBase frame={frame} />

        {ROOT_BRANCHES.map((b, i) => (
          <RootBranch key={i} branch={b} frame={frame} maxFrames={120} color={rootColor} />
        ))}
        <RootTips frame={frame} color={rootColor} />
      </svg>

      <div style={{
        position: "absolute", bottom: 120, left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 8,
      }}>
        <div style={{
          opacity: beforeAfterP,
          transform: `translateY(${lerp(12, 0, beforeAfterP)}px)`,
          display: "flex", alignItems: "center", gap: 24, marginBottom: 8,
        }}>
          <span style={{ fontSize: 52, fontWeight: 700, color: COLORS.mutedLight, fontVariantNumeric: "tabular-nums" }}>11%</span>
          <span style={{ fontSize: 36, color: COLORS.muted }}>→</span>
          <span style={{ fontSize: 72, fontWeight: 700, color: rootColor, fontVariantNumeric: "tabular-nums" }}>86%</span>
        </div>
        <SubText text="Fosfor opname" delay={88} frame={frame} />
        <SmallSub text="bij 45% hogere P-gift via gietwater" delay={98} frame={frame} />
      </div>

      <div style={{ position: "absolute", top: 52, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Label text="Fosfor" color={COLORS.muted} delay={0} frame={frame} />
      </div>
    </SceneWrapper>
  );
};
