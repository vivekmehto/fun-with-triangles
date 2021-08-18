const quizForm = document.querySelector(".quiz-form");
const SubmitButton = document.querySelector("#submit-answer-btn");
const outputDiv = document.querySelector("#output-div");

const answers = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === answers[index]) {
      score++;
    }
    index++;
  }
  outputDiv.innerText = "Your Score is : " + score;
}

SubmitButton.addEventListener("click", calculateScore);
