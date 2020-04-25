// When the user first accesses the page, they are shown an intro message
// In the html, we could have <div> with the intro. id #intro
// Users can click the start button, which will start the timer

// ************** LINKING PAGE ELEMENTS *******************
var timerElement = document.querySelector("#timer");
var introElement = document.querySelector("#intro");
var startButtonElement = document.querySelector("#start-btn");

// Create variable to store currentCount, default to 0
var currentCount = 0;

// ********************* QUESTIONS ************************
// Create variable to store the array of questions
var questions = [
  {
    question: "",
    answers: [],
    correctAnswer: 2,
  },
  {
    question: "",
    answers: [],
    correctAnswer: 2,
  },
  {
    question: "",
    answers: [],
    correctAnswer: 2,
  },
  {
    question: "",
    answers: [],
    correctAnswer: 2,
  },
];

// Create variable to store the index of the current question they are answering
//  - (string) question
//  - array of possible answers (list)
//  - correct answer (number, index of the answer from array of possible answers)

// ********************** QUIZ START *********************
// When the user clicks on start:
startButtonElement.addEventListener("click", function () {
  // - create an event listener for the start button
  // - hide the intro <div>
  // - hide the start button (#start-btn)
  // - start timer with countdownTimer function
  countdownTimer();
});

// - create a setInterval of 75000ms.
function countdownTimer() {
  currentCount = 10;
  // - update the currentCount to 75
  var countInterval = setInterval(function () {
    if (currentCount > 0) {
      // - every time the interval runs, we need to decrement the current count by 1, update the currentCount
      currentCount--;
      timerElement.textContent = currentCount;
    } else if (currentCount === 0) {
      // - Once timer hits zero, interval is cleared so it doesn't go below 0
      clearInterval(countInterval);
    }
  }, 1000);
}

// - render the first question
// - using DOM manipulation, create a new element (document.createElement) with the question info, and display it on screen (appendChild)

// Once the game has started, display the first question, with buttons for the answers

// When a user clicks on one of those questions, determine if it is correct or incorrect, display the next question, and display the status of their answer (correct/incorrect, for a short time)

// ********************** QUIZ END *************************

// End condition
//  - generate endGame function to use for both end conditions
//  - User answers all of the questionds OR
//  - Time runs out

// When the game ends, allow the user to enter their initials and store their score

// Redirect the user to the highscores page, which will display all of the stored high scores
