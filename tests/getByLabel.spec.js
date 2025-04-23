const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://login.salesforce.com/?locale=fr');
    await page.getByLabel("Nom d'utilisateur").fill('Moussavou');
    await page.getByLabel("Mot de passe").fill('test');
    await page.getByLabel("Mémoriser mes informations").click();
})