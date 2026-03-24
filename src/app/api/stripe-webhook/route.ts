import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { generateEmailHtml } from '@/lib/email-templates';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    // Initialize inside handler to avoid build-time errors
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    const stripe = new Stripe(stripeSecret || '');

    const apiKey = process.env.RESEND_API_KEY;
    const resend = apiKey ? new Resend(apiKey) : null;

    const body = await request.text();
    const sig = request.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        if (webhookSecret && sig) {
            event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
        } else {
            event = JSON.parse(body);
        }
    } catch (err: any) {
        console.error('Webhook Error:', err.message);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const metadata = session.metadata;
        const customerDetails = session.customer_details;

        if (metadata) {
            try {
                const { email, name, crop, otherCrop, cropCategory, company, phone, comments, locale } = metadata;

                // Get address from Stripe if available
                const addr = customerDetails?.address;
                const stripeAddress = addr
                    ? `${addr.line1}${addr.line2 ? `, ${addr.line2}` : ''}, ${addr.postal_code} ${addr.city}, ${addr.country}`
                    : 'Niet beschikbaar';

                const emailHtml = generateEmailHtml({
                    name,
                    crop: crop || '',
                    otherCrop: otherCrop || '',
                    cropCategory: cropCategory || 'algemeen',
                });

                if (resend && email) {
                    // 1. Send Welcome Email to Customer
                    await resend.emails.send({
                        from: 'FungiPower <info@mail.fungipower.com>',
                        to: email,
                        replyTo: 'info@fungipower.com',
                        subject: 'Welkom bij FungiPower - Je aanvraag is ontvangen',
                        html: emailHtml
                    });
                    console.log(`Email sent successfully to customer: ${email}`);

                    // 2. Send Notification to Internal Team
                    await resend.emails.send({
                        from: 'FungiPower Orders <info@mail.fungipower.com>',
                        to: 'info@fungipower.com',
                        replyTo: email,
                        subject: `🎉 Nieuwe Proefpakket Bestelling: ${company || name}`,
                        html: `
                            <div style="font-family: sans-serif; padding: 20px; color: #333;">
                                <h2 style="color: #10b981;">Nieuwe bestelling ontvangen!</h2>
                                <p>Er is zojuist een succesvolle betaling gedaan voor een proefpakket.</p>
                                
                                <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Klantgegevens</h3>
                                <p><strong>Naam:</strong> ${name}</p>
                                <p><strong>Bedrijf:</strong> ${company || 'N/A'}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Telefoon:</strong> ${phone || 'N/A'}</p>
                                
                                <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Leveradres (via Stripe)</h3>
                                <p>${stripeAddress}</p>
                                
                                <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Product & Teelt</h3>
                                <p><strong>Order:</strong> FungiPower Proefpakket (€29,95)</p>
                                <p><strong>Categorie:</strong> ${cropCategory}</p>
                                <p><strong>Specifiek Gewas:</strong> ${crop} ${otherCrop ? `(${otherCrop})` : ''}</p>
                                <p><strong>Opmerkingen:</strong> ${comments || 'Geen'}</p>
                                
                                <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Systeem Details</h3>
                                <p><strong>Taal:</strong> ${locale}</p>
                                <p><strong>Stripe Session ID:</strong> ${session.id}</p>
                                
                                <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
                                <p style="font-size: 12px; color: #999;">Gezonden via FungiPower Automation</p>
                            </div>
                        `
                    });
                    console.log(`Notification sent successfully to info@fungipower.com`);
                } else {
                    console.log('Skipping email send: Resend not initialized or email missing.', { hasResend: !!resend, email });
                }
            } catch (error) {
                console.error('Error sending email after webhook:', error);
            }
        }
    }

    return NextResponse.json({ received: true });
}
