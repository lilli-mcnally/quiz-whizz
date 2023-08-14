// Checks the URL in the browser for the value of "p"
let params = new URLSearchParams(document.location.search);
let q = params.get("q");

// An empty array for all the questions
let questions = [];

// Score
let score = 0;

// Index is how we will increment how many questions have been answered
let index = 0;

// Set empty variable for the four answers
let one = "";
let two = "";
let three = "";
let four = "";
let answers = [];

async function getQuestions() {
    const response = await fetch(`https://opentdb.com/api.php?amount=${Number(q)}&category=11&type=multiple`);
    const json = await response.json();
    questions = json.results;
}

function getNewQuestion() {
    document.getElementById("question").innerHTML = questions[index].question;

    one = questions[index].correct_answer;
    two = questions[index].incorrect_answers[0];
    three = questions[index].incorrect_answers[1];
    four = questions[index].incorrect_answers[2];
    answers = [one, two, three, four];

    answers = answers.sort();

    document.getElementById("answer-one").innerHTML = answers[0];
    document.getElementById("answer-two").innerHTML = answers[1];
    document.getElementById("answer-three").innerHTML = answers[2];
    document.getElementById("answer-four").innerHTML = answers[3];
    document.getElementById("score").innerHTML = `Score: ${score} / ${q}`;

}



function userSubmit() {
    for (let submit of document.getElementsByClassName("submit")) {
        submit.addEventListener("click", (e) => {
            let move = e.target.getAttribute("id");
            let answer = document.getElementById(move).innerHTML;
            if (answer == questions[index].correct_answer) {
                score++
                document.getElementById("score").innerHTML = `Score: ${score} / ${q}`;
                console.log(score)
            } else {
                console.log(score)
            }
            console.log("hello")
            getNewQuestion();
        });
    };
};



async function main() {
    await getQuestions()
    getNewQuestion()
    console.log(questions)
}

main()