# JavaScript — Loops

> Anotações práticas sobre loops: o loop `for` (sintaxe, funcionamento passo a passo, loops infinitos e aninhados), o loop `for...of` com arrays, strings e arrays de objetos, os loops `while` e `do...while` e as instruções `break` e `continue`, inclusive com labels.

---

## Loops e iteração

Loops em programação são usados para repetir um bloco de código várias vezes.

Um exemplo de loop seria quando você está projetando um programa que precisa imprimir uma lista de itens. Você pode usar um loop para imprimir cada um dos itens na lista.

Outro exemplo seria quando você está projetando um jogo e quer mover um personagem pela tela. Você pode usar um loop para mover o personagem um certo número de pixels cada vez que o loop for executado.

### Sintaxe do loop `for`

Em JavaScript, existem vários tipos de loops que você pode usar. Nesta lição, vamos abordar o loop `for`. Aqui está a sintaxe básica para um loop `for`:

```js
for (initialization; condition; increment or decrement) {
  // bloco de código a ser executado
}
```

A instrução de inicialização é executada antes do início do loop. Normalmente é usada para inicializar uma variável contador. Uma variável contador é uma variável usada para acompanhar quantas vezes o loop foi executado.

A instrução de condição é avaliada antes de cada iteração do loop. Uma iteração é uma única passagem pelo loop.

Se a condição for verdadeira, o bloco de código dentro do loop é executado. Se a condição for falsa, o loop para e você passa para o próximo bloco de código.

A última parte do loop é a declaração de incremento/decremento. Esta instrução é executada após cada iteração do loop. Normalmente é usada para incrementar ou decrementar a variável contador.

### Exemplo de loop `for` passo a passo

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Na primeira parte do exemplo acima, inicializamos uma variável contador `i` com `0`. É uma convenção comum usar `i` como a variável contador em um loop `for`.

A próxima parte é verificar a condição. Neste caso, a condição está verificando se `i` é menor que `5`. Como `i` é `0`, a condição é verdadeira e o bloco de código dentro do loop é executado.

O bloco de código dentro do loop é para registrar o valor de `i` no console. O valor de `i` é `0`, então o console mostrará o valor de `0`.

Então a instrução de incremento é executada. Neste caso, estamos incrementando `i` em `1`. Então `i` agora é `1`.

Então verificamos a condição novamente que é verificar se `i` é menor que `5`. Como `i` agora é `1`, a condição ainda é verdadeira e o bloco de código dentro do loop é executado novamente.

Continuamos repetindo esse processo até que a condição seja falsa. Neste caso, quando `i` é `5`, a condição é falsa e o loop para.

### Loops infinitos

Quando você estiver trabalhando com loops, deve tomar cuidado para não criar uma condição que seja sempre verdadeira. Se você fizer isso, o loop será executado para sempre e seu programa irá travar. Isto é conhecido como um loop infinito.

### Loops aninhados

