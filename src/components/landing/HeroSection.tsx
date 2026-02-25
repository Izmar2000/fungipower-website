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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <filter id="hero-node-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Large Scale Mycelium Base - Higher Visibility */}
          <g stroke="white" strokeWidth="1.5" fill="none" opacity="0.15">
            <path d="M-100 400 Q200 300 500 600 T1100 400 T1500 700" />
            <path d="M400 -100 Q600 200 300 500 T800 800" />
            <path d="M1200 -50 Q900 300 1100 600" />
          </g>

          {/* Intricate Secondary Network */}
          <g stroke="white" strokeWidth="0.5" fill="none" opacity="0.1">
            <path d="M100 100 L300 250 L500 150 L700 350 L900 200 L1100 450" />
            <path d="M-50 600 L250 450 L450 700 L750 550 L1050 750" />
          </g>

          {/* Glowing Bioluminescent Nodes */}
          <g fill="white" filter="url(#hero-node-glow)">
            <circle cx="200" cy="300" r="4" className="animate-pulse" style={{ animationDuration: '4s' }} />
            <circle cx="500" cy="600" r="3" />
            <circle cx="1100" cy="400" r="5" className="animate-pulse" style={{ animationDuration: '5s' }} />
            <circle cx="600" cy="200" r="2.5" />
            <circle cx="300" cy="500" r="4" className="animate-pulse" style={{ animationDuration: '6s' }} />
            <circle cx="800" cy="800" r="3.5" />
            <circle cx="900" cy="300" r="2" />
          </g>

          {/* Technical Grid Overlay - Very Subtle */}
          <pattern id="hero-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="1.5" fill="white" opacity="0.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
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
