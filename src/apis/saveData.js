var fs = require('browserify-fs') 


const saveData = (data) => {
    const jsonData = JSON.stringify(data, null, 2)
    fs.mkdir('/JSON', function() {
        fs.writeFile('../JSON/jsonData.json', jsonData, function() {
            fs.readFile('../JSON/jsonData.json', 'utf-8', function(err, data) {
                console.log(jsonData)
            });
        });
    });
}

export default saveData