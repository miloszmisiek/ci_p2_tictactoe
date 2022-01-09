/*jshint esversion: 6 */ // for JSHint warnings

// All modal elements, functions and eventListeners come from YouTube tutorial: https://www.youtube.com/watch?v=MBaw_6cPmAw

// GLOBAL VARIABLES (Gameplay Control)
let musicMute = false;
let cells = [null, null, null, null, null, null, null, null, null];
let players = ["X", "O"];
let player;
let timeLeft;
let emptyCells;
let gameOn = false;


// EVENT LISTENERS

// Start Button event listener - on click the function setTimer is executed.
document.getElementById("start-button").addEventListener("click", setTimer);

// Reset Button event listener - resets timer, clears gameplay messages, clears the board and resets the scores.
document.getElementById("reset-button").addEventListener("click", (e) => {

    let endGameCondition = document.getElementById("end-game-condition");
    let computerScore = document.getElementById("computer-score");
    let playerScore = document.getElementById("player-score");
    let start = document.getElementById("start-button");
    let fields = document.getElementsByClassName("field");

    gameOn = false;
    timeLeft = -1;

    start.innerHTML = "START";
    playerScore.innerText = "0";
    computerScore.innerText = "0";
    endGameCondition.innerHTML = "";

    // For loop to clear all the gameboard fields
    for (let field of fields) {
        field.innerHTML = null;
        field.style.backgroundColor = "transparent";
    }

    // For loop to clear all cells array which is used to control movement on the gameboard fields
    for (let cell of cells) {
        cell = null;
    }

});

// Volume Button evenet listener - mutes/unmutes the page depending on gameOn and musicMute boolean values.
document.getElementById("volume").addEventListener("click", (e) => {
    if (gameOn) {
        if (!musicMute) {
            mutePage();
        } else {
            unMutePage();
        }
    } else {
        alert("You have to start the game to mute/unmute sound effects.");
    }
});

// Iteration through every button element in HTML to execute an openModal function for elements with specified selector - come from https://www.youtube.com/watch?v=MBaw_6cPmAw
document.querySelectorAll('[data-modal-target]').forEach(button => {
    button.addEventListener('click', () => {
        if (gameOn === false) {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        } else {
            alert("Game is ON! You can access the instruction only if the game is stopped.");
        }
    });
});

// Iteration through every button element in HTML to execute a closeModal function for elements with specified parent class - come from https://www.youtube.com/watch?v=MBaw_6cPmAw
document.querySelectorAll('[data-close-button]').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal'); // looks for the closest parent with 'modal' class
        closeModal(modal);
    });
});

// Overlay event listener - iterates through elements with specified selector and executes the closeModal function if applicable - come from https://www.youtube.com/watch?v=MBaw_6cPmAw
document.getElementById('overlay').addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

// DOM CONTROL

