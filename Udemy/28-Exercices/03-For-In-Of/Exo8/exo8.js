/**
 * Exo 8
 */
let noms = [];
const inputNom = document.querySelector("#nom");
const btn = document.querySelector(".btn");
const divResultat = document.querySelector(".resultat");

btn.addEventListener("click", function () {
    noms.push(inputNom.value);
    afficherNoms();
    inputNom.value = null;
});

function afficherNoms() {
    let list = "<ul>";
    for (const nom of noms) {
        list += `<li>${nom}</li>`;
    }
    list += "</ul>";
    divResultat.innerHTML = list;
}
