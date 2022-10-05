const Driver = require ('../base/webapp');
const Objects = require('../base/objects');

class StepImpl {

    constructor() {
        this.driver = new Driver();
        this.objects = new Objects();
    }

    async iOpenBrowser(browser) {
        await this.driver.initializeDriver(browser);
    }

    async iNavigateToPage(url) {
        await this.driver.navigate(url);
    }


    async iQuitBrowser() {
        await this.driver.quit();
    }

    async iWaitForSeconds (sec) {
        await new Promise(resolve => setTimeout(resolve, sec * 1000));
    }

    async iClickOnElement (element) {
        let objElement = await this.objects.get(element);
        await (await this.driver.findElement(objElement)).click();
    }

    async iEnterTextInElement (text, element) {
        let objElement = await this.objects.get(element);
        await (await this.driver.findElement(objElement)).sendKeys(text);
    }

    async iPressOnElement (text, element) {
        let objElement = await this.objects.get(element);
        await (await this.driver.findElement(objElement)).sendKeys(this.driver.key(text));
    }

}

module.exports = StepImpl;