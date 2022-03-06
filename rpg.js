function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"]
     return rps[Math.floor(Math.random()*rps.length)];
}

function compare(playerSelection, computerSelection) {

    let playerSel = playerSelection.toUpperCase();
    let compSel = computerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return "Tie! ${playerSelection} and ${computerSelection} are the same!"
    }
    else if (playerSel == "ROCK" && compSel == "SCISSORS" ||
    playerSel == "SCISSORS" && compSel == "PAPER" ||
    playerSel == "PAPER" && compSel == "ROCK") {
            return "Victory for humanity!"
        }
        
    else if (playerSel == "PAPER" && compSel == "SCISSORS" ||
    playerSel == "ROCK" && compSel == "PAPER" ||
    playerSel == "SCISSORS" && compSel == "ROCK") {
            return "The machine hordes march ever-closer to victory... you failed."
        }
}

 // - Need to get this in all caps. 