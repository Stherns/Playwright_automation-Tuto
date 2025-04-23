const {test, expect} = require ('@playwright/test')

test('Handling Real Time Slider Demo', async({page}) => {
    await page.goto('https://textbox.johnjago.com/');
    await page.locator("//textarea").pressSequentially("Bonjour, je suis Robert et je suis testeur Logiciel et automaticien.", {delay: 10});
    await page.locator("//textarea").press("ControlOrMeta+A")
    await page.locator("//textarea").press("Backspace")
    await page.close()
})

test('Handling Real Time Slider Demo2', async({page}) => {
    await page.goto('https://textbox.johnjago.com/');
    // await page.locator("//textarea").pressSequentially("Bonjour, je suis Robert et je suis testeur Logiciel.", {delay: 10});
    await page.keyboard.type("Bonjour, je suis Robert et je...", {delay: 10});
    await page.keyboard.press('ArrowLeft');

    await page.keyboard.down('Shift');
    for (let i = 0; i < 'et je...'.length; i++)
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace');
    await page.close() 

    // Result text will end up saying 'Hello!' 
})
