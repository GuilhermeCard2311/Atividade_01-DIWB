import { lerTeclado } from './util/teclado.js';

class Produto {
  #nome;
  #preco;
  #quantidadeEmEstoque;

  constructor(nome, preco, quantidadeEmEstoque) {
    this.#nome = nome;
    this.#preco = Number(preco);
    this.#quantidadeEmEstoque = Number(quantidadeEmEstoque);
  }

  adicionarEstoque(quantidade) {
    this.#quantidadeEmEstoque += Number(quantidade);
  }

  removerEstoque(quantidade) {
    const q = Number(quantidade);
    if (q <= this.#quantidadeEmEstoque) {
      this.#quantidadeEmEstoque -= q;
    } else {
      console.log('Quantidade insuficiente em estoque.');
    }
  }

  valorTotalEmEstoque() {
    return this.#preco * this.#quantidadeEmEstoque;
  }
}

async function main() {
  const nome = await lerTeclado('Informe o nome do produto: ');
  const preco = await lerTeclado('Informe o preço do produto: ');
  const qtdInicial = await lerTeclado('Informe a quantidade em estoque: ');

  const produto = new Produto(nome, preco, qtdInicial);

  const qtdAdicionar = await lerTeclado('Informe a quantidade a adicionar ao estoque: ');
  produto.adicionarEstoque(qtdAdicionar);

  console.log(`Valor total em estoque: ${produto.valorTotalEmEstoque()}`);
}

main();