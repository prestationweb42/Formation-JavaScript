/**
 * Exercice le décompte
 * Créer un décompte de plusieurs jours heures minutes secondes
 * Utiliser setInterval et
 * new Date pour calculer l'écart entre 2 dates
 */
// Construction de la requete avec async
// const text = document.querySelector(".content_result h2").textContent;
// console.log(text);
const text = document.querySelector(".content_result h2");
// console.log(text);

function countDownValue() {
    // recuperation de la date actuelle
    const now = new Date();

    // indication de la date cible
    const countDownDate = new Date("December 30, 2023");

    /**
     * calcul de l'ecart entre les 2 dates
     * Important : il est possible d'effectuer directement des calculs entre les dates
     * et le résultat est en millisecondes
     */
    const distance = countDownDate - now;
    // console.log(distance);

    /**
     * A partir de ce resultat
     * on peut calculer les jours
     * avec Math.floor(x) qui renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
     * Note : (1000 * 60 * 60 * 24) = 24 heures en millisecondes
     * = 86 400 000
     */
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    /**
     * on peut calculer les heures
     * avec Math.floor(x) et modulo % pour recuperer le reste de chaque operation
     */
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    /**
     * on peut calculer les minutes
     * avec Math.floor(x) et modulo % pour recuperer le reste de chaque operation
     */
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    /**
     * on peut calculer les secondes
     * avec Math.floor(x) et modulo % pour recuperer le reste de chaque operation
     */
    const secondes = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(days, hours, minutes, secondes);

    /**
     * Affichage du decompte sur la page
     */
    text.textContent = `${days}j  ${hours}h  ${minutes}m  ${secondes}s`;
}

/**
 * Inclure la fonction dans un setInterval pour obtenir le decompte à chaque seconde
 */
setInterval(() => {
    countDownValue();
}, 1000);
