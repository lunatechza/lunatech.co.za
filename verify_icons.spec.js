const { test, expect } = require('@playwright/test');
test('verify icons on all pages', async ({ page }) => {
  const pages = ['index.html', 'about.html', 'service.html', 'portfolio.html', 'contact.html'];
  for (const p of pages) {
    await page.goto('http://localhost:8080/' + p);
    const faCount = await page.locator('.fa').count();
    console.log(`Page ${p} has ${faCount} icons`);
    expect(faCount).toBeGreaterThan(0);
  }
});
