const guess = document.querySelector(".guess");
let message = document.querySelector(".message");
let secretNum = document.querySelector(".secret-num");
let scoreText = document.querySelector(".score");
let highscoreText = document.querySelector(".highscore")
const checkBtn = document.querySelector(".check");
const body = document.querySelector("body");
const playAgain = document.querySelector(".again");
const endScreen = document.querySelector("#game-end");
const gameScreen = document.querySelector("#game-container")

//create random number
const randomNumber = () => Math.floor(Math.random() * 20) + 1;

let score = 20;
let secretNumber = randomNumber();
let highscore = 0;

//update display message
const displayMessage = text => {
    message.textContent = text;
}

//reduce score
const reduceScore = () => {
    ``
    score--;
    scoreText.textContent = score;
}

//check the winner
const checkWinner = guess => {
    if (guess === secretNumber) {
        displayMessage("🥳 You guessed correct");
        highscore = score > highscore ? score : highscore;
        highscoreText.textContent = highscore;
        secretNum.textContent = secretNumber;
        playAgain.style.display = "block"
        body.style.backgroundColor = '#60b347'
    } else {
        displayMessage(guess > secretNumber ? "📉 Number is too high" : "📈 Number is too low");
        reduceScore();
        checkGameEnd();
    }
}
//check if game is over
const checkGameEnd = () => {
    if (score === 0) {
        scoreText.textContent = 0;
        endScreen.style.display = "block";
        playAgain.style.display = "block"
        body.style.backgroundColor = '#e63217'
        gameScreen.style.display = "none";
    }
}

checkBtn.addEventListener('click', () => {
    const userGuess = +guess.value;
    if (!userGuess) {
        displayMessage("Enter a number between 1 and 20");
    } else {
        checkWinner(userGuess);
    }
})
playAgain.addEventListener('click', () => {
    score = 20;
    secretNumber = randomNumber();
    scoreText.textContent = score;
    endScreen.style.display = "none";
    gameScreen.style.display = "flex";
    body.style.backgroundColor = ' #222'
    secretNum.textContent = "?";
    playAgain.style.display = "none"
    guess.value = '';
})