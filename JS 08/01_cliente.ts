export class Cliente {
    nome: string;
    idade: number;
    peso: number;
    altura: number;



    constructor(
    nome: string,
    idade: number,
    peso: number,
    altura: number
     ){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    
     }
// método
verCliente(){
    console.log(`o seu nome é ${this.nome} 
        \nSua idade é ${this.idade} anos
        \nseu peso é ${this.peso}Kg
        \nSua altura é ${this.altura}m
        \nSeu IMC é ${this.peso / (this.altura ** 2)}`)

    }
verIdade(){

    console.log(`sua idade é ${this.idade} anos`)
    }

verPeso(){
    console.log(`seu peso é ${this.peso}`)

    }
verAltura(){
    console.log(`sua altura é ${this.altura} `)
    }
mediaImc(){
    if(this.peso / (this.altura ** 2)){
        if(this.peso / (this.altura ** 2) < 18.5){
            console.log (`Você está abaixo do peso`)
        }else if(this.peso / (this.altura ** 2) > 18.5 && this.peso / (this.altura ** 2) < 24.9){
            console.log(`Você esta no peso normal`)
        
        }else if(this.peso / (this.altura ** 2) > 25 && this.peso / (this.altura ** 2) < 29.9){
            console.log(`Você esta em sobrepeso`)
        }else if(this.peso / (this.altura ** 2) > 30 && this.peso / (this.altura ** 2) < 34.9)
            console.log(`Você esta na obesidade I`)
    }


    
    }

}

