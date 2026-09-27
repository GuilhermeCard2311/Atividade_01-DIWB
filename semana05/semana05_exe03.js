import { lerTeclado } from './util/teclado.js';

async function lerNotaValidada(mensagem) {
    while (true) {
        const nota = parseFloat(await lerTeclado(mensagem));
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            return nota;
        }
        console.log('Nota inválida! Por favor, insira um valor entre 0 e 10.');
    }
}

async function main() {
    const nota1 = await lerNotaValidada('Informe a primeira nota: ');
    const nota2 = await lerNotaValidada('Informe a segunda nota: ');
    const nota3 = await lerNotaValidada('Informe a terceira nota: ');

    const media = (nota1 + nota2 + nota3) / 3;
    const situacao = media >= 6 ? 'Aprovado' : 'Reprovado';

    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação: ${situacao}`);
}

main();