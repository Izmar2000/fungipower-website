'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface InteractiveCucumberHeroProps {
    dict: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const t = dict.Cucumbers.infographic;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1, 1.1]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div ref={containerRef} className="min-h-[700px] w-full" />;

    const hotspots = [
        { id: 'leaves', x: 75, y: 20, label: t.leaves, align: 'left', delay: 0.1 },
        { id: 'fruit', x: 25, y: 38, label: t.fruit, align: 'right', delay: 0.2 },
        { id: 'uptake', x: 45, y: 62, label: t.uptake, align: 'right', delay: 0.3 },
        { id: 'roots', x: 70, y: 85, label: t.roots, align: 'left', delay: 0.4 },
    ];

    return (
        <div ref={containerRef} className="relative w-full min-h-[600px] md:min-h-[900px] flex items-center justify-center overflow-visible py-10 md:py-20">
            {/* Multi-layered Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.18)_0%,transparent_65%)] pointer-events-none blur-[100px] opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] aspect-square bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1)_0%,transparent_55%)] pointer-events-none blur-[80px] animate-pulse"></div>

            <motion.div
                className="relative w-full max-w-[1000px] px-4"
                style={{ scale, opacity }}
            >
                {/* Video Container with Premium Framing */}
                <div className="relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[3rem] overflow-hidden group"
                    >
                        {/* Inner Glow */}
                        <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_100px_rgba(1,20,16,0.8)]"></div>
                        
                        <video
                            ref={videoRef}
                            src="/images/cucumber-animation.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto max-h-[80vh] object-contain relative z-10 drop-shadow-[0_0_80px_rgba(132,204,22,0.2)] mix-blend-lighten"
                        />
                        
                        {/* Overlay to soften video edges into background */}
                        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#011410] via-transparent to-[#011410] opacity-40"></div>
                        <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#011410] via-transparent to-[#011410] opacity-40"></div>
                    </motion.div>

                    {/* Highly Interactive Hotspots Layout */}
                    <div className="absolute inset-0 z-30">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* The Hotspot Trigger */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + spot.delay, type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <button
                                        className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 group outline-none"
                                        onMouseEnter={() => setActiveHotspot(spot.id)}
                                        onMouseLeave={() => setActiveHotspot(null)}
                                        onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                                        aria-label={spot.label}
                                    >
                                        {/* Dynamic Ripple Rings */}
                                        <div className="absolute inset-0 rounded-full bg-lime-400/20 animate-ping duration-1000 opacity-40"></div>
                                        <div className="absolute inset-2 rounded-full bg-lime-400/10 border border-lime-400/30 group-hover:scale-110 transition-transform duration-500"></div>
                                        
                                        {/* Core Dot with Glow */}
                                        <div className="relative w-3 h-3 md:w-5 md:h-5 rounded-full bg-white shadow-[0_0_25px_rgba(163,230,21,1)] group-hover:scale-125 group-hover:bg-lime-400 transition-all duration-300"></div>
                                    </button>
                                </motion.div>

                                {/* Premium Informational Popover */}
                                <AnimatePresence mode="wait">
                                    {(activeHotspot === spot.id) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: 5, filter: "blur(8px)" }}
                                            className={`absolute top-0 -translate-y-1/2 ${spot.align === 'left' ? 'left-10 md:left-16' : 'right-10 md:right-16'} w-60 md:w-80 h-0 flex items-center z-50`}
                                        >
                                            <div className="glass-panel p-6 md:p-8 rounded-[2.5rem] border-white/20 bg-[#011410]/80 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] border ring-1 ring-lime-400/20">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
                                                    <div className="text-lime-400 text-[10px] font-black uppercase tracking-[0.25em] font-outfit">Validated Result</div>
                                                </div>
                                                <div className="text-white text-lg md:text-2xl font-black leading-[1.1] uppercase tracking-tighter font-outfit mb-4">
                                                    {spot.label}
                                                </div>
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    className="h-1 bg-gradient-to-r from-lime-400/60 to-transparent rounded-full opacity-40 mb-2"
                                                ></motion.div>
                                                
                                                {/* Sophisticated Path Connector */}
                                                <div className={`absolute top-1/2 -translate-y-1/2 ${spot.align === 'left' ? '-left-8 md:-left-12' : '-right-8 md:-right-12'} w-8 md:w-12 h-px bg-gradient-to-r ${spot.align === 'left' ? 'from-transparent via-lime-400/50 to-lime-400' : 'from-lime-400 via-lime-400/50 to-transparent'}`}></div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Particle Stream (Flowing Upwards) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
                    <svg className="w-full h-full">
                        {[...Array(20)].map((_, i) => (
                            <motion.circle
                                key={i}
                                r={Math.random() * 2.5 + 0.5}
                                fill="#a3e635"
                                animate={{
                                    y: [1000, -200],
                                    x: [Math.random() * 1000],
                                    opacity: [0, 0.7, 0]
                                }}
                                transition={{
                                    duration: 6 + Math.random() * 6,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </svg>
                </div>
            </motion.div>

            {/* Mobile Touch Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden text-center z-40">
                <div className="bg-lime-400/10 backdrop-blur-xl px-6 py-2.5 rounded-full border border-lime-400/20 shadow-lg">
                    <span className="text-lime-400 text-xs uppercase tracking-[0.2em] font-black animate-pulse">
                        Explore Infographic
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCucumberHero;
