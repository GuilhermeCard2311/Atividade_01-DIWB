import promptSync from 'prompt-sync';
const prompt = promptSync();

class Pessoa {
  static #proximoId = 1; 
  #id;

  constructor(nome, email) {
    this.#id = Pessoa.#proximoId++;
    this.nome = nome;
    this.email = email;
  }

  get id() {
    return this.#id;
  }
}

function lerPessoas() {
  const pessoas = [];
  let continuar = 's';

  console.log('--- Cadastro de Pessoas ---');
  while (continuar.toLowerCase() === 's') {
    const nome = prompt('Informe o nome: ');
    const email = prompt('Informe o e-mail: ');

    const pessoa = new Pessoa(nome, email);
    pessoas.push(pessoa);

    continuar = prompt('Deseja cadastrar outra pessoa? (s/n): ');
  }

  return pessoas;
}

function exibirPessoas(pessoas) {
  console.log('\n--- Lista de Pessoas Cadastradas ---');
  pessoas.forEach((pessoa) => {
    console.log(`ID: ${pessoa.id} | Nome: ${pessoa.nome} | E-mail: ${pessoa.email}`);
  });
}

function main() {
  const listaPessoas = lerPessoas();
  exibirPessoas(listaPessoas);
}

main();