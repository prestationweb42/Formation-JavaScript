// Boucle for, for..in, for..of
const divResultatFor = document.querySelector(".resultatFor");
const divResultatForIn = document.querySelector(".resultatForIn");
const divResultatForOf = document.querySelector(".resultatForOf");
const notes = [5, 10, 15, 20];
// somme avec boucle for
let sumFor = 0;
for (let i = 0; i < notes.length; i++) {
    sumFor += notes[i];
}
console.log(`la somme du tableau est : ${sumFor}`);
const baliseH3For = document.createElement("h3");
divResultatFor.appendChild(baliseH3For);
baliseH3For.innerHTML = `La somme du tableau avec la boucle for est : ${sumFor}`;

// somme avec boucle for..in
let sumForIn = 0;
for (const key in notes) {
    sumForIn += notes[key];
}
console.log(`la somme du tableau est : ${sumForIn}`);
const baliseH3ForIn = document.createElement("h3");
divResultatForIn.appendChild(baliseH3ForIn);
baliseH3ForIn.innerHTML = `La somme du tableau avec la boucle for..in est : ${sumForIn}`;

// somme avec boucle for..of
let sumForOf = 0;
for (const value of notes) {
    sumForOf += value;
}
console.log(`la somme du tableau est : ${sumForOf}`);
const baliseH3ForOf = document.createElement("h3");
divResultatForOf.appendChild(baliseH3ForOf);
baliseH3ForOf.innerText = `La somme du tableau avec la boucle for..of est : ${sumForOf}`;
