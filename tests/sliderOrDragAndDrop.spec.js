const {test, expect} = require ('@playwright/test')

test('Slider Demo', async({page}) => {
    await page.goto('https://www.flipkart.com/');
    // await page.getByRole("img", {name:"Electronics"}).hover();
    // await page.locator("(//img[@alt='Image'])[14]").click();
    await page.locator("(//*[@id='container']//div[2])[12]").getByRole("img").first().click();
    const sl = await page.locator("//*[@id='container']/div/div[3]/div/div[1]/div/div[1]/div/section[2]/div[3]/div[1]/div[1]/div");
    const bb = await sl.boundingBox();
    await page.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2);
    await page.mouse.down();
    await page.mouse.move(bb.x + 40, bb.y + bb.height / 2);
    await page.mouse.down();
    await page.close()
})


test('Drag and Drop within iFrame Demo', async({page}) => {
    await page.goto('https://jqueryui.com/droppable/');
    // const pageIframe = await page.frameLocator("(//iframe[@class='demo-frame'])[1]");
    const pageIFrame = await page.frameLocator("//*[@id='content']/iframe");
    const toDrag = await pageIFrame.locator("//*[@id='draggable']");
    const toDrop = await pageIFrame.locator("//*[@id='droppable']");
    await toDrag.dragTo(toDrop)
    await page.close()
})
    
test('Drag and Drop Manually within iFrame Demo', async({page}) => {
    await page.goto('https://jqueryui.com/droppable/');
    const pageIFrame = await page.frameLocator("//*[@id='content']/iframe"); 
    await pageIFrame.locator("//*[@id='draggable']").hover();
    await page.mouse.down();
    await pageIFrame.locator("//*[@id='droppable']").hover();
    await page.mouse.up();
    await page.close()
})

    test('Drag and Drop Demo', async({page}) => {
        await page.goto('/');
    await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));
    await page.close()
})
    
    test('Drag and Drop Manually Demo', async({page}) => {
        await page.goto('/');
        await page.locator('#item-to-be-dragged').hover();
        await page.mouse.down();
        await page.locator('#item-to-drop-at').hover();
        await page.mouse.up();
        await page.close()
})

