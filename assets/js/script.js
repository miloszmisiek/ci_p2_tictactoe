/**  After DOM finis loading, gameboard is drawn by
 * adding respective side of the border based on index number. 
 */
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

let fields = document.getElementsByClassName("field");
let start = document.getElementById("start-button");
let reset = document.getElementById("reset-button");
let mainTheme = document.getElementById("main-theme");
let volume = document.getElementById("volume");
let playerTurn = document.getElementById("player-turn");
let endGameCondition = document.getElementById("end-game-condition");

let musicMute = true;
let cells = [null, null, null, null, null, null, null, null, null];
let player;
let timeLeft;

let gameOn = false;

start.addEventListener("click", setTimer);

volume.addEventListener("click", (e) => {
    if (!musicMute) {
        mainThemePause();
    } else {
        mainThemePlay();
    }
})

function mainThemePlay() {
    musicMute = false;
    mainTheme.play();
    volume.innerHTML = '<i class="fas fa-volume-up"></i>';
};

function mainThemePause() {
    musicMute = true;
    mainTheme.pause();
    volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
}

/** Function to check winning conditions */
function playerWon() {
    // top right corner, win top horizontal, vertical and across
    if (cells[0] === player) {
        if (cells[1] === player && cells[2] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        } else if (cells[3] === player && cells[6] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        } else if (cells[4] === player && cells[8] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        }
    };
    // bottom right corner, win bottom-top, bottom-left
    if (cells[8] === player) {
        if (cells[2] === player && cells[5] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        } else if (cells[6] === player && cells[7] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        }
    };
    // middle position, win top-bottom, vertical and across right-left
    if (cells[4] === player) {
        if (cells[1] === player && cells[7] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        } else if (cells[3] === player && cells[5] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        } else if (cells[2] === player && cells[6] === player) {
            console.log(`${player} has won! Congratulations!`)
            endGameCondition.innerHTML = `${player} has won!`
            return true;
        }
    };
}

/** Function returns random player (X or O) */
function randomPlayerSelection() {
    let players = ["X", "O"]
    let randomPlayer = Math.floor(Math.random() * players.length);

    return players[randomPlayer];
};

function switchPlayers() {
    if (player === "X") {
        player = "O";
    }
    else {
        player = "X";
    }
    playerTurn.innerHTML = `Player ${player} turn`;
}

// function computerPlay() {

//     let emptyCells = [];
//     let randomPlay;

//     for (var i = 0; i < cells.length; i++) {
//         if (cells[i].textContent === '') {
//             cells.push(cells[i]);
//         }
//     }

//     randomPlay = Math.floor(Math.random() * emptyCells.length) - 1;
//     emptyCells[random].innerHTML = player;
// }

/** Function tracks players move across the board */
function fieldClicked(event) {
    let id = event.target.id;
    console.log(id);

    if (!cells[id]) {
        cells[id] = player;
        event.target.innerText = player;
        if (playerWon()) {
            timeLeft = -1;
        }
    }
    switchPlayers();
};

/** Funtion to start timer when user clicks START button */
function setTimer(event) {

    gameOn = true;
    player = randomPlayerSelection();

    timeLeft = 15;
    let elem = document.getElementById('timer');
    let timerId = setInterval(countdown, 1000);
    let suffix = ":";

    mainThemePlay();
    start.removeEventListener("click", setTimer);
    playerTurn.innerHTML = `Player ${player} turn`;


    reset.addEventListener("click", (e) => {
        timeLeft = -1;
    });

    /** Function starts countdown and executes different code for specific remaining times */
    function countdown() {

        if (timeLeft == -1) {
            timeLeft = 15;
            clearTimeout(timerId);
            alert("End of game");
            gameOn = false;
            document.getElementById("start-button").addEventListener("click", setTimer);
            for (let i = 0; i < cells.length; i++) {
                cells[i] = null;
            };
            for (let field of fields) {
                field.innerHTML = null;
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
}