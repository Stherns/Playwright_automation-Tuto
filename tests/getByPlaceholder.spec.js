const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://www.amazon.com/');
    await page.getByPlaceholder('Search Amazon').fill('Ring light')
})