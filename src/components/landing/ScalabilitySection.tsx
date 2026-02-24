import { ArrowRight, Sprout, Shield, Droplets, LineChart, FlaskConical } from "lucide-react";

export const ScalabilitySection = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
            PRODUCTEN
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 tracking-tight">
            FungiPower Start & Boost
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            FungiPower bestaat uit twee complementaire producten. <span className="text-foreground font-semibold">Start</span> optimaliseert de beginfase, <span className="text-foreground font-semibold">Boost</span> maximaliseert de latere vluchten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* FungiPower START Product Card */}
          <div className="bg-white dark:bg-card p-8 md:p-10 rounded-lg shadow-sm border border-border flex flex-col h-full group">
            <div className="mb-6 flex items-start justify-between">
              <div className="p-3 bg-primary/10 rounded-md">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full">
                FASE 1
              </span>
            </div>

            <h3 className="text-2xl font-black text-secondary mb-2">FungiPower Start</h3>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Optimale start van het broed</p>

            <h4 className="text-lg font-bold text-foreground mb-4">Sterkere beginontwikkeling. Betere basis.</h4>

            <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
              FungiPower Start wordt toegepast bij het vullen van de teeltcel. Het product ondersteunt een optimale kolonisatie en legt de basis voor hogere prestaties in latere vluchten.
            </p>

            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Dosering: <span className="font-bold text-primary">In overleg (op maat)</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Toepassing: <span className="font-bold">Bij vullen</span></span>
              </div>
              <div className="flex items-center gap-3">
                <LineChart className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Resultaat: <span className="text-primary">Consistente basis voor hogere opbrengst</span></span>
              </div>
            </div>
          </div>

          {/* FungiPower BOOST Product Card */}
          <div className="bg-white dark:bg-card p-8 md:p-10 rounded-lg shadow-sm border border-border flex flex-col h-full group">
            <div className="mb-6 flex items-start justify-between">
              <div className="p-3 bg-primary/10 rounded-md">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full">
                FASE 2
              </span>
            </div>

            <h3 className="text-2xl font-black text-secondary mb-2">FungiPower Boost</h3>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Maximaliseer elke vlucht</p>

            <h4 className="text-lg font-bold text-foreground mb-4">Verleng de productieve levensduur.</h4>

            <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
              FungiPower Boost wordt toegepast na elke vlucht. Uit praktijktesten blijkt dat toepassing na vlucht 1 het grootste effect geeft, met tot <span className="text-foreground font-bold">+27,7%*</span> opbrengstverbetering.
            </p>

            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Dosering: <span className="font-bold text-primary">In overleg (op maat)</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Toepassing: <span className="font-bold">Na vlucht 1, 2 en 3</span></span>
              </div>
              <div className="flex items-center gap-3">
                <LineChart className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Resultaat: <span className="text-primary">Sterk effect na 1e vlucht</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-xs text-muted-foreground italic">
            *Beste resultaat bij toepassing na vlucht 1, op basis van praktijkproeven met beperkte dataset.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors">
            Vraag technische documentatie aan
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
