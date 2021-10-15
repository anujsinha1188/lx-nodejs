var databaseUrl = "localhost/bookdb";
var collections = ["users", "books"]
var db = require("./mongojs").connect(databaseUrl, collections);
exports.authenticateUser = function (username, password, response, callback) {
    db.users.find({ "username": username, "password": password }, function (err, users) {
        console.log(users);
        if (err || !users) {
            console.log("invalid");
            return callback(err);
        }
        else if (users.length == 0) {
            console.log("invalid length");
            return callback(err);
        }
        else {
            return callback(null, "success");
        }
    });
}
exports.addUser = function (username, password, address, res, callback) {
    db.users.save({
        "username": username,
        "password": password,
        "address": address
    }, function (err, saved) {
        if (err || !saved) {
            console.log("User not saved");
            return callback(err);
        } else {
            console.log("User saved");
            callback(null, saved);
        }
    });
}