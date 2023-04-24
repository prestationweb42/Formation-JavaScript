// alert('toto')
const divResultFor = document.querySelector(".resultFor");
const divResultForIn = document.querySelector(".resultForIn");
const divResultForInObj = document.querySelector(".resultForInObj");
const divResultForOf = document.querySelector(".resultForOf");
const tab = [10, 20, 30, 40];
const objet = {
    nom: "Dan",
    age: 50,
};

// boucle for normale
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    const baliseH3 = document.createElement("h3");
    divResultFor.appendChild(baliseH3);
    baliseH3.innerHTML = `Position dans le tableau : ${i} -> ${tab[i]}`;
}

// boucle for in avec un tableau
for (let i in tab) {
    console.log(tab[i]);
    const baliseH3 = document.createElement("h3");
    divResultForIn.appendChild(baliseH3);
    baliseH3.innerHTML = `Position dans le tableau : ${i} -> ${tab[i]}`;
}
// boucle for in avec un objet
for (let i in objet) {
    console.log(objet[i]);
    const baliseH3 = document.createElement("h3");
    divResultForInObj.appendChild(baliseH3);
    baliseH3.innerHTML = `Position dans l'objet : ${i} -> ${objet[i]}`;
}

// boucle for of
for (let value of tab) {
    console.log(value);
    const baliseH3 = document.createElement("h3");
    divResultForOf.appendChild(baliseH3);
    baliseH3.innerHTML = `Valeur dans le tableau : ${value}`;
}
