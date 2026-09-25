# JavaScript — Funções

> Anotações práticas sobre arrow functions e escopo (global, local e de bloco).

---

## Arrow functions

Funções são pedaços reutilizáveis de código que ajudam a tornar o programa mais modular, mais fácil de manter e mais eficiente. Até aqui usamos a sintaxe regular de função:

```js
function greetings(name) {
  console.log("Hello, " + name + "!");
}
```

Outra forma de escrever funções em JavaScript é a **arrow function**. Refatorando o exemplo anterior:

```js
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};
```

Aqui criamos uma variável `const` chamada `greetings` e atribuímos a ela uma função anônima. A sintaxe é parecida, exceto pela ausência da palavra-chave `function` e pela adição da seta (`=>`) entre o parâmetro `name` e o corpo da função.

### Variações de sintaxe

Se a lista tiver **apenas um parâmetro**, você pode remover os parênteses:

```js
const greetings = name => {
  console.log("Hello, " + name + "!");
};
```

Se a função **não tiver parâmetros**, os parênteses são obrigatórios:

```js
const greetings = () => {
  console.log("Hello");
};
```

Se o corpo contiver **apenas uma linha**, você pode remover as chaves:

```js
const greetings = name => console.log("Hello, " + name + "!");
```

É importante notar que remover os parênteses e as chaves **não** funciona com a sintaxe de função regular — isso gera erro de sintaxe:

```js
// Isto produz erros de sintaxe
function greetings name console.log("Hello, " + name + "!");
```

Funções de uma linha assim só funcionam com a sintaxe de arrow function.

### Retorno implícito

Outro conceito-chave é a declaração `return`. Veja um exemplo calculando a área:

```js
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(5, 3)); // 15
```

Podemos simplificar retornando o próprio cálculo:

```js
const calculateArea = (width, height) => {
  return width * height;
};

console.log(calculateArea(5, 3)); // 15
```

Se você tentar remover as chaves e manter o `return` na mesma linha, receberá o erro `Uncaught SyntaxError: Unexpected token 'return'`:

```js
const calculateArea = (width, height) => return width * height;
```

O motivo é que, ao remover as chaves, você precisa **remover** também a palavra-chave `return`. Sem ela, a função retorna o cálculo **implicitamente**:

```js
const calculateArea = (width, height) => width * height;
```

---

## Escopo (global, local e de bloco)

Escopo se refere à visibilidade e à acessibilidade de variáveis em diferentes partes do código. Ele determina onde as variáveis podem ser acessadas ou modificadas. Entender o escopo é crucial para escrever código limpo, eficiente e livre de bugs. Existem três tipos principais: **global**, **local** e **de bloco**.

### Escopo global

É o escopo mais externo de um programa JavaScript. Variáveis declaradas no escopo global são acessíveis de qualquer lugar do código, inclusive dentro de funções e blocos — são as chamadas variáveis globais. Embora convenientes, devem ser usadas com moderação, pois podem causar conflitos de nomes e dificultar a manutenção.

```js
let globalVar = "I'm a global variable";

function printGlobalVar() {
  console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"
```

Aqui, `globalVar` é declarada no escopo global e pode ser acessada dentro da função `printGlobalVar`.

### Escopo local

Refere-se a variáveis acessíveis apenas dentro de uma função:

```js
function greet() {
  let message = "Hello, local scope!";
  console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // Isto lança um erro
```

`message` é uma variável local da função `greet`. Ela pode ser usada dentro da função, mas acessá-la de fora resulta em erro.

### Escopo de bloco

Conceito introduzido com as palavras-chave `let` e `const` no ES6. Um **bloco** é qualquer seção de código entre chaves (`{}`), como em declarações `if`, loops `for` ou `while` (loops serão vistos em uma lição futura).

Variáveis declaradas com `let` ou `const` dentro de um bloco são acessíveis apenas dentro dele:

```js
if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // "I'm in a block"
}
console.log(blockVar); // Isto lança um erro
```

`blockVar` só é acessível dentro do bloco `if`; acessá-la de fora resulta em erro. Entender esses diferentes tipos de escopo é essencial para gerenciar a acessibilidade das variáveis e evitar efeitos colaterais indesejados.
