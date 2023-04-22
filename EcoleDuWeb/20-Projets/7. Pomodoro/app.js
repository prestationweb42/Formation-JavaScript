// variables
const displayTravail = document.querySelector(".affichageT");
const displayPause = document.querySelector(".affichageP");
const btnGo = document.querySelector(".b1");
const btnPause = document.querySelector(".b2");
const btnReset = document.querySelector(".b3");
const cycles = document.querySelector("h2");
// empêche de spamer les cycles
let checkInterval = false;
// 1800 s = 30mn -> au choix si plus ou moins !!
let tempsInitial = 1800;
// 300 s = 5mn -> au choix si plus ou moins !!
let tempsRepos = 300;
// init pause fasle
let pause = false;
// init nbCycles
let nbCycles = 0;
// affichage nb cycles
cycles.innerText = `Nombre de cycles = ${nbCycles}`;
// affichage temps de travail
displayTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
    tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
}`;
// affichage temps de repos
displayPause.innerText = `${Math.trunc(tempsRepos / 60)} : ${
    tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
}`;
// //// Settings actions ////
// Commencer
btnGo.addEventListener("click", () => {
    //
    if (checkInterval === false) {
        checkInterval = true;
        //
        tempsInitial--;
        displayTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
            tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
        // répétition de la fonction toutes les secondes
        let timer = setInterval(() => {
            if (pause === false && tempsInitial > 0) {
                tempsInitial--;
                displayTravail.innerText = `${Math.trunc(
                    tempsInitial / 60
                )} : ${
                    tempsInitial % 60 < 10
                        ? `0${tempsInitial % 60}`
                        : tempsInitial % 60
                }`;
            } else if (
                pause === false &&
                tempsRepos === 0 &&
                tempsInitial === 0
            ) {
                tempsInitial = 1800;
                tempsRepos = 300;
                // incrémentation cycles
                nbCycles++;
                // maj nb cycles
                cycles.innerText = `Nombre de cycles = ${nbCycles}`;
                displayTravail.innerText = `${Math.trunc(
                    tempsInitial / 60
                )} : ${
                    tempsInitial % 60 < 10
                        ? `0${tempsInitial % 60}`
                        : tempsInitial % 60
                }`;
                displayPause.innerText = `${Math.trunc(tempsRepos / 60)} : ${
                    tempsRepos % 60 < 10
                        ? `0${tempsRepos % 60}`
                        : tempsRepos % 60
                }`;
            } else if (pause === false && tempsInitial === 0) {
                tempsRepos--;
                // affichage temps de repos
                displayPause.innerText = `${Math.trunc(tempsRepos / 60)} : ${
                    tempsRepos % 60 < 10
                        ? `0${tempsRepos % 60}`
                        : tempsRepos % 60
                }`;
            }
        }, 1000);
        // reset
        btnReset.addEventListener("click", () => {
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsRepos = 300;
            // reset affichage du btnPause
            btnPause.innerText = "Pause";
            // affichage temps de travail
            displayTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${
                tempsInitial % 60 < 10
                    ? `0${tempsInitial % 60}`
                    : tempsInitial % 60
            }`;
            // affichage temps de repos
            displayPause.innerText = `${Math.trunc(tempsRepos / 60)} : ${
                tempsRepos % 60 < 10 ? `0${tempsRepos % 60}` : tempsRepos % 60
            }`;
        });
    } else {
        return;
    }
});
// Pause
btnPause.addEventListener("click", () => {
    if (pause === false && checkInterval === true) {
        btnPause.innerText = "Play";
    } else if (pause === true) {
        btnPause.innerText = "Pause";
    }

    pause = !pause;
});
