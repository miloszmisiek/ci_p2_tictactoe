let musicMute = true;
let cells = [null, null, null, null, null, null, null, null, null];
let players = ["X", "O"];
let suffix = ":";
let player;
let timeLeft;
let emptyCells;
let gameOn = false;


// Elements
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
let fields = document.getElementsByClassName("field");
let start = document.getElementById("start-button");
let reset = document.getElementById("reset-button");
let elem = document.getElementById('timer');
let mainTheme = document.getElementById("main-theme");
let loseLaugh = document.getElementById("lose-laugh");
let winSound = document.getElementById("win-sound");
let tieSound = document.getElementById("tie-sound");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let volume = document.getElementById("volume");
let playerTurn = document.getElementById("player-turn");
let endGameCondition = document.getElementById("end-game-condition");

// eventListeners
start.addEventListener("click", setTimer);
reset.addEventListener("click", (e) => {
    gameOn = false;
    timeLeft = -1;
    endGameCondition.innerHTML = "";
    for (let field of fields) {
        field.innerHTML = null;
    }
    for (let cell of cells) {
        cell = null;
    }
});
volume.addEventListener("click", (e) => {
    if (!musicMute) {
        mainThemePause();
    } else {
        mainThemePlay();
    }
});

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

// DOM Control

function openModal(modal) {
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// After DOM finis loading, gameboard is drawn by adding respective side of the border based on index number.
document.addEventListener("DOMContentLoaded", function () {

    for (let i = 0; i < fields.length; i++) {

        if (i < 3) {
            fields[i].style.borderBottom = "1px solid var(--gray)";
        }
        if (i % 3 === 0) {
            fields[i].style.borderRight = "1px solid var(--gray)";
        }
        if (i > 5) {
            fields[i].style.borderTop = "1px solid var(--gray)";
        }
        if (i % 3 === 2) {
            fields[i].style.borderLeft = "1px solid var(--gray)";
        }
        fields[i].addEventListener("click", fieldClicked);

    }
});

// Sounds
/** Function plays main theme */
function mainThemePlay() {
    musicMute = false;
    mainTheme.play();
    volume.innerHTML = '<i class="fas fa-volume-up"></i>';
}
/** Function pause main theme */
function mainThemePause() {
    musicMute = true;
    mainTheme.pause();
    volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
}

// Gameplay
/** Function checks winning conditions */
function playerWon() {
    // top right corner, win top horizontal, vertical and across
    if (cells[0] === player) {
        if (cells[1] === cells[0] && cells[2] === cells[0]) {
            console.log(`${player} wins top diagonal`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        } else if (cells[3] === cells[0] && cells[6] === cells[0]) {
            console.log(`${player} wins top to bottom - left`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        } else if (cells[4] === cells[0] && cells[8] === cells[0]) {
            console.log(`${player} wins top-left across`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        }
    }
    // bottom right corner, win bottom-top, bottom-left
    if (cells[8] === player) {
        if (cells[2] === cells[8] && cells[5] === cells[8]) {
            console.log(`${player} wins top to bottom right`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        } else if (cells[6] === cells[8] && cells[7] === cells[8]) {
            console.log(`${player} wins bottom diagonal.`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        }
    }
    // middle position, win top-bottom, vertical and across right-left
    if (cells[4] === player) {
        if (cells[1] === cells[4] && cells[7] === cells[4]) {
            console.log(`${player} wins top to bottom middle`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        } else if (cells[3] === cells[4] && cells[5] === cells[4]) {
            console.log(`${player} wins middle diagonal`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        } else if (cells[2] === cells[4] && cells[6] === cells[4]) {
            console.log(`${player} wins top-right across`);
            endGameCondition.innerHTML = `Player ${player} has won!`;
            gameOn = false;
            return true;
        }
    }
}

/** Function checks for a tie condition and returns true/false respectively. */
function checkTie() {
    checkEmptyCells();
    console.log(`Empty cells length inside checkTie() ${emptyCells.length}`);
    console.log(`playerWon inside checkTie ${playerWon()}`);
    if (emptyCells.length === 0 && playerWon() !== true && gameOn === true) {
        tieSound.play();
        endGameCondition.innerHTML = "It's a TIE!";
        gameOn = false;
        timeLeft = -1;
        return true;
    } else {
        return false;
    }
}

/** Function returns random player (X or O) */
function randomPlayerSelection() {
    let randomPlayer = Math.floor(Math.random() * players.length);
    return players[randomPlayer];
}
/** Function switches players */
function switchPlayers() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
    playerTurn.innerHTML = `Player ${player} turn`;
}

/** Function checks for empty cells and return an array of their indexes */
function checkEmptyCells() {
    emptyCells = [];
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === null) {
            emptyCells.push(i);
        }
    }
    return emptyCells;
}

/** Function controls computer play */
function computerPlay() {
    suffix = ":";
    if (gameOn) {
        let randomPlay;
        checkEmptyCells();
        console.log(`emptyCells array inside computerPlay ${emptyCells}`);
        randomPlay = Math.floor(Math.random() * emptyCells.length);
        if (emptyCells.length !== 0) {
            fields[emptyCells[randomPlay]].innerHTML = player;
            cells[emptyCells[randomPlay]] = player;
            setMarkerColors();
            if (playerWon()) {
                timeLeft = -1;
                loseLaugh.play();
                incrementComputerScore();
            }
        } else {
            checkTie();
        }
    }
}

/** Function sets color of markers (X & O) */
function setMarkerColors() {
    for (let field of fields) {
        if (field.innerHTML === "X") {
            field.style.color = "green";
        } else {
            field.style.color = "red";
        }
    }
}

/** Function tracks players move across the board */
function fieldClicked(event) {
    let id = event.target.id;
    console.log(id);
    suffix = ":";
    endGameCondition.innerHTML = "";

    if (gameOn) {
        if (!cells[id]) {
            cells[id] = player;
            event.target.innerText = player;
            timeLeft = 15;
            setMarkerColors();
            console.log(`checkTie boolean inside fieldClicked ${checkTie()}`);
            console.log(`playerWon inside fieldClicked ${playerWon()}`);
            if (playerWon() && checkTie() === false) {
                timeLeft = -1;
                console.log(`gameOn inside fieldClicked after checking playerWon and checkTie ${gameOn}`);
                winSound.play();
                incrementPlayerScore();
            }
        }
        switchPlayers();
        computerPlay();
        checkTie();
        switchPlayers();
    }
}
/** Funtion to start timer when user clicks START button */
function setTimer(event) {

    gameOn = true;
    player = randomPlayerSelection();
    let timerId = setInterval(countdown, 1000);

    endGameCondition.innerHTML = "";
    for (let field of fields) {
        field.innerHTML = null;
    }

    timeLeft = 14;

    mainThemePlay();
    start.removeEventListener("click", setTimer);
    playerTurn.innerHTML = `Player ${player} turn`;

    /** Function starts countdown and executes different code for specific remaining times */
    function countdown() {
        if (timeLeft === -1) {
            if (gameOn) {
                endGameCondition.innerHTML = `End of time. Next player move.`;
                timeLeft = 15;
                switchPlayers();
                computerPlay();
                switchPlayers();
            } else {
                clearTimeout(timerId);
                // alert("End of game");
                gameOn = false;
                document.getElementById("start-button").addEventListener("click", setTimer);
                for (let i = 0; i < cells.length; i++) {
                    cells[i] = null;
                }
                timeLeft = 15;
                document.getElementById("timer").innerHTML = "00:" + timeLeft + " sec";
                mainThemePause();
                mainTheme.currentTime = 0;
                volume.innerHTML = '<i class="fas fa-volume-up"></i>';
                playerTurn.innerHTML = "";
            }
        } else {
            if (timeLeft === 13) {
                endGameCondition.innerHTML = "";
            }
            if (timeLeft < 10) {
                suffix = ":0";
            }
            elem.innerHTML = "00" + suffix + timeLeft + ' sec';
            timeLeft--;
        }
    }
}

/** Function to increment player score - based on Code Institute "Love Maths" project. */
function incrementPlayerScore() {
    let oldScore = parseInt(playerScore.innerText);
    playerScore.innerText = ++oldScore;
}

/** Function to increment computer score - based on Code Institute "Love Maths" project. */
function incrementComputerScore() {
    let oldScore = parseInt(computerScore.innerText);
    computerScore.innerText = ++ oldScore;
}