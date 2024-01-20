/***
 * QUIZZ JAVASCRIPT
 * ARRAY
 * STRING
 */
let score = 0;
const btnStartQuizz = document.getElementById("btn_start_quizz");
const quizzResult = document.querySelector(".quizz_resultat");

// Lancer le jeu
btnStartQuizz.addEventListener("click", loopQuizz);

function loopQuizz() {
    let userChoix = userChoice();
    if (userChoix === "Array") {
        // fonction loop
        loopList(listeMethodArrayJS, listeDefinitionsArrayJS);
        // Affiche résultat
        affichResultat(score, listeMethodArrayJS.length);
    } else if (userChoix === "String") {
        // fonction loop
        loopList(listeMethodStringJS, listeDefinitionsStringJS);
        // Affiche résultat
        affichResultat(score, listeMethodStringJS.length);
    } else if (userChoix === "Math") {
        // fonction loop
        loopList(listeMethodMathJS, listeDefinitionsMathJS);
        // Affiche résultat
        affichResultat(score, listeMethodMathJS.length);
    } else if (userChoix === "Objet") {
        // fonction loop
        loopList(listeMethodObjetJS, listeDefinitionsObjetJS);
        // Affiche résultat
        affichResultat(score, listeMethodObjetJS.length);
    } else {
        if (userChoix === "Number") {
            // fonction loop
            loopList(listeMethodNumberJS, listeDefinitionsNumberJS);
            // Affiche résultat
            affichResultat(score, listeMethodNumberJS.length);
        }
    }
}

// Afficher le résultat
function affichResultat(score, lists) {
    console.log(score + " / " + lists);
    quizzResult.innerHTML = `<h3>Résultat : ${score} / ${lists}</h3>`;
    // alert("Résultat : " + score + " / " + lists);
}

// Choix de l'utilisateur
function userChoice() {
    let userChoice = prompt(
        "Faites votre choix entre Array, String, Math, Number ou Objet"
    );
    while (
        userChoice !== "Array" &&
        userChoice !== "String" &&
        userChoice !== "Math" &&
        userChoice !== "Objet" &&
        userChoice !== "Number"
    ) {
        userChoice = prompt(
            "Faites votre choix entre Array, String, Math, Number ou Objet"
        );
    }
    return userChoice;
}

// Boucle de requete
function loopList(listMethod, listDefinition) {
    for (let i = 0; i < listMethod.length; i++) {
        let numRandom = Math.floor(Math.random() * listMethod.length);
        let userWord = prompt(
            `
            ----------------- Question ${i + 1} ------------------
            ${listDefinition[i]}
            ${listMethod[i + numRandom + 1]}
            ${listMethod[i + numRandom + 4]}
            ${listMethod[i]}
            `
        );
        if (userWord === listMethod[i]) {
            score++;
        }
    }
    return score;
}
