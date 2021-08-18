const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaButton = document.querySelector("#calculate-area");
const outputDiv = document.querySelector("#output-div");

function calculateArea() {
  const area = (base.value * height.value) / 2;
  outputDiv.innerText = "Area of the Triangle is : " + area;
}

areaButton.addEventListener("click", calculateArea);
