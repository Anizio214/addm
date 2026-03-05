const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://vendas.ricoy.com.br:5050/vendas');
  await page.waitForTimeout(8000);

  const inputs = await page.$$eval('input', els => els.map(el => ({
    type: el.type, name: el.name, id: el.id, placeholder: el.placeholder
  })));
  console.log('Campos:', JSON.stringify(inputs, null, 2));

  const buttons = await page.$$eval('button, input[type=submit]', els => els.map(el => ({
    tag: el.tagName, type: el.type, text: el.innerText || el.value, id: el.id, name: el.name
  })));
  console.log('Botoes:', JSON.stringify(buttons, null, 2));

  await browser.close();
})();
