let firstCard = getRandomCards();
let secondCard = getRandomCards();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEL = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

let message = "";

function getRandomCards() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Yaaay!! You got blackjack ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game ";
    isAlive = false;
  }

  messageEL.textContent = message;
}

function newCard() {
  let card = getRandomCards();
  cards.push(card);
  sum += card;
  renderGame();
}
