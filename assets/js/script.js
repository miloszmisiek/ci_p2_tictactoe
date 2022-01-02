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

let musicMute = true;
let spaces = [null, null, null, null, null, null, null, null, null];
let player;
// let win = playerWon(player);
let timeLeft;

let gameOn = false;



let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

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
    if (spaces[0] === player) {
        if (spaces[1] === player && spaces[2] === player) {
            console.log(`${player} has won! Congratulations!`)
            return true;
        } else if (spaces[3] === player && spaces[6] === player) {
            console.log(`${player} has won! Congratulations!`)
            return true;
        } else if (spaces[4] === player && spaces[8] === player) {
            console.log(`${player} has won! Congratulations!`)
            return true;
        }
    };
    // bottom right corner, win bottom-top, bottom-left
    if (spaces[8] === player) {
        if (spaces[2] === player && spaces[5] === player) {
            console.log(`${player} has won! Congratulations!`)
            return true;
        } else if (spaces[6] === player && spaces[7] === player) {
            console.log(`${player} has won! Congratulations!`)
            return true;
        }
    };
    // middle position, win top-bottom, vertical and across right-left
    if (spaces[4] === player) {
        if (spaces[1] === player && spaces[7] === player) {
            console.log(`${player} has won! Congratulations!`)
            return true;
        } else if (spaces[3] === player && spaces[5] === player) {
            console.log(`${player} has won! Congratulations!`)
            return true;
        } else if (spaces[2] === player && spaces[6] === player) {
            console.log(`${player} has won! Congratulations!`)
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

/** Function tracks players move across the board */
function fieldClicked(event) {
    let id = event.target.id;
    console.log(id);

    if (!spaces[id]) {
        spaces[id] = player;
        event.target.innerText = player;
        if (playerWon()) {
            timeLeft = -1;
        }
    }

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
    document.getElementById("player-turn").innerHTML = `Player ${player} turn`;


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
            for (let i = 0; i < spaces.length; i++) {
                spaces[i] = null;
            };
            for (let field of fields) {
                field.innerHTML = null;
            };
            document.getElementById("timer").innerHTML = "00:" + timeLeft + " sec";
            mainThemePause();
            mainTheme.currentTime = 0;
            volume.innerHTML = '<i class="fas fa-volume-up"></i>';
            document.getElementById("player-turn").innerHTML = "";

        } else {
            if (timeLeft < 10) {
                suffix = ":0";
            };
            elem.innerHTML = "00" + suffix + timeLeft + ' sec';
            timeLeft--;
        }
    }
};