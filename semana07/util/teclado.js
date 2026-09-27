// ./util/teclado.js
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function lerTeclado(texto) {
  const rl = readline.createInterface({ input, output });
  try {
    const resposta = await rl.question(texto);
    return resposta;
  } finally {
    rl.close();
  }
}