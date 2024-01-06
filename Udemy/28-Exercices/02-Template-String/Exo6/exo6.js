/**
 * Template String
 * Exo 6
 */
const resulPadStart = document.querySelector("#display_result_padStart");
const resulPadEnd = document.querySelector("#display_result_padEnd");
let tab = [12, 5, 28, 100];
// padStart
for (let i = 0; i < tab.length; i++) {
    const element = tab[i].toString().padStart(3, 0);
    console.log(element);

    const baliseH3 = document.createElement("h3");
    resulPadStart.appendChild(baliseH3);
    baliseH3.innerHTML = element;
}

// padEnd
for (let i = 0; i < tab.length; i++) {
    const element = tab[i].toString().padEnd(3, 0);
    console.log(element);

    const baliseH3 = document.createElement("h3");
    resulPadEnd.appendChild(baliseH3);
    baliseH3.innerHTML = `<h3 style="color: red"> ${element}`;
}
