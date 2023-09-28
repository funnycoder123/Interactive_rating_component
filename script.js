const mainCard = document.querySelector('.main_card');
const thankCard = document.getElementById("thank");

const submitButton = document.getElementById("submit");

let rating = document.getElementById("rating");

function one() {
    rating.innerHTML = "You selected 1 out of 5";
}
function two() {
    rating.innerHTML = "You selected 2 out of 5";
}
function three() {
    rating.innerHTML = "You selected 3 out of 5";
}
function four() {
    rating.innerHTML = "You selected 4 out of 5";
}
function five() {
    rating.innerHTML = "You selected 5 out of 5";
}

submitButton.addEventListener("click", () => {
    mainCard.classList.add("hidden");
    thankCard.classList.remove("hidden");
});