const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'Ricoy123'
    }
  });
  const page = await context.newPage();
  await page.goto('http://vendas.ricoy.com.br:5050/vendas');
  console.log('Pagina aberta:', page.url());
})();
