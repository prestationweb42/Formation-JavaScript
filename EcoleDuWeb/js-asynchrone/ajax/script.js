/**
 * AJAX Asynchronous JavaScript And XML
 * XMLHttpRequest
 * https://api.thecatapi.com/v1/images/search
 */
// Construction de la requete
function getCatImg(url, callback) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    // Initialisation d'un appel
    xhr.open("GET", url, true);
    // Type de reponse
    xhr.responseType = "json";
    // Fonction callback
    xhr.addEventListener("load", handleLoad);
    function handleLoad() {
        callback(xhr.response);
    }
    // Envoi de la requete
    xhr.send();
}

// Envoi de plusieurs images
const btn = document.querySelector("button");
btn.addEventListener("click", e => {
    e.preventDefault();
    setInterval(() => {
        // Requete
        getCatImg("https://api.thecatapi.com/v1/images/search", data => {
            // console.log(data);
            const contentImg = document.querySelector(".contentImg");
            const img = document.createElement("img");
            img.src = data[0].url;
            // contentImg.appendChild(img);
            contentImg.innerHTML = '<img src="' + img.src + '">';
        });
    }, 4000);
});
