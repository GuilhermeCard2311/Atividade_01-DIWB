var r1 = new class { //Classe anônima:
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() { return this.base * this.altura; }
}(6, 7); // Instancia um objeto da classe anônima.

class Ret { //Classe com nome:
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() { return this.base * this.altura; }
};

let r2 = new Ret(7, 8); // Instancia um objeto da classe Ret.

console.log("Área do primeiro retângulo: " + r1.area());
console.log("Área do segundo retângulo: " + r2.area());
