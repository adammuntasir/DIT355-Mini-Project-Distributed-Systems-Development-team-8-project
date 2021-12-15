var fs = require('fs');

fs.readFile('jsonFile.json', function(err, content) {
    if (err) throw err;
    var parseJson = JSON.parse(content); // json parsed

    fs.writeFile('pushedJSON.json', JSON.stringify(parseJson), function(err) {
        if (err) throw err;
    })
})