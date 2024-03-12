// test-service-worker.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');

  const swRegistration = await page.evaluate(() => {
    return navigator.serviceWorker.getRegistration();
  });

  console.assert(swRegistration, 'Service worker not registered');
  console.log('Service worker is registered:', swRegistration);

  await browser.close();
})();
