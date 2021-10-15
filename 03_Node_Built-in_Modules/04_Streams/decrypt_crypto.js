var crypto = require('crypto');
var fs = require('fs');
// get your password from safe store
var password = new Buffer('my secret');
var aes = crypto.createDecipher('aes-256-cbc', password);
var rstream = fs.createReadStream('test.encrypted');
rstream   // reads from test.encrypted
    .pipe(aes)  // decrypt with aes256
    .pipe(process.stdout);  // output stdout