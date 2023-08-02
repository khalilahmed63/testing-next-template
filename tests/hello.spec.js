import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://template-nextjs-chi.vercel.app/');
  await page.locator('#themeToggler').click();
  await page.getByRole('banner').getByRole('link', { name: 'About' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Services' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Contact' }).click();
  await page.locator('a').first().click();
  await page.locator('#sideBarToggleHeader').click();
  await page.getByText('Other').click();
  await page.getByLabel('Sidebar').getByRole('link', { name: 'About' }).click();
  await page.getByLabel('Sidebar').getByRole('link', { name: 'Services' }).click();
  await page.getByLabel('Sidebar').getByRole('link', { name: 'Contact' }).click();
  await page.locator('#extraToggleSideBar').click();
  await page.getByRole('link', { name: 'Work in progress' }).click();
  await page.getByRole('link', { name: 'Pagination' }).click();
  await page.locator('button:nth-child(13)').click();
  await page.locator('button:nth-child(13)').click();
  await page.locator('button:nth-child(13)').click();
  await page.locator('button:nth-child(13)').click();
  await page.locator('button:nth-child(13)').click();
  await page.locator('button:nth-child(13)').click();
  await page.getByRole('link', { name: 'Infinite scroll' }).click();
  await page.getByRole('link', { name: 'Form' }).click();
  await page.locator('#logoSideBar').click();
  await page.locator('#sideBarToggleHeader').click();
  await page.locator('#themeToggler').click();
});