import { test, expect } from '@playwright/test'

test('Auto wait', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test('Custom wait', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    //custom wait
    await page.waitForLoadState('networkidle');
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test('wait for element', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    await page.waitForLoadState('networkidle');
    // Wait for the element
    await page.locator('.alert-error').waitFor(); 
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test.only('Asynchronous wait', async({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
      // Wait for the element
      await Promise.all([
        // Waits for the next navigation.
        // It is important to call waitForNavigation before click to set up waiting.
        page.waitForNavigation(),
        // Triggers a navigation after a timeout.
        page.locator('text=Sign in').click(),
      ]);
    await page.locator('.alert-error').waitFor(); 
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})



