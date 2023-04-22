// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
// Variables
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");
const resultsDisplay = document.querySelector(".results-display");
const loader = document.querySelector(".loader");

form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();

    if (input.value === "") {
        // msg error
        errorMsg.textContent = "Woops, veuillez remplir le champ !";
        // hidden cards
        resultsDisplay.textContent = "";
        // hidden animation
        loader.style.display = "none";
        return;
    } else {
        // on supprime le msg
        errorMsg.textContent = "";
        // on affiche l'animation
        loader.style.display = "flex";
        // on efface la recherche précédente
        resultsDisplay.textContent = "";
        // on appelle la function wikiApiCall avec input.value en param
        wikiApiCall(input.value);
    }
}
//
async function wikiApiCall(searchInput) {
    try {
        const response = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
        );
        // retour status en cas d'erreur URL
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        // console.log(response);
        const data = await response.json();
        // console.log(data);

        // on appelle la function createCards avec data.query.search en param
        createCards(data.query.search);
    } catch (error) {
        // msg error
        errorMsg.textContent = `${error}`;
        // hidden animation
        loader.style.display = "none";
    }
}
// function createCards
function createCards(data) {
    if (!data.length) {
        errorMsg.textContent = "Woops, aucun résultat !";
        return;
    }
    data.forEach((element) => {
        const url = `https://en.wikipedia.org/?curid=${element.pageid}`;
        const card = document.createElement("div");
        card.className = "result-item";
        card.innerHTML = `
        <h3 class="result-title">
        <a href=${url} target="_blank">${element.title}</a>
        </h3>
        <a href=${url} class="result-link" target="_blank">${url}</a>
        <span class="result-snippet">${element.snippet}</span>
        <br>
        `;
        resultsDisplay.appendChild(card);
    });
    // hidden animation
    loader.style.display = "none";
}
