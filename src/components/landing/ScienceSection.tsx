import { Sprout, ArrowRight, Activity, TrendingUp, Layers } from "lucide-react";

export const ScienceSection = () => {
  return (
    <section id="science" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
            WERKING
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 tracking-tight">
            Geen meststof.<br />Een systeemversterker.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            FungiPower werkt niet als voeding, maar als biostimulant die de opname en benutting van nutriënten optimaliseert.
            Het ondersteunt de activiteit binnen het substraat en verlengt de productieve fase van de teeltcyclus.
          </p>
        </div>

        {/* Process Diagram */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-border -z-10"></div>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group bg-background pt-4">
              <div className="w-20 h-20 bg-card border-2 border-border group-hover:border-primary transition-colors rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
                <Layers className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Substraat</h3>
              <p className="text-sm text-muted-foreground px-2">Optimalisatie van de basisstructuur en vochtbalans.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group bg-background pt-4">
              <div className="w-20 h-20 bg-card border-2 border-border group-hover:border-primary transition-colors rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
                <Activity className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Opname</h3>
              <p className="text-sm text-muted-foreground px-2">Verhoogde efficiëntie van nutriëntenopname door mycelium.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group bg-background pt-4">
              <div className="w-20 h-20 bg-card border-2 border-border group-hover:border-primary transition-colors rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
                <Sprout className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Myceliumactiviteit</h3>
              <p className="text-sm text-muted-foreground px-2">Stimulering van herstel en herkolonisatie na elke vlucht.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group bg-background pt-4">
              <div className="w-20 h-20 bg-card border-2 border-primary transition-colors rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Opbrengst</h3>
              <p className="text-sm text-muted-foreground px-2">Hogere productie per vlucht en langere levensduur.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
