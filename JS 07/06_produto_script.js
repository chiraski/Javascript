do{
    opcao = MostrarMenu();
    if (opcao == 1){

    }
}while(opcao != 4)

function MostrarMenu(){
    entrada = "";
    alert("=====-Mostrar o Menu-====="+"\nQual Produto você Deseja?" 
	+"\n1- Mouse Logitch G502 por R$ 165,00"+
	"\n2- Teclado RedDragon RGB Mecânico por R$ 300,00"+
	"\n3- Memoria ram DDR4 4gb HyperX por R$200,00 \n4 Sair")
    return entrada = prompt();
}