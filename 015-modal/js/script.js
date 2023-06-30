let buttonElem = document.querySelector("button");
let modalElem = document.querySelector(".modal-parent");
let spanElem = document.querySelector(".X");
let sectionElem = document.querySelector("section");

buttonElem.addEventListener("click", showModal);
spanElem.addEventListener("click", closeMdal);
document.body.addEventListener("keydown", hidModalEsc);

function showModal() {
  modalElem.style.display = "block";
  sectionElem.style.filter = "blur(10px)";
  buttonElem.blur();
}

function closeMdal() {
  modalElem.style.display = "none";
  sectionElem.style.filter = "blur(0px)";
}

function hidModalEsc(event) {
  if (event.keyCode === 27) {
    modalElem.style.display = "none";
    sectionElem.style.filter = "blur(0px)";
  }
}
