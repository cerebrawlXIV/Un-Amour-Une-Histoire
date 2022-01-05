const navDesktop = document.querySelector("#desktop-nav");
const liList = document.querySelector("#desktop-nav .li-list");
const headerBot = document.querySelector("header .upper-part");

liList.addEventListener("mouseover", () => {
    navDesktop.classList.add("nav-mouse-up");
    headerBot.classList.add("mouse-up");
});

liList.addEventListener("mouseout", () => {
    navDesktop.classList.remove("nav-mouse-up");
    headerBot.classList.remove("mouse-up");
});