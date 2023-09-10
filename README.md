# QUIZ WHIZZ

## Purpose and Value
### User goals
- To play a quiz game about films and test their knowledge
Website goals
- For the user to find the format and layout of the quiz website obvious and easy to navigate
- To provide a fun game with 10 – 50 questions about films to users

### User Stories

> A couple who want to add a quiz game into their Friday Game nights when they have friends over. They want to play the game on their laptop so the questions and answers are big for everyone to see. They want to be able to get straight on to the game, and access the rules easily at any time.

> A man who likes to do puzzles and quizzes on his very long commute to work. He want to have the option to play with lots of questions to keep him entertained. He would like the game to easily function from the web on a mobile device without needing to scroll or spend too much time figuring out how the website works.

## Competitor Review

I’ve reviewed a few quiz related websites, including [Sporcle]( https://www.sporcle.com/?refresh) and [Buzzfeed Quizzes](https://www.buzzfeed.com/uk/quizzes).
### Pros

Sporcle

- Each quiz is easy to use, the user doesn’t need to figure out how to play.
- The game keeps a running score total

Buzzfeed

- The film questions have images to go with them, so the user can see a snippet of the movie if they’re unsure on the title.

### Cons
Sporcle

- Home page and game page layouts is very crowded and confusing for the user.

Buzzfeed

- The quiz runs in a linear layout, rather than each new question being displayed where the previous one was. This added to the busy layout with adverts for other quizzes means it’s unclear for the user where the quiz starts and ends.

## Objectives
- To provide easy access to the game on the home page
- To provide a Rules page to explain how the game works
- To give options for different genre’s of quiz
- To give options for how many questions the user wants in the game
- To keep a running score and show the total score at the end

| Objective                                                         | Importance | Viability / Feasibility | Colour |
|-------------------------------------------------------------------|------------|-------------------------|--------|
| To provide easy access to the game on the home page               | 5          | 5                       | Green  |
| To provide a Rules page to explain how the game works             | 4          | 3                       | Purple |
| To give options for different genre’s of quiz                     | 3          | 2                       | Blue   |
| To give options for how many questions the user wants in the game | 3          | 4                       | Yellow |
| To keep a running score and show the total score at the end       | 5          | 4                       | Red    |

![Scattergraph of the Objectives, Importance and Viability/Feasibility table](/assets/images/readme/objectives-scatter-graph.PNG "Objectives, Importance and Viability/Feasibility table")

From the scatter graph above, I have decided to focus on the following four objectives:
- To provide easy access to the game on the home page
- To provide a Rules page to explain how the game works
- To give options for how many questions the user wants in the game
- To keep a running score and show the total score at the end

In the future, I would like to add additional quizzes to the website so the user can choose between a Movies quiz, a TV show quiz and a Music quiz.

## Structure

I have chosen to create the website with five different pages. This is so that the user will be able to see clear difference between where the game is, where the rules are, and the home page. These five pages are:

- Home page
- Setup page – to ask the user how many questions they want
- Game page – the page where the user plays the quiz game
- Score page – the page where the user is told their total score after completing the quiz
- Rules page – where the user can check how the quiz works and what the rules are.

## Wireframes and Prototypes

- [Home page wireframe](/assets/images/readme/wireframes-and-prototype/home-page-wireframe.png "Home page wireframe")
- [Setup page wireframe](/assets/images/readme/wireframes-and-prototype/setup-page-wireframe.png "Setup page wireframe")
- [Game page wireframe](/assets/images/readme/wireframes-and-prototype/game-page-wireframe.png "Game page wireframe")
- [Score page wireframe](/assets/images/readme/wireframes-and-prototype/score-page-wireframe.png "Score page wireframe")
- [Rules page wireframe](/assets/images/readme/wireframes-and-prototype/rules-page-wireframe.png "Rules page wireframe")
- [Prototype Game page](/assets/images/readme/wireframes-and-prototype/game-page-prototype.PNG "Prototype Game page")

## Features

#### Logo and Favicon

I created the Logo myself on [Canva](https://www.canva.com/) using the [ColorSpace](https://mycolor.space/) website to help me find the right shade of peach.

![Logo](/assets/images/readme/features/feature-logo.webp "Logo")

I also created an amended version without the text, and converted this to an icon using [Favicon.io](https://favicon.io/) to use as my Favicon.

![Favicon](/assets/images/readme/features/feature-favicon.webp "Favicon")

#### Navbar

The Navbar features three colourful buttons directing you to the three pages across the site: the Home Page, the Setup page, and the Rules page. 

![Navbar](/assets/images/readme/features/feature-navbar.webp "Navbar")

All three buttons the same border radius and hover quality - changing the background colour to white. I kept the colours in the Navbar consistent across the site (e.g. Rules buttons are always green, Play buttons are always Yellow) for a better user experience.

![Navbar Hover](/assets/images/readme/features/feature-navbar-hover.webp "Navbar Hover")

#### Play and Rules buttons

On the Home page, I created two large buttons for users to choose to either check the rules, or move to the Setup page. The two div's have background colours that have a matching hex to the the background image used as their hover quality. 

![Play button](/assets/images/readme/features/feature-play.webp "Play button")
![Play button hover](/assets/images/readme/features/feature-play-hover.webp "Play button hover")
![Rules button](/assets/images/readme/features/feature-rules.webp "Rules button")
![Rules button hover](/assets/images/readme/features/feature-rules-hover.webp "Rules button hover")

This creates the effect of the pencils or question marks appearing and disappearing when the user hover over or off.

#### Footer

The footer has the four social media links. It also features a "Contact the developer" email address.

![Footer](/assets/images/readme/features/feature-footer.webp "Footer")

#### Rules Page and Modal

I wanted the Rules to be accessible from anywhere on the site, so I created a Rules page in HTML and a Rules Modal using Javascript. Both are a simplistic div with the a green border, and six easy to read rules of how to play the game.

![Rules Page](/assets/images/readme/features/feature-rules-page.webp "Rules Page")

The Modal has a close button so the user can open and close it with ease.

![Rules Modal](/assets/images/readme/features/feature-rules-modal.webp "Rules Modal")

#### Setup Page

The setup page has four options. Three are to decide how many questions to request from the API and present to the user, and the final one is a link back to the Rules page. Each button has a hover quality to make the colour of of the div a bit darker, demonstrated below on the Rules div.

![Setup Page](/assets/images/readme/features/feature-setup.webp "Setup Page")

#### Game Page

The Game page has a score that increments when the user answers correctly as the game is played. The question is called and presented to the user, and then four divs below have the possible answers.

![Game Page](/assets/images/readme/features/feature-game.webp "Game Page")

#### Score Page

Finally the score page shows the users final score once the game has finished. 

![Score Page](/assets/images/readme/features/feature-final-score.webp "Score Page")

It also tells the user which questions they got right and which were wrong, with colour coding and a tick or cross to match. I did consider presenting the user with the correct answer at this point, however my mentor Mitko Bachvarov advised not revealing the answer would mean the user is more likely to play again.

![Answer section](/assets/images/readme/features/feature-score-answers.webp "Answer section")

## Fixed Bugs

#### Score Page
When I created the score page originally, I added a feature to present the users' selected answers in either red with a cross if they were wrong,and green with a tick if correct. I noticed when testing this worked that some of the longer answer options during the game play weren't staying centrally aligned, they would align left. 

To fix this, I asked Javascript to create a paragraph element for each answer in the coloured boxes, and then added styling to align these to the center. This then created a problem with the answers page, as the question number, selected answer, and tick or cross were now all on seperate lines, as below.

![Score Page Bug Issue](/assets/images/readme/bugs/score-page-issue-1.PNG "Score Page Bug Issue")

I opened Developer Tools and found that some of the some, like `5.` had the selected answer next to the number, inside the paragraph element with the class of `answer-list`. However, others like `4.` seemed to have another paragraph element inside with an id of `answer-one` or `answer-two` etc.

![Score Page Bug Developer Tools](/assets/images/readme/bugs/score-page-issue-2.PNG "Score Page Bug Developer Tools")

I stepped back through my code, using `console.log` to find at which point the paragraph was being given to the selected answer. The paragraph element was being passed into the selected array before the score page was created, so I went further back. I had created a variable called `answer` when the game was in play, which accessed the inner HTML of another variable called `move`. I realised `move` was being used to obtain the ID of the click event, which meant it was assigning the inner HTML of whatever was clicked on to the `answer` variable. This was also because of the submit class still being assigned to the div instead of the paragraph element, so it was accepting a click on the div. I moved the submit class the paragraph element, and changed the paragraph element's height and width to 100%. This means wherever in the box the user clicks, the paragraph element in that box will be pushed into the selected answer array.

![Score Page Bug fix](/assets/images/readme/bugs/score-page-fix.PNG "Score Page Bug fix")

#### Nav bar

I added a home icon and the Quiz Whizz logo to the top of the home box, but struggled to get these to fit in line with each other. Originally, I made the home icon fixed and gave it top and left properties. However, when I wanted to add the Rules modal, I couldn't keep the logo centered as easily.I added the Rules button first and styled it with CSS.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-issue-1.PNG "Score Page Bug fix")

Then I gave it a top property of 50px, a left property of 150px and `position: abosolute;`. This put the Rules button in the right place.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-issue-2.PNG "Score Page Bug fix")

However, on smaller screens, the top and left properties became unproportionate, pushing the rules button too close to the logo.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-issue-3.PNG "Score Page Bug fix")

I decided to remove the `position: absolute;` property on both the home icon and the rules button, and put all three elements into a div. I made the div display `flex`, and added `justify-content: space-between;` with a margin left and right to create equal gaps between all three elements. I also added `align-items: centre;` to keep the home icon and rules button in line with the logo.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-fix-1.PNG "Score Page Bug fix")

