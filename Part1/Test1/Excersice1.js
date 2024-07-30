const puppeteer = require('puppeteer');

async function FindInGoogle(palabraClave) {
  const browser = await puppeteer.launch({ headless: false }); // Non-headless mode for observation
  const page = await browser.newPage();

  try {
    await page.goto('https://www.google.com');
    
    // Wait for and click the accept conditions button
    await page.waitForSelector('#L2AGLb > div');
    await page.click('#L2AGLb > div');

    // Wait for the search input to be visible and type the keyword
    await page.waitForSelector('#APjFqb');
    await page.type('#APjFqb', palabraClave);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    // Extract titles of the first 3 search results
    const titulos = await page.evaluate(() => {
      const resultados = Array.from(document.querySelectorAll('h3'));
      return resultados.slice(0, 3).map(result => result.innerText);
    });

    console.log('Results:', titulos);
  } catch (error) {
    console.error('Error during scraping:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
}

FindInGoogle('ping-pong');
