// Exercice 9a - Destructuring sur un tableau
const villes = [
    ["Paris", 48.85, 2.35],
    ["Toulouse", 46.6, 1.44],
    ["Lyon", 45.75, 4.85],
];
// Affichage sans Destructuring
console.log("---Affichage SANS Destructuring---");
affichageCoordonnees(villes[2]);
//
console.log("---Affichage AVEC Destructuring---");
// J'insère les propriétés de CHAQUE ville dans une variable
let [paris, toulouse, lyon] = villes;
console.log(paris); // permet d'afficher les propriétés de Paris
console.log(toulouse); // permet d'afficher les propriétés de Toulouse
console.log(lyon); // permet d'afficher les propriétés de Lyon
//
affichageCoordonnees(lyon);
//
function affichageCoordonnees(ville) {
    let affichage = `
    -------${ville[0]}-------
    Latitude : ${ville[1]},
    Longitude : ${ville[2]}`;
    console.log(affichage);
}
/**
 * Même fonction mais en Destructurant
 * les propriétés du sous-tableau
 * à l'intérieur de la fonction
 * *** Attention ***
 * cela fonctionne pour un tableau à l'intérieur d'un tableau
 */
const divResultat = document.querySelector(".resultat");
affichageCoordonnees2(lyon);
function affichageCoordonnees2(ville) {
    let [nom, latitude, longitude] = ville;
    let affichage = `
    -------${nom}-------
    Latitude : ${latitude},
    Longitude : ${longitude}`;
    console.log(affichage);
    const baliseH3 = document.createElement("h3");
    baliseH3.innerText = `
    -------${nom}-------
    Latitude : ${latitude},
    Longitude : ${longitude}`;
    divResultat.appendChild(baliseH3);
}
