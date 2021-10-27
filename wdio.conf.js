require('dotenv').config();
const URL = process.env.URL;

if (!URL) {
    console.log('Please use the following format when running the test script: URL=https://quiet-newt-23.loca.lt [script]');
    process.exit();
}

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    suites: {
        signin: [
            './test/specs/signin.test.js'
        ]
    },

    maxInstances: 1,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'wdio:devtoolsOptions': {
            headless: true
        },

        acceptInsecureCerts: true,
    }],

    logLevel: 'error',
    bail: 0,
    baseUrl: URL,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function (capabilities, specs) {
        const random = require('chance').Chance();
        global.random = random
    },
    async afterTest(test, context, { error }) {
        // take a screenshot anytime a test fails and throws an error
        if (error) {
            await browser.saveScreenshot(`./screenshots/${error}.png`);
        }
    }
}
