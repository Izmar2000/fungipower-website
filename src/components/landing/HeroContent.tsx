// HeroContent.tsx
import { ArrowRight, Zap, Target } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl py-4 relative">
      {/* Label / Subline with premium touch */}
      <div className="mb-4 flex items-center gap-3 animate-fade-in">
        <div className="h-px w-8 bg-white/40" />
        <span className="text-white/70 text-[10px] font-black tracking-[0.4em] uppercase">
          BIOLOGISCHE SYSTEEMVERSTERKING
        </span>
      </div>

      {/* Main Headline - Premium Typography */}
      <h1 className="text-4xl md:text-5xl lg:text-[42px] font-black text-white leading-[1.1] mb-6 tracking-tighter animate-fade-in-up uppercase">
        <span className="block opacity-70 drop-shadow-2xl">ELKE CEL</span>
        <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#FFF0E0] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-sm">ELKE VLUCHT</span>
        <span className="block opacity-70 drop-shadow-lg">MEER OPBRENGST</span>
      </h1>

      {/* Intro Block - Cleaned up and aligned */}
      <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-xl">
          FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen en opname-efficiëntie te optimaliseren.
        </p>
        <span className="mt-4 block text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Scientific Grade Innovation</span>
      </div>

      {/* 3 Kernpunten - Minimalist list */}
      <div className="flex flex-col gap-5 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        {[
          "Optimale nutriënten-absorptie",
          "Verlengde levensduur van substraat",
          "Data-driven resultaten in elke vlucht"
        ].map((text, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-20 group-hover:opacity-100 transition-opacity" />
            <span className="text-white/70 font-bold tracking-tight text-lg group-hover:translate-x-1 group-hover:text-white transition-all duration-300">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons - Premium Button */}
      <div className="flex animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="bg-white text-black px-8 py-3.5 text-[11px] font-black tracking-[0.25em] uppercase hover:bg-white/90 transition-all shadow-2xl flex items-center gap-4 group">
          START EEN PILOT PROJECT
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};