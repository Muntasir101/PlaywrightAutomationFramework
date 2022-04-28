import { test, expect } from '@playwright/test'

import {loadHomepage, assertText} from '../tests/helpers.spec'

test('custom helpers', async ({ page }) => {
     await loadHomepage(page);
     await page.pause();
     await assertText(page);
})

test.only('playwright recorder', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    // Click text=Signin
  await page.locator('text=Signin').click();
  // assert.equal(page.url(), 'http://zero.webappsecurity.com/login.html');
  // Click input[name="user_login"]
  await page.locator('input[name="user_login"]').click();
  // Fill input[name="user_login"]
  await page.locator('input[name="user_login"]').fill('muntasir');
  // Click input[name="user_password"]
  await page.locator('input[name="user_password"]').click();
  // Fill input[name="user_password"]
  await page.locator('input[name="user_password"]').fill('123456');
  // Click text=Sign in
  await page.locator('text=Sign in').click();
  // assert.equal(page.url(), 'http://zero.webappsecurity.com/login.html?login_error=true');


  // Click text=Forgot your password ?
  await page.locator('text=Forgot your password ?').click({
    button: 'right'
  });
    
})

