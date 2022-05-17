function displayHighscore() {
    var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    highscore.forEach(function(scores) {
        var listEl = document.createElement("li");
        listEl.textContent = scores.name + " - " + scores.scores;

        var listEl2 = document.getElementById("highscore");
        listEl2.appendChild(listEl);
    });
}

function clearScore() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

document.getElementById("clearscores").onclick = clearScore;
displayHighscore();

