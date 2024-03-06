// Iteration 5: Store the player score and display it on the game over screen

const playAgainBtn = document.getElementById("play-again-button");
const scoreBoard = document.getElementById("score-board");

let score = localStorage.getItem("score");
console.log(score);

scoreBoard.innerHTML = score;
playAgainButton.onclick = (event) => 
{
    location.href = "./game.html";
};