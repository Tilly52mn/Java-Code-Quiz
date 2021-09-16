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
 var goBackButtonEl =document.getElementById("back-btn");
 var clearScoresButtonEl = document.getElementById("clear-btn");
 var scoreListEl = document.getElementById("scoreListEl")
 var submitButtonEl =document.getElementById("submit-btn")
// var answer1ButtonEl = null;
// var answer2ButtonEl = null;
// var answer3ButtonEl = null;
// var answer4ButtonEl = null;
var sec = 59;
var i = 0;
var score = 0;
var highScores = []
var scoreObj = []
var scoreIdCounter = 0
var timerId = null
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
var timer =function () {
     timerId = setInterval(function () {
        document.getElementById('timer').innerHTML = 'Time Left: ' + sec;
        sec--;
        if (sec < 0) {
            finishedScreen()
        }
    }, 1000);
    return sec;
};
var quizStart = function () {

        instructionsEl.style.display = "none"
        document.getElementById("start-button").style.display = 'none';

        answer1ButtonEl.style.display = 'flex'
        // answer1ButtonEl = document.createElement("button");
        // answer1ButtonEl.className = "btn btn-one";
        // answer1ButtonEl.id = "one";
        // choicesEl.appendChild(answer1ButtonEl);
        // var answer1El = document.querySelector(".btn-one");
        answer2ButtonEl.style.display = 'flex'
        // answer2ButtonEl = document.createElement("button");
        // answer2ButtonEl.className = "btn btn-two";
        // answer2ButtonEl.id = "two";
        // choicesEl.appendChild(answer2ButtonEl);
        // var answer2El = document.querySelector(".btn-two");
        answer3ButtonEl.style.display = 'flex'
        // answer3ButtonEl = document.createElement("button");
        // answer3ButtonEl.className = "btn btn-three";
        // answer3ButtonEl.id = "three";
        // choicesEl.appendChild(answer3ButtonEl);
        // var answer3El = document.querySelector(".btn-three");
        answer4ButtonEl.style.display = 'flex'
        // answer4ButtonEl = document.createElement("button");
        // answer4ButtonEl.className = "btn btn-four";
        // answer4ButtonEl.id = "four";
        // choicesEl.appendChild(answer4ButtonEl);
        // var answer4El = document.querySelector(".btn-four");


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
            setTimeout(() => { correctEl.style.display = "none"},1000)

     } else {
            correctEl.style.display = "flex";
             sec = sec - 10;
            document.getElementById('correct').innerHTML = "Wrong!"
            }
         })

 var quiz = function() {
     if(i < questions.length){
   questionsEl.textContent = questions[i].question;
    
   answer1ButtonEl.textContent = questions[i].one;
   
   answer2ButtonEl.textContent = questions[i].two;
   
   answer3ButtonEl.textContent = questions[i].three;

   answer4ButtonEl.textContent = questions[i].four;
    correctAnswer = questions[i].correct
    }
      else {  
        finishedScreen(); }
}

 var endTimer =function(){
     clearInterval(timerId);
    timerEl.innerHTML = "Time: Finished!"
}

