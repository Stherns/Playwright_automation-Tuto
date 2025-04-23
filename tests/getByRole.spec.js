const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole("link", {name:"Forgot login info?"}).click()
})