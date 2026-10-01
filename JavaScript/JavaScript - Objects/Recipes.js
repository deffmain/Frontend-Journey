/**
 * Arquivo: Recipes.js
 * Tema: Array de objetos e funções que preenchem propriedades
 *
 * Conceitos praticados:
 * - Array de objetos      → recipes recebe recipe1, recipe2 e recipe3 com push()
 * - getTotalIngredients() → conta os ingredientes com a propriedade length do array
 * - getDifficultyLevel()  → classifica o cookingTime com cadeia if / else if / else
 * - Notação de ponto      → lê (recipe1.ingredients) e atualiza (recipe1.totalIngredients)
 *                           as propriedades de cada receita
 *
 * Tabela de dificuldade:
 *   cookingTime <= 30 → "easy"
 *   cookingTime <= 60 → "medium"
 *   acima de 60       → "hard"
 *
 * Apoio: totalIngredients (null) e difficultyLevel ("") começam vazios e são preenchidos
 * depois com o retorno das funções. Como o array guarda referências aos objetos, o
 * console.log(recipes) do fim já mostra as receitas atualizadas.
 */

const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes)
