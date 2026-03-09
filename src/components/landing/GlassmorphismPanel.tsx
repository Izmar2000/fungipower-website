import { TrendingUp, Thermometer, Droplets } from "lucide-react";

export const GlassmorphismPanel = () => {
  return (
    <div className="w-full flex-1 max-w-2xl relative z-10 transform transition-transform duration-700 hover:scale-[1.01]">

      {/* Premium Glass Effect Card with Fuller Gradient & Shadow Depth */}
      <div className="bg-gradient-to-br from-white/95 via-white/90 to-white/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl shadow-black/10 relative overflow-hidden rounded-[24px] border border-white/60">

        {/* Subtle inner glow for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#F58220]/5 via-transparent to-transparent pointer-events-none" />

        {/* Case Study Heading */}
        <h3 className="text-sm md:text-base font-bold text-slate-800 uppercase tracking-widest mb-10 border-b border-black/5 pb-4">
          Praktijkvoorbeelden & Resultaten
        </h3>

        {/* Dominant +XX% & Graph Row */}
        <div className="mb-12 relative flex flex-col justify-end min-h-[160px]">

          {/* Background Graph Animation */}
          <div className="absolute inset-x-0 bottom-0 h-28 opacity-60">
            <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F58220" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F58220" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="animate-[dash_3s_ease-out_forwards]"
                d="M0 35 L 20 32 L 40 33 L 60 25 L 80 20 L 100 8"
                fill="none"
                stroke="#F58220"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="200"
                strokeDashoffset="200"
              />
              <path
                className="animate-[fade-in_3s_ease-out_forwards] opacity-0"
                d="M0 35 L 20 32 L 40 33 L 60 25 L 80 20 L 100 8 L 100 40 L 0 40 Z"
                fill="url(#graphGradient)"
              />
            </svg>
          </div>

          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

          {/* Brutal/Dominant +XX% Overlapping the graph */}
          <div className="relative z-10 pl-2">
            <span className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-1">
              Opbrengstverbetering per vlucht
            </span>
            <div className="relative inline-block">
              {/* Soft glow behind the massive text */}
              <div className="absolute inset-0 bg-[#F58220] blur-[40px] opacity-20" />
              <span className="relative text-6xl md:text-[80px] font-black leading-none text-slate-900 tracking-tighter drop-shadow-sm">
                +XX%
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-12 font-medium">
              Geobserveerde verbetering in commerciële praktijkproeven.
            </p>
          </div>
        </div>

        {/* Immersive Image Grid */}
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden relative pt-[100%] shadow-sm border border-black/5"
            >
              <img
                src={`/images/panel-${i === 1 || i === 4 ? 1 : 2}.jpg`}
                alt="Growth process"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
