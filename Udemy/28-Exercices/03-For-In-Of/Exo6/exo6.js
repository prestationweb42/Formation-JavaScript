const resultat = document.querySelector(".resultat");
const notes = [5, 10, 15, 20];
// for
let toto = 0;
for (let i = 0; i < notes.length; i++) {
    toto += notes[i];
}
console.log(toto);
// for in
let tata = 0;
for (const key in notes) {
    tata += notes[key];
}
console.log(tata);
//for of
let titi = 0;
for (const value of notes) {
    titi += value;
}
console.log(titi);
