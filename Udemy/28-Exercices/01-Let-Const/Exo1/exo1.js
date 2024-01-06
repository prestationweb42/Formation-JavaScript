/**
 * Correction de l'exercice 1
 * Plusieurs variables ne sont pas initialisées
 */
let p1 = 10;

// la variable p2 est déclarée de manière Globale mais pas définie
let p2;

// la variable p3 est déclarée de manière Globale mais pas définie
let p3;

// la variable somme est déclarée de manière Globale mais pas définie
let somme;

// la variable moyenne est une fonction ET grâce à son emplacement, elle permet de faire remonter les variables modifiées plus bas en local
const moyenne = calculMoyenne();

// opérations 1
const op1 = "P1 = " + p1 + "; P2 = " + p2 + "; P3 = " + p3;
console.log("P1 : " + p1 + " P2 : " + p2 + " P3 : " + p3);

// opérations 2
const op2 = "La somme est de : " + somme;
console.log("La somme est de : " + somme);

// opérations 3
const op3 = "La moyenne est de : " + moyenne;
console.log("La moyenne est de : " + moyenne);

// fonction calculMoyenne()
function calculMoyenne() {
    p1 = p1 + 5;
    p2 = 6;
    p3 = 12;
    somme = p1 + p2 + p3;
    const resultat = somme / 3;
    return resultat;
}

// Affichage des résultats
const resultOp1 = document.querySelector(".resultat_op_1");
resultOp1.innerHTML = `Opération 1 = ${op1}`;

const resultOp2 = document.querySelector(".resultat_op_2");
resultOp2.innerHTML = `Opération 2 = ${op2}`;

const resultOp3 = document.querySelector(".resultat_op_3");
resultOp3.innerHTML = `Opération 2 = ${op3}`;
