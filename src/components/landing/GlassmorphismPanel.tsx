import { Activity } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full max-w-md lg:max-w-lg relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
      {/* Decorative Glow behind the panel */}
      <div className="absolute -inset-4 bg-white/5 blur-3xl opacity-20 -z-10 animate-pulse"></div>

      <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-3xl">
        {/* Top Metrics Row */}
        <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
          <div className="text-center">
            <span className="block text-[10px] uppercase font-black text-white/60 tracking-[0.2em] mb-3">HUMIDITY</span>
            <span className="text-3xl font-black text-white tracking-tight">88.2%</span>
          </div>
          <div className="text-center border-l border-white/10 px-4">
            <span className="block text-[10px] uppercase font-black text-white/60 tracking-[0.2em] mb-3">CO2</span>
            <span className="text-3xl font-black text-white tracking-tight">948</span>
          </div>
          <div className="text-center border-l border-white/10 pl-4">
            <span className="block text-[10px] uppercase font-black text-white/60 tracking-[0.2em] mb-3">TEMP</span>
            <span className="text-3xl font-black text-white tracking-tight">24.1°C</span>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Main Section */}
        <div className="mb-8 relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">REAL-TIME ANALYSIS</span>
              <h2 className="text-8xl font-black text-white tracking-tighter leading-none">+73%</h2>
              <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">YIELD INCREASE</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
              <span className="text-[10px] font-black text-white uppercase tracking-wider">LIVE MONITOR</span>
            </div>
          </div>

          {/* SVG Graph Line */}
          <div className="absolute right-0 bottom-4 w-1/2">
            <svg className="w-full h-20" viewBox="0 0 100 40" fill="none">
              <path
                d="M0 35 C 20 35, 30 30, 40 32 C 50 34, 60 25, 80 20 L 100 10"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M0 35 C 20 35, 30 30, 40 32 C 50 34, 60 25, 80 20 L 100 10 V 40 H 0 Z" fill="url(#grad)" className="opacity-20" />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* 4 Empty Grid Boxes */}
        <div className="grid grid-cols-4 gap-4 mb-8 h-24 relative z-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-white/10 rounded-lg bg-white/[0.02]" />
          ))}
        </div>

        {/* Bottom Verification Section */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-left relative z-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
              <Activity className="w-6 h-6 text-white opacity-80" />
            </div>
            <div>
              <span className="block text-[11px] font-black uppercase text-white/50 tracking-widest mb-1">VERIFICATION STATUS</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white/80" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-white/90 font-medium leading-relaxed italic">
            "Structurele optimalisatie van mycelium vitaliteit resulteert in maximale opbrengst."
          </p>
        </div>
      </div>
    </div>
  );
};
