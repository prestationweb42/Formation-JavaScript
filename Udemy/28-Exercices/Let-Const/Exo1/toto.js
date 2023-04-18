// alert("toto");
let p1 = 10;
let p2 = 6;
let p3 = 10;
let moyenne = calculMoyenne(p1, p2, p3);
console.log(moyenne);
//
console.log("P1 : " + p1 + "; P2 : " + p2 + "; P3 : " + p3);
console.log("La somme est de : " + somme);
console.log("La moyenne est de : " + moyenne);
//
function calculMoyenne(a, b, c) {
    a = a + 5;
    b = 6;
    c = 12;
    let somme = a + b + c;
    const resultat = somme / 3;
    return resultat;
}
