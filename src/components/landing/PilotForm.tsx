import { useState } from "react";
import { Send, CheckCircle2, FlaskConical, ClipboardCheck, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PilotForm = () => {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        location: "",
        capacity: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        toast({
            title: "Pilot aanvraag verzonden",
            description: "Onze specialisten nemen binnen 24 uur contact met u op.",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (submitted) {
        return (
            <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Bedankt voor uw aanvraag</h2>
                    <p className="text-white/60 text-lg mb-8">
                        Uw interesse in FungiPower is geregistreerd. we nemen zo snel mogelijk contact op om de details van de pilot te bespreken.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-black text-xs uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                        Nog een aanvraag versturen
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Stylized Network - Inspired by the mycelium image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="pilot-network" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
                        <path d="M50 50 Q150 20 250 80 T350 40" fill="none" stroke="#F58220" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M20 300 Q180 250 220 350 T380 280" fill="none" stroke="#F58220" strokeWidth="1" strokeDasharray="3,7" />
                        <circle cx="150" cy="20" r="2" fill="#F58220" />
                        <circle cx="250" cy="80" r="3" fill="#F58220" />
                        <circle cx="180" cy="250" r="2" fill="#F58220" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pilot-network)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-primary text-[10px] font-black tracking-[0.5em] uppercase">
                                START PILOT PROJECT
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                            Zet de theorie <br />
                            <span className="text-primary">om in opbrengst.</span>
                        </h2>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <FlaskConical className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-black text-sm uppercase tracking-wider mb-1">Maatwerk Analyse</h4>
                                    <p className="text-white/50 text-sm">We analyseren uw specifieke substraat en teeltomstandigheden.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <ClipboardCheck className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-black text-sm uppercase tracking-wider mb-1">Begeleide Testfase</h4>
                                    <p className="text-white/50 text-sm">Onze experts monitoren de eerste vluchten samen met uw team.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                            <p className="text-white/80 font-bold italic text-sm">
                                "De pilot bij CNC liet een structurele stijging van 14% zien in de derde vlucht. We willen dit resultaat ook bij u realiseren."
                            </p>
                        </div>
                    </div>

                    {/* Dedicated Form */}
                    <div className="relative">
                        {/* Form Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent blur-2xl opacity-30" />

                        <div className="relative bg-[#111] border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Vraag Proefpakket Aan</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Naam</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Uw naam"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Bedrijfsnaam</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            placeholder="Bijv. CNC Grondstoffen"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">E-mail Zakelijk</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="email@bedrijf.nl"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Locatie</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Stad / Land"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Capaciteit (ton/week)</label>
                                        <input
                                            type="text"
                                            name="capacity"
                                            value={formData.capacity}
                                            onChange={handleChange}
                                            placeholder="Bijv. 500"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest pl-1">Extra Informatie</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={2}
                                        placeholder="Specifieke wensen of vragen..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/10 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-4 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 mt-4"
                                >
                                    START AANVRAAG
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
