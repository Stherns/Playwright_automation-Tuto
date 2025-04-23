const {test, expect} = require ('@playwright/test')

test('Select Dynamic Dropdown demo(with <li>)', async({page}) => {
    await page.goto('http://livraison3.testacademy.fr/')
    await page.locator("(//span[@class='filter-option pull-left'][normalize-space()='Destination'])[1]").click()
    
    const departfrom = page.getByRole('textbox', {name:'Search'})
    await departfrom.clear({delay: 1000})
    await departfrom.pressSequentially('New', {delay: 500})
    await departfrom.clear({delay: 1000})
    await page.locator("(//div[@role='combobox'])[1]")
        .getByRole('option')
        .filter({hasText: "New Orleans"})
        .click()
});

test('Select Dynamic Dropdown (with <span>)', async({page}) => {
    await page.goto('https://www.royalairmaroc.com/fr-fr?gclsrc=3p.ds&msclkid=ecc2ce23235f1654511ba9db4c80ee92&utm_source=bing&utm_medium=cpc&utm_campaign=WEB_BI_FR_FR_ALW_SEA_BRN_%7BFrance_BRAND%7D&utm_term=air%20maroc&utm_content=Royal%20Air%20Maroc_BRAND');
    await page.waitForTimeout(1000)
    await page.getByRole('button', {name:'Reject All'})
        .click()
        await page.waitForTimeout(1000)
    const departfrom = page.getByRole('textbox', {name:"Sélectionner l'origine"})
    await departfrom.click()
    await page.waitForTimeout(1000)
    await departfrom.pressSequentially('Ner', {delay: 500})
    await page.waitForTimeout(1000)
    await page.getByLabel('TENERIFE (TFS) Espagne').click()

    const arrivalto = page.getByRole('textbox', {name:"Sélectionner la destination"})
    await arrivalto.click()
    await page.waitForTimeout(1000)
    await arrivalto.pressSequentially('Ga', {delay: 1000})
    await page.waitForTimeout(1000)
    await page.getByLabel('LIBREVILLE (LBV)').click()
    
    await page.getByLabel(27).isVisible()
    // await page.getByLabel('4').
});