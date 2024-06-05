import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tokopedia.com/');
  await page.goto('https://www.tokopedia.com/search?q=baju+wanita&source=universe&st=product&navsource=home&srp_component_id=02.02.02.02');
  await page.getByRole('link', { name: 'Blouse Atasan Wanita / Atasan Linen', exact: true }).click();
});