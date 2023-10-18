const formElem = document.querySelector(".login-form"),
  submitBtn = document.querySelector("button"),
  elements = formElem.elements;

const processForm = (event) => {
  event.preventDefault();
  if (elements[0].value == "" || elements[1].value == "") {
    alert("All fields must be filled in!");
    return;
  }
  var object = {};
  object[elements[0].name] = elements[0].value;
  object[elements[1].name] = elements[1].value;
  console.log(object);
  formElem.reset();
}
formElem.addEventListener("submit", processForm);
