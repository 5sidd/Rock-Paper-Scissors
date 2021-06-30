let playerScore = 0;
let computerScore = 0;

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
    if (player === computer) {
        return ["The round is a tie!", 3];
    }
    else if (computer === "rock" && player === "scissors") {
        return ["Computer wins!", 2];
    }
    else if (computer === "paper" && player === "rock") {
        return ["Computer wins!", 2];
    }
    else if (computer === "scissors" && player === "paper") {
        return ["Computer wins!", 2];
    }
    else if (player === "rock" || player === "paper" || player === "scissors") {
        return ["Player wins!", 1];
    }
    else {
        return ["Not a valid choice, please enter again."];
    }
}

function remove(clicked_id) {
    if (document.querySelector(".play").style.display === "none") {
        writeScore();
        document.querySelector(".play").style.display = "block";
    }
    else {
        document.querySelector(".play").style.display = "none";
        play(clicked_id);
    }
}

function play(playerChoice) {
    const computerChoice = computerPlay();
    const results = playRound(playerChoice, computerChoice);
    calculateScore(results[1]);
    const s = writeScore();
    const win = writeWin();

    const display1 = document.createElement('figure');
    const display2 = document.createElement('figure');
    const pChoice = document.createElement('img');
    const cChoice = document.createElement('img');
    const choiceP = document.createElement('figcaption');
    const choiceC = document.createElement('figcaption');

    const next = document.createElement('button');
    if (playerScore === 5 || computerScore === 5) {
        next.textContent = "Play Again";
    }
    else {
        next.textContent = "Next Round";
    }
    next.style.backgroundColor = "revert";
    next.style.border = "revert";
    next.style.marginTop = "30px";

    choiceP.textContent = "Player's Choice";
    choiceC.textContent = "Computer's Choice";

    pChoice.src = image(playerChoice);
    cChoice.src = image(computerChoice);
    display1.appendChild(pChoice);
    display1.appendChild(choiceP);
    display2.appendChild(cChoice);
    display2.appendChild(choiceC);

    const r = document.querySelector('.round');
    r.appendChild(next);
    r.appendChild(display1);
    r.appendChild(display2);
    r.style.textAlign = "center";

    next.onclick = function() {
        r.removeChild(next);
        r.removeChild(display1);
        r.removeChild(display2);
        s.textContent = "";
        if (next.textContent === "Play Again") {
            playerScore = 0;
            computerScore = 0;
            win.remove();
        }
        remove("");
    }
}

function resultRemove() {
    r.style.display = "none";
}

function image(choice) {
    let newChoice = choice.toLowerCase();
    if (newChoice === "rock") {
        return "https://harshil1712.github.io/stone-paper-scissor/stone.png";
    }
    else if (newChoice === "paper") {
        return "https://lh3.googleusercontent.com/proxy/ELtF5uMyTi1THfFy2CTeh1DdlHPTC26YAoq3Dk6RqO7uGZySmXrjj1l7wLICVV6d0kcTMTEWsRnvP3paAroSHrnawoyy870ApQPI6EYRd1S-WekWOf-yI5UTGkpNCCzsiSSmm0T5qbbO-ZIEDGk2xhTD-Xgx";
    }
    else {
        return "https://assets.onlinelabels.com/images/clip-art/nicubunu/nicubunu_Scissors.png";
    }
}

function calculateScore(result) {
    if (result === 1) {
        playerScore = playerScore + 1;
    }
    else if (result === 2) {
        computerScore = computerScore + 1;
    }
}

function writeScore() {
    //const a = document.querySelector('.scoreboard');
    const b = document.querySelector('#score');
    b.textContent = playerScore + "-" + computerScore;
    b.style.display = "inline";
    //a.appendChild(b);
    return b;
}

function writeWin() {
    const score = document.querySelector('.scoreboard');
    const winner = document.createElement('p');
    winner.style.textAlign = "center";
    if (playerScore === 5) {
        winner.textContent = "Player Wins!";
        score.appendChild(winner);
        return winner;
    }
    else if (computerScore === 5) {
        winner.textContent = "Computer Wins!";
        score.appendChild(winner);
        return winner;
    }
}

