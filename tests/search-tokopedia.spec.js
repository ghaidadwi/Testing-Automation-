import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tokopedia.com/');
  await page.getByPlaceholder('Cari di Tokopedia').click();
  await page.getByPlaceholder('Cari di Tokopedia').fill('Baju');
  await page.getByRole('link', { name: 'item-icon baju', exact: true }).click();
  await page.getByRole('link', { name: 'PLCLXVII - Polo Shirt Wanita - Logo Kecil 5103', exact: true }).click();
});