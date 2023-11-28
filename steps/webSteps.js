const { Given, Then, When } = require('@cucumber/cucumber');
const StepImpl = require ('../stepimpls/webStepImpl');

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

Then('I click on {string} element', async function (element) {
    await steps.iClickOnElement(element);
});

Then('I enter {string} in {string} element', async function (text, element) {
    await steps.iEnterTextInElement(text, element);
});

Then('I press {string} on {string} element', async function (text, element) {
    await steps.iPressOnElement(text, element);
});

Then('I close the browser', async function () {
    await steps.iQuitBrowser();
});