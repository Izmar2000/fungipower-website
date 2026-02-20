import { BarChart3, TrendingUp, FlaskConical, ArrowRight, FileText, Clock } from "lucide-react";

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
              RESULTATEN & PROEVEN
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Praktijkgetest.<br />Statistisch onderbouwd.
            </h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed max-w-xl">
              <p>
                Onze claims zijn gebaseerd op uitgebreide praktijkproeven uitgevoerd bij toonaangevende kwekerijen zoals <span className="text-white font-bold">Van Asseldonk Champignons</span> en <span className="text-white font-bold">Pilzland</span>.
              </p>
              <p>
                We hanteren een strikt <span className="text-white font-bold">split-plot design</span> met interne controle per cel, waarbij de resultaten worden geanalyseerd via een paired t-test (p &lt; 0,05).
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors w-fit">
                <FileText className="w-4 h-4" />
                Ontvang het volledige proefrapport
              </button>
            </div>
          </div>

          {/* Right Content - Data Viz */}
          <div className="flex-1 w-full">
            <div className="bg-card/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Kernbevindingen</h3>

              <div className="grid gap-8">
                {/* Stat 1 */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-white/70 uppercase">Gemiddelde Opbrengstverhoging</span>
                    <span className="text-3xl font-black text-primary">+11,3%</span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full relative">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 mt-2">Significant bewezen in praktijktesten (p=0,028)</p>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Impact op 3e Vlucht</h4>
                    <p className="text-white/70 text-sm mt-1">
                      De grootste procentuele winst wordt gerealiseerd in de derde vlucht, door verlenging van de productieve levensduur.
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Timing is Cruciaal</h4>
                    <p className="text-white/70 text-sm mt-1">
                      Toepassing direct na de eerste vlucht geeft het maximale effect op de totale cyclus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
