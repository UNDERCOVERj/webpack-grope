console.log('c')
import {a} from './a';
var el = document.createElement('div');
el.innerHTML = 'abc哒哒哒哒哒哒多ccccddddcccdddddbbbb';
document.body.appendChild(el);

if (module.hot) {
    module.hot.accept('./c.js', function() {
        console.log('cccccc');
    })
}