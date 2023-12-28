/**
 * Exercice 4
 * API Recherche adresse
 * https://adresse.data.gouv.fr/api-doc/adresse
 */

//
const input = document.getElementById("myInput");
const adressList = document.querySelector(".adress_list");
let adressData = [];
const fetchDatas = async () => {
    input.addEventListener("input", async e => {
        if (e.target.value.length > 3) {
            const baseUrl = "https://api-adresse.data.gouv.fr/search/";
            const queryParams = new URLSearchParams({
                q: e.target.value,
            });
            const URL = `${baseUrl}?${queryParams}`;
            try {
                const response = await fetch(URL);
                // Gestion des erreurs
                if (!response.ok) throw Error(`${response.status}`);
                const data = await response.json();
                // console.log(data.features[0].properties);
                adressData = data.features;
                // console.log(adressData);
            } catch (error) {
                document.querySelector(
                    ".error_msg"
                ).textContent = `Error : ${error.message}`;
                console.dir(error);
            }
            renderAdressList();
        }
    });
};

const renderAdressList = () => {
    adressList.innerHTML = "";
    adressData.forEach(({ properties }, index) => {
        const li = document.createElement("li");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        //
        p1.textContent = properties.label;
        p2.textContent = properties.context;
        //
        li.appendChild(p1);
        li.appendChild(p2);
        //
        li.classList.add("styles");
        if (index === 0) {
            // Ajout de style aux li
            li.setAttribute(
                "style",
                "background-color: green; color: white; border-radius: .5rem;"
            );
        }
        //
        adressList.appendChild(li);
        //
        li.addEventListener("click", () => {
            input.value = li.textContent;
            adressList.style.display = "none";
        });
    });
    adressList.style.display = "block";
};

fetchDatas();
