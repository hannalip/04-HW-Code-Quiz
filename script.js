
// function dynamicallyLoadScript(url) {
//     var script = document.createElement("questions-script");  // create a script DOM node
//     questions.src = url;  // set its src to the provided URL

//     document.body.appendChild(questions-script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
// }

var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButton = document.getElementById('answer-button')
var timerInterval;
var count = 0;
var shuffleQuestion
var tagP = document.getElementsByTagName('p')
var tagH2 = document.getElementsByTagName('h2')
var rightOrWrongEl = document.getElementById("rightOrWrong")
var myScore= "SCORE: " + timeEl;


startButton.addEventListener('click', startGame)

function startGame() {
    shuffleQuestion = questions.sort(() => Math.random() - .5)
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')

    setNextQuestion(shuffleQuestion);
};


function setNextQuestion() {
    count++;

    
   
   $(answerButton).empty();
    showQuestion(shuffleQuestion[currentQuestionIndex])
    // console.log(currentQuestionIndex);
    // console.log(showQuestion(shuffleQuestion[currentQuestionIndex]))
}

function endQuiz() {
    console.log("timer" + secondsLeft)
    clearInterval(timerInterval);
    // $(questionElement).empty();
    $("rightOrWrong").empty();
    $(answerButton).empty();
    
    $(questionElement).html("All Done!" + " " + "Your Score: " + secondsLeft)

    // var endscreenEl = document.getElementById("results")
    // var finalScoreEl = document.getElementById("results")
    // endscreenEl = timeEl;
  
// if (intials !=== "")
// JSON.parse(window)
// localStorage.setItem("highScores", JSON.stringify(highScores));
// window.location.assign("/");

// car newScore = {
//     score :timeEl,
//     initals: initals
// }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    for (var i = 0; i < question.choices.length; i++) {
        var element = document.createElement("button");
        $(element).addClass("btn");
        element.value = question.choices[i];
        element.innerText = question.choices[i];
        element.addEventListener("click", checkAnswer)
        answerButton.append(element)
    }
  

}

function checkAnswer() {
    if (count === 10){
    endQuiz();
    }
  
    
   
    if (this.value == shuffleQuestion[currentQuestionIndex].answer) {
    $("#rightOrWrong").html("Correct!")
        currentQuestionIndex++
        setNextQuestion();
    } else {
    
        secondsLeft = secondsLeft - 10;
        timeEl.textContent = "Time:" + " " + secondsLeft;
        $("#rightOrWrong").html("Wrong!")
        currentQuestionIndex++
        setNextQuestion();
    }
}








//TIMER

var timeEl = document.getElementById("timer");


var secondsLeft = 100;

startButton.addEventListener('click', setTime);

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time:" + " " + secondsLeft;

        if (secondsLeft <= 0) {
          endQuiz()
        }

    }, 1000);
   
}



// // submitBTn.onclick = saveHighscore;
// intalEnt.onkeyup = check for enter

