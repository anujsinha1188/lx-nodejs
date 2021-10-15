var fs = require('fs');
var readStream = fs.createReadStream('test.txt');
var writeStream = fs.createWriteStream('test1.txt');
var data1 = '';
readStream.on('data', function (chunk) {
    data1 += chunk;
});
readStream.on('end', function () {
    writeStream.write(data1);
})