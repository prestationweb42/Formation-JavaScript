/**
 * Exercice 2 Blog Articles
 * Recuperer des articles de blog
 * https://jsonplaceholder.typicode.com/posts
 */

//
const grid = document.querySelector(".grid");

// Construction de la requete avec async
async function getArticles(url) {
    // on déclare imgData pour ne pas tester la ou les fonctions autres que les récupérations de données dans le try
    let articles;
    // Gestion des erreurs
    try {
        const response = await fetch(url);
        // Gestion des erreurs
        if (!response.ok) throw Error(`${response.status}`);
        // Injection des données dans la variable
        articles = await response.json();
    } catch (error) {
        document.querySelector(
            ".error_msg"
        ).textContent = `Error : ${error.message}`;
        console.dir(error);
    }
    // on appel la fonction de création d'image SI les données sont présentes - true
    if (articles) {
        console.log(articles);
        createArticles(articles);
    }
}

// Appel de la fonction
getArticles("https://jsonplaceholder.typicode.com/posts");

function createArticles(articles) {
    articles.forEach(article => {
        const item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
         <h2></h2>
         <a href="#">Lire l'article</a>
        `;
        item.querySelector("h2").textContent = article.title;
        grid.appendChild(item);
    });
}
