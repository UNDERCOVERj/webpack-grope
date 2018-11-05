const fs = require('fs');
fs.readFile('./word.txt', (err, data) => {
    console.log(data.toString());
})