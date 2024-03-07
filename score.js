// Iteration 5: Store the player score and display it on the game over screen
const playAgainBtn = document.getElementById("play-again-button");
const scoreBoard = document.getElementById("score-board");

scoreBoard.textContent= localStorage.getItem("score");
playAgainBtn.addEventListener("click", () => {
    window.location.href = "./game.html";
});
