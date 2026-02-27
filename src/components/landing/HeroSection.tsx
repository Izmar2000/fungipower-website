
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
            {/* Hoofdnetwerk - Hoekig en onregelmatig (rechte lijnen) */}
            <path d="M-100,250 L50,220 L150,150 L280,240 L400,200 L550,120 L700,100 L850,190 L1000,250 L1150,180 L1350,220" opacity="0.6" />
            <path d="M-50,450 L120,480 L250,380 L350,550 L500,420 L650,500 L800,400 L950,550 L1100,480 L1250,580 L1400,520" opacity="0.6" />
            <path d="M50,750 L200,680 L350,800 L550,650 L750,820 L950,680 L1150,850 L1300,720" opacity="0.6" />

            {/* Kruisende en vertakkende rechte verbindingen */}
            <path d="M150,150 L250,380 L200,680" opacity="0.5" />
            <path d="M280,240 L350,550 L550,650" opacity="0.5" />
            <path d="M400,200 L500,420 L350,800" opacity="0.5" />
            <path d="M550,120 L650,500 L750,820" opacity="0.5" />
            <path d="M700,100 L800,400 L950,680" opacity="0.4" />
            <path d="M850,190 L950,550 L1150,850" opacity="0.4" />
            <path d="M1000,250 L1100,480 L1300,720" opacity="0.4" />

            {/* Secundaire strakke aftakkingen */}
            <path d="M50,220 L120,300 L250,380" opacity="0.3" strokeWidth="1" />
            <path d="M280,240 L200,300 L120,480" opacity="0.3" strokeWidth="1" />
            <path d="M500,420 L580,320 L700,100" opacity="0.3" strokeWidth="1" />
            <path d="M650,500 L550,600 L550,650" opacity="0.3" strokeWidth="1" />
            <path d="M800,400 L880,300 L1000,250" opacity="0.3" strokeWidth="1" />
            <path d="M950,550 L880,680 L950,680" opacity="0.3" strokeWidth="1" />
            <path d="M1100,480 L1200,350 L1150,180" opacity="0.3" strokeWidth="1" />
          </g>

          {[
            // Knooppunten (hoeken)
            [150, 150], [280, 240], [400, 200], [550, 120], [700, 100], [850, 190], [1000, 250],
            [120, 480], [250, 380], [350, 550], [500, 420], [650, 500], [800, 400], [950, 550], [1100, 480],
            [200, 680], [350, 800], [550, 650], [750, 820], [950, 680], [1150, 850],
            [120, 300], [200, 300], [580, 320], [550, 600], [880, 300], [880, 680], [1200, 350]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i < 10 ? "2.5" : i < 21 ? "1.5" : "1"} fill="white" filter="url(#hero-glow)" className="animate-pulse" style={{ animationDelay: `${i * 0.12}s` }} />
          ))}
        </svg>
      </div>

      {/* Spacer to push content down below fixed header */}
      <div className="h-20 md:h-24 lg:h-28" />

      {/* Main Content - No Overlays, Just Pure Color */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
          <div className="w-full lg:w-1/2 flex justify-start">
            <HeroContent />
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <GlassmorphismPanel />
          </div>
        </div>
      </main>

    </section>
  );
};
