import { test, expect } from '@playwright/test';

test.describe('Modal Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the built contact.html page
    await page.goto('http://localhost:8000/contact.html');
  });

  test('Escape key closes the disclaimer modal and restores focus', async ({ page }) => {
    const openBtn = page.locator('#disclaimer-open');
    const modal = page.locator('#disclaimer-modal');
    const closeBtn = modal.locator('.close-modal').first();

    // 1. Focus the open button and trigger it
    await openBtn.focus();
    await openBtn.click();

    // 2. Verify modal is visible and close button is focused
    await expect(modal).toBeVisible();
    await expect(closeBtn).toBeFocused();

    // 3. Press Escape
    await page.keyboard.press('Escape');

    // 4. Verify modal is hidden and focus is restored to the trigger button
    await expect(modal).toBeHidden();
    await expect(openBtn).toBeFocused();
  });

  test('Escape key closes the privacy modal and restores focus', async ({ page }) => {
    const openBtn = page.locator('#privacy-open');
    const modal = page.locator('#privacy-modal');
    const closeBtn = modal.locator('.close-modal').first();

    // 1. Focus the open button and trigger it
    await openBtn.focus();
    await openBtn.click();

    // 2. Verify modal is visible and close button is focused
    await expect(modal).toBeVisible();
    await expect(closeBtn).toBeFocused();

    // 3. Press Escape
    await page.keyboard.press('Escape');

    // 4. Verify modal is hidden and focus is restored to the trigger button
    await expect(modal).toBeHidden();
    await expect(openBtn).toBeFocused();
  });
});
