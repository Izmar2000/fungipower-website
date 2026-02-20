import { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "trial", // trial, docs, partner
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "aanvraag ontvangen",
      description: "We nemen binnen 24 uur contact met u op.",
    });
    setFormData({ name: "", email: "", company: "", interest: "trial", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
              CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 tracking-tight">
              Klaar voor de volgende stap?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
              Of u nu direct een proef wilt starten of eerst meer technische details zoekt, wij staan klaar om uw teelt te ondersteunen.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Hoofdkantoor</p>
                  <p className="text-muted-foreground">Van Heemskerckweg 26, 5928 LL Venlo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Telefoon</p>
                  <p className="text-muted-foreground">+31 20 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-bold text-foreground">E-mail</p>
                  <p className="text-muted-foreground">info@fungipower.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Direct aanvragen</h3>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Interest Selection */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-bold text-foreground uppercase tracking-wide">Ik ben geïnteresseerd in:</label>
                <div className="grid gap-3">
                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${formData.interest === 'trial' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <input type="radio" name="interest" value="trial" checked={formData.interest === 'trial'} onChange={handleChange} className="accent-primary w-4 h-4" />
                    <span className="font-medium text-foreground">Plan een proef op locatie</span>
                  </label>
                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${formData.interest === 'docs' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <input type="radio" name="interest" value="docs" checked={formData.interest === 'docs'} onChange={handleChange} className="accent-primary w-4 h-4" />
                    <span className="font-medium text-foreground">Ontvang technische documentatie</span>
                  </label>
                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${formData.interest === 'partner' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <input type="radio" name="interest" value="partner" checked={formData.interest === 'partner'} onChange={handleChange} className="accent-primary w-4 h-4" />
                    <span className="font-medium text-foreground">Word distributiepartner</span>
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Naam</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Bedrijf</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">E-mailadres</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Bericht (optioneel)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg"
              >
                <Send className="w-4 h-4" />
                Verstuur Aanvraag
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
