import { test, expect } from '@playwright/test'

// able to run only that test:
// npx playwright test --grep smoke .\tests\tag.spec.ts 

//skip the tests with a certain tag
//npx playwright test --grep-invert smoke .\tests\tag.spec.ts 

test('Url assertion', async ({ page }) => {
    const url='http://zero.webappsecurity.com/index.html'
    await page.goto(url);
    await expect(page).toHaveURL(url);
})


test('Title assertion @smoke', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards');
})

test('Element assertion @smoke', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    const element=page.locator('div#online_banking_features > div:nth-of-type(1) > h4')
    await expect(element).toBeVisible();
    await expect(element).toHaveText('Online Banking');
    await expect(element).toHaveCount(1);
})

//smoke test for login page by adding tag
//npx playwright test --grep sanity
test('Invalid Login Test @sanity', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})
