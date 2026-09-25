/**
 * Arquivo: LunchMenu.js
 * Tema: Funções que manipulam um array (cardápio de almoço)
 *
 * Funções praticadas:
 * - addLunchToEnd()    → adiciona um prato ao final do cardápio com push()
 * - addLunchToStart()  → adiciona um prato ao início do cardápio com unshift()
 * - removeLastLunch()  → remove o último prato com pop(), se o cardápio não estiver vazio
 * - removeFirstLunch() → remove o primeiro prato com shift(), se o cardápio não estiver vazio
 * - getRandomLunch()   → sorteia um prato com Math.floor(Math.random() * length)
 * - showLunchMenu()    → exibe os pratos separados por vírgula com join(", ")
 *
 * Apoio: a propriedade length verifica se o cardápio está vazio (if/else) e
 * as mensagens são montadas com template literals.
 */


const lunches = [];

function addLunchToEnd(lunchMenu,lunch){
  lunchMenu.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return lunchMenu;
}

function addLunchToStart(lunchMenu, lunch){
  lunchMenu.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return lunchMenu;
}

function removeLastLunch(lunchMenu){

  if(lunchMenu.length !== 0){
    console.log(`${lunchMenu.pop()} removed from the end of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return lunchMenu;
}

function removeFirstLunch(lunchMenu){
  
  if(lunchMenu.length !== 0){
    console.log(`${lunchMenu.shift()} removed from the start of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return lunchMenu;
}

function getRandomLunch(lunchMenu){
  
  if(lunchMenu.length !== 0){
  const randomN = Math.floor(Math.random() * lunchMenu.length);
  const randomL = lunchMenu[randomN];
  return console.log(`Randomly selected lunch: ${randomL}`);
  }else{
    return console.log("No lunches available.");
  }
}

function showLunchMenu(lunchMenu){
  if(lunchMenu.length !== 0){
    return console.log(`Menu items: ${lunchMenu.join(", ")}`);
  }else{
    return console.log("The menu is empty.");
  }
}









