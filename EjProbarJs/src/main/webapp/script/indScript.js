function caja(){
	
	let num = prompt("Escriba un número por pantalla del signo que desee");
	
	if(num > 0){
			
		document.getElementById("ID").innerHTML = (num);
		
	}else{
		
		alert("El numero cambiado de signo es " + (num = num * (-1)))
		document.getElementById("ID").innerHTML = (num);
	
	}
}