import { Star, Activity } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full max-w-md lg:max-w-lg relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
      {/* Decorative Glow behind the panel */}
      <div className="absolute -inset-4 bg-fungipower-orange/20 blur-3xl opacity-30 -z-10 animate-pulse"></div>

      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative overflow-hidden rounded-2xl">
        {/* Subtle Texture Overlay inside the panel - Simplified to avoid lint issues */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-white saturate-[0]" />

        {/* Top Metrics Row */}
        <div className="flex justify-between mb-8 border-b border-white/10 pb-6 relative z-10">
          <div className="text-center">
            <span className="block text-[10px] uppercase font-bold text-white/40 tracking-[0.2em] mb-2">Vochtigheid (%)</span>
            <span className="text-2xl font-black text-white tracking-tight">88.2</span>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <span className="block text-[10px] uppercase font-bold text-white/40 tracking-[0.2em] mb-2">CO2 (ppm)</span>
            <span className="text-2xl font-black text-white tracking-tight">948</span>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <span className="block text-[10px] uppercase font-bold text-white/40 tracking-[0.2em] mb-2">Temp (C)</span>
            <span className="text-2xl font-black text-white tracking-tight">24.1</span>
          </div>
        </div>

        {/* Main Case Study */}
        <div className="mb-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="block text-[10px] md:text-[11px] uppercase font-black text-white/60 tracking-[0.2em]">PRAKTIJKVOORBEELD: GRUBBENVORST</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/10 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              <span className="text-[8px] font-bold text-white/80 uppercase tracking-tighter">Live Resultaat</span>
            </div>
          </div>

          <div className="flex items-end gap-4">
            <h2 className="text-7xl font-black text-white tracking-tighter leading-none">+73%</h2>
            <div className="flex flex-col mb-1">
              <span className="text-sm font-bold text-white uppercase leading-none mb-1">Elke</span>
              <span className="text-sm font-bold text-white/50 uppercase leading-none">Vlucht</span>
            </div>

            {/* SVG Graph Line - More premium version */}
            <svg className="h-12 w-32 ml-auto" viewBox="0 0 100 40" fill="none">
              <path
                d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-40"
              />
              <path d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5 V 40 H 0 Z" fill="url(#gradient-glass)" className="opacity-10" />
              <defs>
                <linearGradient id="gradient-glass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Image Grid Placeholder Row - Now more integrated */}
        <div className="grid grid-cols-4 gap-3 mb-8 h-20 relative z-10">
          <div className="bg-white/5 rounded-xl border border-white/10 bg-[url('/images/panel-1.jpg')] bg-cover bg-center transition-all hover:bg-white/10 hover:scale-105 cursor-pointer"></div>
          <div className="bg-white/5 rounded-xl border border-white/10 bg-[url('/images/panel-2.jpg')] bg-cover bg-center transition-all hover:bg-white/10 hover:scale-105 cursor-pointer"></div>
          <div className="bg-white/5 rounded-xl border border-white/10 bg-[url('/images/panel-2.jpg')] bg-cover bg-center transition-all hover:bg-white/10 hover:scale-105 cursor-pointer"></div>
          <div className="bg-white/5 rounded-xl border border-white/10 bg-[url('/images/panel-1.jpg')] bg-cover bg-center transition-all hover:bg-white/10 hover:scale-105 cursor-pointer"></div>
        </div>

        {/* Testimonial Section - Restored and compliant */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-left relative z-10 transition-all hover:bg-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10">
              <Star className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase text-white/40 tracking-wider leading-none mb-1">Gebruikerservaring</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 text-white fill-white shadow-sm" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-white/80 italic leading-relaxed mb-4 font-medium">
            "Testimonial volgt na afronding praktijkproeven."
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-black text-white uppercase tracking-wider">Praktijkteler</span>
              <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Aansluiting, Nederland</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
