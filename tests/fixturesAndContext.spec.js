const {test, expect} = require ('@playwright/test')

test('Fixtures and Context Demo1', async({browser}) => {
    const context = await browser.newContext({baseURL: "https://www.amazon.fr/"}, )
    const page = await context.newPage()
    await page.waitForTimeout(500)
    await page.goto('/s?k= Micro Cravate');
    await page.waitForTimeout(500)
    await page.getByLabel('Refuser').click()
})

test('Fixtures and Context Demo2', async({browser}) => {
    const context = await browser.newContext({baseURL: "https://playwright.dev/docs/api/class-test", colorScheme: 'dark'})
    // const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('/');
})

test('Fixtures and Context Demo page fixture', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
})