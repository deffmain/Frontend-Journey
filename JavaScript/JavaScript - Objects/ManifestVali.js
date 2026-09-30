/**
 * Arquivo: ManifestVali.js
 * Tema: Validação de um manifesto de carga (objeto) com funções
 *
 * Funções praticadas:
 * - normalizeUnits()   → converte o peso de lb para kg (× 0.45) numa cópia do manifesto
 * - validateManifest() → confere os cinco campos obrigatórios e marca os ausentes como
 *                        "Missing" e os inválidos como "Invalid"
 * - processManifest()  → valida o manifesto e exibe a mensagem de sucesso com o peso
 *                        total em kg, ou a de erro com o resultado da validação
 *
 * Apoio: spread ({...manifest}) para copiar o objeto sem alterar o original, typeof,
 * Number.isInteger(), Number.isNaN(), trim(), Object.keys() e o operador delete.
 *
 * Observação: a validação segue exatamente o que o enunciado do exercício pede.
 * Lida como código de produção, ela pode parecer errada: por exemplo, um manifesto
 * com propriedades além das cinco obrigatórias é tratado como erro.
 */

function normalizeUnits(manifest){
  let tObject = {...manifest};
  if(tObject.unit === "lb"){
    tObject.weight *= 0.45;
    tObject.unit = "kg";
    return tObject;
  }
  return tObject;
}

function validateManifest(manifest){
  
  let tObject = {...manifest}



  if(Object.keys(tObject).length != 0){

    //Missing Validation
    if(tObject.containerId === "" || tObject.containerId === undefined)
      {tObject.containerId = "Missing"};

    if(tObject.destination === "" || tObject.destination === undefined)
      {tObject.destination = "Missing"};

    if(tObject.weight === "" || tObject.weight === undefined)
      {tObject.weight = "Missing"};

    if(tObject.unit === "" || tObject.unit === undefined)
      {tObject.unit = "Missing"};

    if(tObject.hazmat === "" || tObject.hazmat === undefined)
      {tObject.hazmat = "Missing"};

    //Invalid Validation
    if((typeof tObject.containerId !== "number" || !Number.isInteger(tObject.containerId) || tObject.containerId <= 0) && tObject.containerId !== "Missing"){
      tObject.containerId = "Invalid";}
    
    if((typeof tObject.destination !== "string" || tObject.destination.trim() === "") && tObject.destination !== "Missing")
      {tObject.destination = "Invalid";}

    if((typeof tObject.weight !== "number" || Number.isNaN(tObject.weight) || tObject.weight <= 0) && tObject.weight !== "Missing"){
      tObject.weight = "Invalid";}

    if(tObject.unit !== "lb" && tObject.unit !== "kg" && tObject.unit !== "Missing"){
      tObject.unit = "Invalid";}

    if(typeof tObject.hazmat !== "boolean" && tObject.hazmat !== "Missing"){
      tObject.hazmat = "Invalid";}
    
      

    //Validations   
    if(tObject.containerId !== "Missing" && tObject.containerId !== "Invalid"){
      delete tObject.containerId;};

    if(tObject.destination !== "Missing" && tObject.destination !== "Invalid"){
      delete tObject.destination;};

    if(tObject.weight !== "Missing" && tObject.weight !== "Invalid"){
      delete tObject.weight;};

    if(tObject.unit !== "Missing" && tObject.unit !== "Invalid"){
      delete tObject.unit;};
    
    if(tObject.hazmat !== "Missing" && tObject.hazmat !== "Invalid"){
      delete tObject.hazmat;};

    if(Object.keys(tObject).length === 0){
      return {}
    }else{
      return tObject;}
  }
 
  return  tObject = {containerId: "Missing", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing"};
};

function processManifest(manifest){

  let tObject = validateManifest(manifest);

  let tObjCop = {...manifest};

  if(Object.keys(tObject).length === 0){

    console.log(`Validation success: ${tObjCop.containerId}`);
    tObjCop = normalizeUnits(tObjCop);
    console.log(`Total weight: ${tObjCop.weight} kg`);
  }else{
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(tObject);
  };
};


let manifest = { containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false };

processManifest(manifest);
