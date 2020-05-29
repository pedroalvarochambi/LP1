function ganador(){
	if((document.activeElement.textContent!="0") && (document.activeElement.textContent!="X")){
		console.log('Limpio');
	
	let elementosHTML = document.querySelectorAll(".tictactoe");
	let turno = document.getElementById("turnoJugador").innerHTML;
	if(turno=="X"){
		document.activeElement.textContent = "X";
		document.getElementById("turnoJugador").innerHTML = "0";
	}else{
		document.activeElement.textContent = "0";
		document.getElementById("turnoJugador").innerHTML = "X";
	}
	let matriz = new Array(1);
	let colum = 0, fil = 0;
	for(let i=0; i < 3; i++){
		matriz[i] = new Array(1);
		for(let j = 0; j < 3; j++){
			matriz[i][j] = "NULL";
		}
	}
	let posFila=0, posColumna=0;
	let elementosHTMLColum = document.getElementsByClassName("item");
	for(let i=0; i < elementosHTMLColum.length; i++){
		if(elementosHTMLColum[i].textContent.length>0){
			matriz[posFila][posColumna] = elementosHTMLColum[i].textContent+"";
		}
		posColumna++;
		if(posColumna == 3){
			posColumna=0;
			posFila++;
		}
	}
	let estadoGanador=buscarGanador(matriz);
	if(estadoGanador!="NULL"){
		mostrarGanador(estadoGanador);
	}
	}
}
function iniciarJuego(tipoElecion){
	let jugador1 = document.getElementById("jugador1").value;
	let jugador2 = document.getElementById("jugador2").value;

	if(tipoElecion=="CONTINUAR"){
		console.log('Coninuando');
	}else if(tipoElecion=="REINICIAR"){
		console.log('REINICIAR');
		document.getElementById("puntajeX").innerHTML="0";
		document.getElementById("puntaje0").innerHTML="0";
	}
	else{
		let cajaTurnoJugadores = "<div class='jugadores'>"+
									"<div class='contenedor1'>"+
										"<input type='text' id='jugador1' disabled='disabled' value='X - "+jugador1+"'>"+
									"</div><br>"+
									"<div class='contenedor2 cajaPrint'>"+
										"<input type='text' id='jugador2' disabled='disabled' value='0 - "+jugador2+"'>"+
									"</div>"+
									"<div class='contenedor2 cajaPrint'>"+
										"<p id='puntajeX'>0</p>"+
										" - "+
										"<p id='puntaje0'>0</p>"+
										"<h2 id='turnoJugador'>X</h2>"+
									"</div>"+
								"</div>";
		document.getElementById("jugador").innerHTML = cajaTurnoJugadores;
	}
	let tablero ="<button class='item f1-1' onclick='ganador()'></button>"+
				"<button class='item f1-2' onclick='ganador()'></button>"+
				"<button class='item f1-3' onclick='ganador()'></button>"+
				"<button class='item f2-1' onclick='ganador()'></button>"+
				"<button class='item f2-2' onclick='ganador()'></button>"+
				"<button class='item f2-3' onclick='ganador()'></button>"+
				"<button class='item f3-1' onclick='ganador()'></button>"+
				"<button class='item f3-2' onclick='ganador()'></button>"+
				"<button class='item f3-3' onclick='ganador()'></button>";
	document.getElementById("tictactoe").innerHTML = tablero;
	
}

function salir(){
	location.href = "./index.html";
}
function mostrarGanador(dato){
	let puntajeX = document.getElementById("puntajeX").innerHTML;
	let puntaje0 = document.getElementById("puntaje0").innerHTML;
	puntaje0 = parseInt(puntaje0);
    puntajeX = parseInt(puntajeX);
    datoTemp = dato;
    if(datoTemp==="0"){
    	datoTemp = "Ganador: " + document.getElementById("jugador2").value;
    }else if(datoTemp==="X"){
		datoTemp = "Ganador: " + document.getElementById("jugador1").value;
    }else if(datoTemp==="X-0"){
    	datoTemp="EMPATES CAUSA ";
    }
    let ganador = "<div class='ganador'>"+
    				"<h2 class='titulo-ganador'>"+datoTemp+"</h2>"+
    				"<input type='button' id='continuar' value='Continuar' onclick=\"iniciarJuego('CONTINUAR')\"/>"+
    				"<input type='button' id='reniciar' value='Reiniciar' onclick=\"iniciarJuego('REINICIAR')\"/>"+
    				"<input type='button' id='salir' value='Salir' onclick='salir()'/>"+
    			"</div>";
	console.log(puntajeX + ' - ' + puntaje0);
    if(dato==="X-0"){
    	puntaje0++;
    	puntajeX++;
    	document.getElementById("puntajeX").innerHTML = puntajeX;
    	document.getElementById("puntaje0").innerHTML = puntaje0;
    }else if(dato==="X"){
    	puntajeX++;
    	document.getElementById("puntajeX").innerHTML = puntajeX;
    }else if(dato === "0"){
		puntaje0++;
		document.getElementById("puntaje0").innerHTML = puntaje0;
    }
    console.log(puntajeX + ' - ' + puntaje0);
    document.getElementById("tictactoe").innerHTML = ganador;
}

function buscarGanador(matriz){
	let contFilX=0, contFil0=0;
	let retorno = "NULL";
	if((matriz[0][0]!="NULL")&&((matriz[0][0] === matriz[0][1]) && (matriz[0][0] === matriz[0][2]))){
		retorno = matriz[0][0];
	}else if((matriz[1][0]!="NULL")&&(matriz[1][0] === matriz[1][1]) && (matriz[1][0] === matriz[1][2])) {
		retorno = matriz[1][0];
	}else if((matriz[2][0]!="NULL")&&(matriz[2][0] === matriz[2][1]) && (matriz[2][0] === matriz[2][2])) {
		retorno = matriz[2][0];
	}
	else if((matriz[0][0]!="NULL") && ((matriz[0][0] === matriz[1][0]) && (matriz[0][0] === matriz[2][0]))){
		retorno = matriz[0][0];
	}else if((matriz[0][1]!="NULL") && ((matriz[0][1] === matriz[1][1]) && (matriz[0][1] === matriz[2][1]))){
		retorno = matriz[0][1];
	}else if((matriz[0][2]!="NULL") && ((matriz[0][2] === matriz[1][2]) && (matriz[0][2] === matriz[2][2]))){
		retorno = matriz[0][2];
	}
	else if((matriz[0][0]!="NULL") && ((matriz[0][0] === matriz[1][1]) && (matriz[0][0] === matriz[2][2]))){
		retorno = matriz[0][0];
	}
	else if((matriz[0][2]!="NULL") && ((matriz[0][2] === matriz[1][1]) && (matriz[0][2] === matriz[2][0]))){
		retorno = matriz[0][2];
	}
	let contador=0;
	for(let i=0; i < matriz.length; i++){
		for(let j=0; j< matriz[0].length; j++){
			if(matriz[i][j]!="NULL"){
				contador++;
			}
		}
	}
	if(contador==9){
		retorno="X-0";
	}
	return retorno;
}

function mostrarTablero(tablero){
	let temp=0;
	for(let i=0; i < tablero.length; i++){
		let fila = "";
		for(let j=0; j< tablero[0].length; j++){
			fila += tablero[i][j]+"  ";
		}
		console.log(fila);
	}
}