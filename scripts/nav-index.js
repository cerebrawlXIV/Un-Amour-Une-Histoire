const navDesktop = document.querySelector("#desktop-nav");
const liList = document.querySelector("#desktop-nav .li-list");
const headerIndex = document.querySelector("#index-header");

liList.addEventListener("mouseover", () => {
    navDesktop.classList.toggle("nav-mouse-up");
    headerIndex.classList.toggle("mouse-up");
});

liList.addEventListener("mouseout", () => {
    navDesktop.classList.toggle("nav-mouse-up");
    headerIndex.classList.toggle("mouse-up");
});