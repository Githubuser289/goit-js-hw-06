const ulElem = document.querySelector("#categories"),
  liElems = ulElem.children,
  noOfCats = liElems.length;
console.log("Number of categories: ", noOfCats);
for (let i = 0; i < noOfCats; i++) {
  const elemH2 = liElems[i].firstElementChild,
    elemUl = elemH2.nextElementSibling;
  console.log("Category: ", elemH2.textContent);
  console.log("Elements: ", elemUl.children.length);
}
