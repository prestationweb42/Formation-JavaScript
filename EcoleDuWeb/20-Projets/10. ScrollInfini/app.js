/**
 * Animation Clone Unsplash
 */
const imgList = document.querySelector(".images-list");
const errorMsg = document.querySelector(".error-msg");
let searchQuery = "random";
let pageIndex = 1;
//
async function fetchData() {
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchQuery}&client_id=nakX871BoRIWdC6rOAqkYfVmPgfrnCC3mecFH9vN9JQ`
        );
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }
        //
        const data = await response.json();
        //
        if (!data.total) {
            imgList.textContent = "";
            throw new Error("Attention, votre recherche n'existe pas");
        }
        console.log(data);
        createImages(data.results);
    } catch (error) {
        errorMsg.textContent = `${error}`;
    }
}
fetchData();
//
function createImages(data) {
    data.forEach(img => {
        const linkImg = document.createElement("a");
        linkImg.href = img.links.download;
        linkImg.target = "_blank";
        //
        const newImg = document.createElement("img");
        newImg.src = img.urls.regular;
        //
        linkImg.appendChild(newImg);
        imgList.appendChild(linkImg);
    });
}
//
const observer = new IntersectionObserver(handleIntersect, {
    rootMargin: "50%",
});
observer.observe(document.querySelector(".infinite-marker"));
function handleIntersect(entries) {
    console.log(entries);
    if (window.scrollY > window.innerHeight && entries[0].isIntersecting) {
        pageIndex++;
        fetchData();
    }
}
//
const inPut = document.querySelector("#search");
const form = document.querySelector("form");
form.addEventListener("submit", handleSearch);
function handleSearch(e) {
    e.preventDefault();
    imgList.textContent = "";
    if (!inPut.value) {
        errorMsg.textContent = "Veuillez entrer un mot valide !";
        return;
    }
    errorMsg.textContent = "";
    searchQuery = inPut.value;
    pageIndex = 1;
    fetchData();
}

//
const scrollTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".scroll-to-top");
    scroll.classList.toggle("active", window.scrollY > 300);
});
scrollTop.addEventListener("click", scrollToTop);
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
