import { ArrowDown, Link, Shield } from 'lucide-react';

const MechanismSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#021814] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Hoe FungiPower <span className="text-orange-400">transport activeert</span>
                    </h2>
                    <p className="text-lg text-orange-100/60 max-w-2xl mx-auto leading-relaxed">
                        Ons biomechanisme werkt op basis van een unieke symbiose tussen organische zuren en mineralen.
                    </p>
                </div>

                {/* Mechanism Columns */}
                <div className="grid md:grid-cols-3 gap-8 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -z-10"></div>

                    {/* Step 1: Humus & Fulvine */}
                    <div className="bg-orange-950/30 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:bg-orange-950/50 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                            <Link className="w-8 h-8 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">1. Binding</h3>
                        <p className="text-orange-100/60 text-sm leading-relaxed">
                            Hoogwaardige humus- en fulvinezuren binden zich aan vrije voedingselementen in het medium, waardoor ze beschermd zijn tegen neerslag.
                        </p>
                    </div>

                    {/* Step 2: Mobility */}
                    <div className="bg-orange-950/30 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:bg-orange-950/50 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                            <ArrowDown className="w-8 h-8 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">2. Mobiliteit</h3>
                        <p className="text-orange-100/60 text-sm leading-relaxed">
                            Het complex maakt de mineralen extreem beweeglijk. Ze worden actief naar de wortelpunt getransporteerd, onafhankelijk van de pH-waarde.
                        </p>
                    </div>

                    {/* Step 3: Stability */}
                    <div className="bg-orange-950/30 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:bg-orange-950/50 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-6 group-hover:scale-110 transition-transform">
                            <Shield className="w-8 h-8 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">3. Stabiliteit</h3>
                        <p className="text-orange-100/60 text-sm leading-relaxed">
                            Binnenin de plant blijven de elementen stabiel en direct beschikbaar voor metabolische processen, wat zorgt voor vitale groei.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MechanismSection;
