let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEL = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let cards = [];
let message = "";

let player = {
  name: "Harriet",
  chips: 145,
  sayHello: function () {
    alert("Hello!");
  },
};

player.sayHello();

let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $ " + player.chips;

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
  isAlive = true;
  let firstCard = getRandomCards();
  let secondCard = getRandomCards();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
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
  if (isAlive === true && hasBlackJack === false) {
    let cardNew = getRandomCards();
    cards.push(cardNew);
    sum += cardNew;
    renderGame();
  }
}
