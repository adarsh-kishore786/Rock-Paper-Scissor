function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return moves[index];
}

function playOutput(usrStr, tieStr, winStr) {
    if (usrStr == tieStr)
        return `Tie, both are ${usrStr}.`;
    else if (usrStr == winStr)
        return `You win! ${usrStr} beats ${tieStr}!`;
    else
        return `You lose! ${tieStr} beats ${usrStr}!`;
}

function capitalize(string) {
    let tmp = string.toLowerCase();
    return tmp[0].toUpperCase() + tmp.substr(1);
}

function logic(userInput, compInput) {
    let winStr = "";
    if (compInput == "Rock")
        winStr = "Paper";
    else if (compInput == "Paper")
        winStr = "Scissors";
    else
        winStr = "Rock";
    let val = playOutput(userInput, compInput, winStr);
    return val;
}

function play(event) {
    let compInput = capitalize(computerPlay());
    let userInput = capitalize(event.target.name);
    let str = logic(userInput, compInput);

    let user = document.querySelector(".user");
    user.innerText = "";
    user.innerText += `User selected ${userInput}!`;

    let final = document.querySelector(".final");
    final.innerText = "";
    final.innerText += `${str}`;

    let computer = document.querySelector(".computer");
    computer.innerText = "";
    computer.innerText += `Computer selected ${compInput}!`;
}

let buttons = document.querySelectorAll(".button");

buttons.forEach(button => button.addEventListener('click', play));
