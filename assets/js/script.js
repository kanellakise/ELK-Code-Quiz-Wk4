

var timerEl = document.getElementById('timer');

// variables create list elements for questions
var questionSection = document.getElementById("questionContainer");
var makeQuestText = document.createElement("h2");
makeQuestText.id = "questText";
var makeListContainer = document.createElement("ul");
makeListContainer.id = "listContainer";
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var questText = document.getElementById("questText");
var listContainer = document.getElementById("listContainer");
var startButton = document.getElementById("startButton");
var startTitle = document.getElementById("startTitle");
var startPara = document.getElementById("startPara");
var nextBar = document.getElementById("nextBar");
var addAnswerResult = document.createElement("h3");
var answerResult = document.getElementById("answerResult");
var addButton = document.createElement("button");
var clicked
var score = 0;
var whatQuestion = 0
var scoreEl = document.getElementById("score");
scoreEl.textContent = "Score: " + score;

// array of objects, containing question content
var questionContent = [
    {
        Question: "Commonly used data types DO NOT include:",
        Answer1: "Strings",
        Answer2: "Booleans",
        Answer3: "Alerts",
        Answer4: "Numbers",
        Correct: "Alerts"
    },
    {
        Question: "The condition of an if/else statement is enclosed with ____",
        Answer1: "Quotes",
        Answer2: "Curly brackets",
        Answer3: "Parenthesis",
        Answer4: "Square brackets",
        Correct: "Parenthesis"
    },
    {
        Question: "Arrays in JavaScript can be used to store ____",
        Answer1: "Numbers and strings",
        Answer2: "Arrays",
        Answer3: "Objects",
        Answer4: "All of the above",
        Correct: "All of the above"
    },
    {
        Question: "Inside of which HTML element do we put the JavaScript source?",
        Answer1: "<script>",
        Answer2: "<javascript>",
        Answer3: "<scripting>",
        Answer4: "<js>",
        Correct: "<script>"
    },
    {

        Question: "Items in arrays are separated with ____",
        Answer1: "Apostrophes",
        Answer2: "Commas",
        Answer3: "Space shuttles",
        Answer4: "Seedless watermelons",
        Correct: "Commas"
    }
];

function createQuestion(fullQuestion) {
    whatQuestion = whatQuestion + 1;
    // remove next button
    removeStuff();

    // create question text element (an h2)
    createText(fullQuestion)

    // make answers appear under question
    createList(fullQuestion);

    questionSection.addEventListener('click', function () {
        clicked = event.target;
        checkAnswer(fullQuestion);
    });

};

// timer
function timeMe() {
    var timeLeft = 119;
    timerEl.textContent = "Time Left: 120";
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time Left: " + timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's Up!";
            endQuiz();
        }
    }, 1000);
};

// function checks answer and appends with text stating correct or not
function checkAnswer(question) {
    if (clicked.textContent === question["Correct"]) {
        answerResult.textContent = "Correct!"
        questionSection.appendChild(addButton);
        addButton.Id = "addButton";
        addButton.textContent = "Next >";
        score = score + 7;
    } else if (clicked.textContent === "Get Started!") {
        return;
    } else if (clicked.textContent === "Next >") {
        runQuiz();
    } else {
        answerResult.textContent = "Incorrect!"
        score = score - 2;
    };
};

// Removes extra stuff
function removeStuff() {

    // remove start stuff
    startButton.remove();
    startPara.remove();
    startTitle.remove();
    addButton.remove();
    answerResult.textContent = "";
    //remove leftover question stuff

};

// creates question text
function createText(question) {
    questionSection.appendChild(makeQuestText);
    makeQuestText.textContent = question["Question"];
};
// creates question answer list
function createList(question) {

    //create ul element
    questionSection.appendChild(makeListContainer);

    makeListContainer.appendChild(li1);
    li1.textContent = question["Answer1"];
    makeListContainer.appendChild(li2);
    li2.textContent = question["Answer2"];
    makeListContainer.appendChild(li3);
    li3.textContent = question["Answer3"];
    makeListContainer.appendChild(li4);
    li4.textContent = question["Answer4"];
};

function runQuiz() {
    createQuestion(questionContent[whatQuestion]);
};

function checkQuizProgress() {
    if (whatQuestion >= 6) {
        endQuiz();
    }

};

// end quiz
function endQuiz() {
    alert("Your score is: " + score);
    prompt("Please enter your initials!");
}

// click start! function
startButton.addEventListener('click', function () {
    runQuiz();
    timeMe();
});