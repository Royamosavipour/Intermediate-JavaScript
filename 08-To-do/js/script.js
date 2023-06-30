let formElem = document.querySelector(".add");

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
});

let ulElement = document.querySelector(".todos");

function addNewItem(newTodo) {
  let liElem = document.createElement("li");
  liElem.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let spanElem = document.createElement("span");
  spanElem.innerHTML = newTodo;

  let iElem = document.createElement("i");
  iElem.className = "fa fa-trash-o delete";

  iElem.addEventListener("click", function (event) {
    event.target.parentElement.remove();
    
  });

  liElem.append(spanElem, iElem);
  ulElement.append(liElem);
  console.log(ulElement);
}

let inputElement = document.querySelector("input");
inputElement.addEventListener("keydown", function (event) {
  let newTodo = event.target.value.trim();
  if (event.keyCode === 13) {
    if (newTodo) {
      inputElement.value = "";
      addNewItem(newTodo);
    }
  }
});

// let $ = document;
// let inputElem = $.querySelector("input");
// let ulElem=$.querySelector('.todos')
// let formElem=$.querySelector('.add')

// formElem.addEventListener('submit',function(event){
//     event.preventDefault()
// })

// inputElem.addEventListener("keydown", function (event) {

//   let newTodoValue = event.target.value.trim();

//   if (event.keyCode === 13) {

//     if (newTodoValue) {
//         inputElem.value=''
//         addNewTodo(newTodoValue)
//     }
//   }
// });

// function addNewTodo(newTodoValue) {
//   let newTodoLi = $.createElement("li");
//   newTodoLi.className="list-group-item d-flex justify-content-between align-items-center"

//   let newTodospan = $.createElement("span");
//   newTodospan.innerHTML = newTodoValue;

//   let newTodoi = $.createElement("i");
//   newTodoi.className = "fa fa-trash-o delete";

//   newTodoLi.append(newTodospan,newTodoi)
//   ulElem.append(newTodoLi)

// }
