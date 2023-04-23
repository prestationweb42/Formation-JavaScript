// Rappel nombre aléatoire en JS (ici 1 et 2)
// const random = Math.floor(Math.random() * 2);
// console.log(random);

let randoms = [];
for (let i = 0; i < 10; i++) {
    let numAlea = Math.floor(Math.random() * 2);
    randoms.push(numAlea);
}
console.log(randoms);

let nbZero = 0;
let nbUn = 0;
for (const value of randoms) {
    if (value === 1) {
        nbUn++;
    } else {
        nbZero++;
    }
}
console.log(nbUn);
console.log(nbZero);
console.log(`Le nombre de 1 est ${nbUn} et le nombre de zéro est ${nbZero}`);
const divResultat = document.querySelector(".resultat");
const baliseH3 = document.createElement("h3");
divResultat.appendChild(baliseH3);
baliseH3.innerHTML = `Le nombre de 1 est ${nbUn} et le nombre de zéro est ${nbZero}, le nombre de 1 représente : ${(nbUn/10)*100} % du résultat !`;
