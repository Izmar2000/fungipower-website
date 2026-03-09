"use client";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = "",
    id,
}) => (
    <section
        id={id}
        className={`relative min-h-[auto] md:min-h-screen flex flex-col justify-center py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden ${className}`}
    >
        {children}
    </section>
);

export const FadeIn: React.FC<{
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}> = ({ children, delay = 0, direction = "up", className }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] as const,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const GoldButton: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
}> = ({ children, onClick, className = "", href }) => {
    const cls = `group relative px-8 py-5 bg-wimbledon-gold text-wimbledon-green font-display font-bold uppercase tracking-[0.3em] text-xs overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-wimbledon-gold/20 ${className}`;

    const inner = (
        <>
            <span className="relative z-10 flex items-center justify-center gap-3">
                {children}
                <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
        </>
    );

    if (href) {
        return (
            <a href={href} className={cls}>
                {inner}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={cls}>
            {inner}
        </button>
    );
};

interface CardProps {
    title: string;
    description: string;
    iconKey?: string;
    index: number;
}

const cardIcons: Record<string, React.FC<{ className?: string }>> = {
    share: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
    ),
    camera: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
        </svg>
    ),
    trophy: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <polyline points="8 21 12 17 16 21" /><line x1="8" y1="21" x2="16" y2="21" />
            <path d="M2 3h20v7a6 6 0 01-12 0V3" />
            <path d="M4 3c0 0 0 4-2 6" /><path d="M20 3c0 0 0 4 2 6" />
        </svg>
    ),
};

export const Card: React.FC<CardProps> = ({
    title,
    description,
    iconKey,
    index,
}) => {
    const Icon = iconKey ? cardIcons[iconKey] : null;
    return (
        <FadeIn delay={index * 0.1}>
            <div className="glass-card p-6 sm:p-8 h-full flex flex-col group hover:border-wimbledon-gold/50 transition-all duration-500">
                {Icon && (
                    <Icon className="w-10 h-10 text-wimbledon-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                )}
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-wimbledon-gold transition-colors">
                    {title}
                </h3>
                <p className="text-off-white/70 leading-relaxed">{description}</p>
            </div>
        </FadeIn>
    );
};
