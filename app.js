const playerScore = document.getElementById('player');
const computerScore = document.getElementById('computer');
const drawScore = document.getElementById('draw');
const resultDisplay = document.getElementById('result');

// Audio elements
const winSound = new Audio('./audio/win.mp3');
const loseSound = new Audio('./audio/lose.mp3');
const drawSound = new Audio('./audio/draw.mp3');
const resetSound = new Audio('./audio/reset.mp3');


const choices = ['rock', 'paper', 'scissor'];
const choiceImages = document.querySelectorAll('.choice-img');

choiceImages.forEach(image => {
    image.addEventListener('click', () => {
        const playerChoice = image.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(playerChoice, computerChoice);
        updateScores(result);
        displayResult(result, playerChoice, computerChoice);
    });
});

function getResult(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissor') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissor' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScores(result) {
    if (result === 'win') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        winSound.play();
    } else if (result === 'lose') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        loseSound.play();
    } else {
        drawScore.textContent = parseInt(drawScore.textContent) + 1;
        drawSound.play();
    }
}

function displayResult(result, playerChoice, computerChoice) {
    if (result === 'win') {
        resultDisplay.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (result === 'lose') {
        resultDisplay.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        resultDisplay.textContent = `It's a Draw! You both chose ${playerChoice}`;
    }
}

function resetGame() {

  resetSound.play();
  // Reset player, computer, and draw scores to 0
  document.getElementById("player").textContent = "0";
  document.getElementById("computer").textContent = "0";
  document.getElementById("draw").textContent = "0";

  // Reset result message
  document.getElementById("result").textContent = "Choose an option";
}
