// HeroContent.tsx
import { ArrowRight, Zap, Target } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-start text-left max-w-4xl py-2 relative">
      {/* Label / Subline - Stronger white */}
      <div className="mb-4 flex items-center gap-3 animate-fade-in">
        <div className="h-px w-8 bg-white" />
        <span className="text-white text-[9px] font-black tracking-[0.5em] uppercase">
          BIOLOGISCHE SYSTEEMVERSTERKING
        </span>
      </div>

      {/* Main Headline - Solid, Stable, Scientific */}
      <h1 className="font-black text-white leading-tight mb-6 tracking-[-0.02em] animate-fade-in-up uppercase whitespace-nowrap flex flex-col items-start">
        <span className="text-3xl md:text-4xl lg:text-[45px] leading-[1]">Optimale opname</span>
        <span className="text-5xl md:text-6xl lg:text-[75px] text-white/70 leading-[0.9]">Sterkere groei</span>
      </h1>

      {/* Intro Block - Tight */}
      <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="text-white text-lg md:text-xl font-bold leading-[1.2] max-w-lg">
          FungiPower stimuleert de biomassa en ondersteunt een constantere cyclus door de stabiliteit van het substraat te verlengen.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Scientific Grade Innovation</span>
        </div>
      </div>

      {/* 3 Kernpunten - Compacted List NO DOTS */}
      <div className="flex flex-col gap-2 mb-8 animate-fade-in items-start" style={{ animationDelay: '0.4s' }}>
        {[
          "Optimale nutriënten-absorptie",
          "Verlengde levensduur van substraat",
          "Data-driven resultaten in elke vlucht"
        ].map((text, index) => (
          <div key={index} className="group cursor-default">
            <span className="text-white font-black tracking-tight text-lg uppercase transition-all duration-300">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons - Solid Black on White */}
      <div className="flex animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <a href="#results" className="bg-white text-black px-10 py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all shadow-xl flex items-center gap-6 group">
          MEER PRAKTIJKVOORBEELDEN
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </div>
  );
};