const {test, expect} = require ('@playwright/test')

test('Handling Real Time Slider Demo', async({page}) => {
    await page.goto('https://textbox.johnjago.com/');
    await page.locator("//textarea").pressSequentially("Bonjour, je suis Robert et je suis testeur Logiciel et automaticien", {delay: 10});
    // await page.locator("(//textarea[@placeholder='Welcome! You can use this textbox for anything. It does not save any data.'])[1]").pressSequentially("Bonjour, je suis Robert et je suis testeur Logiciel et automaticien", {delay: 10});
    // await page.getByPlaceholder("Welcome!").pressSequentially("Bonjour, je suis Robert et je suis testeur Logiciel et automaticien", {delay: 10});
    await page.locator("//textarea").dblclick()
    await page.locator("//textarea").click({button: "right"})
    await page.close();


    // Do the MOUSE Operationns from the Playwright Documentation
})