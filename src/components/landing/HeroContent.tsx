// HeroContent.tsx
import { ArrowRight, Zap, Target } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl py-2 relative">
      {/* Label / Subline - Stronger white */}
      <div className="mb-4 flex items-center gap-3 animate-fade-in">
        <div className="h-px w-8 bg-white" />
        <span className="text-white text-[9px] font-black tracking-[0.5em] uppercase">
          BIOLOGISCHE SYSTEEMVERSTERKING
        </span>
      </div>

      {/* Main Headline - Ultra-Compact, High Impact */}
      <h1 className="text-5xl md:text-6xl lg:text-[84px] font-black text-white leading-[0.8] mb-8 tracking-[-0.04em] animate-fade-in-up uppercase">
        <span className="block">ELKE CEL</span>
        <span className="block text-black">ELKE VLUCHT</span>
        <span className="block">MEER OPBRENGST</span>
      </h1>

      {/* Intro Block - Ultra-tight */}
      <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="text-white text-lg md:text-xl font-bold leading-[1.1] max-w-xl">
          FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen.
        </p>
        <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
          <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Scientific Grade Innovation</span>
        </div>
      </div>

      {/* 3 Kernpunten - Compacted List */}
      <div className="flex flex-col gap-3 mb-10 animate-fade-in items-center lg:items-start" style={{ animationDelay: '0.4s' }}>
        {[
          "Optimale nutriënten-absorptie",
          "Verlengde levensduur van substraat",
          "Data-driven resultaten in elke vlucht"
        ].map((text, index) => (
          <div key={index} className="flex items-center gap-3 group cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)]" />
            <span className="text-white font-black tracking-tighter text-lg uppercase transition-all duration-300">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons - Solid Black on White */}
      <div className="flex animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="bg-white text-black px-12 py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center gap-6 group">
          START PILOT PROJECT
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};