import { Star, Activity } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full max-w-md lg:max-w-lg relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
      {/* Connecting Lines - Vitality Links */}
      <svg className="absolute -left-20 top-1/2 -translate-y-1/2 w-20 h-40 pointer-events-none opacity-20 hidden lg:block">
        <path d="M0,0 Q40,20 80,40 M0,160 Q40,140 80,120 M0,80 L80,80" stroke="#FF7E06" strokeWidth="1" fill="none" />
      </svg>

      {/* Decorative Glow behind the panel - more vibrant to avoid 'burnt' look */}
      <div className="absolute -inset-10 bg-[#FFD700]/10 blur-[80px] opacity-40 -z-10 animate-pulse"></div>
      <div className="absolute -inset-4 bg-[#FF7E06]/20 blur-3xl opacity-40 -z-10"></div>

      <div className="bg-white/10 backdrop-blur-[60px] border border-white/20 p-6 shadow-[0_24px_64px_rgba(255,255,255,0.08)] relative overflow-hidden rounded-2xl ring-1 ring-white/10">
        {/* Fresh Glass Shine & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />

        {/* Metric Grid - Clean & Lab-like */}
        <div className="flex justify-between mb-6 border-b border-white/20 pb-6 relative z-10 gap-4">
          <div className="text-center flex-1">
            <span className="block text-[10px] uppercase font-black text-white/80 tracking-[0.25em] mb-2">Humidity</span>
            <span className="text-3xl font-black text-white tracking-tighter">88.2%</span>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center flex-1">
            <span className="block text-[10px] uppercase font-black text-white/80 tracking-[0.25em] mb-2">CO2</span>
            <span className="text-3xl font-black text-white tracking-tighter">948</span>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center flex-1">
            <span className="block text-[10px] uppercase font-black text-white/80 tracking-[0.25em] mb-2">Temp</span>
            <span className="text-3xl font-black text-white tracking-tighter">24.1°C</span>
          </div>
        </div>

        {/* Main Result Headline */}
        <div className="mb-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase font-black text-white tracking-[0.2em] opacity-90">REAL-TIME ANALYSIS</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/40 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-green-200 uppercase tracking-tighter">Live Monitor</span>
            </div>
          </div>

          <div className="flex items-end gap-6 h-20">
            <div className="flex flex-col">
              <span className="text-7xl font-black text-white tracking-tighter leading-none drop-shadow-lg">+73%</span>
              <span className="text-xs font-black text-white/70 uppercase tracking-[0.25em] mt-1">YIELD INCREASE</span>
            </div>

            <div className="flex-1 h-full flex items-center">
              <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <path d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5 V 40 H 0 Z" fill="white" className="opacity-10" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scientific Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6 relative z-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-lg border border-white/30 bg-white/5 overflow-hidden">
              <div className={`w-full h-full bg-center bg-cover bg-[url('/images/panel-${i > 2 ? i - 2 : i}.jpg')] grayscale-[0.5] brightness-110`} />
            </div>
          ))}
        </div>

        {/* Clean Testimonial */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-5 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/10 rounded border border-white/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Verification Status</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-white text-white" />)}
              </div>
            </div>
          </div>
          <p className="text-[13px] text-white/90 font-medium italic leading-relaxed">
            "Structurele optimalisatie van mycelium vitaliteit resulteert in maximale opbrengst."
          </p>
        </div>
      </div>
    </div>
  );
};
