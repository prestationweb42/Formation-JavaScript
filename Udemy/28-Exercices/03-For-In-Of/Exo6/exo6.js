// Fonction avec Boucle for, for..in, for..of
const divResultatFor = document.querySelector(".resultatFor");
const divResultatForIn = document.querySelector(".resultatForIn");
const divResultatForOf = document.querySelector(".resultatForOf");
const notes = [5, 10, 15, 20];

/**
 * fonction calcul moyenne avec boucle for
 */
function claculMoyenneFor(tab) {
    let sumFor = 0;
    for (let i = 0; i < tab.length; i++) {
        sumFor += tab[i];
    }
    return sumFor / tab.length;
}
console.log(`La moyenne du tableau avec for est : ${claculMoyenneFor(notes)} `);
//
const baliseH3For = document.createElement("h3");
divResultatFor.appendChild(baliseH3For);
baliseH3For.innerHTML = `La somme du tableau avec la boucle for est : ${claculMoyenneFor(
    notes
)}`;

/**
 * fonction calcul moyenne avec boucle for..in
 */
function claculMoyenneForIn(tab) {
    let sumForIn = 0;
    for (const key in notes) {
        sumForIn += notes[key];
    }
    return sumForIn / tab.length;
}
console.log(
    `la moyenne du tableau avec for..in est : ${claculMoyenneForIn(notes)}`
);
//
const baliseH3ForIn = document.createElement("h3");
divResultatForIn.appendChild(baliseH3ForIn);
baliseH3ForIn.innerHTML = `La somme du tableau avec la boucle for..in est : ${claculMoyenneForIn(
    notes
)}`;

/**
 * fonction calcul moyenne avec boucle for..of
 */
function caculMoyenneForOf(tab) {
    let sumForOf = 0;
    for (const value of tab) {
        sumForOf += value;
    }
    return sumForOf / tab.length;
}

console.log(`la moyenne du tableau avec for..of est : ${caculMoyenneForOf(notes)}`);
const baliseH3ForOf = document.createElement("h3");
divResultatForOf.appendChild(baliseH3ForOf);
baliseH3ForOf.innerText = `La somme du tableau avec la boucle for..of est : ${caculMoyenneForOf(
    notes
)}`;
