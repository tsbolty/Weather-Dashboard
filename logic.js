//keep a score
//have consequences if timer reaches 0

var main = document.getElementById("main")
var firstPage = document.getElementById("first-page")
var startQuiz = document.querySelector("#start-quiz-btn") 
var firstQuestionPage = document.getElementById("first-question-page")
var secondQuestionPage = document.getElementById("second-question-page")
var thirdQuestionPage = document.getElementById("third-question-page")
var fourthQuestionPage = document.getElementById("fourth-question-page")
var fifthQuestionPage = document.getElementById("fifth-question-page")
var highScoresPage = document.getElementById("high-scores-page")
// Will need to print score to the page and increment it by 1
var scoreDiv = document.getElementById("score");
var firstOptions = document.getElementById("options1");
var secondOptions = document.getElementById("options2")
var thirdOptions = document.getElementById("options3")
var fourthOptions = document.getElementById("options4")
var fifthOptions = document.getElementById("options5")
var score = 0;


// This turns makes the welcome screen go away and makes the first question page visible
startQuiz.addEventListener("click", function(){
    firstPage.style.display = "none";
    firstQuestionPage.style.display = "block";
    setTime();
    scoreDiv.textContent= "Score = 0"
})



// Creating the timer, used in startQuiz function
var timer = document.getElementById("timer");
var secondsLeft = 60;

function setTime(){
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time left " + secondsLeft;
        
        if(secondsLeft < 1) {
            clearInterval(timeInterval);
            outOfTime()
        }
    }, 1000)
}

//  ASK HOW TO GET TIMER TO GO AWAY AND STOP THIS PROCEDURE ONCE THE QUIZ IS SUCCESSFULLY FINISHED
function outOfTime(){
    main.textContent = "";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/out-of-time.jpg");
    imgEl.setAttribute("alt", "Gone fishing out of time picture");
    main.appendChild(imgEl);
}

function endOfGame(){
    fifthQuestionPage.style.display ="none";
    highScoresPage.style.display = "block";
    timer.style.display = "none";
    
}

// Creating an add event listener to the buttons in the list and comparing the button clicked to the index of the correct answer in our questions array.


firstOptions.addEventListener("click", function(event){
    event.preventDefault();
    var element = event.target;
    

    if (element.matches("button")){
        var userAnswer = element.value;
        if( userAnswer === questions[0].correctAnswer1){
            alert("correct!")

            firstQuestionPage.style.display = "none";
            secondQuestionPage.style.display = "block";
            score++
            scoreDiv.textContent = "Score = " +  score;
        } else {
            alert("incorrect")
            firstQuestionPage.style.display = "none";
            secondQuestionPage.style.display = "block";
            secondsLeft -= 10;
        }
        
    }
    //document.body.childNodes[1].textContent = score
})

secondOptions.addEventListener("click", function(event){
    event.preventDefault();
    var element = event.target;

    if (element.matches("button")){
        var userAnswer = element.value;
        if( userAnswer === questions[1].correctAnswer2){
            alert("correct!")
            secondQuestionPage.style.display = "none";
            thirdQuestionPage.style.display ="block";
            score+=1
            scoreDiv.textContent = "Score = " +  score;
        } else {
            alert("incorrect")
            secondQuestionPage.style.display = "none";
            thirdQuestionPage.style.display ="block";
            secondsLeft -= 10;
        }

    }
})

thirdOptions.addEventListener("click", function(event){
    event.preventDefault();
    var element = event.target;

    if (element.matches("button")){
        var userAnswer = element.value;
        if( userAnswer === questions[2].correctAnswer3){
            alert("correct!")
            thirdQuestionPage.style.display = "none";
            fourthQuestionPage.style.display ="block";
            score+=1
            scoreDiv.textContent = "Score = " +  score;
        } else {
            alert("incorrect")
            thirdQuestionPage.style.display = "none";
            fourthQuestionPage.style.display ="block";
            secondsLeft -= 10;
        }
    }
    
})

fourthOptions.addEventListener("click", function(event){
    event.preventDefault();
    var element = event.target;

    if (element.matches("button")){
        var userAnswer = element.value;
        if( userAnswer === questions[3].correctAnswer4){
            alert("correct!")
            fourthQuestionPage.style.display = "none";
            fifthQuestionPage.style.display ="block";
            score+=1
            scoreDiv.textContent = "Score = " +  score;
        } else {
            alert("incorrect")
            fourthQuestionPage.style.display = "none";
            fifthQuestionPage.style.display ="block";
            secondsLeft -= 10;
        }
    }
})

fifthOptions.addEventListener("click", function(event){
    event.preventDefault();
    var element = event.target;

    if (element.matches("button")){
        var userAnswer = element.value;
        if( userAnswer === questions[4].correctAnswer5){
            score+=1
            scoreDiv.textContent = "Score = " +  score;
            alert("correct!")
            fifthQuestionPage.style.display = "none";
            secondsLeft=1
            clearInterval(secondsLeft)
            endOfGame()
            
            
        } else {
            alert("incorrect")
            fifthQuestionPage.style.display = "none";
            secondsLeft=1
            clearInterval(secondsLeft)
            if (score > 1){
            endOfGame()
            }
        }
    }
    if (score === 5){
        alert("Congratulations, you scored 5 out of 5!!!")
    }
    if (score === 0){
        alert("Dang, you didn't do so well haha. You should probably go around again. Don't worry the timer is paused haha.")
        fifthQuestionPage.style.display = "none";
        firstQuestionPage.style.display = "block";

    }
    
})










