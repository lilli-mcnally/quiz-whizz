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

## Bugs

#### Score Page
When I created the score page originally, I added a feature to present the users' selected answers in either red with a cross if they were wrong,and green with a tick if correct. I noticed when testing this worked that some of the longer answer options during the game play weren't staying centrally aligned, they would align left. 

To fix this, I asked Javascript to create a paragraph element for each answer in the coloured boxes, and then added styling to align these to the center. This then created a problem with the answers page, as the question number, selected answer, and tick or cross were now all on seperate lines, as below.

![Score Page Bug Issue](/assets/images/readme/bugs/score-page-issue-1.PNG "Score Page Bug Issue")

I opened Developer Tools and found that some of the some, like "5." had the selected answer next to the number, inside the paragraph element with the class of "answer-list". However, others like "4." seemed to have another paragraph element inside with an id of "answer-one" or "answer-two" etc.

![Score Page Bug Developer Tools](/assets/images/readme/bugs/score-page-issue-2.PNG "Score Page Bug Developer Tools")

I stepped back through my code, using "console.log" to find at which point the paragraph was being given to the selected answer. The paragraph element was being passed into the selected array before the score page was created, so I went further back. I had created a variable called "answer" when the game was in play, which accessed the inner HTML of another variable called "move". I realised "move" was being used to obtain the ID of the click event, which meant it was assigning the inner HTML of whatever was clicked on to the "answer" variable. This was also because of the submit class still being assigned to the "div" instead of the paragraph element, so it was accepting a click on the div. I moved the submit class the paragraph element, and changed the paragraph element's height and width to 100%. This means wherever in the box the user clicks, the paragraph element in that box will be pushed into the selected answer array.

![Score Page Bug fix](/assets/images/readme/bugs/score-page-fix.PNG "Score Page Bug fix")

#### Nav bar

I added a home icon and the Quiz Whizz logo to the top of the home box, but struggled to get these to fit in line with each other. Originally, I made the home icon fixed and gave it top and left properties. However, when I wanted to add the Rules modal, I couldn't keep the logo centered as easily.I added the Rules button first and styled it with CSS.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-issue-1.PNG "Score Page Bug fix")

Then I gave it a top property of 50px, a left property of 150px and "position: abosolute;". This put the Rules button in the right place.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-issue-2.PNG "Score Page Bug fix")

However, on smaller screens, the top and left properties became unproportionate, pushing the rules button too close to the logo.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-issue-3.PNG "Score Page Bug fix")

I decided to remove the "position: absolute;" property on both the home icon and the rules button, and put all three elements into a div. I made the div display "flex", and added "justify-content: space-between;" with a margin left and right to create equal gaps between all three elements. I also added "align-items: centre;" to keep the home icon and rules button in line with the logo.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-fix-1.PNG "Score Page Bug fix")

Lastly, I checked this was working on smaller screens, and everything had adjusted correctly.
![Score Page Bug fix](/assets/images/readme/bugs/nav-bar-fix-2.PNG "Score Page Bug fix")


## Credits

### Images
- [cinema](/assets/images/cinema.jpg) by [Tima Miroshnichenko](https://www.pexels.com/@tima-miroshnichenko/)
- [pencils] by [KatineDesign](https://pixabay.com/users/katinedesign-1833633/)
- [question-marks] by [Chandorobray](https://pixabay.com/users/chandorobray-29401458/) 