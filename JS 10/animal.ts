export abstract class Animal {
    nome: string;
    idade: number;
    

    constructor(
        nome: string,
        idade: number,
        
    ){
        this.nome = nome;
        this.idade = idade;
        
    }
    // metodo

    verNome(){
        console.log(`${this.nome}`)
    }
    verIdade(){
        console.log(`${this.idade}`)
    }
    
}