É possível criar loops `for` aninhados. Um loop aninhado é quando você coloca um loop dentro de outro. Há um exemplo em [Labels em loops aninhados](#labels-em-loops-aninhados).

Loops podem ser benéficos na programação quando você precisa repetir um bloco de código um determinado número de vezes.

---

## Loop `for...of`

Um loop `for...of` é usado quando você precisa iterar sobre valores de um iterável. Exemplos de iteráveis seriam arrays e strings.

### Sintaxe

Aqui está a sintaxe básica para um loop `for...of`:

```js
for (variable of iterable) {
  // bloco de código a ser executado
}
```

A variável no exemplo representa o valor atual do iterável que está sendo percorrido.

Se você tem um array de números, a variável seria o número atual no array. Se você tem uma string, a variável seria o caractere atual na string.

Vamos dar uma olhada em alguns exemplos para que você possa entender melhor como o loop `for...of` funciona.

### Percorrendo um array

Neste primeiro exemplo temos um array de números e queremos percorrer cada número e registrá-lo no console.

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
```

Criamos uma variável chamada `num` que representará o número atual no array. Para a iteração 1, `num` será `1`, para a iteração 2, `num` será `2` e assim por diante.

Dentro do loop, estamos registrando o número atual no console.

### Percorrendo uma string

Aqui está outro exemplo onde temos uma string e queremos iterar sobre cada caractere e registrá-lo no console.

```js
const str = 'freeCodeCamp';

for (let char of str) {
  console.log(char);
}
```

Neste exemplo, criamos uma variável chamada `char` que representará o caractere atual na string.

A cada iteração, o loop registrará o caractere atual no console.

### `let` ou `const` na variável do loop

É importante notar que você pode usar `let` ou `const` ao declarar a variável em um loop `for...of`.

Se você for usar `const`, certifique-se de que o valor da variável não mude dentro do loop. Se isso acontecer, você receberá um erro.

Aqui está um exemplo de uso de `const` que resulta em um erro:

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
  num = num + 1; // Isto lança um erro (TypeError: Assignment to constant variable.)
}
```

Neste exemplo, estamos tentando alterar o valor de `num` dentro do loop. Como declaramos `num` com `const`, receberemos um erro. Então, se você precisar alterar o valor da variável dentro do loop, use `let` em vez disso.

> Repare: com `let`, `num = num + 1` muda só a variável do loop. O array `numbers` continua `[1, 2, 3, 4, 5]`.

### Percorrendo um array de objetos

Vamos dar uma olhada em um último exemplo lidando com um array de objetos.

```js
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
```

Neste exemplo, temos um array de objetos chamado `people`. Cada objeto tem uma propriedade `name` e `age`.

Quando percorremos o array, criamos uma variável chamada `person` que representará o objeto atual no array.

Dentro do loop, estamos exibindo uma mensagem no console.

A primeira mensagem será `John is 30 years old`, a segunda mensagem será `Jane is 25 years old` e a terceira mensagem será `Jim is 40 years old`.

Loops `for...of` são realmente úteis quando você precisa iterar sobre valores de um iterável como um array ou uma string. Eles também são fáceis de ler e podem tornar seu código mais conciso.

---

## Loops `while` e `do...while`

Nesta lição, você aprenderá sobre o loop `while` e o loop `do...while`.

### `while`

Um loop `while` executará um bloco de código enquanto a condição for verdadeira. Aqui está a sintaxe básica para um loop `while`:

```js
while (condition) {
  // bloco de código a ser executado
}
```

A condição é verificada antes que o bloco de código seja executado. Se a condição for falsa, o bloco de código não será executado.

Loops `while` são úteis quando você não sabe quantas vezes precisa executar o bloco de código. Aqui está um exemplo de uso de um loop `while`:

```js
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}
```

Neste exemplo, temos uma variável chamada `counter` que é inicializada com `0`. O loop `while` continuará a executar enquanto o valor de `counter` for menor que `5`. Dentro do loop, registramos o valor de `counter` no console e então incrementamos `counter` em `1`.

### `do...while`

Outro loop semelhante ao loop `while` seria o loop `do...while`. Aqui está a sintaxe básica:

```js
do {
  // bloco de código a ser executado
} while (condition);
```

Uma diferença chave entre um loop `do...while` e um loop `while` é que o loop `do...while` executará o bloco de código pelo menos uma vez antes de verificar a condição.

Se a condição for verdadeira, o bloco de código continuará a ser executado. Se a condição for falsa, o bloco de código parará de executar.

Aqui está um exemplo de uso de um loop `do...while`:

```js
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 5);
```

Neste exemplo, temos uma variável chamada `counter` que é inicializada com `0`. O loop `do...while` irá registrar o valor de `counter` no console e então incrementar `counter` em `1`. Após executar o bloco de código, ele verifica se o valor de `counter` é menor que `5`. Se for, o loop continuará a executar. Caso contrário, o loop será interrompido.

A diferença aparece quando a condição já começa falsa: o `while` não executa nenhuma vez, e o `do...while` executa uma vez.

```js
let a = 10;
while (a < 5) {
  console.log(a); // nunca executa
  a++;
}

let b = 10;
do {
  console.log(b); // 10 (executa uma vez)
  b++;
} while (b < 5);
```

Na maioria dos casos, você provavelmente usará o loop `while` com mais frequência do que o loop `do...while`. No entanto, é bom conhecer ambos os tipos de loops e quando usá-los.

---

## `break` e `continue`

Uma declaração `break` é usada para sair de um loop antecipadamente, enquanto uma declaração `continue` é usada para pular a iteração atual de um loop e passar para a próxima.

### `break`

Aqui está um exemplo de uso de uma declaração `break` em um loop `for`:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

No exemplo acima, o loop começa a contar em `0` e enquanto `i` for menor que `10`, o loop continuará a executar.

Dentro do loop, verificamos se `i` é igual a `5`. Se for, usamos a instrução `break` para sair do loop antecipadamente. Se não, registramos o valor de `i` no console. Então a saída do código imprimirá os números `0`, `1`, `2`, `3` e `4`.

A instrução `break` é útil quando você quer sair de um loop antecipadamente com base em uma certa condição. Por exemplo, se você está procurando um valor específico em um array, pode usar uma instrução `break` para sair do loop assim que encontrar o valor.

### `continue`

Às vezes você pode querer pular uma iteração específica de um loop sem sair do loop completamente. É aqui que entra a instrução `continue`. Aqui está um exemplo de uso de uma declaração `continue` em um loop `for`:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

Assim como antes, inicializamos `i` com `0` e temos uma condição que executará o loop enquanto `i` for menor que `10`.

Dentro do loop, quando `i` é igual a `5`, usamos a instrução `continue` para pular a iteração atual e passar para a próxima.

A saída deste código imprimirá os números `0`, `1`, `2`, `3`, `4`, `6`, `7`, `8` e `9`. O número `5` é pulado por causa da instrução `continue`.

### Labels em loops aninhados

Outra coisa que você pode fazer com as declarações `break` e `continue` é usar labels para especificar qual loop você quer interromper ou continuar.

Isso é útil quando você tem loops aninhados e quer controlar o fluxo do loop externo de dentro do loop interno.

Aqui está um exemplo de uso de labels com a instrução `break`:

```js
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

Neste exemplo, temos um `for` externo rotulado como `outerLoop` e um `for` interno rotulado como `innerLoop`.

Quando `i` é igual a `1` e `j` é igual a `1`, usamos a instrução `break` com o rótulo `outerLoop` para sair antecipadamente do loop externo. Isso sairá dos loops interno e externo.

A saída deste código irá registrar o seguinte no console:

```text
"i: 0, j: 0"
"i: 0, j: 1"
"i: 0, j: 2"
"i: 1, j: 0"
```

---

## Resumo

| Loop         | Quando usar                                             | Quando a condição é verificada                       |
| ------------ | ------------------------------------------------------- | ---------------------------------------------------- |
| `for`        | repetir um bloco um determinado número de vezes         | antes de cada iteração                               |
| `for...of`   | percorrer os valores de um iterável (array, string)     | não tem condição: percorre até o último valor        |
| `while`      | repetir sem saber quantas vezes o bloco vai executar    | antes de cada iteração (pode não executar nenhuma)   |
| `do...while` | o bloco precisa executar pelo menos uma vez             | depois de cada iteração (executa pelo menos uma vez) |
