const { Given, Then, When } = require('@cucumber/cucumber');
const StepImpl = require ('../stepimpls/webstepimpl');

var steps = new StepImpl();

Given('I open {string} browser', async function (browser) {
    await steps.iOpenBrowser(browser);
});

When('I navigate to {string} page', async function (url) {
    await steps.iNavigateToPage(url);
});

Then('I wait for {int} seconds', async function (sec) {
    await steps.iWaitForSeconds(sec);
});

Then('I close the browser', async function () {
    await steps.iQuitBrowser();
});