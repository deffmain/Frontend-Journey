/**
 * Arquivo: training.js
 * Tema: Exercícios práticos com funções
 *
 * Exercícios / conceitos praticados:
 * - booWho()         → verifica se um valor é booleano usando typeof
 * - maskEmail()      → mascara o nome de usuário do e-mail com slice(), indexOf(),
 *                      repeat() e replaceAll()
 * - getLoanMessage() → decide a elegibilidade de empréstimo com cadeia if/else if
 *                      e operadores lógicos (&&) e de comparação (>=)
 * - convertCtoF()    → converte uma temperatura de Celsius para Fahrenheit
 * - isLeapYear()     → verifica se um ano é bissexto usando o operador de resto (%)
 * - truncateString() → corta a string num tamanho máximo e acrescenta "..." (slice, trim)
 * - confirmEnding()  → verifica se uma string termina com outra usando slice negativo
 */

// Boolean validator
console.log("=========================\nBolean validator\n=========================")

function booWho(arg){
    if(typeof(arg) === "boolean"){
        return true;
    }else{
        return false;
    };
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho("A"))
console.log(booWho(12));

// E-mail mask

console.log("\n=========================\nEmail mask\n=========================")

function maskEmail(email){

  let emailInit = email.slice(1, email.indexOf("@")-1);
  
  let emaildomain = email.slice(email.indexOf("@"));
  
  let transfor = emailInit.repeat(emailInit.length).replaceAll(emailInit, "*");
  
  let concat =  email[0] + transfor+email.slice(email.indexOf("@") -1,email.indexOf("@")) + emaildomain;

  return concat;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));


console.log("\n=========================\nLoan validator\n=========================")

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

let duplexLoanMsg = getLoanMessage(85000, 850);
let condoLoanMsg = getLoanMessage(65000, 690);
let carLoanMsg = getLoanMessage(45000, 660);
let noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);

console.log("\n=========================\nCelsius convert\n=========================")

function convertCtoF(celsius){
    return (celsius * 1.8) + 32;
}

console.log(convertCtoF(5))
console.log(convertCtoF(0));


console.log("\n=========================\n Leap year inspector\n=========================")

function isLeapYear(year){
  
  if(year%4 === 0 && year%100 ===0 && year%400 !== 0){
    return `${year} is not a leap year.`;
  }else if(year%4 === 0){
  return `${year} is a leap year.`;
  }else{
    return `${year} is not a leap year.`;
  }

}

let year = 2024;

const result = isLeapYear(year);

console.log(result);


console.log("\n=========================\n String truncate\n=========================")

function truncateString(string, number){
  if(string.length > number){
    return string.slice(0, number).trim()+"...";
  }else{
    return string;
  }
}

let phrase = "A-tisket a-tasket A green and yellow basket";

console.log(truncateString(phrase, "A-tisket a-tasket A green and yellow basket".length));


console.log("\n=========================\n String verify ends\n=========================")

function confirmEnding(stringC, stringR){
  let stringEx = stringC.slice(-stringR.length);
  if(stringEx === stringR){
    return true;
  }else{
    return false;
  }
}

console.log(confirmEnding("It's sunny here", "here"));
