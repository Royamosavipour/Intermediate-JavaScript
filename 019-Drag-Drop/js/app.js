let addBtn = document.querySelector("#add_btn");
let modalElem = document.querySelector("#todo_form");
let closeModal = document.querySelector(".close-modal");
let todoInput = document.querySelector("#todo_input");
let todoSubmit = document.querySelector("#todo_submit");
let statusElem = document.querySelector(".status");
let spanclose = document.querySelector(".close");

addBtn.addEventListener("click", function () {
  modalElem.classList.add("active");
});

closeModal.addEventListener("click", function () {
  modalElem.classList.remove("active");
});

todoInput.addEventListener("keydown", function (event) {
  let newTodoValu = event.target.value.trim();
  if (event.keyCode === 13) {
    if (newTodoValu) {
      todoInput.value = "";
      addNewTodo(newTodoValu);
    }
  }
});



function addNewTodo(newTodoValu) {
  let newSpan = document.createElement("span");
  newSpan.className = "close";
  newSpan.innerHTML = "&times;";

  let newDiv = document.createElement("div");
  newDiv.className = "todo";
  newDiv.innerHTML = newTodoValu;

  newSpan.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  newDiv.append(newSpan);
  statusElem.append(newDiv);
}
