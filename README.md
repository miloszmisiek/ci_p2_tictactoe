<h1 align="center"><a name="top">TIC TAC TOE</a></h1>

Hello Stranger,

This web browser based **Tic Tac Toe** game is a simple solution for users who want to entertain themselves a bit while taking a break from work. The game is designed to play against computer with very basic algorithm of randomly selected fields. It is a single page web browser game with use of HTML and CSS for basic site structure and styling with JavaScript handling the DOM and the gameplay itself.

You can start the game [*here*](https://miloszmisiek.github.io/ci_p2_tictactoe/).

Enjoy your journey!

![Am I Responsive](assets/images/readme/am-i-responsive.png)

# Contents
1. **[User Experience](#user-experience)**
2. **[Features](#features)**
3. **[Credits](#credits)**

# User Experience
## User Stories
- As a user, I want to play intuitive.
- As a user, I want to have access to instructions which are clearly identified.
- As a user, I want to play muted in cases it will interupt the others around me.
- As a user, I want to be entrainted through complete gameplay.
- As a user, I want to see my score and my opponent's score.
- As a user, I want to have a fair game.
- As a user, I want to play mobile if I have to travel.
## Wireframes
[Balsamiq](https://balsamiq.com/) was used to create wireframes as a part of project planning. They were used to discuss the concept of the website with a designated Code Institute mentor. The final project differs in some places from the original concept presented below to improve UX or responsiveness of the site.

### Landing Page
![Landing Page](/assets/images/readme/home.webp)

### Player Win Notice
![Player Win Notice](/assets/images/readme/player-win.webp)


### Smartphone View
![Smartphone View](/assets/images/readme/smartphone.webp)

## Site Structure
[Tic Tac Toe](https://miloszmisiek.github.io/ci_p2_tictactoe/) is a single page web browser game with buttons and gameboard area created to interact with a player. Intruction window is available through help-button represented with question mark in the circle. Next to help-button there are volume ON/OFF button and timer. To control gameplay there are buttons below the gameboard and the very last part is player and computer score counter.

### Fonts
Two styles of fonts are used for the project: 'Cabin Sketch' for heading(game title) and 'Patrick Hand' for body text elements. The choice was made to represent best the hand writing effect. All fonts are backed-up with sans-serif.

### Colour
The body backgound photo was selected to imitate wooden table. Gameplay area background photo represents white notepad. Together they contrst well and gives user the feeling of playing a game on piece of paper laying on the table.<br>
<br><span style="color:green">Green</span> is a color representing player in the game.
<br><span style="color:red">Red</span> is a color representing computer in the game.<br>
<br>Markers, score and gamplay messages are coloured depending on player's or computer's action.
This contrasts well, green and red are strong colours, so user will easly recognize which actions were taken. <br>
<br>Text colour is <span style="color:#422800">very dark orange brown tone </span>, the inspiration came from Start/Reset buttons styling found in [getcsssan.com](https://getcssscan.com/css-buttons-examples). It was noticed to contrast well with all gameplay elements. <br>
![Text Colour](assets/images/readme/text-colour.png) <br>
<br>Start/Reset buttons have backround colour of <span style="color:#fbece0">light grayish orange</span>. It adds a pinch of colourfulness to the gamplay area. <br>
![Buttons Background Colour](assets/images/readme/buttons-background.png) <br>

# Features
The idea behind Tic Tac Toe represented in this project is to be of simple construction and intuitive to play. Gamaboard is centered verticaly and horizontaly, for mobile devices it occupies almost all screen.


### Game Title
- Location: top of gameplay area
- Simple design, game title seperated with a line from the next section.

![Game Title](assets/images/readme/game-title.png)

### Game Controls
- Location: under Game Title.
- Elements:
  - Timer - counts down from 15sec to zero.
  - Volume Button - mutes/plays game's sound effects(only during gameplay).
  - Help Button - gives access to game instructions (only if game is stopped).
- Buttons when hovered change the colour to orange to help user identify interactive elements.

![Game Controls](assets/images/readme/game-controls.png)

### Player Informations/Gameplay Messages
- Location: above and below gameboard.
- Top area gives player information which marker is selected to player and to computer.
- Bottom area gives player information regarding who moves first, win/lose/tie condition and when time to make a move has elapsed.

STARTING CONDITION <br>
![Starting Message](assets/images/readme/start-condition.png)

TIMER END<br>
![Timer End](assets/images/readme/timer-end.png)

WINNING CONDITION(COMPUTER EXAMPLE)<br>
![Winning Condition](assets/images/readme/winning-condition.png)

TIE CONDITION<br>
![Tie Condition](assets/images/readme/tie-condition.png)

### Gameboard
- Location: center of gameplay area.
- Constructed using JavaScript, represents traditional 3x3 Tic Tac Toe grid.
- Every square is "clickable" and will represent user action, if the move is valid.
- Markers are represented with classic Tic Tac Toe signs: letters 'X' and 'O'.

![Gameboard](assets/images/readme/gameboard.png)

### Start/Reset Buttons
- Location: bottom of gameboard, below Player Information.
- Start Button - starts the game, controls the logic of JavaScript for game ON condition.
- Restart Button - when the game is finished, player has an option to play again. Restart button clears the board and resets the timer, but allows for score count.
- Reset Button - resets the game and scores. Clears the gamboard, resets the timer and resets scores back to zero.
- Both buttons when hovered, change background colour to white.

![START/RESET Buttons](assets/images/readme/buttons.png)<br>
![Restart Button](assets/images/readme/buttons-restart.png)

### Score Section
- Location: bottom of gameplay area, the last element in the column.
- Represents Player's and Computer's wins.
- Player number is <span style="color:green">green</span> and Computer number is <span style="color:red">red</span> - same as markers colour.

![Score Section](assets/images/readme/score-area.png)

### Instructions Window
- Location: center of the screen.
- Instruction window is a pop-up type. It can be accessed by Help Button from Game Controls section.
- When window is active, dark overlay differentiates it from other elements.
- Window can be closed by pressing "x" in the top right corner of the window or by clicking anywhere outside the box.
- The instruction window is only available if the game is stopped.
- Contains basic gameplay instructions and describes elements of the gameboard. <br>
![Instructions Window](assets/images/readme/game-instruction.png)

### Audio Elements/Sound Effects
- **Gameplay:** during game **ancient clock ticking** is played in the background to increase competitiveness by adding extra stressor.
- **Player makes a move:** after Player's valid move the **punch** sound is played to address Player's choice.
- **Player fails to make a move on time:** when timer finish countdown and Player did not make any move, a **gong** is played to address finish of the turn and Computer next move.
- **Player wins:** Player win is represented with a *Matthew McConaughey* famous line **"Alright, Alright, Alright!"** from the 1993 movie *"Dazed and Confused"*.
- **Computer wins:** Computer win is represented with an **evil laugh** from the 1995 game *"Mortal Kombat 3"* created by GT Interactive. The laugh belongs to game character *"Shao Kahn"*.
- **Tie Condition:** represented by famous line **"It's a trap!"** from the 1983 movie *"Star Wars: Episode 6 - Return of the Jedi"*. The line belongs to fictional character *"Admiral Ackbar"*.

## Future Features
- Add Player option to play with another player or with computer.
- Add difficulty levels with option for 6x6 or 9x9 gameboard.
- Add avatars to represent players.

# Technologies Used
- [HTML5](https://html.spec.whatwg.org/) - basic site structure.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - cascade styling for website.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - DOM handling and game logic.
- [Balsamiq](https://balsamiq.com/wireframes/) - wireframes used at planning stage.
- [Gitpod](https://www.gitpod.io/#get-started) - cloud development platform to deploy website.
- [Github](https://github.com/) - code hosting platform to host the website.
- [Convertio](https://convertio.co/) - web platform to convert files to any format, used to convert image files to .webp format.

# Testing
All various test results are presented in separate [TESTING](TESTING.md) file.

# Deployment
## Using GitHub Pages to deploy the project.
The website was deployed to GitHub pages. The steps are as follows:
1. In GitHub project repository, click on **Settings** tab.

![GitHub Repository](assets/images/readme/github-deployment-1.png)

2. On the left side, find **Pages** tab.
3. On the right side of navigation table, find **Source** section and select *main* in the *branch* tab, make sure *root* directory is selected, and press **Save**.
4. If steps were successfully followed, the green box will appear with a message that the site was deployed.

    *Until the site is published and ready to view, it can take several minutes for the server to response.*

![GitHub Pages](assets/images/readme/github-deployment-2.png)

The live link can be found here - [ECOCITY](https://miloszmisiek.github.io/ci_p1_ecocity/).
## Fork a repository.
A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project. The steps are as follows:
1. On the GitHub.com navigate to repository page.
2. In the top-right corner of the page, click **Fork**.

![Fork Repo](/assets/images/readme/fork-repo.png)

You can fork a repository to create a copy of the repository and make changes without affecting the upstream repository.
## Clone a repository.
In GitHub you have option to create a local copy (clone) of your repository on your device hard drive. The steps are as follows:
1. On the GitHub.com navigate to repository page.
2. Locate the *Code* tab and click on it.
3. In the expanded window, click the two squares icon to copy https link of the repository.

![Cloning Repository](assets/images/readme/clone-repo-1.png)

4. On your computer, open **Terminal**.
5. Navigate to the directory of choice.
6. Type **git clone** and paste the copied link of the repository.
7. Press **Enter** and the local clone of the repository will be created in the selected directory.

![Cloning Repository - terminal](/assets/images/readme/clone-repo-terminal.png)

# Credits
## Content
- Colours visual representation come from [Scheme Color](https://www.schemecolor.com/flat-gray-ui-color-palette.php).
- Sound effects come from:
  - Main game theme:  
    - [Epic Song by BoxCat Games](https://freemusicarchive.org/music/BoxCat_Games)
    - [Music promoted by](https://www.chosic.com/free-music/all/)
    - [Creative Commons CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
  - Sound effects: [mixkit.co](https://mixkit.co/free-stock-music/)
