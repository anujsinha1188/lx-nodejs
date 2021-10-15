var crypto = require('crypto');
var fs = require('fs');
// get your password from safe store
var password = new Buffer('my secret');
var aes = crypto.createCipher('aes-256-cbc', password);
var rstream = fs.createReadStream('test.txt');
var wstream = fs.createWriteStream('test.encrypted');
rstream   // reads from test.txt
    .pipe(aes)  // encrypts with aes256
    .pipe(wstream)  // writes to test.encrypted
    .on('finish', function () {  // finished
        console.log('done encrypting');
    });