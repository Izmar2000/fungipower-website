import { Star } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full max-w-md lg:max-w-xl relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
      <div className="bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden rounded-[2.5rem]">
        {/* Top Metrics Row */}
        <div className="grid grid-cols-3 mb-10">
          <div className="text-center px-4">
            <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Vochtigheid (%)</span>
            <span className="text-3xl font-bold text-gray-900 tracking-tight">88.2</span>
          </div>
          <div className="text-center px-4 border-l border-gray-100">
            <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">CO2 (PPM)</span>
            <span className="text-3xl font-bold text-gray-900 tracking-tight">948</span>
          </div>
          <div className="text-center px-4 border-l border-gray-100">
            <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Temp (C)</span>
            <span className="text-3xl font-bold text-gray-900 tracking-tight">24.1</span>
          </div>
        </div>

        {/* Case Study Heading */}
        <div className="mb-0">
          <span className="block text-xs uppercase font-extrabold text-[#F58220] tracking-wider mb-2">
            PRAKTIJKVOORBEELD: CHAMPIGNONKWEKER GRUBBENVORST
          </span>
        </div>

        {/* Main Stat and Graph Row */}
        <div className="flex items-center gap-8 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-[5.5rem] font-bold text-gray-900 leading-none tracking-tighter">14%</h2>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold text-gray-400 uppercase leading-tight">2E</span>
              <span className="text-xs font-bold text-gray-400 uppercase leading-tight">VLUCHT</span>
            </div>
          </div>

          {/* SVG Graph Line - Grey version from image */}
          <div className="flex-1 h-12 relative pt-4">
            <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 35 L 20 32 L 40 33 L 60 25 L 80 20 L 100 8"
                fill="none"
                stroke="#D1D5DB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 35 L 20 32 L 40 33 L 60 25 L 80 20 L 100 8 L 100 40 L 0 40 Z"
                fill="url(#graphGradient)"
              />
            </svg>
          </div>
        </div>

        {/* Image Grid Row - 4 images */}
        <div className="grid grid-cols-4 gap-3 mb-8 h-20">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden bg-gray-200"
            >
              <img
                src={`/images/panel-${i === 1 || i === 4 ? 1 : 2}.jpg`}
                alt="Growth process"
                className="w-full h-full object-cover grayscale-[0.2] contrast-125"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?q=80&w=200&auto=format&fit=crop`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Review Box */}
        <div className="bg-[#F8F9FA] rounded-[1.5rem] p-6 border border-gray-100/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4285F4">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest leading-none mb-1">
                GEVERIFIEERDE GOOGLE REVIEW
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-[#F58220] stroke-[#F58220]" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm font-medium italic text-gray-700 leading-relaxed mb-4">
            &quot;De opbrengst van de tweede vlucht ging van 78g/blok naar 243g/blok. Alleen al de gegevens over microbiële activiteit waren goud waard.&quot;
          </p>

          <div className="flex flex-col">
            <span className="text-xs font-black text-gray-900 uppercase">KAREL V.D. MEER</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              Eigenaar, Champignonkwekerij v.d. Meer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
