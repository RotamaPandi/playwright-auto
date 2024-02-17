// const {test, expect} = require ('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')

    //click on login btn = -property
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //provie username -css
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', 'pavanol')
    //await page.type('loginusername', 'pavanol')

    //provide password -css
    await page.fill("input[id='loginpassword']", 'test@123')

    //click on login btn
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presence
    const logoutLink= await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutLink).toBeVisible();

    await page.close();

});