import "./styles/app.css";

function App() {
  const produto = {
    nome: "Monitor Gamer 27\" 144Hz",
    categoria: "Periféricos",
    preco: 1299.90,
    estoque: 12
  };

  return (
    <div className="container">
      <h1 className="titulo-sistema">Sistema de Gerenciamento de Produtos</h1>
      <h3 className="subtitulo-disciplina">Desenvolvimento Web com React</h3>

      <div className="card-produto">
        <span className="categoria">{produto.categoria}</span>
        <h2>{produto.nome}</h2>
        <p className="preco">R$ {produto.preco.toFixed(2)}</p>
        <p>Quantidade em estoque: {produto.estoque}</p>
        
        <p>
          Status:{" "}
          <span className={produto.estoque > 0 ? "status-disponivel" : "status-indisponivel"}>
            {produto.estoque > 0 ? "Disponível" : "Indisponível"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;