import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(90deg, #FF7E06 0%, #E62B1E 100%)`
      }}
    >
      {/* Cinematic Lighting Refinement */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(230,81,0,0.1)_0%,transparent_40%)]" />

      {/* Texture Overlay for Industrial Feel - More subtle and premium */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}
      />

      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center py-20">
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
