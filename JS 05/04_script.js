let valor,n;
valor=prompt("Digite o valor: ")
n = valor%2

if (n == 0){
	alert("é par")
	if (valor >= 0){
		alert("\né positivo")
	}else{
		alert("\né negativo")
	}
}else{
	alert("é impar")
	if(valor >= 0){
		alert("\né positivo")
	}else{
		alert("\né negativo")
	}
}