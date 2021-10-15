var http = require("http");
var module = require('./DBModule');
url = require("url");

querystring = require("querystring");

var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    var state = querystring.parse(query)["state"];

    //invoke dbmodule method to validate the username and password
    result = module.getCapital(state);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<html><body><h1>" + result + "</h1></body></html>");
    console.log("Request received");
}
);
server.listen(7777);
console.log("Server running");