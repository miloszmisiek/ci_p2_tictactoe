// All modal elements, functions and eventListeners come from YouTube tutorial: https://www.youtube.com/watch?v=MBaw_6cPmAw

let musicMute = false;
let cells = [null, null, null, null, null, null, null, null, null];
let players = ["X", "O"];
let suffix = ":";
let player;
let timeLeft;
let emptyCells;
let gameOn = false;


// Element
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
let fields = document.getElementsByClassName("field");
let start = document.getElementById("start-button");
let reset = document.getElementById("reset-button");
let elem = document.getElementById('timer');
let mainTheme = document.getElementById("main-theme");
let endTime = document.getElementById("end-time-bell");
let loseLaugh = document.getElementById("lose-laugh");
let winSound = document.getElementById("win-sound");
let tieSound = document.getElementById("tie-sound");
let markerSound = document.getElementById("marker-sound");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let volume = document.getElementById("volume");
let playerTurn = document.getElementById("player");
let computerTurn = document.getElementById("computer");
let endGameCondition = document.getElementById("end-game-condition");

// eventListeners
start.addEventListener("click", setTimer);
reset.addEventListener("click", (e) => {
    start.innerHTML = "START";
    playerScore.innerText = "0";
    computerScore.innerText = "0";
    suffix = ":"
    gameOn = false;
    timeLeft = -1;
    endGameCondition.innerHTML = "";
    for (let field of fields) {
        field.innerHTML = null;
        field.style.backgroundColor = "transparent";
    }
    for (let cell of cells) {
        cell = null;
    }
});
volume.addEventListener("click", (e) => {
    if (gameOn) {
        if (!musicMute) {
            mutePage();
        } else {
            unMutePage();
        }
    }
});

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (gameOn === false) {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        }
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

// DOM Control

