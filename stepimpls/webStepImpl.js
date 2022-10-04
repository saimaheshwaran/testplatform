const Driver = require ('../base/webapp');
const Objects = require('../base/objects');

var driver = new Driver();
//var obj = new Objects();

class StepImpl {

    constructor() {
        this.driver = new Driver();
        this.objects = new Objects();
    }

    async iOpenBrowser(browser) {
        await this.driver.initializeDriver(browser);
    }

    async iNavigateToPage(url) {
        await this.driver.get(url);
    }


    async iQuitBrowser() {
        await this.driver.quit();
    }

    async iWaitForSeconds (sec) {
        await new Promise(resolve => setTimeout(resolve, sec * 1000));
    }

}

module.exports = StepImpl;