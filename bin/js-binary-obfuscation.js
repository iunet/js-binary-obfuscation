#!/usr/bin/env node

(function() {
    var JSBinaryObfuscation = require('../index.js');

    if(!proccess.argv[2] || fs.readFileSync(process.argv[2]))
        return;

    new JSBinaryObfuscation(process.argv[2]);
})();