Lastly, I checked this was working on smaller screens, and everything had adjusted correctly.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-fix-2.PNG "Score Page Bug fix")

#### Shuffling the answers

The API I decided to use is give a question, and four possible answers, one of which is correct. However, the answers were stored in separate arrays; one array called correct answer has the correct answer, and another array called incorrect answers stored the three incorrect answers. 

The problem with this was that when assigning the answers to the inner HTML of the divs, the first div (blue) was always the correct answer. I tried adding the four answers to an array, and did some research but really struggled to find a way to easily shuffle the answers within the array. 

I started working on a method using Math.Random() to select a random answer from the array and assign it to each of the answer divs. However, once an answer is assigned, I couldn’t see a way to eliminate it from the selection, so that if the Math.Random() function selected or rounded up/down to a number that had been selected before, it would choose a different answer. 

I fixed this issue by changing my approach. Instead of randomly selecting each answer from the array, I shuffled the four strings inside the array by putting them in Alphabetical order using the sort() fuction.

#### Answers with quotation marks

There are a select number of correct and incorrect answers provided by the API that contain quotation marks. However, instead of having quotation marks inside the string, these answers have the `&quot;` entity instead. This meant that when checking if the answer submitted was equal to the value of the correct_answer, Javascript was checking if:

>"A Fistful of Dollars", "For a Few Dollars More", "The Good, the Bad, and the Ugly"

