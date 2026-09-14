# Introdução ao JavaScript — Anotações de Estudo

> Anotações práticas feitas durante a seção de fundamentos de JavaScript.

---

## O que é JavaScript?

JavaScript é uma linguagem de programação e uma das tecnologias centrais da Web.
Suas principais características são:

- **Alto nível** — abstrai detalhes de baixo nível como gerenciamento de memória.
- **Tipagem dinâmica** — o tipo é associado ao valor, não à variável.
- **Orientação a objetos baseada em protótipos.**
- **Funções de primeira classe** — funções podem ser tratadas como valores (passadas como argumento, retornadas, atribuídas a variáveis).
- **Multiparadigma** — suporta os estilos orientado a eventos, funcional e imperativo.

---

## Variáveis

No Java, a variável é como uma "caixa com formato fixo" (só cabe `String`, só cabe `int`).
No JavaScript, a variável é apenas um **rótulo** que aponta para um valor, e esse valor pode ser de qualquer tipo.

Existem três palavras-chave para a criação de variáveis. **Observação importante:** todas são escritas em minúsculas (`let`, `const`, `var`), pois o JavaScript diferencia maiúsculas de minúsculas.

### `let`

Permite reatribuir o valor e tem **escopo de bloco** (só existe dentro do `{ }` onde foi declarada).

```js
let contador = 1;
contador = 2; // reatribuição permitida
```

### `const`

Significa constante. Uma vez atribuído o valor, ele **não pode ser reatribuído**.

```js
const nome = "Micael Martins";
// nome = "Outro"; // ❌ TypeError: Assignment to constant variable
```

### `var`

Assim como o `let`, permite reatribuir o valor. A diferença é que a `var` tem **escopo de função ou global** — ela ignora o escopo de bloco.

```js
for (var i = 0; i < 3; i++) {
  var nomePessoa = "Micael";
  console.log("Número: " + i);
}

console.log("NomeVar:", nomePessoa); // "Micael"
```

Apesar de `nomePessoa` ter sido declarada **dentro** do `for`, o `console.log` de fora do laço ainda consegue acessá-la e imprime `"Micael"` sem erro. Isso acontece porque a `var` não respeita o escopo de bloco — ela "vaza" para fora. Com `let`, esse mesmo código lançaria um `ReferenceError`.

### Declarando sem atribuir valor

Também podemos declarar uma variável sem atribuir um valor a ela. Nesse caso, seu valor inicial é `undefined`.

```js
let nome;
```

---

## ASCII, `charCodeAt()` e `fromCharCode()`

Entender como os caracteres são representados como números é fundamental na programação — e é aqui que o ASCII entra em cena.

O **ASCII** é um padrão de codificação que atribui um valor numérico a cada caractere. Cada caractere é mapeado para um número específico:

- A letra maiúscula `A` é representada pelo número `65`.
- A letra minúscula `a` é representada pelo número `97`.

O padrão ASCII cobre **128 caracteres**, incluindo:

- Letras maiúsculas e minúsculas do inglês (`A-Z`, `a-z`).
- Números (`0-9`).
- Marcas de pontuação e símbolos comuns (`!`, `@`, `#`, etc.).
- Caracteres de controle (como *newline* e *tab*).

> As strings em JavaScript usam Unicode (UTF-16) internamente, mas os valores ASCII correspondem aos primeiros 128 caracteres Unicode. Por isso, exemplos em ASCII funcionam normalmente em JavaScript.

### `charCodeAt()` — caractere → número

Retorna o código numérico (unidade de código UTF-16) do caractere em um índice especificado. Para os primeiros 128 caracteres, esse valor corresponde ao código ASCII.

```js
let codigo = "A".charCodeAt(0);
console.log(codigo); // 65
```

### `fromCharCode()` — número → caractere

Faz o oposto: converte uma unidade de código UTF-16 (que corresponde ao ASCII para caracteres básicos) de volta para o caractere correspondente.

```js
let char = String.fromCharCode(65);
console.log(char); // "A"
```

Esses métodos são especialmente úteis quando você precisa manipular ou comparar caracteres com base em seus valores numéricos.

---

## Removendo espaços em branco de uma string

Ao trabalhar com strings, é comum encontrar espaços em branco indesejados no início ou no final. Eles podem interferir em comparações, armazenamento e exibição, por isso é importante saber removê-los.

*Whitespace* (espaço em branco) refere-se a espaços, tabulações ou quebras de linha que ocorrem em uma string, mas não são caracteres visíveis:

```js
let greeting = "   Hello, world!   ";
```

### `trim()` — remove de ambos os lados

É a forma mais comum. Remove os espaços em branco tanto do início quanto do fim.

```js
let message = "   Hello!   ";
console.log(message);        // "   Hello!   "

let trimmedMessage = message.trim();
console.log(trimmedMessage); // "Hello!"
```

> `trim()` remove apenas os espaços das **extremidades**. Espaços internos (entre palavras) são preservados.

### `trimStart()` — remove apenas do início

```js
let greeting = "   Hello!   ";
let trimmedStart = greeting.trimStart();
console.log(trimmedStart); // "Hello!   "
```

### `trimEnd()` — remove apenas do fim

```js
let greeting = "   Hello!   ";
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd); // "   Hello!"
```

### Resumo

| Método        | Início | Fim | Espaços internos |
|---------------|:------:|:---:|:----------------:|
| `trim()`      |   ✅   | ✅  |        ❌        |
| `trimStart()` |   ✅   | ❌  |        ❌        |
| `trimEnd()`   |   ❌   | ✅  |        ❌        |

Use `trim()` para limpar ambos os lados, ou `trimStart()` / `trimEnd()` quando quiser um controle mais preciso sobre qual lado limpar.
