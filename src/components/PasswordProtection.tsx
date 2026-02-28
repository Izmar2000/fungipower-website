"use client";

import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export const PasswordProtection = ({ children }: { children: React.ReactNode }) => {
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("site_auth");
        if (auth === "true") {
            setIsAuthorized(true);
        } else {
            setIsAuthorized(false);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "maxom39_84!@") {
            localStorage.setItem("site_auth", "true");
            setIsAuthorized(true);
            setError(false);
        } else {
            setError(true);
            setPassword("");
        }
    };

    if (isAuthorized === null) return null;

    if (isAuthorized) {
        return <>{children}</>;
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-[#0A0F0A] flex items-center justify-center p-6 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />

            <div className="w-full max-w-md relative animate-in fade-in zoom-in duration-500">
                {/* Logo or Branding */}
                <div className="flex justify-center mb-10">
                    <img
                        src="/Logo trans/FungiPower Logo.svg"
                        alt="FungiPower"
                        className="h-24 w-auto object-contain brightness-0 invert"
                    />
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                    <div className="relative">
                        <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-8 mx-auto ring-1 ring-primary/30">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>

                        <h1 className="text-2xl font-black text-white text-center mb-2 tracking-tight">
                            BEVEILIGDE TOEGANG
                        </h1>
                        <p className="text-white/40 text-center text-sm mb-8 font-medium">
                            Voer het wachtwoord in om de website te bekijken.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative group/input">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Wachtwoord"
                                    autoFocus
                                    className={cn(
                                        "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300",
                                        "focus:border-primary/50 focus:bg-white/10",
                                        error && "border-red-500/50 bg-red-500/5 focus:border-red-500/70"
                                    )}
                                />
                                {error && (
                                    <p className="absolute -bottom-6 left-0 text-red-500 text-xs font-bold animate-in slide-in-from-top-1">
                                        Onjuist wachtwoord. Probeer het opnieuw.
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all duration-300 active:scale-[0.98] tracking-widest uppercase text-xs"
                            >
                                TOEGANG VERKRIJGEN
                            </button>
                        </form>
                    </div>
                </div>

                <p className="text-center mt-10 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
                    © {new Date().getFullYear()} FungiPower Protection System
                </p>
            </div>
        </div>
    );
};
