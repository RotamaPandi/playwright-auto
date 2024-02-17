const {test, expect} = require ('@playwright/test');

test ('Drop Down', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //multiple ways to select option from the dropdown
    // await page.locator('#country').selectOption({label:'India'});
    // await page.locator('#country').selectOption('India');
    // await page.locator('#country').selectOption({value:'uk'});
    // await page.locator('#country').selectOption({index:'1'});
    // await page.selectOption("#country", 'India');

    //assertions
    //check the number of option inn dropdown - approach 1
    // const option=await page.locator('#country option');
    // await expect(option).toHaveCount(10);

    //check the number of option inn dropdown - approach 2
    // const options=await page.$$('#country option');
    // console.log("Number of Options", options.lenght);
    // await expect(options.length).toBe(10);

    //check pressence of the value in the dropdown with looping.
    // const options=await page.$$('#country option');
    // let status=false;
    // for(const option of options)
    // {
    //     // console.log(await option.textContent());
    //     let value=await option.textContent();
    //     if(value.includes('France'))
    //     {
    //         status=true;
    //         break;
    //     }
    // }
    // expect(status).toBeTruthy();

    const options=await page.$$('#country option');
    for(const option of options)
    {
        let value=await option.textContent();
        if(value.includes('France'))
        {
            await page.selectOption("#country", value);
            break;
        }
    }

    await page.waitForTimeout(5000);
})