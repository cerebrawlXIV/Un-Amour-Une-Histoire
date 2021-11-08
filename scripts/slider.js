
// Récupération du slider version mobile et desktop
const mobileSlide = document.querySelectorAll('#mobile-slider .slide');
const desktopSlide = document.querySelectorAll('#desktop-slider .slide');

// Compteur
let count = 0;

// Largeur au chargement du site
let width = window.innerWidth - 17;

// Nombre de slide au chargement du site
let nbSlide = slideNumber();

// Contenu des slide au chargement du site
let slide = slideContents();

// Modification du nombre de slide et du contenu de 
// celles-ci en fonction de la largeur
window.addEventListener("resize", () => {
    width = window.innerWidth - 17;
    nbSlide = slideNumber();
    slide = slideContents();
});


// Permet de changer d'image toute les x secondes
setInterval(function(){
    if(count < nbSlide -1){
        count++;
    } else {
        count = 0;
    }
    disabled();
    slide[count].classList.add("active");
}, 6000);



// Connaitre le nombre de slide en fonction du width
function slideNumber(){
    if(width <= 1024){
        return mobileSlide.length;
    } else {
        return desktopSlide.length;
    }
}

// Connaitre le contenu des slide en fonction du width
function slideContents(){
    if(width <= 1024){
        return mobileSlide;
    } else {
        return desktopSlide;
    }
}


// Desactiver un slide
function disabled(){
    for(let i = 0; i < nbSlide; i++){
        slide[i].classList.remove("active");
    }
}

