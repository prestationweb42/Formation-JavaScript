let a = 5;
let sum = 0;
for (let i = 0; i <= a; i++) {
    sum += i;
}
console.log("la somme de " + 5 + " est : " + sum);

// Factorielle
// let b = 5;
// let facto = 1;
// for (let i = 1; i <= b; i++) {
//     facto *= i;
// }
// console.log("la factorielle de " + 5 + " est : " + facto);
//
const numFacto = document.querySelector("#number");
const valid = document.querySelector(".btn");
const divResult = document.querySelector(".resultat");
//
valid.addEventListener("click", () => {
    // console.log(numFacto.value);
    let b = numFacto.value;
    let facto = 1;
    for (let i = 1; i <= b; i++) {
        facto *= i;
    }
    console.log("la factorielle de " + b + " est : " + facto);
    divResult.innerHTML = "La factorielle de " + b + " est " + facto;
});
