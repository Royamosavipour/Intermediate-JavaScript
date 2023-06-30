let containerBox = document.querySelector(".search-input");
let inputElem = document.querySelector("input");
let listBox = document.querySelector(".autocom-box");

inputElem.addEventListener("keyup", function () {
  let newWord = inputElem.value;

  if (newWord) {
    containerBox.classList.add("active");

    let filterWord = suggestions.filter(function (word) {
      return word.toLowerCase().startsWith(newWord.toLowerCase())
      //   return word.toLowerCase().includes(newWord.toLowerCase());
    });
    suggestTionGeneraitor(filterWord);
  } else {
    containerBox.classList.remove("active");
  }
});

function suggestTionGeneraitor(wordarry) {
  let newLiWord = wordarry.map(function (word) {
    return "<li>" + word + "</li>";
  });

  let newItem;
  if (!newLiWord.length) {
    newItem = "<li>" + inputElem.value + "</li>";
  } else {
    newItem = newLiWord.join("");
  }

  listBox.innerHTML = newItem;
  select();
}

function select() {
  let allSelectWord = listBox.querySelectorAll("li");
  allSelectWord.forEach(function (word) {
    word.addEventListener("click", function (event) {
      inputElem.value = event.target.textContent;
      containerBox.classList.remove("active");
    });
  });
}
