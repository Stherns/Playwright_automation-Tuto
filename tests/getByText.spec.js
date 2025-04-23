const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://login.salesforce.com/?locale=fr');
    await page.getByText('Mot de passe oublié ?').click();
})