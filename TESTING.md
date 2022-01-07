# Testing
## HTML & CSS Validators
Source codes was tested using HTML and CSS validators. No errors present.
1. HTML Validator [W3C Markup Validator](https://validator.w3.org/).
  
    ![HTML Validator](assets/images/testing/html-validator.png)


2. CSS Validator [W3C Jigsaw](https://jigsaw.w3.org/css-validator/)

    ![CSS Validator](assets/images/testing/jigsaw-css-validator.png)

3. JavaScript Validator [JSHint](https://jshint.com/)
To validate the script.js file, free JSHint validator was used for this project. Below the results:
    - 79 warnings present, all related to modern JavaScript code: "(...)is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)."
    
    ![JSHint Warnings Example](assets/images/testing/jshint-warnings.png)

## Responsiveness
Responsiveness design was checked with [Google Chrome Dev Tools](https://developer.chrome.com/), [Safari Web Development Tools](https://developer.apple.com/safari/tools/) and with [Am I responsive?](http://ami.responsivedesign.is/). The website responds well to different screen sizes.

|        | Moto G4 | Galaxy S5 | iPhone 5/SE | iPhone X | iPad | iPad Pro | 1366 x 768 | 1920 x 1080 |
|--------|:-------:|:---------:|:-----------:|:--------:|:----:|:--------:|:----------:|:-----------:|
| Render |   pass  |    pass   |     pass    |   pass   | pass |   pass   |    pass    |     pass    |
| Images |   pass  |    pass   |     pass    |   pass   | pass |   pass   |    pass    |     pass    |

## User Stories

## Browser Compatibility
ECOCITY website was successfully tested on following browsers with no issues noticed:
- Google Chrome Version 96.0.4664.55
- Mozilla Firefox Version 94.0.2
- Safari Version 14.1.2
- Microsoft Edge Version 96.0.1054.34
Layout and responsiveness stayed consistent for different viewports and browsers.
## Bugs
### 1. Computer can play when user clicks occupied field.
Bug was fixied by adding 'playerMove' boolean variable to 'fieldClicked' event listener in script.js:
- after click event the playerMove value is set to *true*
- when user makes a move on empty field, value is set to *false*
- only when playerMove value is *false*, *computerPlay()* function can be executed
### 2. Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
Bug was fixed by removing a pause() method from the markerSound element in fieldClicked function and adding if statment to markerSound.play() method.
    
![Submit Page Bug](assets/images/testing/submit-page-bug.png)

## Google Lighthouse
The website was tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome Dev Tools for desktop and mobile versions.
- Performance - rates how your website responds while loading.
- Accessibility - rates the accessibility of your website to all users (including impaired ones).
- Best Practices - rates how your websites include industry standards.
- SEO - *Search Engine Optimisation*, rates how your website is optimised for search engine results.
### Desktop Results

![Lighthouse Desktop](assets/images/testing/lighthouse-desktop.png)

### Mobile Results

![Lighthouse Mobile](assets/images/testing/lighthouse-mobile.png)

First tests resulted in Performance score approx. 75% (mobile devices), due to PNG file used for gameboard background photo. After test, image was converted using [Convertio](https://convertio.co/). This process resulted in Performance score improvement up to 86%.