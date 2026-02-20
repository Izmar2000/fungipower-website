import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  return (
    <section id="home" className="relative w-full bg-[#FAF9F6] overflow-hidden flex flex-col">
      {/* Background Overlay - Removed dark overlay, simplified */}

      <Header />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-start pt-24 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          <HeroContent />
          <GlassmorphismPanel />
        </div>
      </main>
    </section>
  );
};
