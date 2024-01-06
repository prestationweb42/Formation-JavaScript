/**
 * Template String
 */
const V1 = { nom: "Paris", lat: 48.8534, long: 2.3488 };
const V2 = { nom: "Toulouse", lat: 46.6043, long: 1.4437 };
const V3 = { nom: "Lyon", lat: 45.75, long: 4.85 };
const displayResult = document.querySelector(".display_result");

affichageCoordonnees(V1.nom, V1.lat, V1.long);
affichageCoordonnees(V2.nom, V2.lat, V2.long);
affichageCoordonnees(V3.nom, V3.lat, V3.long);

function affichageCoordonnees(a, b, c) {
    let affichage = "";
    affichage += `------${a}------\n`;
    affichage += `Latitude : ${b} \n`;
    affichage += `Longitude : ${c}`;
    console.log(affichage);
}

// Display on front page
displayLocation(V1.nom, V1.lat, V1.long);
displayLocation(V2.nom, V2.lat, V2.long);
displayLocation(V3.nom, V3.lat, V3.long);

function displayLocation(a, b, c) {
    displayResult.innerHTML += `------${a}------<br>
    Latitude : ${b} <br>
    Longitude : ${c}<br>`;
}
