import { Footer } from "@/components/landing/Footer";

export default function Praktijkvoorbeelden() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-[72px] md:pt-[88px] lg:pt-[96px]">
            <main className="flex-1 py-10 md:py-16 px-6 max-w-7xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 border-b pb-4">
                    Praktijkvoorbeelden & Casussen
                </h1>
                <p className="text-xl text-slate-600 mb-12 max-w-3xl">
                    Hier komen binnenkort de harde data, tabellen en ervaringen van kwekerijen die FungiPower in de praktijk hebben toegepast.
                </p>

                {/* Dummy/Placeholder Casus */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 mb-10 opacity-70">
                    <span className="text-xs font-bold text-[#F58220] tracking-widest uppercase mb-4 block">Testbedrijf A (Dummy)</span>
                    <h2 className="text-3xl font-black mb-6">Witkampioen B.V. - +11% na cyclus 3</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-slate-600 mb-6">
                                In dit overzicht wordt de specifieke test-setup en de voorgeschiedenis van het bedrijf geschetst. Uitgangspunt: conventionele teelt op de reguliere manier.
                            </p>
                            <ul className="space-y-4 font-bold text-slate-800">
                                <li className="flex gap-4"><span>✓</span> Oppervlakte: 12.000m2</li>
                                <li className="flex gap-4"><span>✓</span> Testperiode: Q3 2025</li>
                                <li className="flex gap-4"><span>✓</span> Resultaat: Substantieel langere piekgroei in de derde vlucht.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 flex items-center justify-center rounded-xl border border-slate-200 aspect-video tracking-widest text-slate-400 font-bold uppercase">
                            Grafiek Gereserveerd
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
