"use client";
import { CONTENT } from "@/lib/content";

export default function EuropeMap() {
    return (
        <div className="relative w-full aspect-[4/3] md:aspect-video max-w-6xl mx-auto overflow-visible">
            {/* EU watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
                <div className="text-[30rem] font-brutal leading-none">EUROPE</div>
            </div>

            {/* Geographic Europe SVG Background - THIS IS THE ONLY THING REMAINING */}
            <div className="absolute inset-0 opacity-60 mix-blend-screen pointer-events-none">
                <svg viewBox="0 0 1000 700" className="w-full h-full fill-none stroke-wimbledon-gold/60" strokeWidth="1.5">
                    {/* Simplified Geographic Outline of Western Europe */}
                    <path
                        d="M420,100 L440,120 L430,140 L450,160 L470,140 L490,160 L510,140 L530,160 L550,140 L570,160 L590,140 L610,160 L630,140 L650,160 L670,140 L690,160 L710,180 L730,220 L690,280 L670,330 L690,380 L670,430 L640,480 L590,530 L540,580 L490,630 L440,660 L390,630 L340,600 L290,630 L240,580 L210,530 L190,480 L170,430 L140,400 L110,430 L90,380 L110,330 L90,280 L140,230 L190,280 L240,230 L290,200 L310,160 L340,130 L370,110 Z"
                        fill="rgba(197, 160, 89, 0.12)"
                    />
                    {/* UK Outline */}
                    <path
                        d="M390,200 L410,180 L440,200 L470,230 L450,280 L410,300 L370,280 L360,230 Z"
                        fill="rgba(197, 160, 89, 0.2)"
                    />
                    {/* Spain/Portugal */}
                    <path
                        d="M340,530 L390,510 L440,530 L410,600 L340,660 L290,630 L270,580 Z"
                        fill="rgba(197, 160, 89, 0.2)"
                    />
                </svg>
            </div>

            {/* Minimal Title - No overlay, no lines, no names */}
            <div className="absolute top-10 left-10 md:top-16 md:left-16 z-20 pointer-events-none">
                <h4 className="text-3xl md:text-5xl font-brutal text-white uppercase tracking-tighter gold-text-gradient drop-shadow-xl opacity-80">
                    EUROPA ROUTE
                </h4>
            </div>
        </div>
    );
}
