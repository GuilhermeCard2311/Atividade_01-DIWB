1. Explique, com suas palavras, o que é JSX e qual sua principal finalidade.
R: O jsx é uma extensão de sintaxe de Javascript que permite escrever estruturas parecidas com HTML diretamente dentro de arquivos JS/JSX. Sua principal finalidade é unir a estrutura do HTML, com a logica de renderização do javascript em um mesmo componente, tornando a criação de interfaces no React mais dinâmica.
2. Pesquise por que o React utiliza `className` em vez de `class`.
R: Porque a palavra class é reservada do Javascript.
3. Crie um componente que exiba os dados de um livro (título, autor e preço) utilizando um objeto JavaScript.
function Livro() {
  const livro = {
    titulo: "Attack on Titan - Volume 1",
    autor: "Hajime Isayama",
    preco: 34.90
  };

  return (
    <div>
      <h2>{livro.titulo}</h2>
      <p>Autor: {livro.autor}</p>
      <p>Preço: R$ {livro.preco.toFixed(2)}</p>
    </div>
  );
}

export default Livro;

4. Desenvolva um cartão para um produto contendo nome, descrição e preço, aplicando estilos com CSS.
5. Crie uma mensagem de boas-vindas que seja exibida apenas quando uma variável `logado` for verdadeira, utilizando o operador ternário.
R: 