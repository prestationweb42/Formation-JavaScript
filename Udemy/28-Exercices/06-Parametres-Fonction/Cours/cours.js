/**
 * 06 - Paramètres sur les fonctions
 * Définir des valeurs par défaut
 * Le cours avec un exemple avec 2 taux de TVA + remise
 */

// prix du produit HT
let montantHT = 10;

// avec un taux par defaut de 20% - pas besoin de renseigner le taux car déjà dans la fonction
let montantTTC20 = calculPrixTTC(montantHT);
console.log(montantTTC20);

// OU avec un taux different de 20% mais cette fois il faut renseigner le parametre avec le taux voulu
let montantTTC5 = calculPrixTTC(montantHT, 5);
console.log(montantTTC5);

// fonction calcul avec un taux par défaut de 20%
// si on veut ajouter une remise dans le calcul et si on considère qu'elle est moins prioritaire que le taux, elle se située le plus à droite
function calculPrixTTC(montant, taux = 20) {
    return montant + (montant * taux) / 100;
}

// Avec remise
let bonnet = 15;
// le calcul du prix se fait avec taux et une remise par défaut
console.log(calculPrixTTCRemise(bonnet));
// si les paramètres doivent changer, il faut les indiquer dans l'appel de la fonction
console.log(calculPrixTTCRemise(bonnet,5,2));


// si on veut ajouter une remise dans le calcul et si on considère qu'elle est moins prioritaire que le taux, elle doit se située le plus à droite
function calculPrixTTCRemise(montant, taux = 20, remise = 1) {
    let montantTTC = montant + (montant * taux) / 100;
    return montantTTC - (montantTTC * remise) / 100;
}
