import { Animal } from "./animal"

export class Cachorro extends Animal{
    especie: string;
    som:string;
    fuga: string;



    constructor(
        nome: string,
        idade: number,
        som: string,
        fuga: string,
        especie: string
    ){
        super(nome, idade);
        this.especie = especie;
        this.som = som
        this.fuga = fuga
        } 
        
        verEspecie() :void{
            console.log(`${this.especie}`);
        }
        verNome() :void{
            console.log(`${this.nome}`);
        }
        verIdade() :void{
            console.log(`${this.idade}`);
        }
        verSom(){
            console.log(`${this.som}`);
        }
        verFuga() :void{
            console.log(`${this.fuga}`);
        }

}
