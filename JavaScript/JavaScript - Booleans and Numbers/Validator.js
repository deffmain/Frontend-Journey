/**
 * Arquivo: Validator.js
 * Tema: Estruturas condicionais e valores booleanos
 *
 * Conceitos praticados:
 * - Booleanos (true/false) → usados diretamente como condição
 * - if                     → executa o bloco somente quando a condição é verdadeira
 * - if/else                → executa um bloco quando verdadeiro e outro quando falso
 * - Operador de comparação (>=) → compara dois valores e produz um booleano
 *                                (aqui: verifica se timmyAge é maior ou igual a 16)
 */


const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 15;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}