function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"]
     return rps[Math.floor(Math.random()*rps.length)];
}

function playRound(playerSelection, computerSelection) {

    let playerSel = playerSelection.toUpperCase();
    let compSel = computerSelection.toUpperCase();

    if (playerSel == compSel) {
        return `Tie!`
    }
    else if (playerSel == "ROCK" && compSel == "SCISSORS" ||
    playerSel == "SCISSORS" && compSel == "PAPER" ||
    playerSel == "PAPER" && compSel == "ROCK") {
            return "Victory!"
        }
        
    else if (playerSel == "PAPER" && compSel == "SCISSORS" ||
    playerSel == "ROCK" && compSel == "PAPER" ||
    playerSel == "SCISSORS" && compSel == "ROCK") {
            return "Loss."
        }

    else {
        return "This doesn't seem right... try again."
    }
}

function game() {
    let compWin = 0;
    let playWin = 0;
    for (let i = 0; i < 5; i++) {
        let checkWin = playRound(playerSelection, computerPlay());
        if (checkWin == 'Victory!') {
            i += 1;
            playWin += 1
        } 
        else if (checkWin == 'Loss.') {
            i += 1;
            compWin += 1
        }
     }
     if (playWin > compWin) {
         return "Victory for humanity!"
     }
     else if (compWin > playWin) {
         return "The robot hordes have overcome you..."
     }
}

 // - Need to get this in all caps. 