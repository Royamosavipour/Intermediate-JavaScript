let userNameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let modal = document.querySelector(".modal");

function dataValidation() {
  let userNameValue = userNameInput.value;
  let passwordValue = passwordInput.value;
  if (userNameValue.length < 12 || passwordValue < 8) {
    modal.style.display = "inline";
    modal.innerHTML = "Informaiton is not valid";
    modal.style.background='black'
  } else {
    modal.style.background = "green";
    modal.style.display = "inline";
    modal.innerHTML = "Informaition has been successfully registered";
  }
  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
}
