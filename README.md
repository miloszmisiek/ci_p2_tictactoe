<h1 align="center">TIC TAC TOE</h1>

Hello there!

Welcome to web browser based **Tic Tac Toe** game!  It is designed to entertain users taking a break from their duties. The game allows to play against computer with very basic algorithm of randomly selected fields. It is a single page game with use of HTML and CSS for basic site structure and styling and with JavaScript handling the DOM and the gameplay itself. The idea behind developing this game came from desire to challenge coding skills in vanilla JavaScript as part of web development process.

You can start the game [*here*](https://miloszmisiek.github.io/ci_p2_tictactoe/).

Enjoy your journey!

<h2 align="center"><img src="assets/images/readme/am-i-responsive.png" alt="Tic Tac Toe game on different screen sizes" style="max-width='100%'"></h2>

# Contents
- **[Contents](#contents)**
- **[User Experience](#user-experience)**
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
    - [Landing Page](#landing-page)
    - [Player Win Notice](#player-win-notice)
    - [Smartphone View](#smartphone-view)
  - [Site Structure](#site-structure)
    - [Fonts](#fonts)
    - [Colour](#colour)
- **[Features](#features)**
  - [Gameplay](#gameplay)
  - [Game Arena](#game-arena)
    - [Game Title](#game-title)
    - [Game Controls](#game-controls)
    - [Player Information/Gameplay Messages](#player-informationgameplay-messages)
    - [Gameboard](#gameboard)
    - [Start/Reset Buttons](#startreset-buttons)
    - [Score Section](#score-section)
    - [Instructions Window](#instructions-window)
    - [Audio Elements/Sound Effects](#audio-elementssound-effects)
  - [Future Features](#future-features)
- **[Technologies Used](#technologies-used)**
- **[Testing](#testing)**
- **[Deployment](#deployment)**
  - [Using GitHub Pages to deploy the project.](#using-github-pages-to-deploy-the-project)
  - [Fork a repository.](#fork-a-repository)
  - [Clone a repository.](#clone-a-repository)
- **[Credits](#credits)**
  - [Content](#content)
  - [Media](#media)
- **[Acknowledgements](#acknowledgements)**

# User Experience
## User Stories
- As a user, I want to play intuitive.
- As a user, I want to have access to instructions which are clearly identified.
- As a user, I want to play muted in cases it will disturb the others around me.
- As a user, I want to be entrained throughout the gameplay.
- As a user, I want to see what is mine and my opponents.
- As a user, I want to have a fair game.
- As a user, I want to play mobile if I must travel.
## Wireframes
[Balsamiq](https://balsamiq.com/) was used to create wireframes as part of project planning. They were used to discuss the concept of the website with a designated Code Institute mentor. The final project differs in some places from the original concept presented below to improve UX or responsiveness of the site.

### Landing Page
![Landing Page](/assets/images/readme/home.webp)

### Player Win Notice
![Player Win Notice](/assets/images/readme/player-win.webp)


### Smartphone View
![Smartphone View](/assets/images/readme/smartphone.webp)

## Site Structure
[Tic Tac Toe](https://miloszmisiek.github.io/ci_p2_tictactoe/) is a single page web browser game with buttons and gameboard area created to interact with a player. Instruction window is available through help-button represented with question mark in the circle. Next to help-button there are volume ON/OFF button and timer.  Below the gameboard there are START and RESET buttons for gameplay control and player/computer score counter.

### Fonts
Two styles of fonts are used for the project: 'Cabin Sketch' for heading (game title) and 'Patrick Hand' for body text elements. The choice was made to represent best the handwriting effect. All fonts are backed-up with sans-serif.

### Colour
The body background photo was selected to imitate wooden table. Gameplay area is represented by white notepad. The intention was to give user an experience of the classic Tic Tac Toe game played on a table with a pen and paper.<br>
<br>Green is a color representing player in the game.
<br>Red is a color representing computer in the game.<br>
<br>Markers, score and gameplay messages are coloured depending on player's or computer's action.
This contrasts well, green and red are strong colours, so user will easily recognise which actions were taken. <br>
<br>Text colour is very dark orange, brown tone, the inspiration came from Start/Reset buttons styling found in [getcsssan.com](https://getcssscan.com/css-buttons-examples). It was tested and noticed that this styling contrast well with all gameplay elements. <br>
![Text Colour](assets/images/readme/text-colour.png) <br>
<br>Start/Reset buttons have background colour of light grayish orange. It adds a pinch of colorfulness to the gameplay area. <br>
![Buttons Background Colour](assets/images/readme/buttons-background.png) <br>

# Features
The idea behind Tic Tac Toe represented in this project is to be of simple construction and intuitive to play. THe gameboard is centered vertically and horizontally, it is responsive and for mobile devices it occupies almost whole screen.

## Gameplay
- When player clicks **START** button markers 'X' and 'O' are randomly distributed to Player and Computer.
- First move is randomly drawn between Player and Computer - like "coin flip".
- Player's marker is always green and computer is always red.
- To **win a game**, Player (or Computer) must place his **mark 3 fields** next to each other vertically, horizontally or diagonally.<br>
  ![Tic Tac Toe Wins](assets/images/readme/tic-tac-toe-wins.png)<br>
- Player and Computer can mark only once per turn.
- Player has **time limit** for his move equals to **15 seconds**.
- Timer starts when Player press **START/RESTART** button and is reset after every turn.
- After every win respective score counter is updated for Player or Computer.
- To play again Player can press **RESTART** button.
- If Player decides to reset the game, he can press **RESET**. This will reset the counter additionally.

## Game Arena
### Game Title
- Location: top of gameplay area
- Simple design, game title separated with a line from the next section.

![Game Title](assets/images/readme/game-title.png)

### Game Controls
- Location: under Game Title.
- Elements:
  - Timer - counts down from 15sec to zero. It gives 
  - Volume Button - mutes/plays game's sound effects(only during gameplay). Icon changes depending on volume preference. If players hits the button while game is stopped, alert message informs user of invalid use.
  - Help Button - gives access to game instructions (only if game is stopped). If players hits the button while game is on, alert message informs user of invalid use.
- Buttons when hovered change the colour to orange to help user identify interactive elements.

![Game Controls](assets/images/readme/game-controls.png)

### Player Information/Gameplay Messages
- Location: above and below Gameboard.
- Top area gives player information which marker is selected to player and to computer.
- Bottom area gives player information regarding who moves first, win/lose/tie condition and when time to make a move has elapsed.

**STARTING CONDITION** <br>
<br>![Starting Message](assets/images/readme/start-condition.png)

**TIMER END**<br>
<br>![Timer End](assets/images/readme/timer-end.png)

**WINNING CONDITION (COMPUTER EXAMPLE)**<br>
<br>![Winning Condition](assets/images/readme/winning-condition.png)

**TIE CONDITION**<br>
<br>![Tie Condition](assets/images/readme/tie-condition.png)

### Gameboard
- Location: center of gameplay area.
- Constructed using JavaScript, represents traditional 3x3 Tic Tac Toe grid.
- Every square is "clickable" and will represent user action, if the move is valid.
- Markers are represented with classic Tic Tac Toe signs: letters 'X' and 'O'.

![Gameboard](assets/images/readme/gameboard.png)

### Start/Reset Buttons
- Location: bottom of gameboard, below Player Information.
- Start Button - starts the game, controls the logic of JavaScript for game ON condition.
- Restart Button - when the game is finished, player has an option to play again. Restart button clears the board and resets the timer but allows for score count.
- Reset Button - resets the game and scores. Clears the gameboard, resets the timer and resets scores back to zero.
- Both buttons when hovered, change background colour to white.

![START/RESET Buttons](assets/images/readme/buttons.png)<br>
![Restart Button](assets/images/readme/buttons-restart.png)

### Score Section
- Location: bottom of gameplay area, the last element in the column.
- Represents Player's and Computer's wins.
- Player number is green and Computer number is red - same as markers colour.

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

The live link can be found here - [Tic Tac Toe](https://miloszmisiek.github.io/ci_p2_tictactoe/).
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
- The main idea of how to build the game came from *James Q Quick* [YouTube Tutorial](https://www.youtube.com/watch?v=E621N5GBKv8&t=1341s).
- Modal pop-up window used for game's instructions section copied from *Web Dev Simplified* [YouTube Tutorial](https://www.youtube.com/watch?v=MBaw_6cPmAw).
- Part of code used for game's Score Area come from [Code Institute](https://codeinstitute.net/) 'Love Math’s' Essential Project.
- README file is based on game’s owner previous project [ECOCITY](https://github.com/miloszmisiek/ci_p1_ecocity) and some concepts are inspired by fellow Code Institute student [Mycrosys](https://github.com/Mycrosys/marblesgame) project.
- README and TESTING files text grammar and typing were checked using [Microsoft Word](https://www.microsoft.com/pl-pl/microsoft-365/word).
- Fonts are implemented using [Google Fonts](https://fonts.google.com/).
- Icons are implemented from [Font Awesome](https://fontawesome.com/).
- Colours visual representation come from [Color Hexa](https://www.colorhexa.com/).
- START/RESET buttons styling come from [getcsssan.com](https://getcssscan.com/css-buttons-examples).
- Markdown table for Responsiveness section in TESTING file was created using [Tables Generator](https://www.tablesgenerator.com/markdown_tables).
- GitHub Deployment section come from [GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

## Media
- Sound effects come from:
  - Ticking Clock, Gong and Player's Move - [mixkit.co](https://mixkit.co/free-stock-music/)
  - Win and Tie conditions - [soundboard.com](https://www.soundboard.com/).
  - Lose condition - [soundfxcenter.com](http://soundfxcenter.com/).
- Images come from:
  - Notepad Gameplay Background - [Clipart Library](http://clipart-library.com/).
  - Body Wooden Background - [Pexels](https://www.pexels.com/).
  - Tic Tac Toe wins combinations - [Fun Paper and Pencil Games](https://funpaperandpencilgames.blogspot.com/2019/01/tic-tac-toe-strategy-tutorial.html) blog.


# Acknowledgements
[Tic Tac Toe](https://miloszmisiek.github.io/ci_p2_tictactoe/) website was created as part of [Code Institute](https://codeinstitute.net/) Full Stack Software Developer (e-Commerce) Diploma. I would like to express my gratitude and appreciation to my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his guidance on this project and flexibility with arranging sessions, [Code Institute](https://codeinstitute.net/) support team to always be there in case of need and fellow students for being in this learning journey together.

Milosz Misiek 2022
