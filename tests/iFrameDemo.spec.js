const {test, expect} = require ('@playwright/test')

test('iFrame demo1 test', async({page}) => {
    await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick');
    await page.waitForTimeout(500)
    await page.locator('//*[@id="accept-choices"]')
        .click()
    
    await page.waitForTimeout(500)
    const pageIframe = page.frameLocator("//*[@id='iframeResult']")
    await pageIframe.getByRole('button', {name: 'Click Me'})
        .click()
    
    await page.waitForTimeout(500)
    await page.getByRole('button', {name: 'Run'})
        .click()

    await page.close()
})

test('iFrame demo2 test', async({page}) => {
    await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick');
    await page.waitForTimeout(500)
    await page.locator('//*[@id="accept-choices"]')
        .click()
    await page.waitForTimeout(500)
    
    // const pageIframe = page.frameLocator("//*[@id='iframeResult']")
    const locator = page.locator("//*[@id='iframeResult']")
    const iframelocator = locator.contentFrame()
    await iframelocator.getByRole('button', {name: 'Click Me'})
    .click()
    
    await page.waitForTimeout(500)
    await page.getByRole('button', {name: 'Run'})
        .click()
    
    await page.waitForTimeout(500)
    await iframelocator.getByRole('button', {name: 'Click Me'})
    .click()
    await page.close()

})
