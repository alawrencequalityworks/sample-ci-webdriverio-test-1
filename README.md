# Webdriverio v6 Sample CI Test Automation

### Installing Dependencies
`npm i`

### Folder Structure
- *test/data:* This contains test data to be used by test files. E.g. [urls, user data and headings that will be validated in a test]
- *test/pageObjects:* This contains page object files which include element selectors and functions that are reused in test files.
- *test/specs:* This contains test files which include the different tests and test suites.

### Run all tests
`URL=https://ciexample121.loca.lt/ npm test`

### Run test by test file
`URL=https://ciexample121.loca.lt/ npm run test -- --spec ./test/specs/homepage.test.js`