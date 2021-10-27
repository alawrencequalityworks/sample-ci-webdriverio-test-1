//#region Required files
const HomePage = require('../pageobjects/homepage.page');
const homepageData = require('../data/homepage.data');
//#endregion

describe('Homepage', () => {
    beforeEach('Skip intro page', async function () {
        await HomePage.open();

        console.log('Url: ' + await browser.getUrl());
        console.log('Header Title: ' + await HomePage.headerTitle.isDisplayed());
        console.log('Continue Button: ' + await HomePage.continueBtn.isDisplayed());
        console.log('Error: ' + await HomePage.error.isDisplayed());

        if (await HomePage.continueBtn.isDisplayed()) {
            await browser.saveScreenshot(`./screenshots/beforeClick.png`);
            await HomePage.continueBtn.waitForClickable();
            await HomePage.continueBtn.click();
            console.log('Was it here?');
        }
    });
    it('Verfy that the header title is displayed correctly', async () => {
        console.log('Continue Button??: ' + await HomePage.continueBtn.isDisplayed());
        await browser.pause(5000);
        await HomePage.headerTitle.waitForDisplayed();
        await browser.saveScreenshot(`./screenshots/beforeHeader.png`);
        await expect(HomePage.headerTitle).toHaveText(homepageData.title);
    });
});


