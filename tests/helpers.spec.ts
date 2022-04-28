export async function loadHomepage(page){
    await page.goto('https://example.com');
}

export async function assertText(page){
    await page.waitForSelector('h1');
}