/** Function adds class '.active' to modal argument to control the popup window operation, or returns nothing if modal element is null - come from https://www.youtube.com/watch?v=MBaw_6cPmAw */
function openModal(modal) {
    if (modal === null) return;
    modal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

/** Function removes class '.active' to modal argument to control the popup window operation, or returns nothing if modal element is null - come from https://www.youtube.com/watch?v=MBaw_6cPmAw */
function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Event listener to execute gamboard creation after DOM finish loading. 
document.addEventListener("DOMContentLoaded", function () {

    let fields = document.getElementsByClassName("field");

    // For loop iterates through all HTML elements with 'field' class and adds respective side of border to create the Tic Tac Toe grid.
    for (let i = 0; i < fields.length; i++) {

        if (i < 3) {
            fields[i].style.borderBottom = "1px solid var(--main-color)";
        }
        if (i % 3 === 0) {
            fields[i].style.borderRight = "1px solid var(--main-color)";
        }
        if (i > 5) {
            fields[i].style.borderTop = "1px solid var(--main-color)";
        }
        if (i % 3 === 2) {
            fields[i].style.borderLeft = "1px solid var(--main-color)";
        }

        // Event listener to follow gameboard moves
        fields[i].addEventListener("click", fieldClicked);

    }
});

// SOUNDS

/** Mutes a singular HTML5 element (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js) */
function muteMe(elem) {

    musicMute = true;
    elem.muted = true;

    elem.pause();
}

/** Unmutes a singular HTML5 element and plays only mainTheme element (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js) */
function playMe(elem) {

    let mainTheme = document.getElementById("main-theme");

    musicMute = false;
    elem.muted = false;

    mainTheme.play();
}

/** Mutes all video and audio elements on the page and changes volume button icon (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js) */
function mutePage() {

    let volume = document.getElementById("volume");
    var elems = document.querySelectorAll("video, audio");

    [].forEach.call(elems, function (elem) {
        muteMe(elem);
    });

    volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
}

/** Umutes all video and audio elements on the page, plays mainTheme and changes volume button icon  (come from https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js) */
function unMutePage() {

    let volume = document.getElementById("volume");
    var elems = document.querySelectorAll("video, audio");

    [].forEach.call(elems, function (elem) {
        playMe(elem);
    });

    volume.innerHTML = '<i class="fas fa-volume-up"></i>';
}

// GAMEPLAY

/** Function checks winning conditions */
function playerWon() {

    let start = document.getElementById("start-button");

    // Top right corner, win top horizontal, vertical and diagonal
    if (cells[0] === player) {

        if (cells[1] === cells[0] && cells[2] === cells[0]) {

            gameOn = false;
            document.getElementById("0").style.backgroundColor = "#fbd489";
            document.getElementById("1").style.backgroundColor = "#fbd489";
            document.getElementById("2").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        } else if (cells[3] === cells[0] && cells[6] === cells[0]) {

            gameOn = false;
            document.getElementById("0").style.backgroundColor = "#fbd489";
            document.getElementById("3").style.backgroundColor = "#fbd489";
            document.getElementById("6").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        } else if (cells[4] === cells[0] && cells[8] === cells[0]) {

            gameOn = false;
            document.getElementById("0").style.backgroundColor = "#fbd489";
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("8").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        }
    }

    // Bottom right corner, win vertical and horizontal bottom
    if (cells[8] === player) {

        if (cells[2] === cells[8] && cells[5] === cells[8]) {

            gameOn = false;
            document.getElementById("8").style.backgroundColor = "#fbd489";
            document.getElementById("2").style.backgroundColor = "#fbd489";
            document.getElementById("5").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        } else if (cells[6] === cells[8] && cells[7] === cells[8]) {

            gameOn = false;
            document.getElementById("8").style.backgroundColor = "#fbd489";
            document.getElementById("6").style.backgroundColor = "#fbd489";
            document.getElementById("7").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        }
    }

    // Middle position, win vertical, horizontal and diagonal right-left
    if (cells[4] === player) {

        if (cells[1] === cells[4] && cells[7] === cells[4]) {

            gameOn = false;
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("1").style.backgroundColor = "#fbd489";
            document.getElementById("7").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        } else if (cells[3] === cells[4] && cells[5] === cells[4]) {

            gameOn = false;
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("3").style.backgroundColor = "#fbd489";
            document.getElementById("5").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        } else if (cells[2] === cells[4] && cells[6] === cells[4]) {

            gameOn = false;
            document.getElementById("4").style.backgroundColor = "#fbd489";
            document.getElementById("2").style.backgroundColor = "#fbd489";
            document.getElementById("6").style.backgroundColor = "#fbd489";
            start.innerHTML = "RESTART";

            return true;

        }
    }
}

/** Function checks for a tie condition and returns true/false respectively. */
function checkTie() {

    let start = document.getElementById("start-button");
    let endGameCondition = document.getElementById("end-game-condition");
    let tieSound = document.getElementById("tie-sound");
    let endTime = document.getElementById("end-time-bell");

    checkEmptyCells();

    if (emptyCells.length === 0 && playerWon() !== true && gameOn === true) {

        endTime.pause();
        tieSound.play();

        endGameCondition.innerHTML = "It's a TIE!";
        start.innerHTML = "RESTART";

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

    let endGameCondition = document.getElementById("end-game-condition");
    let loseLaugh = document.getElementById("lose-laugh");
    let endTime = document.getElementById("end-time-bell");
    let fields = document.getElementsByClassName("field");

    // Block of code executed only if game is ON
    if (gameOn) {

        checkEmptyCells(); // Check for empty cells on the board.

        let randomPlay = Math.floor(Math.random() * emptyCells.length); // Store random number based on a emptyCells array length.

        // Block of code executed when emptyCells has at least one element.
        if (emptyCells.length !== 0) {

            let computer = fields[emptyCells[randomPlay]]; // This is computer move executed by random selection of empty fields on the gameboard.

            computer.style.color = "red"; // Computer marker is always red

            // Fills the gameboard with computer respective marker (X or O) and updates cells array for gamplay logic.
            computer.innerHTML = player;
            cells[emptyCells[randomPlay]] = player;

            // Block of code executed only if playerWon function reurns true value (ends the game with computer win).
            if (playerWon()) {

                timeLeft = -1;
                endGameCondition.innerHTML = '<span class="player-o">COMPUTER</span> has won!';

                endTime.pause();
                loseLaugh.play();
                incrementComputerScore();

            }
        }
    }
}

/** Function tracks players move across the board */
function fieldClicked(event) {

    // HTML elements stored as JS variables for better recognition 
    let endGameCondition = document.getElementById("end-game-condition");
    let computerTurn = document.getElementById("computer");
    let playerTurn = document.getElementById("player");
    let markerSound = document.getElementById("marker-sound");
    let winSound = document.getElementById("win-sound");
    let endTime = document.getElementById("end-time-bell");

    let id = event.target.id; // Stores id of clicked gameboard field
    let playerMove = true;

    // Clears all gamplay messages
    endGameCondition.innerHTML = "";
    playerTurn.innerHTML = "";
    computerTurn.innerHTML = '';

    if (gameOn) {

        // Block of code executed only if field clicked id has no value (represented as 'null' in cells array) - validates the player move.
        if (!cells[id]) {

            cells[id] = player; // Marks a player move in the cells array for gameplay logic
            event.target.style.color = "green"; // Player marker is always green
            event.target.innerText = player; // Marks a player move on a gameboard

            timeLeft = 15; // Sets a timer to 15 second after valid move (restarts counter)
            playerMove = false; // Sets playerMove to false after valid move to allow for computerPlay execution

            if (!playerWon()) {
                markerSound.play(); // Every player move is represented with sound effect
            }

            // Block of code executed if player has won and there is no tie.
            if (playerWon() && checkTie() === false) {

                timeLeft = -1; // Sets timer value to execute code block from countdown function to end the game.
                endGameCondition.innerHTML = '<span class="player-x">PLAYER</span> has won!'; // Updates gameplay message with player winning condition

                // Plays applicable sound effect and pauses other relevant
                // markerSound.pause();
                endTime.pause();
                winSound.play();

                incrementPlayerScore(); // Every win is counted in the HTML field

            }
        }

        // Block of code executed only after player's valid move
        if (playerMove === false) {
            switchPlayers();
            computerPlay();
            checkTie();
            switchPlayers();
        }

    }
}


/** Funtion to start timer when user clicks START button */
function setTimer(event) {

    // Variables to control HTML elements.
    let endGameCondition = document.getElementById("end-game-condition");
    let computerTurn = document.getElementById("computer");
    let playerTurn = document.getElementById("player");
    let mainTheme = document.getElementById("main-theme");
    let elem = document.getElementById('timer');
    let start = document.getElementById("start-button");
    let fields = document.getElementsByClassName("field");

    // Variables to control functions/iterations.
    let random = Math.floor(Math.random() * 2);
    let timerId = setInterval(countdown, 1000);
    let computer;

    gameOn = true;
    player = randomPlayerSelection();
    timeLeft = 14;

    // Selection of markers for player and computer respectively.
    if (player === 'X') {
        computer = 'O';
    } else {
        computer = 'X';
    }

    // Update gameplay messages and Start button.
    playerTurn.innerHTML = `Player: <span class="player-x">${player}</span>`;
    computerTurn.innerHTML = `Computer: <span class="player-o">${computer}</span>`;
    endGameCondition.innerHTML = "";
    start.innerHTML = "START";

    // Iteration through gameboard fields to reset the gameboard
    for (let field of fields) {
        field.innerHTML = null;
        field.style.backgroundColor = "transparent";
    }

    // If statement to let user play muted if selected in previous turn and willing to continue the game.
    if (musicMute !== true) {
        playMe(mainTheme);
    }

    // If/else statement to control who plays first (random selection between 0 and 1 - 'coin-flip').
    if (random === 0) {
        endGameCondition.innerHTML = '<span class="player-o">COMPUTER</span> plays first.';
        switchPlayers();
        computerPlay();
        switchPlayers();
    } else {
        endGameCondition.innerHTML = '<span class="player-x">PLAYER</span> plays first';
    }

    // After game has started, the start button is blocked.
    start.removeEventListener("click", setTimer);

    /** Function starts countdown and executes different code for specific remaining times */
    function countdown() {

        // Variables to control HTML elements
        let endGameCondition = document.getElementById("end-game-condition");
        let computerTurn = document.getElementById("computer");
        let playerTurn = document.getElementById("player");
        let endTime = document.getElementById("end-time-bell");
        let mainTheme = document.getElementById("main-theme");

        // Suffix to control dispaly of timer
        let suffix = ":";

        // Various blocks of code executed if time has passed (or timer reset by different function) 
        if (timeLeft === -1) {

            // Block of code executed only if game is still ON (player did not make a valid move on time)
            if (gameOn) {

                endTime.play();
                timeLeft = 15;
                endGameCondition.innerHTML = `End of time. <span class="player-o">COMPUTER</span> move.`;

                switchPlayers();
                computerPlay();
                switchPlayers();

            } else {

                // Block of code executed if any player has won or there was a tie.
                gameOn = false;

                clearTimeout(timerId);
                timeLeft = 15;

                document.getElementById("start-button").addEventListener("click", setTimer);
                document.getElementById("timer").innerHTML = "00:" + timeLeft + " sec";
                playerTurn.innerHTML = "";
                computerTurn.innerHTML = '';

                mainTheme.pause();
                mainTheme.currentTime = 0;

                for (let i = 0; i < cells.length; i++) {
                    cells[i] = null;
                }

            }

        } else {

            // Block of code to control timer display - if time < 10, the suffix is updated to show figures correctly and gameplay messages dissapears from the screen
            if (timeLeft < 10) {

                suffix = ":0";
                playerTurn.innerHTML = "";
                computerTurn.innerHTML = '';
                endGameCondition.innerHTML = "";

            }

            elem.innerHTML = "00" + suffix + timeLeft + ' sec'; // If timer has not reached figure <10, suffix is updated accordigly and 
            timeLeft--; // Substracts seconds from timer
        }
    }
}

/** Function to increment player score - based on Code Institute "Love Maths" project. */
function incrementPlayerScore() {

    let playerScore = document.getElementById("player-score");
    let oldScore = parseInt(playerScore.innerText);

    playerScore.innerText = ++oldScore;

}

/** Function to increment computer score - based on Code Institute "Love Maths" project. */
function incrementComputerScore() {

    let computerScore = document.getElementById("computer-score");
    let oldScore = parseInt(computerScore.innerText);

    computerScore.innerText = ++oldScore;

}