const path = require('path');
const fs = require('fs');

class Utilities {

    constructor() {
        this.filenames = [];
    }
    
    async returnAllReadFiles (startPath, filter) {
        //this.filenames = [];
        await this.readAllFiles(startPath, filter);
        return this.filenames;
    }

    async readAllFiles (startPath, filter) {
        //console.log('Starting from dir '+startPath+'/');
        if (!fs.existsSync(startPath)) {
            console.log("no dir ", startPath);
            return;
        }
        var files = await fs.readdirSync(startPath);
        for (var i = 0; i < files.length; i++) {
            var filename = path.join(startPath, files[i]);
            var stat = fs.lstatSync(filename);
            if (stat.isDirectory()) {
                await this.readAllFiles(filename, filter); //recurse
            } else if (filename.endsWith(filter)) {
                this.filenames.push(filename);
                //console.log(this.filenames);
            }
        }
    }
}

module.exports = Utilities;