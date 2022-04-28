//generate screenshot and video on failure
//file auto save under playwright-reports folder

import { test, expect } from '@playwright/test'

test('Cliicking on element', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('failed Login and/or password are wrong.')
})

//npx playwright test .\tests\artifects.fail.spec.ts --headed --config=playwright.config.ts --project=Chromium 