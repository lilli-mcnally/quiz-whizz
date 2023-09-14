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

## Design

#### Colours
I chose to make this project really colourful, but also associated colours with parts of the website for an easy user experience. I chose the following a peach colour for the logo, and four neutral pastel colours to feature on buttons. I used the [WebAIM](https://webaim.org/resources/contrastchecker/) checker to find a darker version of the peach used in the logo for the enquiries email link hover colour.

![Colour Scheme](/assets/images/readme/colour-scheme.webp "Colour Scheme")

I used `#fafafa` for background hover qualities so the transition from colour to white wasn't too stark. I also used an off white with a transparency feature for the main div on top of the background, which I think went very well with the fixed background image.

![Main div transparency](/assets/images/readme/design/design-main-div.webp "Main div transparency")

I also chose to add a feature to the Javascript so that when the answers are given at the end, the correct answers are coloured green, and the incorrect answers are coloured red.

![Green and red answers](/assets/images/readme/design/design-answers.webp "Green and red answers")

#### Typography
Throughout this site I used `Preahvihear` as the primary font, which I found on [Google Fonts](https://fonts.google.com/specimen/Preahvihear). I chose this font because it's fun and quirky, but also easy to interpret and looks great written in questions. The backup font `Preahvihear` is `sans-serif`.

![Preahvihear font](/assets/images/readme/design/design-Preahvihear.webp "Preahvihear font")

For the Logo, designed on [Canva](https://www.canva.com/), I chose the font `Pluma`. It's also fun a quirky but was a little more dramatic for a great logo font.

![Pluma font](/assets/images/readme/features/feature-logo.webp "Pluma font")

#### Imagery
The Play and Rules buttons on the home page also have great images. As mentioned previously, I specifically chose the background colour of the div's to match the background colour in the two images used for the hover property. This creates the effect of the pencils or question marks appearing and disappearing when the user hover over or off.

I chose the social media links, as well as the ticks and crosses for the answer section, from [Font Awesome](https://fontawesome.com/).

![Font Awesome social links](/assets/images/readme/features/feature-footer.webp "Font Awesome social links")

#### Styling
Throughout the website, I chose to have coloured square boxes with rounded corners. This is consistent in everything from the Logo to the Footer social links. I chose this to give the website an overall modern and aesthetically pleasing look.

![Rounded corners](/assets/images/readme/design/design-edges.webp "Rounded corners")

#### Backgrounds
The main background across the website is an image of popcorn. I originally chose an image of a cinema, to go with the movie theme. However, the more I worked on the project, the more I felt the cinema image made the website look dark and dreary, and it didn't suit the colourful pastel divs I'd added to the rest of the site. I decided to go for a lighter image, and as popcorn and movies go hand in hand, I found this great picture of popcorn taken by [Maiken Ingvordsen](https://unsplash.com/photos/Bz-eN8FoVPE).

I chose to change the background colour of the Footer to a very light grey. I wanted it to be a different colour to the other divs on the website, and choosing a light grey meant I didn't add too many colour variations.

![Light grey footer](/assets/images/readme/design/design-footer.webp "Light grey footer")

## Responsive Design
#### 4K Screens
On largest screens up to 2560px, the background image is consistently filling the whole page. The main div with a white background adjusts according to screen size easily as well. Rules and Play buttons height is dependant on the view height. The gap between each Navbar element also adjusts easily, and the same is for each Footer social element. The text at the top of the page and footer are both centrally aligned and adjust to size.

On the Game and Setup pages, the four divs in the centre are well spaced and have good gaps between them. On the Score page, the Answers secton fills the centre gap and the grid inside holding the answers adjusts it's margins to the size of the screen. 

The Rules page fills the page width with a small margin on the left and right. The Rules font sizes are well adjusted to the size of the screen. The Rules Modal also fits the screen size. The Rules Modal covers the width of the main div on each page, to avoid any confusion.

#### Large Laptop
Large Laptops have a comfier feel with all elements well spaced and consistent in their closeness to one another. The logo has downsized slightly. The main div padding is consistent throughout. Font sizes have moved down a bit to transition from one size to the next instead of large jumps.

The Setup and Game div's are a good square shape, and consistent in size with one another to make the flow from the Setup to the Game page easy for the user. 

#### Laptop
At Laptop size, the Play and Rules buttons are closer to the size of other elements on the page. Text sizes have adjusted again but have done so consistently. The message at the top of the Home page has changed to 20px, but the Play and Rules titles are still at 30px to use some of the space in their div's.

On the Setup and Game pages, the four div's are almost square and are a good size to hold each of the answers. 

#### Tablet
At tablet size, most of the web pages change shape. The Logo becomes stacked above the Navbar, so the three Nav elements can stay a good distance apart. The Navbar is smaller in height because it doesn't need to account for the Logo height anymore. The Footer social links are inside a div with `display:flex` and adjust to the width automatically.

On the home page, the Play and Rules div's are now stacked one on top of the other, rather than side by side. On the Game and Setup pages, the four div's change into one column of four that are well spaced. The Rules Page and Modal adjust to the size of the page and the text wraps well to the next line.

#### Mobile
By mobile size, the Navbar has adjusted to having smaller gaps between elements but is still well spaced. The footer text adjusts well to this size and the background image can still be seen clearly.

The Game and Setup page divs adjust well to all mobile sizes and have plenty of room between each div so the wrong button isn't clicked. The Rules Modal and Page are great at this size as well, with thinner margins to allow users to see more text on each line.

#### Small Mobile
The footer is well adjusted in height and the margins of the text both in the footer and at the top of the page are adjusted for smaller screen. This means they're don't wrap into more lines than needed.

On the Home page, the Rules and Play buttons are smaller, but their hover property still clearly displays the question marks and pencils images.

The questions on the Game page are adjusted to the size of the screen and have minimal margin left and right so the user can easily read the question. Font sizes are smaller, generally 18px - 24px across all pages.

## Fixed Bugs

#### Score Page
When I created the score page originally, I added a feature to present the users' selected answers in either red with a cross if they were wrong,and green with a tick if correct. I noticed when testing this worked that some of the longer answer options during the game play weren't staying centrally aligned, they would align left. 

To fix this, I asked Javascript to create a paragraph element for each answer in the coloured boxes, and then added styling to align these to the center. This then created a problem with the score page, as the question number, selected answer, and tick or cross were now all on seperate lines, as below.

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

### Research
- [Sporcle]( https://www.sporcle.com/?refresh)
- [Buzzfeed Quizzes](https://www.buzzfeed.com/uk/quizzes).

### Frameworks, Libraries & Programs
#### Planning and Development
- I created my wireframes on [Balsamiq](https://balsamiq.com/)
- I created my prototype on [Figma](https://www.figma.com/)
- I build the project on on [Gitpod](https://gitpod.io/)
- I stored and deployed the project on [Github](https://github.com/)
- I used [W3 Schools](https://www.w3schools.com/) for guidance on setting up my Rules Modal

#### Styling and Code
- API [Open Trivia Database](https://opentdb.com/)
- I used [Jest](https://jestjs.io/) for my game testing
- I used the boilerplate code for Jest Testing in the [Code Institute](codeinstitute.net) lessons to set up my game testing
- All social media icons obtained from [Font Awesome](https://fontawesome.com/)
- Preahvihear font from [Google Fonts](https://fonts.google.com/)
- Pluma font from [Canva](https://www.canva.com/)

#### Colours
- I used [ColorSpace](https://mycolor.space/) and [Colormind](http://colormind.io/) to help me put together a palette of colours for my website
- I used [Eye Dropper](https://eyedropper.org/) to find the HEX of the background of the [Pencils](assets/images/pencils.webp) and [Question Marks](assets/images/question-marks.webp) images
- I used [WebAIM](https://webaim.org/resources/contrastchecker/) to check the coloured text again their corresponding backgrounds


### Images
- I used [Pixabay](https://pixabay.com/) for the [Pencils](assets/images/pencils.webp) and [Question Marks](assets/images/question-marks.webp) images
- I used [Unsplash](https://unsplash.com/) for the [Popcorn](assets/images/popcorn.webp) image
- I used [Pexels](https://www.pexels.com/) for the [cinema]( https://www.pexels.com/photo/an-empty-cinema-7991486/) image (referenced in prototype, I was going to use this as my background but changed to Popcorn instead).
- I used [Simple Image Resizer](https://www.simpleimageresizer.com/) to make my images smaller, so the page they're on loads faster.
- I also used [Convertio](https://convertio.co/) [Pixelied PNG to WEBP Converter](https://pixelied.com/convert/png-converter/png-to-webp) to convert the images to a .WEBP file.
- Lastly, I used [Tiny PNG](https://tinypng.com/) to compress each image, to improve webpage load times.


#### Validators

### Media
- [Pencils](assets/images/pencils.webp) by [KatineDesign](https://pixabay.com/users/katinedesign-1833633/)
- [Question Marks](assets/images/question-marks.webp) by [Chandorobray](https://pixabay.com/users/chandorobray-29401458/) 
- [Popcorn](assets/images/popcorn.webp) by [Maiken Ingvordsen](https://unsplash.com/photos/Bz-eN8FoVPE)
- [Logo](assets/images/logo.webp) created by me on [Canva](https://www.canva.com/)
- [Favicon](assets/images/quiz-whizz-favicon.ico) created by me on [Canva](https://www.canva.com/) and changed to an icon using [Favicon.io](https://favicon.io/)
- [cinema]( https://www.pexels.com/photo/an-empty-cinema-7991486/) by [Tima Miroshnichenko]( https://www.pexels.com/@tima-miroshnichenko/) (referenced in prototype, I was going to use this as my background but changed to Popcorn instead).
- I created the colour palette for the README in [Microsoft Powerpoint](https://www.microsoft.com/en-gb/microsoft-365/powerpoint)

## Acknowledgements


