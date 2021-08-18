const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaButton = document.querySelector("#calculate-area");
const outputDiv = document.querySelector("#output-div");

function calculateArea() {
  if (base.value === "") {
    outputDiv.innerText = "Enter Base of a Triangle";
  } else if (height.value === "") {
    outputDiv.innerText = "Enter Height of a Triangle";
  } else {
    const area = (base.value * height.value) / 2;
    outputDiv.innerText = "Area of the Triangle is : " + area;
  }
}

areaButton.addEventListener("click", calculateArea);
