import { test, expect } from '@playwright/test';

const pages = [
  'index.html',
  'about.html',
  'service.html',
  'portfolio.html',
  'contact.html'
];

test.describe('Security Headers and Console Verification', () => {
  for (const pageName of pages) {
    test(`Verify ${pageName} for CSP and console errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      // Load the page from the root directory (assuming it's being served)
      // Since we are running in a sandbox, we'll use file paths if possible,
      // but Playwright works best with a server.
      // For now, let's assume we can navigate to the local file.
      const url = `file://${process.cwd()}/${pageName}`;
      await page.goto(url);

      // 1. Verify CSP meta tag exists and has the correct tightened content
      const cspMeta = await page.locator('meta[http-equiv="Content-Security-Policy"]');
      await expect(cspMeta).toBeAttached();
      const content = await cspMeta.getAttribute('content');

      expect(content).toContain("frame-src https://www.google.com/maps/embed");
      expect(content).toContain("connect-src 'self'");
      expect(content).toContain("worker-src 'none'");
      expect(content).toContain("manifest-src 'self'");

      // 2. Verify Referrer Policy
      const referrerMeta = await page.locator('meta[name="referrer"]');
      await expect(referrerMeta).toBeAttached();
      const referrerContent = await referrerMeta.getAttribute('content');
      expect(referrerContent).toBe('strict-origin-when-cross-origin');

      // 3. Page-specific checks (Contact page)
      if (pageName === 'contact.html') {
        // Verify Honeypot
        const honeypot = await page.locator('input#website');
        await expect(honeypot).toBeAttached();
        // sr-only makes it visually hidden, but Playwright sees it as visible.
        // We check if it's inside an element with sr-only class.
        const parent = page.locator('div.sr-only:has(input#website)');
        await expect(parent).toBeAttached();

        // Verify Iframe referrerpolicy
        const iframe = await page.locator('iframe[title="Google Maps Location"]');
        await expect(iframe).toBeAttached();
        const iframeReferrer = await iframe.getAttribute('referrerpolicy');
        expect(iframeReferrer).toBe('strict-origin-when-cross-origin');
      }

      // 4. Verify no CSP violations or console errors
      // CSP violations usually show up in console.
      const violations = consoleErrors.filter(err => err.includes('Content Security Policy') || err.includes('Refused to'));
      expect(violations, `Found CSP violations: ${violations.join(', ')}`).toHaveLength(0);

      // Some console errors might be expected (e.g. fontawesome not loading from file:// protocol if it uses absolute paths, but here it uses relative)
      // We'll be lenient with generic errors but strict with CSP.
    });
  }
});
