'use strict';

var naglowek = document.getElementById('main-header');

console.log(naglowek.innerText);
naglowek.innerText = 'Text naglowka po zmianie';

naglowek.innerHTML = 'Text ze znacznikiem <span>span</span>';

naglowek.outerHTML = "<h2>Text</h2>";

document.getElementsByTagName('h2')[0].id = "main-header-after-change";


document.getElementsByTagName('h2')[0].className = "header header-default";

console.log(document.getElementsByTagName('h2')[0].classList);

document.getElementsByTagName('h2')[0].style.border = "2px red solid";