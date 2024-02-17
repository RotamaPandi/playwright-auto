const {test, expect} = require ('@playwright/test');

test('Soft Assertion', async ({page})=>{
    //Hard assertion
    //if the first case got an error or not valid, it will make the next case not continuing
    await expect(page).toHaveTitle('STORE123');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page.locator('.navbar-brand')).toBeVisible();

    //soft assertion
    //if the first case got an error or not valid, it will continuing the next cases.
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})