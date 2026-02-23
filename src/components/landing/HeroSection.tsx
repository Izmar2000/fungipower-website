import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col pt-2"
      style={{
        background: `radial-gradient(circle at 70% 30%, #2A0E00 0%, #1A0800 50%, #0D0400 100%)`
      }}
    >
      {/* Golden Vitality Layer - Organic Mycelium Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path
            d="M-50,200 Q150,150 300,300 T600,200 T900,400 T1200,250 M400,0 Q500,200 350,400 T600,600 M1000,0 Q800,300 1100,600"
            stroke="#FF7E06"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path
            d="M200,800 Q400,600 600,750 T1000,650 M0,500 Q200,450 400,550 T800,450"
            stroke="#E62B1E"
            strokeWidth="0.3"
            fill="none"
            opacity="0.2"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '6s' }}
          />
        </svg>
      </div>

      {/* Atmospheric Pulses */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,126,6,0.05)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '8s' }} />

      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full">
          <HeroContent />
          <GlassmorphismPanel />
        </div>
      </main>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};
