const {test, expect} = require('@playwright/test');

test('Multiple Element', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');

    // const links = await page.$$('a');

    // for(const link of links){
    //     const linktext= await link.textContent();
    //     console.log(linktext);
    // }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); //will wait till the element display on the webpage

    //$$ symbol is to determine the multiple element locator
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})