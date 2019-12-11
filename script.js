var questions = []
var scores = 0;

function dynamicallyLoadScript(url) {
    var script = document.createElement("questions-script");  // create a script DOM node
    questions.src = url;  // set its src to the provided URL

    document.body.appendChild(questions-script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButton = document.getElementById('answer-button')

let shuffleQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffleQuestion = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainer.classList.remove('hide')
setNextQuestion()
};

function setNextQuestion() {
    showQuestion(shuffleQuestion[currentQuestionIndex])
}

function showQuestion (question) {
    questionElement.innerText = question.question
}


function selectAnswer() {

}


// QUESTIONS
var questions = [
    {
    question: "On which soap opera does Joey have a recurring role as Dr. Drake Ramoray?",
    choices: ["Days of Our Lives", "All My Children", "General Hospital", "The Bold and the Beautiful"],
    answer: "Days of Our Lives"
    },
    {
    question: "How many categories for towels does Monica have?",
    choices: ["12", "20", "11", "8"],
    answer: "11"
    },
    {
    question: "To whom is Joey and Chandler’s TV Guideaddressed?",
    choices: ["MR. CHANDELIER BANG", "MISS CHANANDLER BONG", "MS. JOESPHINE TRIBECA", "JOSEPH TRIBIANI"],
    answer: "MISS CHANANDLER BONG"
    },
    {
    question: "What is Phoebe’s twin sister’s name?",
    choices: ["URSULA BUFFAY", "LESLIE BUFFAY", "CHRISSY BUFFAY", "REGINA PHALANGE"],
    answer: "URSULA BUFFAY"
    },
    {
    question: "What color is the couch that the friends sit on at Central Perk?",
    choices: ["Green", "Red", "Orange", "Brown"],
    answer: "Orange"
    },
    {
    question: "What is the name of Joey and Chandler’s pet duck?",
    choices: ["Bruce", "Melvin", "Duck", "Marcel"],
    answer: "Duck"
    },
    {
    question: "Where were the opening credits filmed?",
    choices: ["BROOKYN, NY", "NEW YORK CITY, NY", "BURBANK, CA", "LOS ANGELES, CA"],
    answer: "BURBANK, CA"
    },
    {
    question: "What was the name of the barista-turned-manager of Central Perk?",
    choices: ["Tyler", "Gunther", "Bobby", "Michael"],
    answer: "Gunther"
    },
    {
    question: "Who was the only cast member to get snubbed by the Emmy’s?",
    choices: ["David Schwimer", "Lisa Kudrow", "Matthew Perry", "Cortney Cox"],
    answer: "Cortney Cox"
    },  
    {
    question: "Who sings the theme song?",
    choices: ["R.E.M", "THE CAST", "THE REMBRANDTS", "THE B-52'S"],
    answer: "THE REMBRANDTS"
    }, 
];


//TIMER

var timeEl = document.getElementById("timer");


var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time:" + " " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
setTime();