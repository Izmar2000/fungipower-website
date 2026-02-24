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


      </div>
    </div>
  );
};
