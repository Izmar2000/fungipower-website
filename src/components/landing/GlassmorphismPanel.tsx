import { TrendingUp, Thermometer, Droplets } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full flex-1 max-w-3xl relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
      {/* Light gray solid background matching the requested image */}
      <div className="bg-[#E5E7EB] p-8 md:p-10 shadow-2xl relative overflow-hidden rounded-[20px] border border-white/50">

        {/* Case Study Heading */}
        <h3 className="text-xl md:text-[22px] font-bold text-slate-900 mb-8 border-b border-black/10 pb-4">
          Praktijkvoorbeeld Grubbenvorst
        </h3>

        {/* Main Stat and Graph Row */}
        <div className="mb-8 relative">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
              Resultaat 2e Vlucht
            </span>
            <span className="text-5xl font-black text-[#F58220] leading-none">
              +14%
            </span>
          </div>

          {/* Graph directly over gray background, vibrant orange */}
          <div className="h-16 relative">
            <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F58220" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F58220" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 35 L 20 32 L 40 33 L 60 25 L 80 20 L 100 8"
                fill="none"
                stroke="#F58220"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 35 L 20 32 L 40 33 L 60 25 L 80 20 L 100 8 L 100 40 L 0 40 Z"
                fill="url(#graphGradient)"
              />
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            Constante groei en verhoogde knopvorming geobserveerd in praktijk.
          </p>
        </div>

        {/* New White Cards Section exactly like the 'Impact/Timing' cards */}
        <div className="grid gap-4 mb-8">
          <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-white/60 shadow-sm">
            <Droplets className="w-8 h-8 text-[#F58220] flex-shrink-0" />
            <div>
              <h4 className="text-slate-900 font-bold text-lg leading-tight">Vochtigheid & CO2</h4>
              <p className="text-slate-600 text-sm mt-1">
                Optimale klimaatcondities behouden: <strong>88.2%</strong> vocht en <strong>948 PPM</strong> CO2.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-white/60 shadow-sm">
            <Thermometer className="w-8 h-8 text-[#F58220] flex-shrink-0" />
            <div>
              <h4 className="text-slate-900 font-bold text-lg leading-tight">Temperatuur stabiliteit</h4>
              <p className="text-slate-600 text-sm mt-1">
                Constante teelttemperatuur van stabiel <strong>24.1 °C</strong> zonder grote schommelingen.
              </p>
            </div>
          </div>
        </div>

        {/* Immersive Image Grid - No white wrapper, feels integrated */}
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden relative pt-[100%] shadow-md border border-black/5"
            >
              <img
                src={`/images/panel-${i === 1 || i === 4 ? 1 : 2}.jpg`}
                alt="Growth process"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?q=80&auto=format&fit=crop`;
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
