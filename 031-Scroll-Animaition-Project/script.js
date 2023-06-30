const item = document.querySelectorAll(".item");
window.addEventListener("scroll", showPictur);

function showPictur() {
  const sizeHeight = window.innerHeight/1.80;


  item.forEach((element) => {
    const picTop = element.getBoundingClientRect().top;
    if (picTop<sizeHeight) {
        element.classList.add('show')
    }else{
        element.classList.remove('show')
    }
  });
}
