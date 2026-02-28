"use client";

import { useState } from "react";
import { DraftWarning } from "@/components/DraftWarning";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Calculator, Dna, FlaskConical, Settings2, Target } from "lucide-react";

export default function Dosering() {
    const [surfaceArea, setSurfaceArea] = useState<number>(4500);
    const [cycles, setCycles] = useState<number>(3);

    // Fictieve dosering berekening gebaseerd op een aangenomen "15 liter per 1000m²" als standaard
    const litersPer1000m2 = 15;
    const startDosage = Math.round((surfaceArea / 1000) * litersPer1000m2);
    const boostDosage = Math.round((surfaceArea / 1000) * (litersPer1000m2 * 0.8) * (cycles - 1));
    const totalLiters = startDosage + boostDosage;

    return (
        <div className="min-h-screen bg-background flex flex-col pt-[72px] md:pt-[88px] lg:pt-[96px]">
            <DraftWarning />
            <Header forceSolid={true} />

            <main className="flex-1 py-16 px-6 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-4 mb-4">
                    <Calculator className="w-8 h-8 text-[#F58220]" />
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Doseringsprotocol
                    </h1>
                </div>
                <p className="text-lg text-slate-600 mb-12 max-w-3xl">
                    Bereken de exacte benodigde biostimulant volumes voor uw specifieke kweekschema. Deze module levert een op maat gemaakte dosering voor optimale efficiëntie, gebaseerd op wetenschappelijke velddata.
                </p>

                <div className="bg-slate-900 rounded-[32px] shadow-2xl overflow-hidden border border-slate-800 relative">
                    {/* Scientific grid background overlay */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220] opacity-5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D71920] opacity-5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-0 relative z-10">
                        {/* INVOER PANEEL (Links) */}
                        <div className="lg:col-span-7 p-8 md:p-12 lg:pr-16 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-10">
                                <Settings2 className="w-5 h-5 text-[#F58220]" />
                                <h2 className="text-white text-xl font-black tracking-widest uppercase">Cel Parameters</h2>
                            </div>

                            <div className="space-y-12">
                                {/* Oppervlakte Slider */}
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="text-white/60 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                            Netto Kweekoppervlak
                                        </label>
                                        <div className="text-3xl font-black text-white">{surfaceArea.toLocaleString('nl-NL')} <span className="text-sm text-white/40">m²</span></div>
                                    </div>
                                    <input
                                        type="range"
                                        min="500"
                                        max="20000"
                                        step="500"
                                        value={surfaceArea}
                                        onChange={(e) => setSurfaceArea(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#F58220]"
                                    />
                                    <div className="flex justify-between text-[10px] text-white/30 font-bold tracking-widest mt-2 uppercase">
                                        <span>500 m²</span>
                                        <span>20.000 m²</span>
                                    </div>
                                </div>

                                {/* Aantal Vluchten Selector */}
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="text-white/60 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                            Geplande Vluchten per Cyclus
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {[1, 2, 3, 4].map(num => (
                                            <button
                                                key={num}
                                                onClick={() => setCycles(num)}
                                                className={`py-4 rounded-xl flex items-center justify-center font-black text-xl transition-all duration-300 border ${cycles === num ? 'bg-[#F58220] text-white border-[#F58220] shadow-[0_0_20px_rgba(245,130,32,0.3)]' : 'bg-slate-800 border-slate-700 text-white/40 hover:bg-slate-700 hover:text-white/80'}`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UITVOER PANEEL (Rechts) */}
                        <div className="lg:col-span-5 bg-black/40 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/10 backdrop-blur-md flex flex-col justify-center">
                            <div className="mb-10">
                                <span className="text-[#F58220] text-[10px] font-black tracking-[0.3em] uppercase mb-4 block flex items-center gap-2">
                                    <Target className="w-4 h-4" /> Berekend Volume
                                </span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-7xl font-black text-white">{totalLiters}</span>
                                    <span className="text-xl font-bold text-white/40 uppercase tracking-widest">Liters</span>
                                </div>
                                <p className="text-white/40 text-sm mt-2 font-medium">Totaal benodigd per kweekcelcyclus.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl flex items-center justify-between group hover:border-[#F58220]/50 transition-colors cursor-default">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                            <FlaskConical className="w-5 h-5 text-[#F58220]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold tracking-wide">FungiPower <span className="font-black">Start</span></h4>
                                            <p className="text-[11px] text-white/40 uppercase tracking-widest">Toediening bij vulling</p>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-black text-white">{startDosage} <span className="text-sm text-white/30 hidden sm:inline">L</span></div>
                                </div>

                                <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-2xl flex items-center justify-between group hover:border-[#D71920]/50 transition-colors cursor-default">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                                            <Dna className="w-5 h-5 text-[#D71920]" />
                                        </div>
                                        <div className="pb-1">
                                            <h4 className="text-white font-bold tracking-wide">FungiPower <span className="font-black">Boost</span></h4>
                                            <p className="text-[11px] text-white/40 uppercase tracking-widest line-clamp-1 truncate">Via behandelingswater (per extra vlucht)</p>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-black text-white">{boostDosage} <span className="text-sm text-white/30 hidden sm:inline">L</span></div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 text-[11px] leading-relaxed text-white/30 font-medium">
                                Deze applicatie verschaft een richtlijn-dosering. Gezien elke teelt uniek is (o.a. afhankelijk van structuur en vochtbalans van de compost), wordt het definitieve behandelplan individueel afgestemd na een nulmeting op locatie.
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
