/**
 * Arquivo: AlphabetValid.js
 * Tema: Letra que falta numa sequência do alfabeto (loop for com índice)
 *
 * Conceitos praticados:
 * - fearNotLetter() → recebe uma sequência de letras e retorna a letra do alfabeto que
 *                     falta nela, ou undefined se não faltar nenhuma
 * - split("")       → transforma o alfabeto (alphabetR) e a entrada (alphabetArg) em
 *                     arrays de letras
 * - toLowerCase()   → padroniza a entrada em minúsculas antes de comparar
 * - indexOf()       → guarda em stPost a posição da primeira letra da entrada no alfabeto
 * - for + if / else → compara cada letra da entrada com alphabetR[stPost + i] e, na
 *                     primeira diferença, retorna a letra esperada (return dentro do loop)
 */

function fearNotLetter(alphabet){
  let alphabetR = "abcdefghijklmnopqrstuvwxyz".split("");
  let alphabetArg = alphabet.toLowerCase().split("");
  let stPost = alphabetR.indexOf(alphabetArg[0]);

  for(let i = 0; i < alphabet.length; i++){
    if(alphabetArg[i] === alphabetR[stPost + i]){
    }else{
        return alphabetR[stPost + i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdgh"));
console.log(fearNotLetter("mlnoq"));
