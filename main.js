function normalizeString(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = prompt("What do you choose? Rock, paper or scissors?");
    return normalizeString(playerChoice);
}

function getMessageRound(playerSelection, computerSelection, roundResult) {
    if (roundResult === 1) {
        return `Lucky! ${playerSelection} beats ${computerSelection}.`;
    } else if (roundResult === -1) {
        return `JA! You lose. ${computerSelection} beats ${playerSelection}.`;
    } else {
        return `It's a tie. The computer choose ${computerSelection} too.`;
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
    else if (playerSelection === "Rock" && computerSelection === "Paper" || 
    playerSelection === "Paper" && computerSelection === "Scissors" || 
    playerSelection === "Scissors" && computerSelection === "Rock") {
        return -1;
    }
    else {
        return 1;
    }
}

function game() {
    const totalRounds = 5;
    let score = 0;

    for (let i = 0; i < totalRounds; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 1) {
            score++;
        }
        console.log(getMessageRound(playerSelection, computerSelection, roundResult));
    }
    
    console.log(getMessageGame(totalRounds, score));
}
