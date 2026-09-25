# JavaScript — Arrays

> Anotações práticas sobre arrays: características, acesso e atualização de elementos, métodos para adicionar e remover itens, arrays bidimensionais, desestruturação e inversão de strings com métodos de array.

---

## Características dos arrays

Um array em JavaScript é uma **coleção ordenada de valores**, cada um identificado por um índice numérico. Os valores podem ser de diferentes tipos de dados, incluindo números, strings, booleanos, objetos e até outros arrays.

Para criar um array, use colchetes (`[]`) e separe os valores com vírgulas:

```js
let fruits = ["apple", "banana", "orange"];
```

Aqui declaramos a variável `fruits` e atribuímos a ela um array com três strings: `apple`, `banana` e `orange`.

### Indexação a partir do zero

Arrays são **indexados a partir do zero**: o primeiro elemento tem índice `0`, o segundo tem índice `1`, e assim por diante. Você acessa cada elemento pelo seu índice:

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"
```

### A propriedade `length`

Retorna o número de elementos do array:

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
```

### Arrays são dinâmicos

O tamanho de um array pode mudar depois de criado. Você pode adicionar ou remover elementos com métodos como `push()`, `pop()`, `shift()`, `unshift()`, `splice()` e outros.

---

## Acessando e atualizando elementos

Se você tentar acessar um índice que não existe, o JavaScript retorna `undefined`:

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined
```

Não há elemento no índice `3`, então o resultado é `undefined`.

Para **atualizar** um elemento, atribua um novo valor a um índice específico:

```js
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

Aqui substituímos `banana` por `blueberry` no índice `1`. Você também pode **adicionar** um elemento atribuindo um valor a um índice que ainda não existe:

```js
let fruits = ["apple", "banana", "cherry"];
fruits[3] = "date";
console.log(fruits); // ["apple", "banana", "cherry", "date"]
```

> Cuidado: atribuir a um índice muito além do fim do array cria "buracos" (posições vazias). Em um array de 3 elementos, por exemplo, `fruits[5] = "fig"` deixa os índices `3` e `4` vazios, e `length` passa a ser `6`.

---

## Adicionando e removendo elementos do início e do fim

Existem quatro métodos principais para adicionar e remover elementos das extremidades de um array: `push()`, `pop()`, `shift()` e `unshift()`.

### `push()` — adiciona ao final

Adiciona um ou mais elementos ao **final** do array e retorna o **novo tamanho**:

```js
const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits);    // ["apple", "banana", "orange"]
```

#### Por que um array `const` pode ser modificado?

Declarar um array com `const` cria uma referência fixa para ele. O array em si é **mutável** e pode ser modificado, mas você **não pode reatribuir** um novo valor à constante:

```js
const fruits = ["apple", "banana"];
fruits = ["This", "will", "not", "work"]; // Uncaught TypeError: Assignment to constant variable.
```

O erro é lançado na própria linha da reatribuição, e a execução para ali.

### `pop()` — remove do final

Remove o **último** elemento, retorna esse elemento e modifica o array original:

```js
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits);    // ["apple", "banana"]
console.log(lastFruit); // "orange"
```

### `unshift()` — adiciona ao início

Adiciona um ou mais elementos ao **início** do array e retorna o novo tamanho. Funciona como o `push()`, mas no começo do array:

```js
let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers);   // [1, 2, 3]
console.log(newLength); // 3
```

### `shift()` — remove do início

Remove o **primeiro** elemento e o retorna. É semelhante ao `pop()`, mas atua no início do array:

```js
let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors);     // ["green", "blue"]
console.log(firstColor); // "red"
```

### Resumo

| Método      | Onde atua | Ação                          | Retorno               |
| ----------- | --------- | ----------------------------- | --------------------- |
| `push()`    | Fim       | Adiciona um ou mais elementos | Novo tamanho do array |
| `pop()`     | Fim       | Remove um elemento            | O elemento removido   |
| `unshift()` | Início    | Adiciona um ou mais elementos | Novo tamanho do array |
| `shift()`   | Início    | Remove um elemento            | O elemento removido   |

> `push()` e `unshift()` podem adicionar vários elementos de uma vez, enquanto `pop()` e `shift()` removem apenas um elemento por vez. Os quatro **modificam o array original**.

