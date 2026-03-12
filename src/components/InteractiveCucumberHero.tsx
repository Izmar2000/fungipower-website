'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';

interface InteractiveCucumberHeroProps {
    dict: any;
}

const InteractiveCucumberHero: React.FC<InteractiveCucumberHeroProps> = ({ dict }) => {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-400, 400], [3, -3]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-3, 3]), { stiffness: 100, damping: 30 });

    const t = dict.Cucumbers.infographic;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
    const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x * 0.4);
        mouseY.set(y * 0.4);
    };

    if (!isMounted) return <div ref={containerRef} className="min-h-[800px] w-full" />;

    // perfectly axial coordinates on the stem
    const hotspots = [
        { id: 'leaves', x: 50, y: 15, label: t.leaves, align: 'left', baseDelay: 0 },
        { id: 'fruit', x: 50, y: 42, label: t.fruit, align: 'right', baseDelay: 1.2 }, 
        { id: 'uptake', x: 50, y: 65, label: t.uptake, align: 'left', baseDelay: 2.4 },
        { id: 'roots', x: 50.5, y: 86, label: t.roots, align: 'right', baseDelay: 3.6 },
    ];

    return (
        <div 
            ref={containerRef} 
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[1000px] md:min-h-[1400px] flex items-center justify-center overflow-visible py-20 lg:py-40 select-none"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] aspect-square bg-[radial-gradient(circle_at_center,rgba(163,230,21,0.15)_0%,transparent_70%)] pointer-events-none blur-[150px] opacity-40"></div>

            <motion.div
                className="relative w-full max-w-[900px] px-4"
                style={{ scale, opacity, rotateX, rotateY, perspective: 1500 }}
            >
                {/* The Plant (Central Axis) */}
                <div className="relative z-10 w-full flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full max-w-[500px]"
                    >
                        <img
                            src="/images/cucumber-plant-new.png"
                            alt="Premium Cucumber Plant"
                            className="w-full h-auto max-h-[90vh] object-contain relative z-10 drop-shadow-[0_80px_150px_rgba(0,0,0,0.95)]"
                        />
                    </motion.div>

                    {/* Highly Structured Axial Overlay */}
                    <div className="absolute inset-0 z-30 pointer-events-none">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                {/* Dot (Stipje) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: spot.baseDelay, type: "spring", stiffness: 200 }}
                                    className="relative z-50 pointer-events-none"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12">
                                        <div className="absolute inset-0 rounded-full bg-lime-400/50 animate-ping opacity-40"></div>
                                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white shadow-[0_0_20px_rgba(163,230,21,1)]"></div>
                                    </div>
                                </motion.div>

                                {/* Connector and Axial Panel */}
                                <div className={`
                                    absolute top-1/2 -translate-y-1/2 
                                    ${spot.align === 'left' ? 'right-[12px] md:right-[20px] flex-row-reverse' : 'left-[12px] md:left-[20px]'} 
                                    flex items-center
                                `}>
                                    
                                    {/* Line with Fade Out - Fixed visibility and positioning */}
                                    <div className="relative w-[120px] md:w-[200px] h-[30px] hidden md:flex items-center justify-center overflow-visible">
                                        <svg className="w-full h-full overflow-visible">
                                            <defs>
                                                <linearGradient id={`line-fade-${spot.id}`} x1={spot.align === 'left' ? "100%" : "0%"} y1="0%" x2={spot.align === 'left' ? "0%" : "100%"} y2="0%">
                                                    <stop offset="0%" stopColor="#A3E615" stopOpacity="0" />
                                                    <stop offset="30%" stopColor="#A3E615" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="#A3E615" stopOpacity="1" />
                                                </linearGradient>
                                            </defs>
                                            <motion.path
                                                d={spot.align === 'left' ? "M 200 15 L 0 15" : "M 0 15 L 200 15"} // Length matching container
                                                stroke={`url(#line-fade-${spot.id})`}
                                                strokeWidth="2.5"
                                                fill="transparent"
                                                strokeDasharray="200"
                                                strokeDashoffset="200"
                                                animate={isInView ? { strokeDashoffset: 0 } : {}}
                                                transition={{ delay: spot.baseDelay + 0.3, duration: 1, ease: "easeOut" }}
                                            />
                                        </svg>
                                    </div>

                                    {/* Info Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: spot.align === 'left' ? -30 : 30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: spot.baseDelay + 1.2, duration: 0.6 }}
                                        className={`
                                            relative glass-panel px-6 py-6 md:px-8 md:py-8 rounded-[2.5rem] bg-[#011410]/95 backdrop-blur-3xl border border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.85)]
                                            min-w-[280px] lg:min-w-[420px] pointer-events-auto
                                        `}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,21,1)]"></div>
                                            <div className="text-lime-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] font-outfit">Validated Node</div>
                                        </div>
                                        <div className="text-white text-xl md:text-2xl lg:text-3xl font-black leading-[1.1] uppercase tracking-tighter font-outfit">
                                            {spot.label}
                                        </div>
                                        
                                        <div className={`
                                            absolute top-1/2 -translate-y-1/2 
                                            ${spot.align === 'right' ? '-left-3' : '-right-3'} 
                                            text-lime-400
                                        `}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={spot.align === 'right' ? '' : 'rotate-180'}>
                                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveCucumberHero;
