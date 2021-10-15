var fs = require('fs');
var readStream = fs.createReadStream('test.txt');
var writeStream = fs.createWriteStream('test2.txt');
readStream.setEncoding('utf8');
readStream.on('data', function (chunk) {
    writeStream.write(chunk);
});