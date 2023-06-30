let $ = document;

let inputElem = $.querySelector("#input-field");
let saveElem = $.querySelector("#btn-save");
let deletElem = $.querySelector("#btn-icon");
let listElem = $.querySelector("#listed");
let colorBox = $.querySelectorAll(".color-box");

colorBox.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    let mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
  });
});

deletElem.addEventListener("click", function () {
  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
});

inputElem.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (inputElem.value) {
      generaitionNewNote();
    }
  }
});

saveElem.addEventListener("click", generaitionNewNote);

function generaitionNewNote() {
  let newdive = $.createElement("div");
  newdive.className = "card shadow-sm rounded";
  let colobg = inputElem.style.backgroundColor;
  newdive.style.backgroundColor = colobg;
  newdive.addEventListener("click", removeDive);

  let newP = $.createElement("p");
  newP.className = "card-text p-3";
  newP.innerHTML = inputElem.value;

  newdive.append(newP);
  listElem.append(newdive);

  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
}

function removeDive(event) {
  event.target.parentElement.remove();
}
