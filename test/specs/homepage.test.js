//#region Required files
const HomePage = require('../pageobjects/homepage.page');
const homepageData = require('../data/homepage.data');
//#endregion

describe('Homepage', () => {
    it('Verfy that the header title is displayed correctly', async () => {
        await HomePage.open();

        console.log('Url: ' + await browser.getUrl());
        console.log('Header Title: ' + await HomePage.headerTitle.isDisplayed());
        console.log('Continue Button: ' + await HomePage.continueBtn.isDisplayed());
        console.log('Error: ' + await HomePage.error.isDisplayed());

        // await HomePage.h2.waitForDisplayed();
        // await HomePage.headerTitle.waitForDisplayed();
        //await expect(HomePage.headerTitle).toHaveText(homepageData.title);
    });
});


