var scoresEl = document.getElementById("scores");
var instructionsEl = document.getElementById("instructions");
var questionsEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var i = 0;
var sec = 59;
var questions = [
    {
        id: "1",
        question: "Commonly used data types DO Not Include",
        one: "1. strings",
        two: "2. booleans",
        three: "3. alerts",
        four: "4. numbers",
        correct: "three"
    },
    {
        id: "2",
        question: "The condition in an if/else statment is enclosed with_______.",
        one: "1. quotes",
        two: "2. curley brackets",
        three: "3. parenthesis",
        four: "4. square brackets",
        correct: "two"
    },
    {
        id: "3",
        question: "Arrays in JavaScript can be used to store",
        one: "1. numbers and strings",
        two: "2. other arrays",
        three: "3. booleans",
        four: "4. all of the above",
        correct: "four"
    },
    {
        id: "4",
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        one: "1. JavaScript",
        two: "2. terminal/bash",
        three: "3. for loops",
        four: "4. console.log",
        correct: "four"
    },
]


function timer() {
    var timer = setInterval(function () {
        document.getElementById('timer').innerHTML = 'Time Left: ' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer)
        }
    }, 1000);
    return timer
}

var quizStart = function () {
 {


        instructionsEl.style.display = "none"
        document.getElementById("start-button").style.display = 'none';

        questionsEl.textContent = questions[i].question;

        var answer1ButtonEl = document.createElement("button");
        answer1ButtonEl.textContent = questions[i].one;
        answer1ButtonEl.className = "btn btn-one";
        answer1ButtonEl.id = "one";
        choicesEl.appendChild(answer1ButtonEl);
        var answer1El = document.querySelector(".btn-one");

        var answer2ButtonEl = document.createElement("button");
        answer2ButtonEl.textContent = questions[i].two;
        answer2ButtonEl.className = "btn btn-two";
        answer2ButtonEl.id = "two";
        choicesEl.appendChild(answer2ButtonEl);
        var answer2El = document.querySelector(".btn-two");

        var answer3ButtonEl = document.createElement("button");
        answer3ButtonEl.textContent = questions[i].three;
        answer3ButtonEl.className = "btn btn-three";
        answer3ButtonEl.id = "three";
        choicesEl.appendChild(answer3ButtonEl);
        var answer3El = document.querySelector(".btn-three");

        var answer4ButtonEl = document.createElement("button");
        answer4ButtonEl.textContent = questions[i].four;
        answer4ButtonEl.className = "btn btn-four";
        answer4ButtonEl.id = "four";
        choicesEl.appendChild(answer4ButtonEl);
        var answer4El = document.querySelector(".btn-four");
        var correctAnswer = questions[i].correct
 }
 var quiz = function() {
    questionsEl.textContent = questions[i].question;
     
    answer1ButtonEl.textContent = questions[i].one;
    
    answer2ButtonEl.textContent = questions[i].two;
    
    answer3ButtonEl.textContent = questions[i].three;

    answer4ButtonEl.textContent = questions[i].four;
     correctAnswer = questions[i].correct
 }
console.log(timer);

choicesEl.addEventListener("click", function () {

var pickedAnswer = event.target.id
if (pickedAnswer === correctAnswer) {
        document.getElementById('correct').innerHTML = "Correct!"
        i++;
        quiz()
 } else {
         sec = sec - 10;
        document.getElementById('correct').innerHTML = "Wrong!"

        }
        })
    }

var startPage = function () {
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz!";
    startButtonEl.className = "btn start-quiz";
    startButtonEl.id = "start-button"
    choicesEl.appendChild(startButtonEl);
}

startPage()
var startEl = document.querySelector(".start-quiz");
scoresEl.addEventListener("click", function () {
    alert("clicked")
});
startEl.addEventListener("click", function () {
    timer();
    quizStart();
});
