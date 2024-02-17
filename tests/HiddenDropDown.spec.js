const {test, expect} = require ('@playwright/test');

test('Hidden options dropdown', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', {type: 'submit'}).click();

    // await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()
    await page.getByRole('link', { name: 'PIM' }).click();
    //click on drop down
    // await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]")
    await page.locator('form i').nth(2).click();
    
    await page.waitForTimeout(5000);

    const options=await page.$$("//div[@role='listbox']//span");

    for(let option of options)
    {
        const jobTitle=await option.textContent();
        // console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
});