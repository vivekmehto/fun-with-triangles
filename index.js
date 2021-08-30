const angle = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");

function isTriangle() {
  if (angle[0].value === "") {
    outputDiv.innerText = "Enter First Angle of a Triangle";
  } else if (angle[1].value === "") {
    outputDiv.innerText = "Enter First Angle of a Triangle";
  } else if (angle[2].value === "") {
    outputDiv.innerText = "Enter First Angle of a Triangle";
  } else {
    const sumOfAngles = calculateSum(
      angle[0].value,
      angle[1].value,
      angle[2].value
    );
    if (sumOfAngles === 180) {
      outputDiv.innerText = "Yes Its a Triangle";
    } else {
      outputDiv.innerText = "Given angles not form any triangle.";
    }
  }
}

function calculateSum(angle1, angle2, angle3) {
  const sum = Number(angle1) + Number(angle2) + Number(angle3);
  return sum;
}

checkButton.addEventListener("click", isTriangle);
