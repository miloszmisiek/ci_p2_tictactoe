## Known Bugs
### 1. Computer can play when user clicks occupied field.
Bug was fixied by adding 'playerMove' boolean variable to 'fieldClicked' event listener in script.js:
- after click event the playerMove value is set to *true*
- when user makes a move on empty field, value is set to *false*
- only when playerMove value is *false*, *computerPlay()* function can be executed
### 2. Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
Bug was fixed by removing a pause() method from the markerSound element in fieldClicked function and adding if statment to markerSound.play() method.

# Testing
## HTML & CSS Validators
Source codes was tested using HTML and CSS validators. No errors present.
1. HTML Validator [W3C Markup Validator](https://validator.w3.org/).
  
    ![HTML Validator](assets/images/testing/html-validator.png)


2. CSS Validator [W3C Jigsaw](https://jigsaw.w3.org/css-validator/)

    ![CSS Validator](assets/images/testing/jigsaw-css-validator.png)

## Responsiveness
Responsiveness design was checked with [Google Chrome Dev Tools](https://developer.chrome.com/), [Safari Web Development Tools](https://developer.apple.com/safari/tools/) and with [Am I responsive?](http://ami.responsivedesign.is/). The website responds well to different screen sizes.

|        | Moto G4 | Galaxy S5 | iPhone 5/SE | iPhone X | iPad | iPad Pro | 1366 x 768 | 1920 x 1080 |
|--------|:-------:|:---------:|:-----------:|:--------:|:----:|:--------:|:----------:|:-----------:|
| Render |   pass  |    pass   |     pass    |   pass   | pass |   pass   |    pass    |     pass    |
| Images |   pass  |    pass   |     pass    |   pass   | pass |   pass   |    pass    |     pass    |

## User Stories
- As a user, I want to see the content clearly.
  - White background gives great contrast to content presented.
  - The content ratio is maintained to focus attention on important aspects.
  - Navigation bar at the top gives access to all website pages.
- As a user, I want to know what the purpose of the website is as I open it.
  - When the site opens, the hero image with the headings gets user's attention.
  - Logo of the project is a message to the website main principle, to create eco-friendly environment.
- As a user, I want to access content in a very few clicks.
  - User can navigate through whole website content by using mouse button on the navigation bar and scrolling through the pages to see the content.
- As a user, I want to know what source was used to present data.
  - All paragraphs on **Home** and **GO ECO** page have source data attached.
- As a user, I want to have visual representation of climate change data.
  - On **Home** page the facts related to climate change have images attached.
- As a user, I want to know what causes developing climate change.
  - On **Home** page below *hero* section user has access to essential climate change facts.
- As a user, I want to know what steps I can take to help the environment.
  - Separate **GO ECO** page present first steps the user can take to be more eco-friendly.
- As a user, I want to have the option to contact creator for more information required.
  - On the **Contact Us** page user can fill the form and send the message to responsible person.
- As a user, I want to access project social media, if any exist.
  - All social media links are in the footer and can be accessed from every page.
- As a user, I want to know who has created the website.
  - In the footer there is small text with website creator copyright.
## Browser Compatibility
ECOCITY website was successfully tested on following browsers with no issues noticed:
- Google Chrome Version 96.0.4664.55
- Mozilla Firefox Version 94.0.2
- Safari Version 14.1.2
- Microsoft Edge Version 96.0.1054.34
Layout and responsiveness stayed consistent for different viewports and browsers.
## Bugs
During html code validation, 1 bug was found and resolved:
   - On Submit Page, there was no heading element. After test, the site was slightly restructured to include h2 element.
    
![Submit Page Bug](assets/images/testing/submit-page-bug.png)

## Google Lighthouse
The website was tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome Dev Tools for desktop and mobile versions.
- Performance - rates how your website responds while loading.
- Accessibility - rates the accessibility of your website to all users (including impaired ones).
- Best Practices - rates how your websites include industry standards.
- SEO - *Search Engine Optimisation*, rates how your website is optimised for search engine results.
### Desktop Results - Home Page (example)

![Lighthouse Desktop](assets/images/testing/lighthouse-desktop.png)

### Mobile Results - Home Page (example)

![Lighthouse Mobile](assets/images/testing/lighthouse-mobile.png)

First tests resulted in Performance score approx. 85%, due to large image files used on the website. After test, all images were resized. This process resulted in Performance score improvement up to 88%.