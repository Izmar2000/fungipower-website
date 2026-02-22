import { CheckCircle2, ArrowRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl py-8">
      {/* Label / Subline */}
      <div className="mb-4">
        <span className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">
          — BIOLOGISCHE SYSTEEMVERSTERKING
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tight">
        MAXIMAAL<br />
        RENDEMENT<br />
        UIT <span className="text-black underline decoration-black/30 underline-offset-[12px]">ELKE VLUCHT.</span>
      </h1>

      {/* Intro Block */}
      <p className="text-white/80 text-lg md:text-xl font-medium mb-6 leading-relaxed max-w-xl">
        FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen en opname-efficiëntie te optimaliseren.
        <br /><span className="mt-2 block text-sm opacity-60">Ontwikkeld voor commerciële kwekers die sturen op rendement per cel.</span>
      </p>

      {/* 3 Kernpunten */}
      <ul className="space-y-3 mb-6">
        {[
          "Verhoogde opbrengst per vlucht",
          "Verlengde productieve levensduur van het substraat",
          "Data-onderbouwde werking in praktijktesten"
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-white font-semibold">
            <div className="w-1.5 h-1.5 bg-black rounded-none" /> {/* Small square bullet */}
            {item}
          </li>
        ))}
      </ul>

      {/* Result Highlight Block */}
      <div className="bg-black/10 backdrop-blur-sm p-5 border-l-4 border-black shadow-sm mb-8 max-w-md">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-black text-white">+11,3%</span>
          <span className="text-white font-bold uppercase text-sm">GEMIDDELDE OPBRENGSTVERHOGING</span>
        </div>
        <p className="text-xs text-white/50">Gemiddelde uit praktijkproeven (p=0,028)</p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-black text-white px-8 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-black/80 transition-all shadow-lg flex items-center gap-2 group">
          PLAN EEN PROEF OP LOCATIE
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};