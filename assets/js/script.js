var scoresEl =document.getElementById("scores");
var instructionsEl = document.getElementById("instructions");
var questionsEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var questions = [
  {  
      id : "1",
    question: "Commonly used data types DO Not Include",
    one : "1. strings",
    two : "2. booleans",
    three : "3. alerts",
    four : "4. numbers",
    answer:"three"
  },
]


function timer(){
    var sec = 59;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML = 'Time Left: '+sec;
        sec--;
        if(sec<0){
            clearInterval(timer)
        }
    },1000);
}
var quiz = function(){
    for(var i=0; i<questions.length;i++){

        instructionsEl.style.display = "none"
        document.getElementById("start-button").style.display = 'none';
        questionsEl.textContent = questions[i].question;

        var answer1ButtonEl = document.createElement("button");
        answer1ButtonEl.textContent = questions[i].one;
        answer1ButtonEl.className = "btn btn-one";
        choicesEl.appendChild(answer1ButtonEl);
        var answer1El = document.querySelector(".btn-one");

        var answer2ButtonEl = document.createElement("button");
        answer2ButtonEl.textContent = questions[i].two;
        answer2ButtonEl.className = "btn btn-two";
        choicesEl.appendChild(answer2ButtonEl);
        var answer2El = document.querySelector(".btn-two");

        var answer3ButtonEl = document.createElement("button");
        answer3ButtonEl.textContent = questions[i].three;
        answer3ButtonEl.className = "btn btn-three";
        choicesEl.appendChild(answer3ButtonEl);
        var answer3El = document.querySelector(".btn-three");

        var answer4ButtonEl = document.createElement("button");
        answer4ButtonEl.textContent = questions[i].four;
        answer4ButtonEl.className = "btn btn-four";
        choicesEl.appendChild(answer4ButtonEl);
        var answer4El = document.querySelector(".btn-four");

        choicesEl.addEventListener("click",function(){

            if(value = questions[i].answer){
                alert("correct!")
            }
            else{
                timer =timer-10;
                var wrongEl = document.createElement(div)
            }
        })
}
}
var startPage = function(){
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz!";
    startButtonEl.className = "btn start-quiz";
    startButtonEl.id = "start-button"
    choicesEl.appendChild(startButtonEl);
}

startPage()
var startEl = document.querySelector(".start-quiz");
scoresEl.addEventListener("click", function(){
   alert("clicked")
});
startEl.addEventListener("click", function(){
  timer();
  quiz();
});
