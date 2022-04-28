import { test, expect } from '@playwright/test'

//beforeEach 
test.describe.parallel('Hooks', () => {
test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
})

    test('Url assertion', async ({ page }) => {
        const url='http://zero.webappsecurity.com/index.html'
        await expect(page).toHaveURL(url);
    })
     
    test('Title assertion', async ({ page }) => {
        await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards');
    })
})

//npx playwright test .\tests\parallel.spec.ts --headed --config=playwright.config.ts --project=Chromium 