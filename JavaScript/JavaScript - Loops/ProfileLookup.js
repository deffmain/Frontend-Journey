/**
 * Arquivo: ProfileLookup.js
 * Tema: Busca de um contato num array de objetos
 *
 * Conceitos praticados:
 * - lookUpProfile()      → procura em contacts o contato com firstName igual a name e
 *                          retorna o valor da propriedade property
 * - some()               → exist indica se algum contato tem esse firstName; se nenhum
 *                          tiver, a função retorna "No such contact"
 * - for...of             → percorre contacts e guarda em profile o contato encontrado
 * - Object.hasOwn()      → verifica se profile tem a propriedade; se não tiver, retorna
 *                          "No such property"
 * - Notação de colchetes → profile[property] lê a propriedade cujo nome está na
 *                          variável property
 */

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property){
  let profile;

  let exist = contacts.some(profile => profile.firstName === name);

  if(exist){
  for(const pf of contacts){
    if(pf.firstName == name){
        profile = pf;
    }}
    }else{
        return "No such contact";
    }


  if(Object.hasOwn(profile, property)){
    return profile[property];
  }else{
    return "No such property";
  }
}


console.log(lookUpProfile("Bob", "lastName"))
