# JavaScript — Booleanos e Números

> Anotações práticas sobre o tipo `Number`, operadores aritméticos, coerção de tipo, precedência, incremento/decremento, atribuição composta, booleanos, operadores unários, operações bit a bit e estruturas condicionais.

---

## O tipo `Number`

O tipo `Number` é um dos tipos de dados mais usados em JavaScript e em outras linguagens de programação. Números podem parecer simples, mas há muito para explorar. Em JavaScript, o tipo de dado `Number` representa um valor numérico.

Ao contrário de muitas outras linguagens que separam números inteiros e de ponto flutuante em tipos diferentes, o JavaScript usa um tipo unificado `Number`. Isso significa que você pode trabalhar com números inteiros, decimais e até valores numéricos especiais, todos sob o mesmo guarda-chuva.

Aqui está um exemplo básico mostrando que inteiros, números de ponto flutuante e negativos são todos do tipo `Number`:

```js
const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber);    // number
console.log(typeof decimalNumber);  // number
console.log(typeof negativeNumber); // number
```

O tipo `Number` inclui vários tipos de valores numéricos, que vão desde inteiros simples e números de ponto flutuante até casos especiais como `Infinity` e `NaN` ("Not a Number").

### Inteiros

Números inteiros são números completos, sem parte fracionária ou decimal. Podem ser positivos, negativos ou zero.

```js
const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero);            // number
```

### Números de ponto flutuante (floats)

Números de ponto flutuante são números com casas decimais. São úteis quando você precisa de mais precisão, como ao lidar com medidas ou moedas.

```js
const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat);        // number
console.log(typeof oneMoreFloat);        // number
```

### `Infinity`

O JavaScript pode representar números que estão além do limite máximo com `Infinity`. Você encontrará isso ao dividir um número por zero ou, em raras ocasiões, ao exceder o limite superior do tipo `Number`.

```js
const infiniteNumber = 1 / 0;
console.log(infiniteNumber);        // Infinity
console.log(typeof infiniteNumber); // number
```

### `NaN` (Not a Number)

Às vezes, algumas operações matemáticas não resultam em um número válido. Por exemplo, ao tentar realizar uma operação matemática em algo que não seja um número, você obterá `NaN`:

```js
const notANumber = 'hello world' / 2;
console.log(notANumber);        // NaN
console.log(typeof notANumber); // number
```

Observe que o tipo de `NaN` também é `Number`.

### Outras bases (binário, octal e hexadecimal)

Além do sistema decimal padrão (base 10), o JavaScript também suporta números em diferentes bases:

- **Binário** — base 2, usa apenas os dígitos `0` e `1`.
- **Octal** — base 8, usa os dígitos de `0` a `7`.
- **Hexadecimal** — base 16, usa os dígitos `0` a `9` e as letras `a` a `f`.

---

## Operadores aritméticos

O JavaScript fornece ferramentas para realizar operações aritméticas básicas (adição, subtração, multiplicação e divisão) e também mais complexas, como resto e exponenciação.

### Adição (`+`)

O operador de adição permite encontrar o total de dois ou mais números. Na adição, a ordem dos números não importa:

```js
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 + num2;
const result2 = num2 + num1;
const result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30
```

### Subtração (`-`)

Permite encontrar a diferença entre dois números:

```js
const difference = 10 - 5;
console.log(difference); // 5
```

Se um número menor vier primeiro, o resultado é negativo:

```js
const difference = 5 - 10;
console.log(difference); // -5
```

Você também pode usar variáveis:

```js
const num1 = 10;
const num2 = 5;
const result = num1 - num2;

console.log(result); // 5
```

### Multiplicação (`*`)

Usada para encontrar o produto de dois ou mais números. A ordem não importa:

```js
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 * num2;
const result2 = num2 * num1;
const result3 = num2 * num1 * num3;

console.log(result1); // 50
console.log(result2); // 50
console.log(result3); // 750
```

