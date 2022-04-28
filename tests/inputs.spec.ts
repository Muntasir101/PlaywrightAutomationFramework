import {test, expect} from '@playwright/test';

test('working with inputs',async({page})=>{
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    await page.type('#user_login', 'muntasir');
    await page.type('#user_password', '12345');
    await page.click('.btn-primary');
    const errorMessage = page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})