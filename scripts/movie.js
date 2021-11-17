const movie = document.querySelector("#shop-movie video");
const playMovie = document.querySelector("#shop-movie div");

playMovie.addEventListener("click", (e) => {
    if(movie.paused){
        movie.play();
    } else{
        movie.pause();
    }
    playMovie.classList.toggle("active");
});
