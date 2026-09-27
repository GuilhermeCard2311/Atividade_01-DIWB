import promptSync from 'prompt-sync';
const prompt = promptSync();

class Estudante {
  static #proximaMatricula = 1001; // Atributo privado estático
  #matricula;

  constructor(nome, curso, nota) {
    this.#matricula = Estudante.#proximaMatricula++;
    this.nome = nome;
    this.curso = curso;
    this.nota = Number(nota);
  }

  get matricula() {
    return this.#matricula;
  }

  aprovado() {
    return this.nota >= 7.0;
  }
}

function main() {
  const estudantes = [];
  let continuar = 's';

  console.log('--- Cadastro de Estudantes ---');
  while (continuar.toLowerCase() === 's') {
    const nome = prompt('Informe o nome do estudante: ');
    const curso = prompt('Informe o curso: ');
    const nota = prompt('Informe a nota: ');

    const estudante = new Estudante(nome, curso, nota);
    estudantes.push(estudante);

    continuar = prompt('Deseja cadastrar outro estudante? (s/n): ');
  }

  console.log('\n--- Todas as Matrículas Cadastradas ---');
  estudantes.forEach((e) => {
    console.log(`Matrícula: ${e.matricula} | Nome: ${e.nome} | Curso: ${e.curso} | Nota: ${e.nota}`);
  });

  console.log('\n--- Estudantes Aprovados ---');
  const aprovados = estudantes.filter((e) => e.aprovado());
  if (aprovados.length > 0) {
    aprovados.forEach((e) => {
      console.log(`Matrícula: ${e.matricula} | Nome: ${e.nome} (Nota: ${e.nota})`);
    });
  } else {
    console.log('Nenhum estudante foi aprovado.');
  }
}

main();