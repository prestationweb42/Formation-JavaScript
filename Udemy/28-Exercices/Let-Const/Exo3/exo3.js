const nb = document.querySelector("#rayon");
const divResultat = document.querySelector("#resultat");
const perimetreCheckbox = document.querySelector("#perimetre");
const valid = document.querySelector(".btn");

valid.addEventListener("click", () => {
    let resultat = 0;
    if (perimetreCheckbox.checked) {
        resultat = perimetre(nb.value);
    } else {
        resultat = aire(nb.value);
    }
    divResultat.innerHTML = resultat;
    function perimetre(x) {
        return "Périmètre : " + Math.PI * x * 2;
    }
    function aire(x) {
        return "Aire : " + Math.PI * Math.pow(x, 2);
    }
});
