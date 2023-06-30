let $ = document;
const btnAdd = $.querySelector(".add-btn");
const title = $.querySelector("#title");
const author = $.querySelector("#author");
const year = $.querySelector("#year");
const table = $.querySelector("#book-list");
let books = [];

btnAdd.addEventListener("click", function (event) {
  event.preventDefault();
  title.focus();

  let inputtitle = title.value;
  let inputauthor = author.value;
  let inputyear = year.value;

  if (inputtitle === "" || inputauthor === "" || inputyear === "") {
    alert("please Enter Input");
  } else {
    let newbookArry = {
      id: books.length + 1,
      title: inputtitle,
      author: inputauthor,
      year: inputyear,
    };
    books.push(newbookArry);
    setInToLocalStorage(books);
  }
});

function setInToLocalStorage(allBook) {
  localStorage.setItem("books", JSON.stringify(allBook));
  makeEmptyInput();
  generationBook(allBook);
}

function makeEmptyInput() {
  title.value = "";
  author.value = "";
  year.value = "";
}
// creat New Eleman Book****************************

function generationBook(allBook) {
  table.innerHTML = "";
  allBook.forEach(function (book) {
    newTrBook = $.createElement("tr");

    let newThTittel = $.createElement("th");
    newThTittel.innerHTML = book.title;

    let newThAuthor = $.createElement("th");
    newThAuthor.innerHTML = book.author;

    let newThYear = $.createElement("th");
    newThYear.innerHTML = book.year;

    newTrBook.append(newThTittel, newThAuthor, newThYear);
    table.append(newTrBook);
  });
  console.log(newTrBook);
}

function getBookFromLocalStorage() {
  let localStoregBooks = localStorage.getItem("books");
  if (localStoregBooks) {
    books = JSON.parse(localStoregBooks);
    generationBook(books);
  }
}

window.addEventListener("load", getBookFromLocalStorage);
