const Utilities = require('./utilities');
const mergeYaml = require('merge-yaml');

class Objects {

    constructor() {
        this.#initialize();
    }

    async #initialize() {
        this.fields = mergeYaml(await new Utilities().returnAllReadFiles('./data','.yaml'));
        //console.log(this.fields);
    }

    async get(objName) {
        let object = objName.split('.');
        for(let locator in this.fields[object[0]][object[1]]) {
            if(!(locator == 'value') || (locator == '') ) {
                switch(locator.toLowerCase()) {
                    case 'id':
                    case 'css':
                    case 'name':
                    case 'xpath':
                    case 'tagname':
                    case 'linktext':
                    case 'classname':
                    case 'partiallinktext':
                        let obj = {locator: "", value: ""};
                        obj.locator = locator.toLowerCase();
                        obj.value = this.fields[object[0]][object[1]][obj.locator];
                        return obj;
                }
            }
        }
    }
}

module.exports = Objects;