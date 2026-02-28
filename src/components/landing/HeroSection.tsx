"use client";

import { useEffect, useState } from "react";
import { HeroContent } from "./HeroContent";
import { GlassmorphismPanel } from "./GlassmorphismPanel";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(135deg, #F58220 0%, #D71920 100%)`
      }}
    >
      {/* 1. Historical Black & White Photo blended directly into the Orange background */}
      <div
        className="absolute inset-0 w-full md:w-[70%] h-full z-0 pointer-events-none opacity-[0.25] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,black_50%,transparent_100%)]"
        style={{
          backgroundImage: 'url("/images/vintage-mushroom.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply', // Burns the B&W photo into the orange, making it dark transparent orange
          transform: `translateY(${scrollY * 0.15}px)`, // Subtle parallax
        }}
      />

      {/* 2. Very subtle mycelium structure overlay (3-5% opacity) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587588264560-eb0c968f4e19?q=80&width=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(150%)',
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      {/* 3. Subtle unified glow/vignette to bring it all together */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Adjusted Spacer so it clears header but doesn't push down too much */}
      <div className="h-36 md:h-44 lg:h-52 xl:h-56 relative z-10" />

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
