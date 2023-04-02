// declaration variables
const form = document.querySelector(".form-quizz");
// declaration array
let arrayResult = [];
// array good responses
const responses = ["c", "a", "b", "a", "c"];
// emojis responses
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
// title result
const titreResultat = document.querySelector(".resultats h2");
// text result
const gradeResultat = document.querySelector(".note");
// aide result
const aideResultat = document.querySelector(".aide");
// animation block
const allQuestions = document.querySelectorAll(".question-block");
// array verification
let verifTableau = [];

// event action
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // loop for results checked
    for (let i = 1; i < 6; i++) {
        arrayResult.push(
            document.querySelector(`input[name="q${i}"]:checked`).value
        );
    }
    // console.log(arrayResult);
    // RAZ arrayResult
    verifFunct(arrayResult);
    arrayResult = [];
});
// function verifFunct
function verifFunct(tabResult) {
    for (let index = 0; index < 5; index++) {
        // test results true or false
        if (tabResult[index] === responses[index]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    // console.log(verifTableau);
    // call function displayResult
    displayResult(verifTableau);
    // call function animate colorResult
    colorResult(verifTableau);
    verifTableau = [];
}
// function colorResult with bool true or false
function colorResult(valBool) {
    for (let index = 0; index < valBool.length; index++) {
        if (valBool[index] === true) {
            allQuestions[index].style.background = "lightgreen";
        } else {
            allQuestions[index].style.background = "#ffb8b8";
            allQuestions[index].classList.add("echec");
            // time display
            setTimeout(() => {
                allQuestions[index].classList.remove("echec");
            }, 500);
        }
    }
}
// reset color after check
allQuestions.forEach((block) => {
    block.addEventListener("click", () => {
        block.style.background = "white";
    });
});

// function displayResult
function displayResult(tabCheck) {
    // filter method for results + length
    const nbDeFautes = tabCheck.filter((el) => el !== true).length;
    console.log(nbDeFautes);
    // cases conditions
    switch (nbDeFautes) {
        case 0:
            gradeResultat.innerText = "5/5";
            titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans faute ! ✔️`;
            aideResultat.innerText = "";
            break;
        case 1:
            titreResultat.innerText = `${emojis[1]} Encore ${nbDeFautes} fautes,  Vous y êtes presque ! ✨`;
            aideResultat.innerText =
                "Faites une autre tentative dans les cases rouges !";
            gradeResultat.innerText = "4/5";
            break;
        case 2:
            titreResultat.innerText = `${emojis[2]} Encore ${nbDeFautes} fautes,  encore un effort ... 👀`;
            aideResultat.innerText =
                "Faites une autre tentative dans les cases rouges !";
            gradeResultat.innerText = "3/5";
            break;
        case 3:
            gradeResultat.innerText = "2/5";
            titreResultat.innerText = `${emojis[3]} Vous avez fait ${nbDeFautes} fautes,  il reste quelques erreurs ! 😭`;
            aideResultat.innerText =
                "Faites une autre tentative dans les cases rouges !";
            break;
        case 4:
            titreResultat.innerText = `${emojis[4]} Vous avez fait ${nbDeFautes} fautes,  Peux mieux faire ! 👎`;
            aideResultat.innerText =
                "Faites une autre tentative dans les cases rouges !";
            gradeResultat.innerText = "1/5";
            break;
        case 5:
            titreResultat.innerText = `${emojis[4]} Vous avez fait ${nbDeFautes} fautes, nul ! 👎`;
            aideResultat.innerText =
                "Faites une autre tentative dans les cases rouges !";
            gradeResultat.innerText = "0/5";
            break;
        default:
            "Attention : cas inattendu";
    }
}
