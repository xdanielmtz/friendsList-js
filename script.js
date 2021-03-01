var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  // Create the element
  var li = document.createElement("li");
  // Add content 
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  // Append to existing element
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function open() {
  modalEl.style.display = "block";
}

function handleClick() {
  // Use event delegation to handle when the user clicks "edit"
}

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);

peopleListEl.addEventListener("click", function (event) {
  event.preventDefault();
  if(event.target.matches("button")){
    open();
  }
})