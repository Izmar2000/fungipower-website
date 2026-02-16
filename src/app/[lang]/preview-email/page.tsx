import React from 'react';

export default function PreviewEmailPage() {
    const headerImage = 'https://images.unsplash.com/photo-1449300079323-02e209d9d02d?auto=format&fit=crop&q=80&w=800';

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '0px' }}>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;800;900&display=swap" rel="stylesheet" />

            <div style={{
                backgroundColor: '#011410',
                color: '#ffffff',
                maxWidth: '600px',
                margin: '0 auto',
                borderRadius: '0',
                overflow: 'hidden',
                fontFamily: '"Outfit", sans-serif',
                boxShadow: '0 60px 120px rgba(0,0,0,0.9)'
            }}>

                {/* Hero Section - FIXED VISIBILITY */}
                <div style={{ position: 'relative', width: '100%', height: '480px', backgroundColor: '#011410' }}>
                    <img src={headerImage} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(1,20,16,0) 0%, rgba(1,20,16,1) 100%)', zIndex: 1 }}></div>

                    {/* Logo */}
                    <div style={{ position: 'absolute', top: '0', left: '40px', backgroundColor: '#012b24', padding: '15px 15px 25px 15px', width: '80px', zIndex: 10, borderRadius: '0 0 12px 12px' }}>
                        <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ width: '100%' }} />
                    </div>

                    <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 10 }}>
                        <div style={{ display: 'inline-block', color: '#84cc16', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '2px' }}>Welcome Partner</div>
                        <div style={{ fontSize: '42px', fontWeight: 900, lineHeight: '0.95', textTransform: 'uppercase', letterSpacing: '-2px' }}>
                            WIJ GAAN JE <br /><span style={{ color: '#84cc16' }}>PROEFPAKKET</span> KLAARMAKEN.
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div style={{ padding: '30px 40px', display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#011410' }}>
                    <img src="https://plantipower.com/images/email/John.jpeg" alt="John Geenen" style={{ width: '56px', height: '56px', borderRadius: '28px', objectFit: 'cover', border: '1.5px solid #84cc16' }} />
                    <div style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.3px', lineHeight: 1.2, color: '#ffffff' }}>
                        "De perfecte oogst begint bij een gezonde bodem."
                    </div>
                </div>

                {/* Main Message */}
                <div style={{ padding: '40px 40px 40px 40px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '10px', fontWeight: 300 }}>Beste teler,</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px', fontWeight: 300 }}>
                        Goed dat je ervoor kiest om PlantiPower zelf te ervaren. Wij vinden dat een samenwerking begint bij resultaat. Geen verkooppraat, maar meetbaar verschil in jouw kas. We zijn benieuwd naar de resultaten.
                    </div>

                    <div style={{ marginTop: '0px' }}>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8', fontWeight: 300 }}>Met vriendelijke groet,</div>
                        <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" alt="Signature" style={{ height: '60px', margin: '5px 0' }} />
                        <div style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>John Geenen</div>
                    </div>
                </div>

                {/* Product Section - Compact */}
                <div style={{ backgroundColor: '#011d17', padding: '40px 40px' }}>
                    <div style={{ marginBottom: '25px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.5px' }}>
                            Je proefpakket <span style={{ color: '#84cc16' }}>bestaat uit:</span>
                        </h2>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#84cc16', fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '4px' }}>Kern Systeem</div>
                            <div style={{ fontSize: '22px', fontWeight: 900, marginBottom: '4px' }}>ALL12</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.4' }}>Maximaliseert nutriënten transport.</div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" alt="ALL12" style={{ width: '60px', height: 'auto' }} />
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: '#38bdf8', fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '4px' }}>Weerbaarheid</div>
                            <div style={{ fontSize: '22px', fontWeight: 900, marginBottom: '4px' }}>SHIELD</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.4' }}>Versterkt natuurlijke weerbaarheid.</div>
                        </div>
                        <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" alt="SHIELD" style={{ width: '60px', height: 'auto' }} />
                    </div>
                </div>

                {/* Testimonials - VERY COMPACT */}
                <div style={{ padding: '30px 40px', backgroundColor: '#011410' }}>
                    <div style={{ fontSize: '11px', fontWeight: 900, color: '#84cc16', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' }}>Kwekers aan het woord</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ borderLeft: '2px solid #84cc16', paddingLeft: '15px' }}>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontStyle: 'italic', lineHeight: '1.5' }}>"Egalere wortels en betere opname."</div>
                            <div style={{ fontSize: '11px', fontWeight: 700, marginTop: '5px' }}>Sierteelt Kweker</div>
                        </div>
                        <div style={{ borderLeft: '2px solid #84cc16', paddingLeft: '15px' }}>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontStyle: 'italic', lineHeight: '1.5' }}>"Absoluut minder gewasstress."</div>
                            <div style={{ fontSize: '11px', fontWeight: 700, marginTop: '5px' }}>Glasgroente Specialist</div>
                        </div>
                    </div>
                </div>

                {/* Package Status & NEXT UPDATE */}
                <div style={{ padding: '0 40px 40px 40px', backgroundColor: '#011410' }}>
                    <div style={{ background: '#84cc16', padding: '25px', borderRadius: '24px', textAlign: 'center', marginBottom: '30px' }}>
                        <div style={{ color: '#011410', fontWeight: 900, textTransform: 'uppercase', fontSize: '12px' }}>In voorbereiding</div>
                        <div style={{ color: '#011410', fontSize: '15px', fontWeight: 800, marginTop: '4px' }}>Levering binnen 1-2 werkdagen.</div>
                    </div>

                    <div style={{ padding: '20px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '20px', textAlign: 'center' }}>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6' }}>
                            In de volgende update vertellen we meer over ons bedrijf en wie de kweker was die ons inspireerde.
                        </div>
                    </div>
                </div>

                <div style={{ background: '#000', padding: '40px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style={{ height: '24px', opacity: 0.3, marginBottom: '20px' }} />
                    <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Venlo, Nederland  |  PLANTIPOWER.COM
                    </div>
                </div>
            </div>
        </div>
    );
}
