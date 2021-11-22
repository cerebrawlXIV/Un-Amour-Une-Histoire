const card = document.querySelectorAll(".opinion-card .card");
const cardAmount = card.length;

const leftButton = document.querySelector(".opinion-button-left");
const rightButton = document.querySelector(".opinion-button-right");

let cardNumber = 0;

leftButton.addEventListener("click", () => {
    previousCard();
})

rightButton.addEventListener("click", () => {
    nextCard();
})

function nextCard(){
    card[cardNumber].classList.remove("active");
    if(cardNumber === cardAmount -1){
        cardNumber = 0;
    } else {
        cardNumber++;
    }
    card[cardNumber].classList.add("active");
}

function previousCard(){
    card[cardNumber].classList.remove("active");
    if(cardNumber === 0){
        cardNumber = cardAmount -1;
    } else {
        cardNumber--;
    }
    card[cardNumber].classList.add("active");
}