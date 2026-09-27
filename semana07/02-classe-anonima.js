var RetanguloAnonimo = class { //Classe anônima:
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() { return this.base * this.altura; }
};

var RetanguloComNome = class Ret { //Classe com nome:
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() { return this.base * this.altura; }
};

let r1 = new RetanguloAnonimo(6, 7);
let r2 = new RetanguloComNome(7, 8);
//let r3 = new Ret(8, 9); // -> ERRO!!!

console.log("Área do primeiro retângulo: " + r1.area());
console.log("Área do segundo retângulo: " + r2.area());
