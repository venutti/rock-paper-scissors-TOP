function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = prompt("What do you choose? Rock, paper or scissors?");
    return capitalize(playerChoice);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie. The computer choose ${computerSelection} too.`
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" || 
    playerSelection === "Paper" && computerSelection === "Scissors" || 
    playerSelection === "Scissors" && computerSelection === "Rock") {
        return `JA! You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    else {
        return `Lucky! ${playerSelection} beats ${computerSelection}.`
    }
}

console.log(getPlayerChoice());
