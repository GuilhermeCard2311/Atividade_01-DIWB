const numero = 5;
let soma = 0;

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  soma += resultado;
  console.log(`${numero} x ${i} = ${resultado}`);
}

console.log(`Soma dos resultados: ${soma}`);