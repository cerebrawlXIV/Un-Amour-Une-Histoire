// Récupération des différents éléments dans le DOM
const burger = document.querySelector(".burger");
const nav = document.querySelector("#mobile-nav");
const title = document.querySelector(".company-name");

// Récupération du clique sur l'icone burger
burger.addEventListener("click", () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    title.classList.toggle('disabled');
})