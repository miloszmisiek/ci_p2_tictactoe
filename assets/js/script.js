let musicMute = true;
let cells = [null, null, null, null, null, null, null, null, null];
let players = ["X", "O"]
let player;
let timeLeft;
let emptyCells;
let gameOn = false;

// Elements
let fields = document.getElementsByClassName("field");
let start = document.getElementById("start-button");
let reset = document.getElementById("reset-button");
let mainTheme = document.getElementById("main-theme");
let volume = document.getElementById("volume");
let playerTurn = document.getElementById("player-turn");
let endGameCondition = document.getElementById("end-game-condition");
start.addEventListener("click", setTimer);
reset.addEventListener("click", (e) => {
    timeLeft = -1;
    endGameCondition.innerHTML = "";
    for (let field of fields) {
        field.innerHTML = null;
    };
});
volume.addEventListener("click", (e) => {
    if (!musicMute) {
        mainThemePause();
    } else {
        mainThemePlay();
    }
})

// After DOM finis loading, gameboard is drawn by adding respective side of the border based on index number.
document.addEventListener("DOMContentLoaded", function () {

    for (let i = 0; i < fields.length; i++) {

        if (i < 3) {
            fields[i].style.borderBottom = "1px solid var(--gray)";
        };
        if (i % 3 === 0) {
            fields[i].style.borderRight = "1px solid var(--gray)";
        };
        if (i > 5) {
            fields[i].style.borderTop = "1px solid var(--gray)";
        };
        if (i % 3 === 2) {
            fields[i].style.borderLeft = "1px solid var(--gray)";
        };
        fields[i].addEventListener("click", fieldClicked);

    }
});

// Sounds
/** Function plays main theme */
function mainThemePlay() {
    musicMute = false;
    mainTheme.play();
    volume.innerHTML = '<i class="fas fa-volume-up"></i>';
};
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
            console.log(`${player} wins top diagonal`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        } else if (cells[3] === cells[0] && cells[6] === cells[0]) {
            console.log(`${player} wins top to bottom - left`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        } else if (cells[4] === cells[0] && cells[8] === cells[0]) {
            console.log(`${player} wins top-left across`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        }
    };
    // bottom right corner, win bottom-top, bottom-left
    if (cells[8] === player) {
        if (cells[2] === cells[8] && cells[5] === cells[8]) {
            console.log(`${player} wins top to bottom right`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        } else if (cells[6] === cells[8] && cells[7] === cells[8]) {
            console.log(`${player} wins bottom diagonal.`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        }
    };
    // middle position, win top-bottom, vertical and across right-left
    if (cells[4] === player) {
        if (cells[1] === cells[4] && cells[7] === cells[4]) {
            console.log(`${player} wins top to bottom middle`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        } else if (cells[3] === cells[4] && cells[5] === cells[4]) {
            console.log(`${player} wins middle diagonal`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        } else if (cells[2] === cells[4] && cells[6] === cells[4]) {
            console.log(`${player} wins top-right across`)
            endGameCondition.innerHTML = `Player ${player} has won!`
            gameOn = false;
            return true;
        }
    };
}

function checkTie() {
    checkEmptyCells();
    console.log(`Empty cells length inside checkTie() ${emptyCells.length}`);
    console.log(`playerWon inside checkTie ${playerWon()}`);
    if (emptyCells.length === 0 && !playerWon() && gameOn === true) {
        endGameCondition.innerHTML = "It's a TIE!";
        timeLeft = -1;
        return true;
    } else {
        return false;
    }
};

/** Function returns random player (X or O) */
function randomPlayerSelection() {
    let randomPlayer = Math.floor(Math.random() * players.length);
    return players[randomPlayer];
};
/** Function switches players */
function switchPlayers() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
    playerTurn.innerHTML = `Player ${player} turn`;
};

function checkEmptyCells() {
    emptyCells = [];
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === null) {
            emptyCells.push(i);
        }
    };
    return emptyCells;
}

/** Function controls computer play */
function computerPlay() {

    if (gameOn) {
        let randomPlay;
        checkEmptyCells();
        console.log(`emptyCells array inside computerPlay ${emptyCells}`);
        randomPlay = Math.floor(Math.random() * emptyCells.length);
        if (emptyCells.length !== 0) {
            fields[emptyCells[randomPlay]].innerHTML = player;
            cells[emptyCells[randomPlay]] = player;
            if (playerWon()) {
                timeLeft = -1;
            }
        } else {
            checkTie();
        }
    }
};
/** Function tracks players move across the board */
function fieldClicked(event) {
    let id = event.target.id;
    console.log(id);

    if (gameOn) {
        if (!cells[id]) {
            cells[id] = player;
            event.target.innerText = player;
            console.log(`checkTie boolean inside fieldClicked ${checkTie()}`);
            console.log(`playerWon inside fieldClicked ${playerWon()}`);
            if (playerWon() && checkTie() === false) {
                timeLeft = -1;
                console.log(`gameOn inside fieldClicked after checking playerWon and checkTie ${gameOn}`);
            }
        }
        switchPlayers();
        computerPlay();
        checkTie();
        switchPlayers();
        for (let field of fields) {
            if (field.innerHTML === "X") {
                field.style.color = "green";
            } else {
                field.style.color = "red";
            }
        }
    }
};
/** Funtion to start timer when user clicks START button */
function setTimer(event) {

    gameOn = true;
    player = randomPlayerSelection();

    endGameCondition.innerHTML = "";
    for (let field of fields) {
        field.innerHTML = null;
    };

    timeLeft = 120;
    let elem = document.getElementById('timer');
    let timerId = setInterval(countdown, 1000);
    let suffix = ":";

    mainThemePlay();
    start.removeEventListener("click", setTimer);
    playerTurn.innerHTML = `Player ${player} turn`;

    /** Function starts countdown and executes different code for specific remaining times */
    function countdown() {

        if (timeLeft === -1) {
            timeLeft = 15;
            clearTimeout(timerId);
            // alert("End of game");
            gameOn = false;
            document.getElementById("start-button").addEventListener("click", setTimer);
            for (let i = 0; i < cells.length; i++) {
                cells[i] = null;
            };
            document.getElementById("timer").innerHTML = "00:" + timeLeft + " sec";
            mainThemePause();
            mainTheme.currentTime = 0;
            volume.innerHTML = '<i class="fas fa-volume-up"></i>';
            playerTurn.innerHTML = "";


        } else {
            if (timeLeft < 10) {
                suffix = ":0";
            };
            elem.innerHTML = "00" + suffix + timeLeft + ' sec';
            timeLeft--;
        }
    }
};