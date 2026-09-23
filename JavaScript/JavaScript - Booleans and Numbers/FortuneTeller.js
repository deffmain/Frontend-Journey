/**
 * Arquivo: FortuneTeller.js
 * Tema: Seleção aleatória com número aleatório e cadeia if/else if/else
 *
 * Conceitos praticados:
 * - Math.random() + Math.ceil() → gera um número aleatório para sortear a sorte
 * - if / else if / else         → escolhe uma das mensagens conforme o número sorteado
 * - Operador de igualdade (==)  → compara o número sorteado com cada caso
 * - let                         → selectedFortune recebe a mensagem escolhida
 */



const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon."
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.ceil(Math.random() * (5)+1);

let selectedFortune;

 if(randomNumber == 1){
  selectedFortune = fortune1;
}else if(randomNumber == 2){
  selectedFortune = fortune2;
}else if(randomNumber == 3){
  selectedFortune = fortune3;
}else if(randomNumber == 4){
  selectedFortune = fortune4;
}else{
  selectedFortune = fortune5;
};

console.log(selectedFortune);