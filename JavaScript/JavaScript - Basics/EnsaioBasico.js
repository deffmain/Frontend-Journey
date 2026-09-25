/**
 * Arquivo: EnsaioBasico.js
 * Tema: Primeiros passos — variáveis, concatenação e saída no console
 *
 * Conceitos praticados:
 * - let              → declaração de variáveis que podem ser reatribuídas
 *                      (a variável codingFact recebe novos valores ao longo do código)
 * - Concatenação (+) → junção de strings com o operador +
 * - console.log()    → exibe mensagens no console
 */

console.log("Hello! I'm your coding fun fact guide!");
let botName = "Bendy";
let botLocation = "Ouro-verde";
let favoriteLanguage = "Java";

console.log("My name is " + botName +" and I live on " + botLocation+"." );
console.log("My favorite programming language is "+favoriteLanguage+".");
 let codingFact = favoriteLanguage +" foi utilizado para a criação do minecraft";

console.log(codingFact);

codingFact = favoriteLanguage + " é uma linguagem muito utilizada para fazer APIS no padrão REST";

console.log(codingFact);

codingFact = favoriteLanguage + " é uma linguagem fortemente tipada";

console.log(codingFact);

console.log("It was fun sharing these facts with you. Goodbye! - "+botName +" from " + botLocation+".");
