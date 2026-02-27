
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(135deg, #F58220 0%, #D71920 100%)`
      }}
    >
      {/* Golden Vitality Layer - Organic Mycelium Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.9] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <filter id="hero-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <g stroke="white" strokeWidth="1.5" fill="none" filter="url(#hero-glow)" className="animate-pulse">
            {/* Hoofdstrengen */}
            <path d="M-100,200 Q50,220 150,150 T400,200 T700,100 T1000,250 T1300,150" opacity="0.6" />
            <path d="M-50,500 Q200,450 300,600 T650,500 T950,700 T1350,550" opacity="0.6" />
            <path d="M100,800 Q250,700 450,850 T800,750 T1150,900" opacity="0.6" />

            {/* Vertakkingen (Mycelium) */}
            <path d="M150,150 Q200,300 300,600" opacity="0.5" />
            <path d="M400,200 Q500,350 650,500" opacity="0.5" />
            <path d="M700,100 Q800,250 950,700" opacity="0.4" />
            <path d="M1000,250 Q1050,450 1150,900" opacity="0.4" />
            <path d="M300,600 Q350,750 450,850" opacity="0.5" />
            <path d="M650,500 Q750,650 800,750" opacity="0.4" />

            {/* Fijnere haarvaten */}
            <path d="M225,225 Q280,150 350,180" opacity="0.3" strokeWidth="1" />
            <path d="M525,350 Q600,280 650,300" opacity="0.3" strokeWidth="1" />
            <path d="M825,175 Q900,100 950,150" opacity="0.3" strokeWidth="1" />
            <path d="M250,525 Q150,580 180,650" opacity="0.3" strokeWidth="1" />
            <path d="M525,550 Q450,680 500,700" opacity="0.3" strokeWidth="1" />
            <path d="M800,475 Q850,380 900,420" opacity="0.3" strokeWidth="1" />
            <path d="M1025,350 Q1100,380 1150,300" opacity="0.3" strokeWidth="1" />
            <path d="M1050,650 Q980,750 1020,800" opacity="0.3" strokeWidth="1" />
          </g>

          {[
            // Knooppunten hoofdstrengen
            [150, 150], [400, 200], [700, 100], [1000, 250],
            [300, 600], [650, 500], [950, 700],
            [450, 850], [800, 750], [1150, 900],
            // Vertakkingsknopen
            [225, 225], [525, 350], [825, 175], [1025, 350],
            [250, 525], [525, 550], [800, 475], [1050, 650],
            // Eindpunten haarvaten
            [350, 180], [650, 300], [950, 150], [180, 650],
            [500, 700], [900, 420], [1150, 300], [1020, 800]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i < 10 ? "3" : i < 18 ? "2" : "1.5"} fill="white" filter="url(#hero-glow)" className="animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </svg>
      </div>

      {/* Spacer to push content down below fixed header */}
      <div className="h-20 md:h-24 lg:h-28" />

      {/* Main Content - No Overlays, Just Pure Color */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full">
          <HeroContent />
          <GlassmorphismPanel />
        </div>
      </main>

    </section>
  );
};
