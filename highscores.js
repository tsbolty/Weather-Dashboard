var initialsSubmitButton = document.getElementById("initials-submit-button")
var highScoreDisplayBox = document.getElementById("high-score-display-box")
var initialsBox = document.getElementById("initials-box")
 

  initialsSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var initials= initialsBox.value.trim();
    localStorage.setItem("initials", JSON.stringify(initials));
    var printInitials= JSON.parse(localStorage.getItem("initials"));
    localStorage.setItem("score", JSON.stringify(score) );
    var printScore = JSON.parse(localStorage.getItem("score"));
    highScoreDisplayBox.textContent = printInitials + "        Your high score: " + printScore;
    
  }
)