was equal to:

>`&quot;`A Fistful of Dollars`&quot;`, `&quot;`For a Few Dollars More`&quot;`, `&quot;`The Good, the Bad, and the Ugly`&quot;`

This was classing a correctly selected answer as wrong, and not incrementing the score. The further issue was that Javascript wouldn't accept any replacement of `&quot;` with a quotation mark as this would end the string early. 

The noticed that althought Javascript was unable to display the answer correctly, HTML could. Therefore, the best fix I found was to create a div on the game page with the CSS property `display: none;` and asked Javascript to display the correct answer in this div. I then changed the if statement checking whether the user's answer was correct to check whether it matched the innerHTML of the invisible div, instead of checking against the value the API had produced.

#### Social Link Circles

I wanted to add my social links into circles so the circles would be coloured, and then have a hover quality of a white background and just their border coloured. However, I was having issues with the circles showing a tall ovals and inconsistent to one another in size.

![Social links showing as inconsistent icon sizes](/assets/images/readme/bugs/socials-issue-1.webp "Social links showing as inconsistent icon sizes")

I first thing I noted was that all my social media icons were different sizes, and as I wanted them to have a same-sized circle around them, I'd need to opt for a more standardised style. I went back to [Font Awesome](https://fontawesome.com/) and found square versions of each of the social media logos.

