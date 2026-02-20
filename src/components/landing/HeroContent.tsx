import { CheckCircle2, ArrowRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl py-8">
      {/* Label / Subline */}
      <div className="mb-4">
        <span className="text-fungipower-orange text-[11px] font-bold tracking-[0.2em] uppercase">
          — BIOLOGISCHE SYSTEEMVERSTERKING
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.9] mb-6 tracking-tight">
        MAXIMAAL<br />
        RENDEMENT<br />
        UIT JE <span className="text-fungipower-orange">2<span className="text-[0.5em] align-top">e</span> EN<br />
          3<span className="text-[0.5em] align-top">e</span> VLUCHT.</span>
      </h1>

      {/* Intro Block */}
      <p className="text-muted-foreground text-lg md:text-xl font-medium mb-6 leading-relaxed max-w-xl">
        FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen en opname-efficiëntie te optimaliseren.
        <br /><span className="mt-2 block text-sm opacity-80">Ontwikkeld voor commerciële kwekers die sturen op rendement per cel.</span>
      </p>

      {/* 3 Kernpunten */}
      <ul className="space-y-3 mb-6">
        {[
          "Verhoogde opbrengst per vlucht",
          "Verlengde productieve levensduur van het substraat",
          "Data-onderbouwde werking in praktijktesten"
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-foreground font-semibold">
            <div className="w-1.5 h-1.5 bg-fungipower-orange rounded-none" /> {/* Small square bullet */}
            {item}
          </li>
        ))}
      </ul>

      {/* Result Highlight Block */}
      <div className="bg-white dark:bg-card p-5 border-l-4 border-fungipower-orange shadow-sm mb-8 max-w-md">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-black text-fungipower-orange">+11,3%</span>
          <span className="text-foreground font-bold uppercase text-sm">GEMIDDELDE OPBRENGSTVERHOGING</span>
        </div>
        <p className="text-xs text-muted-foreground">Gemiddelde uit praktijkproeven (p=0,028)</p>
      </div>

      {/* CTA Buttons - No mt-auto, just flow naturally */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-primary text-white px-8 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2 group">
          PLAN EEN PROEF OP LOCATIE
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};