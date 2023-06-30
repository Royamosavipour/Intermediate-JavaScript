const progres = document.getElementById("progres");
const next = document.getElementById("next");
const previus = document.getElementById("previus");
const circles = document.querySelectorAll(".circle");
let currentCircil = 1;

next.addEventListener("click", () => {
  currentCircil++;
  if (currentCircil > circles.length) {
    currentCircil = circles.length;
  }
  updat();
});
previus.addEventListener("click", () => {
  currentCircil--;
  if (currentCircil < 1) {
    currentCircil = 1;
  }
  updat();
});

function updat() {
  for (let [index, circle] of circles.entries()) {
    if (index < currentCircil) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  }
  const actives=document.querySelectorAll('.active')
  progres.style.width=((actives.length-1)/(circles.length-1)*100+'%')
  

  if (currentCircil === 1) {
    previus.disabled = true;
  } else if (currentCircil === circles.length) {
    next.disabled = true;
  }else{
    previus.disabled=false
    next.disabled=false

  }

}
