const {test, expect} = require ('@playwright/test')

test('List demo1', async({page}) => {
    await page.goto("https://training.rcvacademy.com/")
    await expect(page.getByRole('listitem')).toHaveCount(27)
})

test('List demo2', async({page}) => {
    await page.goto("https://training.rcvacademy.com/")
    const listsection = page.locator("(//ul[@class='list-basic pricing-features'])[1]")
    // Count items in a list
    await expect(listsection.getByRole('listitem'))
        .toHaveCount(4) 
    // Assert all text in a list
    await expect(listsection.getByRole('listitem'))
        .toHaveText(['Access all currently published courses','Access to any new published courses till you are paid member','Per month price','Cancel anytime'])
    // Filter by text
    await expect(listsection.getByRole('listitem')
        .filter({hasText: 'Cancel anytime'}))
        .toHaveText('Cancel anytime')
})