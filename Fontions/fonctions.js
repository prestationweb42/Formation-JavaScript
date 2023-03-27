// Les fonctions
function direBonjour() {
    alert("Bonjour");
}
const clicIci = document.querySelector(".clicIci");
clicIci.addEventListener("click", e => {
    direBonjour();
});

//
function sayHello(prenom) {
    alert(`Bonjour ${prenom}`);
}
const clicLa = document.querySelector(".clicLa");
clicLa.addEventListener("click", e => {
    const prenom = prompt("Entrez votre prénom :");
    sayHello(prenom);
});

// Variables globales et locales
let crie = "variable globale"; // global
function crieDeGuerre() {
    let crie = "Variable locale !"; // locale
    alert(crie);
}
const clicCrieDeGuerre = document.querySelector(".clicCrieDeGuerre");
clicCrieDeGuerre.addEventListener("click", e => {
    crieDeGuerre();
});
console.log(crie);

// fonction qui retourne quelque chose
let nb1 = 4,
    nb2 = 7;
function addition(a, b) {
    return a + b;
}
console.log(addition(nb1, nb2));

// Convertir des données
function sayAge(age) {
    alert(`Bonjour, vous avez ${age + 1} ans`);
}
const clicAge = document.querySelector(".clicAge");
clicAge.addEventListener("click", e => {
    let age = prompt("Quel est votre âge ?");
    // age = parseInt(age);
    // age = parseFloat(age);
    age = Number(age); // à utliser de préférence
    sayAge(age);
});
