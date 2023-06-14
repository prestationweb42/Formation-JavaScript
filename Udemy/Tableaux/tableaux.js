// Les tableaux et leurs fonctions
// Déclaration d'un tableau en JavaScript
const notes = [5, 10, 15, 20];
console.log(notes);

// pop() : permet de supprimer un élément à la fin du tableau.
notes.pop();
console.log(notes);

// push() : permet d’ajouter un (ou plusieurs) élément à la fin du tableau.
notes.push(18, 20);
console.log(notes);

// findIndex : permet de renvoyer le premier index d’une case d’un tableau qui correspondant au résultat d’une fonction de vérification
const index = notes.findIndex(function (note) {
    return note === 15;
});
console.log(index);

//La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.
const groups = [
    ["Manon", 10, 15, 17],
    ["Lucas", 6, 13, 15],
    ["Elliot", 8, 11, 18],
];
const persos = groups.find(function (p) {
    return p[0] === "Lucas";
});
console.log(persos);

//La méthode entries(), plus moderne que find(), permet de renvoyer un élément de type « iterator » contenant l’association index / valeur. Pour parcourir cet élément il faut utiliser une boucle for…of
for (let [indice, note] of notes.entries()) {
    console.log(`Note ${indice} : ${note}`);
}

// map : permet de créer un nouveau tableau à partir des données d’un tableau initial, auquel on a appliqué une fonction (callback) modifiant toutes les valeurs
const notes2 = notes.map(function (note) {
    return note * 10;
});
console.log(notes2);

// Includes: permet de tester si un tableau contient une valeur et renvoi true ou false.
const groupes = ["Manon", "Lou", "Alexandre"];
console.log(groupes.includes("Lou"));
