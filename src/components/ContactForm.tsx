'use client'

import React, { useState } from 'react';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface ContactFormProps {
  dict: any;
  lang: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ dict, lang }) => {
  const t = dict.Contact;

  const isNL = lang === 'nl';
  const isDE = lang === 'de';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    website_url: '' // Honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', email: '', message: '', website_url: '' });
      } else {
        setErrorMessage(result.error || "Er is iets misgegaan bij het verzenden.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Netwerkfout or serverfout.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-32 bg-[#080a08] snap-start" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-white/8">

          {/* Left — dark panel with contact info */}
          <div className="bg-[#0d1410] px-10 py-14 md:px-16 md:py-20 flex flex-col justify-between">
            <div>
              <div className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 border border-orange-500/30 px-4 py-2 rounded-full mb-10">
                Contact
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[1.05] font-outfit text-white mb-6">
                {t.title}<br />
                <span className="text-orange-400">{t.titleAccent}</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-sm mb-14">
                {t.desc}
              </p>
            </div>

            <div className="space-y-8">
              <a href="tel:+31773031660" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">+31 77 303 1660</span>
              </a>
              <a href="mailto:info@fungipower.bio" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">info@fungipower.bio</span>
              </a>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-white/50 leading-relaxed pt-2">
                  Van Heemskerckweg 26<br />
                  5928 LL Venlo<br />
                  {isDE ? 'Niederlande' : isNL ? 'Nederland' : 'The Netherlands'}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form panel with contrast */}
          <div className="bg-[#f5f0eb] px-10 py-14 md:px-16 md:py-20">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black font-outfit uppercase text-[#1a1a1a]">{t.successTitle}</h3>
                <p className="text-[#1a1a1a]/60">{t.successMsg}</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-orange-500 font-bold text-sm uppercase tracking-widest hover:text-orange-700 transition-colors"
                >
                  {t.newMsg}
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/50">{t.labelName}</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#1a1a1a] placeholder-[#1a1a1a]/30 transition-all font-medium text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/50">{t.labelCompany}</label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#1a1a1a] placeholder-[#1a1a1a]/30 transition-all font-medium text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/50">{t.labelEmail}</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#1a1a1a] placeholder-[#1a1a1a]/30 transition-all font-medium text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/50">{t.labelMessage}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#1a1a1a] placeholder-[#1a1a1a]/30 resize-none transition-all font-medium text-base"
                  ></textarea>
                </div>

                {/* Honeypot field - Invisible to humans */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={(e) => setFormData({ ...formData, website_url: e.target.value } as any)}
                  />
                </div>

                {errorMessage && (
                  <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl text-sm font-bold text-center">
                    ⚠️ {errorMessage}
                  </div>
                )}
                <button
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-xl transition-all uppercase tracking-widest text-sm disabled:opacity-50 active:scale-[0.98]"
                >
                  {isSubmitting ? t.sending : t.btnSend}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
