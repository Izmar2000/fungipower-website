import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col pt-2"
      style={{
        background: `linear-gradient(135deg, #FF6F00 0%, #1A0F0E 100%)`
      }}
    >
      {/* Dynamic Glow Layer - Scientific Energy */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      {/* Golden Vitality Layer - Organic Mycelium Pattern */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <pattern id="scientific-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.03" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#scientific-grid)" />
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path
            d="M-50,200 Q150,150 300,300 T600,200 T900,400 T1200,250 M400,0 Q500,200 350,400 T600,600 M1000,0 Q800,300 1100,600"
            stroke="#FFD700"
            strokeWidth="0.8"
            fill="none"
            opacity="0.2"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '6s' }}
          />
          <path
            d="M200,800 Q400,600 600,750 T1000,650 M0,500 Q200,450 400,550 T800,450"
            stroke="#FFFFFF"
            strokeWidth="0.4"
            fill="none"
            opacity="0.1"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '10s' }}
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
