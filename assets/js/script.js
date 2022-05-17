var questionsEl = document.querySelector("#questions")
var timerEl = document.querySelector("#time")
var choicesEl = document.querySelector("#choices")
var submitEl = document.querySelector("#submit")
var beginEl = document.querySelector("#begin")
var nameEl = document.querySelector("#name")
var commentEl = document.querySelector("#comment")

var questionIndex = 0;
var time = 80;
var timerId;

function beginQuiz() {
    var startEl = document.getElementById("start-window");
    startEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTicker, 1000);

    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[questionIndex];

    var questionTextEl = document.getElementById("question-text")
    questionTextEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choices, i) {
        var userChoice = document.createElement("button");
        userChoice.setAttribute("class", "choices");
        userChoice.setAttribute("value", choices);

        userChoice.textContent = i + 1 + ". " + choices;
        userChoice.onclick = questionClick;
        choicesEl.appendChild(userChoice);
    });
}

function questionClick() {
    if (this.value !== questions[questionIndex].answer) {
        time -= 15;

    if (time < 0) {
        time = 0;
    }
    timerEl.textContent = time;
    comment.textContent = "Wrong!";
    comment.style.color = "red";
    comment.style.fontSize = "200%";
    }
    else {
    comment.textContent = "Correct";
    comment.style.color = "green";
    comment.style.fontSize = "200%";
    }

    commentEl.setAttribute("class", "comment");
    setTimeout(function(){
        commentEl.setAttribute("class", "comment hide");
    }, 1000);

    questionIndex++;

    if (questionIndex === questions.length) {
        endQuiz();
    }
    else {
        getQuestion();
    }
}

function endQuiz() {
    clearInterval(timerId);

    var finishedscreenEl = document.getElementById("finished");
    finishedscreenEl.removeAttribute("class");

    var newscoreEl = document.getElementById("new_score");
    newscoreEl.textcontent = time;

    questionsEl.setAttribute("class", "hide");
}

function clockTicker() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        endQuiz();
    }
}

function saveHighScore() {
    var name = nameEl.value.trim();

    if (name !=="") {
        var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
        var newScore = {
            score: time,
            name: name
        };

        highscore.push(newScore);
        window.localStorage.setItem("highscore", JSON.stringify(highscore));

        window.location.href = "highscore.html";
    }
}

function enterClick(event) {
    if (event.key === "Enter") {
        saveHighScore();
    }
}

submitEl.onclick = saveHighScore;
beginEl.onclick = beginQuiz;
nameEl.onkeyup = enterClick;