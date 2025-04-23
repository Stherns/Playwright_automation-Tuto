const {test, expect} = require ('@playwright/test')

test('Fixtures and Context demo2', async({browser}) => {
    // const context = await browser.newContext({baseURL: "https://playwright.dev/docs/api/class-test", colorScheme: 'dark'})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('/');
})


test('Fixtures and Context Demo page fixture', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
})

test('Handle Multiple Windows or Tabs', async({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://training.rcvacademy.com/')
    
    const [newPage] = await Promise.all([
        context.waitForEvent("page"), //pending, fulfilled, rejected
        page.locator("//*[@id='page']/div[3]/div[2]/div[2]/div[1]/div/div/div/div/div/a/img").click()
    ])
    await newPage.locator("//*[@id='yDmH0d']/c-wiz[2]/div/div/div[1]/div/div[1]/div/div/div/div[1]/div/c-wiz/div/div/div/div/button/span").click()
    await newPage.getByRole('button', {name: "Cancel"}).click()
    await newPage.close()
    await page.getByRole("textbox", {name: 'Your name'}).pressSequentially('MOUSSAVOU', {delay: 500})
    await page.close()
})
