// Checks the URL in the browser for the value of "p"
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
}

// Obtains the value of "q" from the URL, and requests that many questions from the API
async function getQuestions() {
    const response = await fetch(`https://opentdb.com/api.php?amount=${Number(q)}&category=11&type=multiple`);
    const json = await response.json();
    game.questions = json.results;
}

// Displays the question & answers
function getNewQuestion() {
    //Requests the currect question using the index as a counter
    document.getElementById("question").innerHTML = game.questions[game.index].question;

    //Set the value for each question and adds them to an array together
    game.one = game.questions[game.index].correct_answer;
    game.two = game.questions[game.index].incorrect_answers[0];
    game.three = game.questions[game.index].incorrect_answers[1];
    game.four = game.questions[game.index].incorrect_answers[2];
    game.answers = [game.one, game.two, game.three, game.four];

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
            if (answer == game.questions[game.index].correct_answer) {
                game.score++
                document.getElementById("score").innerHTML = `Score: ${game.score} / ${q}`;
                // console.log(game.score)
            } else {
                // console.log(game.score)
            }
            if (game.index === q) {
                gameOver();
            } else {
                game.index++;
                console.log(game.index);
                console.log(q);
                getNewQuestion();
            }
        });
    };
};

function gameOver() {
    console.log("Game Over")
}


async function main() {
    //Waits for the page to load, so Javascript can find the value of q before using it in the getQuestions function
    await getQuestions()

    //Asks for the first question
    getNewQuestion()

    //Logs the questions to the console ----> Do we need this?
    console.log(game.questions)

    //Applies the Event Listeners and waits for the user to choose an answer
    userSubmit()
}

//Runs the startup for the game when the page first loads
main()