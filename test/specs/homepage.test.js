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
            await HomePage.continueBtn.click();
        }
    });
    it('Verfy that the header title is displayed correctly', async () => {
        console.log('Continue Button??: ' + await HomePage.continueBtn.isDisplayed());
        await HomePage.headerTitle.waitForDisplayed();
        await expect(HomePage.headerTitle).toHaveText(homepageData.title);
    });
});


