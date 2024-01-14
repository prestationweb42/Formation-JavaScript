/**
 * 06 - Paramètres de Fonctions
 * Exo 15 - Créez une fonction qui permet d'afficher les tables de multiplication
 */

const tab5 = document.querySelector(".tab_5");
// par 5
multipliPar5(5);

function multipliPar5(a, b = 9) {
    for (let i = 1; i <= b; i++) {
        console.log(`${i} * ${a} = ${a * i}`);
        tab5.innerHTML += `<p>${i} * ${a} = ${a * i}</p>`;
    }
}

// Separation
console.log("------------------");

const tab57 = document.querySelector(".tab_57");
// par 5 et début 7
multipliPar57(5, 7);

function multipliPar57(a, b) {
    for (let i = b; i <= 9; i++) {
        console.log(`${i} * ${a} = ${a * i}`);
        tab57.innerHTML += `<p>${i} * ${a} = ${a * i}</p>`;
    }
}

// Separation
console.log("------------------");

const tab579 = document.querySelector(".tab_579");
// par 5 avec début 7 et fin 9
multipliPar579(5, 7, 9);

function multipliPar579(a, b, c) {
    // inversion des valeurs
    if (b > c) {
        let temp = b;
        b = c;
        c = temp;
    }
    for (let i = b; i < c; i++) {
        console.log(`${i} * ${a} = ${a * i}`);
        tab579.innerHTML += `<p>${i} * ${a} = ${a * i}</p>`;
    }
}
