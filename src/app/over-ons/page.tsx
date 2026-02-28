import { Footer } from "@/components/landing/Footer";
import { ArrowRight, Leaf, Cpu, ShieldCheck } from "lucide-react";

export default function OverOns() {
    return (
        <div className="min-h-screen bg-[#FDFCFB] flex flex-col text-slate-900 font-sans selection:bg-[#F58220] selection:text-white">

            {/* Very Subtle Mycelium Texture Background throughout the page */}
            <div
                className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1587588264560-eb0c968f4e19?q=80&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    filter: 'grayscale(100%)',
                }}
            />

            <main className="flex-1 relative z-10">
                {/* Clean, editorial hero section */}
                <section className="pt-48 pb-20 md:pt-60 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
                    <span className="block text-[#F58220] font-bold text-xs tracking-[0.2em] uppercase mb-8">
                        Over Ons
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.9] tracking-tighter text-slate-900 mb-12">
                        FungiPower is ontstaan <br className="hidden md:block" />vanuit de praktijk.
                    </h1>
                </section>

                {/* Split Layout Section with Portrait and Text */}
                <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative">
                    {/* Subtle gradient glow behind the text/heading */}
                    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#F58220]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* Portrait */}
                        <div className="relative group perspective-1000">
                            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-black/10 bg-slate-100 relative shadow-2xl">
                                <img
                                    src="/images/jan-klerken.jpg"
                                    alt="Jan Klerken"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] filter grayscale-[20%]"
                                />
                                <div className="absolute inset-0 border border-black/5 mix-blend-overlay"></div>
                            </div>
                            <div className="mt-6 flex justify-between items-baseline border-b border-black/10 pb-4">
                                <span className="font-black text-xl tracking-tight">Jan Klerken</span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Oprichter</span>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-10 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                            <p className="text-2xl md:text-3xl font-bold leading-snug text-slate-900 border-l-2 border-[#F58220] pl-6 py-2">
                                Niet vanuit een marketingidee, maar vanuit jaren ervaring in de sector en een diep begrip van hoe een teelt zich ontwikkelt binnen het substraat.
                            </p>

                            <p className="animate-fade-in-up">
                                Jan Klerken groeide op in de champignonwereld. Wat voor anderen een product is, was voor hem dagelijkse realiteit. Door de jaren heen werkte hij in verschillende delen van de keten en zag hij hoe de sector professioneler en technischer werd. Wat daarbij altijd centraal bleef staan, is de rol van de teler. Uiteindelijk draait alles om degene die dagelijks verantwoordelijkheid draagt voor kwaliteit en continuïteit.
                            </p>

                            <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                Er wordt steeds meer van de sector verwacht. Kwaliteit moet constant zijn, productie voorspelbaar en efficiënt omgaan met middelen is vanzelfsprekend geworden. In die ontwikkeling draait verbetering vaak niet om méér toevoegen, maar om beter benutten wat er al gebeurt binnen het substraat en de teelt.
                            </p>

                            <div className="py-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Daar ligt de kern van FungiPower.</h2>
                            </div>

                            <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                Wij ondersteunen opname en benutting, zonder het systeem uit balans te brengen. Geen ingrijpende veranderingen, maar gerichte verfijning. Ontwikkeld vanuit praktijkkennis en getest in echte omstandigheden.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Horizontale “Van praktijk naar technologie” visual */}
                <section className="py-24 bg-white border-y border-black/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                        <div className="mb-20">
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">Evolutie</h3>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Van praktijk naar technologie.</h2>
                        </div>

                        <div className="relative">
                            {/* Thin connection line */}
                            <div className="absolute top-8 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#F58220]/40 to-transparent z-0 hidden md:block"></div>

                            {/* Abstract Mycelium line draw animation SVG behind */}
                            <svg className="absolute top-[-50px] right-0 w-full h-[200px] z-0 opacity-10 pointer-events-none" viewBox="0 0 1000 200" preserveAspectRatio="none">
                                <path className="animate-[dash_8s_linear_infinite]" d="M0,100 Q200,50 400,100 T800,100 T1000,50" fill="none" stroke="#F58220" strokeWidth="1" strokeDasharray="10 20" />
                            </svg>

                            <style>{`
                              @keyframes dash {
                                to {
                                  stroke-dashoffset: -100;
                                }
                              }
                            `}</style>

                            <div className="grid md:grid-cols-3 gap-16 relative z-10">
                                <div className="flex flex-col items-start gap-6 group">
                                    <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-[#F58220] transition-colors shadow-sm relative">
                                        <Leaf className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">1. Sector Realiteit</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Begrip van de werkvloer, het substraat en de dagelijkse focus op stabiel teeltmanagement.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-6 group">
                                    <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-[#F58220] transition-colors shadow-sm relative">
                                        <Cpu className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">2. Data & Biologie</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Wetenschappelijke validatie van nutriënten-opname en de biologische cyclus van mycelium.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-6 group">
                                    <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-[#F58220] transition-colors shadow-sm relative">
                                        <ShieldCheck className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">3. Stabiel Resultaat</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">Bewezen, betrouwbare biostimulanten die rendement verhogen zonder de teelt te verstoren.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Doel / Verfijnde visie */}
                <section className="py-24 md:py-32 max-w-5xl mx-auto px-6 md:px-12 relative">
                    <div className="flex flex-col gap-8 md:gap-10">
                        <h2 className="text-xs font-bold text-[#F58220] tracking-[0.2em] uppercase">
                            Ons Doel Is Helder
                        </h2>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight max-w-4xl">
                            Een vitalere teelt en een stabielere vlucht, met uiteindelijk een <span className="text-[#F58220]">hogere opbrengst per teeltcyclus.</span>
                        </h3>

                        <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
                            <p>
                                Niet door het systeem te veranderen, maar door het beter te laten functioneren.
                            </p>
                            <p className="text-base md:text-lg text-slate-500">
                                Wij geloven dat vooruitgang logisch moet voelen. Als technologie goed aansluit op het vak, versterkt ze het werk van de teler in plaats van het te vervangen. Dat is waar FungiPower voor staat.
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

