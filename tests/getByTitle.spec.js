const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://playwright.dev/python/docs/intro');
    await page.getByTitle('Switch between dark and light mode (currently dark mode)').click()
})








