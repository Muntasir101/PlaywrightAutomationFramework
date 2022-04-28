import {test,expect} from '@playwright/test'

test('simple basic test', async({page})=>{
    await page.goto('https://www.example.com')
    const pageTitle = page.locator("h1")
    await expect(pageTitle).toContainText("Example Domain")
})