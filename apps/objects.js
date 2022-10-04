const Utilities = require('./utilities');
const mergeYaml = require('merge-yaml');

class Objects {

    constructor() {
        this.#initialize();
    }

    async #initialize() {
        this.fields = mergeYaml(await new Utilities().returnAllReadFiles('./data','.yaml'));
        console.log(this.fields);
    }
}

module.exports = Objects;