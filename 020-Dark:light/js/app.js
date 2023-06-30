const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", function () {
  // Hint: Add 'dark' class to body :))

  document.body.classList.toggle("dark");
  if ((document.body.className.includes = "dark")) {
    localStorage.setItem("them", "dark");
  } else {
    localStorage.setItem("them", "light");
  }
});

window.onload = function () {
  let localElem = localStorage.getItem("them");
  if (localElem === "dark") {
    document.body.classList.add("dark");
  }
};
