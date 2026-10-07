/**
 * Arquivo: Museum.js
 * Tema: Acervo de museu — ler e atualizar objetos aninhados com funções
 *
 * Funções praticadas:
 * - getArtifactTitle()    → busca a peça pelo id e devolve o title, ou "Artifact not found"
 *                           (operador ternário)
 * - addTag()              → adiciona uma tag ao array tags com push(), só quando includes()
 *                           mostra que ela ainda não está lá
 * - moveArtifact()        → registra uma nova localização em locations com push() e a forma
 *                           abreviada de propriedade ({ gallery, year })
 * - toggleDisplayStatus() → inverte o booleano onDisplay com o operador !
 * - updateCurator()       → altera o name dentro do objeto aninhado curator
 * - buildSummary()        → monta um resumo com template literal de várias linhas, usando a
 *                           última localização (locations[locations.length - 1])
 *
 * Apoio: collection guarda cada peça pelo id (101, 102), com um objeto (curator) e arrays
 * (locations, tags) aninhados. Os primeiros console.log leem essas propriedades com
 * colchetes e ponto (collection[101].curator.name), e todas as funções conferem se a peça
 * existe antes de usá-la.
 */

const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};



console.log(collection[101].title);
console.log(collection[101].curator.name);

function getArtifactTitle(id) {
  const artifact = collection[id];
  return artifact ? artifact.title : "Artifact not found";
}

console.log(getArtifactTitle(102));

function addTag(id, tag) {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}

addTag(101, "royal");
console.log(collection[101].tags);

function moveArtifact(id, gallery, year) {
  const artifact = collection[id];
  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}

moveArtifact(102, "Hall B", 2026);
console.log(collection[102].locations);

function toggleDisplayStatus(id) {
  const artifact = collection[id];
  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
}

console.log(collection[102].onDisplay);
toggleDisplayStatus(102);
console.log(collection[102].onDisplay);

function updateCurator(id, name) {
  const artifact = collection[id];
  if (artifact) {
    artifact.curator.name = name;
  }
}

updateCurator(101, "Fran Sinclair");
console.log(collection[101].curator.name);

function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
  const currentLocation = artifact.locations[artifact.locations.length - 1];
  
  return `${artifact.title}
  Category: ${artifact.category}
  Curator: ${artifact.curator.name}
  Current Gallery: ${currentLocation.gallery}
  On Display: ${artifact.onDisplay}`;
}

console.log(buildSummary(101));
