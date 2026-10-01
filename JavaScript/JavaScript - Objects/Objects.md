# JavaScript — Objetos

> Anotações práticas sobre objetos: criação, acesso a propriedades (notação de ponto e de colchetes), remoção de propriedades, verificação de existência, acesso a objetos aninhados e a arrays dentro de objetos, tipos primitivos e não primitivos, funções e métodos de objeto, JSON (`JSON.stringify()` e `JSON.parse()`), encadeamento opcional (`?.`) e desestruturação de objetos.

---

## O que é um objeto

Em JavaScript, um objeto é uma estrutura de dados fundamental que permite armazenar e organizar dados e funcionalidades relacionadas. Pense nele como um recipiente com várias informações, assim como um arquivo guarda diferentes pastas e documentos.

Essas informações são chamadas de **propriedades** e são formadas por um **nome** (ou chave) e um **valor**. A sintaxe geral é:

```js
const exampleObject = {
  propertyName: value,
};
```

Objetos são muito versáteis e formam a espinha dorsal do JavaScript. Quase tudo na linguagem é um objeto ou pode ser tratado como um, incluindo arrays, funções e até tipos primitivos como strings e números, quando usados de certas maneiras. Essa natureza centrada em objetos é uma das razões pelas quais o JavaScript é tão flexível e poderoso.

### Criando um objeto

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
```

Aqui criamos o objeto `person` com três propriedades: `name`, `age` e `city`. Cada propriedade tem um nome e um valor, separados por dois-pontos.

Objetos podem guardar não apenas valores simples, como strings e números, mas também arrays e outros objetos (veja [Objetos aninhados e arrays dentro de objetos](#objetos-aninhados-e-arrays-dentro-de-objetos)).

---

## Acessando propriedades

Existem duas maneiras principais de acessar as propriedades de um objeto: a **notação de ponto** e a **notação de colchetes**.

### Notação de ponto

É a forma mais comum e direta. A sintaxe é:

```js
objectName.propertyName
```

Com o objeto `person`:

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name); // Alice
console.log(person.age);  // 30
```

A notação de ponto é concisa e fácil de ler. É a escolha preferida quando você sabe o nome exato da propriedade e esse nome é um **identificador válido** em JavaScript: não começa com número e contém apenas letras, números, `_` ou `$`, sem espaços nem outros caracteres especiais.

### Notação de colchetes

Permite acessar propriedades usando uma **string** dentro de colchetes:

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person["name"]); // Alice
console.log(person["age"]);  // 30
```

Ela é mais flexível que a notação de ponto porque aceita nomes que **não** são identificadores válidos, como nomes com espaços ou que começam com número:

```js
const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);          // Hello
console.log(oddObject["property with spaces"]); // World
```

### Acesso dinâmico com variáveis

Outra vantagem da notação de colchetes é poder usar **variáveis** para acessar propriedades dinamicamente:

```js
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let propertyName = "city";
console.log(person[propertyName]); // Wonderland
```

Isso é útil quando você não sabe o nome exato da propriedade ao escrever o código, ou quando o nome vem de uma entrada do usuário ou de outra fonte dinâmica.

### Resumo

| Notação    | Exemplo           | Quando usar                                                          |
| ---------- | ----------------- | -------------------------------------------------------------------- |
| Ponto      | `person.name`     | O nome é conhecido e é um identificador válido                       |
| Colchetes  | `person["name"]`  | O nome tem espaços, começa com número ou está guardado numa variável |

---

## Removendo propriedades

### Operador `delete`

É a forma mais direta e comum de remover uma propriedade:

```js
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined
```

Depois do `delete`, o objeto `person` não possui mais a propriedade `job`, e acessá-la retorna `undefined`.

### Desestruturação com rest

Outra forma é usar a **atribuição por desestruturação** com a sintaxe rest (`...`). Essa abordagem não exclui a propriedade do objeto original: ela cria um **novo objeto** sem as propriedades especificadas:

```js
const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person;

