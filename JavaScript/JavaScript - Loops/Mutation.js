/**
 * Arquivo: Mutation.js
 * Tema: Verificar se todas as letras de uma string aparecem em outra
 *
 * Conceitos praticados:
 * - mutation()            → recebe um array com duas strings e verifica se todas as letras da
 *                           segunda aparecem na primeira
 * - toLowerCase()         → padroniza firtSt e secondSt para comparar sem diferenciar
 *                           maiúsculas de minúsculas
 * - for...of + includes() → percorre secondSt e retorna false assim que uma letra não
 *                           está em firtSt (return dentro do loop)
 */

function mutation(array){
  let firtSt = array[0].toLowerCase();
  let secondSt = array[1].toLowerCase();
  let result;
  for(let char of secondSt){
    if(firtSt.includes(char)){
      result = true;
    }else{
      return false;
    }
  }
  return result;
}


console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["hello", "Hello"]));
