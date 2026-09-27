class Retangulo {
    #base;   //Propriedade privada.
    #altura; //Propriedade privada.
    constructor(base, altura) {
        this.#base = base;
        this.#altura = altura;
    }
    set atribuirBase(base) { this.#base = base; }
    get lerBase() { return this.#base; }
    set atribuirAltura(altura) { this.#altura = altura; }
    get lerAltura() { return this.#altura; }
    get area() { return this.#base * this.#altura; }
}

let ret = new Retangulo(6, 7); 
console.log("Base: " + ret.lerBase);
console.log("Altura: " + ret.lerAltura);
console.log("Área: " + ret.area);

ret.atribuirBase = 7; 
ret.atribuirAltura = 8;
console.log("Base: " + ret.lerBase);
console.log("Altura: " + ret.lerAltura);
console.log("Área: " + ret.area);     
