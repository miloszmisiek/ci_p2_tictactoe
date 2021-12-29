/**  After DOM finis loading, gameboard is drawn by
 * adding respective side of the border based on index number. 
 */
document.addEventListener("DOMContentLoaded", function () {

    let fields = document.getElementsByClassName("field");

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
function playerSelect() {
    let players = ["X", "O"]
    let randomPlayer = Math.floor(Math.random() * players.length);
    
    return players[randomPlayer];
};

function fieldClicked(event) {
    console.log("clicked");
}

/** Funtion with event listener to start timer when user clicks START button */
document.getElementById("start-button").addEventListener("click", function () {
    let timeLeft = 29;
    let elem = document.getElementById('timer');
    let timerId = setInterval(countdown, 1000);
    let suffix = ":";

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            alert("Timeout");
        } else {
            if (timeLeft < 10) {
                suffix = ":0";
            };
            elem.innerHTML = "00" + suffix + timeLeft + ' sec';
            timeLeft--;
        }
    }
});