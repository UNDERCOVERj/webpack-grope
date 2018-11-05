import './style.css';
import Image from './leshuai.jpg';
import XML from './data.xml';
console.log(XML);
document.querySelector('#app').innerHTML = `<div class="a">app<img src=${Image} /></div>`;

