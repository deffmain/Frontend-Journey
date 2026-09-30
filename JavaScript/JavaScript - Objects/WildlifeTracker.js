/**
 * Arquivo: WildlifeTracker.js
 * Tema: Leitura e alteração de propriedades de objetos com funções
 *
 * Funções praticadas:
 * - getSpecies()             → lê a propriedade species com a notação de ponto
 * - getAge()                 → lê a propriedade age com a notação de ponto
 * - addHabitat()             → cria a propriedade habitat no objeto recebido
 * - updateAge()              → atualiza o valor da propriedade age
 * - removeEndangeredStatus() → remove a propriedade isEndangered com delete
 * - hasHabitat()             → verifica se existe a propriedade habitat com hasOwnProperty()
 * - getProperty()            → lê qualquer propriedade pelo nome com a notação de colchetes
 *
 * Apoio: as funções são arrow functions, menos getProperty(), que é uma declaração
 * de função. addHabitat(), updateAge() e removeEndangeredStatus() alteram o próprio
 * objeto recebido (tiger ou elephant).
 */

const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

function getProperty(animal, propertyName){
  return animal[propertyName];
}
console.log(getProperty(tiger, "species"))
console.log(getProperty(elephant, "age"))
