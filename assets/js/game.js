let params = new URLSearchParams(document.location.search);
let q = params.get("q");
let questions = []
let index = 0;
let submit = document.getElementById("submit");
let answerIndex = [];

async function getQuestions() {
    const response = await fetch(`https://opentdb.com/api.php?amount=${Number(q)}&category=11&type=multiple`)
    const json = await response.json()
    questions = json.results
}

let game = {
    one: questions[index].correct_answer,
    two: questions[index].incorrect_answers[0],
    three: questions[index].incorrect_answers[1],
    four: questions[index].incorrect_answers[2],
    answers: [one, two, three, four],
    a: "",
    b: "",
    c: "",
    d: "",
}

function getNewQuestion() {
    document.getElementById("question").innerHTML = questions[index].question;
    testFunction()

    assignLetter(game.a)
    assignLetter(game.b)
    assignLetter(game.c)
    assignLetter(game.d)
    console.log(game.a)
    console.log(game.b)
    console.log(game.c)
    console.log(game.d)
}

function assignLetter(number) {
    number = game.answers[Math.floor(Math.random() * answers.length)]
    return number
}

// function ryan() {
//     if (4 < answerIndex.length) {
//         testFunction()
//     }
// }

// function testFunction() {
//     // let y = Math.floor(Math.random() * 4)
//     // answerIndex.push(y)
//     // console.log(answerIndex);
//     // for (i = 0; i < answerIndex.length; i++) {
//     //     if (answerIndex.includes(y)) {
//     //         testFunction()
//     //     }}
// }

// function answerOne() {
//     console.log(answers)
//     let a = answers[Math.floor(Math.random() * answers.length)]
//     return a;
// }

// function answerTwo() {
//     let b = answers[Math.floor(Math.random() * answers.length)]
//     if (b === a) {
//         answerTwo();
//     }
//     return b;
// }

// console.log(a)
// console.log(b)

// let a = answers[Math.floor(Math.random() * answers.length)]
// console.log(a);
// let b = answers[Math.floor(Math.random() * answers.length)]

// console.log(b);
// let c = answers[Math.floor(Math.random() * answers.length)]
// console.log(c);
// let d = answers[Math.floor(Math.random() * answers.length)]
// console.log(d);

// document.getElementById("answer-one").innerHTML = a;
// document.getElementById("answer-two").innerHTML = answers[Math.floor(Math.random() * answers.length)];
// document.getElementById("answer-three").innerHTML = answers[Math.floor(Math.random() * answers.length)];
// document.getElementById("answer-four").innerHTML = answers[Math.floor(Math.random() * answers.length)];





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