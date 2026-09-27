# Funções e Escopo

## Funções tradicionais: 

Declaração clássica com a palavra function.
Sintaxe function nomeDaFuncao() {}

## Função anônima:

Sintaxe function () {}.

## Arrow functions: 

Sintaxe curta usando () => {}.

## Escopo: 
Variáveis vivem no escopo global, de função ou de bloco ({}).

## Closures (Fechamento): 
Uma função que guarda o acesso às variáveis de um escopo externo mesmo depois que ele terminou.

Closure (fechamento) em JavaScript é a capacidade de uma função se lembrar e acessar as variáveis do seu escopo externo (de fora), mesmo depois que a função de fora já terminou de rodar. 

Quando você cria uma função dentro de outra função, a função de dentro ganha uma referência ao ambiente onde foi gerada.

Em JavaScript, toda função se comporta naturalmente como uma closure quando usa dados criados fora dela.

Para retornar mais de uma função dentro de um Closure, a melhor estratégia é retornar um objeto contendo essas funções como métodos.