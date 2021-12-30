const navDesktop = document.querySelector("#desktop-nav");
const liList = document.querySelector("#desktop-nav .li-list");
const headerBot = document.querySelector("header .upper-part");

liList.addEventListener("mouseover", () => {
    navDesktop.classList.toggle("nav-mouse-up");
    headerBot.classList.toggle("mouse-up");
});

liList.addEventListener("mouseout", () => {
    navDesktop.classList.toggle("nav-mouse-up");
    headerBot.classList.toggle("mouse-up");
});