
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
      {/* Substrate Macro Texture Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587588264560-eb0c968f4e19?q=80&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(150%)',
        }}
      />

      {/* Adjusted Spacer so it clears header but doesn't push down too much */}
      <div className="h-28 md:h-36 lg:h-44" />

      {/* Main Content - Perfectly balanced in the middle */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center pb-16 md:pb-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
          <div className="w-full lg:w-1/2 flex justify-start">
            <HeroContent />
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <GlassmorphismPanel />
          </div>
        </div>
      </main>

    </section>
  );
};
