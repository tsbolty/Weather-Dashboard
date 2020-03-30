var initialsSubmitButton = document.getElementById("initials-submit-button")
var highScoreDisplayBox = document.getElementById("high-score-display-box")
var initialsBox = document.getElementById("initials-box")
// var initials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")


  // ASK BRIAN HOW TO VALIDATE THAT TWO LETTERS WE'RE TYPED INTO THE BOX
 

  initialsSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var initials= initialsBox.value.trim();
    
    localStorage.setItem("initials", JSON.stringify(initials));
    var printInitials= JSON.parse(localStorage.getItem("initials"));
    highScoreDisplayBox.textContent = printInitials + "                  your high score: " + printScore;
    localStorage.setItem("score", JSON.stringify(score) );
    var printScore = JSON.parse(localStorage.getItem("score"));
    
  }
//   displayHighScore(initials)
)
