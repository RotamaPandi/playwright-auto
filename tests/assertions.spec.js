const {test, expect} = require ('@playwright/test');

test('Assertion', async ({page}) => {
    await page.goto ('https://demo.nopcommerce.com/register');

    //expectation url
    await expect (page).toHaveURL ('https://demo.nopcommerce.com/register');

    //eexpectation of the title
    await expect (page).toHaveTitle ('nopCommerce demo store. Register');

    //element visible
    const logoElement=await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //element is enable
    const searchStoreBox=await page.locator('input#small-searchterms');
    await expect(searchStoreBox).toBeEnabled();

    //check box is check
    const maleRadioBtn=await page.locator('#gender-male');
    await maleRadioBtn.click();
    await expect(maleRadioBtn).toBeChecked();

    //Checkbox
    const newsLetterCheckbox=await page.locator('#Newsletter');
    await expect(newsLetterCheckbox).toBeChecked();

    //has attribute
    const regButton=await page.locator('#register-button');
    await expect (regButton).toHaveAttribute('type', 'submit');

    //to have text (element matches text)
    await expect (await page.locator('.page-title h1')).toHaveText('Register'); //full text

    //to contain text (element contains text)
    await expect (await page.locator('.page-title h1')).toContainText('Reg'); // partial text

    //input value and check the value input
    const eamilInput=await page.locator('#Email');
    await eamilInput.fill('Test@demo.com');
    await expect(eamilInput).toHaveValue('Test@demo.com');

    //count the atribut element
    const options=await page.locator('select[name="DateOfBirthDay"] option');
    await expect(options).toHaveCount(32);
    await expect(options).not.toHaveCount(23);
});