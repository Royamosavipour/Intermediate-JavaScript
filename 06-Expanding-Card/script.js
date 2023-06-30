const panelElem = document.querySelectorAll(".panel");

panelElem.forEach(function (item) {
  
  item.addEventListener("click", function () {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panelElem.forEach(function (item) {
    item.classList.remove("active");
  });
}


