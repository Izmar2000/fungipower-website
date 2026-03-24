export const COLORS = {
  bg: "#070f07",
  bgCard: "#0d1f0d",
  green: "#7edd44",
  greenDim: "#3a6a1a",
  greenMid: "#4aaa2a",
  white: "#ffffff",
  muted: "#4a7a4a",
  mutedLight: "#8ab88a",
  teal: "#44ddaa",
  yellow: "#dddd44",
  blue: "#44aadd",
  pink: "#dd44aa",
  border: "#1a3a1a",
};

export const FONT = {
  sans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
};

export function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function easeOutElastic(t: number): number {
  const c4 = (2 * Math.PI) / 3;
  return t === 0 ? 0 : t === 1 ? 1 :
    Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function clamp(v: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, v));
}

export function progress(frame: number, start: number, end: number): number {
  return clamp((frame - start) / (end - start));
}

export const SceneWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    width: 1080,
    height: 1080,
    background: COLORS.bg,
    fontFamily: FONT.sans,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  }}>
    {children}
  </div>
);

import React from "react";

export const Label: React.FC<{ text: string; color?: string; delay?: number; frame: number }> = ({
  text, color = COLORS.muted, delay = 0, frame
}) => {
  const p = easeOut(clamp((frame - delay) / 20));
  return (
    <div style={{
      fontSize: 22,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color,
      fontWeight: 500,
      opacity: p,
      transform: `translateY(${lerp(10, 0, p)}px)`,
      marginBottom: 16,
    }}>
      {text}
    </div>
  );
};

export const BigStat: React.FC<{ text: string; color?: string; delay?: number; frame: number }> = ({
  text, color = COLORS.green, delay = 0, frame
}) => {
  const p = easeOutElastic(clamp((frame - delay) / 35));
  return (
    <div style={{
      fontSize: 96,
      fontWeight: 700,
      color,
      lineHeight: 1,
      opacity: clamp((frame - delay) / 15),
      transform: `scale(${lerp(0.7, 1, p)})`,
      marginBottom: 12,
      fontVariantNumeric: "tabular-nums",
    }}>
      {text}
    </div>
  );
};

export const SubText: React.FC<{ text: string; delay?: number; frame: number }> = ({
  text, delay = 0, frame
}) => {
  const p = easeOut(clamp((frame - delay) / 20));
  return (
    <div style={{
      fontSize: 26,
      color: COLORS.mutedLight,
      opacity: p,
      transform: `translateY(${lerp(8, 0, p)}px)`,
      marginBottom: 8,
      fontWeight: 400,
      textAlign: "center",
    }}>
      {text}
    </div>
  );
};

export const SmallSub: React.FC<{ text: string; delay?: number; frame: number }> = ({
  text, delay = 0, frame
}) => {
  const p = easeOut(clamp((frame - delay) / 20));
  return (
    <div style={{
      fontSize: 20,
      color: COLORS.muted,
      opacity: p,
      fontWeight: 400,
      textAlign: "center",
    }}>
      {text}
    </div>
  );
};
