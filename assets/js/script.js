var scoresEl = document.getElementById("scores");
var instructionsEl = document.getElementById("instructions");
var questionsEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var headerEl = document.getElementById("header");
var bodyEl = document.getElementById("body");
var correctEl = document.getElementById("correct")
var submitDivEl = null;
var i = 0;
var answer1ButtonEl = null;
var answer2ButtonEl = null;
var answer3ButtonEl = null;
var answer4ButtonEl = null;
var sec = 69;
var score = 0;
var highScores = []
var scoreObj = []
var scoreIdCounter = 0

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
            clearInterval(timer);
        }
    }, 1000);
    return sec
}

var quizStart = function () {

        instructionsEl.style.display = "none"
        document.getElementById("start-button").style.display = 'none';

        questionsEl.textContent = questions[i].question;

        answer1ButtonEl = document.createElement("button");
        answer1ButtonEl.textContent = questions[i].one;
        answer1ButtonEl.className = "btn btn-one";
        answer1ButtonEl.id = "one";
        choicesEl.appendChild(answer1ButtonEl);
        var answer1El = document.querySelector(".btn-one");

        answer2ButtonEl = document.createElement("button");
        answer2ButtonEl.textContent = questions[i].two;
        answer2ButtonEl.className = "btn btn-two";
        answer2ButtonEl.id = "two";
        choicesEl.appendChild(answer2ButtonEl);
        var answer2El = document.querySelector(".btn-two");

        answer3ButtonEl = document.createElement("button");
        answer3ButtonEl.textContent = questions[i].three;
        answer3ButtonEl.className = "btn btn-three";
        answer3ButtonEl.id = "three";
        choicesEl.appendChild(answer3ButtonEl);
        var answer3El = document.querySelector(".btn-three");

        answer4ButtonEl = document.createElement("button");
        answer4ButtonEl.textContent = questions[i].four;
        answer4ButtonEl.className = "btn btn-four";
        answer4ButtonEl.id = "four";
        choicesEl.appendChild(answer4ButtonEl);
        var answer4El = document.querySelector(".btn-four");
        var correctAnswer = questions[i].correct

 var quiz = function() {
     if(i<questions.length){
    questionsEl.textContent = questions[i].question;
     
    answer1ButtonEl.textContent = questions[i].one;
    
    answer2ButtonEl.textContent = questions[i].two;
    
    answer3ButtonEl.textContent = questions[i].three;

    answer4ButtonEl.textContent = questions[i].four;
     correctAnswer = questions[i].correct
     }
     else{
         endTimer();
         finishedScreen();
     }
 }
 choicesEl.addEventListener("click", function () {

    var pickedAnswer = event.target.id
    if (pickedAnswer === correctAnswer) {
            document.getElementById('correct').innerHTML = "Correct!"
            i++;
            quiz();
            score = sec;
     } else {
             sec = sec - 10;
            document.getElementById('correct').innerHTML = "Wrong!"
            }
         })
 }

 var endTimer =function(){
    document.getElementById("timer").style.display = 'none';
    var timerFinishedEl = document.createElement("p");
    timerFinishedEl.className = "finished";
    timerFinishedEl.innerHTML = "Time: Finished!"
    headerEl.appendChild(timerFinishedEl);
}

var finishedScreen = function(){
     
    answer1ButtonEl.style.display = "none";
    answer2ButtonEl.style.display = "none";
    answer3ButtonEl.style.display = "none";
    answer4ButtonEl.style.display = "none";
    answer4ButtonEl.style.display = "none";
    correctEl.style.display = "none";
    questionsEl.textContent = "All done!";
    instructionsEl.style.display = "block";
    instructionsEl.innerHTML = "Your final score is " + score;

    submitDivEl = document.createElement("div");
    submitDivEl.className = "submit-div";
    submitDivEl.id = "submit-div";
    bodyEl.appendChild(submitDivEl);

    var submitInstructionsEl = document.createElement("p");
    submitInstructionsEl.textContent = "Enter initials: "
    submitDivEl.appendChild(submitInstructionsEl);

    var submitBoxEl = document.createElement("input");
    submitBoxEl.type = "text";
    submitBoxEl.name = "initals";
    submitDivEl.appendChild(submitBoxEl);

    var submitButtonEl = document.createElement("button");
    submitButtonEl.textContent = "Submit";
    submitButtonEl.className = "btn btn-submit";
    submitButtonEl.id = "submit-btn";
    submitDivEl.appendChild(submitButtonEl);

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
console.log(highScores)
        localStorage.setItem("highScores", JSON.stringify(highScores));
        scoreIdCounter++
        scoreScreen()
    });
}
var scoreScreen = function(){
    
    questionsEl.textContent = "High scores";
    submitDivEl.style.display = "none";
    instructionsEl.style.display = "none";

    var scoreScreenEl = document.createElement("div");
    bodyEl.appendChild(scoreScreenEl);

    var scoresEl = document.createElement("div");
    scoreScreenEl.appendChild(scoresEl);

    var scoreScreenButtonsEl = document.createElement("div");
    scoreScreenEl.appendChild(scoreScreenButtonsEl);
console.log
    var scoreListEl = document.createElement("ol")
    highScores.sort((a,b) => {
        return a.roundscore - b.roundscore;
    });
    
    for (i=0; i<highScores.length; i++ ){
    var scoreRecordEl = document.createElement("li")
    scoreRecordEl.textContent = highScores[i].initals + " - " + highScores[i].roundscore;
    scoreListEl.appendChild(scoreRecordEl);
    }
    scoresEl.appendChild(scoreListEl);

    var goBackButtonEl = document.createElement("button");
    goBackButtonEl.textContent = "Go Back";
    goBackButtonEl.className = "btn go-back";
    goBackButtonEl.id = "back-btn";
    scoreScreenButtonsEl.appendChild(goBackButtonEl);
//make reset function that hides and shows correct divs possibly deletes divs
    var clearScoresButtonEl = document.createElement("button");
    clearScoresButtonEl.textContent = "Clear high scores";
    clearScoresButtonEl.className = "btn clear-btn";
    clearScoresButtonEl.id = "clear-btn";
    scoreScreenButtonsEl.appendChild(clearScoresButtonEl);

    clearScoresButtonEl.addEventListener("click", function(){
        localStorage.clear();
    })

}
var startPage = function () {
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz!";
    startButtonEl.className = "btn start-quiz";
    startButtonEl.id = "start-button"
    choicesEl.appendChild(startButtonEl);
    document.getElementById("start-button").addEventListener("click", function () {
        timer();
        quizStart();
    });
}

var loadHighScores = function() {
    var savedHighScores = localStorage.getItem("highScores");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedHighScores) {
      return false;
    }
    console.log("High scores found!");
  
    // parse into array of objects
    savedHighScores = JSON.parse(savedHighScores);
  
    // loop through savedHighScores array
    for (var i = 0; i < savedHighScores.length; i++) {
      // pass each task object into the `createTaskEl()` function
      createTaskEl(savedHighScores[i]);
    }
}
// var startEl = document.querySelector(".start-quiz");
// scoresEl.addEventListener("click", function () {
//     alert("clicked")
// });

startPage()