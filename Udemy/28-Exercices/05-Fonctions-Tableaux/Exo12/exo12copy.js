/**
 * 05 - Les fonctions sur les tableaux
 * Exo 12 - Créez un programme qui supprime une personne
 * à partir de son nom
 * Corrigé complet de l'execice
 */

const tabOriginal = document.querySelector(".tab_original");
const tabModify = document.querySelector(".tab_modify");
const btnSubmit = document.querySelector(".btn_submit");

// Tableau
const tab = [
    { nom: "Tya", age: 20 },
    { nom: "Tania", age: 25 },
    { nom: "Milo", age: 42 },
    { nom: "Mina", age: 38 },
];
console.log(tab);

// Afficher le nom des persos du tableau dans le html
for (const perso of tab) {
    console.log(perso.nom);
    tabOriginal.innerHTML +=
        "<li>" + `Nom : ${perso.nom} - Age : ${perso.age}` + "</li>";
}

// Suppression d'un personnage avec findIndex pour trouver sa position
// avec une fonction et un parametre pour selectionner un nom
function retrouveIndexPerso(name) {
    return tab.findIndex(function (perso) {
        return perso.nom === name;
    });
}
// et splice pour le retirer
tab.splice(retrouveIndexPerso("Tya"), 1);
// Afficher le nouveau tableau dans le html
for (const perso of tab) {
    console.log(perso.nom);
    tabModify.innerHTML += "<li>" + `Nom : ${perso.nom} - Age : ${perso.age}` + "</li>";
}

