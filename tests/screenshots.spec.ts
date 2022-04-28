import { test, expect } from '@playwright/test'

test('Full page screenshot', async ({ page }) => {
    const url='http://zero.webappsecurity.com/index.html'
    await page.goto(url);
    await page.screenshot({ path: 'customScreenshots/full-page.png' });
})

test('Element screenshot', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    const element=page.locator('div#online_banking_features > div:nth-of-type(1) > h4')
    await element.screenshot({ path: 'customScreenshots/element.png' });
})

// run using config
//npx playwright test .\tests\screenshots.spec.ts --config=playwright.config.ts --project=Chromium
