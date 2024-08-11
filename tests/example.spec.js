// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Проверка заголовка на соответствие ожидаемому значению
  await expect(page).toHaveTitle(/Playwright/);
});
