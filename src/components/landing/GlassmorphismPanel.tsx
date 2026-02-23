import { Star, Activity } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full max-w-md lg:max-w-lg relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
      {/* Connecting Lines - Vitality Links */}
      <svg className="absolute -left-20 top-1/2 -translate-y-1/2 w-20 h-40 pointer-events-none opacity-20 hidden lg:block">
        <path d="M0,0 Q40,20 80,40 M0,160 Q40,140 80,120 M0,80 L80,80" stroke="#FF7E06" strokeWidth="1" fill="none" />
      </svg>

      {/* Decorative Glow behind the panel - more vibrant to avoid 'burnt' look */}
      <div className="absolute -inset-10 bg-[#FFD700]/10 blur-[100px] opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute -inset-4 bg-[#FF7E06]/15 blur-3xl opacity-30 -z-10"></div>

      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.4)] relative overflow-hidden rounded-2xl">
        {/* Subtle Glow Overlay inside the panel */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-white saturate-[0]" />

        {/* Lab-Tech Background Textures */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100%_4px]" />

        {/* Top Metrics Row */}
        <div className="flex justify-between mb-4 border-b border-white/10 pb-4 relative z-10">
          <div className="text-center">
            <span className="block text-[8px] uppercase font-bold text-white/30 tracking-[0.2em] mb-1">Humidity</span>
            <span className="text-xl font-black text-white tracking-tight">88.2<span className="text-[10px] opacity-30 ml-0.5">%</span></span>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <span className="block text-[8px] uppercase font-bold text-white/30 tracking-[0.2em] mb-1">CO2 Niveau</span>
            <span className="text-xl font-black text-white tracking-tight">948<span className="text-[10px] opacity-30 ml-0.5">ppm</span></span>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <span className="block text-[8px] uppercase font-bold text-white/30 tracking-[0.2em] mb-1">Core Temp</span>
            <span className="text-xl font-black text-white tracking-tight">24.1<span className="text-[10px] opacity-30 ml-0.5">°C</span></span>
          </div>
        </div>

        {/* Status Line - New variance */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em]">Live Data Stream</span>
          </div>
          <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest leading-none">ID: FP-2026-XQ</span>
        </div>

        {/* Main Case Study */}
        <div className="mb-6 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="block text-[9px] uppercase font-black text-white/40 tracking-[0.15em]">GRUBBENVORST CASE STUDY</span>
          </div>

          <div className="flex items-end gap-6">
            <div className="flex flex-col">
              <h2 className="text-7xl font-black text-white tracking-tighter leading-none">14%</h2>
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] mt-2 bg-white/10 px-2 py-0.5 rounded inline-block w-fit">Opbrengst-plus</span>
            </div>

            {/* SVG Graph Line - More premium version */}
            <div className="flex-1 h-16 relative">
              <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path
                  d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-40"
                />
                <circle cx="100" cy="5" r="2" fill="white" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>

        {/* Image Grid Row */}
        <div className="grid grid-cols-4 gap-2 mb-6 h-16 relative z-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`rounded-lg border border-white/10 bg-cover bg-center transition-all hover:scale-105 bg-[url('/images/panel-${i === 1 || i === 4 ? 1 : 2}.jpg')]`} />
          ))}
        </div>

        {/* Footer info row */}
        <div className="flex items-center justify-between opacity-50 text-[8px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Activity className="w-2.5 h-2.5" />
            <span>Optimal Vitality System</span>
          </div>
          <span>Active</span>
        </div>
      </div>
    </div>
  );
};
