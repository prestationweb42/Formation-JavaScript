/**
 * 05 - Les fonctions sur les tableaux
 * Exo 12 - Créez un programme qui supprime une personne
 * à partir de son nom
 * ***** Attention **** 
 * cette exercice ne fonctionne pas correctement
 * les personnages peuvent s'effacer même sans indiqué de nom
 * idem sur la correction de la formation
 */

const tabOriginal = document.querySelector(".tab_original");
const tabModify = document.querySelector(".tab_modify");
const btnSubmit = document.querySelector(".btn_submit");
const inputName = document.getElementById("myName");
// Tableau
const tab = [
    { nom: "Tya", age: 20 },
    { nom: "Tania", age: 25 },
    { nom: "Milo", age: 42 },
    { nom: "Mina", age: 38 },
];
console.log(tab);

// Afficher le nom des persos du tableau dans le html avec une fonction
tabOriginal.innerHTML = affichTabPerso(tab);

function affichTabPerso(array) {
    let listOl = "<ol>";
    for (const p of array) {
        listOl += `<li>Nom : ${p.nom} - Age : ${p.age}</li>`;
    }
    listOl += "</ol>";
    return listOl;
}

// Suppression d'un personnage avec findIndex pour trouver sa position
btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    tab.splice(retrouveIndexPerso(inputName.value), 1);
    tabModify.innerHTML = affichTabPerso(tab);
});
// avec une fonction et un parametre pour selectionner un nom
function retrouveIndexPerso(name) {
    return tab.findIndex(function (perso) {
        return perso.nom === name;
    });
}
