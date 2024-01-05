const range = document.querySelector(".disclosure__range");
const imgContainer2 = document.querySelector(".disclosure__img-container--2");
const dragLine = document.querySelector(".disclosure__line");

range.addEventListener("input", handleRange)

function handleRange(){
  console.log(range.value)
  imgContainer2.style.inlineSize = range.value + "%"
  dragLine.style.left = range.value + "%"
}