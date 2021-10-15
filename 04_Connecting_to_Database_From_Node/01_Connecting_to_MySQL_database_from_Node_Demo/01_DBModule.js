var sql = require("../node_modules/mysql");
var client = sql.createConnection({
    host: 'example.org',
    user: 'bob',
    password: 'secret'
});
client.connect();
console.log("Connected");
client.query("use bookdb");
exports.authenticateUser = function (username, password, callback) {
    var strQuery = "select * from users where username='" + username + "' and password='" + password + "';";
    client.query(strQuery, function (err, rows) {
        console.log(rows);
        if (err || !rows) {
            console.log("invalid");
            return callback(err);
        }
        else if (rows.length == 0) {
            console.log("invalid length");
            return callback(err);
        }
        else {
            return callback(null, "success");
        }
    });
}
exports.addUser = function (username, password, address, res, callback) {
    var strQuery = "insert into users values('" + username + "','" + password + "','" + address + "');";
    client.query(strQuery, function (err, saved) {
        if (err || !saved) {
            console.log("User not saved");
            return callback(err);
        } else {
            console.log("User saved");
            callback(null, saved);
        }
    });
}