/**
 * Arquivo: DiscoColle.js
 * Tema: Coleção de discos — atualizar um objeto aninhado com uma função
 *
 * Conceitos praticados:
 * - Objeto aninhado      → recordCollection guarda cada álbum pelo id (2548, 2468, 1245,
 *                          5439), com albumTitle, artist e tracks
 * - Notação de colchetes → records[id][prop] acessa o álbum e a propriedade pelas variáveis
 * - if / else if         → updateRecords() escolhe entre apagar, atribuir, adicionar uma
 *                          faixa ou criar a lista de faixas
 * - delete               → remove a propriedade prop do álbum
 * - push()               → acrescenta a faixa ao fim do array tracks que já existe
 *
 * Regras de updateRecords(records, id, prop, value):
 *   value vazio ("")                   → apaga prop do álbum
 *   prop diferente de "tracks"         → atribui value a prop
 *   prop "tracks" e o array já existe  → adiciona value ao fim de tracks
 *   prop "tracks" e o array não existe → cria tracks com [value]
 *   Em todos os casos, a função retorna o objeto records inteiro.
 */

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value){

  if(!value){
    delete records[id][prop];
    return records;
  }else if(prop !== "tracks" && value){
    records[id][prop] = value;
    return records;
  }else if(prop === "tracks" && value && records[id][prop] !== undefined){
    records[id][prop].push(value);
    return records;
  }else if(value && prop === "tracks"){
    records[id][prop] = [value];
    return records;
  };

};



console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
