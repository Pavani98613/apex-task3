// Quiz Data
const questions = [
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>"
  },
  {
    question: "What is the correct syntax for a function in JavaScript?",
    options: ["function = myFunc()", "function:myFunc()", "function myFunc()", "func myFunc()"],
    answer: "function myFunc()"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(opt);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    document.getElementById("next-btn").style.display = "none";
  } else {
    document.getElementById("question-container").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").innerText = `You scored ${score} out of ${questions.length}`;
  }
}

window.onload = () => {
  loadQuestion();
  document.getElementById("next-btn").style.display = "none";
};

// API Joke
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Why don't programmers like nature? – It has too many bugs.";
    });
}