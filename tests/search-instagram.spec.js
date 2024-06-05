import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or').click();
  await page.getByLabel('Phone number, username, or').fill('yogayunand4');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('bakwanrebus01!');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.goto('https://www.instagram.com/accounts/onetap/?next=%2F');
  await page.goto('https://www.instagram.com/');
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Search Search' }).click();
  await page.getByPlaceholder('Search').fill('cake');
  await page.getByRole('link', { name: 'cakecaine\'s profile picture cakecaine Verified Nadin Amizah • 2.3M followers' }).click();
  await page.getByRole('link', { name: 'siri play the one that got' }).click();
  await page.locator('section').filter({ hasText: 'LikeCommentShare PostShare' }).getByRole('button').first().click();
});