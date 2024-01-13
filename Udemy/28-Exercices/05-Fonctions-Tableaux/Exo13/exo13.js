/**
 * 05 - Les fonctions sur les tableaux
 * Exo 13 - Mettre au pluriel avec s ou x
 */

const tabOriginal = document.querySelector(".tab_original");
const tabModify = document.querySelector(".tab_modify");
const tabResult = document.querySelector(".tab_result");

// Tableau mots
const mots = ["clou", "flou", "bijou", "genou", "trou", "toutou"];
console.log(mots);
// Affichage du tableau
listMots(mots, tabOriginal);

// Tableau mots exceptions
const execptions = [
    "bijou",
    "caillou",
    "chou",
    "genou",
    "hibou",
    "joujou",
    "pou",
];
// Affichage du tableau
listMots(execptions, tabModify);

// futur Tableau des mots au pluriel
let motsPluriel = [];
// Transformation des mots avec les pluriels respectifs
motsPluriel = mots.map(m => {
    // includes permet de tester les exceptions
    if (execptions.includes(m)) {
        return m + "x";
    } else {
        return m + "s";
    }
});
// Affichage du tableau
listMots(motsPluriel, tabResult);

// function avec for of
function listMots(tab, place) {
    for (const mot of tab) {
        place.innerHTML += `<h2>${mot}</h2>`;
    }
}
