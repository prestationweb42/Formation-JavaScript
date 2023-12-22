/**
 * methode fetch()
 * https://api.thecatapi.com/v1/images/search
 */
// Construction de la requete
function getCatImg(url) {
    fetch(url)
        .then(response => {
            // console.log(response);
            // Gestion des erreurs
            if (!response.ok) throw Error(`${response.status}`);
            return response.json();
        })
        .then(data => {
            // console.log(data);
            createImg(data);
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
    getCatImg("https://api.thecatapi.com/v1/images/search");
});

function createImg(imgData) {
    const contentImg = document.querySelector(".contentImg");
    const img = document.createElement("img");
    img.src = imgData[0].url;
    contentImg.innerHTML = '<img src="' + img.src + '">';
}
