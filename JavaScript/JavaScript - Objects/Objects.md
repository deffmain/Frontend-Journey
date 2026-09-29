# JavaScript — Objetos

> Anotações práticas sobre objetos: criação, acesso a propriedades (notação de ponto e de colchetes), remoção de propriedades, verificação de existência e acesso a objetos aninhados e a arrays dentro de objetos.

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
