// function getRandom(min, max) {
//     return Math.trunc(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandom(0, 5));
function getRandomNumber(min, max) {
    let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];

    // 32 bits = 4 294 967 295
    // max = 4 294 967 295
    // en incluant le 0 = 4 294 967 296
    randomNumber = randomNumber / 4294967296;
    return Math.trunc(randomNumber * (max - min + 1)) + min;
}
//
// console.log(getRandomNumber(0, 5));
// function get numbers of characters
function addASet(fromCode, toCode) {
    let charactersList = "";
    for (let i = fromCode; i <= toCode; i++) {
        charactersList += String.fromCharCode(i);
    }
    return charactersList;
}
// object with numbers of characters
const charactersSet = {
    lowercaseChars: addASet(97, 122),
    uppercaseChars: addASet(65, 90),
    numbers: addASet(48, 57),
    symbols:
        addASet(33, 47) + addASet(58, 64) + addASet(91, 96) + addASet(123, 126),
};
// traitement du range
const range = document.querySelector("input[type='range']");
const rangeLabel = document.querySelector(".range-group label");
rangeLabel.textContent = `Taille du mot de passe : ${range.value}`;
let passwoordLength = range.value;
range.addEventListener("input", handleRange);
function handleRange(e) {
    passwordLength = e.target.value;
    rangeLabel.textContent = `Taille du mot de passe : ${passwordLength}`;
}
// Variables
const passwordContent = document.querySelector(".password-content");
const errorMsg = document.querySelector(".error-msg");
const generateBtn = document.querySelector(".generate-password-btn");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
let passwordLength = 10;
generateBtn.addEventListener("click", createPassword);
//
function createPassword() {
    const checkedDataSets = checkedSets();
    // test si les checkbox sont toutes cochées
    if (!checkedDataSets.length) {
        errorMsg.textContent = "Une case au moins doit être cochée !";
        return;
    } else errorMsg.textContent = "";
    //
    const concatenatedDataSets = checkedDataSets.reduce(
        (acc, cur) => acc + cur
    );
    // methode pour avoir au moins un caractère au hasard de chaque catégories choisies
    let password = "";
    let passwordBase = [];
    for (let i = 0; i < checkedDataSets.length; i++) {
        passwordBase.push(
            checkedDataSets[i][
                getRandomNumber(0, checkedDataSets[i].length - 1)
            ]
        );
    }
    // methode pour avoir TOUS les autres caractères au hasard
    for (let i = checkedDataSets.length; i < passwordLength; i++) {
        password +=
            concatenatedDataSets[
                getRandomNumber(0, concatenatedDataSets.length - 1)
            ];
    }
    // methode pour mélanger TOUS les caractères obtenus
    passwordBase.forEach((item, index) => {
        const randomIndex = getRandomNumber(0, password.length);
        password =
            password.slice(0, randomIndex) +
            passwordBase[index] +
            password.slice(randomIndex);
    });
    passwordContent.textContent = password;
    // console.log(password);
}
//
function checkedSets() {
    const checkedSets = [];
    checkboxes.forEach(
        (checkboxe) =>
            checkboxe.checked && checkedSets.push(charactersSet[checkboxe.id])
    );
    return checkedSets;
}
// console.log(checkedSets());
// function copy
const copyBtn = document.querySelector(".copy-btn");
let locked = false;
copyBtn.addEventListener("click", copyPassword);
function copyPassword() {
    navigator.clipboard.writeText(passwordContent.textContent);
    //
    if (!locked) {
        copyBtn.classList.add("active");
        locked = true;
        setTimeout(() => {
            copyBtn.classList.remove("active");
            locked = false;
        }, 600);
    }
}
