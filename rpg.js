function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"]
     return rps[Math.floor(Math.random()*rps.length)];
}

function compare(playerSelection, computerSelection) {
    if playerSelection == computerSelection {
        return "Tie! ${playerSelection} and ${computerSelection} are the same!"
    }

}