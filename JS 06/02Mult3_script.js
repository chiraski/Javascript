let x = 0,c=0;

for (n=1 ; n <= 500 ;n++){
    if (n%3==0 && n%2 !=0){
        x += n
        c = n+n
        alert("o valor "+ n + "+" + n +"=" + c)
    }
}
alert("A soma de todos os números é de " + x)