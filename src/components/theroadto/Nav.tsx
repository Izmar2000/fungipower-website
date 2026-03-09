"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { GoldButton } from "./ui";

interface NavProps {
    onScrollTo: (id: string) => void;
}

export default function Nav({ onScrollTo }: NavProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${scrolled
                    ? "bg-wimbledon-green/90 backdrop-blur-md border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center w-24 md:w-32"
            />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="hidden md:flex gap-12"
            >
                {CONTENT.nav.items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onScrollTo(item.id)}
                        className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 hover:text-wimbledon-gold transition-colors"
                    >
                        {item.label}
                    </button>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <GoldButton
                    onClick={() => onScrollTo("contact")}
                    className="!py-2 !px-6 !text-[10px]"
                >
                    {CONTENT.nav.cta}
                </GoldButton>
            </motion.div>
        </nav>
    );
}
