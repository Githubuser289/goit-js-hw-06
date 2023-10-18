const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulElem = document.querySelector("#ingredients");
var liList = [];
ingredients.forEach((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  liList.push(newItem);
});
ulElem.append(...liList);
