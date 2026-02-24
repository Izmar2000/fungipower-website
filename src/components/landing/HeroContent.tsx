// HeroContent.tsx
import { ArrowRight, Zap, Target } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl py-4 relative">
      {/* Label / Subline - Stronger white */}
      <div className="mb-6 flex items-center gap-3 animate-fade-in">
        <div className="h-px w-10 bg-white" />
        <span className="text-white text-[10px] font-black tracking-[0.5em] uppercase">
          BIOLOGISCHE SYSTEEMVERSTERKING
        </span>
      </div>

      {/* Main Headline - Solid, Punchy Typography */}
      <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white leading-[0.95] mb-8 tracking-tighter animate-fade-in-up uppercase">
        <span className="block mb-2">ELKE CEL</span>
        <span className="block mb-2 text-black">ELKE VLUCHT</span>
        <span className="block">MEER OPBRENGST</span>
      </h1>

      {/* Intro Block - Stronger contrast */}
      <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="text-white text-xl md:text-2xl font-bold leading-tight max-w-xl">
          FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen.
        </p>
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
          <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
          <span className="text-[11px] font-black text-white uppercase tracking-[0.4em]">Scientific Grade Innovation</span>
        </div>
      </div>

      {/* 3 Kernpunten - Solid white, no pale colors */}
      <div className="flex flex-col gap-6 mb-12 animate-fade-in items-center lg:items-start" style={{ animationDelay: '0.4s' }}>
        {[
          "Optimale nutriënten-absorptie",
          "Verlengde levensduur van substraat",
          "Data-driven resultaten in elke vlucht"
        ].map((text, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-default">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="text-white font-black tracking-tight text-xl uppercase transition-all duration-300">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons - Solid Black on White */}
      <div className="flex animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="bg-white text-black px-12 py-5 text-[12px] font-black tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-6 group">
          START PILOT PROJECT
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  );
};