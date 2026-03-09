"use client";
import { useState, FormEvent, useEffect } from "react";
import { CONTENT } from "@/lib/content";

export default function PasswordProtect({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Basic session storage check so they don't have to enter it every refresh
        const auth = sessionStorage.getItem("rtw_auth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // The requested password
        if (password === "121212") {
            setIsAuthenticated(true);
            sessionStorage.setItem("rtw_auth", "true");
            setError(false);
        } else {
            setError(true);
            setPassword("");
        }
    };

    if (!isMounted) return null;

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-wimbledon-green flex flex-col items-center justify-center p-4 selection:bg-wimbledon-gold selection:text-wimbledon-green relative overflow-hidden">
            {/* Background elements to match the site */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full max-w-md glass-card p-8 md:p-12 text-center rounded-2xl border-t-4 border-wimbledon-gold shadow-2xl">
                <div className="text-wimbledon-gold text-lg font-bold tracking-[0.6em] uppercase mb-6">
                    Beveiligde Toegang
                </div>

                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 italic">
                    The Road to<br />
                    <span className="gold-text-gradient">Wimbledon</span>
                </h1>

                <p className="text-off-white/60 text-sm mb-12 font-serif italic">
                    Voer het wachtwoord in om de campagne details te bekijken.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(false);
                            }}
                            placeholder="Wachtwoord"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white text-center tracking-widest focus:outline-none focus:border-wimbledon-gold transition-colors font-mono"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <div className="text-red-400 text-xs uppercase tracking-widest font-bold animate-pulse">
                            Onjuist wachtwoord
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 bg-wimbledon-gold text-wimbledon-green font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors cursor-pointer rounded-sm"
                    >
                        Ontgrendel
                    </button>
                </form>
            </div>

            <div className="absolute bottom-8 text-wimbledon-gold/30 text-[10px] uppercase tracking-[0.5em] font-bold">
                {CONTENT.footer.copyright}
            </div>
        </div>
    );
}
