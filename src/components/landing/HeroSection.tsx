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
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <filter id="extra-glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Bold Mycelium Network - High Visibility */}
          <g stroke="white" strokeWidth="2.5" fill="none" opacity="0.6">
            <path d="M-100 200 L300 100 L600 400 L900 100 L1300 300" />
            <path d="M-50 600 L400 350 L800 600 L1100 300" />
            <path d="M500 -100 L600 200 L300 600 L700 900" />
          </g>

          {/* Vibrant Nodes */}
          <g fill="white" filter="url(#extra-glow)">
            <circle cx="300" cy="100" r="8" className="animate-pulse" />
            <circle cx="600" cy="400" r="6" />
            <circle cx="900" cy="100" r="10" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <circle cx="400" cy="350" r="7" className="animate-pulse" style={{ animationDuration: '4s' }} />
            <circle cx="800" cy="600" r="5" />
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
