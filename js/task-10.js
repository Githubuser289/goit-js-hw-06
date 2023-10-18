function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divElem = document.createElement("div");
    divElem.style.width = 30 + i * 10 + "px";
    divElem.style.height = 30 + i * 10 + "px";
    divElem.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divElem);
    divBoxesList.push(divElem);
  }
}
function createBtnHandler() {
  if (inputElem.value == "") return;
  createBoxes(inputElem.value);
}
function destroyBoxes() {
  if (divBoxesList.length == 0) return;
  divBoxesList.forEach((elem) => elem.remove());
  divBoxesList = [];
}
const divContrls = document.querySelector("#controls"),
  inputElem = divContrls.firstElementChild,
  destroyBtn = divContrls.lastElementChild,
  createBtn = destroyBtn.previousElementSibling,
  divBoxes = document.querySelector("#boxes");
var divBoxesList = [];
createBtn.addEventListener("click", createBtnHandler);
destroyBtn.addEventListener("click", destroyBoxes);
