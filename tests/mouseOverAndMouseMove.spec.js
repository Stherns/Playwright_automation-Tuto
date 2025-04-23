const {test, expect} = require ('@playwright/test')

test('Handling Real Time Slider Demo', async({page}) => {
    await page.goto('https://www.flipkart.com/');
    
    await page.getByRole("img", {name:"Login"}).hover();
    // await page.locator("//span[contains(text(), 'Login')]").hover();
    await page.mouse
    .move(0, 0);
    // await page.getByRole("img", {name:"Fashion"}).hover();
    await page.getByAltText('Fashion').hover();
    // await page.locator("//span[contains(text(), 'Fashion')]").hover();
    await page.mouse
    .move(0, 100);
    // await page.getByRole("img", {name:"Electronics"}).hover();
    await page.getByAltText('Electronics').hover();
    // await page.locator("//span[contains(text(), 'Electronics')]").hover();
    await page.mouse
    .move(100, 100);
    // await page.getByRole("img", {name:"Home & Furniture"}).hover();
    await page.getByAltText('Home & Furniture').hover({timeout: 500});
    // await page.locator("//span[contains(text(), 'Home & Furniture')]").hover();
    await page.mouse
    .move(100, 0);
    // await page.getByRole("img", {name:"Beauty, Toys & More"}).hover();
    await page.getByAltText('Beauty, Toys & More').hover();
    // await page.locator("//span[contains(text(), 'Beauty, Toys & More')]").hover();
    await page.mouse
    .move(0, 0);
    // await page.getByRole("img", {name:"Two Wheelers"}).hover();
    await page.getByAltText('Two Wheelers').hover();
    // await page.locator("//span[contains(text(), 'Two Wheelers')]").hover();
    await page.mouse
    .move(0, 0);
})