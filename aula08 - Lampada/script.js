/**
* Aula 08 - Controle da Lampada
* @autor Rodrigo Silveira
*/

function liga(){
	document.getElementById("lamp").src="on.jpg";
}
function desliga(){
	document.getElementById("lamp").src="off.jpg";
}
function pisca(){
	var contador = 0;
	var intervalo = 0;
	while(contador<10){
		intervalo += 300;
		setTimeout("document.getElementById('lamp').src='on.jpg';",intervalo);
		intervalo += 300;
		setTimeout('document.getElementById("lamp").src="off.jpg";',intervalo);
		contador++;
	}
}