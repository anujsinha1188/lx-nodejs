process.on('message', function (m) {
    if (m.cmd === 'double') {
        console.log('Double: ' + m.number);
        var result = m.number + m.number;
        process.send({ answer: result });
    } else if (m.cmd === 'done') {
        process.exit();
    }
});