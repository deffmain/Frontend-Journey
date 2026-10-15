/**
 * Arquivo: LongestWord.js
 * Tema: Tamanho da palavra mais longa de uma frase
 *
 * Conceitos praticados:
 * - findLongestWordLength() → recebe uma frase e retorna o tamanho da sua maior palavra
 * - split(" ")              → divide a frase no array words, uma palavra por item
 * - for...of + if           → percorre words e guarda em longestWordLength o maior length
 *                             encontrado até o momento
 */

function findLongestWordLength(string){

  let words = string.split(" ");

  let longestWordLength = 0;

  for(let char of words){
    if(char.length >= longestWordLength){
      longestWordLength = char.length;
    }
  }
  return longestWordLength;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
