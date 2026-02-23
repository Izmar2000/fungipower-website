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
      <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-white leading-[1.1] mb-6 tracking-tighter animate-fade-in-up">
        <span className="block opacity-90 drop-shadow-2xl">MEER OPBRENGST.</span>
        <span className="block bg-gradient-to-r from-[#FFD700] via-[#FF7E06] to-[#FFD700] bg-clip-text text-transparent">MAXIMAAL RENDEMENT.</span>
        <span className="block text-white/40 drop-shadow-lg">ELKE CEL.</span>
      </h1>

      {/* Intro Block - Refined weight */}
      <p className="text-white/80 text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-xl border-l-2 border-[#FF7E06]/40 pl-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen en opname-efficiëntie te optimaliseren.
        <br /><span className="mt-4 block text-[10px] font-black text-[#FF7E06]/60 uppercase tracking-[0.2em]">Scientific Grade Innovation</span>
      </p>

      {/* 3 Kernpunten - Modern list */}
      <div className="grid sm:grid-cols-1 gap-5 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        {[
          { text: "Optimale nutriënten-absorptie", icon: Zap },
          { text: "Verlengde levensduur van substraat", icon: Target },
          { text: "Data-driven resultaten in elke vlucht", icon: ArrowRight }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-5 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <item.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            </div>
            <span className="text-white font-bold tracking-tight text-xl group-hover:translate-x-1 transition-transform duration-300">{item.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons - Premium Button */}
      <div className="flex flex-col sm:flex-row gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="bg-white text-black px-12 py-5 text-[11px] font-black tracking-[0.25em] uppercase hover:bg-white/90 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center gap-4 group">
          START EEN PILOT PROJECT
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};