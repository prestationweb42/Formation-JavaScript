/**
 * 05 - Les fonctions sur les tableaux
 * Exo 14b - Intégrez le programme dans le html
 */

const mot = document.getElementById("myText");
const btnSubmit = document.getElementById("btn");
const tabOriginal = document.querySelector(".tab_original");

// Appel
btnSubmit.addEventListener("click", () => {
    const word = mot.value;
    const word2 = word.toLowerCase();
    tabOriginal.innerHTML =
        `<h2>${word2} : ` +
        (estPalindrome(word2) ? ` est ` : ` n'est pas `) +
        `un palindrome</h2>`;
    console.log(
        `${word2}` +
            (estPalindrome(word2) ? ` est ` : ` n'est pas `) +
            `un palindrome`
    );
    // Raz input
    mot.value = "";
});

// fonction
function estPalindrome(el) {
    let motToArray = el.split("");
    let motInverse = motToArray.slice().reverse();
    // console.log(motToArray);
    // console.log(motInverse);
    // boucle pour comparer les lettres du mot
    for (let i = 0; i < motToArray.length; i++) {
        if (motToArray[i] != motInverse[i]) {
            return false;
        }
        return true;
    }
}

