const firstPicture = document.querySelector("#first-picture");
const secondPicture = document.querySelector("#second-picture");

secondPicture.addEventListener('click', () => {
    let srcFirstPicture = firstPicture.getAttribute('src');
    let srcSecondPicture = secondPicture.getAttribute('src');
    firstPicture.setAttribute('src', srcSecondPicture);
    secondPicture.setAttribute('src', srcFirstPicture);
});




