/**
 * Arquivo: ShoppingList.js
 * Tema: Manipulação de arrays — adicionar, remover e atualizar itens
 *
 * Conceitos praticados:
 * - push()               → adiciona um ou mais itens ao final da lista
 * - unshift()            → adiciona um item ao início da lista
 * - pop()                → remove o último item da lista
 * - shift()              → remove o primeiro item da lista
 * - Acesso por índice    → shoppingList[0] = "..." substitui o primeiro item
 * - getShoppingListMsg() → retorna a lista atual dentro de um template literal
 *                          (o array vira texto, com os itens separados por vírgula)
 */



console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));
