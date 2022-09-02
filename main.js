function getComputerChoice() {
    const choices = ["Piedra", "Papel", "Tijeras"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getMessageRound(playerSelection, computerSelection, roundResult) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (roundResult === 1) {
        return `¡Qué suerte!\n${playerSelection} destruye a ${computerSelection}.`;
    } else if (roundResult === -1) {
        return `JA! Perdiste.\n${computerSelection} destruye a ${playerSelection}.`;
    } else {
        return `Es un empate.\nLa computadora también eligió ${computerSelection}.`;
    }
}

function getMessageGame(totalRounds, score) {
    if (score > totalRounds / 2) {
        return `You are the winner!!`;
    } else {
        return `Better luck next time, loser.`;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0
    }
    else if (playerSelection === "Piedra" && computerSelection === "Papel" || 
    playerSelection === "Papel" && computerSelection === "Tijeras" || 
    playerSelection === "Tijeras" && computerSelection === "Piedra") {
        return -1;
    }
    else {
        return 1;
    }
}

function updateScore(roundResult) {
    const playerScore = document.querySelector(".player-score .score");
    const computerScore = document.querySelector(".computer-score .score");
    if(roundResult === 1) {
        playerScore.textContent = +playerScore.textContent + 1;
    }else if(roundResult === -1) {
        computerScore.textContent = +computerScore.textContent + 1;
    }
}

function updateMsj(msj) {
    document.querySelector(".msj-round").innerText = msj;
}

function swichInterface() {
    document.querySelector(".buttons").classList.toggle("hide");
    document.querySelector("#reset").classList.toggle("hide");
}

function executeRound(e) {
    const playerSelection = this.getAttribute("alt");
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    updateMsj(getMessageRound(playerSelection, computerSelection, roundResult));
    updateScore(roundResult);

    const winner = getWinner();
    if(winner) {
        endGame(winner);
    }
}

function getWinner() {
    const playerScore = document.querySelector(".player-score .score").textContent;
    const computerScore = document.querySelector(".computer-score .score").textContent;
    if (+playerScore === 5) {
        return 1;
    }else if (+computerScore === 5) {
        return -1;
    }
}

function endGame(winner) {
    const finalMsj = (winner === 1)
                    ? "Ganaste!\nFelicitaciones."
                    : "Perdiste!\nMejor suerte la próxima."
    swichInterface();
    updateMsj(finalMsj);
}

function resetGame() {
    document.querySelector(".player-score .score").textContent = 0;
    document.querySelector(".computer-score .score").textContent = 0;
    swichInterface();
    updateMsj("Elije sabiamente");
}

function startGame() {
    const buttons = document.querySelectorAll(".buttons img");
    buttons.forEach(button => button.addEventListener("click", executeRound));

    const resetBtn = document.querySelector("#reset");
    resetBtn.onclick = resetGame;
}

startGame();
