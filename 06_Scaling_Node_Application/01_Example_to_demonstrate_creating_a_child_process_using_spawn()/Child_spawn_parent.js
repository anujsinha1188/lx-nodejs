var spawn = require('child_process').spawn;
var child1 = spawn('node', ['Child_spawn_child.js']);
child1.stdin.write('Hello');
child1.stdout.on('data', function (data) {
    console.log("Recieved a reply: " + data);
});
child1.stderr.on('data', function (data) {
    console.log('Error: ' + data);
})
child1.on('exit', function (exitCode) {
    console.log('Child exited: ' + exitCode);
});