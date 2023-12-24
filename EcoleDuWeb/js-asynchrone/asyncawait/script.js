/**
 * methode async await
 * les mots clés async await vont changer le comportement d'une fonction
 * Lorsque l'on rajoute async devant une fonction, celle-ci va toujours retourner une promesse
 * comme une méthode .then()
 * cela va permettre de potentiellement enchainer des .then() à cette dernière
 *
 * https://api.thecatapi.com/v1/images/search
 */
// Construction de la requete avec async
async function getCatImg(url) {
    // on déclare imgData pour ne pas tester la ou les fonctions autres que les récupérations de données dans le try
    let imgData;
    // Gestion des erreurs
    try {
        const response = await fetch(url);
        // Gestion des erreurs
        if (!response.ok) throw Error(`${response.status}`);
        // Injection des données dans la variable
        imgData = await response.json();
    } catch (error) {
        document.querySelector(
            ".error_msg"
        ).textContent = `Error : ${error.message}`;
        console.dir(error);
    }
    // on appel la fonction de création d'image SI les données sont présentes - true
    if (imgData) {
        createImg(imgData);
    }
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
