class Retangulo {
    #base;   //Propriedade privada.
    #altura; //Propriedade privada.
    constructor(base, altura) {
        this.#base = base;
        this.#altura = altura;
    }
    setBase(base) { this.#base = base; }
    getBase() { return this.#base; }
    setAltura(altura) { this.#altura = altura; }
    getAltura() { return this.#altura; }
    area() { return this.#base * this.#altura; }
}

let ret = new Retangulo(6, 7); 
console.log("Base: " + ret.getBase());
console.log("Altura: " + ret.getAltura());
console.log("Área: " + ret.area());

ret.setBase(7); 
ret.setAltura(8);
console.log("Base: " + ret.getBase());
console.log("Altura: " + ret.getAltura());
console.log("Área: " + ret.area());     
