const btnRes = document.querySelector(".btn-responsive-menu");
const listeNav = document.querySelector(".liste-nav");
const links = document.querySelectorAll(".nav-link");
btnRes.addEventListener("click", e => {
    btnRes.classList.toggle("active");
    listeNav.classList.toggle("active-menu");
});
// Boucle sur chaque lien pour refermer le menu après clic
links.forEach(link => {
    link.addEventListener("click", () => {
        btnRes.classList.toggle("active");
        listeNav.classList.toggle("active-menu");
        console.log("clic ok");
    });
});
