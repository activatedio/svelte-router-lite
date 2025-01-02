import { test, expect } from '@playwright/test';

test('index route', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('h1')).toContainText('Home Page');
});

test('page route', async ({ page }) => {
  await page.goto('/page1');

  // Expect a title "to contain" a substring.
  await expect(page.locator('h1')).toContainText('Page 1');
});

test('fallback', async ({ page }) => {
  await page.goto('/page2');

  // Expect a title "to contain" a substring.
  await expect(page.locator('h1')).toContainText('Fallback Page');
});

