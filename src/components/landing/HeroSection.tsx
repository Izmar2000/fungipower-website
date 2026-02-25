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
      {/* Technical Nursery Sketch Overlay - Right Side */}
      <div className="absolute right-[-10%] top-[40%] md:top-[20%] w-[120%] md:w-[60%] opacity-[0.08] pointer-events-none z-0 select-none mix-blend-screen">
        <img
          src="/images/nursery-diagram.png"
          alt="Technical Nursery Diagram"
          className="w-full h-auto grayscale transition-opacity duration-1000"
        />
      </div>

      <Header />

      {/* Spacer to push content down below fixed header */}
      <div className="h-20 md:h-24 lg:h-28" />

      {/* Main Content - No Overlays, Just Pure Color */}
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
