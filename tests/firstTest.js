const Utilities = require('../base/utilities');
const mergeYaml = require('merge-yaml');

async function scenario1() {
    this.fields = new Map();
    this.fields = mergeYaml(await new Utilities().returnAllReadFiles('./data','.yaml'));
    console.log(this.fields);
    console.log(this.fields["datalogin"]["username"]["xpath"]);
    for(key in this.fields["datalogin"]["username"])
    console.log(key);
}

scenario1();