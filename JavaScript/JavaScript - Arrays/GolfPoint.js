/**
 * Arquivo: GolfPoint.js
 * Tema: Pontuação de golfe com cadeia if/else if
 *
 * Conceitos praticados:
 * - Função com parâmetros    → golfScore(par, strokes) recebe o par do buraco e as tacadas
 * - if / else if             → testa as faixas de pontuação, da melhor para a pior
 * - Operadores de comparação → === (igualdade estrita), <= e >= comparam strokes com o par
 * - Expressões aritméticas   → par - 2, par - 1, par + 1... definem cada faixa
 * - return                   → devolve o nome da pontuação encontrada
 *
 * Tabela de pontuação:
 *   strokes === 1       → "Hole-in-one!"
 *   strokes <= par - 2  → "Eagle"
 *   strokes === par - 1 → "Birdie"
 *   strokes === par     → "Par"
 *   strokes === par + 1 → "Bogey"
 *   strokes === par + 2 → "Double Bogey"
 *   strokes >= par + 3  → "Go Home!"
 */



function golfScore(par, strokes){
 
  if(strokes === 1){
    return "Hole-in-one!";
  }else if(strokes <=(par -2)){
    return "Eagle";
  }else if(strokes === (par -1)){
    return "Birdie";
  }else if(strokes === par){
    return "Par";
  }else if(strokes === (par+1)){
    return "Bogey";
  }else if(strokes === (par+2)){
    return "Double Bogey";
  }else if(strokes >= (par+3)){
    return "Go Home!";
  }
}

console.log(golfScore(1,1));
console.log(golfScore(3,1));
console.log(golfScore(4,1));
console.log(golfScore(5,1));
console.log(golfScore(4,2));
console.log(golfScore(5,2));
console.log(golfScore(3,2));
console.log(golfScore(4,3));
console.log(golfScore(5,4));
console.log(golfScore(3,3));
console.log(golfScore(4,4));
