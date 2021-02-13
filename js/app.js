// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card]

// declare modal
let modal = document.getElementById("overlay");
let closeicon = document.getElementById("closeIcon");
var audio = new Audio();

// @description shuffles cards when page is refreshed / loads
document.body.onload = startGame();


// @description function to start a new play 
function startGame() {

}
// @description congratulations when all cards match, show modal and moves, time and rating
function congratulations() {
    audio.src = 'millionaire.mp3';
    // show congratulations modal
    modal.classList.add("show");
    // declare star rating variable
    let img = new Image();
    img.src = "images/w" + (1 + Math.floor(Math.random() * 30)) + ".jpg";
    img.onload = function () {
        modal.querySelector(".spinner").classList.add("hide");
        modal.querySelector("#closeIcon").classList.remove("hide");
        modal.querySelector("#image").appendChild(img);
        audio.currentTime = 0;
        audio.play();
    }
    //closeicon on modal
    closeModal();
};


// @description close icon on modal
function closeModal() {
    closeicon.addEventListener("click", function (e) {
        modal.classList.remove("show");
        modal.querySelector("#image").innerHTML = null;
        audio.currentTime = 0;
        audio.pause();
        startGame();
    });
}



// loop to add event listeners to each card
cards.forEach(element => {
    element.addEventListener('click', congratulations);
});