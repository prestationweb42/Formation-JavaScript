const nb = document.querySelector("#rayon");
const divResultat = document.querySelector("#resultat");
const perimetreCheckbox = document.querySelector("#perimetre");
const valid = document.querySelector(".btn");
const razBtn = document.querySelector(".btn-raz");

valid.addEventListener("click", () => {
    let resultat = 0;
    let color = "blue";
    let texte = "Périmètre";
    if (perimetreCheckbox.checked) {
        resultat = perimetre(nb.value);
    } else {
        resultat = aire(nb.value);
        color = "red";
        texte = "Aire";
    }
    const baliseH3 = document.createElement("h3");
    divResultat.appendChild(baliseH3);
    baliseH3.innerHTML = affichageResultat(color, texte, resultat);

    function perimetre(x) {
        let perimetre = Math.PI * x * 2;
        return perimetre.toFixed(2);
    }
    function aire(x) {
        let aire = Math.PI * Math.pow(x, 2);
        return aire.toFixed(2);
    }
    // ajout couleur pour mise en forme
    function affichageResultat(color, texte, resultat) {
        return `<h1 style="color:${color}"> ${texte} : ${resultat}</h1>`;
    }
});

razBtn.addEventListener("click", () => {
    nb.value = [];
    divResultat.innerHTML = "";
});
