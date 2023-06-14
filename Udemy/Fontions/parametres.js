// Paramètres dans les fonctions
// Illustration avec taux de TVA
// Le taux n'est pas renseigné dans les parametres
// 10 = montant HT
let montantTTC = calculPrixTTC(10);
console.log(montantTTC);

// Fonction Prix TTC
// Parametres par défaut si le taux n'est pas renseigné
// Ici taux = 20% par defaut
// Note importante : le parametre par défaut doit se siter le plus à droite dans les parametres
function calculPrixTTC(montant, taux = 20) {
    return montant + (montant * taux) / 100;
}

// Exercice
function tableMultiplication(a, start = 1, end = 10) {
    if (start > end) {
        // variable temporaire pour inverser les valeurs
        let tmp = start;
        start = end;
        end = tmp;
    }
    for (let i = start; i < end; i++) {
        console.log(`${i} * ${a} = ${a * i}`);
    }
}
tableMultiplication(5, 8, 5);
