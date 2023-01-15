const {Builder, Browser, By, Key, WebElement} = require ('selenium-webdriver');

class Driver {

    constructor() {
    }

    async initializeDriver(browser) {
        this.driver = await new Builder()
        .forBrowser(browser)
        //.usingServer('http://localhost:4444/wd/hub')
        .build();
    }

    async navigate(url) {
        await this.driver.get(url);
    }

    async findElement(element) {
        switch(element['locator']) {
            case "id":
                return await this.driver.findElement(By.id(element['value']));
            case "css":
                return await this.driver.findElement(By.css(element['value']));
            case "name":
                return await this.driver.findElement(By.name(element['value']));
            case "xpath":
                return await this.driver.findElement(By.xpath(element['value']));
            case "tagname":
                return await this.driver.findElement(By.tagName(element['value']));
            case "linktext":
                return await this.driver.findElement(By.linkText(element['value']));
            case "classname":
                return await this.driver.findElement(By.className(element['value']));
            case "partiallinktext":
                return await this.driver.findElement(By.partialLinkText(element['value']));
            default:
                return null;
        }
    }

    async get() {
    }

    async quit() {
        await this.driver.quit();
    }

    async sleep (sec) {
        await new Promise(resolve => setTimeout(resolve, sec * 1000));
    }

    async key(key) {
        switch(key.toLowerCase()) {
            case 'enter':
                return Key.ENTER;
            case 'tab':
                return Key.TAB;
            case 'space':
                return Key.SPACE;
            default:
                return null;
        }
    }

}

module.exports = Driver;