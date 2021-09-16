var scoresEl = document.getElementById("scores");
var startDivEl = document.getElementById("container");
var instructionsEl = document.getElementById("instructions");
var questionsEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var headerEl = document.getElementById("header");
var bodyEl = document.getElementById("body");
var correctEl = document.getElementById("correct");
var timerEl = document.getElementById("timer");
var answer1ButtonEl = document.getElementById("one");
var answer2ButtonEl = document.getElementById("two");
var answer3ButtonEl = document.getElementById("three");
var answer4ButtonEl = document.getElementById("four");
var submitDivEl = document.getElementById("submit-div");
var scoreScreenEl = document.getElementById("scoreScreenEl");
var scoresRecordEl = document.getElementById("scoresRecordEl");
var scoreScreenButtonsEl = document.getElementById("scoreScreenButtonsEl");
var goBackButtonEl = document.getElementById("back-btn");
var clearScoresButtonEl = document.getElementById("clear-btn");
var scoreListEl = document.getElementById("scoreListEl")
var submitButtonEl = document.getElementById("submit-btn")
var isScoreClicked = false
var sec = 59;
var i = 0;
var score = 0;
var highScores = []
var scoreObj = []
var scoreIdCounter = 0
var pickedAnswer = null

var questions = [
    {
        id: "0",
        question: "Commonly used data types DO Not Include",
        one: "1. strings",
        two: "2. booleans",
        three: "3. alerts",
        four: "4. numbers",
        correct: "three"
    },
    {
        id: "1",
        question: "The condition in an if/else statment is enclosed with_______.",
        one: "1. quotes",
        two: "2. curley brackets",
        three: "3. parenthesis",
        four: "4. square brackets",
        correct: "two"
    },
    {
        id: "2",
        question: "Arrays in JavaScript can be used to store",
        one: "1. numbers and strings",
        two: "2. other arrays",
        three: "3. booleans",
        four: "4. all of the above",
        correct: "four"
    },
    {
        id: "3",
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        one: "1. JavaScript",
        two: "2. terminal/bash",
        three: "3. for loops",
        four: "4. console.log",
        correct: "four"
    },
]
correctEl.style.display = "none";

var quizStart = function () {

    instructionsEl.style.display = "none"
    document.getElementById("start-button").style.display = 'none';

    answer1ButtonEl.style.display = 'flex'
    answer2ButtonEl.style.display = 'flex'
    answer3ButtonEl.style.display = 'flex'
    answer4ButtonEl.style.display = 'flex'


    quiz()
}
choicesEl.addEventListener("click", function (event) {

    pickedAnswer = event.target.id
    console.log(pickedAnswer);
    console.log(correctAnswer);
    if (pickedAnswer === correctAnswer) {

        correctEl.style.display = "flex";
        document.getElementById('correct').innerHTML = "Correct!"
        i++;
        score = sec;
        setTimeout(() => { quiz(); }, 1000);
        setTimeout(() => { document.getElementById('correct').innerHTML = ""; }, 1000);
        setTimeout(() => { correctEl.style.display = "none" }, 1000)

    } else {
        correctEl.style.display = "flex";
        sec = sec - 10;
        document.getElementById('correct').innerHTML = "Wrong!"
    }
})

var quiz = function () {
    if (i < questions.length) {
        questionsEl.textContent = questions[i].question;

        answer1ButtonEl.textContent = questions[i].one;

        answer2ButtonEl.textContent = questions[i].two;

        answer3ButtonEl.textContent = questions[i].three;

        answer4ButtonEl.textContent = questions[i].four;
        correctAnswer = questions[i].correct
    }
    else {
        finishedScreen();
    }
}

var endTimer = function (timerId) {
    clearInterval(timerId);
    timerEl.innerHTML = "Time: Finished!"
}

var finishedScreen = function (timerId) {
    sec = 60;
    endTimer(timerId);
    answer1ButtonEl.style.display = "none";
    answer2ButtonEl.style.display = "none";
    answer3ButtonEl.style.display = "none";
    answer4ButtonEl.style.display = "none";
    answer4ButtonEl.style.display = "none";
    correctEl.style.display = "none";
    questionsEl.textContent = "All done!";
    instructionsEl.style.display = "block";
    instructionsEl.innerHTML = "Your final score is " + score;
    submitDivEl.style.display = "flex";


    console.log("score " + score);

}
var scoreScreen = function () {

    highScores = JSON.parse(localStorage.getItem("highScores"));

    questionsEl.textContent = "High scores";
    instructionsEl.style.display = "none";


    scoreScreenEl.style.display = "flex";
    scoresRecordEl.style.display = "flex";

    scoreScreenButtonsEl.style.display = "flex";

    scoreListEl.style.display = "flex";
    if (highScores !== null) {
        highScores.sort((a, b) => {
            return b.roundscore - a.roundscore;
        });

        for (let i = 0; i < highScores.length; i++) {
            var scoreRecordEl = document.createElement("li")
            scoreRecordEl.textContent = highScores[i].initals + " - " + highScores[i].roundscore;
            scoreRecordEl.className = "scoreLi"
            scoreListEl.appendChild(scoreRecordEl);
        }
        scoresRecordEl.appendChild(scoreListEl);
    }

    goBackButtonEl.addEventListener("click", function () {
        window.location.reload();
    });

    clearScoresButtonEl.addEventListener("click", function () {
        localStorage.clear();
        scoreListEl.style.display = "none"
    })

}

var startPage = function () {
    isScoreClicked = false;
    correctEl.style.display = 'none'
    startDivEl.style.display = 'flex'
    document.getElementById("start-button").style.display = 'flex'

}
scoresEl.addEventListener("click", function () {
    document.getElementById("start-button").style.display = 'none';
    isScoreClicked = true
    document.getElementById("one").style.display = 'none';
    document.getElementById("two").style.display = 'none';
    document.getElementById("three").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    scoreScreen();
});

startPage();

submitButtonEl.addEventListener("click", function () {
    highScores = []
    var initialsInput = document.querySelector("input[name='initals']").value
    console.log(initialsInput);
    scoreObj = {
        initals: initialsInput,
        roundscore: score,
    }
    var savedHighScores = localStorage.getItem("highScores");
    highScores = JSON.parse(savedHighScores);
    if (highScores === null) {
        highScores = []
    }
    scoreIdCounter = highScores.length;
    scoreObj.id = scoreIdCounter;

    highScores.push(scoreObj);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    scoreIdCounter++
    submitDivEl.style.display = "none";
    scoreScreen()
});

    document.getElementById("start-button").addEventListener("click", function () {
        document.getElementById("container").style.display = 'none';
        var timerId = setInterval(function () {
            // if(sec != null)endTimer(timerId)
            document.getElementById('timer').innerHTML = 'Time Left: ' + sec;
            sec--;
            if (sec < 0 || i >= questions.length) {
                finishedScreen(timerId)
            }
            if (isScoreClicked) {
                endTimer(timerId)
            }
        }, 1000);
        quizStart();
    });
