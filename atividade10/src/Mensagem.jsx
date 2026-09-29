function Mensagem() {
  const logado = true;

  return (
    <div>
      {logado ? <h1>Bem-vindo de volta ao sistema!</h1> : <h1>Por favor, faça login.</h1>}
    </div>
  );
}

export default Mensagem;