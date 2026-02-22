import { Star } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full max-w-md lg:max-w-lg relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
      <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 shadow-2xl relative overflow-hidden">

        {/* Top Metrics Row */}
        <div className="flex justify-between mb-8 border-b border-white/10 pb-6">
          <div className="text-center">
            <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Vochtigheid (%)</span>
            <span className="text-2xl font-black text-white tracking-tight">88.2</span>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">CO2 (ppm)</span>
            <span className="text-2xl font-black text-white tracking-tight">948</span>
          </div>
          <div className="text-center border-l border-white/10 pl-8">
            <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Temp (C)</span>
            <span className="text-2xl font-black text-white tracking-tight">24.1</span>
          </div>
        </div>

        {/* Main Case Study */}
        <div className="mb-8">
          <span className="block text-[10px] md:text-[11px] uppercase font-black text-fungipower-orange tracking-[0.15em] mb-4">PRAKTIJKVOORBEELD: CHAMPIGNONKWEKER GRUBBENVORST</span>
          <div className="flex items-end gap-4">
            <h2 className="text-7xl font-black text-white tracking-tighter leading-none">+73%</h2>
            <div className="flex flex-col mb-1">
              <span className="text-sm font-bold text-white/90 uppercase leading-none mb-1">2e</span>
              <span className="text-sm font-bold text-white/50 uppercase leading-none">Vlucht</span>
            </div>

            {/* SVG Graph Line */}
            <svg className="h-12 w-32 ml-auto stroke-white/20" viewBox="0 0 100 40" fill="none">
              <path d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5 V 40 H 0 Z" fill="url(#gradient)" className="opacity-10" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Image Grid Placeholder Row */}
        <div className="grid grid-cols-4 gap-3 mb-8 h-20">
          <div className="bg-white/5 rounded-lg border border-white/5 bg-[url('/images/panel-1.jpg')] bg-cover bg-center transition-opacity hover:opacity-80"></div>
          <div className="bg-white/5 rounded-lg border border-white/5 bg-[url('/images/panel-2.jpg')] bg-cover bg-center transition-opacity hover:opacity-80"></div>
          <div className="bg-white/5 rounded-lg border border-white/5 bg-[url('/images/panel-2.jpg')] bg-cover bg-center transition-opacity hover:opacity-80"></div>
          <div className="bg-white/5 rounded-lg border border-white/5 bg-[url('/images/panel-1.jpg')] bg-cover bg-center transition-opacity hover:opacity-80"></div>
        </div>


      </div>
    </div>
  );
};
