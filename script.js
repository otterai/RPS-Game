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

        // Path fix kiya
        playerHand.src = `images/${playerChoice}.png`;
        computerHand.src = `images/${computerChoice}.png`;

        checkWinner(playerChoice, computerChoice);
        document.getElementById("play-again").style.display = "inline-block";
    }, 800);
}

function checkWinner(player, computer) {
    // Remove any previous glow classes
    resultText.classList.remove('glow-green', 'glow-red', 'glow-gold');

    if (player === computer) {
        resultText.innerText = "It's a Draw!";
        resultText.classList.add('glow-gold');
        drawCount++;
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        resultText.innerText = "You Won!";
        resultText.classList.add('glow-green');
        winCount++;
    } else {
        resultText.innerText = "You Lost!";
        resultText.classList.add('glow-red');
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
    playerHand.src = "images/rock.png"; // Path fix kiya
    computerHand.src = "images/rock.png"; // Path fix kiya
    document.getElementById("play-again").style.display = "none";
}
