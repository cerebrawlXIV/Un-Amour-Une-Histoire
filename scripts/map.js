let addressIcon = document.querySelector(".address-icon");
let adressArea = document.querySelector("#address");

addressIcon.addEventListener("click", () => {
    adressArea.classList.toggle("active");
    addressIcon.classList.toggle("active");
});