'use strict';



var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki[0]);

var linkPoZnaczniku = document.getElementsByTagName('a');
console.log(linkPoZnaczniku);


var pierwszyLink = document.querySelector('[href*="http://"]');
console.log(pierwszyLink);

var wszystkieLinki = document.querySelectorAll('#parFirst [href]');
console.log(wszystkieLinki);

wszystkieLinki.forEach(function(element, index) {
	  console.log(element.innerHTML);
	
})