---

## Arrays unidimensionais e bidimensionais

Entender a diferença entre arrays unidimensionais e bidimensionais é importante para organizar e manipular dados de forma eficaz.

### Array unidimensional

É como uma **única fileira de caixas**. Imagine uma fila de armários em uma estação de trem: cada armário guarda um item e pode ser acessado diretamente pelo seu número. Cada item é acessado com **um único índice**:

```js
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[2]); // "cherry"
```

`fruits` é como uma única linha de nomes de frutas: para acessar qualquer uma, basta um número (o índice) entre colchetes.

### Array bidimensional

Se o array unidimensional é uma fileira de armários, o bidimensional é uma **grade**, com várias linhas e colunas. Em JavaScript, ele é essencialmente um **array de arrays**, útil para dados com estrutura de grade, como um tabuleiro de xadrez, uma planilha ou os pixels de uma imagem.

Para acessar um elemento, são necessários **dois índices**: um para a linha e outro para a coluna:

```js
let chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]); // "Q"
```

`chessboard` representa a configuração inicial de um jogo de xadrez. Para acessar a rainha (`Q`), usamos `[0][3]`: o índice `0` seleciona a primeira linha e o índice `3` seleciona a quarta coluna dessa linha.

### Principal diferença

- **Unidimensional** → um único índice; adequado para dados lineares, como listas e sequências.
- **Bidimensional** → dois índices; ideal para estruturas em forma de grade.

Como arrays bidimensionais em JavaScript são arrays de arrays, cada elemento do array externo é ele mesmo um array. Essa estrutura aninhada oferece grande flexibilidade, mas exige cuidado para evitar erros.

---

## Desestruturação de arrays (array destructuring)

A desestruturação permite **extrair valores de um array e atribuí-los a variáveis** de forma concisa e legível. É especialmente útil ao trabalhar com funções que retornam múltiplos valores.

```js
let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```

O primeiro elemento vai para `first`, o segundo para `second` e o terceiro para `third`, sem precisar da notação de índice. Compare com o acesso por índice:

```js
const fruits = ["apple", "banana", "orange"];

const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```

### Pulando elementos

Use vírgulas para ignorar os elementos que não interessam:

```js
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"
```

A vírgula extra pula o segundo elemento (`green`).

### Valores padrão

Se o array tiver menos elementos do que as variáveis, você pode definir valores padrão:

```js
let numbers = [1, 2];
let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

Como `numbers` não tem um terceiro elemento, `c` recebe o valor padrão `3`.

### Sintaxe rest (`...`)

A sintaxe rest, escrita com três pontos (`...`), captura os elementos restantes em um **novo array**:

```js
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]
```

> A sintaxe rest deve ser sempre o **último** elemento no padrão de desestruturação.

---

## Invertendo uma string com métodos de string e array

Inverter uma string é uma tarefa comum que combina métodos de string e de array em três etapas:

1. **Dividir** a string em um array de caracteres com `split()`.
2. **Inverter** o array com `reverse()`.
3. **Juntar** os caracteres de volta em uma string com `join()`.

### 1. `split()` — string → array

O `split()` divide uma string em um array de substrings, com base em um separador. Se nenhum separador for fornecido, retorna um array com a string original como único elemento. Separadores comuns:

- String vazia (`""`) → divide em caracteres individuais.
- Espaço (`" "`) → divide onde houver espaços.
- Hífen (`"-"`) → divide em cada hífen.

```js
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]
```

### 2. `reverse()` — inverte o array

O `reverse()` inverte os elementos **no próprio array** (in place), ou seja, modifica o array original em vez de criar um novo:

```js
let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]
```

### 3. `join()` — array → string

O `join()` cria e retorna uma nova string concatenando todos os elementos do array, separados pelo separador informado. Para juntar sem separador, use uma string vazia:

```js
let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"
```

> Sem argumento, `join()` usa a vírgula como separador: `["a", "b"].join()` retorna `"a,b"`.

### Juntando tudo

Como cada método retorna um valor, as três etapas podem ser encadeadas em uma única linha:

```js
const reversed = "hello".split("").reverse().join("");
console.log(reversed); // "olleh"
```
