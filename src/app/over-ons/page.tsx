import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, Microscope, Target, Users, Zap } from "lucide-react";

export default function OverOns() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="bg-gradient-to-br from-[#CC4400] via-[#E65100] to-[#A33600] relative">
                {/* Texture Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '150px 150px'
                    }}
                />
                <Header />
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
                        HET GEZICHT VAN<br />INNOVATIE.
                    </h1>
                    <p className="text-white/80 text-xl font-medium mt-6 max-w-2xl leading-relaxed">
                        FungiPower is ontstaan uit een passie voor teelt-optimalisatie en een diepgaand netwerk in de champignonsector.
                    </p>
                </div>
            </div>

            <main className="flex-1">
                {/* Jan Klerken Section */}
                <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border">
                                <img
                                    src="/images/jan-klerken.png"
                                    alt="Jan Klerken"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-xl shadow-xl hidden md:block">
                                <span className="block text-3xl font-black italic leading-none">"Kennis delen is vermenigvuldigen."</span>
                                <span className="block text-xs font-bold uppercase tracking-widest mt-4 opacity-80">— Jan Klerken</span>
                            </div>
                        </div>
                        <div>
                            <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
                                EXPERTISE & NETWERK
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 tracking-tight">
                                Jan Klerken: De man achter de sector.
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Met een rijke achtergrond bij <span className="text-foreground font-bold">Scelta Mushrooms</span> — een van de grootste en meest innovatieve champignonbedrijven van Europa — brengt Jan Klerken een ongeëvenaard netwerk en diepgaande kennis naar FungiPower.
                                </p>
                                <p>
                                    Jan staat bekend als de brug tussen wetenschappelijke innovatie en de dagelijkse praktijk op de werkvloer van de kweker. Zijn visie drijft FungiPower om de grenzen van wat mogelijk is in champignonteelt te verleggen.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Joint Venture Section */}
                <section className="py-24 bg-muted/30">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
                        <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
                            DE OORSPRONG
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
                            PlantiPower x Ourcelia
                        </h2>
                    </div>
                    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-2xl border border-border shadow-sm">
                            <Zap className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-2xl font-black text-secondary mb-4">Technologie van PlantiPower</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                FungiPower is gebaseerd op de bewezen <span className="text-foreground font-bold">PlantiPower biostimulant-technologie</span>. Deze technologie is specifiek doorontwikkeld en geoptimaliseerd voor de unieke behoeften van de champignonteelt.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl border border-border shadow-sm">
                            <Users className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-2xl font-black text-secondary mb-4">Netwerk van Ourcelia</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Ourcelia brengt de onmisbare <span className="text-foreground font-bold">sector-kennis en het netwerk</span> van Jan Klerken in. Deze synergie zorgt ervoor dat onze innovaties direct aansluiten bij de behoeften van moderne kwekers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
                            VISIE & MISSIE
                        </span>
                        <h2 className="text-4xl font-black text-secondary tracking-tight">
                            Data-gedreven teeltverbetering.
                        </h2>
                    </div>
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
                        <div className="flex gap-4">
                            <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Duurzame Rendementsgroei</h4>
                                <p className="text-muted-foreground">Wij focussen op structurele verhoging van de opbrengst zonder de balans van het substraat te verstoren.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Microscope className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-2">MRL-vrij & Biologisch</h4>
                                <p className="text-muted-foreground">Onze biostimulanten zijn volledig residu-vrij en passen binnen de strengste biologische normen.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
