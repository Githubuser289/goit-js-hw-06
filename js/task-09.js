function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color"),
  bodyElem = document.querySelector("body"),
  spanElem = document.querySelector(".color");
function changeColor() {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  spanElem.textContent = newColor;
}
changeColorBtn.addEventListener("click", changeColor);
