import { lerTeclado } from './util/teclado.js';

class Aluno {
  #nome;
  #idade;
  #notas;

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = Number(idade);
    this.#notas = [];
  }

  adicionarNota(nota) {
    this.#notas.push(Number(nota));
  }

  media() {
    if (this.#notas.length === 0) return 0;
    const soma = this.#notas.reduce((acc, curr) => acc + curr, 0);
    return soma / this.#notas.length;
  }

  get nome() {
    return this.#nome;
  }
}

async function main() {
  const nome = await lerTeclado('Informe o nome do aluno: ');
  const idade = await lerTeclado('Informe a idade do aluno: ');

  const aluno = new Aluno(nome, idade);

  for (let i = 1; i <= 3; i++) {
    const nota = await lerTeclado(`Informe a nota ${i}: `);
    aluno.adicionarNota(nota);
  }

  console.log(`A média de ${aluno.nome} é: ${aluno.media()}`);
}

main();