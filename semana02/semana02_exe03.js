const numeros = [18, 3, 12, 7, 5, 12];

let maior = numeros[0];
let menor = numeros[0];
let soma = 0;
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  const num = numeros[i];
  
  soma += num;

  if (num > maior) maior = num;
  if (num < menor) menor = num;

  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

const media = soma / numeros.length;

console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Pares: ${pares}`);
console.log(`Ímpares: ${impares}`);