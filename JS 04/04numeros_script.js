let nota;
    nota = prompt("Qual sua nota? ");
        if (nota >= 80){
            alert("Parabéns, você foi aprovado")
        }else if (nota >= 26 && nota <80){
            alert("Faça a recuperação")
        }else if (nota <= 25){
            alert("Você foi reprovado")
        }