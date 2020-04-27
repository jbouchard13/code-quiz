// When the user first accesses the page, they are shown an intro message
// In the html, we could have <div> with the intro. id #intro
// Users can click the start button, which will start the timer

// ************** LINKING PAGE ELEMENTS *******************
var timerElement = document.querySelector("#timer");
var introElement = document.querySelector("#intro");
var startButtonElement = document.querySelector("#start-btn");
var questionsDivElement = document.querySelector("#questions-div");
var questionElement = document.querySelector("#question");
var answerBtnsElement = document.querySelector("#answer-btns");
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
    question: "In JavaScript, what is an array?",
    answers: [
      { text: "Some other possible answer here", correct: false },
      {
        text: "A single variable used to store multiple elements.",
        correct: true,
      },
      { text: "A pre-written function that can be called.", correct: false },
      { text: "A ray of sunshine.", correct: false },
    ],
  },
  {
    question: "What does the querySelector() function do?",
    answers: [
      { text: "Selects a question in the document.", correct: false },
      { text: "Finds a search bar in the HTML.", correct: false },
      { text: "Searches through media queries.", correct: false },
      { text: "Finds the selected element on a document.", correct: true },
    ],
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Detailed Object Manipulation", correct: false },
      { text: "Decrease Original Material", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Data Open Manipulation", correct: false },
    ],
  },
];

// Create variable to store the index of the current question they are answering
var questionIndex;
var button;
var buttonElement;
// ********************** QUIZ START *********************
// When the user clicks on start:
// - create an event listener for the start button
startButtonElement.addEventListener("click", startQuiz);

function startQuiz() {
  // - hide the intro <div>
  introElement.style.display = "none";
  // - hide the start button (#start-btn)
  startButtonElement.style.display = "none";
  // - Set the question index to 0 for the start
  questionIndex = 0;
  // - start timer with countdownTimer function
  countdownTimer();
  // - Show the #questions-div on the page
  questionsDivElement.classList.remove("hide");
  // Start quiz
  renderQuestion(questions[questionIndex]);
}

function renderQuestion(question) {
  // Once the game has started, display the first question, with buttons for the answers
  questionElement.innerText = question.question;
  // For each answer for the question
  question.answers.forEach(function (answer) {
    // create a button
    var button = document.createElement("button");
    // set the button text to an answer
    button.innerText = answer.text;
    // add the .btn class and #answerBtn id to each for styling and identity
    button.setAttribute("class", "btn answerBtn");

    // if the answer is correct, add a correct data attribute to it
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // append each button to the answerbtn page element
    answerBtnsElement.appendChild(button);
    button.addEventListener("click", function () {
      console.log("clicked");
      questionIndex++;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  // remove the previous question from the page to make room for the next one
  removeLastQuestion();

  // When a user clicks on one of those questions, determine if it is correct or incorrect, display the next question, and display the status of their answer (correct/incorrect, for a short time)
  renderQuestion(questions[questionIndex]);
}

function removeLastQuestion() {
  // Remove the button elements from the previous question
  while (answerBtnsElement.firstChild) {
    answerBtnsElement.removeChild(answerBtnsElement.firstChild);
  }
}

function countdownTimer() {
  // - create a setInterval of 75000ms.
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
