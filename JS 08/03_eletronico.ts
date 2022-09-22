export class Eletronico {
    marca: string;
    linha: string;
    modelo: string;
    frequencia: string;
    nucleo: number;
    cache: string

    constructor(
        marca: string,
        linha: string,
        modelo: string,
        frequencia: string,
        nucleo: number,
        cache: string
    ){
        this.marca = marca
        this.linha = linha
        this.modelo = modelo
        this.frequencia = frequencia
        this.nucleo = nucleo
        this.cache = cache
    }

    // método
    verProcessador(){
        console.log(`O processador da marca ${this.marca}
        \nda linha ${this.linha}
        \nmodelo ${this.modelo}
        \ncom frequência de ${this.frequencia}
        \n${this.nucleo} núcleos
        \ne ${this.cache} de memória cache
        \né considerado antigo`)
    }

}