const {test, expect} = require ('@playwright/test');

test('Auto Suggest Drop Down', async ({page})=>{
    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI jTMXri')] [1]");

    const fromCityOption=await page.$$("//li[contains(@class, 'sc-iwsKbI jTMXri')]");

    for(let option of fromCityOption)
    {
        const value=await option.textContent();
        // console.log(value);
        if(value.includes('Badarpur Delhi'))
        {
            await option.click()
            break;
        }
    }
    await page.waitForTimeout(5000);
})