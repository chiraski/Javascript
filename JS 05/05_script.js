let y;
y = prompt("Qual o índice da empresa 1: ");
if (y < 0.3){
   alert("Indice aceitável");
}else if(y>=0.3 && y <0.4){
   alert("Industrias do 1º são obrigado a suspenderem suas atividades imediatamente!");
}else if (y>=0.4 && y < 0.5){
   alert("Industrias do 1º e 2º Grupo são obrigados a suspenderem suas atividades imediatamente!");
}else if (y >= 0.5){
   alert("As Industrias do 1º, 2º e 3º Grupo são obrigados a suspenderem suas atividades imediatamente");
}else{
   alert("Valor indisponivel");
}