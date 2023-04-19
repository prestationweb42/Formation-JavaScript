const nb = document.querySelector("#rayon");
const divResultat = document.querySelector("#resultat");
const perimetreCheckbox = document.querySelector("#perimetre");
const valid = document.querySelector(".btn");
const razBtn = document.querySelector(".btn-raz");

valid.addEventListener("click", () => {
    let resultat = 0;
    if (perimetreCheckbox.checked) {
        resultat = perimetre(nb.value);
    } else {
        resultat = aire(nb.value);
    }
    const baliseH3 = document.createElement("h3");
    divResultat.appendChild(baliseH3);
    baliseH3.innerHTML = resultat;

    function perimetre(x) {
        let perimetre = Math.PI * x * 2;
        return "Périmètre : " + perimetre.toFixed(2);
    }
    function aire(x) {
        let aire = Math.PI * Math.pow(x, 2);
        return "Aire : " + aire.toFixed(2);
    }
});

razBtn.addEventListener("click", () => {
    nb.value = [];
    divResultat.innerHTML = "";
});
