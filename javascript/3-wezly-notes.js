'strict mode';

//var parFirst = document.getElementById('parFirst');
//
//var firstParId = parFirst.getAttributeNode('id');
//
//console.log(firstParId);
//console.log(parFirst.parentNode);
//
//console.log(parFirst.childNodes);
//console.log(parFirst.firstChild);
//console.log(parFirst.lastChild);
//
//console.log(parFirst.firstElementChild);
//console.log(parFirst.lastElementChild);
//
//var link = parFirst.children[1];
//console.log(link);
//
//console.log(link.nextSibling); //br
//console.log(link.previousSibling); //text
//
//console.log(link.nextElementSibling); //br
//console.log(link.previousElementSibling); //<p>
//
//var parFirstNodes = parFirst.childNodes;
//for (var i = 0; i < parFirstNodes.length; i++) {
//	//console.log(parFirstNodes[i].nodeType);
//
//	if (parFirstNodes[i].nodeType == 8) {
//		console.log('w tym dokumencie jest komentarz ' + parFirstNodes[i]);
//	}
//}
//
//
//
//var btn = document.createElement("button");
//var btnText = document.createTextNode("click me");
//var btnClass = document.createAttribute("class");
//
//btnClass.value = 'button-class';
//btn.appendChild(btnText);
//btn.setAttributeNode(btnClass);
//
//
//
//
//parFirst.insertBefore(btn, parFirst.children[2]);
//console.log(parfirst.children[2]);

var allLinks = document.getElementsByTagName('a');

for (var i = 0; i<allLinks.length; i++) {
	allLinks[i].removeAttribute('class');
}
