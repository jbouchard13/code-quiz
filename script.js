// Link the elements that need to be changed on the page
var titleElement = document.querySelector("#title");
var timerElement = document.querySelector("#timer");
var textboxElement = document.querySelector("#textbox");
var rightWrongElement = document.querySelector("#right-wrong");
var startButtonElement = document.querySelector("#start");

// Create an event listener for the start button
startButtonElement.addEventListener("click", function () {

    // Create a timer that counts down each second after the start button is clicked
    var secondsLeft = 75;

    var secondsInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerElement.textContent = secondsLeft;
        } else if (secondsLeft === 0) {
            clearInterval(secondsInterval);
            alert("Game over")
        }
    }, 1000);
});

// Create an array of objects that contain the questions with multiple choices for answers

// Display the objects in the textbox

// If the answer is correct, display correct and add to score

// If the answer is incorrect, display incorrect and subtract from timer

// Once timer hits 0 or all questions answered, display the users score and an input for their initials

// Save the user's score and initials to local storage so it persists between page loads

// Display the users score and initials on the highscores page

// Make the clear button clear the local storage and the highscores

// Make the play again button bring the user back to the home page
