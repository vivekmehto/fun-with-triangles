const angle = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-btn");
const outputPara = document.querySelector("#output-para");

function isTriangle() {
  if (angle[0].value === "") {
    outputPara.innerText = "Enter First Angle of a Triangle";
  } else if (angle[1].value === "") {
    outputPara.innerText = "Enter First Angle of a Triangle";
  } else if (angle[2].value === "") {
    outputPara.innerText = "Enter First Angle of a Triangle";
  } else {
    const sumOfAngles = calculateSum(
      angle[0].value,
      angle[1].value,
      angle[2].value
    );
    if (sumOfAngles === 180) {
      outputPara.innerText = "Yes Its a Triangle";
    } else {
      outputPara.innerText = "Given angles not form any triangle.";
    }
  }
}

function calculateSum(angle1, angle2, angle3) {
  const sum = Number(angle1) + Number(angle2) + Number(angle3);
  return sum;
}

checkButton.addEventListener("click", isTriangle);
