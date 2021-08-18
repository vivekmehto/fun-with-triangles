const sides = document.querySelectorAll(".side-input");
const calculateButton = document.querySelector("#calculate-btn");
const outputDiv = document.querySelector("#output-div");

function calcSum(a, b) {
  return a * a + b * b;
}

function calculateHypotenuse() {
  const sumOfSquares = calcSum(Number(sides[0].value), Number(sides[1].value));
  const lengthOfHypo = Math.sqrt(sumOfSquares);
  outputDiv.innerText = "The Length of Hypotenuse is : " + lengthOfHypo;
}

calculateButton.addEventListener("click", calculateHypotenuse);
