import React from 'react';
import { ChevronRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl py-12 relative mx-auto z-20">
      {/* Label / Subline with premium touch */}
      <div className="mb-10 flex flex-col items-center animate-fade-in group">
        <span className="text-white text-[13px] font-black tracking-[0.5em] uppercase mb-4">
          BIOLOGISCHE SYSTEEMVERSTERKER
        </span>
        <div className="h-[3px] w-20 bg-white" />
      </div>

      {/* Main Headline - Massive & Solid */}
      <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.85] mb-12 tracking-tighter animate-fade-in-up uppercase">
        <span className="block drop-shadow-2xl">ELKE CEL.</span>
        <span className="block drop-shadow-2xl text-white/90">ELKE VLUCHT.</span>
        <span className="block drop-shadow-2xl">MEER OPBRENGST.</span>
      </h1>

      {/* Intro Block - Solid and Readable */}
      <div className="mb-16 animate-fade-in max-w-2xl" style={{ animationDelay: '0.2s' }}>
        <p className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-8 drop-shadow-lg">
          FungiPower verhoogt structureel de opbrengst door de vitaliteit van het substraat te verlengen en opname-efficiëntie te optimaliseren.
        </p>
        <div className="flex items-center justify-center gap-4">
          <span className="h-[1px] w-12 bg-white/40" />
          <span className="text-[12px] font-black text-white uppercase tracking-[0.4em]">Scientific Grade Innovation</span>
          <span className="h-[1px] w-12 bg-white/40" />
        </div>
      </div>

      {/* 3 Kernpunten - Robust Horizontal List */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        {[
          "Optimale nutriënten-absorptie",
          "Verlengde levensduur van substraat",
          "Data-driven resultaten in elke vlucht"
        ].map((text, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center group">
              <span className="text-white font-black tracking-[0.1em] text-sm md:text-base uppercase border-b-2 border-transparent group-hover:border-white transition-all whitespace-nowrap">
                {text}
              </span>
            </div>
            {index < 2 && (
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* CTA Buttons - Solid and impactful */}
      <div className="flex animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="bg-white text-[#d71920] px-14 py-7 text-[16px] font-black tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center gap-6 rounded-none">
          START EEN PILOT PROJECT
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};