// changer couleur en bleu
const btnBleu = document.querySelector(".btnBleu");
const sectionContainerBleu = document.querySelector(".section__bleu");
btnBleu.addEventListener("click", e => {
    if (sectionContainerBleu.classList.contains("bgColorBleu")) {
        console.log("je suis ici");
        sectionContainerBleu.classList.remove("bgColorBleu");
    } else {
        sectionContainerBleu.classList.add("bgColorBleu");
        console.log("je suis là");
    }
});
// changer couleur en vert -> différence dans le test du if
// avec la négation !
const btnVert = document.querySelector(".btnVert");
const sectionContainerVert = document.querySelector(".section__vert");
btnVert.addEventListener("click", e => {
    if (!sectionContainerVert.classList.contains("bgColorGreen")) {
        console.log("je suis ici");
        sectionContainerVert.classList.add("bgColorGreen");
    } else {
        sectionContainerVert.classList.remove("bgColorGreen");
        console.log("je suis là");
    }
});
