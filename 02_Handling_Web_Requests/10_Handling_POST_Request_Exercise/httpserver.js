var http = require("http");
var module = require('./DBModule');
url = require("url");

querystring = require("querystring");

var server = http.createServer(
    function (request, response) {
        var data1 = '';
        request.on('data', function (chunk) {
            data1 += chunk;
        });
        request.on('end', function () {
            qs = querystring.parse(data1);
            state = qs['state'];
            result = module.getCapital(state);
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end("<html><body><h1>" + result + "</h1></body></html>");
            console.log("Request received");
        });
    }
);
server.listen(7777);
console.log("Server running");