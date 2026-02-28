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
                        backgroundImage: 'url("https://images.unsplash.com/photo-1596489399827-0105dc1bfeab?q=80&auto=format&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'right center',
                        filter: 'grayscale(100%) sepia(30%) contrast(150%)',
                        maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
                    }}
                />

                {/* Clean, editorial hero section */}
                <section className="relative z-10 pt-56 pb-8 md:pt-72 lg:pt-80 px-6 md:px-12 max-w-7xl mx-auto">
                    <span className="block text-[#F58220] font-bold text-xs tracking-[0.2em] uppercase mb-6">
                        Over Ons
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-0 max-w-5xl">
                        FungiPower is ontstaan <br className="hidden md:block" />vanuit de praktijk.
                    </h1>
                </section>

                {/* Split Layout Section with Portrait and Text */}
                <section className="pt-8 pb-32 max-w-7xl mx-auto px-6 md:px-12 relative">
                    {/* Subtle gradient glow behind the text/heading */}
                    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#F58220]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
                        {/* LEFT: Portrait Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="relative group">
                                <div className="aspect-[3.5/4] rounded-2xl overflow-hidden border border-black/5 bg-slate-100 relative shadow-2xl transition-all duration-700 group-hover:shadow-primary/10">
                                    <img
                                        src="/images/jan-klerken.jpg"
                                        alt="Jan Klerken"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] filter grayscale-[10%]"
                                    />
                                    {/* Subtle overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                                    {/* Name on photo for premium feel */}
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <p className="font-black text-2xl tracking-tighter">Jan Klerken</p>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Oprichter FungiPower</p>
                                    </div>
                                </div>

                                {/* 🟠 ORANGE QUOTE BLOCK - REINSTATED & IMPROVED */}
                                <div className="mt-8 bg-gradient-to-br from-[#F58220] to-[#D71920] p-8 md:p-10 rounded-2xl shadow-xl shadow-primary/20 relative overflow-hidden group/quote">
                                    {/* Decorative double quote mark */}
                                    <div className="absolute -top-4 -right-2 text-white/10 text-9xl font-serif select-none pointer-events-none">
                                        &rdquo;
                                    </div>
                                    <p className="relative z-10 text-white font-bold italic text-lg md:text-xl leading-relaxed">
                                        &ldquo;Verbetering draait niet om méér toevoegen, maar om beter benutten wat er al gebeurt binnen het substraat en de teelt.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Text Content Column */}
                        <div className="lg:col-span-7 pt-4 space-y-10 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-bold leading-snug text-slate-900 border-l-[4px] border-[#F58220] pl-8 py-2 mb-8 bg-gradient-to-r from-[#F58220]/5 to-transparent rounded-r-lg">
                                    Niet vanuit een marketingidee, maar vanuit jaren ervaring in de sector en een diep begrip van hoe een teelt zich ontwikkelt binnen het substraat.
                                </p>

                                <div className="space-y-6 animate-fade-in-up">
                                    <p>
                                        Jan Klerken groeide op in de champignonwereld. Wat voor anderen een product is, was voor hem dagelijkse realiteit. Door de jaren heen werkte hij in verschillende delen van de keten en zag hij hoe de sector professioneler en technischer werd. Wat daarbij altijd centraal bleef staan, is de rol van de teler. Uiteindelijk draait alles om degene die dagelijks verantwoordelijkheid draagt voor kwaliteit en continuïteit.
                                    </p>
                                    <p>
                                        Er wordt steeds meer van de sector verwacht. Kwaliteit moet constant zijn, productie voorspelbaar en efficiënt omgaan met middelen is vanzelfsprekend geworden. In die ontwikkeling draait verbetering vaak niet om méér toevoegen, maar om beter benutten wat er al gebeurt binnen het substraat en de teelt.
                                    </p>
                                </div>
                            </div>

                            <div className="relative pt-10 pb-4">
                                <div className="absolute top-0 left-0 w-24 h-[1px] bg-[#F58220]" />
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
                                    Daar ligt de kern van FungiPower.
                                </h2>
                                <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                    Wij ondersteunen de natuurlijke opname en benutting, zonder het systeem uit balans te brengen. Geen ingrijpende veranderingen, maar gerichte verfijning. Ontwikkeld vanuit praktijkkennis en getest in echte omstandigheden voor de teler van nu.
                                </p>
                            </div>

                            <div className="bg-slate-100/50 p-8 rounded-2xl border border-black/5 flex items-center justify-between group">
                                <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">Onze methodiek</span>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Horizontale “Van praktijk naar technologie” visual */}
                <section className="py-24 md:py-32 bg-slate-50 border-y border-black/5 relative overflow-hidden">
                    {/* Faded Vintage Background Image */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] mix-blend-multiply"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1596489399827-0105dc1bfeab?q=80&auto=format&fit=crop")', // Classic agriculture/mushrooms vibe
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(100%) sepia(40%) contrast(120%)',
                            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
                        }}
                    />

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

                {/* Doel / Verfijnde visie met Visual */}
                <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
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

                        <div className="lg:col-span-5 relative">
                            {/* Sketch-like / Technical layout on the right */}
                            <div className="relative aspect-square w-full sm:w-[80%] mx-auto lg:w-full rounded-[40px] border border-slate-200/80 bg-slate-50/50 flex items-center justify-center p-8 group overflow-hidden">

                                {/* Faint diagram overlay */}
                                <div
                                    className="absolute inset-0 opacity-[0.08] mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                                    style={{
                                        backgroundImage: 'url("/images/mycelium network.jpg")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'grayscale(100%) contrast(150%)'
                                    }}
                                />

                                {/* Abstract Geometry */}
                                <div className="relative z-10 w-full h-full border-[0.5px] border-black/5 rounded-[20px] flex items-center justify-center overflow-hidden">
                                    <div className="w-56 h-56 rounded-full border-[0.5px] border-[#F58220]/30 shadow-[0_0_60px_rgba(245,130,32,0.05)] flex items-center justify-center backdrop-blur-sm">
                                        <div className="w-32 h-32 rounded-full border border-black/5 flex flex-col items-center justify-center gap-4 bg-white/40">
                                            <Leaf className="w-8 h-8 text-[#F58220]/70" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Crosshairs & Lines */}
                                    <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-[#F58220]/20" />
                                    <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-[#F58220]/20" />
                                    <div className="absolute top-8 left-8 w-2 h-2 rounded-full border border-[#F58220]/50" />
                                    <div className="absolute bottom-8 right-8 w-1.5 h-1.5 rounded-full bg-slate-300" />
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

