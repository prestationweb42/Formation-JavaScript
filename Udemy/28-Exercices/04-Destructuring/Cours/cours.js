// alert('toto')
// Tableau
const tabArray = document.querySelector(".tab_array");
const tabArrayDecompo = document.querySelector(".tab_array_decompo");
const tabObjet = document.querySelector(".tab_objet");
const tabObjetDecompo = document.querySelector(".tab_objet_decompo");

const notes = [5, 10, 15, 20];

// Décomposition d'un tableau
let [note1, note2, note3, note4] = notes;
// Utilisation de tous les éléments
console.log(
    `Le tableau contient les notes suivantes : ${note1}, ${note2}, ${note3}, ${note4}`
);
tabArray.innerHTML =
    "<h2>" +
    `Le tableau contient les notes suivantes : ${note1}, ${note2}, ${note3}, ${note4}` +
    "</h2>";
//
/**
 * Décomposition d'une partie d'un tableau
 * Attention : il faut respecter l'ordre
 * des éléments du tableau
 * en laissant des espaces vides pour les éléments
 * non voulus
 */
// Nouveau tableau
// Il faut lire ainsi : je récupère les éléments du tableau 'notes'
let [n1, , n3, ,] = notes;
// Utilisation d'une partie des éléments du tableau
console.log(`Récupération de seulement quelques éléments : ${n1}, ${n3}`);
tabArrayDecompo.innerHTML =
    "<h2>" +
    `Récupération de seulement quelques éléments : ${n1}, ${n3}` +
    "</h2>";
/**
 * Décomposition d'un Objet
 */
const perso = {
    nom: "Dan",
    age: 50,
    sexe: true,
    color: "red",
};
// Il faut lire ainsi : je récupère les propriétés de l'objet 'perso'
let { nom, age, sexe } = perso;
tabObjet.innerHTML =
    "<h2>" +
    `Objet : Nom : ${nom} , Age : ${age} , Sexe : ${sexe ? "Homme" : "Femme"}` +
    "</h2>";
/**
 * Attention :
 * dans la destructuration d'un objet,
 * le nom des variables doit correspondre aux noms des propriétés
 */
console.log(`Décomposition d'un objet : Nom : ${nom} , Age : ${age}`);
tabObjetDecompo.innerHTML =
    "<h2>" + `Décomposition d'un objet : Nom : ${nom} , Age : ${age}` + "</h2>";
