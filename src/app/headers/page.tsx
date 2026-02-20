"use client";

import { useState } from "react";
import { Menu, X, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "HOME", href: "#" },
    { label: "WETENSCHAP", href: "#" },
    { label: "RESULTATEN", href: "#" },
    { label: "CONTACT", href: "#" },
];

const HeaderMock = () => (
    <header className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-6">
            <div className="flex items-center">
                <img
                    src="/Logo%20trans/FungiPower%20Logo.svg"
                    alt="FungiPower"
                    className="h-24 md:h-[120px] w-auto object-contain transition-all invert brightness-200"
                />
            </div>
            <nav className="hidden lg:flex items-center gap-10">
                {navLinks.map((l) => (
                    <button key={l.label} className="text-white text-xs font-black tracking-[0.15em] uppercase hover:opacity-70 transition-colors">{l.label}</button>
                ))}
                <button className="bg-black text-white px-8 py-3 text-xs font-black tracking-[0.15em] uppercase hover:bg-black/80 transition-all shadow-xl">
                    PROEF AANVRAGEN
                </button>
            </nav>
        </div>
    </header>
);

const HeroContentMock = () => (
    <div className="flex flex-col justify-center max-w-2xl py-8">
        <div className="mb-4">
            <span className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">— BIOLOGISCHE SYSTEEMVERSTERKING</span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tight">
            MAXIMAAL<br />RENDEMENT<br />UIT JE <span className="text-black underline decoration-black/30 decoration-8 underline-offset-[12px]">2e EN<br />3e VLUCHT.</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-medium mb-6 leading-relaxed max-w-xl">
            FungiPower verhoogt structureel de opbrengst van champignons door de vitaliteit van het substraat te verlengen en opname-efficiëntie te optimaliseren.
            <br /><span className="mt-2 block text-sm opacity-60">Ontwikkeld voor commerciële kwekers die sturen op rendement per cel.</span>
        </p>
        <ul className="space-y-3 mb-6">
            {[
                "Verhoogde opbrengst per vlucht",
                "Verlengde productieve levensduur van het substraat",
                "Data-onderbouwde werking in praktijktesten"
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white font-semibold">
                    <div className="w-1.5 h-1.5 bg-black rounded-none" />
                    {item}
                </li>
            ))}
        </ul>
        <div className="bg-black/10 backdrop-blur-sm p-5 border-l-4 border-black shadow-sm mb-8 max-w-md">
            <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-white">+11,3%</span>
                <span className="text-white font-bold uppercase text-sm">GEMIDDELDE OPBRENGSTVERHOGING</span>
            </div>
            <p className="text-xs text-white/50">Gemiddelde uit praktijkproeven (p=0,028)</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-8 py-4 text-xs font-black tracking-[0.15em] uppercase hover:bg-black/80 transition-all shadow-lg flex items-center gap-2 group">
                PLAN EEN PROEF OP LOCATIE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
);

const GlassmorphismPanelMock = () => (
    <div className="w-full max-w-md lg:max-w-lg relative z-10 transform transition-transform duration-500 hover:scale-[1.01]">
        <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between mb-8 border-b border-white/10 pb-6">
                <div className="text-center">
                    <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Vochtigheid (%)</span>
                    <span className="text-2xl font-black text-white tracking-tight">88.2</span>
                </div>
                <div className="text-center border-l border-white/10 pl-8">
                    <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">CO2 (ppm)</span>
                    <span className="text-2xl font-black text-white tracking-tight">948</span>
                </div>
                <div className="text-center border-l border-white/10 pl-8">
                    <span className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Temp (C)</span>
                    <span className="text-2xl font-black text-white tracking-tight">24.1</span>
                </div>
            </div>
            <div className="mb-8">
                <span className="block text-[10px] md:text-[11px] uppercase font-black text-[#FFA500] tracking-[0.15em] mb-4">PRAKTIJKVOORBEELD: CHAMPIGNONKWEKER GRUBBENVORST</span>
                <div className="flex items-end gap-4">
                    <h2 className="text-7xl font-black text-white tracking-tighter leading-none">+73%</h2>
                    <div className="flex flex-col mb-1">
                        <span className="text-sm font-bold text-white/90 uppercase leading-none mb-1">2e</span>
                        <span className="text-sm font-bold text-white/50 uppercase leading-none">Vlucht</span>
                    </div>
                    <svg className="h-12 w-32 ml-auto stroke-white/20" viewBox="0 0 100 40" fill="none">
                        <path d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0 35 L 20 32 L 40 25 L 60 28 L 80 15 L 100 5 V 40 H 0 Z" fill="url(#gradient)" className="opacity-10" />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="white" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-8 h-20">
                {[1, 2, 3, 4].map(i => <div key={i} className="bg-white/5 rounded-lg border border-white/5 bg-zinc-800"></div>)}
            </div>
            <div className="bg-[#151515] rounded-xl p-6 border-t border-white/5 text-left">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0" />
                    <span className="text-[10px] font-bold uppercase text-white/40 tracking-wider">Geverifieerde Google Review</span>
                    <div className="flex gap-0.5 ml-auto">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />)}
                    </div>
                </div>
                <p className="text-sm text-white/70 italic leading-relaxed mb-4 font-medium">"De opbrengst van de tweede vlucht ging naar 243g/blok."</p>
                <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Karel v.d. Meer</span>
                </div>
            </div>
        </div>
    </div>
);

export default function HeadersPage() {
    return (
        <div className="min-h-screen font-inter">
            {/* CONCEPT: DEEP BURNT ORANGE GRADIENT */}
            <section className="relative min-h-screen bg-gradient-to-br from-[#4D1A00] via-[#802B00] to-[#CC4400] overflow-hidden flex flex-col">
                <HeaderMock />

                <div className="flex-grow flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
                        <HeroContentMock />
                        <div className="flex justify-center lg:justify-end">
                            <GlassmorphismPanelMock />
                        </div>
                    </div>
                </div>

                {/* Texture Overlay (Same as original) */}
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '150px 150px'
                    }}
                />
            </section>

            {/* Selector / Back Button */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <button
                    onClick={() => window.location.href = "/"}
                    className="bg-black/80 backdrop-blur-md text-white px-8 py-3 rounded-full text-[10px] font-black tracking-widest border border-white/10"
                >
                    TERUG NAAR DE WITTE LIVE SITE
                </button>
            </div>
        </div>
    );
}
