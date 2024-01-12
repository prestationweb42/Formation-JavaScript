/**
 * 05 - Les fonctions sur les tableaux
 * Exo 11 - Créez une fonction qui retourne un nouveau tableau
 * à partir d'un tableau existant
 */

const way1 = document.querySelector(".way1");
const way2 = document.querySelector(".way2");
const way3 = document.querySelector(".way3");
const btnSubmit = document.querySelector(".btn_submit");
const inputSelect = document.querySelector(".input_select");
//
let inputSquare = document.querySelector(".input_square");

let numSquare = document.getElementById("myNumber");
console.log(typeof numSquare.value);
let toto = parseFloat(numSquare.value);
console.log(toto);

const notes = [5, 10, 15, 20];
console.log(notes);

//
btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    transfoSquare(notes);
});

function transfoSquare(tab) {
    // num.addEventListener("input", () => {
    let numAsNumber = parseFloat(numSquare.value);
    console.log(numAsNumber);
    //
    const notes2 = tab.map(function (n) {
        return n ** numAsNumber; // puissance n
    });
    console.log(notes2);

    // Affichage en ligne des valeurs
    way1.innerHTML = ""; // effacement du conteneur
    const baliseH3 = document.createElement("h3");
    baliseH3.innerHTML = notes2;
    way1.appendChild(baliseH3);

    // Affichage individuel des valeurs avec for of
    way2.innerHTML = ""; // effacement du conteneur
    for (const note of notes2) {
        way2.innerHTML += "<h3>" + `${note}` + "</h3>";
    }

    // Affichage individuel des valeurs avec for
    way3.innerHTML = ""; // effacement du conteneur
    for (let i = 0; i < notes.length; i++) {
        console.log(notes2[i]);
        way3.innerHTML += "<h3>" + `${notes2[i]}` + "</h3>";
    }
    // });
}
