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

        {/* Review Card */}
        <div className="bg-[#151515] rounded-xl p-6 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <span className="text-[10px] font-bold uppercase text-white/40 tracking-wider">Geverifieerde Google Review</span>
            <div className="flex gap-0.5 ml-auto">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />)}
            </div>
          </div>

          <p className="text-sm text-white/70 italic leading-relaxed mb-4 font-medium">
            "De opbrengst van de tweede vlucht ging van 78g/blok naar 243g/blok. Alleen al de gegevens over microbiële activiteit rechtvaardigden onze investering."
          </p>

          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Karel v.d. Meer</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Commerciële Kweker, Pan NL</span>
          </div>
        </div>

      </div>
    </div>
  );
};
