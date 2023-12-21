/**
 * setTimeout
 * setInterval
 * STOP setTimeout setInterval
 */
// setTimeout
const resultSetout = document.querySelector(".setout");
const resultsetinterval = document.querySelector(".setinterval");
const btnSetout = document.querySelector(".btn_setout");
const btnSetInterval = document.querySelector(".btn_setinterval");
const resultgreen = document.querySelector(".resultgreen");
const resultred = document.querySelector(".resultred");
const btnStopSetinterval = document.querySelector(".btn_stop_setinterval");

btnSetout.addEventListener("click", () => {
    let val = document.querySelector(".input_setout").value;
    val = val * 1000;
    setTimeout(() => {
        resultSetout.innerHTML =
            "Voici le résultat de setTimeout au bout de " + val / 1000 + " s";
    }, val);
    console.log(val);
});

// setInterval
btnSetInterval.addEventListener("click", () => {
    let val = document.querySelector(".input_setinterval").value;
    val = val * 1000;
    const stopSetInter = setInterval(() => {
        resultgreen.classList.toggle("green");
    }, val);
    // Stop setInterval
    btnStopSetinterval.addEventListener("click", () => {
        clearTimeout(stopSetInter);
    });
});
