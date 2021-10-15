var http = require("http");
var fs = require('fs');
url = require("url");

http.createServer(function (request, response) {
    fs.writeFile('./message.txt', 'Text from Message.txt file.', function (err, data) {
        if (err) {
            throw err;
        }
        fs.readFile('./message.txt', function (err, data) {
            if (err) {
                throw err;
            }
            console.log('Data : ' + data);
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write('<html><h1>Read on file message.txt : ' + data + '</h1></html>');
            response.end();
        });
    });
}).listen(3000);
console.log("Server started");