class Retangulo {
    #base; //Propriedade privada.
    #altura; //Propriedade privada.     
    constructor() { }
    set setBase(base) { this.#base = base; }
    get getBase() { return this.#base; }
    set setAltura(altura) { this.#altura = altura; }
    get getAltura() { return this.#altura; }
    get #area() { return this.#base * this.#altura; } //Método privado.
    get getArea() { return this.#area; }
}

var ret = new Retangulo();
ret.setBase = 6; 
ret.setAltura = 7;
console.log("Área: " + ret.getArea);
//console.log("Área: " + ret.#area); // -> ERRO: acesso indevido a método privado.
