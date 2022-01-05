## Known Bugs
### 1. Computer can play when user clicks occupied field.
Bug was fixied by adding 'playerMove' boolean variable to 'fieldClicked' event listener in script.js:
- after click event the playerMove value is set to *true*
- when user makes a move on empty field, value is set to *false*
- only when playerMove value is *false*, *computerPlay()* function can be executed