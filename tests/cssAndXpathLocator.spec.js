const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto("https://login.salesforce.com/?locale=fr")
    
    // await page.locator("xpath=//*[@id='username']").fill("Djhery")
    // await page.locator("css=#username").fill("Djhery")
    await page.locator("//*[@id='username']").fill("Djhery")

    // await page.locator("xpath=//*[@id='password']").fill("test123@")
    // await page.locator("css=#password").fill("test123@")
    await page.locator("//*[@id='password']").fill("test123@")
    
    // await page.locator("xpath=//*[@id='rememberUn']").check()
    // await page.locator("css=#rememberUn").check()
    await page.locator("//*[@id='rememberUn']").check()
})