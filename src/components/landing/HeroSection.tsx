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
          <filter id="hero-node-glow-v2">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Master Structural Network - High Visibility */}
          <g stroke="white" strokeWidth="2" fill="none" opacity="0.35">
            <path d="M-100 400 L200 300 L500 600 L1100 400 L1500 700" strokeDasharray="10,10" />
            <path d="M400 -100 L600 200 L300 500 L800 800" strokeDasharray="5,15" />
            <path d="M1200 -50 L900 300 L1100 600" />
          </g>

          {/* Secondary Organic Threads */}
          <g stroke="white" strokeWidth="1" fill="none" opacity="0.25">
            <path d="M50 50 Q150 150 300 100 T600 200 T900 100 T1200 300" />
            <path d="M-100 700 Q100 600 400 750 T800 650 T1300 850" />
          </g>

          {/* Strong Bioluminescent Nodes */}
          <g fill="white" filter="url(#hero-node-glow-v2)">
            <circle cx="200" cy="300" r="6" className="animate-pulse" />
            <circle cx="500" cy="600" r="4.5" />
            <circle cx="1100" cy="400" r="8" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <circle cx="600" cy="200" r="4" />
            <circle cx="300" cy="500" r="6" className="animate-pulse" style={{ animationDuration: '4.5s' }} />
            <circle cx="800" cy="800" r="5" />
          </g>
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
