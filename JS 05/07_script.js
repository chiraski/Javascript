let Base,Altura,x;
    Base=prompt("insira o valor da Base: ");
        if (Base>0){
            Altura=prompt("insira o valor da Altura: ");
            if (Altura > 0){
                x = (Base*Altura)/2;
                alert("A área do Triângulo é de " + x);
            }else{
                alert("Altura igual ou menor que 0");
            }
        }else{
            alert("Base igual ou menor que 0");
            }