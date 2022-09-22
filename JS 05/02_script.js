let C,N,E
    N=prompt("horas trabalhada: ")
    C = N * 10.00
    if (C > 0){
        if (N > 50){
            E = N - 50
            alert("Salário Total: "+ C +"\nSalário + Extra: "+ (E * 20.00 + parseInt(C)))
        }else{
            alert("Salário Total: "+ C +"\nNão houve hora Extra ")
        }
    }else{
        alert("Não há salário")
    }