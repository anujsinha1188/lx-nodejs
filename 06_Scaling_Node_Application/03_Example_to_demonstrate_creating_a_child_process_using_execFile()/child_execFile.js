var execFile = require('child_process').execFile;
var child = execFile('node', ['child_exec.js'], null, function (err, stdout, stderr) {
    if (err) {
        console.log('Error' + stderr);
    }
    else {
        console.log('Outpur is ' + stdout);
    }
});
console.log('PID in File is ' + child.pid);