var finishedScreen = function(){
    endTimer();
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
    // submitDivEl = document.createElement("div");
    // submitDivEl.className = "submit-div";
    // submitDivEl.id = "submit-div";
    // bodyEl.appendChild(submitDivEl);

    // var submitInstructionsEl = document.createElement("p");
    // submitInstructionsEl.textContent = "Enter initials: "
    // submitInstructionsEl.id = "submit-p";
    // submitDivEl.appendChild(submitInstructionsEl);

    // var submitBoxEl = document.createElement("input");
    // submitBoxEl.type = "text";
    // submitBoxEl.name = "initals";
    // submitDivEl.appendChild(submitBoxEl);

    // var submitButtonEl = document.createElement("button");
    // submitButtonEl.textContent = "Submit";
    // submitButtonEl.className = "btn btn-submit";
    // submitButtonEl.id = "submit-btn";
    // submitDivEl.appendChild(submitButtonEl);

    console.log("score " +score);

    submitButtonEl.addEventListener("click", function(){
        var initialsInput = document.querySelector("input[name='initals']").value
        console.log(initialsInput);
        scoreObj = {
            initals : initialsInput,
            roundscore : score,
        }
        var savedHighScores = localStorage.getItem("highScores");
        highScores = JSON.parse(savedHighScores);
        if(highScores===null){
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
}
var scoreScreen = function(){
    
    highScores = JSON.parse(localStorage.getItem("highScores"));

    questionsEl.textContent = "High scores";
    instructionsEl.style.display = "none";

    
    scoreScreenEl.style.display = "flex";
    // var scoreScreenEl = document.createElement("div");
    // scoreScreenEl.id = "scoreScreenEl";
    // bodyEl.appendChild(scoreScreenEl);
    scoresRecordEl.style.display = "flex";
    // var scoresRecordEl = document.createElement("div");
    // scoresRecordEl.id = "scoresRecordEl";
    // scoreScreenEl.appendChild(scoresRecordEl);

    scoreScreenButtonsEl.style.display = "flex";
    // var scoreScreenButtonsEl = document.createElement("div");
    // scoreScreenButtonsEl.id = "scoreScreenButtonsEl";
    // scoreScreenEl.appendChild(scoreScreenButtonsEl);

    scoreListEl.style.display = "flex";
    // var scoreListEl = document.createElement("ol")
    // scoreListEl.className = "scoreListEl";
    // scoreListEl.id = "scoreListEl";
if (highScores !== null){
    highScores.sort((a,b) => {
        return b.roundscore - a.roundscore;
    });

    for (i=0; i<highScores.length; i++ ){
    var scoreRecordEl = document.createElement("li")
    scoreRecordEl.textContent = highScores[i].initals + " - " + highScores[i].roundscore;
    scoreRecordEl.className = "scoreLi"
    scoreListEl.appendChild(scoreRecordEl);
    }
    scoresRecordEl.appendChild(scoreListEl);
}
    // scoreListEl.style.display = "flex";
    // var goBackButtonEl = document.createElement("button");
    // goBackButtonEl.textContent = "Go Back";
    // goBackButtonEl.className = "btn go-back";
    // goBackButtonEl.id = "back-btn";
    // scoreScreenButtonsEl.appendChild(goBackButtonEl);

    // var clearScoresButtonEl = document.createElement("button");
    // clearScoresButtonEl.textContent = "Clear high scores";
    // clearScoresButtonEl.className = "btn clear-btn";
    // clearScoresButtonEl.id = "clear-btn";
    // scoreScreenButtonsEl.appendChild(clearScoresButtonEl);

    goBackButtonEl.addEventListener("click", function(){
        i = 0;
        // answer1ButtonEl = null;
        // answer2ButtonEl = null;
        // answer3ButtonEl = null;
        // answer4ButtonEl = null;
        sec = 59;
        score = 0;
        highScores = []
        scoreObj = []
        scoreIdCounter = 0 

            document.getElementById("one").style.display = 'none';
            document.getElementById("two").style.display = 'none';
            document.getElementById("three").style.display = 'none';
            document.getElementById("four").style.display = 'none';
            document.getElementById("submit-div").style.display = 'none';
            document.getElementById("container").style.display = 'none';
            
        this.removeEventListener
        document.getElementById("scoreScreenEl").remove();
        document.getElementById("timer").style.display = 'block';
        document.getElementById("timer").innerHTML = 'Time:Start the Quiz!';
        document.getElementById("question").innerHTML = 'Welcome to the Javascript Code Quiz!';
        document.getElementById("instructions").style.display = 'flex';
        document.getElementById("instructions").innerHTML = 'Try answering the folowing Javascript code reatled questions within the time limit. <br> Incorrect asnwers will cause a 10 second penalty. <br> Your time left is your Score!';
        pickedAnswer = null

        startPage();
    });

    clearScoresButtonEl.addEventListener("click", function(){
        localStorage.clear();
        scoreListEl.style.display = "none"
    })

}

var startPage = function () {
    // var startDivEl = document.createElement("div")
    // startDivEl.className = "container"
    // startDivEl.id = "container"
    // bodyEl.appendChild(startDivEl);
    // var startButtonEl = document.createElement("button");
    // startButtonEl.textContent = "Start Quiz!";
    // startButtonEl.className = "btn start-quiz";
    // startButtonEl.id = "start-button"
    // startDivEl.appendChild(startButtonEl);
    correctEl.style.display = 'none'
    startDivEl.style.display = 'flex'
    document.getElementById("start-button").style.display = 'flex'
    document.getElementById("start-button").addEventListener("click", function () {
        document.getElementById("container").style.display = 'none';
        timer();
        quizStart();
    });
}
scoresEl.addEventListener("click", function(){
    endTimer()
    document.getElementById("start-button").style.display = 'none';
    
    document.getElementById("one").style.display = 'none';
    document.getElementById("two").style.display = 'none';
    document.getElementById("three").style.display = 'none';
    document.getElementById("four").style.display = 'none';
    scoreScreen()
});

startPage()

//Start Button wont go away after first run or visit to score screen
//can't visit the score screen mid test
