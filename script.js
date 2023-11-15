function checkAnswer() {
    var userAnswer = document.getElementById("answerInput").value.toLowerCase();
    var correctAnswer = "15";

    if (userAnswer === correctAnswer) {
        alert("Congratulations! You got it right! Your next hint is at: robo photo ");
        
    } else {
        alert("Sorry, that's not correct. Try again!");
    }
}

