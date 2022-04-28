import { test, expect } from '@playwright/test'

test('Cliicking on element', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('failed Login and/or password are wrong.')
})

// npx playwright test --config=playwright.config.ts --project=Chromium --reporter=line
// npx playwright test --config=playwright.config.ts --project=Chromium --reporter=list
// npx playwright test --config=playwright.config.ts --project=Chromium --reporter=dot
// npx playwright test --config=playwright.config.ts --project=Chromium --reporter=junit
// npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html
//  |
//  |
//  open html report
//  npx playwright show-report