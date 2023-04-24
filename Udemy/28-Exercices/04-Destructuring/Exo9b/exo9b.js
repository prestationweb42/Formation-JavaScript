// alert("toto");
// Exercice 9b - Destructuring sur un objet
const villes = {
    paris: {
        nom: "Paris",
        lat: 48.85,
        long: 2.35,
    },
    toulouse: {
        nom: "Toulouse",
        lat: 46.6,
        long: 1.44,
    },
    lyon: {
        nom: "Lyon",
        lat: 45.75,
        long: 4.85,
    },
};

console.log("---Affichage AVEC Destructuring---");
/**
 * Attention
 * il faut des {} avec les objets
 * J'insère les propriétés de CHAQUE ville dans une variable
 */
//
let { paris, toulouse } = villes;
console.log(paris); // permet d'afficher les propriétés de Paris
console.log(toulouse); // permet d'afficher les propriétés de Toulouse
// console.log(lyon); // permet d'afficher les propriétés de Lyon
/**
 * OU
 * pour avoir juste les propriétés de Lyon
 */
let { lyon } = villes;
affichageCoordonnees(lyon.nom, lyon.lat, lyon.long);
//
function affichageCoordonnees(nom, latitude, longitude) {
    let affichage = `
    -------${nom}-------
    Latitude : ${latitude},
    Longitude : ${longitude}`;
    console.log(affichage);
}
/**
 * OU
 * en destructurant dans la fonction
 */
const divResultat = document.querySelector(".resultat");
//
affichageCoordonnees2(paris);
affichageCoordonnees2(toulouse);
affichageCoordonnees2(lyon);
//
function affichageCoordonnees2(ville) {
    let { nom, lat, long } = ville;
    let affichage = `
    -------${nom}-------
    Latitude : ${lat},
    Longitude : ${long}`;
    //console.log(affichage);
    const baliseH3 = document.createElement("h3");
    divResultat.appendChild(baliseH3);
    baliseH3.innerText = affichage;
}
