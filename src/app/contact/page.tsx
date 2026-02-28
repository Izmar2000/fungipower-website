"use client";

import { Footer } from "@/components/landing/Footer";
import { Mail, MapPin, Linkedin, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "General Inquiry",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Bericht verzonden",
            description: "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.",
        });
        setFormData({ name: "", email: "", company: "", subject: "General Inquiry", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex flex-col text-slate-900 font-sans selection:bg-[#F58220] selection:text-white">

            {/* Subtle Mycelium Background Overlay */}
            <div
                className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1587588264560-eb0c968f4e19?q=80&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    filter: 'grayscale(100%)',
                }}
            />

            <main className="flex-1 relative z-10 w-full overflow-hidden">

                {/* Visual Header / Hero Section - Compact & Editorial */}
                <section className="relative z-10 pt-32 pb-16 md:pt-40 lg:pt-48 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/5">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-3xl">
                            <span className="block text-[#F58220] font-bold text-xs tracking-[0.2em] uppercase mb-6">
                                Contact
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-0">
                                Laten we de teelt <br className="hidden md:block" />verder verfijnen.
                            </h1>
                        </div>
                        <div className="hidden lg:block pb-2">
                            <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                                <Globe className="w-4 h-4" />
                                <span>Operationeel in de gehele EU</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 relative">
                    <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">

                        {/* LEFT: Contact Information Cards */}
                        <div className="lg:col-span-5 space-y-10 md:sticky md:top-32">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Direct contact</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Heeft u specifieke vragen over de biologische werking van FungiPower of wilt u de mogelijkheden voor uw kwekerij bespreken? Neem direct contact op met onze specialisten.
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {/* Email Card */}
                                <a href="mailto:info@fungipower.bio" className="group flex items-center gap-6 p-6 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl hover:border-[#F58220]/20 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-xl bg-[#F58220]/5 flex items-center justify-center text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-500">
                                        <Mail className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">E-mail</p>
                                        <p className="text-lg font-bold text-slate-900">info@fungipower.bio</p>
                                    </div>
                                </a>

                                {/* LinkedIn Card */}
                                <a href="https://linkedin.com" target="_blank" className="group flex items-center gap-6 p-6 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl hover:border-[#F58220]/20 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#0077B5] group-hover:text-white transition-colors duration-500">
                                        <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">LinkedIn</p>
                                        <p className="text-lg font-bold text-slate-900">FungiPower Updates</p>
                                    </div>
                                </a>

                                {/* Location Card */}
                                <div className="group flex items-center gap-6 p-6 rounded-2xl border border-black/5 bg-white shadow-sm">
                                    <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                                        <MapPin className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Locatie</p>
                                        <p className="text-lg font-bold text-slate-900 leading-snug">Venlo, Nederland</p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info / Office Hours */}
                            <div className="p-8 rounded-2xl bg-slate-100/50 border border-black/5 space-y-4">
                                <div className="flex items-center gap-3 text-[#F58220]">
                                    <Clock className="w-5 h-5" strokeWidth={1.5} />
                                    <span className="font-bold text-sm uppercase tracking-widest text-[#F58220]">Response TIme</span>
                                </div>
                                <p className="text-slate-600 font-medium">
                                    Wij streven ernaar om alle aanvragen binnen 24 uur te beantwoorden. Voor bestaande pilot-deelnemers geldt direct support.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Premium Form Column */}
                        <div className="lg:col-span-7" id="form">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-black/5 relative overflow-hidden group">
                                {/* Subtle internal branding */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                                <div className="mb-10">
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Stuur ons een bericht</h3>
                                    <p className="text-slate-500 font-medium">Vul onderstaand formulier in en we komen bij u terug met de juiste expertise.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-slate-900">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Uw Naam</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Jan Jansen"
                                                className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium placeholder:text-slate-300 shadow-inner"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Bedrijfsnaam</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Kwekerij X"
                                                className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium placeholder:text-slate-300 shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">E-mailadres</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="jansen@bedrijf.nl"
                                            className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium placeholder:text-slate-300 shadow-inner"
                                        />
                                    </div>

                                    <div className="space-y-2 text-slate-900">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Onderwerp</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] transition-all font-medium appearance-none cursor-pointer shadow-inner"
                                        >
                                            <option value="General Inquiry" className="text-slate-900">Algemene vraag</option>
                                            <option value="Pilot Program" className="text-slate-900">Pilot programma aanvraag</option>
                                            <option value="Technical Support" className="text-slate-900">Technische support</option>
                                            <option value="Partnerships" className="text-slate-900">Partnership / Distributie</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Uw Bericht</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Hoe kunnen we u helpen?"
                                            className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all resize-none font-medium placeholder:text-slate-300 shadow-inner"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#F58220] to-[#D71920] text-white py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all mt-6 shadow-xl shadow-primary/20"
                                    >
                                        BERICHT VERSTUREN
                                        <Send className="w-4 h-4" />
                                    </button>

                                    <p className="text-[10px] text-center text-slate-300 mt-8 font-bold uppercase tracking-widest">
                                        * Uw gegevens worden vertrouwelijk behandeld.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Banner - Newsletter (Compact version) */}
                <section className="pb-32 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="bg-slate-950 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220] opacity-[0.05] rounded-full blur-[100px]" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-center lg:text-left">
                                <span className="inline-block text-[#F58220] text-[10px] font-black tracking-[0.3em] uppercase mb-4">Inzichten</span>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">Blijf op de hoogte van de markt.</h3>
                                <p className="text-white/60 text-lg font-medium leading-relaxed">
                                    Meld je aan voor onze dagelijkse briefing met actuele prijzen en sectornieuws. Kort, krachtig en relevant.
                                </p>
                            </div>
                            <div className="w-full lg:w-auto min-w-[320px]">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        toast({
                                            title: "Gelukt!",
                                            description: "U bent aangemeld voor de dagelijkse updates.",
                                        });
                                    }}
                                    className="flex flex-col sm:flex-row gap-3"
                                >
                                    <input
                                        type="email"
                                        placeholder="Uw e-mailadres"
                                        required
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F58220] transition-all"
                                    />
                                    <button type="submit" className="bg-[#F58220] text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg active:scale-95">
                                        MELD AAN
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
