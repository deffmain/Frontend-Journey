/**
 * Arquivo: StringTransformer.js
 * Tema: Substituição e repetição de conteúdo em strings
 *
 * Métodos praticados:
 * - replace()    → substitui a PRIMEIRA ocorrência de um trecho por outro
 *                  (busca e substituição fornecidos como parâmetros)
 * - replaceAll() → substitui TODAS as ocorrências de um trecho por outro
 * - repeat()     → retorna a string repetida N vezes (usado aqui com
 *                  trimEnd() para remover o espaço extra ao final)
 */

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);

