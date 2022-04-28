import { test, expect } from '@playwright/test'

//test suite
test.describe('Test Suite 1',() => {
    test('Title assertion', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards');
    })
    
    test('Element assertion', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        const element=page.locator('div#online_banking_features > div:nth-of-type(1) > h4')
        await expect(element).toBeVisible();
        await expect(element).toHaveText('Online Banking');
        await expect(element).toHaveCount(1);
    })
})



