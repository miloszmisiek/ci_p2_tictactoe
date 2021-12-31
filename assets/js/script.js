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

let gameOn = false;

let xWin = "Player X won!";
let oWin = "Player O won!";
let tie = "It's a TIE!";

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

let spaces = [null, null, null, null, null, null, null, null, null];

let player = randomPlayerSelection();

/** Function returns random player (X or O) */
function randomPlayerSelection() {
    let players = ["X", "O"]
    let randomPlayer = Math.floor(Math.random() * players.length);

    return players[randomPlayer];
};

/** Function tracks players move across the board */
function fieldClicked(event) {
    if (gameOn) {
        let id = event.target.id;
        console.log(id);

        if (!spaces[id]) {
            spaces[id] = player;
            event.target.innerText = player;
        }
    }
};



start.addEventListener("click", setTimer);

/** Funtion to start timer when user clicks START button */
function setTimer(event) {

    gameOn = true;

    start.removeEventListener("click", setTimer);
    document.getElementById("player-turn").innerHTML = `Player ${player} turn`;

    reset.addEventListener("click", (e) => {
        timeLeft = -1;
    });

    let timeLeft = 10;
    let elem = document.getElementById('timer');
    let timerId = setInterval(countdown, 1000);
    let suffix = ":";

    /** Function starts countdown and executes different code for specific remaining times */
    function countdown() {
        if (timeLeft == -1) {
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
            document.getElementById("timer").innerHTML = "00:30 sec"
        } else {
            if (timeLeft < 10) {
                suffix = ":0";
            };
            elem.innerHTML = "00" + suffix + timeLeft + ' sec';
            timeLeft--;
        }
    }
};