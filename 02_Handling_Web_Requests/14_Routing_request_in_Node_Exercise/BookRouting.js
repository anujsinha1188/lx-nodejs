var routeHandler = require('./RouteHandler');
exports.enableRoute = function (url, request, response) {
    //Get the pathname from the request.url
    var pathname = url.pathname;
    console.log("url_parts.pathname" + url.pathname);

    //According to the path name received, invoke the corresponding function
    switch (pathname) {
        case '/admin': routeHandler.display_admin(pathname, request, response);
            break;

        case '/user': routeHandler.display_user(pathname, request, response);
            break;

        case '/guest': routeHandler.display_guest(pathname, request, response);
            break;

        default: routeHandler.display_guest(pathname, request, response);
    }
}