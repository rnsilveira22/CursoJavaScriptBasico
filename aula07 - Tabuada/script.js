/**
* Aula 07 - Tabuada
*@autor Rodrigo Silveira
*/

function tabuada(){
	var mutiplicador = parseFloat(frmTabuada.txtMult.value);
		document.write("<p>"+"Tabuada do "+ mutiplicador + "<br> <br>");
		for(var multiplicando = 1; multiplicando <= 10; multiplicando++){
			var resultado = mutiplicador * multiplicando;
			document.write(mutiplicador + " X " + multiplicando + " = " + resultado + "<br>");
		}
		document.write("<a href='index.html'>Voltar</a>");
}