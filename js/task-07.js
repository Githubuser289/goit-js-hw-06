const inputElem = document.querySelector("#font-size-control"),
  spanElem = document.querySelector("#text");

function updateSize() {
  spanElem.style.fontSize = inputElem.value + "px";
}

updateSize();
inputElem.addEventListener("input", updateSize);
