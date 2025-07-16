const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  selectedAnswer = null; // Reset for the next question

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add('option-button');
    button.innerText = option;
    optionsElement.appendChild(button);

    button.addEventListener("click", () => {
      // Clear previous selections
      document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
      selectedAnswer = button.innerText;
    });
  });
}

  
  submitButton.addEventListener("click", () => {
  if (!selectedAnswer) return; // Don't proceed if no answer selected

  const correctAnswer = quizData[currentQuestion].answer;
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();