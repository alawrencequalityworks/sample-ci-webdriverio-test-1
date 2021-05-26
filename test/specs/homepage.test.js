//#region Required files
const HomePage = require('../pageobjects/homepage.page');
const homepageData = require('../data/homepage.data');
//#endregion

describe('Homepage', () => {
    it('Verfy that the header title is displayed correctly', () => {
        HomePage.open();
        HomePage.headerTitle.waitForDisplayed();
        expect(HomePage.headerTitle).toHaveText(homepageData.title);
    });
});


