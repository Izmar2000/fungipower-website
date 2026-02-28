// HeroContent.tsx
import { ArrowRight, ShieldCheck, Microscope, LineChart } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-start text-left max-w-4xl py-2 relative z-20">

      {/* Top Badge - Scientific & Innovative */}
      <div className="mb-8 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 animate-fade-in shadow-lg">
        <Microscope className="w-4 h-4 text-[#FFD166]" />
        <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
          Biologische versterking
        </span>
      </div>

      {/* Main Headline - Identical font size for both lines */}
      <h1 className="text-4xl md:text-[50px] lg:text-[55px] xl:text-[60px] font-black text-white leading-[1.0] mb-10 tracking-[-0.02em] animate-fade-in-up uppercase whitespace-nowrap flex flex-col items-start gap-2">
        <span className="block">Minder verlies</span>
        <span className="block text-white/80">Meer rendement</span>
      </h1>

      {/* Intro Block - Elegant, structured, non-bold to reduce noise */}
      <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="text-white/95 text-lg md:text-xl font-medium leading-[1.6] max-w-2xl border-l-[3px] border-[#F58220] pl-6 py-0">
          FungiPower versterkt de natuurlijke cyclus van het substraat voor stabiele productie en minder verlies.
        </p>
      </div>

      {/* 3 Kernpunten - Structured list with icons, NOT ALL CAPS */}
      <div className="flex flex-col gap-5 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 shadow-md max-w-md">
          <ShieldCheck className="w-6 h-6 text-white flex-shrink-0" />
          <span className="text-white font-semibold text-[15px] tracking-wide">Optimale nutriënten-absorptie</span>
        </div>
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 shadow-md max-w-md">
          <Microscope className="w-6 h-6 text-white flex-shrink-0" />
          <span className="text-white font-semibold text-[15px] tracking-wide">Verlengde levensduur van substraat</span>
        </div>
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 shadow-md max-w-md">
          <LineChart className="w-6 h-6 text-white flex-shrink-0" />
          <span className="text-white font-semibold text-[15px] tracking-wide">Data-driven resultaten per vlucht</span>
        </div>
      </div>

      {/* CTA Buttons - High end button */}
      <div className="flex animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <a href="#results" className="bg-white text-black px-8 py-4 rounded-xl text-[11px] font-black tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all shadow-2xl flex items-center gap-4 group">
          MEER PRAKTIJKVOORBEELDEN
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};