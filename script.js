function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    }
    else if (choice === 2) {
        return "Paper";
    }
    return "Scissors";
}



function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let choices = "Player: " + player + ", Computer: " + computer + "\n";
    if (player === computer) {
        return [choices + "The round is a tie!", 3];
    }
    else if (computer === "rock" && player === "scissors") {
        return [choices + "Computer wins!", 2];
    }
    else if (computer === "paper" && player === "rock") {
        return [choices + "Computer wins!", 2];
    }
    else if (computer === "scissors" && player === "paper") {
        return [choices + "Computer wins!", 2];
    }
    else if (player === "rock" || player === "paper" || player === "scissors") {
        return [choices + "Player wins!", 1];
    }
    else {
        return ["Not a valid choice, please enter again."];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let player = prompt("Enter your choice:");
        let computer = computerPlay();
        let result = playRound(player, computer);
        if (result[1] === 1) {
            playerScore = playerScore + 1;
        }
        else if (result[1] === 2) {
            computerScore = computerScore + 1;
        }
        else if (result[1] === 3) {
            tie = tie + 1;
        }
        else if (result[0] === "Not a valid choice, please enter again.") {
            i = i - 1;
        }
        let scores = "\nScores: Player: " + playerScore + ", Computer: " + computerScore + ", Tie: " + tie;
        console.log(result[0] + scores);
    }
}
console.log(game());
/*
const player = "rock";
const computer = computerPlay();
console.log(playRound(player, computer));
*/

