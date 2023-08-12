let params = new URLSearchParams(document.location.search);
let q = params.get("q");
let questions = []
let index = 0;
let submit = document.getElementById("submit");

async function getQuestions() {
    const response = await fetch(`https://opentdb.com/api.php?amount=${Number(q)}&category=11&type=multiple`)
    const json = await response.json()
    questions = json.results
}

function getNewQuestion() {
    document.getElementById("question").innerHTML = questions[index].question;
    let one = questions[index].correct_answer;
    let two = questions[index].incorrect_answers[0];
    let three = questions[index].incorrect_answers[1];
    let four = questions[index].incorrect_answers[2];
    let answers = [one, two, three, four];
    // console.log(answers);

    let x = Math.random() * 10;
    console.log(x)
    // document.getElementById("answer-one").innerHTML = answers[x];
}

function userSubmit() {
    index++;
    getNewQuestion();
}

submit.addEventListener("click", userSubmit);

async function main() {
    await getQuestions()
    getNewQuestion()
    console.log(questions)
}

main()

// function getData(cb) {
//     let api = new XMLHttpRequest();
//     let data;

//     api.open("GET", "https://opentdb.com/api.php?amount=50&category=11&type=multiple");
//     api.send();

//     api.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText));
//         }
//     };

// }

// function accessApi(data) {
//     console.log(data);
//     document.getElementById("test").innerHTML = data.results[0].question
// }

// getData(accessApi);