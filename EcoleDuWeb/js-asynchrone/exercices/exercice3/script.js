/**
 * Exercice fetch() avec JSON
 *
 */

// Construction de la requete
function getData(url) {
    fetch(url)
        .then(response => {
            // console.log(response);
            // Gestion des erreurs
            if (!response.ok) throw Error(`${response.status}`);
            return response.json();
        })
        .then(data => {
            // console.log(data);
            createData(data);
        })
        .catch(error => {
            document.querySelector(
                ".error_msg"
            ).textContent = `Error : ${error.message}`;
            console.log(error);
        });
}

// Voir plus d'images
const btn = document.querySelector("button");
btn.addEventListener("click", e => {
    e.preventDefault();
    getData(
        // "http://127.0.0.1:5500/EcoleDuWeb/js-asynchrone/exercices/exercice3/db.json"
        "https://prestationweb42.github.io/Formation-JavaScript/EcoleDuWeb/js-asynchrone/exercices/exercice3/db.json"
    );
});

function createData(textData) {
    const contentData = document.querySelector(".content_result");
    // console.log(textData);
    const pieces = textData.pieces;
    for (let i = 0; i < pieces.length; i++) {
        let toto = pieces[i].disponibilite ? "Oui" : "Non";
        contentData.innerHTML +=
            "<div class='result'>" +
            // "<p>" +
            // `id = ${pieces[i].id}` +
            // "</p>" +
            "<h2>" + pieces[i].nom + "</h2>" +
            "<img src='" + pieces[i].image + "'  >" +
            "<p>" + `Prix = <strong>${pieces[i].prix} </strong>€` + "</p>" +
            "<p>" + pieces[i].description + "</p>" +
            "<p>" + `Disponible : ` +
            "<strong>" + toto + "</strong>" +
            "</p>" +
            "</div>";
    }
}
