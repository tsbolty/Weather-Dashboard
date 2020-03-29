var initialsSubmitButton = document.getElementById("initials-submit-button")
var highScoreDisplayBox = document.getElementById("high-score-display-box")
var initialsBox = document.getElementById("initials-box")
var initials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split()



// function displayHighScore(initials, score) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", initials);
//   }

  // ASK BRIAN HOW TO VALIDATE THAT TWO LETTERS WE'RE TYPED INTO THE BOX
initialsSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var initials= initialsBox.value.trim();
    console.log(initials);
    
    
})
