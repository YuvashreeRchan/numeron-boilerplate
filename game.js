let num1;
let num2;

const num1Element = document.getElementById("number1");
const num2Element = document.getElementById("number2");

const timerElement = document.getElementById("timer");

let score = 0;
let intervalId;
let timeRemaining;

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Build a timer for the game
function startInterval()
{
    intervalId = setInterval(() => 
    {
        timeRemaining--;
        timerElement.innerText = timeRemaining;
        if (timeRemaining == 0) endGame();
    }, 1000);
}

function stopInterval() 
{
    clearInterval(intervalId);
    timeRemaining = 5;
    timerElement.innerText = timeRemaining;
}

function endGame() {
    stopInterval();
    window.location.href = "./gameover.html";
    localStorage.setItem("score", score);
}

function displayRandomNumber() {
    stopInterval();
    num1 = randomNumber();
    num2 = randomNumber();
    num1Element.innerText = num1;
    num2Element.innerText = num2;
    startInterval();
}

function compareNumber(operation) {
if (
    (operation == "greater-than" && num1 > num2) ||
    (operation == "lesser-than" && num1 < num2) ||
    (operation == "equal-to" && num1 === num2)
    ) {
        score++;
        displayRandomNumber();
    } else endGame();
}

displayRandomNumber();

// Listen for clicks on the button container
document.getElementById("buttons").addEventListener("click", (event) => 
{
    const operation = event.target.id;
    compareNumber(operation);
});