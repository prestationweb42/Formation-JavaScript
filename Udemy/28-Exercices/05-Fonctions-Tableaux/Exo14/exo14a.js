/**
 * 05 - Les fonctions sur les tableaux
 * Exo 14a - Créez une fonction pour dire si un est un palindrome ou non
 */

const tabOriginal = document.querySelector(".tab_original");

const mot = "rever";

estPalindrome(mot);
tabOriginal.innerHTML =
    `<h2>${mot}` +
    (estPalindrome(mot) ? ` est ` : ` n'est pas `) +
    `un palindrome</h2>`;
console.log(
    `${mot}` + (estPalindrome(mot) ? ` est ` : ` n'est pas `) + `un palindrome`
);
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
