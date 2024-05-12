const {test, expect} = require ('@playwright/test')

test('Random testing', async({page})=>{
    await page.goto ('https://www.google.com');

})