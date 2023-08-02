import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.khalilahmed.dev/');
  await page.getByPlaceholder('Enter your name').click();
  await page.getByPlaceholder('Enter your name').fill('john');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('john@gmail.com');
  await page.getByPlaceholder('Your subject').click();
  await page.getByPlaceholder('Your subject').fill('test subject');
  await page.getByPlaceholder('Write your message here...').click();
  await page.getByPlaceholder('Write your message here...').fill('test message');
  await page.getByRole('button', { name: 'Send message' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'View Resume' }).click();
  const page1 = await page1Promise;
});