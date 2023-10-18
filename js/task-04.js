var counterValue = 0;
const divCounter = document.querySelector("#counter"),
  decreaseValueBtn = divCounter.firstElementChild,
  increaseValueBtn = divCounter.lastElementChild,
  spanElem = document.querySelector("#value");
increaseValueBtn.addEventListener("click", () => {
  counterValue++;
  spanElem.textContent = counterValue.toString();
});
decreaseValueBtn.addEventListener("click", () => {
  if (counterValue >= 1) {
    counterValue--;
    spanElem.textContent = counterValue.toString();
  }
});