![Social links showing as ovals](/assets/images/readme/bugs/socials-issue-2.webp "Social links showing as ovals")

The final problem was the ovals. I used Developer Tools to look at each icon, and noticed that although the icon had a font size, the anchor tag didn't have a height or width property, so it was using all the space the list item gave it. I tried defining a height, but it needed to be a block element, and then the icon would shift out of the centre of the circle. Instead, I decided to have the CSS property class and id which made up the circle look to the anchor instead of the list item. This worked much better as the anchor tag became the size of it's child element icon.

![Social links circles fixed](/assets/images/readme/bugs/socials-fix.webp "Social links circles fixed")

I later decided to change the circles to a rounded-corner square, so the social links background were consistent with the rest of the site.

#### Jest Testing

I had an issue getting my Jest Testing to work properly. I used the boilerplate set up code for Jest Testing from the learning module provided by [Code Institute](https://codeinstitute.net/). I added my first test, and tested and recieved an error.

![Fetch error message](/assets/images/readme/bugs/jest-test-issue-1.webp "Fetch error message")

I looked into the issue on Google and found a useful post written by [Borislav Hadzhiev](https://bobbyhadz.com/blog/javascript-referenceerror-fetch-is-not-defined) which explained that `fetch` isn't available on older versions of Node, and so a packaged needed to be added using `npm install node-fetch`. I installed this and added `import fetch from 'node-fetch'` as the article suggested, but recieved a different error. I also tried adding Babel support as suggested by the [Jest Documentation](https://jestjs.io/docs/tutorial-async), but still recieved the error message in the terminal.

![Node version too old](/assets/images/readme/bugs/jest-test-issue-2.webp "Node version too old")

I spoke to Sarah at the [Code Institute](https://codeinstitute.net/) tutor support team who advised the version of Node I'm using is too old to cater for `fetch` in the way I've imported it. However, changing the import to `const fetch = require("node-fetch")` meant I was able to use the Jest testing in my project.

![Updated import for old Node version](/assets/images/readme/bugs/jest-test-fix.webp "Updated import for old Node version")

## Unfixed Bugs

#### Jest Testing (continued)

Unfortunately, fixing the Jest Testing bug meant that the game Javascript file now had `require` at the top of the page, which threw a new error. It also meant Javascript stopped before the API was called, meaning the game wouldn't run while the `const fetch = require("node-fetch")` was written at the top of the game.js file. 

![Require error message](/assets/images/readme/bugs/jest-test-cont-issue-1.webp "Require error message")

The only way to fix this was to complete the Jest Testing, and then remove both `const fetch = require("node-fetch")` from the top and `module.exports = { game };` from the bottom of the game.js file. 

Anyone wishing to view or add to the game.test.js file should add these two lines of code back in before proceeding, and remove them before deployment.

## Deployment

This site was built on Gitpo. I've used git add, commit and push to publish it on Github.

To deploy the site, I firstly went logged into Github and opened the Repository. I clicked "Settings" and then selected "Pages" on the left side of the screen.

Then, under "Branch" I chose "Main", and clicked Save.

## Credits

### Images
- [cinema](/assets/images/cinema.jpg) by [Tima Miroshnichenko](https://www.pexels.com/@tima-miroshnichenko/)
- [pencils] by [KatineDesign](https://pixabay.com/users/katinedesign-1833633/)
- [question-marks] by [Chandorobray](https://pixabay.com/users/chandorobray-29401458/) 
- [popcorn] by [Maiken Ingvordsen](https://unsplash.com/photos/Bz-eN8FoVPE)