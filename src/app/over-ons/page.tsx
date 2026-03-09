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

            <main className="flex-1 relative z-10 w-full overflow-hidden">
                {/* Vintage Agriculture Background behind Hero */}
                <div
                    className="absolute top-0 right-0 w-full md:w-2/3 h-[600px] z-0 pointer-events-none opacity-[0.08] mix-blend-multiply"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1587588264560-eb0c968f4e19?q=80&auto=format&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'right center',
                        filter: 'grayscale(100%) sepia(30%) contrast(150%)',
                        maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
                    }}
                />

                <section className="relative z-10 pt-[100px] md:pt-[120px] lg:pt-[140px] pb-4 px-6 md:px-12 max-w-7xl mx-auto">
                    <span className="block text-[#F58220] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                        Over Ons
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-0 max-w-5xl">
                        FungiPower is ontstaan <br className="hidden md:block" />vanuit de praktijk.
                    </h1>
                </section>

                {/* 1. Jan Klerken & Sectorervaring */}
                <section className="pt-6 pb-20 max-w-7xl mx-auto px-6 md:px-12 relative">
                    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#F58220]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
                        <div className="lg:col-span-5">
                            <div className="relative group shadow-2xl rounded-3xl overflow-hidden">
                                <div className="aspect-[4/4.5] bg-slate-100 relative overflow-hidden">
                                    <img
                                        src="/images/jan-klerken.jpg"
                                        alt="Jan Klerken"
                                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.05] filter grayscale-[10%]"
                                    />
                                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent opacity-40" />
                                </div>

                                <div className="bg-gradient-to-br from-[#F58220] to-[#D71920] p-10 md:p-12 relative overflow-hidden">
                                    <div className="mb-8 border-b border-white/20 pb-8">
                                        <h4 className="font-black text-3xl md:text-4xl text-white tracking-tighter mb-1">Jan Klerken</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/70">Oprichter FungiPower</p>
                                    </div>
                                    <div className="absolute top-1/2 right-4 text-white/10 text-[180px] font-serif select-none pointer-events-none -translate-y-1/2">
                                        &rdquo;
                                    </div>
                                    <p className="relative z-10 text-white font-bold italic text-lg md:text-2xl leading-relaxed">
                                        &ldquo;Verbetering draait niet om méér toevoegen, maar om beter benutten van de natuurlijke kracht van de teelt.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 pt-4 space-y-10 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-bold leading-snug text-slate-900 border-l-[4px] border-[#F58220] pl-8 py-2 mb-8 bg-gradient-to-r from-[#F58220]/5 to-transparent rounded-r-lg">
                                    Ontstaan vanuit pure praktijkervaring en een diep begrip van hoe een teelt zich écht ontwikkelt.
                                </p>

                                <div className="space-y-6 animate-fade-in-up">
                                    <p>
                                        Jan Klerken groeide op in de champignonwereld. Wat voor anderen een product is, was voor hem dagelijkse realiteit. Door de jaren heen werkte hij in verschillende delen van de keten en zag hij hoe de sector professioneler en technischer werd. Wat daarbij altijd centraal bleef staan, is de rol van de teler. Uiteindelijk draait alles om degene die dagelijks verantwoordelijkheid draagt voor kwaliteit en continuïteit.
                                    </p>
                                </div>
                            </div>

                            <div className="relative pt-10 pb-4">
                                <div className="absolute top-0 left-0 w-24 h-[1px] bg-[#F58220]" />
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
                                    De uitdaging in de sector.
                                </h2>
                                <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                    <p>
                                        De moderne champignonteelt staat voor grote uitdagingen. Grondstoffen worden schaarser en duurder, terwijl de eisen aan kwaliteit en opbrengst alleen maar toenemen. Kwekers moeten steeds efficiënter werken om rendabel te blijven in een competitieve markt.
                                    </p>
                                    <p>
                                        In die ontwikkeling draait verbetering vaak niet om méér toevoegen, maar om het optimaliseren van wat er al aanwezig is. Het maximale rendement uit elke vlucht halen op een duurzame en betrouwbare manier.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Samenwerking Ourcelia x PlantiPower */}
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F58220]/20 rounded-full blur-[150px]" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="block text-[#F58220] font-bold text-xs tracking-[0.2em] uppercase mb-4">Samenwerking</span>
                                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ourcelia × PlantiPower</h2>
                                <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                                    <p>
                                        FungiPower is het resultaat van een strategische samenwerking tussen PlantiPower en Ourcelia. Deze joint venture combineert twee werelden: de diepgaande biologische expertise van Ourcelia als producent van kwalitatief broed, en de jarenlange sectorervaring van PlantiPower.
                                    </p>
                                    <p>
                                        Door wetenschappelijke validatie te koppelen aan de dagelijkse realiteit van de kwekerij, hebben we een biostimulant ontwikkeld die écht impact heeft waar het telt: in de teeltcel.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl">
                                <h4 className="text-[#F58220] font-bold uppercase tracking-widest text-xs mb-6 text-center">De Kracht van de Combinatie</h4>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-black text-white mb-2">Ourcelia</div>
                                        <p className="text-xs text-white/50 uppercase tracking-widest leading-loose">Biologische kennis & <br />Broedproductie</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-black text-white mb-2">PlantiPower</div>
                                        <p className="text-xs text-white/50 uppercase tracking-widest leading-loose">Sectorervaring & <br />Praktijkkennis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Technologie behind FungiPower */}
                <section className="py-16 md:py-24 bg-slate-50 border-y border-black/5 relative overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] mix-blend-multiply"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1587588264560-eb0c968f4e19?q=80&auto=format&fit=crop")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(100%) sepia(40%) contrast(120%)',
                            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
                        }}
                    />

                    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                        <div className="mb-20">
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">Technologie</h3>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Onderbouwd door wetenschap.</h2>
                        </div>

                        <div className="relative">
                            <div className="absolute top-8 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#F58220]/40 to-transparent z-0 hidden md:block"></div>

                            <svg className="absolute top-[-50px] right-0 w-full h-[200px] z-0 opacity-10 pointer-events-none" viewBox="0 0 1000 200" preserveAspectRatio="none">
                                <path className="animate-[dash_8s_linear_infinite]" d="M0,100 Q200,50 400,100 T800,100 T1000,50" fill="none" stroke="#F58220" strokeWidth="1" strokeDasharray="10 20" />
                            </svg>

                            <div className="grid md:grid-cols-3 gap-16 relative z-10">
                                <div className="flex flex-col items-start gap-6 group">
                                    <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-[#F58220] transition-colors shadow-sm relative">
                                        <Leaf className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">1. Sector Realiteit</h4>
                                        <p className="text-slate-600 text-base leading-relaxed">Begrip van de werkvloer en de dagelijkse focus op stabiel teeltmanagement.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-6 group">
                                    <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-[#F58220] transition-colors shadow-sm relative">
                                        <Cpu className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">2. Data & Biologie</h4>
                                        <p className="text-slate-600 text-base leading-relaxed">Wetenschappelijke validatie van nutriënten-opname en de biologische cyclus van mycelium.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-6 group">
                                    <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center flex-shrink-0 group-hover:border-[#F58220] transition-colors shadow-sm relative">
                                        <ShieldCheck className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-3 text-slate-900">3. Stabiel Resultaat</h4>
                                        <p className="text-slate-600 text-base leading-relaxed">Bewezen, betrouwbare biostimulanten die rendement verhogen zonder de teelt te verstoren.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Doel / Visie */}
                <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10">
                            <h2 className="text-xs font-bold text-[#F58220] tracking-[0.2em] uppercase">
                                Ons Doel Is Helder
                            </h2>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                                Een vitalere teelt en een stabielere vlucht, met uiteindelijk een <span className="text-[#F58220]">hogere opbrengst per teeltcyclus.</span>
                            </h3>

                            <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                                <p>
                                    Niet door het systeem te veranderen, maar door het beter te laten functioneren.
                                </p>
                                <p className="text-base md:text-lg text-slate-500">
                                    Wij geloven dat vooruitgang logisch moet voelen. Als technologie goed aansluit op het vak, versterkt ze het werk van de teler in plaats van het te vervangen. Dat is waar FungiPower voor staat.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <img
                                    src="/images/modern-mushroom.png"
                                    alt="Moderne champignonteelt"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                                    <p className="text-white text-[10px] font-black tracking-widest uppercase">
                                        Moderne teeltfaciliteit • Nederland
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

