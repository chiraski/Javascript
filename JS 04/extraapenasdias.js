//Faça um sistema que leia a idade de uma pessoa expressa em anos,
// meses e dias e mostre-a expressa apenas em dias.

let idade, ano, mes, dia;
   /* ano = 365;
    mes = 30;
    dia = 1;*/

    idade = prompt("Qual a sua idade?");
    ano = idade;
    mes = idade * 12;
    dia = idade * 365;
    alert("Sua idade em dias é: ")
    alert("Sua idade em anos é:" + ano +
    "\nSua idade em meses é: " + mes +
    "\nSua idade em dias é: " + dia)



