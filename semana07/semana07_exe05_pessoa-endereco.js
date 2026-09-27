import { lerTeclado } from './util/teclado.js';

class Endereco {
  #rua;
  #cidade;
  #cep;

  constructor(rua, cidade, cep) {
    this.#rua = rua;
    this.#cidade = cidade;
    this.#cep = cep;
  }

  toString() {
    return `${this.#rua}, ${this.#cidade} - ${this.#cep}`;
  }
}

class Pessoa {
  #nome;
  #idade;
  #endereco;

  constructor(nome, idade, endereco) {
    this.#nome = nome;
    this.#idade = Number(idade);
    this.#endereco = endereco; // Instância da classe Endereco
  }

  exibir() {
    console.log(`Nome: ${this.#nome}`);
    console.log(`Idade: ${this.#idade}`);
    console.log(`Endereço: ${this.#endereco.toString()}`);
  }
}

async function main() {
  const nome = await lerTeclado('Informe o nome da pessoa: ');
  const idade = await lerTeclado('Informe a idade da pessoa: ');
  const rua = await lerTeclado('Informe a rua: ');
  const cidade = await lerTeclado('Informe a cidade: ');
  const cep = await lerTeclado('Informe o CEP: ');

  const endereco = new Endereco(rua, cidade, cep);
  const pessoa = new Pessoa(nome, idade, endereco);

  pessoa.exibir();
}

main();