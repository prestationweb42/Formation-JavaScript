// let image = document.getElementById("image");
// let page = 1;
// image.addEventListener("click", () => {
//     page++;
//     console.log(page);
//     if (page > 6) {
//         page = 1;
//     }
//     image.setAttribute("src", `img/${page}.png`);
// });
let image = document.getElementById("image");
let page = 1;
image.addEventListener("click", () => {
    page++;
    if (page > 6) {
        page = 1;
    }
    image.setAttribute("src", ` img/${page}.png`);
});
