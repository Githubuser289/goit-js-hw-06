const inputElem = document.querySelector("#validation-input");
function updateInputElem() {
  if (inputElem.value.length == inputElem.dataset.length) {
    if (inputElem.classList.contains("invalid")) {
      inputElem.classList.remove("invalid");
    }
    inputElem.classList.add("valid");
  } else {
    if (inputElem.classList.contains("valid")) {
      inputElem.classList.remove("valid");
    }
    inputElem.classList.add("invalid");
  }
}
inputElem.addEventListener("blur", updateInputElem);
