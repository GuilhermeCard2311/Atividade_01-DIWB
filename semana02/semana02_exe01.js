function calcularBoletim(nome, nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  const situacao = media >= 7 ? "Aprovado" : "Reprovado";

  console.log(`Aluno: ${nome}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
  console.log('-------------------------');
}

calcularBoletim("Ana", 8.0, 9.0, 8.0);
calcularBoletim("Carlos", 5.5, 6.0, 4.0);