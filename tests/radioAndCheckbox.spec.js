const {test, expect} = require ('@playwright/test')

test('Checkbox demo', async({page}) => {
    await page.goto('https://auth-us.surveymonkey.com/login?state=hKFo2SBDNUxyYjU0dHdDUFQyd2FOMTdrSUdOZ1FVYXNuNno5c6FupWxvZ2luo3RpZNkgVXYxVldzWWVDWlZvZzc5VFFrc3NvY3hYWm1XNjBfaXGjY2lk2SBzQTM0RFVtUUE0RUlySkM3cTlRdVBDZjFUNzc4QmZMdg&client=sA34DUmQA4EIrJC7q9QuPCf1T778BfLv&protocol=oauth2&prompt=login&scope=openid%20profile%20email&redirect_uri=https%3A%2F%2Fwww.surveymonkey.com%2Flogin%2Fcallback&iss=https%3A%2F%2Fauth-us.surveymonkey.com%2F&ui_locales=en&sm.locale=en&sm.country=FR&sm.subdomain=www&sm.social_popup=false&response_type=code&response_mode=query&nonce=TnU3U1R%2BaHJzeDYtMjg0N0w1LjlLRXpHaE5uVzd0amZUb2VzaXppTURnSg%3D%3D&code_challenge=MYG4BOg5V027J_BAeOYnCNu3JcbrsTXCNqeKrK8PwSk&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjIuMC4xIn0%3D#/sign-up');

    await page.waitForTimeout(1000)
    await page.getByRole('button', {name:'Reject all'}).click()
    await page.waitForTimeout(1000)
    await page.getByRole('link', {name: 'Sign up'}).click()
    await page.waitForTimeout(1000)
    await page.getByRole('checkbox', {name: 'You agree to the Terms of Use'}).click()
    await page.waitForTimeout(1000)
    await page.getByRole('checkbox', {name: 'You agree to receive product news'}).click()
})

test('Checkbox demo2', async({page}) => {
    await page.goto('https://www.zoho.com/books/accounting-software-demo/#/settings/invite-to-network');

    await page.locator("//input[@class='ember-checkbox ember-view form-check-input position-static']").first().click()
    await page.waitForTimeout(500)
    await page.locator("//input[@class='ember-checkbox ember-view form-check-input position-static']").last().click()
    await page.waitForTimeout(500)
    await page.locator("//input[@class='ember-checkbox ember-view form-check-input position-static']").nth(3).click()
    await page.waitForTimeout(500)
    await page.locator("//input[@class='ember-checkbox ember-view form-check-input position-static']").nth(5).click()
    await page.waitForTimeout(500)
    await page.locator("//input[@class='ember-checkbox ember-view form-check-input position-static']").nth(7).click()

    await page.locator("//input[@class='ember-checkbox ember-view']")
    .click({delay:500})
    expect (page.locator("//input[@class='ember-checkbox ember-view']"))
    .toBeChecked()
})

test('Radio and checkbox demo', async({page}) => {
    await page.goto('https://www.zoho.com/books/accounting-software-demo/#/settings/preferences/recurringinvoices');

    await page.getByRole('radio', {name:'Create Invoices as Drafts'})
    .check()
    await page.waitForTimeout(500)
    await page.getByRole('radio', {name:'Create and Send Invoices'})
    .check()
    await page.waitForTimeout(500)
    await page.getByRole('radio', {name:'Create, Charge and Send Invoices'})
    .check()
    await page.waitForTimeout(500)
    await page.getByRole('checkbox', {name: 'After failure, suspend the recurring invoice'})
    .check()
    await page.waitForTimeout(500)
    await page.getByRole('checkbox', {name: 'Disable automatic saving of card details'})
    .check()
    await page.waitForTimeout(500)
    await page.getByRole('checkbox', {name: "Apply customer's excess payments to their recurring invoices"})
    .check()
    await page.waitForTimeout(500)
    await page.getByRole('checkbox', {name: "Apply customer's credit notes to their recurring invoices"})
    .check()
    await page.waitForTimeout(500)
    await page.getByRole('button', {name: "Save"})
    .click()
})