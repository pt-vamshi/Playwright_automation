import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin.1851dev.com/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('pearlthoughts');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('2v9uzHmjGEwShpP');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('heading', { name: 'User List' }).click();
});