/**
 * Checks the URL in the browser for the value of "q".
 * "q" is given a value when the user chooses how many questions they want the game to have.
 */
let params = new URLSearchParams(document.location.search);
let q = params.get("q");

// Empty strings and arrays to add to during game fuctions
let game = {
    one: "",
    two: "",
    three: "",
    four: "",
    questions: [],
    answers: [],
    index: 0,
    score: 0,
    correct: [],
    selected: [],
}

// Obtains the value of "q" from the URL, and requests that many questions from the API
async function getQuestions() {
    const response = await fetch(`https://opentdb.com/api.php?amount=${Number(q)}&category=11&type=multiple`);
    const json = await response.json();
    game.questions = json.results;
}

// Displays the question & answers
function getNewQuestion() {

    //If the user has gone straight to the game page without choosing the number of questions they want, this redirects them to the setup page
    if (q === null) {
        window.location.replace("setup.html");
    }

    //Requests the currect question using the index as a counter
    document.getElementById("question").innerHTML = `Question ${Number(game.index) + 1}: ${game.questions[game.index].question}`;

    //Set the value for each question and adds them to an array together
    game.one = game.questions[game.index].correct_answer;
    game.two = game.questions[game.index].incorrect_answers[0];
    game.three = game.questions[game.index].incorrect_answers[1];
    game.four = game.questions[game.index].incorrect_answers[2];
    game.answers = [game.one, game.two, game.three, game.four];

    //Assigns the correct answer with correct punctuation to a div, for selected answer to be checked against later
    document.getElementById("correct-answer").innerHTML = game.questions[game.index].correct_answer;


    //Sorts the answers into alphabetical order. This also functions as shuffling the answers
    answers = game.answers.sort();

    //Changes the text of each answer box to it's assigned answer for this turn
    document.getElementById("answer-one").innerHTML = answers[0];
    document.getElementById("answer-two").innerHTML = answers[1];
    document.getElementById("answer-three").innerHTML = answers[2];
    document.getElementById("answer-four").innerHTML = answers[3];
    document.getElementById("score").innerHTML = `Score: ${game.score} / ${q}`;
}

//Fuction for the users turn
function userSubmit() {

    //Adds event listeners to each of the answer boxes
    for (let submit of document.getElementsByClassName("submit")) {
        submit.addEventListener("click", (e) => {

            //Obtains the ID of the answer clicked
            let move = e.target.getAttribute("id");

            //Obtains the text inside the answer box that was clicked
            let answer = document.getElementById(move).innerHTML;

            //Checks if the answer selected matches correct answer provided by the API
            if (answer == document.getElementById("correct-answer").innerHTML) {
                game.score++
                document.getElementById("score").innerHTML = `Score: ${game.score} / ${q}`;
            }

            //Adds the correct answer for this question to an array
            game.correct.push(document.getElementById("correct-answer").innerHTML);

            //Adds the answer chosen by the user to an array
            game.selected.push(answer);

            //Increment game turn by 1
            game.index++;

            //Check if the game turns is equal to the number of questions requested.
            if (String(game.index) === q) {
                gameOver();
            } else {
                getNewQuestion();
            }
        });
    };
};

//Replaces the game HTML with the score page
function gameOver() {
    document.getElementById("question").innerHTML = `WOOHOO! You got: ${game.score}/${q}`;
    document.getElementById("question").style.fontSize = "40px";
    document.getElementById("answer-div-one").style.display = "none";
    document.getElementById("answer-div-two").style.display = "none";
    document.getElementById("answer-div-three").style.display = "none";
    document.getElementById("answer-div-four").style.display = "none";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("play-again-link").style.display = "flex";

    // Creates a new div for the game answers to tell user if they chose right or wrong
    let gameAnswers = document.createElement("div")
    gameAnswers.setAttribute("id", "game-answers");

    // Makes the "answers-title" visible
    document.getElementById("answers-title").style.display = "block";

    //Iterates through each value in the "selected" array
    for (let i in game.selected) {

        //Creates a new "p" element
        let answerList = document.createElement("p");

        //Appends the "p" to the div with the ID of"game-area"
        gameAnswers.appendChild(answerList)

        //Checks if each value in the selected array matches the value of the same index in the correct array
        if (game.selected[i] == game.correct[i]) {

            //Changes the HTML to the number of the question, and a tick icon
            answerList.innerHTML = `${Number(i) + 1}. ${game.selected[i]} <i class="fa-solid fa-check"></i>`;

            //Changes font to green and adds the class name of "answer-list" for further styling
            answerList.className = "answer-list";
            answerList.style.color = "#026302";
        } else {
            //Changes the HTML to the number of the question, and an X icon
            answerList.innerHTML = `${Number(i) + 1}. ${game.selected[i]} <i class="fa-solid fa-xmark"></i>`;

            //Changes font to red and adds the class name of "answer-list" for further styling
            answerList.className = "answer-list";
            answerList.style.color = "#9e0202";
        }

        // Sets the "game-answers" div as a child of the "answers-div"
        document.getElementById("answers-div").appendChild(gameAnswers)
    }
}

async function main() {
    //Waits for the page to load, so Javascript can find the value of q before using it in the getQuestions function
    await getQuestions()

    //Asks for the first question
    getNewQuestion()

    //Applies the Event Listeners and waits for the user to choose an answer
    userSubmit()


}

//Runs the startup for the game when the page first loads
main()