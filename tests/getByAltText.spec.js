const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://fr.wikipedia.org/wiki/Louis_XIII');
    await page.getByAltText('Wikipédia').click()
})