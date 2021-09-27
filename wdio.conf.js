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
        'goog:chromeOptions': {
            //For a list of all args(see https://developers.google.com/web/updates/2017/04/headless-chrome)
            args: ['--headless', '--disable-gpu'],
        },

        acceptInsecureCerts: true,
    }],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['selenium-standalone', { drivers: { firefox: '0.29.1', chrome: true, chromiumedge: 'latest' } }]
    ],
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
}
