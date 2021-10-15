
var fs = require('fs');
var zlib = require('zlib');
var gunzip = zlib.createGunzip();
var rstream = fs.createReadStream('test.txt.gz');
rstream   // reads from test.txt.gz
    .pipe(gunzip)  // uncompresses
    .pipe(process.stdout);  // writes to stdout