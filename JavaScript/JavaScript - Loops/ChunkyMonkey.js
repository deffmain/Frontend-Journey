/**
 * Arquivo: ChunkyMonkey.js
 * Tema: Dividir um array em grupos de tamanho fixo (loop for com passo)
 *
 * Conceitos praticados:
 * - chunkArrayInGroups() → recebe um array e um tamanho num e retorna um array
 *                          bidimensional (divided) com os grupos
 * - for com i += num     → avança o índice de num em num, um passo por grupo
 * - slice()              → copia de array o trecho de i até num + i (exclusivo)
 * - push()               → adiciona cada grupo ao final de divided
 */

function chunkArrayInGroups(array, num){
  const divided = [];

  for(let i = 0; i<array.length; i+=num){
    divided.push(array.slice(i, num + i));
  }
  return divided;
}


const array = ["a","b","c","d","e"];

console.log(chunkArrayInGroups(array, 2));
