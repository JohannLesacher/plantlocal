import { test, expect } from '@playwright/test';

test('has titles', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create T3 App/);

  // Expects page to have a heading for the posts section
  await expect(page.getByTestId('postsTitle')).toHaveText('Posts');
});

test('has a list of posts', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expects page to have a list of posts

});
