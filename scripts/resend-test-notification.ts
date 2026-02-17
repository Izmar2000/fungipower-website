import { Resend } from 'resend';

async function sendManualNotification() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY missing');
        return;
    }
    const resend = new Resend(apiKey);

    try {
        await resend.emails.send({
            from: 'PlantiPower Orders <info@mail.plantipower.com>',
            to: 'info@plantipower.com',
            subject: '🎉 Handmatige Order Notificatie (Testbetaling)',
            html: `
                <h2>Nieuwe bestelling ontvangen (Handmatig nagestuurd)!</h2>
                <p><strong>Naam:</strong> Ramzi (Test)</p>
                <p><strong>Email:</strong> r.hadad@plantipower.com</p>
                <hr />
                <p><strong>Status:</strong> Deze mail is handmatig nagestuurd voor de testbetaling van zojuist.</p>
            `
        });
        console.log('Manual notification sent to info@plantipower.com');
    } catch (err) {
        console.error('Error sending manual notification:', err);
    }
}

sendManualNotification();
