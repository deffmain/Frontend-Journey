//=============================================
// TIPOS DE DADOS
//=============================================

//Em JavaScript, o tipo do dado é definido pelo valor armazenado, como um número ou um texto.

let a = 10;        // tipo number
let b = "Olá";    // tipo string
let c = true;    // tipo boolean
let d = null;   // tipo null
let i;         // tipo undefined

// Observe que utilizamos variáveis para referenciar os valores.
// No exemplo, utilizamos as variáveis x e y para referenciar dados de dois tipos diferentes.
// JavaScript possui diversos tipos de dados que ajudam o programa a entender com quais tipos está trabalhando.

//=============================================
// VARIÁVEIS
//=============================================

/* Variáveis são contêineres nomeados que referenciam um valor de um tipo de dado específico.
   Em outras linguagens fortemente tipadas, como Java, devemos declarar explicitamente o tipo da variável em sua criação:
    - String nome = "Micael";
   Essas variáveis possuem um tipo fixo, não aceitando outros tipos de valores. */

// Em JavaScript, a tipagem é dinâmica, ou seja, é possível criar variáveis com um tipo e depois alterar para outro tipo.

let nome = "Micael"; // String
nome = 10;  // number

// Para trabalhar com variáveis, precisamos entender 3 palavras-chave utilizadas na declaração.

/* let: utilizado para declarar variáveis cujos valores podem ser atualizados ou reatribuidos posteriormente.
   Possui escopo de bloco e pode ser declarado sem inicialização. 
   Utilize let quando o valor precisar ser alterado ao longo do código. */

let numero = 10;        // number
let texto = "Olá";      // string
let ativo = true;       // boolean
let vazio = null;       // null
let indefinido;         // undefined

let contador;
contador = 1;
contador = 5;

/* const: utilizado para declarar variáveis com valor constante.
   Não podem ser reatribuídas e devem ser inicializadas na declaração.
   Também possuem escopo de bloco. 
   Utilize const quando o valor não deve mudar após a declaração. */

const numeroConst = 10;      // number
const textoConst = "Olá";    // string
const ativoConst = true;     // boolean
const vazioConst = null;     // null

// const velociade; // ❌ erro: precisa ser inicializada

const pi = 3.14;

// pi = 4; // ❌ erro: não é possível reatribuir

/* var: funciona de forma semelhante ao let, porém possui escopo de função (não de bloco), 
   o que pode causar comportamentos inesperados. Por isso, hoje em dia, seu uso é evitado. 
   Utilize var apenas em códigos legados ou quando houver necessidade específica. No desenvolvimento moderno, prefira let ou const.*/

var numeroVar = 10;        // number
var textoVar = "Olá";      // string
var ativoVar = true;       // boolean
var vazioVar = null;       // null
var indefinidoVar;         // undefined

var resultado;
resultado = 10;
resultado = 4.2;

//=============================================
// CONCLUSÃO
//=============================================

/* Os tipos de dados apresentados são os principais utilizados no dia a dia,
porém o JavaScript possui outros tipos mais complexos.

Um dos mais importantes são os objetos, que permitem armazenar múltiplos valores
em uma única variável, organizados em propriedades e métodos.

Objetos são amplamente utilizados para representar dados mais complexos e personalizados,
sendo fundamentais no desenvolvimento de aplicações reais.

Também é importante tomar cuidado ao declarar variáveis, utilizando nomes claros
e descritivos que representem bem o valor armazenado.

Exemplos:
- nomeUsuario ✔️
- idade ✔️
- x ❌
- a ❌

Variáveis ​​em JavaScript devem começar com uma letra, um sublinhado ( _) ou um cifrão ( $). 
Eles não podem começar com um número.
Nomes bem definidos tornam o código mais legível e fácil de manter. */

//=============================================
// OPERADORES
//=============================================

// Operadores são utilizados para realizar operações em variáveis e valores.
// Em JavaScript, dividimos os principais em: Aritméticos, Atribuição, Comparação e Lógicos.

// --- Operadores Aritméticos ---
// Usados para realizar cálculos matemáticos.

let soma = 10 + 5;           // Adição (+)
let subtracao = 10 - 5;      // Subtração (-)
let multiplicacao = 10 * 5;   // Multiplicação (*)
let divisao = 10 / 2;        // Divisão (/)
let resto = 10 % 3;          // Módulo (Resto da divisão: 1)
let exp = 2 ** 3;            // Exponenciação (2 elevado a 3: 8)

// --- Operadores de Atribuição ---
// Usados para atribuir valores às variáveis de forma simplificada.

let x = 10;
x += 5;   // O mesmo que x = x + 5 (Resultado: 15)
x -= 2;   // O mesmo que x = x - 2 (Resultado: 13)
x *= 2;   // O mesmo que x = x * 2 (Resultado: 26)

// --- Operadores de Comparação ---
// Retornam um valor booleano (true ou false).

// 

/* ATENÇÃO: Em JS, existe a diferença entre igualdade solta (==) e estrita (===).
   ==  : Compara apenas o valor (faz conversão automática de tipo).
   === : Compara o valor E o tipo do dado (Recomendado). */

console.log(5 == "5");  // true (converte a string para número)
console.log(5 === "5"); // false (tipos diferentes: number vs string)

let maior = 10 > 5;     // Maior que
let menor = 10 < 20;    // Menor que
let diferente = 10 !== 5; // Estritamente diferente

// --- Operadores Lógicos ---
// Usados para combinar condições booleanas.

/* && (E/AND): Retorna true apenas se TODAS as condições forem verdadeiras.
   || (OU/OR): Retorna true se pelo menos UMA condição for verdadeira.
   !  (NÃO/NOT): Inverte o valor booleano. */

let podeDirigir = (idade >= 18) && (temCarteira == true);
let vaiPraPraia = (estaSol == true) || (estaCalor == true);
let negacao = !true; // false