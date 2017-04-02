'use strict';

document.onkeydown = function (e) {
	switch (e.keyCode) {
case 37:
	document.getElementById('main-header').style.backgroundColor = "red";
	break;
case 38:
	document.getElementById('main-header').style.backgroundColor = "blue";
	break;
case 39:
	document.getElementById('main-header').style.backgroundColor = "pink";
	break;
case 40:
	document.getElementById('main-header').style.backgroundColor = "aqua";
}
};