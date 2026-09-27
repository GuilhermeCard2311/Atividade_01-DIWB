import promptSync from 'prompt-sync';
const prompt = promptSync();

class Carro {
  static contador = 0; 

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    Carro.contador++;
  }

  exibir() {
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano} | Total de carros criados: ${Carro.contador}`);
  }
}

function main() {
  const carros = [];

  console.log('--- Cadastro de 3 Carros ---');
  for (let i = 1; i <= 3; i++) {
    console.log(`\nCarro ${i}:`);
    const marca = prompt('Informe a marca: ');
    const modelo = prompt('Informe o modelo: ');
    const ano = prompt('Informe o ano: ');

    const carro = new Carro(marca, modelo, ano);
    carros.push(carro);
  }

  console.log('\n--- Informações dos Carros Cadastrados ---');
  carros.forEach((carro) => carro.exibir());
}

main();