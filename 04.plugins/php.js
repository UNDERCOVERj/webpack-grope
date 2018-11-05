const request = require('request');
let start = Date.now()
console.log(start);
request({
    url: 'http://18.182.165.240:8990/video_merge',
    method: 'POST',
    body: JSON.stringify({
        "esim_id":"89886891040037014580",
        "video_name":"183327AB.MP4",
        "output_name":"183327AB.txt"
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}, (err, res, body) => {
    console.log(Date.now() - start);
    console.log(body);
})