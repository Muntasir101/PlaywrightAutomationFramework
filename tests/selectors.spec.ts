import {test, expect} from '@playwright/test';

test("Selectors",async({page})=>{
    //text
    await page.click('text=Sign in');

    //css selectors
    await page.click(".button")
    await page.click("#id")
    await page.click('.class')

    //only visible
    await page.click(".button:visible")

    //xpath
    await page.click("//a[text()='Sign in']")

    //combined
    await page.click("#username .first")
})