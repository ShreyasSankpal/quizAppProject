// Sample quiz questions
const quizData = [
    {
      question: "What is the capital of India",
      options: ["Berlin", "Delhi", "Paris", "Rome"],
      correctAnswer: "Delhi"
    },
    {
      question: "Which planet is the Smallest Heading",
      options: ["h1", "h2", "h5", "h6"],
      correctAnswer: "h6"
    },
    {
      question: "By using which keyWord unique data will be select in SQL?",
      options: ["SELECT", "DISTINCT", "NEW", "COUNT"],
      correctAnswer: "DISTINCT"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Euro", "Dollar", "Pound Sterling"],
      correctAnswer: "Yen"
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["W", "H2O", "O", "H"],
      correctAnswer: "H2O"
    }
  ];
  
  
  
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit-btn");
  const resultContainer = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const question = quizData[currentQuestion];
    quizContainer.innerHTML = `
      <h2>${question.question}</h2>
      <ul>
        ${question.options
          .map(
            (option, index) => `
              <li>
                <input type="radio" name="option" value="${option}" id="option${index}" />
                <label for="option${index}">${option}</label>
              </li>
            `
          )
          .join("")}
      </ul>
    `;
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (!selectedOption) return;
  
    const userAnswer = selectedOption.value;
    if (userAnswer === quizData[currentQuestion].correctAnswer) {
      score++;
    }
  
    currentQuestion++;
    selectedOption.checked = false;
  
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.innerHTML = `<h3>Your Score: ${score} out of ${quizData.length}</h3>`;
  }
  
  displayQuestion();
  submitButton.addEventListener("click", checkAnswer);
  