### Divisão (`/`)

O operador de divisão é uma barra (`/`), diferente do símbolo tradicional (`÷`). Aqui a ordem dos números **importa**:

```js
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 / num2;
const result2 = num2 / num1;
const result3 = num2 / num1 / num3;

console.log(result1); // 2
console.log(result2); // 0.5
console.log(result3); // 0.03333333333333333
```

Se você tentar dividir por zero, o JavaScript retorna `Infinity`:

```js
const result = 10 / 0;
console.log(result); // Infinity
```

### Resto (`%`)

O operador de resto retorna o que sobra após uma divisão:

```js
const num1 = 10;
const num2 = 3;
const remainder = num1 % num2;

console.log(remainder); // 1
```

### Misturando operadores

É possível misturar operadores em uma única expressão:

```js
const result = 10 + 5 * 2 - 8 / 4;
console.log(result); // 18
```

Quando você mistura diferentes operadores, o motor do JavaScript segue a **precedência de operadores** para determinar a ordem das operações (detalhada mais adiante).

---

## Números e strings: coerção de tipo

O JavaScript às vezes funciona de maneiras surpreendentes. Uma dessas surpresas ocorre ao misturar números e strings em cálculos. O operador `+` tem **dupla função**: ele lida tanto com a adição quanto com a concatenação de strings.

Quando você usa `+` com um número e uma string, o JavaScript trata ambos como strings e os junta:

```js
const result = 5 + '10';

console.log(result);        // "510"
console.log(typeof result); // string
```

Trocando a ordem de `5` e `'10'`:

```js
const result = '10' + 5;

console.log(result);        // "105"
console.log(typeof result); // string
```

O JavaScript vê uma string em `'10'` e converte o número `5` para string, concatenando-os. Isso é conhecido como **coerção de tipo** — quando um valor de um tipo é convertido em outro.

Com subtração, multiplicação ou divisão entre string e número, o JavaScript tenta converter a string em número antes de fazer a conta:

```js
const subtractionResult = '10' - 5;
console.log(subtractionResult);        // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult);        // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult);        // 10
console.log(typeof divisionResult); // number
```

Mas se a string não representar um número válido, a conversão falha e o resultado é `NaN`:

```js
const subtractionResult = 'abc' - 5;
console.log(subtractionResult);        // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = 'abc' * 2;
console.log(multiplicationResult);        // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = 'abc' / 2;
console.log(divisionResult);        // NaN
console.log(typeof divisionResult); // number
```

### Booleanos em operações matemáticas

O JavaScript trata booleanos como números: `true` vira `1` e `false` vira `0`.

```js
const result1 = true + 1;
console.log(result1);        // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2);        // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3);        // "Hellotrue"
console.log(typeof result3); // string
```

Nos dois primeiros, `true + 1` resultou em `2` e `false + 1` em `1`. No terceiro, o `+` com uma string concatena, então `true` é convertido para string.

### `null` e `undefined`

O JavaScript trata `null` como `0` e `undefined` como `NaN` em operações matemáticas:

```js
const result1 = null + 5;
console.log(result1);        // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2);        // NaN
console.log(typeof result2); // number
```

> Entender essas conversões automáticas é crucial para evitar bugs e escrever código robusto.

---

## Precedência de operadores

A precedência determina a ordem em que as operações são avaliadas. Operadores com precedência mais alta são avaliados antes dos de precedência mais baixa — assim como na matemática, onde multiplicação e divisão acontecem antes de adição e subtração.

### Precedência da multiplicação

```js
const result = 2 + 3 * 4;
console.log(result); // 14
```

Se fosse avaliado da esquerda para a direita, seria `2 + 3 = 5` e depois `5 * 4 = 20`. Mas como a multiplicação tem precedência maior, o JavaScript avalia `3 * 4` primeiro, resultando em `2 + 12 = 14`.

### Precedência da divisão

