import { test, expect } from '@playwright/test';

const pages = [
  'index.html',
  'about.html',
  'service.html',
  'portfolio.html',
  'contact.html'
];

test.describe('Bolt Performance Optimizations', () => {
  for (const page of pages) {
    test(`Verify ${page} has correct performance attributes`, async ({ page: p }) => {
      await p.goto(`http://localhost:8080/${page}`);

      // 1. Verify Font Awesome WOFF preload
      const fontPreload = p.locator('link[rel="preload"][href*="fontawesome-webfont862f.woff"]');
      await expect(fontPreload).toBeAttached();
      await expect(fontPreload).toHaveAttribute('as', 'font');
      await expect(fontPreload).toHaveAttribute('crossorigin', '');

      // 2. Verify Logo preload with fetchpriority="high"
      const logoPreload = p.locator('link[rel="preload"][href="images/logo.png"]');
      await expect(logoPreload).toBeAttached();
      await expect(logoPreload).toHaveAttribute('fetchpriority', 'high');

      // 3. Verify deferred navigation script in <head>
      const navScript = p.locator('head script[src="js/navigation.js"]');
      await expect(navScript).toBeAttached();
      await expect(navScript).toHaveAttribute('defer', '');

      // 4. Verify header logo attributes (from header.html template)
      const headerLogo = p.locator('header img[src="images/logo.png"]');
      await expect(headerLogo).toBeVisible();
      await expect(headerLogo).toHaveAttribute('width', '235');
      await expect(headerLogo).toHaveAttribute('height', '57');
      await expect(headerLogo).toHaveAttribute('fetchpriority', 'high');

      // 5. Verify footer logo attributes (from footer.html template)
      const footerLogo = p.locator('footer img[src="images/logo.png"]');
      await expect(footerLogo).toBeAttached();
      await expect(footerLogo).toHaveAttribute('width', '235');
      await expect(footerLogo).toHaveAttribute('height', '57');
      await expect(footerLogo).toHaveAttribute('loading', 'lazy');
    });
  }

  test('Verify mobile menu functionality still works after script move', async ({ page: p }) => {
    await p.setViewportSize({ width: 375, height: 667 });
    await p.goto('http://localhost:8080/index.html');

    const menuBtn = p.locator('#mobile-menu-button');
    const mobileMenu = p.locator('#mobile-menu');

    await expect(mobileMenu).toBeHidden();
    await menuBtn.click();
    await expect(mobileMenu).toBeVisible();
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
  });
});
