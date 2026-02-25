import { Header } from "./Header";
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
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dense Mycelium Web */}
          <path
            d="M50 50 L150 120 L300 80 L450 200 L600 150 L800 300 L1100 200 M150 120 L100 250 L300 350 L500 280 L700 450 M450 200 L400 50 L700 100 L950 50 M800 300 L750 600 L1100 500 M1100 200 L1300 400 L1500 250"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse"
          />

          {/* Connection Nodes */}
          {[
            [150, 120], [300, 80], [450, 200], [600, 150], [800, 300], [1100, 200],
            [100, 250], [300, 350], [500, 280], [700, 450], [400, 50], [1300, 400]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="white" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}

          {/* Tertiary Faint Connections */}
          <path
            d="M50 50 Q200 150 400 50 T800 150 T1200 50"
            stroke="white"
            strokeWidth="0.2"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <Header />

      {/* Spacer to push content down below fixed header */}
      <div className="h-20 md:h-24 lg:h-28" />

      {/* Main Content - Elevated padding for fixed header clearance */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full">
          <HeroContent />
          <GlassmorphismPanel />
        </div>
      </main>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
};
