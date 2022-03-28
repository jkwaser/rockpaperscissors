function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"]
     return rps[Math.floor(Math.random()*rps.length)];
}

computerWin = 0
playerWin = 0

btnRock.addEventListener('click', function (e) {
    if (playerWin === 5) {
        const paragraph = document.createElement('p');
        paragraph.style.color = 'red';   
        paragraph.classList.add('paragraph');
        paragraph.textContent = `You have won this first-to-five match with ${playerWin} wins... the machine has ${computerWin}.`;
        container.appendChild(paragraph);
    }
    else if (computerWin === 5) {
        const paragraph = document.createElement('p');
        paragraph.style.color = 'red';   
        paragraph.classList.add('paragraph');
        paragraph.textContent = `You have lost this first-to-five... with only ${playerWin} wins... the machine has ${computerWin}.`;
        container.appendChild(paragraph);
    }
    else { 
    let contestRound = playRound('Rock', computerPlay());
    const paragraph = document.createElement('p');
    paragraph.style.color = 'red';   
    paragraph.classList.add('paragraph');
    paragraph.textContent = `${contestRound} You have ${playerWin} wins and the machine has ${computerWin}.`;
    container.appendChild(paragraph);
}
  });

btnScissors.addEventListener('click', function (e) {
    if (playerWin === 5) {
        const paragraph = document.createElement('p');
        paragraph.style.color = 'red';   
        paragraph.classList.add('paragraph');
        paragraph.textContent = `You have won this first-to-five match with ${playerWin} wins... the machine has ${computerWin}.`;
        container.appendChild(paragraph);
    }
    else if (computerWin === 5) {
        const paragraph = document.createElement('p');
        paragraph.style.color = 'red';   
        paragraph.classList.add('paragraph');
        paragraph.textContent = `You have lost this first-to-five... with only ${playerWin} wins... the machine has ${computerWin}.`;
        container.appendChild(paragraph);
    }
    else { 
    let contestRound = playRound('Paper', computerPlay());
    const paragraph = document.createElement('p');
    paragraph.style.color = 'red';   
    paragraph.classList.add('paragraph');
    paragraph.textContent = `${contestRound} You have ${playerWin} wins and the machine has ${computerWin}.`;
    container.appendChild(paragraph);
}
  });

btnPaper.addEventListener('click', function (e) {
    if (playerWin === 5) {
        const paragraph = document.createElement('p');
        paragraph.style.color = 'red';   
        paragraph.classList.add('paragraph');
        paragraph.textContent = `You have won this first-to-five match with ${playerWin} wins... the machine has ${computerWin}.`;
        container.appendChild(paragraph);
    }
    else if (computerWin === 5) {
        const paragraph = document.createElement('p');
        paragraph.style.color = 'red';   
        paragraph.classList.add('paragraph');
        paragraph.textContent = `You have lost this first-to-five... with only ${playerWin} wins... the machine has ${computerWin}.`;
        container.appendChild(paragraph);
    }
    else { 
    let contestRound = playRound('Scissors', computerPlay());
    const paragraph = document.createElement('p');
    paragraph.style.color = 'red';   
    paragraph.classList.add('paragraph');
    paragraph.textContent = `${contestRound} You have ${playerWin} wins and the machine has ${computerWin}.`;
    container.appendChild(paragraph);
}

  });

function playRound(playerSelection, computerSelection) {

    let playerSel = playerSelection.toUpperCase();
    let compSel = computerSelection.toUpperCase();

    if (playerSel == compSel) {
        return `Tie!`
    }
    else if (playerSel == "ROCK" && compSel == "SCISSORS" ||
    playerSel == "SCISSORS" && compSel == "PAPER" ||
    playerSel == "PAPER" && compSel == "ROCK") {
        playerWin += 1
        return `Victory! ${playerSel} beats ${compSel}`
        }
        
    else if (playerSel == "PAPER" && compSel == "SCISSORS" ||
    playerSel == "ROCK" && compSel == "PAPER" ||
    playerSel == "SCISSORS" && compSel == "ROCK") {
        computerWin += 1
        return `Loss. ${compSel} beats ${playerSel}`
        }

    else {
        return "This doesn't seem right... try again."
    }
}

function game() {
    let compWin = 0;
    let playWin = 0;
    for (let i = 0; i < 5; i++) {
        let checkWin = playRound(prompt("What do you play? Rock, paper, or scissors?"), computerPlay());
        if (checkWin == 'Victory!') {
            playWin += 1
            console.log(`You won this round!, you have ${playWin} victories, the machine has ${compWin}`)
        } 
        else if (checkWin == 'Loss.') {
            compWin += 1
            console.log(`You lost this round... you have ${playWin} victories, the machine has ${compWin}`)
        }
        else {
            console.log('Tie..')
        }

     }
     if (playWin > compWin) {
         return "Victory for humanity!"
     }
     else if (compWin > playWin) {
         return "The robot hordes have overcome you..."
     }
     else {
         return "A tie!"
     }
}

 // - Need to get this in all caps. 