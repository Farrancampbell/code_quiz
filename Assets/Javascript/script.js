var startBtn = document.getElementById("startbtn");
console.log(startBtn);
var homepage = document.getElementById("homepage");
var questionsElement = document.getElementById("questions");
var secondsLeft = 50;
var timeElement = document.getElementById("timerelement");
var answersEl = document.getElementById("answers")
var currentQuestion = 0;

startBtn.addEventListener("click", function () {
  homepage.style.display = "none";
  var headerQuestion = document.createElement("h3");
  console.log(headerQuestion);
  headerQuestion.innerHTML = "This is the first question";
  questionsElement.append(headerQuestion);
  setTime();
  displayQuestion();
});

//
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeElement.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Times Up");
    }
  }, 1000);

 
}
function checkAnswer () {
 
  if (questions[currentQuestion].correctAnswer === this.value) {
    console.log("correct") 
  }
  else {
    secondsLeft -= 15
    alert("incorrect")}
    currentQuestion++ 
  displayQuestion()
  
}

function displayQuestion() {
  answersEl.innerHTML = "";
  questionsElement.textContent = questions[currentQuestion].question;
  var answers = questions[currentQuestion].answers;
  for (var i = 0; i < answers.length; i++) {
    var choice = document.createElement("button");
    console.log(answers[i])
    choice.textContent = answers[i];
    choice.value = answers[i];
    choice.onclick=checkAnswer
    answersEl.appendChild(choice);
  }
}
var questions = [
  {
    question:
      "In 2012, Jeremy Lin had an amazing run who helped the Knicks win many games. What number did he wear that season?",
    answers: ["17", "23", "32", "54"],
    correctAnswer: "17",
  },
  {
    question: "What school did Stephon Marbury attend?",
    answers: ["Duke", "USC", "Georgia Tech", "No College"],
    correctAnswer: "Georgia Tech",
  },
  {
    question: "Who was number 3 in the team from 1989-1999?",
    answers: [
      "Patrick Ewing",
      "Derrick Harper",
      "Charles Oakley",
      "John Starks",
    ],
    correctAnswer: "John Starks",
  },
  {
    question:
      " Walt Frazier was an all-star guard on the 1969-70 Knicks team. What was his nickname?",
    answers: ["Clyde", "Glide", "Smoothe", "Groove"],
    correctAnswer: "Clyde",
  },
  {
    question:
      " Which 2004 Knick wore jersey 15 for the Golden State Warriors? - Hint: He Choked his Coach",
    answers: [
      "Klay Thompson",
      "Steph Curry",
      "Stephon Marbury",
      "Latrell Spreewell",
    ],
    correctAnswer: "Latrell Spreewell",
  },
  {
    question:
      "Who hit a record 5 three pointers in 1 quarter vs the Knicks in the playoffs? AKA The worst Human ALIVE",
    answers: ["Michael Jordan", "Ray Allen", "Reggie Miller", "Steph Curry"],
    correctAnswer: "Reggie Miller",
  },
  {
    question:
      "Which New York Knick also won the Heisman Trophy as Quarterback in College ?",
    answers: ["Charlie Ward", "Chris Childs", "Karl Malone", "Allen Houston"],
    correctAnswer: "Charlie Ward",
  },
  {
    question:
      "Which Team did the New York Knicks beat to win the 1969-70 Championship ?",
    answers: [
      "Los Angeles Lakers",
      "Boston Celtics",
      "Miami Heat",
      "Philadelphia 76ers",
    ],
    correctAnswer: "Los Angeles Lakers",
  },
  {
    question: "Where did Patrick Ewing go to school?",
    answers: ["Georgia", "Alabama", "Georgetown", "Duke"],
    correctAnswer: "Georgetown",
  },
  {
    question:
      "Which off the court venture did Latrell Spreewell (aka Spreewells) enter that became a hip-hop staple ?",
    answer: [
      "Spinner Wheels",
      "Baggy Clothes",
      "A Jewlery Store",
      "an Urban Dictionary ",
    ],
    correctAnswer: ["Spinner Wheels"],
  },
];
