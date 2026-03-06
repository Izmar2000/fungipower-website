const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.goto('file:///Users/hadad/Documents/AntiGravity/plantipower-next/the road to/presentation.html', { waitUntil: 'networkidle0' });

    await page.pdf({
        path: '/Users/hadad/Documents/AntiGravity/plantipower-next/the road to/PlantiPower_Partnerdeck_Redesign.pdf',
        width: '210mm',
        height: '297mm', // A4 Portrait
        printBackground: true,
        margin: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0'
        }
    });

    await browser.close();
})();
