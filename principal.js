function iniciar () {
	console.log("Iniciamos la aplicacion");
}

function cargarPagina (pagina) {
	switch(pagina)
	{
		case 'inicio': 
			color = "#67b7e1";
			break;
		case 'quienes-somos':
			color = "#b767e1";
			break;
		case 'blog':
			color = "#e167b7";
			break;
		case 'contacto':
			color = "#000";
			break;
		default: 
			color = "#67b7e1";
	}
	document.getElementById("titulo").innerHTML = pagina;
	document.getElementsByTagName('nav')[0].style.background = color;
}