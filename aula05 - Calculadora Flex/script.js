/**
* Aula 05 - Calculadora Flex
*@autor Rodrigo Silveira
*/



function vantagem(){
	var etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
	var gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

	if (etanol< 0.70*gasolina){
		document.getElementById('status').src="etanol.png";
	}else{
		document.getElementById('status').src="gasolina.png";
	}
}

function resetar(){
	document.getElementById("status").src='neutro.png';
}