A divisão também tem precedência maior que adição e subtração:

```js
const result = 2 + 6 / 3;
console.log(result); // 4
```

O JavaScript avalia `6 / 3 = 2` primeiro e depois `2 + 2 = 4`.

### Usando parênteses para sobrescrever a precedência

Tudo que estiver dentro de parênteses é avaliado primeiro:

```js
const result = (2 + 3) * 4;
console.log(result); // 20
```

Os parênteses forçam `2 + 3` a ser avaliado primeiro, dando `20` em vez de `14`.

### Associatividade

Quando os operadores têm a **mesma** precedência, a associatividade define a direção da avaliação. Para a maioria dos operadores (como adição e multiplicação), é da esquerda para a direita:

```js
const result = 10 - 2 + 3;
console.log(result); // 11
```

Primeiro `10 - 2 = 8`, depois `8 + 3 = 11`.

Alguns operadores, como a atribuição (`=`), são associativos da direita para a esquerda:

```js
let a, b;
a = b = 5;

console.log(a);     // 5
console.log(b);     // 5
console.log(a + b); // 10
```

O JavaScript atribui `5` a `b` primeiro e, em seguida, atribui `b` a `a`.

### O operador de exponenciação (`**`)

A exponenciação também é associativa da direita para a esquerda:

```js
const result = 2 ** 3 ** 2;
console.log(result); // 512
```

Primeiro o JavaScript avalia `3 ** 2 = 9`, depois `2 ** 9 = 512`. Se fosse da esquerda para a direita, seria `2 ** 3 = 8` e depois `8 ** 2 = 64`.

---

## Operadores de incremento e decremento

Os operadores `++` e `--` permitem ajustar o valor de uma variável em `1`. Em vez de escrever `x = x + 1` ou `x = x - 1`, você pode usar `x++` ou `x--`.

Eles têm duas formas — **prefixa** e **posfixa** — e a diferença é **quando** o valor é atualizado.

- **Prefixo (`++x`)** — incrementa primeiro e depois retorna o novo valor.

```js
let x = 5;

console.log(++x); // 6
console.log(x);   // 6
```

- **Posfixo (`x++`)** — retorna o valor atual primeiro e depois incrementa.

```js
let y = 5;

console.log(y++); // 5
console.log(y);   // 6
```

O decremento funciona da mesma forma, mas diminui em `1`:

```js
let x = 5;
console.log(--x); // 4
console.log(x);   // 4

let y = 5;
console.log(y--); // 5
console.log(y);   // 4
```

A diferença se torna importante quando você usa o valor imediatamente em uma expressão:

```js
let a = 5;
let b = ++a;
console.log(b); // 6 (a foi incrementado ANTES da atribuição)

let c = 5;
let d = c++;
console.log(d); // 5 (c foi incrementado DEPOIS da atribuição)
```

Se precisar do valor atualizado imediatamente, use o **prefixo**. Se quiser o valor atual primeiro, use o **posfixo**.

---

## Operadores de atribuição composta

Todos os operadores aritméticos têm uma forma de atribuição composta. Eles combinam a operação e a atribuição em uma forma mais curta, como `x += y`, equivalente a `x = x + y` sem repetir o nome da variável.

Em vez de:

```js
let num = 5;
num = num + 2;

console.log(num); // 7
```

Você pode escrever:

```js
let num = 5;
num += 2;

console.log(num); // 7
```

### Atribuição de adição (`+=`)

```js
let total = 10;
total += 5;

console.log(total); // 15
```

### Atribuição de subtração (`-=`)

```js
let score = 20;
score -= 7;

console.log(score); // 13
```

### Atribuição de multiplicação (`*=`)

```js
let points = 5;
points *= 3;

console.log(points); // 15
```

### Atribuição de divisão (`/=`)

Divide o valor atual da variável pelo número especificado e reatribui o resultado:

