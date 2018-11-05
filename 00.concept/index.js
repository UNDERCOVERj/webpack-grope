const request = require('request');
var text = require('./word.txt');
console.log(text);

request('https://www.baidu.com', (err, res, body) => {
    console.log(res.statusCode);
})