import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, #FF6B00 0%, transparent 50%),
          radial-gradient(circle at 80% 10%, #E65100 0%, transparent 40%),
          radial-gradient(circle at 50% 80%, #CC4400 0%, transparent 60%),
          radial-gradient(circle at 90% 90%, #8B2E00 0%, transparent 50%),
          #A33600
        `
      }}
    >
      {/* Texture Overlay for Industrial Feel */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}
      />

      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          <HeroContent />
          <GlassmorphismPanel />
        </div>
      </main>
    </section>
  );
};
