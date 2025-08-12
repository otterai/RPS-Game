let winCount = 0;
let loseCount = 0;
let drawCount = 0;

const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const resultText = document.getElementById("result");

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Add shake animation
    playerHand.classList.add("shakePlayer");
    computerHand.classList.add("shakeComputer");

    setTimeout(() => {
        playerHand.classList.remove("shakePlayer");
        computerHand.classList.remove("shakeComputer");

        playerHand.src = `${playerChoice}.png`;
        computerHand.src = `${computerChoice}.png`;

        checkWinner(playerChoice, computerChoice);
        document.getElementById("play-again").style.display = "inline-block";
    }, 800);
}

function checkWinner(player, computer) {
    if (player === computer) {
        resultText.innerText = "It's a Draw!";
        drawCount++;
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        resultText.innerText = "You Won!";
        winCount++;
    } else {
        resultText.innerText = "You Lost!";
        loseCount++;
    }
    updateScore();
}

function updateScore() {
    document.getElementById("win-count").innerText = winCount;
    document.getElementById("lose-count").innerText = loseCount;
    document.getElementById("draw-count").innerText = drawCount;
}

function resetGame() {
    resultText.innerText = "Make Your Move!";
    playerHand.src = "rock.png";
    computerHand.src = "rock.png";
    document.getElementById("play-again").style.display = "none";
}
