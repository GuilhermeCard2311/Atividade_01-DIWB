# Desestruturação (Destructuring)
Técnica para extrair dados de arrays ou propriedades de objetos em variáveis distintas de forma rápida.

No objeto, a extração é feita pelo nome da chave (a ordem não importa). 

No vetor, a extração é feita com base na posição/índice dos elementos.

## rest (...)
O operador rest (...) deve ser o último elemento na desestruturação. Você pula as posições iniciais com vírgulas e usa o rest para coletar todo o restante em um novo vetor.

### Regras Importantes
Posição única: o rest deve ficar sempre no final do padrão de desestruturação.

Erro de sintaxe: código como [...resto, ultimo] causará um erro no JavaScript.

Vetor vazio: se não sobrarem elementos, o rest retornará um vetor vazio [].

Valor padrão: valores padrão (default values) entram em ação se a posição que você tentar desestruturar for undefined. Você define o valor padrão usando o operador de atribuição (=) diretamente na variável.

Apenas para undefined: o valor padrão só é usado se a posição for estritamente undefined.

Substituição de null: se a posição contiver null, o JavaScript não usará o padrão e manterá o null.

Combinação com o operador Rest: você não pode definir um valor padrão diretamente para o operador rest (ex: ...resto = [1]), pois o rest sempre garante a criação de um vetor, mesmo que vazio.
