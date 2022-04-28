import { test, expect } from '@playwright/test'

//beforeEach 
test.describe.only('Hooks', () => {
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

//beforeAll
test.describe('Hooks', () => {
    test.beforeAll(async ({ page }) => {
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