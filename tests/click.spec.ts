import { test, expect } from '@playwright/test'

test('Cliicking on element', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})