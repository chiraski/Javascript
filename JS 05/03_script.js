let A,B,C,D,A1,B2,C3,D4;

A=prompt("Digite o primeiro valor ");
B=prompt("Digite o primeiro valor ");
C=prompt("Digite o primeiro valor ");
D=prompt("Digite o primeiro valor ");

A1 = A**2
B2 = B**2
C3 = C**2
D4 = D**2

if (C3 >= 1000){
	alert("O terceiro valor é " + C3);
}else{
	alert(A+"²"+"="+ A1 + "\n" + B +"²"+"=" + B2 + "\n" + C +"²"+ "=" + C3 + "\n" + D +"²" + "=" + D4)
}