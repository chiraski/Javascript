let P,E,M;
    P =prompt("Informe quantos Kg de tomates está levando: ")
    if (P > 0){
        if (P > 50){
            E = P - 50
            M = E * 04
            alert("O Excesso foi de "+ parseFloat(E.toFixed(2))+ "KG, aplicando multa..."+
            "\nValor da multa foi de R$"+parseFloat(M.toFixed(2)))
        }else{
            alert("João não excedeu o KG")
        }	
    }else{
        alert("João está indo sem levar nada")
    }