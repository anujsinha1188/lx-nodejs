var fs = require('fs');
var readStream = fs.createReadStream('test.txt');
readStream.on('data', function (chunk) {
    console.log('Received %d bytes of data', chunk.length);
    readStream.pause();
    console.log('There will no data flow for 1 second');
    setTimeout(function () {
        console.log('Now data will start flowing again');
        readStream.resume();
    }, 1000);
});