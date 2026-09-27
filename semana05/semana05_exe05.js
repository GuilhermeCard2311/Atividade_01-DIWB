import { lerTeclado } from './util/teclado.js';

async function main() {
    const salarioBruto = parseFloat(await lerTeclado('Informe o salário bruto (R$): '));
    const aliquota = parseFloat(await lerTeclado('Informe a alíquota de imposto (%): '));

    const valorImposto = salarioBruto * (aliquota / 100);
    const salarioLiquido = salarioBruto - valorImposto;

    console.log(`Valor do imposto (R$): ${valorImposto}`);
    console.log(`Salário líquido (R$): ${salarioLiquido}`);
}

main();