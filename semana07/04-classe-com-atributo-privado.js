class Retangulo {
    #base;   //Propriedade privada.
    #altura; //Propriedade privada.         
    constructor(base, altura) {
        this.#base = base;
        this.#altura = altura;
    }
    area() {
        return this.#base * this.#altura;
    }
}

let retangulo = new Retangulo(6, 7);
console.log("Área: " + retangulo.area());
//console.log("Área: " + (retangulo.#base * retangulo.#altura)); // -> ERRO: acesso indevido a propriedades privadas.  
