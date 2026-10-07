/**
 * Arquivo: QuizGame.js
 * Tema: Jogo de perguntas — array de objetos e escolhas aleatórias
 *
 * Funções praticadas:
 * - getRandomQuestion()       → sorteia uma pergunta do array recebido com Math.random()
 *                               e Math.floor()
 * - getRandomComputerChoice() → sorteia uma das alternativas (choices) para o computador
 *                               com Math.random() e Math.floor()
 * - getResults()              → compara a escolha do computador com question.answer e devolve
 *                               a mensagem de acerto ou a de erro com a resposta correta
 *                               (template literal)
 *
 * Apoio: questions é um array de objetos; cada pergunta tem category, question, choices
 * (três alternativas) e answer. O arquivo só declara as funções, sem chamá-las.
 */

const questions = [
  {
    category: "JavaScript",
    question: "O que é uma variável?",
    choices: ["Um tipo de função", "Um espaço para armazenar dados", "Um loop"],
    answer: "Um espaço para armazenar dados"
  },
  {
    category: "Java",
    question: "Qual palavra-chave cria uma classe em Java?",
    choices: ["class", "Class", "new"],
    answer: "class"
  },
  {
    category: "Python",
    question: "Qual função exibe um valor no console?",
    choices: ["echo()", "console()", "print()"],
    answer: "print()"
  },
  {
    category: "HTML",
    question: "Qual tag representa um parágrafo?",
    choices: ["<p>", "<h1>", "<div>"],
    answer: "<p>"
  },
  {
    category: "CSS",
    question: "Qual propriedade altera a cor do texto?",
    choices: ["background-color", "font-style", "color"],
    answer: "color"
  }
];


function getRandomQuestion(array){
    let random = Math.floor(Math.random() * array.length);

    return array[random];
}


function getRandomComputerChoice(array){

  let random = Math.floor(Math.random() * 3);

  return array[random];

}

function getResults(question, computerChoice){
  
  let answer = question.answer;

  if(answer === computerChoice){
    return "The computer's choice is correct!";
  }else{
    return `The computer's choice is wrong. The correct answer is: ${answer}`
  }

}
