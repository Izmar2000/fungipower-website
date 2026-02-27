import { DraftWarning } from "@/components/DraftWarning";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function SectorInzichten() {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-[88px] lg:pt-[112px]">
            <DraftWarning />
            <Header />

            <main className="flex-1 py-20 px-6 max-w-7xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 border-b pb-4">
                    Sector Inzichten & Nieuws
                </h1>
                <p className="text-xl text-slate-600 mb-12 max-w-3xl">
                    De laatste stand van zaken binnen de teelt. Actuele prijzen, grondstof-trends, en belangrijke inzichten direct uit het netwerk van Jan Klerken.
                </p>

                {/* Dummy Nieuws Artikelen */}
                <div className="grid md:grid-cols-3 gap-8 opacity-70">
                    {[1, 2, 3, 4, 5, 6].map(num => (
                        <div key={num} className="bg-white border text-center border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-not-allowed">
                            <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs relative">
                                Gereserveerde Afbeelding
                            </div>
                            <div className="p-6">
                                <span className="text-[#F58220] font-black tracking-widest uppercase text-[10px] mb-3 block">Markt Update</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                                    Concept artikel titel {num}: Effecten van recente compostprijzen op structureel cel-rendement
                                </h3>
                                <p className="text-slate-500 text-sm line-clamp-3">
                                    Wanneer FungiPower de actuele marktdump kan verwerken tot live data, zal hier een kort uittreksel of lead komen te staan met theorie.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
