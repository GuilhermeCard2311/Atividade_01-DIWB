import { lerTeclado } from './util/teclado.js';

class ContaBancaria {
  #titular;
  #saldo;
  #numeroConta;

  constructor(titular, saldoInicial, numeroConta) {
    this.#titular = titular;
    this.#saldo = Number(saldoInicial);
    this.#numeroConta = numeroConta;
  }

  depositar(valor) {
    const v = Number(valor);
    if (v > 0) {
      this.#saldo += v;
    }
  }

  sacar(valor) {
    const v = Number(valor);
    if (v <= this.#saldo) {
      this.#saldo -= v;
      return true;
    } else {
      console.log('Saldo insuficiente para realizar o saque.');
      return false;
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

async function main() {
  const titular = await lerTeclado('Informe o titular da conta: ');
  const numeroConta = await lerTeclado('Informe o número da conta: ');
  const saldoInicial = await lerTeclado('Informe o saldo inicial: ');

  const conta = new ContaBancaria(titular, saldoInicial, numeroConta);

  const valorDeposito = await lerTeclado('Informe o valor do depósito: ');
  conta.depositar(valorDeposito);

  const valorSaque = await lerTeclado('Informe o valor do saque: ');
  conta.sacar(valorSaque);

  console.log(`Saldo atual: ${conta.consultarSaldo()}`);
}

main();