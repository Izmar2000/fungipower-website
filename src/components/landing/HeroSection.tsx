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
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path
            d="M-50,200 Q150,150 300,300 T600,200 T900,400 T1200,250 M400,0 Q500,200 350,400 T600,600 M1000,0 Q800,300 1100,600"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            fill="none"
            opacity="0.2"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '6s' }}
          />
        </svg>
      </div>

      <Header />

      {/* Main Content - Restructured to Vertical Stack for better spacing with large text */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col items-center py-12 md:py-20 lg:py-24">
        <div className="flex flex-col items-center w-full gap-20 lg:gap-32">
          <HeroContent />
          <div className="w-full flex justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <GlassmorphismPanel />
          </div>
        </div>
      </main>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
};
