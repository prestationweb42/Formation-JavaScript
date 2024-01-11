/**
 * 05 - Les fonctions sur les tableaux
 * Le cours
 */
const notes = [5, 10, 15, 20];
console.log(notes);

// push -> Ajoute un OU plusieurs elements a la fin du tableau
notes.push(23, 30);
console.log(notes);

// pop -> supprime un element a la fin du tableau
notes.pop();
console.log(notes);

// fonction map -> créer un nouveau tableau tableau à partir d'un tableau existant
const notes2 = notes.map(note => {
    return note * 10;
});
console.log(notes2);

// fonction findIndex() -> affiche l'index d'un element du tableau
const index = notes2.findIndex(note => {
    return note === 150;
});
console.log(index);

// fonction find() -> affiche la valeur d'un tableau dans un tableau
const persos = [
    ["Tina", 5, 10, 15, 20],
    ["Kelly", 5, 10, 15, 20],
    ["Jennifer", 5, 10, 15, 20],
];
const valeur = persos.find(perso => {
    return perso[0] === "Jennifer";
});
console.log(valeur);

// fonction moderne -> entries() avec for of et le destructuring
for (let [indice, note] of notes.entries()) {
    console.log(`Note = ${indice}, ${note}`);
}

// fonction include() -> teste la présence d'un élément et renvoi true ou false
console.log(notes.includes(10));
