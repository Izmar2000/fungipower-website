"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "HOME", href: "#" },
    { label: "WETENSCHAP", href: "#" },
    { label: "RESULTATEN", href: "#" },
    { label: "CONTACT", href: "#" },
];

// Simplified Data Panel for preview
const MockDataPanel = () => (
    <div className="bg-black/95 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="grid grid-cols-3 gap-4 mb-8">
            {[
                { label: "VOCHTIGHEID (%)", val: "88.2" },
                { label: "CO2 (PPM)", val: "948" },
                { label: "TEMP (C)", val: "24.1" },
            ].map((s) => (
                <div key={s.label}>
                    <p className="text-[8px] font-black text-white/30 tracking-widest">{s.label}</p>
                    <p className="text-xl font-black text-white">{s.val}</p>
                </div>
            ))}
        </div>
        <div className="mb-6">
            <p className="text-[10px] font-black text-primary tracking-widest mb-1 italic">PRAKTIJKVOORBEELD: CHAMPIGNONKWEKER GRUBBENVORST</p>
            <p className="text-5xl font-black text-white tracking-tighter indent-[-2px]">+73% <span className="text-[10px] text-white/40 tracking-widest uppercase">2e vlucht</span></p>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-white/60 text-[11px] leading-relaxed italic italic">"De opbrengst van de tweede vlucht ging naar 243g/blok. Alleen al deze resultaten rechtvaardigden de investering."</p>
            <p className="text-white/30 text-[9px] font-bold mt-2 tracking-widest uppercase">Karel v.d. Meer, Pan NL</p>
        </div>
    </div>
);

// CONCEPT 1: ORANGE HERITAGE
const OrangeConcept = () => (
    <div className="w-full bg-[#FFA500] min-h-[90vh] relative overflow-hidden font-inter text-black selection:bg-black selection:text-[#FFA500]">
        {/* Header */}
        <header className="relative z-20 w-full px-6 py-6 border-b border-black/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <img src="/Logo%20trans/FungiPower%20Logo.svg" alt="FungiPower" className="h-20 w-auto brightness-0" />
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((l) => (
                        <button key={l.label} className="text-black text-xs font-black tracking-widest uppercase hover:opacity-60 transition-all">{l.label}</button>
                    ))}
                    <button className="bg-black text-[#FFA500] px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-black/80 transition-all shadow-xl">PROEF AANVRAGEN</button>
                </nav>
            </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
                <span className="text-black/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">— BIOLOGISCHE SYSTEEMVERSTERKING</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tighter italic">
                    MAXIMAAL<br />RENDEMENT<br />UIT JE <span className="text-white underline decoration-black decoration-8 underline-offset-8">2e EN 3e</span><br />VLUCHT.
                </h1>
                <p className="text-lg font-bold leading-snug mb-8 opacity-80">
                    FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen.
                </p>
                <div className="flex flex-col gap-4 mb-10">
                    {["Verhoogde opbrengst per vlucht", "Verlengde levensduur substraat"].map(item => (
                        <div key={item} className="flex items-center gap-3 font-black text-sm uppercase italic tracking-tight">
                            <div className="w-2 h-2 bg-black" /> {item}
                        </div>
                    ))}
                </div>
                <button className="bg-black text-[#FFA500] px-10 py-5 text-sm font-black tracking-[0.2em] uppercase hover:bg-black/90 transition-all shadow-2xl flex items-center gap-3">
                    PLAN EEN PROEF <ArrowRight className="w-5 h-5" />
                </button>
            </div>
            <div className="flex justify-center lg:justify-end translate-x-2">
                <MockDataPanel />
            </div>
        </div>
    </div>
);

// CONCEPT 2: PREMIUM DARK Green/Anthracite
const DarkConcept = () => (
    <div className="w-full bg-[#0A0F0A] min-h-[90vh] relative overflow-hidden font-inter text-white">
        {/* Header */}
        <header className="relative z-20 w-full px-6 py-6 border-b border-white/5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <img src="/Logo%20trans/FungiPower%20Logo.svg" alt="FungiPower" className="h-20 w-auto brightness-200 grayscale" />
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((l) => (
                        <button key={l.label} className="text-white/60 text-xs font-black tracking-widest uppercase hover:text-primary transition-all">{l.label}</button>
                    ))}
                    <button className="bg-primary text-white px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-primary/80 transition-all shadow-xl">PROEF AANVRAGEN</button>
                </nav>
            </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
                <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">— BIOLOGISCHE SYSTEEMVERSTERKING</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tighter uppercase italic">
                    MAXIMAAL<br />RENDEMENT<br />UIT JE <span className="text-primary">2e EN 3e</span><br />VLUCHT.
                </h1>
                <p className="text-lg text-white/50 font-medium leading-relaxed mb-8">
                    FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen.
                </p>
                <button className="bg-primary text-white px-10 py-5 text-sm font-black tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-2xl flex items-center gap-3">
                    PLAN EEN PROEF <ArrowRight className="w-5 h-5" />
                </button>
            </div>
            <div className="flex justify-center lg:justify-end">
                <MockDataPanel />
            </div>
        </div>
    </div>
);

export default function HeadersPage() {
    return (
        <div className="min-h-screen bg-[#111] py-12">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h1 className="text-2xl font-black text-white tracking-widest uppercase border-b border-white/10 pb-4 inline-block">Design Varianten</h1>
            </div>

            <div className="flex flex-col gap-40">
                <section className="px-6">
                    <div className="mb-6 flex items-baseline gap-4">
                        <span className="text-white text-xs font-black px-4 py-1 bg-primary rounded-full uppercase tracking-widest">VARIANT A</span>
                        <h2 className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">ORANGE HERITAGE (FULL IMPACT)</h2>
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
                        <OrangeConcept />
                    </div>
                </section>

                <section className="px-6">
                    <div className="mb-6 flex items-baseline gap-4">
                        <span className="text-white text-xs font-black px-4 py-1 bg-zinc-800 rounded-full uppercase tracking-widest">VARIANT B</span>
                        <h2 className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">AGRITECH DARK (STEALTH MODE)</h2>
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
                        <DarkConcept />
                    </div>
                </section>
            </div>

            <div className="mt-40 text-center pb-20">
                <button onClick={() => window.location.href = "/"} className="text-white/20 hover:text-white transition-all text-xs font-black tracking-widest uppercase underline underline-offset-8 decoration-primary/30">
                    TERUG NAAR DE LIVE SITE
                </button>
            </div>
        </div>
    );
}