console.log(remainingProperties); // { name: "Bob", age: 25 }
```

`job` e `city` são extraídas para variáveis próprias, e o restante vai para o novo objeto `remainingProperties`. O objeto `person` continua **intacto**, com as quatro propriedades.

---

## Verificando se uma propriedade existe

Saber verificar se um objeto possui uma propriedade é importante principalmente ao lidar com dados de fontes externas, ou quando é preciso garantir que certas propriedades existam antes de usá-las. Veremos quatro abordagens: o método `hasOwnProperty()`, o método `Object.hasOwn()`, o operador `in` e a comparação com `undefined`.

### `hasOwnProperty()`

Retorna um booleano indicando se o objeto possui a propriedade especificada como **propriedade própria**:

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job"));  // false
```

`name` existe no objeto, então o resultado é `true`. `job` não existe, então o resultado é `false`.

### `Object.hasOwn()`

É a forma **moderna e recomendada** de verificar se um objeto possui uma propriedade própria (não herdada). Pense nele como uma versão atualizada e mais segura do `hasOwnProperty()`: ele funciona até em objetos que não têm o método `hasOwnProperty`, como os criados com `Object.create(null)`.

A sintaxe é `Object.hasOwn(objeto, nomeDaPropriedade)`: o objeto é o primeiro argumento e o nome da propriedade, o segundo.

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "job"));  // false
```

#### Ele verifica a existência, não o valor

`Object.hasOwn()` só verifica se a propriedade **existe**. Ele não se importa com o valor dela, então retorna `true` mesmo quando o valor é `0`, `false`, `null` ou `undefined`:

```js
const user = {
  username: "coder123",
  score: 0,
  isActive: false,
  nickname: null
};

// Object.hasOwn() informa corretamente que todas existem
console.log(Object.hasOwn(user, "score"));    // true  (o valor é 0, mas a propriedade existe)
console.log(Object.hasOwn(user, "isActive")); // true  (o valor é false, mas a propriedade existe)
console.log(Object.hasOwn(user, "nickname")); // true  (o valor é null, mas a propriedade existe)
console.log(Object.hasOwn(user, "email"));    // false (a propriedade nunca foi adicionada)

// Perigo! Usar o valor direto no if() dá resultado errado para valores falsy
if (user.score) {
  console.log("Has score"); // NÃO é exibido, mesmo com a propriedade existindo!
}

// Seguro! Object.hasOwn() dá o resultado correto
if (Object.hasOwn(user, "score")) {
  console.log("Has score:", user.score); // Has score: 0
}
```

### Operador `in`

O operador `in` retorna `true` se a propriedade existir no objeto:

```js
const person = {
  name: "Bob",
  age: 25
};

