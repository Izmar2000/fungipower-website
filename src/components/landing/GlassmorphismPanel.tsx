import { Star, ShieldCheck, Activity, Thermometer, Droplets, Zap } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full max-w-[460px] relative z-10 transform transition-all duration-700 hover:scale-[1.01]">
      {/* Decorative circuitry lines - very subtle */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />

      <div className="bg-white/95 backdrop-blur-2xl p-8 shadow-[0_40px_100px_rgba(0,0,0,0.25)] relative overflow-hidden rounded-[1.5rem] border border-white/20">
        {/* Animated accent light */}
        <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-transparent via-[#F58220]/40 to-transparent" />

        {/* Top Metrics Row - Redesigned for premium feel */}
        <div className="grid grid-cols-3 gap-4 mb-10 border-b border-gray-100 pb-8">
          <div className="flex flex-col items-center">
            <span className="text-[8px] uppercase font-black tracking-widest text-gray-400 mb-2">VOCHTIGHEID (%)</span>
            <span className="text-3xl font-black text-gray-900 tracking-tight">88.2</span>
          </div>
          <div className="flex flex-col items-center border-l border-gray-100">
            <span className="text-[8px] uppercase font-black tracking-widest text-gray-400 mb-2">CO2 (PPM)</span>
            <span className="text-3xl font-black text-gray-900 tracking-tight">948</span>
          </div>
          <div className="flex flex-col items-center border-l border-gray-100">
            <span className="text-[8px] uppercase font-black tracking-widest text-gray-400 mb-2">TEMP (C)</span>
            <span className="text-3xl font-black text-gray-900 tracking-tight">24.1</span>
          </div>
        </div>

        {/* Main Stat Row - The 14% highlight */}
        <div className="mb-8 group relative">
          <span className="block text-[9px] font-black text-[#F58220] tracking-widest uppercase mb-4">
            PRAKTIJKVOORBEELD: CHAMPIGNONKWEKER GRUBBENVORST
          </span>

          <div className="flex items-center gap-4 relative z-10">
            <h2 className="text-7xl font-black text-[#1a2b3c] leading-none tracking-tighter">14%</h2>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">2E</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">VLUCHT</span>
            </div>

            {/* Simple sparkline visualization */}
            <div className="flex-1 h-12 flex items-end ml-4 opacity-20">
              <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
                <path
                  d="M0,20 Q25,18 50,19 T100,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-900"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Image Grid Row - Refined with hover effects */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 group cursor-pointer border border-transparent hover:border-[#F58220]/30 transition-all duration-500"
            >
              <img
                src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1591261730799-ee4e6c2d16d7' : '1581091226825-a6a2a5aee158'}?q=80&w=200&auto=format&fit=crop`}
                alt="Growth process"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          ))}
        </div>

        {/* Google Review - Simplified and cleaner */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">GEVERIFIEERDE GOOGLE REVIEW</span>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-2.5 h-2.5 fill-[#F58220] stroke-[#F58220]" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm font-medium text-gray-700 leading-relaxed italic mb-4">
            &quot;De opbrengst van de tweede vlucht ging van 78g/blok naar 243g/blok. Alleen al de gegevens over microbiële activiteit waren goud waard.&quot;
          </p>

          <div className="flex flex-col">
            <span className="text-[11px] font-black text-gray-900 uppercase tracking-tighter">KAREL V.D. MEER</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">EIGENAAR, CHAMPIGNONKWEKERIJ V.D. MEER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

