"use client";

import { useState } from "react";
import { CheckCircle2, X, ShoppingCart, ShieldCheck, ArrowRight } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface TrialPopupProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const TrialPopup = ({ open, onOpenChange }: TrialPopupProps) => {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        cropType: "",
        specificCrop: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        toast({
            title: "Bestelling ontvangen",
            description: "We nemen direct contact met u op voor de verzending van uw proefpakket.",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (submitted) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="sm:max-w-[600px] bg-slate-950 text-white border-white/10 p-12 overflow-hidden z-[100]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="relative z-10 text-center py-8">
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-black mb-4 tracking-tight uppercase">Bestelling Ontvangen</h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Bedankt voor uw interesse in FungiPower. Onze specialisten nemen binnen 24 uur contact met u op om de verzending van uw proefpakket te bevestigen.
                        </p>
                        <Button
                            onClick={() => {
                                setSubmitted(false);
                                onOpenChange(false);
                            }}
                            className="bg-[#F58220] hover:bg-white hover:text-black text-white font-black px-8 py-6 rounded-xl transition-all uppercase tracking-widest"
                        >
                            Sluiten
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[700px] max-h-[95vh] overflow-y-auto bg-[#050A0F] text-white border-white/10 p-0 shadow-2xl z-[100]">
                {/* Header Section with Image */}
                <div className="relative bg-gradient-to-br from-[#1A0A00] to-[#050A0F] p-8 md:p-12 overflow-hidden border-b border-white/5">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#F58220]/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-8 items-center relative z-[10]">
                        <div className="flex-1 text-left">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-none uppercase">
                                BESTEL HIER UW <br /><span className="text-[#F58220]">PROEFPAKKET</span>
                            </h2>
                            <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm">
                                Ontvang 1x 1 liter FungiPower Start en 1x 1 liter FungiPower Boost voor slechts <span className="text-white font-bold">€29,95</span> (excl. BTW) inclusief verzendkosten.
                            </p>
                        </div>
                        <div className="w-full md:w-48 lg:w-56 shrink-0 aspect-square flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[#F58220]/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                            {!imgError ? (
                                <img
                                    src="/images/trial-bottles.png"
                                    alt="FungiPower Trial Package"
                                    className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="relative z-10 w-full h-full border border-white/10 border-dashed rounded-3xl flex flex-col items-center justify-center p-6 text-center bg-white/5 backdrop-blur-sm">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F58220]">Hier komt afb.</span>
                                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-2 px-2 leading-tight">
                                        Visualisatie in productie
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Price Tag Overlay */}
                <div className="bg-[#111827] border-y border-white/5 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">In voorraad • Directe verzending</span>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-black text-white">€29,95</span>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Incl. verzending | Excl. BTW</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Bedrijfsnaam</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    required
                                    placeholder="Je Kwekerij"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all font-medium placeholder:text-white/20"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Contactpersoon</label>
                                <input
                                    type="text"
                                    name="contactPerson"
                                    required
                                    placeholder="Naam"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all font-medium placeholder:text-white/20"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">E-mail adres</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="info@voorbeeld.nl"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all font-medium placeholder:text-white/20"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Telefoonnummer</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="+31 6 ..."
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all font-medium placeholder:text-white/20"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Teelt / Type kwekerij</label>
                                <select
                                    name="cropType"
                                    required
                                    value={formData.cropType}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all font-medium appearance-none"
                                >
                                    <option value="" disabled className="bg-slate-950">Maak een keuze...</option>
                                    <option value="champignons" className="bg-slate-950">Champignonkwekerij</option>
                                    <option value="oesterzwammen" className="bg-slate-950">Oesterzwammen</option>
                                    <option value="shiitake" className="bg-slate-950">Shiitake</option>
                                    <option value="overig" className="bg-slate-950">Overig / Exotisch</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Specifiek gewas</label>
                                <input
                                    type="text"
                                    name="specificCrop"
                                    placeholder="Bijv. witte champignon"
                                    value={formData.specificCrop}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all font-medium placeholder:text-white/20"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Opmerkingen of specifieke vragen</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Heb je specifieke uitdagingen?"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all font-medium placeholder:text-white/20 resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#F58220] to-[#D71920] hover:scale-[1.02] active:scale-[0.98] text-white font-black py-8 rounded-2xl transition-all shadow-xl shadow-orange-500/10 uppercase tracking-[0.25em] text-[13px] flex items-center gap-3"
                        >
                            BESTELLEN & BETALEN
                            <ShoppingCart className="w-5 h-5" />
                        </Button>

                        <div className="flex items-center justify-center gap-2 mt-6 opacity-40">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Veilige betaling via Stripe.</span>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};
