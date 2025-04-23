const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    // await page.getByRole("button").click()
    await page.getByRole("button", {name:'login'}).click()
    // await page.locator("#login-button").click()

    await page.locator("xpath=(//*[@class='inventory_item'])")
        .filter({hasText:'Sauce Labs Fleece Jacket'}) // has Text
        .getByRole('button', {name:'Add to cart'})
        .click()

    await page.locator('//*[@class="shopping_cart_link"]').click() 
}) 
