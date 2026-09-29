import "./styles/cartao.css";

function CartaoProduto() {
  const produto = {
    nome: "Teclado Mecânico RGB",
    descricao: "Teclado para jogos com switches azuis e retroiluminação ajustável.",
    preco: 250.00
  };

  return (
    <div className="card-produto">
      <h3>{produto.nome}</h3>
      <p className="descricao">{produto.descricao}</p>
      <p className="preco">R$ {produto.preco.toFixed(2)}</p>
    </div>
  );
}

export default CartaoProduto;