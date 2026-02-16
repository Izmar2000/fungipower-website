import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailStyles = {
  container: 'background-color: #011410; color: #ffffff; font-family: "Outfit", Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border-radius: 0; border: none; overflow: hidden;',
  tag: 'display: inline-block; background-color: #84cc16; color: #011410; font-size: 10px; font-weight: 900; padding: 5px 12px; border-radius: 4px; text-transform: uppercase; margin-bottom: 15px; letter-spacing: 2px;',
  heroTitle: 'font-size: 42px; font-weight: 900; line-height: 0.95; margin-bottom: 0; text-transform: uppercase; letter-spacing: -2px;',
  heroAccent: 'color: #84cc16;',
  profileSection: 'padding: 30px 40px; display: flex; align-items: center; gap: 20px; background-color: #011410;',
  profilePic: 'width: 56px; height: 56px; border-radius: 28px; object-fit: cover; border: 1.5px solid #84cc16;',
  quoteBar: 'width: 2px; height: 30px; background-color: #84cc16; opacity: 0.5;',
  quoteText: 'font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.3px; lineHeight: 1.2; color: #ffffff; flex: 1;',
  bodyArea: 'padding: 40px 40px; background-color: #011410;',
  greeting: 'font-size: 16px; font-weight: 400; line-height: 1.8; margin-bottom: 10px; color: rgba(255,255,255,0.7);',
  bodyText: 'color: rgba(255,255,255,0.7); font-size: 16px; line-height: 1.8; margin-bottom: 20px;',
  sectionTitle: 'display: block; font-size: 20px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: -0.5px; margin-bottom: 25px; margin-top: 40px;',
  productCard: 'background: rgba(255,255,255,0.02); border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 12px; overflow: hidden;',
  reviewCard: 'border-left: 2px solid #84cc16; padding-left: 15px; margin-bottom: 15px;',
  signatureArea: 'margin-top: 40px;',
  signatureImg: 'height: 60px; margin-bottom: 5px;',
  signatureName: 'font-size: 16px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;',
};

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, address, city, crop, comments } = await request.json();
    const headerImage = 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=1200';

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'API_KEY missing' }, { status: 500 });
    const resend = new Resend(apiKey);

    // 1. HQ Notification
    await resend.emails.send({
      from: 'PlantiPower HQ <info@mail.plantipower.com>',
      to: 'info@plantipower.com',
      replyTo: email,
      subject: `PROEFPAKKET AANVRAAG: ${company}`,
      html: `
        <div style="background-color: #011410; color: #ffffff; font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.05);">
          <div style="text-align: center; margin-bottom: 40px;">
            <img src="https://irp.cdn-website.com/480e14da/dms3rep/multi/Planti-Power-Logo-.png" alt="PlantiPower" style="height: 40px;" />
          </div>
          <div style="background: rgba(13, 43, 36, 0.5); padding: 30px; border-radius: 24px;">
            <p><strong>Contact:</strong> ${name}</p>
            <p><strong>Bedrijf:</strong> ${company}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefoon:</strong> ${phone}</p>
            <p><strong>Adres:</strong> ${address}, ${city}</p>
            <p><strong>Gewas:</strong> ${crop}</p>
            <p><strong>Opmerkingen:</strong> ${comments || '-'}</p>
          </div>
        </div>
      `
    });

    // 2. Customer Confirmation
    await resend.emails.send({
      from: 'PlantiPower <info@mail.plantipower.com>',
      to: email,
      replyTo: 'info@plantipower.com',
      subject: 'Welkom bij PlantiPower - Je aanvraag is ontvangen',
      html: `
        <html>
          <body style="margin: 0; padding: 0; background-color: #000;">
            <div style="${emailStyles.container}">
              
              <div style="position: relative; width: 100%; height: 480px; background-color: #011410; overflow: hidden;">
                <img src="${headerImage}" style="width: 100%; height: 100%; object-fit: cover;" />
                <div style="position: absolute; bottom: 40px; left: 40px; right: 40px;">
                  <div style="${emailStyles.tag}">Welcome Partner</div>
                  <div style="${emailStyles.heroTitle}">WIJ GAAN JE <br /><span style="${emailStyles.heroAccent}">PROEFPAKKET</span> KLAARMAKEN.</div>
                </div>
              </div>

              <div style="${emailStyles.profileSection}">
                <img src="https://plantipower.com/images/email/John.jpeg" style="${emailStyles.profilePic}" />
                <div style="${emailStyles.quoteBar}"></div>
                <div style="${emailStyles.quoteText}">"De perfecte oogst begint bij een gezonde bodem."</div>
              </div>

              <div style="${emailStyles.bodyArea}">
                <div style="${emailStyles.greeting}">Beste teler,</div>
                <div style="${emailStyles.bodyText}">
                  Goed dat je ervoor kiest om PlantiPower zelf te ervaren.<br /><br />
                  Wij vinden dat een samenwerking begint bij resultaat. Eerst zien wat het doet in jouw teelt, onder jouw omstandigheden. Geen verkooppraat, maar meetbaar verschil in wortelontwikkeling, opname en gewasreactie.<br /><br />
                  Ons product doet wat het belooft. Daarom laten we het liever spreken in de kas dan in een brochure. Een duurzame samenwerking draait om vertrouwen. Jij neemt nu de stap om te testen – wij zorgen dat we dat vertrouwen waarmaken, met een product waar we volledig achter staan en begeleiding waar nodig.<br /><br />
                  We zijn benieuwd naar de resultaten in jouw gewas.
                </div>

                <div style="${emailStyles.signatureArea}">
                  <div style="color: rgba(255,255,255,0.7); font-size: 16px; font-weight: 300;">Met vriendelijke groet,</div>
                  <img src="https://plantipower.com/images/email/handtekening_john_scribble_white.png" style="${emailStyles.signatureImg}" />
                  <div style="${emailStyles.signatureName}">John Geenen</div>
                </div>

                <span style="${emailStyles.sectionTitle}">Je proefpakket <span style="color:#84cc16;">bestaat uit:</span></span>

                <div style="${emailStyles.productCard}">
                  <div style="display: flex; align-items: center; padding: 20px;">
                    <div style="flex: 1.5;">
                      <div style="color:#84cc16; font-size:9px; font-weight:900; margin-bottom:4px; text-transform:uppercase;">Kern Systeem</div>
                      <div style="font-size:22px; font-weight:900; margin-bottom:4px;">ALL12</div>
                      <div style="color:rgba(255,255,255,0.5); font-size:13px; line-height:1.4;">Optimaliseert transport naar de wortel.</div>
                    </div>
                    <img src="https://plantipower.com/images/products/plantipower-all12-transparant.png" style="width: 60px; height: auto;" />
                  </div>
                </div>

                <div style="${emailStyles.productCard}">
                  <div style="display: flex; align-items: center; padding: 20px;">
                    <div style="flex: 1.5;">
                      <div style="color:#38bdf8; font-size:9px; font-weight:900; margin-bottom:4px; text-transform:uppercase;">Weerbaarheid</div>
                      <div style="font-size:22px; font-weight:900; margin-bottom:4px;">SHIELD</div>
                      <div style="color:rgba(255,255,255,0.5); font-size:13px; line-height:1.4;">Versterkt natuurlijke weerstand.</div>
                    </div>
                    <img src="https://plantipower.com/images/products/plantipower-shield-transparant.png" style="width: 60px; height: auto;" />
                  </div>
                </div>

                <span style="${emailStyles.sectionTitle}">Ervaring van <span style="color:#84cc16;">kwekers:</span></span>
                <div style="${emailStyles.reviewCard}">
                    <div style="color: rgba(255,255,255,0.6); font-size: 13px; font-style: italic;">"Egalere wortels en betere opname."</div>
                </div>
                <div style="${emailStyles.reviewCard}; border-left-color: #38bdf8;">
                    <div style="color: rgba(255,255,255,0.6); font-size: 13px; font-style: italic;">"Absoluut minder gewasstress."</div>
                </div>

                <div style="background:#84cc16; padding:25px; border-radius:24px; text-align:center; margin-top: 40px; margin-bottom: 30px;">
                  <div style="color:#011410; font-weight:900; text-transform:uppercase; font-size:12px;">In voorbereiding</div>
                  <div style="color:#011410; font-size:15px; font-weight:800; margin-top:4px;">Levering binnen 1-2 werkdagen.</div>
                </div>

                <div style="padding: 25px; border: 1px dashed rgba(255,255,255,0.1); border-radius: 24px; text-align: center;">
                  <div style="color: rgba(255,255,255,0.5); font-size: 14px; line-height: 1.6;">
                    In de volgende update van ons vertellen we meer over ons bedrijf en wie de kweker was die ons inspireerde.
                  </div>
                </div>

              </div>

              <div style="background: #000; padding: 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="color: rgba(255,255,255,0.2); font-size: 9px; font-weight: 800; text-transform: uppercase;">Venlo, Nederland  |  PLANTIPOWER.COM</div>
              </div>

            </div>
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