console.log("name" in person); // true
```

> Diferença importante: ao contrário de `hasOwnProperty()` e `Object.hasOwn()`, o operador `in` também considera as propriedades **herdadas**. Por isso, `"toString" in person` retorna `true`, embora `toString` não tenha sido declarada no objeto. Ela vem do protótipo, que todo objeto comum herda.

### Comparando com `undefined`

A quarta abordagem é verificar se o valor da propriedade é diferente de `undefined`:

```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false
```

Isso funciona porque acessar uma propriedade inexistente retorna `undefined`. Mas essa abordagem pode gerar **falsos negativos**: se a propriedade existir com o valor `undefined`, a comparação dirá que ela não existe.

### Resumo

| Abordagem                   | Considera propriedades herdadas? | Propriedade com valor `undefined` |
| --------------------------- | -------------------------------- | --------------------------------- |
| `obj.hasOwnProperty("p")`   | Não                              | `true` (existe)                   |
| `Object.hasOwn(obj, "p")`   | Não                              | `true` (existe)                   |
| `"p" in obj`                | Sim                              | `true` (existe)                   |
| `obj.p !== undefined`       | Sim                              | `false` (falso negativo)          |

---

## Objetos aninhados e arrays dentro de objetos

Em JavaScript é comum encontrar estruturas de dados complexas, com objetos dentro de objetos e arrays dentro de objetos. Essas estruturas representam dados ricos e hierárquicos, mas exigem clareza sobre como acessar e manipular o que está dentro delas.

### Acessando objetos aninhados

Usamos a notação de ponto ou de colchetes, como em objetos simples, mas **encadeando** os acessos até chegar ao valor desejado. Considere um objeto que representa uma pessoa com informações de contato:

```js
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};
```

Para acessar o telefone comercial de Alice, encadeamos os acessos com a notação de ponto:

```js
console.log(person.contact.phone.work); // "098-765-4321"
```

Também é possível usar a notação de colchetes, útil quando os nomes têm espaços ou caracteres especiais, ou quando vêm de variáveis:

```js
console.log(person["contact"]["phone"]["work"]); // "098-765-4321"
```

### Arrays dentro de objetos

Agora, um objeto `person` em que uma das propriedades tem um array como valor:

```js
const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};
```

Para acessar a cidade do endereço de trabalho de Alice:

```js
console.log(person.addresses[1].city); // "Workville"
```

`person.addresses` é o array de endereços. Com a notação de colchetes e o índice `1`, acessamos o segundo endereço desse array. Depois, com a notação de ponto, acessamos a propriedade `city` desse objeto.

---

## Tipos primitivos e não primitivos

Em JavaScript, entender a diferença entre tipos de dados primitivos e não primitivos é importante para escrever código eficiente e livre de bugs.

Essas duas categorias de tipos de dados se comportam de maneira diferente em termos de como são armazenadas na memória e como são manipuladas em seus programas.

### Tipos primitivos

Tipos de dados primitivos são a forma mais simples de dados em JavaScript. Eles incluem número, bigint, string, booleano, `null`, `undefined` e symbol. Esses tipos são chamados de "primitivos" porque representam valores únicos e não são objetos.

Quando você trabalha com tipos de dados primitivos, você está lidando diretamente com seus valores. Por exemplo, quando você cria uma variável com um valor primitivo, esse valor é armazenado diretamente na variável.

Valores primitivos são imutáveis, o que significa que, uma vez criados, seu valor não pode ser alterado. No entanto, você pode reatribuir um novo valor à variável. Aqui está um exemplo de como trabalhar com tipos de dados primitivos:

```js
let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num2); // 5
```

Neste exemplo, estamos atribuindo um valor primitivo (`5`) de `num1` para `num2`. Isso cria uma cópia independente do valor. Como resultado, quaisquer alterações feitas na variável original (`num1`) não afetam a cópia (`num2`).

### Tipos não primitivos

Tipos de dados não primitivos, por outro lado, são mais complexos. Em JavaScript, estes são objetos, que incluem objetos regulares, arrays e funções. Ao contrário dos tipos primitivos, os tipos não primitivos podem conter múltiplos valores como propriedades ou elementos.

Quando você cria uma variável com um valor não primitivo, o que é armazenado na variável é na verdade uma referência para o local na memória onde o objeto está armazenado, não o próprio objeto. Isso leva a algumas diferenças importantes no comportamento. Aqui está um exemplo com tipos não primitivos:

```js
const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31
```

Neste exemplo temos um objeto chamado `originalPerson` com duas propriedades, `name` e `age`. Em seguida, atribuímos o objeto `originalPerson` a uma variável chamada `copiedPerson`.

Então atualizamos o valor de `age` no objeto `originalPerson`. Quando registramos a propriedade `age` do objeto `copiedPerson`, ele mostra o valor atualizado.

Mas por que isso está acontecendo? Isso ocorre porque tanto `originalPerson` quanto `copiedPerson` estão referenciando o mesmo objeto na memória.

Em JavaScript, quando você atribui um objeto a outra variável, você está copiando a referência para o objeto, não o próprio objeto. Isso é conhecido como cópia por referência: nenhum objeto novo é criado. Como resultado, quaisquer alterações feitas no objeto através de uma referência são refletidas em todas as referências a esse objeto.

> Não confunda com **cópia superficial** (shallow copy): ela cria um objeto novo, como `{ ...originalPerson }`, copiando só o primeiro nível de propriedades. Já a atribuição não copia o objeto: as duas variáveis apontam para o mesmo objeto, e `originalPerson === copiedPerson` é `true`.

---

## Funções e métodos de objeto

Em JavaScript, funções e métodos de objeto são duas formas de encapsular código reutilizável, mas eles têm algumas diferenças principais em como são definidos, usados e no contexto em que operam. Entender essas diferenças é crucial para escrever um código JavaScript eficaz e organizado.

### Funções

Como você aprendeu em módulos anteriores, funções são blocos reutilizáveis de código que executam uma tarefa específica:

```js
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"
```

### Métodos

Métodos de objeto, por outro lado, são funções que estão associadas a um objeto. Eles são definidos como propriedades de um objeto e podem acessar e manipular os dados do objeto. Aqui está um exemplo de um objeto com um método:

```js
const person = {
  name: "Bob",
  age: 30,
  sayHello: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.sayHello()); // "Hello, my name is Bob"
