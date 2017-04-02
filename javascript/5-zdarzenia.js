function nowaFunkcja() {
	console.log('kliknales w paragraf');
	
}

var parSecond = document.getElementById('parSecond');


function changeBackgroundDB() {
	parSecond.style.backgroundColor = "aqua";
}
//parSecond.onclick = changeBackground;

parSecond.ondblclick = changeBackgroundDB;

parSecond.addEventListener('dblclick', changeBackgroundDB);

document.getElementById('parFirst').children[3].addEventListener('click', function(e) {
	
	e.eventDefault();
	console.log(e.type);
	
	
	
	
});



