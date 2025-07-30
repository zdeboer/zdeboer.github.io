const quizData = [
    {
    "question": "What is one of the major benefits of remote work?",
    "options": ["Unlimited vacation days", "Flexibility and autonomy", "Free software licenses", "In-person training sessions"],
    "answer": "Flexibility and autonomy"
  },
  {
    "question": "How does remote work improve focus?",
    "options": ["Mandatory video meetings", "Reduces unnecessary interruptions", "Casual office chats", "Daily commuting routines"],
    "answer": "Reduces unnecessary interruptions"
  },
  {
    "question": "Which of the following communication methods supports different employee preferences?",
    "options": ["Instant fax replies", "Email, messaging apps, or meetings", "In-office paper memos", "Bulletin boards"],
    "answer": "Email, messaging apps, or meetings"
  },
  {
    "question": "What builds trust in remote work environments?",
    "options": ["Daily attendance logs", "Giving employees control over how they manage work", "Increasing surveillance tools", "Weekly micromanagement sessions"],
    "answer": "Giving employees control over how they manage work"
  },
  {
    "question": "How do digital tools improve documentation in remote teams?",
    "options": ["They create a clear record of conversations and decisions", "They delete irrelevant messages", "They prioritize phone calls", "They convert messages into PDFs"],
    "answer": "They create a clear record of conversations and decisions"
  },
  {
    "question": "Why is documentation important for onboarding?",
    "options": ["Allows faster background checks", "Gives access to communication history and context", "Records meeting attendance", "Tracks lunch breaks"],
    "answer": "Gives access to communication history and context"
  },
  {
    "question": "What does increased transparency lead to?",
    "options": ["More time spent clarifying tasks", "Fewer team meetings", "Accountability for decisions", "Delayed decision-making"],
    "answer": "Accountability for decisions"
  },
  {
    "question": "How does effective communication affect productivity in remote work?",
    "options": ["Reduces misunderstandings and repeated tasks", "Requires more emails to clarify", "Encourages longer meetings", "Increases distractions"],
    "answer": "Reduces misunderstandings and repeated tasks"
  },
  {
    "question": "Clear communication strategies help teams stay aligned on:",
    "options": ["Priorities, deadlines, and expectations", "Team bonding events", "Snack preferences", "Individual workload hours"],
    "answer": "Priorities, deadlines, and expectations"
  },
  {
    "question": "What is one risk of losing informal workplace interactions?",
    "options": ["Increased professionalism", "Difficulty clarifying issues quickly and naturally", "Excessive personal conversations", "Too much employee independence"],
    "answer": "Difficulty clarifying issues quickly and naturally"
  },
  {
    "question": "How can remote communication weaken team cohesion?",
    "options": ["Encourages fast messaging", "Offers more emojis", "Becomes more formal and less personal", "Uses a shared document system"],
    "answer": "Becomes more formal and less personal"
  },
  {
    "question": "Misalignment in goals between leaders and employees can result from:",
    "options": ["Inadequate remote communication", "Use of cloud storage", "Weekly feedback forms", "Automated performance reviews"],
    "answer": "Inadequate remote communication"
  },
  {
    "question": "What emotional challenge do remote workers often face?",
    "options": ["Workplace gossip", "Feelings of loneliness or disconnection", "Reduced vacation time", "Overbooked calendars"],
    "answer": "Feelings of loneliness or disconnection"
  },
  {
    "question": "What can erode shared workplace culture?",
    "options": ["Sending birthday emails", "Weak social ties and emotional distance", "Mandatory team lunches", "Having a hybrid work policy"],
    "answer": "Weak social ties and emotional distance"
  },
  {
    "question": "What does workplace polarization refer to?",
    "options": ["Tension between remote and in-office workers", "Separate breakroom access", "A lack of screen-sharing options", "Excessive Wi-Fi usage"],
    "answer": "Tension between remote and in-office workers"
  },
  {
    "question": "What can happen when there's too much reliance on tech tools?",
    "options": ["Improved collaboration", "Tool fatigue and hindered teamwork", "Enhanced creativity", "Stronger personal bonds"],
    "answer": "Tool fatigue and hindered teamwork"
  },
  {
    "question": "What may limit career advancement in remote settings?",
    "options": ["Lack of resume updates", "Delayed project deadlines", "Reduced visibility to managers", "Smaller screen sizes"],
    "answer": "Reduced visibility to managers"
  },
  {
    "question": "Why do some leaders resist remote work setups?",
    "options": ["Increased hardware costs", "Lack of face-to-face oversight", "Unpredictable weather", "Lower tech proficiency"],
    "answer": "Lack of face-to-face oversight"
  },
  {
    "question": "What can reduce confusion in remote team communications?",
    "options": ["Ignoring messages", "Using only video chat", "Having clear communication norms and visual aids", "Removing access to previous records"],
    "answer": "Having clear communication norms and visual aids"
  },
  {
    "question": "What do digital records help prevent?",
    "options": ["Repeated questions and confusion", "Meetings that run long", "Text formatting issues", "Overuse of technical jargon"],
    "answer": "Repeated questions and confusion"
  }
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