```

Neste exemplo, `sayHello` é um método do objeto `person`. A palavra-chave `this` permite que o método `sayHello` acesse as propriedades do objeto `person`. Você aprenderá mais sobre a palavra-chave `this` em lições futuras.

### Diferenças

Uma diferença entre funções e métodos é como eles são invocados. Funções são chamadas pelo seu nome, enquanto métodos são chamados usando a notação de ponto no objeto ao qual pertencem. Por exemplo, chamamos a função `greet` como `greet("Alice")`, mas chamamos o método `sayHello` como `person.sayHello()`.

Outra diferença importante é o contexto em que eles operam. Funções regulares têm seu próprio escopo, mas não possuem uma referência embutida a nenhum objeto específico. Métodos, no entanto, estão vinculados ao seu objeto e podem acessar suas propriedades e outros métodos usando a palavra-chave `this`.

Um ponto chave a notar é que métodos ajudam a organizar o código em objetos lógicos, enquanto funções são usadas para código mais geral e reutilizável.

---

## JSON

JSON é uma abreviação de JavaScript Object Notation. É um formato de dados leve baseado em texto que é comumente usado para trocar dados entre um servidor e uma aplicação web.

Uma das razões pelas quais JSON é tão popular no desenvolvimento web é porque ele é tanto legível por máquina quanto por humanos.

Como JSON é independente de linguagem, você pode facilmente enviar dados JSON de uma aplicação Java para uma aplicação Python ou de uma aplicação JavaScript para uma aplicação C#.

JSON suporta muitos tipos de dados, incluindo objetos, arrays, strings, booleanos, `null` e números.

Aqui está um exemplo de um objeto JSON:

```json
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}
```

Como você pode ver, JSON usa pares chave-valor para armazenar informações e cada par é separado por uma vírgula. Cada chave deve estar entre aspas duplas, caso contrário você receberá um erro.

### Acessando valores com notação de ponto e de colchetes

Para acessar dados de um objeto JSON, você pode usar a notação de ponto ou colchetes. Neste exemplo, estamos usando a notação de ponto para acessar o `age` do objeto JSON (o objeto acima, salvo no arquivo `example.json`):

```js
import data from "./example.json" with { type: "json" };

console.log(data.age); // 30
```

Este exemplo específico está usando o que é conhecido como uma declaração `import`, que importa o objeto JSON para este arquivo para que tenhamos acesso a ele. Você aprenderá mais sobre a declaração `import` em uma lição futura.

Você também pode usar a notação de colchetes para acessar informações de objetos JSON. Aqui está um exemplo de como acessar o array `list of courses`:

```js
import data from "./example.json" with { type: "json" };

