const {test, expect} = require ('@playwright/test')

test('Select Static Dropdown demo', async({page}) => {
    // test.slow()
    await page.goto('https://www.salesforce.com/eu/form/agentforce/demo/?d=701ed000000wZpjAAE&nc=701ed000000x224AAA&utm_content=701ed000000wZpjAAE&utm_source=google&utm_medium=paid_search&utm_campaign=22283962955&utm_adgroup=176007619136&utm_term=sales%20for%20crm&utm_matchtype=p&gad_source=1&gbraid=0AAAAAD4BebkKE5I6uFUqS9jDUYtr6q8Q7&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkVe_vaYdR2twNvD-LSVLoPaPJ3iuAO7tj0mdAlyMYtmNrDuke0MQLEaAjRGEALw_wcB&gclsrc=aw.ds');
    await page.waitForTimeout(1000)
    await page.getByRole('button', {name:'Do not accept'})
        .click()
        await page.waitForTimeout(1000)
    await page.getByRole('textbox', {name:'First name'})
        .fill('Djhery Sthern')
        await page.waitForTimeout(1000)
    await page.getByRole('textbox', {name:'Last name'})
        .fill('MOUSSAVOU MOUSSAVOU')
        await page.waitForTimeout(1000)
    await page.getByRole('textbox', {name:'Job title'})
        .fill('Software tester')
        await page.waitForTimeout(1000)
    await page.getByRole('textbox', {name:'Email'})
        .fill('stherns@yahoo.fr')
        await page.waitForTimeout(1000)
    await page.getByRole('textbox', {name:'Company'})
        .fill('FDJ')
        await page.waitForTimeout(1000)
    
    await page.locator("//*[@name='CompanyEmployees']")
        .selectOption({value:'15'}) // Option 1
        await page.waitForTimeout(1000)
    await page.getByRole('combobox', {name:'Employees'})
        .selectOption({label:'200 - 499 employees'}) // Option 2
        await page.waitForTimeout(1000)
    await page.getByRole('combobox', {name:'Employees'}) 
        .selectOption({index: 8}) // Option 3
        await page.waitForTimeout(1000)
    
    await page.getByRole('textbox', {name:'Phone'})
        .fill('075897882')
    await page.waitForTimeout(1000)
    
    await page.locator("//*[@name='CompanyCountry']")
        .selectOption({value:'TH'}) // Option 1
        await page.waitForTimeout(1000)
    await page.getByRole('combobox', {name:'Country/Region'})
        .selectOption({label:'Argentina'}) // Option 2
        await page.waitForTimeout(1000)
    await page.getByRole('combobox', {name:'Country/Region'})   
        .selectOption({index: 8 }) // Option 3
        await page.waitForTimeout(1000)
    await page.getByRole('combobox', {name:'Country/Region'})   
        // .selectOption({value:'US'})
        // .selectOption({index: 228})
        .selectOption({label:'United States'}) // Option 4
            await page.getByRole('combobox', {name:'State'})
            // .selectOption({label:'Indiana'})
            // .selectOption({value:'IN'})
            .selectOption({index: 10})
            await page.waitForTimeout(1000)

    // await page.locator("(//div[@class='checkbox-ui'])[2]")
    //     .click()
})