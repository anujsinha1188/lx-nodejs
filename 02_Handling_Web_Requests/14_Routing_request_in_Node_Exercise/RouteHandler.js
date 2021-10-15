var url = require('url');

exports.display_admin = function (url, request, response) {
    data1 = '';
    request.on('data', function (chunk) {
        data1 += chunk;
    });
    request.on('end', function () {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<html><body><h1>Welcom Admin!</h1></body></html>");
    });
}
exports.display_user = function (url, request, response) {
    data1 = '';
    request.on('data', function (chunk) {
        data1 += chunk;
    });
    request.on('end', function () {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<html><body><h1>Welcom User!</h1></body></html>");
    });
}
exports.display_guest = function (url, request, response) {
    data1 = '';
    request.on('data', function (chunk) {
        data1 += chunk;
    });
    request.on('end', function () {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<html><body><h1>Welcom Guest!</h1></body></html>");
    });
}

