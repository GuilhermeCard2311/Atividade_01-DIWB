import { lerTeclado } from './util/teclado.js';

async function main() {
    const peso = parseFloat(await lerTeclado('Informe seu peso (kg): '));
    const altura = parseFloat(await lerTeclado('Informe sua altura (m): '));

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'peso normal';
    } else if (imc < 30) {
        classificacao = 'sobrepeso';
    } else {
        classificacao = 'obesidade';
    }

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}

main();