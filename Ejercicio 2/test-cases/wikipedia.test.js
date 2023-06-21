const puppeteer = require('puppeteer');
const SETUP = {
    headless: false,
    slowMo: 100
};
const GOOGLE_URL = "https://www.google.com/";
const GOOGLE_SEARCH_ELEMENT_ID = '#APjFqb';
const GOOGLE_SEARCH = 'automatización';
const YEAR_TEXT = 'a patente de un telar automático utilizando tarjetas perforadas fue dada a';
const YEAR = '1801';
let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(SETUP);
    page = await browser.newPage();
});

afterAll(async () => {
    await browser.close()
});

test('Check Wikipedia', async () => {
    await page.goto(GOOGLE_URL);
    await page.click('div[class="QS5gu sy4vM"]');
    await page.type(GOOGLE_SEARCH_ELEMENT_ID, GOOGLE_SEARCH);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    const wikipediaLink = await page.waitForSelector('a[href*="wikipedia.org"]');

    expect(wikipediaLink).toBeDefined();

    if (wikipediaLink) {
        await wikipediaLink.click();
        await page.waitForNavigation();
        await page.screenshot({ path: './Ejercicio 2/results/screenshots/wikipedia.png' })

        const pageContent = await page.content();
        const yearExists = pageContent.includes(YEAR);

        expect(yearExists).toBeTruthy();

        const textExists = await page.evaluate((YEAR_TEXT) => {
            
            const pageText = document.documentElement.textContent;
            return pageText.includes(YEAR_TEXT);
        }, YEAR_TEXT);       
       
        expect(textExists).toBeTruthy();
    }

}, 100000);