const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://playwright.dev/python/docs/intro');
    // await page.getByTestId('updating-playwright').scrollIntoViewIfNeeded("Updating Playwright")
})