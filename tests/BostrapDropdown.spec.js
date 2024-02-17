const {test, expect} = require ('@playwright/test');

test('bostrap multiple option', async ({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('button[type=button]').click();

    // await page.locator('ul>li label');
    const options = await page.$$('ul>li label')
    for (let option of options)
    {
        const value = await option.textContent();
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click();
        } 
    }
    await page.waitForTimeout(5000);
});