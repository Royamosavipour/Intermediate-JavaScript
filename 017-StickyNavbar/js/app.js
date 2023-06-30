let mainNav = document.querySelector("#mainNav");
let logoElem = document.querySelector("img");

document.addEventListener("scroll", function () {

  if (document.documentElement.scrollTop > 0) {
    mainNav.classList.add("bg-black");
    mainNav.classList.add("txt-white");
    logoElem.style.height = "50px";
  }else{
    mainNav.classList.remove("bg-black")
    mainNav.classList.remove("txt-white")
    logoElem.style.height='84px'
  }
});
