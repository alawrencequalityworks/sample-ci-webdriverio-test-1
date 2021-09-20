//#region Required files
const HomePage = require('../pageobjects/homepage.page');
const homepageData = require('../data/homepage.data');
//#endregion

describe('Homepage', () => {
    it('Verfy that the header title is displayed correctly', async () => {
        await HomePage.open();
        await HomePage.headerTitle.waitForDisplayed();
        await expect(HomePage.headerTitle).toHaveText(homepageData.title);
    });
});


