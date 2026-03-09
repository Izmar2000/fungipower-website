"use client";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { useRef } from "react";
import { CONTENT } from "@/lib/content";
import { FadeIn } from "./ui";

// SVG path for the bus to follow — gentle S-curve top to bottom
const PATH =
    "M 160,60 C 200,140 120,210 160,280 C 200,350 120,420 160,490 C 200,560 120,600 160,640";

// Fractions along [0,1] scroll where each stop appears
const STOP_FRACTIONS = [0.05, 0.35, 0.65, 0.92];

const MILESTONES = [
    {
        date: CONTENT.roadmap.milestones[0].date,
        title: CONTENT.roadmap.milestones[0].title,
        desc: CONTENT.roadmap.milestones[0].desc,
        cy: 60,
    },
    {
        date: CONTENT.roadmap.milestones[1].date,
        title: CONTENT.roadmap.milestones[1].title,
        desc: CONTENT.roadmap.milestones[1].desc,
        cy: 280,
    },
    {
        date: "ZOMER 2026",
        title: "Halte: Barcelona",
        desc: "De zon, de clubs, de energie — Barcelona als tussenstation richting het eindpunt.",
        cy: 490,
    },
    {
        date: CONTENT.roadmap.milestones[2].date,
        title: CONTENT.roadmap.milestones[2].title,
        desc: CONTENT.roadmap.milestones[2].desc,
        cy: 640,
    },
];

export default function Roadmap() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        damping: 40,
        stiffness: 90,
        restDelta: 0.001,
    });

    // Route line draw
    const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

    // Bus offset along path
    const busOffsetDistance = useTransform(
        smoothProgress,
        [0, 1],
        ["0%", "100%"]
    );

    // Per-stop visibility (computed without hooks in loop — just using style transforms inline)
    return (
        <section id="roadmap" className="relative bg-wimbledon-green overflow-hidden">
            {/* Background Image - very subtle */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 bg-[url('/theroadto/cover-hero.jpg')] bg-cover bg-center bg-fixed opacity-[0.03] mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-wimbledon-green via-transparent to-wimbledon-green" />
            </div>

            {/* Static header */}
            <div className="relative z-10 py-24 px-6 md:px-12 lg:px-24">
                <FadeIn>
                    <div className="text-center mb-4">
                        <span className="text-wimbledon-gold text-[10px] font-bold tracking-[0.5em] uppercase block mb-4">
                            {CONTENT.roadmap.sectionLabel}
                        </span>
                        <h2 className="text-5xl md:text-8xl font-display font-bold italic">
                            {CONTENT.roadmap.title}
                        </h2>
                        <p className="text-off-white/40 text-sm mt-6 uppercase tracking-widest font-bold">
                            Scroll om de reis te beleven ↓
                        </p>
                    </div>
                </FadeIn>
            </div>

            {/* 300vh scroll container */}
            <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
                {/* Sticky viewport */}
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    <div className="relative w-full max-w-5xl h-[720px] mx-auto px-8">

                        {/* Central SVG */}
                        <svg
                            viewBox="0 0 320 700"
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{ width: 320, height: 720 }}
                        >
                            <defs>
                                <linearGradient id="rg" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#C5A059" />
                                    <stop offset="50%" stopColor="#E8D098" />
                                    <stop offset="100%" stopColor="#C5A059" />
                                </linearGradient>
                                <filter id="glow2">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <filter id="busGlow2">
                                    <feGaussianBlur stdDeviation="5" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Ghost track */}
                            <path
                                d={PATH}
                                fill="none"
                                stroke="rgba(197,160,89,0.08)"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />

                            {/* Animated route line */}
                            <motion.path
                                d={PATH}
                                fill="none"
                                stroke="url(#rg)"
                                strokeWidth="5"
                                strokeLinecap="round"
                                style={{ pathLength }}
                                filter="url(#glow2)"
                            />

                            {/* Stop dots — animated via whileInView so no hook in loop */}
                            {MILESTONES.map((m, i) => (
                                <g key={i}>
                                    <motion.circle
                                        cx="160"
                                        cy={m.cy}
                                        r="14"
                                        fill="none"
                                        stroke="#C5A059"
                                        strokeWidth="1.5"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                        viewport={{ once: false }}
                                    />
                                    <motion.circle
                                        cx="160"
                                        cy={m.cy}
                                        r="8"
                                        fill="#0A2A1B"
                                        stroke="#C5A059"
                                        strokeWidth="2.5"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.2 }}
                                        filter="url(#glow2)"
                                    />
                                    <motion.circle
                                        cx="160"
                                        cy={m.cy}
                                        r="4"
                                        fill="#C5A059"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: i * 0.2 + 0.1 }}
                                    />
                                </g>
                            ))}

                            {/* Animated Bus */}
                            <motion.image
                                href="/vw-bus.png"
                                width="72"
                                height="48"
                                style={
                                    ({
                                        // CSS motion path — cast via unknown to allow MotionValue<string>
                                        offsetPath: `path("${PATH}")`,
                                        offsetDistance: busOffsetDistance,
                                        offsetRotate: "auto 90deg",
                                        translateX: "-36px",
                                        translateY: "-24px",
                                        filter: "drop-shadow(0 0 10px rgba(197,160,89,0.9))",
                                    } as unknown) as React.CSSProperties
                                }
                            />
                        </svg>

                        {/* Info cards — alternating left/right, positioned to match SVG y-coordinates */}
                        {MILESTONES.map((m, i) => {
                            const isRight = i % 2 === 0;
                            // Map SVG cy (60–640 within 700px viewBox) → % of 720px container
                            const topPct = (m.cy / 700) * 100;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    className={`absolute w-64 glass-card p-6 border-t-2 border-t-wimbledon-gold -translate-y-1/2 ${isRight ? "left-[calc(50%+90px)]" : "right-[calc(50%+90px)]"
                                        }`}
                                    style={{ top: `${topPct}%` }}
                                >
                                    <div className="text-wimbledon-gold font-brutal text-sm mb-1 uppercase tracking-widest">
                                        {m.date}
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-white mb-2 uppercase leading-tight">
                                        {m.title}
                                    </h3>
                                    <p className="text-off-white/50 text-sm leading-relaxed">
                                        {m.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="py-24" />
        </section>
    );
}
