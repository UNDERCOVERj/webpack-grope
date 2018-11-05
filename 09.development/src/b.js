console.log('b.js');
fetch('http://localhost:8080/app')
    .then(res => {return res.json()})
    .then(data => console.log(data))