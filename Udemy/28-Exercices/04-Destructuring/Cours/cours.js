// alert('toto')
// Tableau
const notes = [5, 10, 15, 20];

// Décomposition d'un tableau
let [note1, note2, note3, note4] = notes;
// Utilisation de tous les éléments
console.log(`${note1}, ${note2}, ${note3}, ${note4}`);
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
console.log(`${n1}, ${n3}`);
/**
 * Décomposition d'un Objet
 */
const perso = {
    nom: "Dan",
    age: 50,
    sexe: true,
};
// Il faut lire ainsi : je récupère les propriétés de l'objet 'perso'
let { nom, age } = perso;
/**
 * Attention :
 * dans la destructuration d'un objet,
 * le nom des variables doit correspondre aux noms des propriétés
 */
console.log(`Nom : ${nom} , Age : ${age}`);
