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
      className="relative w-full min-h-[600px] md:min-h-[800px] overflow-hidden flex flex-col scroll-mt-44"
      style={{
        background: `linear-gradient(135deg, #F58220 0%, #D71920 100%)`
      }}
    >
      {/* 1. Darker Overlay for Text Legibility (Left side focus) */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 z-[1] pointer-events-none bg-gradient-to-r from-black/25 via-black/10 to-transparent" />

      {/* 1.5 Subtle dark fade at the top for logo legibility */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 z-[2] pointer-events-none bg-gradient-to-b from-black/20 via-black/5 to-transparent" />

      {/* 2. White Mushroom Photo - Blended into the background */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 150% at 20% center, black 0%, black 35%, rgba(0,0,0,0.7) 65%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 100% 150% at 20% center, black 0%, black 35%, rgba(0,0,0,0.7) 65%, transparent 100%)',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* 3. Very subtle mycelium structure overlay (3-5% opacity) */}
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

      {/* 4. Subtle unified glow/vignette to bring it all together */}
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
