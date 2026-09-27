const produtos = [
  { nome: "Teclado", preco: 80.00, estoque: 3 },
  { nome: "Mouse", preco: 50.00, estoque: 0 },
  { nome: "Monitor", preco: 900.00, estoque: 2 },
  { nome: "Headset", preco: 150.00, estoque: 4 }
];

let produtoMaiorValor = produtos[0];
let maiorValorEstoque = produtos[0].preco * produtos[0].estoque;

for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  const valorEstoque = produto.preco * produto.estoque;

  if (valorEstoque > maiorValorEstoque) {
    maiorValorEstoque = valorEstoque;
    produtoMaiorValor = produto;
  }

  if (produto.estoque > 0) {
    console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)} | Valor em estoque: R$ ${valorEstoque.toFixed(2)}`);
  }
}

console.log(`Produto com maior valor em estoque: ${produtoMaiorValor.nome}`);