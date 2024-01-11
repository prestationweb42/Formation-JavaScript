/**
 * 05 - Les fonctions sur les tableaux
 * Exo 10 - Utiliser la boucle for of et entries (destructuring)
 * N'afficher que les résultats pairs -> even
 * Et impair -> odd
 */
const even = document.querySelector(".even");
const odd = document.querySelector(".odd");

const notes = [5, 10, 15, 20];
console.log(notes);

for (let [indice, note] of notes.entries()) {
    if (note % 2 === 0) {
        console.log(`Note = ${indice}, ${note}`);
        even.innerHTML += "<h3>" + `Note = ${indice}, ${note}` + "</h3>";
    } else {
        console.log('--------');
        console.log(`Note = ${indice}, ${note}`);
        const baliseH3 = document.createElement("h3");
        baliseH3.innerHTML = `Indice = ${indice}, Note = ${note}`;
        odd.appendChild(baliseH3);
    }
}
