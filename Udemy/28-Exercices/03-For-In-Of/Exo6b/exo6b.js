// Boucle for, for..in, for..of
const divResultatFor = document.querySelector(".resultatFor");
const divResultatForIn = document.querySelector(".resultatForIn");
const divResultatForOf = document.querySelector(".resultatForOf");
const notes = [5, 10, 15, 20];
// somme avec boucle for
let sumFor = 0;
let moyFor = 0;
for (let i = 0; i < notes.length; i++) {
    sumFor += notes[i];
    moyFor = sumFor / notes.length;
}
console.log(`la somme du tableau est : ${sumFor}`);
console.log(`la moyenne du tableau est : ${moyFor}`);
const baliseH3For = document.createElement("h3");
divResultatFor.appendChild(baliseH3For);
baliseH3For.innerHTML = `La somme du tableau avec la boucle for est : ${sumFor} et la moyenne : ${moyFor}`;

// somme avec boucle for..in
let sumForIn = 0;
let moyForIn = 0;
for (const key in notes) {
    sumForIn += notes[key];
}
moyForIn = sumForIn / notes.length;
console.log(`la somme du tableau est : ${sumForIn}`);
console.log(`la moyenne du tableau est : ${moyForIn}`);
const baliseH3ForIn = document.createElement("h3");
divResultatForIn.appendChild(baliseH3ForIn);
baliseH3ForIn.innerHTML = `La somme du tableau avec la boucle for..in est : ${sumForIn} et la moyenne : ${moyForIn}`;

// somme avec boucle for..of
let sumForOf = 0;
let moyForOf = 0;
for (const value of notes) {
    sumForOf += value;
}
moyForOf = sumForOf / notes.length;
console.log(`la somme du tableau est : ${sumForOf}`);
console.log(`la moyenne du tableau est : ${moyForOf}`);
const baliseH3ForOf = document.createElement("h3");
divResultatForOf.appendChild(baliseH3ForOf);
baliseH3ForOf.innerText = `La somme du tableau avec la boucle for..of est : ${sumForOf} et la moyenne : ${moyForOf}`;
