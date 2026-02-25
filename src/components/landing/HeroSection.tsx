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
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <pattern id="scientific-data-map" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <circle cx="0" cy="0" r="1.5" fill="white" />
            <circle cx="60" cy="60" r="1" fill="white" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#scientific-data-map)" />

          {/* Precise Technical Lines */}
          <path
            d="M 100 100 L 400 300 L 700 200 L 1100 400 M 300 100 L 300 500 M 600 0 L 600 800"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="4,4"
            fill="none"
            opacity="0.2"
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