console.log(data["list of courses"]); // ["Mathematics", "Physics", "Computer Science"]
```

Usar a notação de colchetes é particularmente útil aqui porque a chave contém múltiplas palavras separadas por espaços. Se tentássemos usar notação de ponto, isso resultaria em um erro.

Em resumo, JSON é um formato versátil que pode armazenar muitos tipos de dados, incluindo arrays e objetos aninhados. Usando notação de ponto ou notação de colchetes, você pode acessar facilmente os valores armazenados dentro de um objeto JSON.

---

## `JSON.stringify()` e `JSON.parse()`

Existem dois métodos poderosos em JavaScript para manipular dados JSON: `JSON.parse()` e `JSON.stringify()`. Esses métodos são comumente usados para converter entre strings JSON e objetos JavaScript.

### `JSON.stringify()` — objeto para string JSON

`JSON.stringify()` é usado para converter um objeto JavaScript em uma string JSON. Isso é útil quando você quer armazenar ou transmitir dados em um formato que pode ser facilmente compartilhado ou transferido entre sistemas.

Aqui está como você pode usar o método `JSON.stringify()`:

```js
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"John","age":30,"isAdmin":true}
```

#### O parâmetro `replacer`

O método `JSON.stringify()` também aceita um parâmetro opcional chamado `replacer`, que pode ser uma função ou um array. Aqui está um exemplo de uso de um array para o parâmetro opcional `replacer`:

```js
const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

// resultado: {"firstName":"Jessica","country":"USA"}
console.log(JSON.stringify(developerObj, ["firstName", "country"]));
```

Neste exemplo, temos um `developerObj` com quatro propriedades. Quando usamos o método `JSON.stringify()`, podemos passar um array como segundo parâmetro e especificar quais propriedades queremos converter em string. O resultado será um objeto convertido em string contendo apenas as propriedades `firstName` e `country`.

#### O parâmetro `space`

Outro parâmetro opcional para o método `JSON.stringify()` é o parâmetro `space`. Isso permite que você controle o espaçamento para o resultado convertido em string. Com o mesmo `developerObj`:

```js
console.log(JSON.stringify(developerObj, null, 2));

/* resultado
{
  "firstName": "Jessica",
  "isAwesome": true,
  "isMusician": true,
  "country": "USA"
}
*/
```

Na maioria das vezes você não usará nenhum desses parâmetros opcionais para o método `JSON.stringify()`, mas ainda é útil estar ciente deles.

### `JSON.parse()` — string JSON para objeto

Outro método que você vai usar muito na sua programação é o método `JSON.parse()`. O `JSON.parse()` converte uma string JSON de volta para um objeto JavaScript. Isso é útil quando você recupera dados JSON de um servidor web ou do `localStorage` e precisa manipular esses dados na sua aplicação. Você vai aprender mais sobre `localStorage` em uma lição futura.

Aqui está um exemplo de como trabalhar com o método `JSON.parse()`:

```js
const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

// Resultado:
// { name: 'John', age: 30, isAdmin: true }
```

Isso permite que você trabalhe com os dados no seu programa como um objeto JavaScript normal, facilitando a manipulação e o uso.

---

## Encadeamento opcional (`?.`)

O operador de encadeamento opcional (`?.`) é uma ferramenta útil em JavaScript que permite acessar propriedades de objetos ou chamar métodos com segurança sem se preocupar se eles existem. É como uma rede de segurança para trabalhar com objetos que podem ter partes faltando.

```js
const person = {
  name: "Alice",
  age: 30
};

