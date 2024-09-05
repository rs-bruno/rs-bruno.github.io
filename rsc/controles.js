function menuBtn() {
	var x = document.getElementById("contElems").style.display;
	if(x == "block") {
		document.getElementById("contElems").style.display = "none";
			}
	else {
		document.getElementById("contElems").style.display = "block";
	}
}

function abrirImagen(nombreImagen){
	document.getElementById("galeria").setAttribute("abierta", nombreImagen);
	document.getElementById(nombreImagen).style.display = "block";
	document.getElementById("galeria").style.display = "block";
	document.getElementById("btnCerrar").style.display = "block";
}

function cerrarImagen(){
	var x = document.getElementById("galeria").getAttribute("abierta");
	document.getElementById(x).style.display = "none";
	document.getElementById("galeria").style.display = "none";
	document.getElementById("btnCerrar").style.display = "none";
}