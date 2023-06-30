let contMenu = document.getElementById("contextMenu");

document.body.addEventListener("contextmenu", contexHandeler);
document.body.addEventListener("click", clickContex);
document.body.addEventListener("keydown", hidContex);

function contexHandeler(event) {
  event.preventDefault();

  if (contMenu.style.display === "none") {
    contMenu.style.left = event.pageX + "px";
    contMenu.style.top = event.pageY + "px";

    contMenu.style.display = "block";
  } else {
    contMenu.style.left = event.pageX + "px";
    contMenu.style.top = event.pageY + "px";
    contMenu.style.display = "none";
  }

  console.log(event);
}

function clickContex() {
  contMenu.style.display = "none";
  
  
}

function hidContex(event){
    if (event.keyCode === 27) {
        contMenu.style.display = "none";
      }
}
