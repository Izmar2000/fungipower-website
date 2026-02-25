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
      <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <filter id="hero-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <g stroke="white" strokeWidth="0.8" fill="none" filter="url(#hero-glow)" className="animate-pulse">
            <path d="M-50,300 Q200,100 450,400 T850,200 T1250,500" opacity="0.4" />
            <path d="M300,-50 Q500,250 250,600 T600,950" opacity="0.3" />
            <path d="M1000,-100 Q800,300 1100,750" opacity="0.3" />
          </g>

          {[
            [350, 250], [850, 200], [1200, 450], [450, 400], [600, 650], [900, 350]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="white" filter="url(#hero-glow)" className="animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
          ))}
        </svg>
      </div>

      {/* Readability Overlay - Contrast Boost for White Text */}
      <div className="absolute inset-0 z-[1] bg-black/15 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

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
