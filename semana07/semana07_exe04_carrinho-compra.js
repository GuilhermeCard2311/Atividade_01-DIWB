import { lerTeclado } from './util/teclado.js';

class Item {
  #nome;
  #preco;
  #quantidade;

  constructor(nome, preco, quantidade) {
    this.#nome = nome;
    this.#preco = Number(preco);
    this.#quantidade = Number(quantidade);
  }

  get subtotal() {
    return this.#preco * this.#quantidade;
  }
}

class Carrinho {
  #itens;

  constructor() {
    this.#itens = [];
  }

  adicionarItem(item) {
    this.#itens.push(item);
  }

  totalCompra() {
    return this.#itens.reduce((total, item) => total + item.subtotal, 0);
  }
}

async function main() {
  const carrinho = new Carrinho();

  // No enunciado pede dados de 3 itens (no exemplo da imagem há 2 itens cadastrados)
  for (let i = 1; i <= 3; i++) {
    const nome = await lerTeclado(`Informe o nome do item ${i}: `);
    const preco = await lerTeclado(`Informe o preço do item ${i}: `);
    const quantidade = await lerTeclado(`Informe a quantidade do item ${i}: `);

    const item = new Item(nome, preco, quantidade);
    carrinho.adicionarItem(item);
  }

  console.log(`Total da compra: ${carrinho.totalCompra()}`);
}

main();