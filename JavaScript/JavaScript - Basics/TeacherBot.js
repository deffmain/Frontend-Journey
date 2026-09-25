/**
 * Arquivo: TeacherBot.js
 * Tema: Template literals e acesso a caracteres de uma string
 *
 * Conceitos praticados:
 * - Template literals → strings com crases (`) e interpolação com ${...}
 * - Propriedade length → retorna a quantidade de caracteres da string
 * - Acesso por índice  → string[i] retorna o caractere na posição i
 *                        (o último é string[string.length - 1])
 * - indexOf()          → retorna a posição da primeira ocorrência de um
 *                        trecho, ou -1 se não encontrar (case-sensitive)
 */

console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));
