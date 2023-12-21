/**
 * JSON (JavaScript Object Notation)
 * JSON.parse()
 * JSON.stringify()
 */

const resulParse = document.querySelector(".resultParse");
const resulStringify = document.querySelector(".resultStringify");

// La méthode JSON.parse() analyse du texte JSON et retourne l'objet JS correspondant
const jsonTextFormat = '{"username" : "Dan", "Age" : "58"}';
let jsonToJS = JSON.parse(jsonTextFormat);
resulParse.innerHTML = jsonToJS;
console.log(jsonToJS);

// La méthode JSON.stringify() fait l'inverse, elle transforme un objet JS en JSON
const catJson = {
    catName: "Phare",
    prix: 10,
    poids: 2,
};
const jsToJson = JSON.stringify(catJson);
console.log(JSON.stringify(catJson));
resulStringify.innerHTML = jsToJson;
