const handOptions = {
    "rock": "./rockf.png",
    "scissor": "./scissor.png",
    "paper": "./paper.png"
}

let USCORE = 0;
let PCSCORE = 0;

// Load scores from local storage on page load
window.addEventListener('load', () => {
    USCORE = parseInt(localStorage.getItem('USCORE')) || 0;
    PCSCORE = parseInt(localStorage.getItem('PCSCORE')) || 0;
    updateScoreDisplay();
});

// Function to update the score display
const updateScoreDisplay = () => {
    document.querySelector(".yscore h1").innerText = USCORE;
    document.querySelector(".cscore h1").innerText = PCSCORE;
};

const pickHand = (hand) => {
    console.log(hand);
    let hands= document.querySelector(".hands");
    hands.style.display ="none";

    let contest= document.querySelector(".contest");
    contest.style.display ="flex";

    document.getElementById("userPickimg").src= handOptions[hand];
    let cpHand = pickPchand();
    referee(hand, cpHand)
}

const pickPchand = () => {
    let hands = ["rock", "paper", "scissor"];
    let cpHand= hands[Math.floor(Math.random()*3)];
    document.getElementById("pcPickimg").src= handOptions[cpHand];
    return cpHand;
}

const against = document.getElementById('against');
let nxt2= document.querySelector(".next");



const referee = (userHand, cpHand) =>{
    if(userHand=="paper" && cpHand== "scissor"){
        setDecision("YOU LOST")
        replay("PLAY AGAIN");
        setPCScore(PCSCORE + 1)
        against.style.visibility = 'visible';
        document.querySelector(".contest").style.backgroundImage="url('./bgcircle.png')";
        document.querySelector(".contest").style.backgroundPosition = "right top";
    }
    if(userHand=="paper" && cpHand== "rock"){
        setDecision("YOU WIN")
        replay("PLAY AGAIN");
        setUserScore(USCORE + 1)
        against.style.visibility = 'visible';
        nxt2.style.display ="flex";
        document.querySelector(".contest").style.backgroundImage="url('./bgcircle.png')";
        document.querySelector(".contest").style.backgroundPosition = "left top";
    }
    if(userHand=="paper" && cpHand== "paper"){
        setDecision("TIE UP")
        replay("REPLAY")
        against.style.visibility = 'hidden';
        document.querySelector(".contest").style.backgroundImage="none";
    }

    if(userHand=="rock" && cpHand== "scissor"){
        setDecision("YOU WIN")
        replay("PLAY AGAIN");
        setUserScore(USCORE + 1)
        against.style.visibility = 'visible';
        nxt2.style.display ="flex";
        document.querySelector(".contest").style.backgroundImage="url('./bgcircle.png')";
        document.querySelector(".contest").style.backgroundPosition = "left top";
    }

    if(userHand=="rock" && cpHand== "rock"){
        setDecision("TIE UP")
        replay("REPLAY")
        against.style.visibility = 'hidden';
        document.querySelector(".contest").style.backgroundImage="none";
    }

    if(userHand=="rock" && cpHand== "paper"){
        setDecision("YOU LOST")
        replay("PLAY AGAIN");
        setPCScore(PCSCORE + 1)
        against.style.visibility = 'visible';
        document.querySelector(".contest").style.backgroundImage="url('./bgcircle.png')";
        document.querySelector(".contest").style.backgroundPosition = "right top";
    }

    if(userHand=="scissor" && cpHand== "scissor"){
        setDecision("TIE UP")
        replay("REPLAY")
        against.style.visibility = 'hidden';
        document.querySelector(".contest").style.backgroundImage="none";
    }

    if(userHand=="scissor" && cpHand== "rock"){
        setDecision("YOU LOST")
        replay("PLAY AGAIN");
        setPCScore(PCSCORE + 1)
        against.style.visibility = 'visible';
        document.querySelector(".contest").style.backgroundImage="url('./bgcircle.png')";
        document.querySelector(".contest").style.backgroundPosition = "right top";
    }

    if(userHand=="scissor" && cpHand== "paper"){
        setDecision("YOU WIN")
        replay("PLAY AGAIN");
        setUserScore(USCORE + 1)
        against.style.visibility = 'visible';
        nxt2.style.display ="flex";
        document.querySelector(".contest").style.backgroundImage="url('./bgcircle.png')";
        document.querySelector(".contest").style.backgroundPosition = "left top";
    }

}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;

}

const replay = (repl) => {
    document.querySelector(".decision div").innerText = repl;
}

const setUserScore = (ucore) => {
    USCORE=ucore;
    document.querySelector(".yscore h1").innerText = ucore;
    localStorage.setItem('USCORE', USCORE);
    updateScoreDisplay();
}

const setPCScore = (pccore) => {
    PCSCORE=pccore;
    document.querySelector(".cscore h1").innerText = pccore;
    localStorage.setItem('PCSCORE', PCSCORE);
    updateScoreDisplay();
}

const restartGame = () => {
    let hands= document.querySelector(".hands");
    hands.style.display ="flex";

    let contest= document.querySelector(".contest");
    contest.style.display ="none";

    nxt2.style.display ="none";
}

const nxt = () => {
    let nxt2= document.querySelector(".next");
    nxt2.style.display ="none";
}

const ru = () => {
    let rules= document.querySelector(".outerbox");
    rules.style.display ="flex";
}

const cl = () => {
    let rules= document.querySelector(".outerbox");
    rules.style.display ="none";
}