```js
let amount = 20;
amount /= 4;

console.log(amount); // 5
```

### Atribuição bit a bit (`&=` e `|=`)

Em JavaScript, `&=` e `|=` são operadores de atribuição combinados com **operações bit a bit**. A ideia é:

```js
x &= y; // equivale a x = x & y
x |= y; // equivale a x = x | y
```

Mas antes é preciso entender o que `&` e `|` fazem.

#### AND bit a bit (`&`)

O JavaScript transforma os números em uma representação binária de **32 bits** e compara cada bit. O resultado é `1` somente quando **os dois bits são `1`**:

| A   | B   | A & B |
| --- | --- | ----- |
| 0   | 0   | 0     |
| 0   | 1   | 0     |
| 1   | 0   | 0     |
| 1   | 1   | 1     |

Por exemplo:

```js
let a = 12;
let b = 10;

console.log(a & b); // 8
```

Em binário:

```text
12 = 1100
10 = 1010
     ----
     1000 = 8
```

Usando `&=`:

```js
let a = 12;
a &= 10;

console.log(a); // 8
```

É exatamente o mesmo que `a = a & 10`.

#### OR bit a bit (`|`)

No OR, basta **um** dos bits ser `1` para o resultado ser `1`:

| A   | B   | A \| B |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

Exemplo:

```js
let a = 12;
let b = 10;

console.log(a | b); // 14
```

Em binário:

```text
12 = 1100
10 = 1010
     ----
     1110 = 14
```

Usando `|=`:

```js
let a = 12;
a |= 10;

console.log(a); // 14
```

Equivale a `a = a | 10`.

#### Uso prático: flags

Esses operadores aparecem bastante quando você quer armazenar **várias opções booleanas dentro de um único número**:

```js
const LER      = 1; // 001
const ESCREVER = 2; // 010
const EXECUTAR = 4; // 100
```

Podemos combinar permissões com `|=`:

```js
let permissoes = 0;

permissoes |= LER;
permissoes |= ESCREVER;

console.log(permissoes); // 3
```

Porque:

```text
000
001  ← LER
---
001

001
010  ← ESCREVER
---
011 = 3
```

E podemos verificar uma permissão usando `&`:

```js
if (permissoes & LER) {
    console.log("Pode ler");
}
```

Nesse caso:

```text
011  ← permissões
001  ← LER
---
001
```

O resultado é diferente de `0`, então a permissão existe.

**Resumo:**

- `&` → mantém `1` somente quando **os dois bits são `1`**.
- `|` → coloca `1` quando **pelo menos um dos bits é `1`**.
- `&=` e `|=` → fazem essas operações **e armazenam o resultado de volta na variável**.

Isso é especialmente útil para **flags, permissões, máscaras de bits e manipulação de dados em baixo nível**.

### Outros operadores de atribuição composta

Existe um operador de atribuição composta para cada operador aritmético. Além dos já vistos, também temos:

- **Resto (`%=`)** — divide a variável pelo número especificado e atribui o resto a ela.
- **Exponenciação (`**=`)** — eleva a variável à potência do número especificado e reatribui o resultado.

---

## Booleanos

Booleanos são um tipo de dado que possui apenas os valores `true` e `false`. Eles permitem que você faça algo com base em condições — por exemplo, decidir se alguém pode acessar um recurso no seu app.

```js
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
  console.log("You're old enough to drive"); // You're old enough to drive
} else {
  console.log("Sorry, you are not old enough to drive");
}
```

### Operadores de igualdade (`==` e `===`)

Para comparar dois valores, você pode usar o operador de igualdade (`==`) ou o de igualdade estrita (`===`). O resultado é sempre um booleano.

O operador de igualdade (`==`) faz **coerção de tipo** antes de comparar:

```js
console.log(5 == "5"); // true
```

O JavaScript converte a string `"5"` no número `5` e verifica se são iguais.

Já o operador de igualdade estrita (`===`) **não** faz coerção — compara tipo **e** valor:

```js
console.log(5 === '5'); // false
```

Como o tipo string não é o mesmo que o tipo number, o resultado é `false`.

### Operadores de desigualdade (`!=` e `!==`)

Para verificar se algo **não** é igual, use o operador de desigualdade (`!=`) ou o de desigualdade estrita (`!==`).

O operador de desigualdade (`!=`) faz coerção de tipo:

```js
console.log(5 != "5"); // false
```

A string `"5"` é convertida para número antes da comparação; como os valores ficam iguais, o resultado é `false`.

O operador de desigualdade estrita (`!==`) não faz coerção:

```js
console.log(5 !== "5"); // true
```

Como o número `5` não é do mesmo tipo que a string `"5"`, o resultado é `true`.

---

## Operadores unários

Operadores unários atuam em um **único** operando para realizar operações como conversão de tipo, manipulação de valor ou verificação de condições.

### Mais unário (`+`)

Converte o operando em número. Se já for número, permanece inalterado.

```js
const str = '42';
const strToNum = +str;

console.log(strToNum);        // 42
console.log(typeof str);      // string
console.log(typeof strToNum); // number
```

### Negação unária (`-`)

Funciona como o mais unário, mas inverte o sinal.

```js
const str = '42';
const strToNegativeNum = -str;

console.log(strToNegativeNum);        // -42
console.log(typeof str);              // string
console.log(typeof strToNegativeNum); // number
```

### NOT lógico (`!`)

Inverte o valor booleano do operando: `true` vira `false` e vice-versa.

```js
let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true
```

### NOT bit a bit (`~`)

Inverte a representação binária de um número (todos os `1` viram `0` e vice-versa).

```js
let a = 5;
console.log(~a); // -6
```

`~5` resulta em `-6` porque equivale a `-(5 + 1)`, devido à representação em **complemento de dois** (a forma que os computadores usam para representar números negativos em binário).

### `void`

Avalia uma expressão e retorna `undefined`.

```js
const result = void (2 + 2);
console.log(result); // undefined
```

Também é usado em hyperlinks para evitar a navegação:

```html
<a href="javascript:void(0);">Click Me</a>
```

### `typeof`

Retorna o tipo do operando como uma string.

```js
const value = 'Hello world';
console.log(typeof value); // string
```

---

## Bits e binário

Operadores bit a bit trabalham nas representações binárias dos números. Um **bit** é a unidade mais básica de informação e pode ter apenas dois valores: `0` ou `1`. **Binário** é um sistema numérico que usa apenas esses dois dígitos.

### Como funciona o binário

Por exemplo, a representação binária do número decimal `10` é `1010`. Cada dígito representa uma potência de 2, começando pelo dígito mais à direita:

| Binário  | 1   | 0   | 1   | 0   |
| -------- | --- | --- | --- | --- |
| Potência | 2³  | 2²  | 2¹  | 2⁰  |
| Valor    | 8   | 0   | 2   | 0   |

Somando os valores da última linha: `8 + 0 + 2 + 0 = 10`.

### Operadores bit a bit

O JavaScript fornece vários operadores bit a bit: AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), deslocamento à esquerda (`<<`) e deslocamento à direita (`>>`).

#### AND (`&`)

Retorna `1` em cada posição em que **ambos** os bits são `1`:

```js
let a = 5; // Binário: 101
let b = 3; // Binário: 011
console.log(a & b); // 1 (Binário: 001)
```

Apenas o bit mais à direita é `1` em ambos os números.

#### OR (`|`)

Retorna `1` em cada posição em que **pelo menos um** dos bits é `1`:

```js
let a = 5; // Binário: 101
let b = 3; // Binário: 011
console.log(a | b); // 7 (Binário: 111)
```

O resultado é `7` (`111`) porque cada posição tem pelo menos um `1`.

#### XOR (`^`)

