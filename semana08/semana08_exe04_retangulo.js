import promptSync from 'prompt-sync';
const prompt = promptSync();

class Retangulo {
  static totalRetangulos = 0; // Atributo estático

  constructor(base, altura) {
    this.base = Number(base);
    this.altura = Number(altura);
    Retangulo.totalRetangulos++;
  }

  get area() {
    return this.base * this.altura;
  }

  get perimetro() {
    return 2 * (this.base + this.altura);
  }

  exibir() {
    console.log(`Base: ${this.base} | Altura: ${this.altura} | Área: ${this.area} | Perímetro: ${this.perimetro}`);
  }
}

function main() {
  const retangulos = [];
  let continuar = 's';

  console.log('--- Cadastro de Retângulos ---');
  while (continuar.toLowerCase() === 's') {
    const base = prompt('Informe a base do retângulo: ');
    const altura = prompt('Informe a altura do retângulo: ');

    const retangulo = new Retangulo(base, altura);
    retangulos.push(retangulo);

    continuar = prompt('Deseja criar outro retângulo? (s/n): ');
  }

  console.log('\n--- Dados dos Retângulos Informados ---');
  retangulos.forEach((r) => r.exibir());
  console.log(`Total de retângulos criados: ${Retangulo.totalRetangulos}`);
}

main();