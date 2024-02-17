const {test, expect} = require ('@playwright/test');

test ('Handle frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total of frames
    const allFrames = await page.frames();
    console.log("Number of frames: ", allFrames.length);

    //approach 1: using name or url
    //const var=await page.frame('name');//if the name is present then you can go with this one
    // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.fill("[name='mytext1']", 'Hello');

    //Approach 2: Using frame locator
    const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    inputbox.fill("Hello");
    await page.waitForTimeout(5000);
});