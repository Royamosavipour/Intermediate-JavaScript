let $ = document;

const firstValue = $.querySelector(".C");
const secondValue = $.querySelector(".F");
const converter = $.querySelector("#converter");
const convertButton = $.querySelector(".convertButton");
const resetButton = $.querySelector(".resetButton");
const changeButton = $.querySelector(".changeButton");
const result = $.querySelector(".result");

function convertto() {
  if (converter.value === "") {
    result.innerHTML = "Please Enter Number";
    result.style.color = "red";
  } else {
    if (firstValue.innerHTML === "°C") {
      let resultFirstValue = converter.value * 1.8 + 32;
      result.innerHTML = converter.value + "°C" + resultFirstValue + "°F";
      result.style.color = "rgb(193, 193, 193)";
    } else {
      let resultSecondValue = ((converter.value - 32) * 5) / 9;
      result.innerHTML =
        converter.value + "°F" + resultSecondValue.toFixed(2) + "°C";
      result.style.color = "rgb(193, 193, 193)";
    }
  }
}
function reset() {
  converter.value = "";
  result.innerHTML = "";
}

function change() {
  if (firstValue === "°C") {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    document.title = "SalzLearn| Js | °C to °F";
  } else {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    document.title = "SalzLearn| Js | °F to °C";
  }
}

convertButton.addEventListener("click", convertto);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", change);