console.log(person.name); // "Alice"
console.log(person.job);  // undefined
```

Neste exemplo, `person.name` existe, então ele registra `Alice`. Mas `person.job` não existe, então ele nos retorna `undefined`.

### O problema: propriedade de algo que não existe

Agora, digamos que queremos acessar uma propriedade de um objeto que pode não existir. Com o mesmo `person`:

```js
console.log(person.address.street); // Isto lança um erro!
```

Este exemplo lançará um `Uncaught TypeError`. Como `person.address` é `undefined`, não conseguimos acessar a propriedade `street`.

### Usando o `?.`

É aqui que o operador de encadeamento opcional é útil. Aqui está um exemplo de uso do operador optional chaining:

```js
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street); // "123 Main St"
console.log(user?.profile?.phone?.number);   // undefined
```

Ao usar o operador de encadeamento opcional, estamos dizendo ao JavaScript para continuar com a operação somente se o objeto (ou o valor antes do `?.`) existir e não for `null` ou `undefined`.

Se o valor antes do `?.` for `null` ou `undefined`, o JavaScript retorna `undefined` em vez de tentar prosseguir com a operação e lançar um erro.

Aplicando ao exemplo que dava erro:

```js
console.log(person.address?.street); // undefined
```

---

## Desestruturação de objetos

A desestruturação de objetos é um recurso poderoso em JavaScript que permite extrair valores de objetos e atribuí-los a variáveis de uma forma mais concisa e legível.

Faz parte da especificação ES6 (ECMAScript 2015) e se tornou uma ferramenta essencial para muitos desenvolvedores JavaScript.

A desestruturação pode simplificar seu código, especialmente ao trabalhar com objetos complexos quando você precisa extrair múltiplos valores de uma vez.

No seu núcleo, a desestruturação de objetos consiste em desempacotar valores de objetos em variáveis distintas. Em vez de acessar as propriedades do objeto uma por uma, você pode extrair múltiplas propriedades em uma única instrução. Isso pode tornar seu código mais limpo e eficiente.

Vamos começar com um exemplo para ilustrar como a desestruturação de objetos funciona:

```js
const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30
```

Neste exemplo, estamos extraindo as propriedades `name` e `age` do objeto `person` e atribuindo-as a variáveis com os mesmos nomes.

### Renomeando as variáveis

Um dos aspectos poderosos da desestruturação de objetos é que você pode atribuir os valores extraídos a variáveis com nomes diferentes. Isso é particularmente útil quando você está trabalhando com objetos que têm nomes de propriedades que podem entrar em conflito com variáveis existentes ou quando você quer usar um nome diferente:

```js
let person = { name: "Alice", age: 30, city: "New York" };

let { name: personName, age: personAge } = person;

console.log(personName); // Alice
console.log(personAge);  // 30
```

Neste caso, estamos extraindo a propriedade `name` e atribuindo-a a uma variável chamada `personName` e fazendo o mesmo com `age` e `personAge`.

### Valores padrão

A desestruturação de objetos também permite que você defina valores padrão. Se uma propriedade não existir no objeto que você está desestruturando, você pode especificar um valor padrão:

```js
let person = { name: "Alice", age: 30, city: "New York" };
let { name, age, country = "Unknown" } = person;

console.log(country); // Unknown
```

Aqui, como `country` não existe no nosso objeto `person`, ele recebe o valor padrão `Unknown`.

### Objetos aninhados

Outro caso comum é a desestruturação de objetos aninhados. Você pode desestruturar propriedades aninhadas dentro de outros objetos usando outro conjunto de chaves:

```js
const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};

// Extrai `flour` de `ingredients`
const { ingredients: { flour } } = recipe;

console.log(flour); // "2 cups"
```

Isto é equivalente a acessar a propriedade diretamente:

```js
const flour = recipe.ingredients.flour;
console.log(flour); // "2 cups"
```

> Repare: na desestruturação aninhada, só `flour` vira variável. `ingredients` serve apenas de caminho, então `console.log(ingredients)` lança `ReferenceError: ingredients is not defined`.

### Notação abreviada de propriedades

Agora, vamos falar sobre a notação abreviada de propriedades (shorthand). Ela não faz parte da desestruturação: é o caminho inverso dela. Em vez de extrair valores de um objeto para variáveis, ela monta um objeto a partir de variáveis. Quando você está criando objetos, especialmente quando os nomes das propriedades correspondem aos nomes das variáveis, você pode usar uma sintaxe abreviada:

```js
let name = "Bob";
let age = 25;

let person = { name, age };

console.log(person); // { name: "Bob", age: 25 }
```

O código acima cria propriedades com o mesmo nome das nossas variáveis e atribui a elas os valores dessas variáveis. Ou seja, `{ name, age }` é o mesmo que `{ name: name, age: age }`.

Esta notação abreviada é particularmente útil quando você está retornando objetos de funções ou criando objetos com múltiplas propriedades:

```js
function createPerson(name, age) {
  return { name, age };
}

let person = createPerson("Charlie", 35);
console.log(person); // { name: "Charlie", age: 35 }
```

A desestruturação de objetos e a notação abreviada de objetos são recursos poderosos que podem tornar seu código mais conciso e fácil de ler.

Elas são especialmente úteis ao trabalhar com estruturas de dados complexas ou quando você precisa passar múltiplos parâmetros para funções.
