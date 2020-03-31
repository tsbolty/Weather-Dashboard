var initialsSubmitButton = document.getElementById("initials-submit-button")
var highScoreDisplayBox = document.getElementById("high-score-display-box")
var initialsBox = document.getElementById("initials-box")


 
 

  initialsSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("score" + score)
    var initials= initialsBox.value.trim();
    
    localStorage.setItem("score", JSON.stringify(score) );
    var printScore = JSON.parse(localStorage.getItem("score"));
    localStorage.setItem("initials", JSON.stringify(initials));
    var printInitials= JSON.parse(localStorage.getItem("initials"));
    highScoreDisplayBox.textContent = printInitials + "                  your high score: " + printScore;
    
  }
)