Retorna `1` em cada posição em que os bits são **diferentes** (um `1` e um `0`):

```js
let a = 5; // Binário: 101
let b = 3; // Binário: 011
console.log(a ^ b); // 6 (Binário: 110)
```

O resultado é `6` (`110`) porque o **segundo e o terceiro** bits, da direita para a esquerda, são diferentes nos dois números (o bit mais à direita é `1` em ambos, então resulta em `0`).

#### NOT (`~`)

Inverte todos os bits do operando:

```js
let a = 5; // Binário: 101
console.log(~a); // -6
```

O resultado surpreende por causa da representação em complemento de dois para números negativos.

#### Deslocamento à esquerda (`<<`)

Desloca todos os bits para a esquerda por um número de posições, o que **multiplica** o número por 2 a cada deslocamento:

```js
let a = 5; // Binário: 101
console.log(a << 1); // 10 (Binário: 1010)
```

#### Deslocamento à direita (`>>`)

Desloca todos os bits para a direita, **dividindo** o número por 2 (arredondando para baixo):

```js
let a = 5; // Binário: 101
console.log(a >> 1); // 2 (Binário: 10)
```

---

## Estruturas condicionais

Instruções condicionais permitem tomar decisões no código, fazendo o programa seguir caminhos diferentes conforme certas condições. Vamos ver `if`, `else if`, `else` e o operador ternário.

### Valores truthy e falsy

Uma declaração `if` recebe uma condição e executa um bloco de código se ela for verdadeira.

**Valores truthy** são avaliados como `true` em um contexto booleano:

- strings não vazias (por exemplo, `"hello"`)
- qualquer número diferente de `0` e `-0` (por exemplo, `4`, `-5`)
- arrays
- objetos
- o booleano `true`

**Valores falsy** são avaliados como `false`. O JavaScript tem poucos, o que facilita memorizá-los:

- o booleano `false`
- `0` (zero)
- `""` (string vazia)
- `null`
- `undefined`
- `NaN` (Not a Number)

### A declaração `if`

```js
if (null) {
  console.log("This will not run.");
}

if ("freeCodeCamp") {
  console.log("This will run.");
}
```

Como `null` é falsy, o primeiro bloco nunca é executado. Já `"freeCodeCamp"` é truthy, então a segunda mensagem é registrada no console.

Usando um operador de comparação para verificar a elegibilidade para votar:

```js
const age = 22;

if (age >= 18) {
  console.log("You're eligible to vote"); // You're eligible to vote
}
```

Como `age` é `22` (maior ou igual a `18`), a condição é `true`. Se `age` fosse `15`, a condição seria `false` e nada seria registrado:

```js
const age = 15;

if (age >= 18) {
  console.log("You're eligible to vote"); // não executa: age é menor que 18
}
```

### A cláusula `else`

Quando a condição é `false`, o bloco `else` é executado:

```js
const age = 15;

if (age >= 18) {
  console.log("You're eligible to vote");
} else {
  console.log("You're not eligible to vote"); // You're not eligible to vote
}
```

### O bloco `else if`

Para verificar múltiplas condições, use `else if` — assim o programa pode escolher entre mais de dois caminhos:

```js
const score = 87;

if (score >= 90) {
  console.log('You got an A');
} else if (score >= 80) {
  console.log('You got a B'); // You got a B
} else if (score >= 70) {
  console.log('You got a C');
} else {
  console.log('You failed! You need to study more!');
}
```

Como `score` é `87`, a mensagem `You got a B` é registrada no console.

### O operador ternário

É uma forma compacta de escrever um `if/else` simples. Tem três partes: uma condição, um resultado se verdadeiro e um resultado se falso:

```js
condition ? expressionIfTrue : expressionIfFalse;
```

Exemplo com temperatura em Celsius:

```js
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
```

Se `temperature` for maior que `25`, registra `It's a sunny day!`. Caso contrário, registra `It's a cool day!`.
