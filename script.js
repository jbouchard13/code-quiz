// When the user first accesses the page, they are shown an intro message
// In the html, we could have <div> with the intro. id #intro
// Users can click the start button, which will start the timer

// ************** LINKING PAGE ELEMENTS *******************
var timerElement = document.querySelector("#timer");
var introElement = document.querySelector("#intro");
var startButtonElement = document.querySelector("#start-btn");
var questionsDivElement = document.querySelector("#questions-div");
var submitScoresElement = document.querySelector("#submit-score");
var submitBtnElement = document.querySelector("#submit-btn");
var highscoresBtnElement = document.querySelector("#highscores-btn");

// Create a score variable that defaults to 0
var score = 0;

// Create variable to store currentCount, default to 0
var currentCount = 0;

// ********************* QUESTIONS ************************
// Create variable to store the array of questions
var questions = [
  {
    question: "This is a question?",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: 0,
  },
  {
    question: "This is another question here?",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: 2,
  },
  {
    question: "But wait, there's more questions?",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: 2,
  },
  {
    question: "Surely there can't be more questions?",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: 1,
  },
];

// Create variable to store the index of the current question they are answering
//  - (string) question
//  - array of possible answers (list)
//  - correct answer (number, index of the answer from array of possible answers)

// ********************** QUIZ START *********************
// When the user clicks on start:
// - create an event listener for the start button
startButtonElement.addEventListener("click", function () {
  // - hide the intro <div>
  introElement.style.display = "none";
  // - hide the start button (#start-btn)
  startButtonElement.style.display = "none";
  // - start timer with countdownTimer function
  countdownTimer();
  // Start quiz
  renderQuestion();
});

function renderQuestion() {
  // - render the first question
  questionsArray = Object.values(questions);
  questionsDivElement.innerHTML = questionsArray[1];
  // - using DOM manipulation, create a new element (document.createElement) with the question info, and display it on screen (appendChild)
  // Once the game has started, display the first question, with buttons for the answers
  // When a user clicks on one of those questions, determine if it is correct or incorrect, display the next question, and display the status of their answer (correct/incorrect, for a short time)
}

// - create a setInterval of 75000ms.
function countdownTimer() {
  currentCount = 75;
  // - update the currentCount to 75
  var countInterval = setInterval(function () {
    if (currentCount > 0) {
      // - every time the interval runs, we need to decrement the current count by 1, update the currentCount
      currentCount--;
      timerElement.textContent = currentCount;
    } else if (currentCount === 0) {
      // - Once timer hits zero, interval is cleared so it doesn't go below 0
      clearInterval(countInterval);
      endGame();
    }
  }, 1000);
}

// ********************** QUIZ END *************************

// End condition
//  - generate endGame function to use for both end conditions
function endGame() {
  // When the game ends, allow the user to enter their initials and store their score
  // - Display an entry form to submit their initials and score
  // - Display a button to redirect them to the highscores
  // Redirect the user to the highscores page, which will display all of the stored high scores
}

//  - User answers all of the questions OR
//  - Time runs out
