/**
 * Arquivo: WordCount.js
 * Tema: Loop for...of percorrendo uma string e um array
 *
 * Funções praticadas:
 * - printCharacters()     → percorre a string str com for...of e exibe cada caractere
 *                           no console
 * - getMatchedWordCount() → percorre o array sentence com for...of, soma 1 em count
 *                           (count++) a cada palavra igual a match (===) e exibe a
 *                           contagem parcial a cada passo; no fim, retorna count
 */

function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

function getMatchedWordCount(sentence, match) {
  let count = 0;
  
  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }
  
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"));
