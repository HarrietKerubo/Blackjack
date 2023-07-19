let firstCard = 10;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEL = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let message = "";

function startgame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Yaaay!! You got blackjack ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game ";
    isAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  messageEL.textContent = message;
}
