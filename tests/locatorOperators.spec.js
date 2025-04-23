const {test, expect} = require ('@playwright/test')

test('Lauch Application', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    //Matching two locators simultaneously
    await page.getByRole('textbox')
        .and(page.getByPlaceholder("Username"))
        .fill("standard_user")
    await page.getByRole('textbox')
        .and(page.getByPlaceholder("Password"))
        .fill("secret_sauce")
    await page.getByRole("button", {name:'login'}).click()

    // 
    // const productItems = page.locator("xpath=(//*[@class='inventory_item'])")
    // await expect(productItems).toHaveCount(6)
    
    //Matching inside a locator
    const productItems = page.locator("xpath=(//*[@class='inventory_item'])").filter({hasText:'Sauce Labs Fleece Jacket'})
    await productItems.getByRole('button', {name:'Add to cart'}).click()
    await expect(productItems).toHaveCount(1)

    await page.locator('//*[@class="shopping_cart_link"]').click() 
})
