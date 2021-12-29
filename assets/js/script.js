/**  After DOM finis loading, gameboard is drawn by
 * adding respective side of the border based on index number. 
 */
document.addEventListener("DOMContentLoaded", function () {

    let fields = document.getElementsByClassName("field");
    let start = document.getElementById("start-button");
    let reset = document.getElementById("rest-button");

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

/** Function returns random player (X or O) */
function randomPlayerSelection() {
    let players = ["X", "O"]
    let randomPlayer = Math.floor(Math.random() * players.length);

    return players[randomPlayer];
};

function fieldClicked(event) {
    console.log("clicked");
}

let gameOn = false;

/** Funtion with event listener to start timer when user clicks START button */
document.getElementById("start-button").addEventListener("click", function () {
    let timeLeft = 29;
    let elem = document.getElementById('timer');
    let timerId = setInterval(countdown, 1000);
    let suffix = ":";

    gameOn = true;

    let player = randomPlayerSelection();
    console.log(player);

    function countdown() {
        if (timeLeft == -1 && gameOn === true) {
            clearTimeout(timerId);
            alert("Timeout");
            gameOn = false;
        } else {
            if (timeLeft < 10 && gameOn === true) {
                suffix = ":0";
            };
            elem.innerHTML = "00" + suffix + timeLeft + ' sec';
            timeLeft--;
        }
    }
    document.getElementById("player-turn").innerHTML = `Player ${player} turn`;
});