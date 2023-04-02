// label animation
const searchInput = document.querySelector(".search-poke input");

// searchInput.addEventListener("input", function (e) {
//     if (e.target.value !== "") {
//         e.target.parentNode.classList.add("activ-input");
//     } else if (e.target.value === "") {
//         e.target.parentNode.classList.remove("activ-input");
//     }
// });

searchInput.addEventListener("input", function (e) {
    if (e.target.value !== "") {
        e.target.parentNode.classList.add("activ-input");
    } else if (e.target.value === "") {
        e.target.parentNode.classList.remove("activ-input");
    }
});

// variables
let allPokemon = [];
let tableauFin = [];
const listePoke = document.querySelector(".list-poke");
let index = 21;
const loader = document.querySelector(".loader");

const types = {
    grass: "#78c850",
    ground: "#E2BF65",
    dragon: "#6F35FC",
    fire: "#F58271",
    electric: "#F7D02C",
    fairy: "#D685AD",
    poison: "#966DA3",
    bug: "#B3F594",
    water: "#6390F0",
    normal: "#D9D5D8",
    psychic: "#F95587",
    flying: "#A98FF3",
    fighting: "#C25956",
    rock: "#B6A136",
    ghost: "#735797",
    ice: "#96D9D6",
};

// function fetchPokemonBase
function fetchPokemonBase() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((allPoke) => {
            // console.log(allPoke);
            allPoke.results.forEach((pokemon) => {
                fetchPokemonComplet(pokemon);
            });
        });
}
// call function
fetchPokemonBase();

// function fetchPokemonComplet
function fetchPokemonComplet(pokemon) {
    let objPokemonFull = {};
    let url = pokemon.url;
    let nameP = pokemon.name;

    fetch(url)
        .then((response) => response.json())
        .then((pokeData) => {
            // console.log(pokeData)
            objPokemonFull.pic = pokeData.sprites.front_default;
            objPokemonFull.type = pokeData.types[0].type.name;
            objPokemonFull.id = pokeData.id;

            fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
                .then((response) => response.json())
                .then((pokeData) => {
                    // console.log(pokeData);
                    objPokemonFull.name = pokeData.names[4].name;
                    allPokemon.push(objPokemonFull);
                    if (allPokemon.length === 151) {
                        // console.log(allPokemon);
                        tableauFin = allPokemon
                            .sort((a, b) => {
                                return a.id - b.id;
                            })
                            .slice(0, 21);
                        // console.log(tableauFin);
                        createCard(tableauFin);
                        // plus d'animation loader
                        loader.style.display = "none";
                    }
                });
        });
}

// Cards Create with function createCard
function createCard(arr) {
    for (let i = 0; i < arr.length; i++) {
        const carte = document.createElement("li");
        //
        let couleur = types[arr[i].type];
        carte.style.background = couleur;
        //
        const txtCarte = document.createElement("h5");
        txtCarte.innerText = arr[i].name;
        //
        const idCarte = document.createElement("p");
        idCarte.innerText = `ID# ${arr[i].id}`;
        //
        const imgCarte = document.createElement("img");
        imgCarte.src = arr[i].pic;
        //
        carte.appendChild(imgCarte);
        carte.appendChild(txtCarte);
        carte.appendChild(idCarte);
        //
        listePoke.appendChild(carte);
    }
}

// Infinit Scroll
window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight);
    if (clientHeight + scrollTop >= scrollHeight - 20) {
        addPoke(6);
    }
});
// function addPoke
function addPoke(nb) {
    if (index > 151) {
        return;
    }
    const arrToAdd = allPokemon.slice(index, index + nb);
    createCard(arrToAdd);
    index += nb;
}

// Search
searchInput.addEventListener("keyup", search);
// function search
function search() {
    if (index < 151) {
        // quand on commence à taper au clavier, on ajoute la différence
        // 151 - 21(cards déjà affichées) = 130
        // pour les besoins de la recherche, il faut afficher toutes les cards
        addPoke(130);
    }
    let filter, allLi, titleValue, allTitles;
    // on uppercase les valeurs pour avoir toutes la même casse
    filter = searchInput.value.toUpperCase();
    // on sélectionne tout les Li
    allLi = document.querySelectorAll("li");
    // on sélectionne les H5 dans les Li
    allTitles = document.querySelectorAll("li > h5");
    //
    for (let i = 0; i < allLi.length; i++) {
        //
        titleValue = allTitles[i].innerText;
        //
        if (titleValue.toUpperCase().indexOf(filter) > -1) {
            allLi[i].style.display = "flex";
        } else {
            allLi[i].style.display = "none";
        }
    }
}
