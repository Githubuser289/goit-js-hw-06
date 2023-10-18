const inputElem = document.querySelector("#name-input"),
  spanElem = document.querySelector("#name-output");
function updateName() {
  if (inputElem.value == "") {
    spanElem.textContent = "Anonymous";
  } else {
    spanElem.textContent = inputElem.value;
  }
}
inputElem.addEventListener("input", updateName);
