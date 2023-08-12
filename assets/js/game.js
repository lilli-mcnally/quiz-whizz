// Checks the URL in the browser for the value of "p"
let params = new URLSearchParams(document.location.search);
let q = params.get("q");

// An empty array for all the questions
let questions = [];

// Score
let score = 0;

// Index is how we will increment how many questions have been answered
let index = 0;

// Answer buttons defined in variables
// let submit = document.getElementsByClassName("submit");

async function getQuestions() {
    const response = await fetch(`https://opentdb.com/api.php?amount=${Number(q)}&category=11&type=multiple`);
    const json = await response.json();
    questions = json.results;
}

function getNewQuestion() {
    document.getElementById("question").innerHTML = questions[index].question;

    let one = questions[index].correct_answer;
    let two = questions[index].incorrect_answers[0];
    let three = questions[index].incorrect_answers[1];
    let four = questions[index].incorrect_answers[2];
    let answers = [one, two, three, four];

    answers = answers.sort();

    document.getElementById("answer-one").innerHTML = answers[0];
    document.getElementById("answer-two").innerHTML = answers[1];
    document.getElementById("answer-three").innerHTML = answers[2];
    document.getElementById("answer-four").innerHTML = answers[3];
}

function userSubmit() {
    index++;
    // if (submit === one) {
    //     score++
    // }
    getNewQuestion();
}

// submit.addEventListener("click", userSubmit);

async function main() {
    await getQuestions()
    getNewQuestion()
    console.log(questions)
}

main()