function openModal(modal) {
    if (modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal === null) return
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
// Mute a singular HTML5 element (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js)
function muteMe(elem) {
    musicMute = true;
    elem.muted = true;
    elem.pause();
}

// Unmute a singular HTML5 element and plays only mainTheme (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js)
function playMe(elem) {
    musicMute = false;
    elem.muted = false;
    mainTheme.play();
}

// Mute all video and audio elements on the page (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js)
function mutePage() {
    var elems = document.querySelectorAll("video, audio");

    [].forEach.call(elems, function (elem) {
        muteMe(elem);
    });
    volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
}

// Unute all video and audio elements on the page and plays mainTheme (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js)
function unMutePage() {
    var elems = document.querySelectorAll("video, audio");
    [].forEach.call(elems, function (elem) {
        playMe(elem);
    });
    volume.innerHTML = '<i class="fas fa-volume-up"></i>';
}

// Gameplay
/** Function checks winning conditions */
function playerWon() {
    // top right corner, win top horizontal, vertical and across
    if (cells[0] === player) {
        if (cells[1] === cells[0] && cells[2] === cells[0]) {
            // console.log(`${player} wins top diagonal`);
            gameOn = false;
            document.getElementById("0").style.backgroundColor = "#fbd489";
            document.getElementById("1").style.backgroundColor = "#fbd489";
            document.getElementById("2").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        } else if (cells[3] === cells[0] && cells[6] === cells[0]) {
            // console.log(`${player} wins top to bottom - left`);
            gameOn = false;
            document.getElementById("0").style.backgroundColor = "#fbd489";
            document.getElementById("3").style.backgroundColor = "#fbd489";
            document.getElementById("6").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        } else if (cells[4] === cells[0] && cells[8] === cells[0]) {
            // console.log(`${player} wins top-left across`);
            gameOn = false;
            document.getElementById("0").style.backgroundColor = "#fbd489";
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("8").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        }
    }
    // bottom right corner, win bottom-top, bottom-left
    if (cells[8] === player) {
        if (cells[2] === cells[8] && cells[5] === cells[8]) {
            // console.log(`${player} wins top to bottom right`);
            gameOn = false;
            document.getElementById("8").style.backgroundColor = "#fbd489";
            document.getElementById("2").style.backgroundColor = "#fbd489";
            document.getElementById("5").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        } else if (cells[6] === cells[8] && cells[7] === cells[8]) {
            // console.log(`${player} wins bottom diagonal.`);
            gameOn = false;
            document.getElementById("8").style.backgroundColor = "#fbd489";
            document.getElementById("6").style.backgroundColor = "#fbd489";
            document.getElementById("7").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        }
    }
    // middle position, win top-bottom, vertical and across right-left
    if (cells[4] === player) {
        if (cells[1] === cells[4] && cells[7] === cells[4]) {
            // console.log(`${player} wins top to bottom middle`);
            gameOn = false;
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("1").style.backgroundColor = "#fbd489";
            document.getElementById("7").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        } else if (cells[3] === cells[4] && cells[5] === cells[4]) {
            // console.log(`${player} wins middle diagonal`);
            gameOn = false;
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("3").style.backgroundColor = "#fbd489";
            document.getElementById("5").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        } else if (cells[2] === cells[4] && cells[6] === cells[4]) {
            // console.log(`${player} wins top-right across`);
            gameOn = false;
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("2").style.backgroundColor = "#fbd489";
            document.getElementById("6").style.backgroundColor = "#fbd489";
            start.innerHTML = "PLAY AGAIN";
            return true;
        }
    }
}

/** Function checks for a tie condition and returns true/false respectively. */
function checkTie() {
    checkEmptyCells();
    // console.log(`Empty cells length inside checkTie() ${emptyCells.length}`);
    // console.log(`playerWon inside checkTie ${playerWon()}`);
    if (emptyCells.length === 0 && playerWon() !== true && gameOn === true) {
        endTime.pause();
        tieSound.play();
        endGameCondition.innerHTML = "It's a TIE!";
        start.innerHTML = "PLAY AGAIN";
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
        // console.log(`emptyCells array inside computerPlay ${emptyCells}`);
        randomPlay = Math.floor(Math.random() * emptyCells.length);
        if (emptyCells.length !== 0) {
            let computer = fields[emptyCells[randomPlay]];
            computer.style.color = "red";
            computer.innerHTML = player;
            cells[emptyCells[randomPlay]] = player;
            if (playerWon()) {
                timeLeft = -1;
                endTime.pause();
                loseLaugh.play();
                endGameCondition.innerHTML = '<span class="player-o">COMPUTER</span> has won!';
                incrementComputerScore();
            }
        } else {
            checkTie();
        }
    }
}

/** Function tracks players move across the board */
function fieldClicked(event) {
    let id = event.target.id;
    console.log(id);
    suffix = ":";
    endGameCondition.innerHTML = "";
    playerTurn.innerHTML = "";
    computerTurn.innerHTML = '';


    if (gameOn) {
        if (!cells[id]) {
            cells[id] = player;
            event.target.style.color = "green";
            event.target.innerText = player;
            markerSound.play();
            timeLeft = 15;

            // console.log(`checkTie boolean inside fieldClicked ${checkTie()}`);
            // console.log(`playerWon inside fieldClicked ${playerWon()}`);
            if (playerWon() && checkTie() === false) {
                timeLeft = -1;
                // console.log(`gameOn inside fieldClicked after checking playerWon and checkTie ${gameOn}`);
                markerSound.pause();
                endTime.pause();
                winSound.play();
                incrementPlayerScore();
                endGameCondition.innerHTML = '<span class="player-x">PLAYER</span> has won!';
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
    start.innerHTML = "START";
    gameOn = true;
    player = randomPlayerSelection();
    let computer;
    if (player === 'X') {
        computer = 'O';
    } else {
        computer = 'X';
    }
    
    playerTurn.innerHTML = `Player: <span class="player-x">${player}</span>`;
    computerTurn.innerHTML = `Computer: <span class="player-o">${computer}</span>`;
    let timerId = setInterval(countdown, 1000);

    endGameCondition.innerHTML = "";
    for (let field of fields) {
        field.innerHTML = null;
        field.style.backgroundColor = "transparent";
    }

    timeLeft = 14;
    if (musicMute !== true) {
        playMe(mainTheme);
    }
    start.removeEventListener("click", setTimer);

    let random = Math.floor(Math.random() * 2);
    console.log(random);

    if (random === 0) {
        endGameCondition.innerHTML = '<span class="player-o">COMPUTER</span> plays first.';
        switchPlayers();
        computerPlay();
        switchPlayers();
    } else {
        endGameCondition.innerHTML = '<span class="player-x">PLAYER</span> plays first';
    }

    /** Function starts countdown and executes different code for specific remaining times */
    function countdown() {
        if (timeLeft === -1) {
            if (gameOn) {
                endTime.play();
                endGameCondition.innerHTML = `End of time. <span class="player-o">COMPUTER</span> move.`;
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
                mainTheme.pause();
                mainTheme.currentTime = 0;
                playerTurn.innerHTML = "";
                computerTurn.innerHTML = '';
            }
        } else {
            if (timeLeft < 10) {
                suffix = ":0";
                playerTurn.innerHTML = "";
                computerTurn.innerHTML = '';
                endGameCondition.innerHTML = "";
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
    computerScore.innerText = ++oldScore;
}