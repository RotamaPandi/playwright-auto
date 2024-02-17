const {test, expect} = require ('@playwright/test');

test('Handle Input', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    //input element check
    await expect (await page.locator('#FirstName')).toBeVisible();
    await expect (await page.locator('#FirstName')).toBeEmpty();
    await expect (await page.locator('#FirstName')).toBeEditable();
    await expect (await page.locator('#FirstName')).toBeVisible();

    await page.locator('#FirstName').fill("Tama");

    await page.waitForTimeout(5000);

})