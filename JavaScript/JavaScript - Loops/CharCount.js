/**
 * Arquivo: CharCount.js
 * Tema: Contagem de vogais, consoantes, pontuação e palavras numa frase
 *
 * Funções praticadas:
 * - getVowelCount()       → percorre a frase em minúsculas com for...of e soma 1 em count
 *                           para cada caractere que está em vowels (includes())
 * - getConsonantCount()   → mesma técnica, comparando com a string consonants
 * - getPunctuationCount() → percorre a frase com for...of e conta os caracteres que estão
 *                           em punctuations (includes())
 * - getWordCount()        → retorna 0 para frase vazia ou só com espaços; senão, divide a
 *                           frase com trim() e split(" ") e conta, com for...of, os itens
 *                           que não são string vazia
 */

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }
  
  const words = sentence.trim().split(" ");
  let count = 0;

  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

let wordCount = getWordCount("I love freeCodeCamp");

console.log(`Word Count: ${wordCount}`);
